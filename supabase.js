/**
 * Run in Supabase SQL Editor:
 *
 * create table doubts (
 *   id uuid default gen_random_uuid() primary key,
 *   name text,
 *   topic text,
 *   content text not null,
 *   created_at timestamp default now()
 * );
 *
 * create table sticky_notes (
 *   id uuid default gen_random_uuid() primary key,
 *   content text not null,
 *   color text default 'yellow',
 *   created_at timestamp default now()
 * );
 *
 * alter table doubts enable row level security;
 * alter table sticky_notes enable row level security;
 *
 * create policy "Allow public read doubts" on doubts for select using (true);
 * create policy "Allow public insert doubts" on doubts for insert with check (true);
 * create policy "Allow public read notes" on sticky_notes for select using (true);
 * create policy "Allow public insert notes" on sticky_notes for insert with check (true);
 */

const SUPABASE_URL = 'https://owpvqyqektqqcsfeuteq.supabase.co';
const SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im93cHZxeXFla3RxcWNzZmV1dGVxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU2OTE2MDMsImV4cCI6MjA5MTI2NzYwM30.V5tP792vMgpIM9JwhAsZ74uch9lR0YkgUuqs18rgciM';

const supabaseConfigured =
  typeof SUPABASE_URL === 'string' &&
  SUPABASE_URL.indexOf('YOUR_SUPABASE') === -1 &&
  typeof SUPABASE_ANON_KEY === 'string' &&
  SUPABASE_ANON_KEY.indexOf('YOUR_SUPABASE') === -1;

let db = null;
if (supabaseConfigured && typeof supabase !== 'undefined' && supabase.createClient) {
  db = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}

function timeAgo(iso) {
  const t = new Date(iso).getTime();
  const s = Math.floor((Date.now() - t) / 1000);
  if (s < 60) return 'just now';
  if (s < 3600) return `${Math.floor(s / 60)} min ago`;
  if (s < 86400) return `${Math.floor(s / 3600)} hours ago`;
  return `${Math.floor(s / 86400)} days ago`;
}

async function postDoubt(name, topic, content) {
  if (!db) throw new Error('Supabase not configured');
  const { error } = await db.from('doubts').insert({ name: name || 'Anonymous', topic, content });
  if (error) throw error;
  loadDoubts();
}

async function loadDoubts() {
  if (!db) return [];
  const { data, error } = await db.from('doubts').select('*').order('created_at', { ascending: false });
  if (error) {
    console.error('Error loading doubts:', error);
    const feed = document.getElementById('doubt-feed');
    if (feed) feed.innerHTML = '<p class="doubt-card">Could not load doubts (check table and RLS).</p>';
    return [];
  }

  const feed = document.getElementById('doubt-feed');
  if (!feed) return data || [];

  if (!data || data.length === 0) {
    feed.innerHTML = '<p class="doubt-card">No doubts yet.</p>';
    return [];
  }

  feed.innerHTML = '';
  data.forEach((row) => feed.appendChild(renderDoubtCard(row, false)));
  return data;
}

function subscribeToDoubts() {
  if (!db) return () => {};
  const ch = db
    .channel('doubts_channel')
    .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'doubts' }, () => {
      loadDoubts();
    })
    .subscribe();
  return () => {
    db.removeChannel(ch);
  };
}

async function postStickyNote(content, color) {
  if (!db) throw new Error('Supabase not configured');
  const { error } = await db
    .from('sticky_notes')
    .insert([{ content, color: color || 'yellow' }]);
  if (error) throw error;
  loadStickyNotes();
}

async function loadStickyNotes() {
  if (!db) return [];
  const { data, error } = await db
    .from('sticky_notes')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(50);

  if (error) {
    console.error('Error loading notes:', error);
    const container = document.getElementById('sticky-notes-container');
    if (container) container.innerHTML = '<p>Could not load notes.</p>';
    return [];
  }

  const container = document.getElementById('sticky-notes-container');
  if (!container) return data || [];

  if (!data || data.length === 0) {
    container.innerHTML = '<p style="color: var(--text-tertiary); font-size: 0.85rem;">No notes yet.</p>';
    return [];
  }

  container.innerHTML = '';
  data.forEach((note) => container.appendChild(renderSticky(note)));
  return data;
}

function subscribeToStickyNotes() {
  if (!db) return () => {};
  const ch = db
    .channel('sticky_notes_channel')
    .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'sticky_notes' }, () => {
      loadStickyNotes();
    })
    .subscribe();
  return () => {
    db.removeChannel(ch);
  };
}

let doubtsSubscriptionStarted = false;
let stickySubscriptionStarted = false;

function observeSectionForReload(sectionId, loaderFn) {
  const section = document.getElementById(sectionId);
  if (!section || typeof IntersectionObserver === 'undefined') return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        loaderFn();
      });
    },
    { threshold: 0.1 }
  );
  observer.observe(section);
}

function topicColor(topic) {
  const m = { IF1: '#6B21A8', IF2: '#581C87', IF3: '#16A34A', IF4: '#CA8A04', IF5: '#EA580C', IF6: '#DC2626', IF7: '#7C3AED', IF8: '#0EA5E9', IF9: '#DB2777', General: '#6B7280' };
  return m[topic] || '#6B7280';
}

function renderDoubtCard(row, isNew) {
  const el = document.createElement('div');
  el.className = 'doubt-card' + (isNew ? ' new' : '');
  el.innerHTML = `
    <span class="topic-pill" style="background:${topicColor(row.topic)}22;color:${topicColor(row.topic)}">${escapeHtml(row.topic || 'General')}</span>
    <div><strong>${escapeHtml(row.name || 'Anonymous')}</strong></div>
    <div>${escapeHtml(row.content)}</div>
    <div style="font-size:0.8rem;color:#6B7280;margin-top:0.5rem">${timeAgo(row.created_at)}</div>
  `;
  return el;
}

function escapeHtml(s) {
  const d = document.createElement('div');
  d.textContent = s == null ? '' : String(s);
  return d.innerHTML;
}

function showToast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.hidden = false;
  clearTimeout(showToast._tm);
  showToast._tm = setTimeout(() => {
    t.hidden = true;
  }, 3200);
}

function initSupabaseUI() {
  const feed = document.getElementById('doubt-feed');
  const form = document.getElementById('doubt-form');
  const grid = document.getElementById('sticky-notes-container');
  const sform = document.getElementById('sticky-form');

  if (!db) {
    if (feed) feed.innerHTML = '<p class="doubt-card">Configure SUPABASE_URL and SUPABASE_ANON_KEY in supabase.js to use the doubt board.</p>';
    if (grid) grid.innerHTML = '<p>Configure Supabase to load sticky notes.</p>';
    return;
  }

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const fd = new FormData(form);
      const name = fd.get('name');
      const topic = fd.get('topic');
      const content = fd.get('content');
      try {
        await postDoubt(name, topic, content);
        form.reset();
        showToast('Posted!');
      } catch (err) {
        showToast('Could not post: ' + (err.message || err));
      }
    });
  }

  if (feed) {
    loadDoubts();
    observeSectionForReload('doubt-board', loadDoubts);
    if (!doubtsSubscriptionStarted) {
      subscribeToDoubts();
      doubtsSubscriptionStarted = true;
    }
  }

  if (sform && grid) {
    sform.addEventListener('submit', async (e) => {
      e.preventDefault();
      const fd = new FormData(sform);
      const content = fd.get('content');
      const color = fd.get('color') || 'yellow';
      try {
        await postStickyNote(content, color);
        sform.reset();
        sform.querySelector('input[name="color"][value="yellow"]').checked = true;
        showToast('Note pinned!');
      } catch (err) {
        showToast('Could not pin: ' + (err.message || err));
      }
    });
    loadStickyNotes();
    observeSectionForReload('sticky-notes', loadStickyNotes);
    if (!stickySubscriptionStarted) {
      subscribeToStickyNotes();
      stickySubscriptionStarted = true;
    }
  }
}

function renderSticky(row) {
  const el = document.createElement('div');
  const rot = (Math.random() * 4 - 2).toFixed(1);
  el.className = `sticky-note ${row.color || 'yellow'} pop-in`;
  el.style.transform = `rotate(${rot}deg)`;
  el.innerHTML = `
    <div>${escapeHtml(row.content)}</div>
    <span class="sticky-time">${timeAgo(row.created_at)}</span>
  `;
  return el;
}

window.initSupabaseUI = initSupabaseUI;
