// api/chat.js
// RAG-enabled chatbot using your actual course materials
// Keyword search finds relevant slides, sends them to Groq as context

import { readFileSync } from 'fs';
import { join } from 'path';

// Load the keyword index built from your PPTXs and PDF
let COURSE_INDEX = null;

function loadIndex() {
  if (COURSE_INDEX) return COURSE_INDEX;
  try {
    const indexPath = join(process.cwd(), 'data', 'keyword_index.json');
    COURSE_INDEX = JSON.parse(readFileSync(indexPath, 'utf8'));
    return COURSE_INDEX;
  } catch (e) {
    console.error('Could not load course index:', e.message);
    return [];
  }
}

// Find most relevant chunks for a query
function findRelevantChunks(query, topK = 4) {
  const index = loadIndex();
  if (!index.length) return [];

  const queryLower = query.toLowerCase();

  // Score each chunk by keyword overlap with query
  const scored = index.map(chunk => {
    let score = 0;

    // Keyword matches
    for (const kw of chunk.keywords) {
      if (queryLower.includes(kw.toLowerCase())) {
        score += 2;
      }
    }

    // Direct text matches (word by word)
    const queryWords = queryLower.split(/\s+/).filter(w => w.length > 3);
    for (const word of queryWords) {
      if (chunk.text.toLowerCase().includes(word)) {
        score += 1;
      }
    }

    // Boost lecture slides over homework
    if (chunk.source.startsWith('IF')) score += 1;

    return { ...chunk, score };
  });

  // Return top K chunks sorted by score
  return scored
    .filter(c => c.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, topK);
}

const BASE_SYSTEM_PROMPT = `You are a strict International Finance tutor for SKEMA Business School students preparing for their final exam on April 16, 2026.

EXAM FORMAT:
- Part I: 8 MCQs (+1 correct, -0.25 wrong, 0 blank)
- Part II: 7 Open Problems (numerical, show all working)
- Part III: 10 Open Questions (1.5 pts each)
- Total: 30 points | 2 hours | Closed book

CRITICAL EXAM TRAPS:
1. Appreciation % ≠ Depreciation % — always different numbers
2. "None of the above" correct 2-4 times per exam
3. FDI goes in Financial Account NOT Current Account
4. Dispersed shareholding = WEAKNESS, not a remedy
5. Short futures LOSES when price RISES
6. Implied volatility = ONLY unobservable option variable
7. Impossible Trinity: fixed rates + free capital = no independent policy

KEY FORMULAS:
- % change base = (New-Old)/Old × 100
- IRP: F = S × (1+i_d)/(1+i_f)
- PPP: E[S_t] = S_0 × (1+π_d)/(1+π_f)
- CIA Profit = (Amount÷S)×(1+i_f)×F - Amount×(1+i_d)
- Long futures: (S_T - F_0) × size
- Short futures: (F_0 - S_T) × size
- Call payoff: max(0, S_T - X)
- Put payoff: max(0, X - S_T)
- Strike from put: X = Spot + Put value

PAST EXAM ANSWERS:
- 2025 Q8 triangular arbitrage profit: $3,128.59
- 2025 Q3 i_USD: 5.05%
- 2025 Q5 PPP: E[S]=1.1769 CAD/USD
- 2025 Q9 options hedge net: $1,090,111
- 2022 CIA profit: $21,964.29

YOUR RULES:
1. Only answer International Finance questions
2. Always show step-by-step working for calculations
3. Always write the formula before applying numbers
4. Keep answers concise — max 4 paragraphs
5. Flag if something is a common exam trap
6. Never give advice outside finance`;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { messages } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'Invalid messages format' });
    }

    // Get the latest user message for RAG search
    const lastUserMsg = [...messages].reverse().find(m => m.role === 'user');
    const userQuery = lastUserMsg ? lastUserMsg.content : '';

    // Find relevant course material chunks
    const relevantChunks = findRelevantChunks(userQuery, 4);

    // Build context from relevant chunks
    let contextBlock = '';
    if (relevantChunks.length > 0) {
      contextBlock = '\n\nRELEVANT COURSE MATERIAL FROM YOUR SLIDES:\n' +
        relevantChunks.map(c =>
          `[${c.source}]\n${c.text.slice(0, 500)}`
        ).join('\n\n---\n\n');
    }

    // Build the full system prompt with RAG context
    const systemPrompt = BASE_SYSTEM_PROMPT + contextBlock;

    // Prepare messages for Groq
    const groqMessages = [
      { role: 'system', content: systemPrompt },
      ...messages.filter(m => m.role !== 'system')
    ];

    const groqRes = await fetch(
      'https://api.groq.com/openai/v1/chat/completions',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.GROQ_API_KEY}`
        },
        body: JSON.stringify({
          model: 'llama-3.3-70b-versatile',
          messages: groqMessages,
          max_tokens: 500,
          temperature: 0.3
        })
      }
    );

    const text = await groqRes.text();

    if (!groqRes.ok) {
      console.error('Groq error:', text);
      return res.status(500).json({
        error: 'Groq API error',
        status: groqRes.status,
        body: text
      });
    }

    const data = JSON.parse(text);

    if (!data.choices || !data.choices[0]) {
      return res.status(500).json({
        error: 'Unexpected response',
        data: data
      });
    }

    return res.status(200).json(data);

  } catch (err) {
    console.error('Handler error:', err);
    return res.status(500).json({ error: err.message });
  }
}
