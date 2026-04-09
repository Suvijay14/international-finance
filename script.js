/**
 * International Finance Study Platform — content sourced from
 * MASTER_REFERENCE.md and NUMERICAL_APPENDIX.md in this project.
 * (COMPLETE_MASTER_REFERENCE.md was not present.)
 */

const LANG = {
  en: {
    'nav.grades': 'Grades',
    'nav.doubt': 'Doubt Board',
    'nav.traps': 'Traps',
    'nav.mock': 'Mock Exam',
    'nav.back': '← Back to Topics',
    'hero.eyebrow': 'SKEMA Business School',
    'hero.title': 'Pass International Finance',
    'hero.subtitle': 'Study guide for the April 16 exam',
    'hero.exam.info': '4 MCQ + 18 Open Questions · 2 hours · Closed book',
    'hero.choose': 'Choose a topic to begin',
    'countdown.days': 'Days',
    'countdown.hours': 'Hours',
    'countdown.minutes': 'Minutes',
    'countdown.seconds': 'Seconds',
    'grade.title': 'How Many Marks Do You Need?',
    'grade.midterm.label': 'Midterm (out of 20) — 40% weight',
    'grade.online.label': 'Online Course (out of 10) — 10% weight',
    'grade.final.label': 'Final Exam (out of 40) — 50% weight',
    'grade.predicted': 'Predicted score',
    'grade.passing': 'Passing',
    'grade.failing': 'Failing',
    'grade.borderline': 'Borderline',
    'grade.need': 'You need at least',
    'grade.on.final': 'on the final to pass',
    'grade.safe': 'You pass even with 0 on the final',
    'grade.impossible': 'Maximum possible score is',
    'level.1.title': 'Level 1 — Understand It',
    'level.1.sub': 'Read this. No numbers yet.',
    'level.2.title': 'Level 2 — Key Formulas',
    'level.2.sub': 'Learn the mechanics.',
    'level.3.title': 'Level 3 — Guided Calculation',
    'level.3.sub': 'Try the math. Hints available.',
    'level.4.title': 'Level 4 — Exam Simulation',
    'level.4.sub': 'Real exam conditions. No hints.',
    'level.5.title': 'Level 5 — Boss Level',
    'level.5.sub': 'This is what the real exam looks like.',
    'btn.check': 'Check My Answer',
    'btn.submit': 'Submit',
    'btn.start': 'Start Learning',
    'btn.hint': 'Show Hint',
    'feedback.strong': 'Strong answer. Key concepts covered.',
    'feedback.partial': 'Good attempt. You missed some key points.',
    'feedback.weak': 'Review needed. Here is what to include:',
    'feedback.model': 'Model Answer',
    'feedback.keywords': 'Key terms:',
    'feedback.correct': 'Correct',
    'feedback.incorrect': 'Incorrect',
    'terms.title': 'Key Terms',
    'doubt.title': 'Class Doubt Board',
    'doubt.subtitle': 'Ask a question or share something useful. The whole class sees this.',
    'doubt.name': 'Your name (optional)',
    'doubt.topic': 'Topic',
    'doubt.question': 'Your question or insight',
    'doubt.post': 'Post',
    'doubt.anonymous': 'Anonymous',
    'doubt.general': 'General',
    'formula.title': 'Formula Sheet',
    'mastered': 'Topic Mastered',
    'score': 'Score',
    'flash.title': 'Flashcard Deck',
    'flash.sub': 'Work through these before tackling formulas.',
    'flash.question': 'Question',
    'flash.reveal': 'Click to reveal',
    'flash.still': 'Still Learning',
    'flash.got': 'Got it',
    'flash.restart': 'Restart Deck',
    'flash.complete': 'Deck complete. Great work.',
    'trap.score': 'Score',
    'mock.model': 'Model answers',
  },
  fr: {
    'nav.grades': 'Notes',
    'nav.doubt': 'Questions',
    'nav.traps': 'Pièges',
    'nav.mock': 'Examen blanc',
    'nav.back': '← Retour aux sujets',
    'hero.eyebrow': 'SKEMA Business School',
    'hero.title': 'Réussir Finance Internationale',
    'hero.subtitle': "Guide d'étude pour l'examen du 16 avril",
    'hero.exam.info': '4 QCM + 18 questions ouvertes · 2 heures · Sans documents',
    'hero.choose': 'Choisissez un sujet pour commencer',
    'countdown.days': 'Jours',
    'countdown.hours': 'Heures',
    'countdown.minutes': 'Minutes',
    'countdown.seconds': 'Secondes',
    'grade.title': 'De combien de points avez-vous besoin ?',
    'grade.midterm.label': 'Partiel (sur 20) — pondération 40%',
    'grade.online.label': 'Cours en ligne (sur 10) — pondération 10%',
    'grade.final.label': 'Examen final (sur 40) — pondération 50%',
    'grade.predicted': 'Score prédit',
    'grade.passing': 'Admis',
    'grade.failing': 'Refusé',
    'grade.borderline': 'Limite',
    'grade.need': "Vous avez besoin d'au moins",
    'grade.on.final': "à l'examen final pour réussir",
    'grade.safe': "Vous réussissez même avec 0 à l'examen final",
    'grade.impossible': 'Score maximum possible :',
    'level.1.title': 'Niveau 1 — Comprendre',
    'level.1.sub': 'Lisez ceci. Pas encore de chiffres.',
    'level.2.title': 'Niveau 2 — Formules clés',
    'level.2.sub': 'Apprenez les mécanismes.',
    'level.3.title': 'Niveau 3 — Calcul guidé',
    'level.3.sub': 'Essayez les maths. Indices disponibles.',
    'level.4.title': "Niveau 4 — Simulation d'examen",
    'level.4.sub': "Conditions d'examen réelles. Sans indices.",
    'level.5.title': 'Niveau 5 — Boss Final',
    'level.5.sub': "Voici à quoi ressemble le vrai examen.",
    'btn.check': 'Vérifier ma réponse',
    'btn.submit': 'Soumettre',
    'btn.start': 'Commencer',
    'btn.hint': 'Afficher un indice',
    'feedback.strong': 'Excellente réponse. Concepts clés couverts.',
    'feedback.partial': 'Bon essai. Vous avez manqué quelques points clés.',
    'feedback.weak': "Révision nécessaire. Voici ce qu'il faut inclure :",
    'feedback.model': 'Réponse modèle',
    'feedback.keywords': 'Termes clés :',
    'feedback.correct': 'Correct',
    'feedback.incorrect': 'Pas tout à fait',
    'terms.title': 'Termes clés',
    'doubt.title': 'Questions de la classe',
    'doubt.subtitle': "Posez une question ou partagez quelque chose d'utile. Toute la classe voit ceci.",
    'doubt.name': 'Votre nom (facultatif)',
    'doubt.topic': 'Sujet',
    'doubt.question': 'Votre question ou remarque',
    'doubt.post': 'Publier',
    'doubt.anonymous': 'Anonyme',
    'doubt.general': 'Général',
    'formula.title': 'Formules',
    'mastered': 'Sujet maîtrisé',
    'score': 'Score',
    'flash.title': 'Deck de cartes mémoire',
    'flash.sub': 'Travaillez cela avant les formules.',
    'flash.question': 'Question',
    'flash.reveal': 'Cliquez pour révéler',
    'flash.still': 'Encore en apprentissage',
    'flash.got': 'Maîtrisée',
    'flash.restart': 'Recommencer le deck',
    'flash.complete': 'Deck terminé. Excellent.',
    'trap.score': 'Score',
    'mock.model': 'Réponses modèles',
  },
  no: {
    'nav.grades': 'Karakterer',
    'nav.doubt': 'Spørsmål',
    'nav.traps': 'Feller',
    'nav.mock': 'Prøveeksamen',
    'nav.back': '← Tilbake til emner',
    'hero.eyebrow': 'SKEMA Business School',
    'hero.title': 'Bestå Internasjonal Finans',
    'hero.subtitle': 'Studieveiledning for eksamen 16. april',
    'hero.exam.info': '4 MCQ + 18 åpne spørsmål · 2 timer · Uten hjelpemidler',
    'hero.choose': 'Velg et emne for å begynne',
    'countdown.days': 'Dager',
    'countdown.hours': 'Timer',
    'countdown.minutes': 'Minutter',
    'countdown.seconds': 'Sekunder',
    'grade.title': 'Hvor mange poeng trenger du?',
    'grade.predicted': 'Forventet score',
    'grade.passing': 'Bestått',
    'grade.failing': 'Ikke bestått',
    'grade.borderline': 'På grensen',
    'grade.need': 'Du trenger minst',
    'grade.on.final': 'på slutteksamen for å bestå',
    'grade.safe': 'Du består selv med 0 på slutteksamen',
    'grade.impossible': 'Maksimal mulig score er',
    'level.1.title': 'Nivå 1 — Forstå det',
    'level.1.sub': 'Les dette. Ingen tall ennå.',
    'level.fc.title': 'Flashkort',
    'level.fc.sub': 'Jobb gjennom disse før formlene. Klikk for å snu.',
    'level.2.title': 'Nivå 2 — Nøkkelformler',
    'level.2.sub': 'Lær mekanismene.',
    'level.3.title': 'Nivå 3 — Veiledet beregning',
    'level.3.sub': 'Prøv matematikken. Hint tilgjengelig.',
    'level.4.title': 'Nivå 4 — Eksamensimulering',
    'level.4.sub': 'Virkelige eksamensforhold. Ingen hint.',
    'level.5.title': 'Nivå 5 — Boss-nivå',
    'level.5.sub': 'Slik ser den virkelige eksamen ut.',
    'btn.check': 'Sjekk svaret mitt',
    'btn.reveal': 'Vis svaret',
    'btn.hint': 'Vis hint',
    'btn.submit': 'Send inn',
    'btn.start': 'Begynn å lære',
    'btn.next': 'Neste nivå',
    'btn.try': 'Prøv igjen',
    'feedback.strong': 'Sterkt svar. Nøkkelbegreper dekket.',
    'feedback.partial': 'Godt forsøk. Du manglet noen poeng.',
    'feedback.weak': 'Trenger gjennomgang. Her er hva du bør inkludere:',
    'feedback.model': 'Modellsvar',
    'feedback.keywords': 'Nøkkelord',
    'feedback.matched': 'funnet',
    'feedback.missing': 'mangler',
    'feedback.correct': 'Riktig',
    'feedback.incorrect': 'Ikke helt',
    'fc.question': 'Spørsmål',
    'fc.answer': 'Svar',
    'fc.tap': 'Klikk for å avsløre',
    'fc.example': 'Eksempel:',
    'fc.got': 'Forstått',
    'fc.again': 'Lærer fortsatt',
    'fc.mastered': 'mestret',
    'fc.left': 'gjenstår',
    'fc.remaining': 'gjenstår',
    'fc.complete': 'Kortstokk fullført',
    'fc.cards.mastered': 'kort mestret',
    'fc.restart': 'Start på nytt',
    'fc.type.definition': 'Definisjon',
    'fc.type.formula': 'Formel',
    'fc.type.application': 'Anvendelse',
    'trap.title': 'Felletrener',
    'trap.sub': 'Drill de 7 vanligste eksamensfellene. Negativ poenggiving: +1 / -0.25 / 0.',
    'trap.score': 'Score',
    'trap.correct': 'Riktig',
    'trap.wrong': 'Feil',
    'trap.blank': 'Hoppet over',
    'trap.skip': 'Hopp over (0 poeng)',
    'trap.next': 'Neste spørsmål',
    'trap.finish': 'Se resultater',
    'trap.warning': 'Felladvarsel:',
    'trap.rule': 'Regel:',
    'mock.title': 'Prøveslutteksamen',
    'mock.sub': 'Matcher nøyaktig 2025-formatet. 30 poeng. 2 timer.',
    'mock.start': 'Start eksamen',
    'mock.timer': 'Gjenstående tid',
    'mock.part1': 'Del I — MCQ',
    'mock.part2': 'Del II — Problemer',
    'mock.part3': 'Del III — Spørsmål',
    'mock.submit.part': 'Send inn del',
    'mock.results': 'Se resultater',
    'mock.score.total': 'Total score',
    'mock.score.pass': 'Du bestod!',
    'mock.score.fail': 'Fortsett å studere.',
    'mock.model.answers': 'Vis modellsvar',
    'doubt.title': 'Klassens spørsmålstavle',
    'doubt.subtitle': 'Still et spørsmål eller del noe nyttig. Hele klassen ser dette.',
    'doubt.name': 'Ditt navn (valgfritt)',
    'doubt.topic': 'Emne',
    'doubt.question': 'Ditt spørsmål eller innsikt',
    'doubt.post': 'Publiser',
    'doubt.anonymous': 'Anonym',
    'doubt.general': 'Generelt',
    'doubt.empty': 'Ingen innlegg ennå.',
    'priority.high': 'Høy prioritet',
    'priority.medium': 'Middels prioritet',
    'given': 'Gitt',
    'required': 'Spurt',
    'solution': 'Løsning',
    'worked.example': 'Arbeidet eksempel',
    'quiz': 'Quiz',
    'case.study': 'Casestudie',
    'score': 'Score',
    'mastered': 'Emne mestret',
  },
};

let currentLang = 'en';
function tr(key) {
  return LANG[currentLang][key] || LANG.en[key] || key;
}

function applyStaticTranslations() {
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    el.textContent = tr(el.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    el.setAttribute('placeholder', tr(el.dataset.i18nPlaceholder));
  });
}

function switchLang(lang) {
  currentLang = LANG[lang] ? lang : 'en';
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
  });
  const norwegianGreeting = document.getElementById('norwegian-greeting');
  if (norwegianGreeting) {
    norwegianGreeting.style.display = currentLang === 'no' ? 'block' : 'none';
  }
  applyStaticTranslations();
  rendered.clear();
  renderTopicCards();
  renderView(window.location.hash || '#home', { skipFade: true });
  initGradeCalc();
  renderTrapTrainer();
  renderMockExam();
  localStorage.setItem('if_lang', currentLang);
}

function checkKeywords(userAnswer, keywords) {
  const answer = userAnswer.toLowerCase();
  const matched = keywords.filter((kw) => answer.includes(kw.toLowerCase()));
  const score = Math.round((matched.length / keywords.length) * 100);
  const missing = keywords.filter((kw) => !answer.includes(kw.toLowerCase()));
  return { score, matched, missing };
}

function getScoreLevel(score) {
  if (score >= 80) return { level: 'strong', color: '#34D399' };
  if (score >= 50) return { level: 'partial', color: '#FBBF24' };
  return { level: 'weak', color: '#F87171' };
}

function animateScoreBar(barEl, score) {
  if (!barEl) return;
  barEl.style.width = '0%';
  setTimeout(() => {
    barEl.style.transition = 'width 0.6s ease-out';
    barEl.style.width = score + '%';
  }, 100);
}

function handleL2AnswerCheck(topicId, questionIndex, answerText) {
  const t = TOPICS[topicId];
  if (!t || !t.level2.questions || !t.level2.questions[questionIndex]) return;
  const q = t.level2.questions[questionIndex];
  const ans = String(answerText || '').trim();
  const wordCount = ans.split(/\s+/).filter(Boolean).length;
  const el = document.getElementById(`${topicId}-l2-result-${questionIndex}`);
  if (!el) return;
  el.hidden = false;
  if (wordCount < 3) {
    el.innerHTML =
      '<p class="l2-hint-msg" style="color:#CA8A04">Please write at least 3 words before checking your answer.</p>';
    return;
  }
  const { score, missing } = checkKeywords(ans, q.keywords);
  const lvl = getScoreLevel(score);
  const barId = `${topicId}-l2-bar-${questionIndex}`;
  el.innerHTML = `
        <div class="score-bar-wrap"><div class="score-bar" id="${barId}" style="background:${lvl.color};width:0%"></div></div>
        <p style="color:${lvl.color}">${tr('score') || 'Score'}: ${score}%</p>
        <p>${score >= 80 ? tr('feedback.strong') : score >= 50 ? `${tr('feedback.partial')} ${missing.join(', ')}` : tr('feedback.weak')}</p>
        <p>${tr('feedback.model')}: ${escapeHtml(q.modelAnswer)}</p>
        <p>${tr('feedback.keywords')} ${q.keywords.map((k) => `<span class="kw-pill">${escapeHtml(k)}</span>`).join(' ')}</p>`;
  animateScoreBar(document.getElementById(barId), score);
}

function checkNumerical(userAnswer, correctAnswer, tolerancePercent = 2) {
  const user = parseFloat(String(userAnswer).replace(/[,$%]/g, ''));
  const correct = parseFloat(correctAnswer);
  if (isNaN(user)) return { correct: false, message: 'Please enter a number' };
  const diff = Math.abs((user - correct) / correct) * 100;
  if (diff <= tolerancePercent) {
    return { correct: true, message: `${tr('feedback.correct')} (${correct.toLocaleString()})` };
  }
  return {
    correct: false,
    message: `${tr('feedback.incorrect')}. Your answer: ${user.toLocaleString()}. ${tr('feedback.correct')}: ${correct.toLocaleString()}`,
  };
}

function calculateGrade(midterm, online, final) {
  const midtermPct = (midterm / 20) * 40;
  const onlinePct = (online / 10) * 10;
  const finalPct = (final / 40) * 50;
  const total = midtermPct + onlinePct + finalPct;
  return Math.round(total * 10) / 10;
}

function minFinalNeeded(midterm, online) {
  const currentScore = (midterm / 20) * 40 + (online / 10) * 10;
  const needed = 50 - currentScore;
  if (needed <= 0) return 0;
  const finalNeeded = (needed / 50) * 40;
  if (finalNeeded > 40) return null;
  return Math.ceil(finalNeeded * 10) / 10;
}

function maxPossiblePercent(midterm, online) {
  return (midterm / 20) * 40 + (online / 10) * 10 + 50;
}

const TOPICS = {};

TOPICS.IF1 = {
  id: 'IF1',
  title: 'Globalization and the Multinational Firm',
  tagline: 'Foreign exchange risk, political risk, market imperfections, and expanded opportunities.',
  level1: {
    explanation: `International Finance is about doing business across countries. The moment money crosses a border, you face new risks: exchange rates can move against you, governments can change the rules, and markets don't work perfectly. But there are also huge opportunities — firms can produce where it's cheapest, raise money where it's cheapest, and sell everywhere.`,
    analogy: `Apple makes iPhones in China and sells them in Europe. If the euro weakens against the dollar, Apple's European sales revenue is worth LESS in dollars even if unit sales are unchanged — that is foreign exchange risk in a multinational setting.`,
    historicalExample: {
      title: 'Toyota shares and yen depreciation',
      story: `You invest $1,000 in Toyota shares when $1 = ¥100 (¥100,000 in shares). One year later shares are up 10% to ¥110,000, but yen has depreciated to $1 = ¥120. Dollar value: ¥110,000 / 120 = $916.67 — you LOST money despite the share price rising!`,
    },
    keyTerms: [
      { term: 'Foreign Exchange Risk', definition: 'Exchange rates fluctuate; profits in a foreign currency can shrink when converted to home currency.' },
      { term: 'Political Risk', definition: 'Sovereign countries can change laws, impose taxes, or expropriate foreign assets with limited recourse.' },
      { term: 'Market Imperfections', definition: 'Legal restrictions, transaction costs, information asymmetry, and discriminatory taxation — this is why MNCs exist.' },
      { term: 'MNC', definition: 'A firm incorporated in one country with production or sales in others; benefits include scale and access to labor and capital.' },
      { term: 'Agency problem', definition: 'Managers may act in their own interest rather than shareholders; corporate governance regulates this relationship.' },
    ],
    mcqs: [
      {
        question: 'Which dimension captures that legal restrictions and transaction costs prevent perfect markets?',
        options: ['Expanded opportunity set', 'Political risk', 'Market imperfections', 'Foreign exchange risk only'],
        correct: 2,
        explanation: 'Market imperfections — legal frictions and costs — explain why multinational firms add value versus pure arbitrage.',
      },
      {
        question: 'In the Toyota example, the investor lost in dollars mainly because:',
        options: ['Share prices fell', 'The yen appreciated against the dollar', 'The yen depreciated against the dollar', 'Toyota stopped paying dividends'],
        correct: 2,
        explanation: 'Yen depreciation (more yen per dollar) reduced the dollar value of yen-denominated gains.',
      },
    ],
  },
  level2: {
    formulas: [
      {
        formula: 'Goal: maximize shareholder wealth while managing FX risk, political risk, and market imperfections',
        variables: [
          { symbol: 'Shareholder wealth', meaning: 'Long-term value to owners', color: '#6B21A8' },
          { symbol: 'FX / political / imperfections', meaning: 'Cross-border risks and frictions from the course framework', color: '#16A34A' },
        ],
      },
      {
        formula: 'Return ($) ≈ local return + effect of currency movement (FX converts your foreign position)',
        variables: [
          { symbol: 'Local return', meaning: 'Return in foreign currency terms on the asset', color: '#CA8A04' },
          { symbol: 'FX movement', meaning: 'Change in the exchange rate when you convert to dollars', color: '#EA580C' },
        ],
      },
    ],
    workedExample: {
      title: 'Toyota share investment (from course)',
      given: ['Initial: $1,000 at $1 = ¥100 → ¥100,000 invested', 'Share value up 10% → ¥110,000', 'New rate: $1 = ¥120'],
      steps: [
        { desc: 'Value in yen after gain', calc: '¥100,000 × 1.10', result: '¥110,000' },
        { desc: 'Convert to dollars at new rate', calc: '¥110,000 ÷ 120', result: '$916.67' },
      ],
      finalAnswer: '$916.67 — a LOSS in dollars despite the share price rising, due to yen depreciation.',
      insight: 'Currency depreciation can wipe out investment gains when you translate back to dollars.',
    },
    questions: [
      {
        question: 'Explain the four key dimensions that make international finance different from domestic finance.',
        keywords: ['foreign exchange', 'political risk', 'market imperfections', 'expanded', 'opportunity', 'sovereign', 'borders'],
        modelAnswer: `Four dimensions from the course: (1) Foreign exchange risk — rates move and affect converted profits. (2) Political risk — governments can change rules or expropriate assets. (3) Market imperfections — legal and tax frictions and information asymmetry; this is why MNCs exist. (4) Expanded opportunity set — firms can locate production, raise funds, and sell globally.`,
      },
      {
        question: 'What is the agency problem and why does corporate governance matter for international firms?',
        keywords: ['manager', 'shareholder', 'conflict', 'governance', 'monitor', 'interest', 'perquisites'],
        modelAnswer: `The agency problem is the conflict between managers (agents) and shareholders (principals). Managers may consume perks, pursue pet projects, or entrench themselves. Corporate governance is the legal and financial framework regulating that relationship. In international firms, distance and complexity can worsen monitoring — governance mechanisms (board oversight, incentives, disclosure) matter even more.`,
      },
    ],
  },
  level3: {
    problem: {
      title: 'Dollar value after yen move',
      scenario: 'Same structure as the Toyota classroom example.',
      given: { headers: ['Item', 'Value'], rows: [['Initial investment', '$1,000 at $1=¥100'], ['Holding after 1 year', '¥110,000 (10% gain on shares)'], ['New FX', '$1 = ¥120']] },
      required: 'Compute the dollar value of the position after conversion.',
      hints: [
        'You already have ¥110,000 — no further share math needed.',
        'Convert using: dollars = yen / (yen per dollar).',
        '¥110,000 / 120 = 916.67',
      ],
      answer: 916.67,
      solution: {
        steps: [
          { desc: 'Convert yen to dollars', calc: '¥110,000 / ¥120 per $', result: '$916.67' },
        ],
        finalAnswer: '$916.67',
        insight: 'Despite a 10% gain in yen, the weaker yen (depreciation) hurts the dollar return.',
      },
    },
  },
  level4: {
    openQuestion: {
      question: 'Discuss market imperfections using the Nestlé bearer vs registered share example from the course.',
      keywords: ['nestlé', 'bearer', 'registered', 'restrictions', 'price', 'imperfections', 'equalize'],
      modelAnswer: `Nestlé had bearer shares (foreigners) and registered shares (Swiss) with a price spread because supply to foreigners was restricted. When restrictions were lifted (November 1988), the spread collapsed. This shows how market segmentation creates price distortions; removing the imperfection lets prices equalize.`,
    },
    calcQuestion: {
      question: 'Initial $1,000 invested in yen assets when $1=¥100. After one year the position is ¥110,000 and $1=¥110. What is the dollar value?',
      answer: 1000,
      solution: {
        steps: [{ desc: 'Convert', calc: '¥110,000 / 110', result: '$1,000' }],
        finalAnswer: '$1,000',
        insight: 'Here the yen amount rose 10% and the yen strengthened so the dollar value is unchanged.',
      },
    },
  },
  level5: {
    caseStudy: {
      title: 'Memo — ABC Corp treasury',
      scenario: `Your firm reports results in dollars but earns part of its profit in euros. Management asks whether "good operating news in Europe" always means higher dollar profits.`,
      partA: {
        question: 'Explain qualitatively how FX can offset operating gains when consolidating to dollars.',
        keywords: ['translation', 'euro', 'dollar', 'exchange', 'risk', 'revenue', 'convert'],
        modelAnswer: `Operating gains in euros must be converted at the spot rate. If the euro weakens versus the dollar, each euro of profit becomes fewer dollars — so shareholder reporting in dollars can fall even when local-currency operations improved.`,
      },
      partB: {
        question: 'Initial €1,000 profit; spot was $1.10/€; new spot is $1.00/€. What is the dollar change in reported profit from FX alone?',
        answer: -100,
        solution: {
          steps: [
            { desc: 'At old spot', calc: '€1,000 × 1.10', result: '$1,100' },
            { desc: 'At new spot', calc: '€1,000 × 1.00', result: '$1,000' },
          ],
          finalAnswer: 'Change = −$100 from FX movement',
        },
      },
      partC: {
        question: 'Name two course reasons why firms still pursue international operations despite FX risk.',
        keywords: ['opportunity', 'scale', 'labor', 'capital', 'market imperfections', 'mnc'],
        modelAnswer: `The expanded opportunity set: produce where costs are lower, access cheaper capital, and sell in growth markets. Market imperfections also mean firms can add value by internalizing operations across borders rather than relying on perfect markets.`,
      },
    },
  },
};

TOPICS.IF2 = {
  id: 'IF2',
  title: 'International Monetary System',
  tagline: 'The rules that govern how currencies relate and how countries pay each other.',
  level1: {
    explanation: `The International Monetary System (IMS) is the set of rules that governs how currencies relate to each other and how countries make international payments. Think of it as the operating system for global trade.`,
    analogy: `Like the Eurozone sharing one currency — under Bretton Woods, the US dollar anchored the system: other currencies pegged to the dollar and the dollar linked to gold.`,
    historicalExample: {
      title: 'Bretton Woods and the Triffin Paradox',
      story: `Bretton Woods (1945–1972): $35 per ounce of gold; others pegged to USD; IMF and World Bank created. The US had to run balance-of-payments deficits to supply dollars as reserves — undermining confidence (Triffin Paradox) — contributing to the system's collapse in the early 1970s.`,
    },
    keyTerms: [
      { term: 'Bretton Woods', definition: '1944 system: dollar-gold anchor; IMF and World Bank created.' },
      { term: 'Jamaica Agreement (1976)', definition: 'Flexible rates accepted; gold demonetized; more IMF access for developing countries.' },
      { term: 'Free floating', definition: 'Market-determined rates (e.g. US, UK, Japan, euro area).' },
      { term: 'Currency board', definition: 'Local currency fully backed by a foreign reserve currency.' },
      { term: 'Triffin Paradox', definition: 'Reserve currency country must run deficits to supply dollars, hurting confidence.' },
    ],
    mcqs: [
      {
        question: 'Which agreement formally accepted flexible exchange rates and demonetized gold?',
        options: ['Bretton Woods 1944', 'Jamaica Agreement 1976', 'Plaza Accord', 'Maastricht Treaty'],
        correct: 1,
        explanation: 'The Jamaica Agreement (1976) accepted flexible rates and removed gold’s official monetary role.',
      },
      {
        question: 'Hong Kong’s linked exchange system is closest to which IMF category?',
        options: ['Free float', 'Currency board', 'Crawling peg', 'No separate legal tender'],
        correct: 1,
        explanation: 'A currency board backs the local currency fully with foreign reserves — as in the course classification.',
      },
    ],
  },
  level2: {
    formulas: [
      {
        formula: 'Under Bretton Woods: S(currency/USD) was fixed. Under floating: S is determined by market supply and demand.',
        variables: [
          { symbol: 'S', meaning: 'Exchange rate (course summary)', color: '#6B21A8' },
          { symbol: 'Fixed vs float', meaning: 'Parity vs market-driven adjustment', color: '#16A34A' },
        ],
      },
    ],
    workedExample: {
      title: 'Fixed vs flexible — policy trade-off',
      given: ['Fixed: stability and predictable trade', 'Flexible: external adjustment without reserve drain'],
      steps: [
        { desc: 'Fixed cost', calc: 'Sacrifice monetary autonomy; need reserves; speculative attack risk', result: 'Policy trade-off' },
        { desc: 'Flexible benefit', calc: 'Exchange rate moves to absorb shocks', result: 'Autonomy retained' },
      ],
      finalAnswer: 'Course contrast: fixed gives predictability; flexible gives adjustment and autonomy.',
      insight: 'IMS choice balances credibility, shocks, and policy independence.',
    },
    questions: [
      {
        question: 'Describe the Bretton Woods system and why it ended.',
        keywords: ['dollar', 'gold', 'imf', 'world bank', 'triffin', 'deficit', 'confidence'],
        modelAnswer: `Dollar-based gold exchange standard: $35/oz; others pegged to USD; IMF and World Bank. The US supplied dollars via deficits (Triffin Paradox); confidence fell; system collapsed early 1970s — flexible rates followed.`,
      },
      {
        question: 'Name two exchange-rate arrangements from the IMF list and one country example for each.',
        keywords: ['floating', 'peg', 'currency board', 'usa', 'hong kong', 'jordan', 'classification'],
        modelAnswer: `Examples from slides: Free floating — USA, UK, Japan, euro area. Floating with intervention — Brazil, India, Turkey. Currency board — Hong Kong, Bulgaria. Conventional peg — Jordan, Saudi Arabia. No separate legal tender — Ecuador, Panama (USD).`,
      },
    ],
  },
  level3: {
    problem: {
      title: 'IMS timeline check',
      scenario: 'Match periods from the course evolution table.',
      given: { headers: ['Period', 'System'], rows: [['1875–1914', 'Classical gold standard'], ['1945–1972', 'Bretton Woods'], ['1973–present', 'Flexible exchange rates']] },
      required: 'In which period was the dollar pegged to gold and other currencies pegged to the dollar?',
      hints: ['Look for Bretton Woods dates.', '1945–1972', 'Answer: Bretton Woods'],
      answer: 1945,
      solution: {
        steps: [{ desc: 'Period', calc: 'Bretton Woods 1945–1972', result: 'Dollar-gold; others pegged to USD' }],
        finalAnswer: '1945–1972 (Bretton Woods)',
        insight: 'After 1973, flexible rates dominate.',
      },
    },
  },
  level4: {
    openQuestion: {
      question: 'Explain the Asian currency crisis (1997) as an exchange-rate stress event in the IMS context.',
      keywords: ['thailand', 'baht', 'speculative', 'peg', 'contagion', 'asia'],
      modelAnswer: `From the course crisis list: Thailand’s baht collapsed under pressure and the turmoil spread across Asia — illustrating risks under pegged or managed regimes when reserves and credibility fail.`,
    },
    calcQuestion: {
      question: 'If a country fixes to the USD but domestic inflation is higher than the US, what does PPP suggest happens to real competitiveness over time?',
      answer: 0,
      solution: {
        steps: [{ desc: 'Conceptual', calc: 'Higher inflation with a fixed nominal rate', result: 'Real appreciation → competitiveness falls unless devaluation' }],
        finalAnswer: 'Enter 0 if you described real appreciation / loss of competitiveness',
        insight: 'Fixed nominal parity + inflation differential misaligns the real exchange rate.',
      },
    },
  },
  level5: {
    caseStudy: {
      title: 'Memo — Euro introduction',
      scenario: `January 1, 1999: 11 EU countries adopted the euro; notes and coins 2002. ECB manages policy in Frankfurt.`,
      partA: {
        question: 'Why is the euro historically significant for sovereignty and monetary policy?',
        keywords: ['sovereign', 'monetary', 'independence', 'ecb', 'EMU'],
        modelAnswer: `First time sovereign countries voluntarily gave up monetary independence for a shared currency; ECB sets policy for the union — a deep IMS integration step.`,
      },
      partB: {
        question: 'How many years from 1999 to 2002 for cash introduction? (numeric)',
        answer: 3,
        solution: { steps: [{ desc: '2002 − 1999', calc: '3 years', result: '3' }], finalAnswer: '3 years' },
      },
      partC: {
        question: 'Contrast a hard peg with a free float using one benefit each from the course table.',
        keywords: ['stability', 'intervention', 'autonomy', 'reserves'],
        modelAnswer: `Fixed/pegged: stability and predictable trade. Free float: easier external adjustment; national policy autonomy; no need for large reserves for the peg.`,
      },
    },
  },
};

TOPICS.IF3 = {
  id: 'IF3',
  title: 'Balance of Payments',
  tagline: 'A country’s bank statement with the world — double-entry flows.',
  level1: {
    explanation: `The Balance of Payments (BoP) records every financial transaction between residents and the rest of the world. Credits bring money in; debits send money out.`,
    analogy: `Think of the US current account deficit as buying more from the world than it sells; the financial account shows the offsetting claims (e.g. foreigners holding US assets).`,
    historicalExample: {
      title: 'US 2020 snapshot (from slides)',
      story: `Current account balance about −$616.1B; financial account about +$662.0B — large external positions recorded with standard BoP logic.`,
    },
    keyTerms: [
      { term: 'Current account', definition: 'Goods, services, primary income, secondary income.' },
      { term: 'Financial account', definition: 'FDI, portfolio, other investment across borders.' },
      { term: 'BoP identity', definition: 'BCA + BKA + BFA + BRA = 0 (course formulation).' },
      { term: 'J-curve', definition: 'After depreciation, trade balance may worsen short term then improve.' },
      { term: 'Twin deficit', definition: 'Fiscal deficit often alongside current account deficit.' },
    ],
    mcqs: [
      {
        question: 'A US export of software is recorded as:',
        options: ['Current account debit', 'Current account credit', 'Financial account debit only', 'No BoP entry'],
        correct: 1,
        explanation: 'Exports are current account credits (money coming in).',
      },
      {
        question: 'Under flexible rates, official reserves intervention is typically:',
        options: ['Large and persistent', 'Near zero', 'Always negative', 'Equal to GDP'],
        correct: 1,
        explanation: 'Under flexible rates BRA ≈ 0; adjustment via currency without large reserve changes.',
      },
    ],
  },
  level2: {
    formulas: [
      {
        formula: 'Trade Balance = Exports of Goods − Imports of Goods',
        variables: [
          { symbol: 'Exports', meaning: 'Credits in goods', color: '#16A34A' },
          { symbol: 'Imports', meaning: 'Debits in goods', color: '#DC2626' },
        ],
      },
      {
        formula: 'Current Account = Trade + Services + Primary Income + Secondary Income',
        variables: [
          { symbol: 'Primary income', meaning: 'Dividends, interest', color: '#6B21A8' },
          { symbol: 'Secondary income', meaning: 'Remittances, aid', color: '#CA8A04' },
        ],
      },
    ],
    workedExample: {
      title: 'US 2019 BoP (TD1-style numbers from appendix)',
      given: ['Goods exports $1,652.1B; imports $2,513.6B', 'Services exports $876.3B; imports $591.1B'],
      steps: [
        { desc: 'Goods balance', calc: '1,652.1 − 2,513.6', result: '−$861.5B' },
        { desc: 'Services balance', calc: '876.3 − 591.1', result: '+$285.2B' },
      ],
      finalAnswer: 'Goods deficit; services surplus — combined goods+services = −$576.3B before other current lines.',
      insight: 'Goods deficit can dominate even when services are in surplus.',
    },
    questions: [
      {
        question: 'Explain the J-curve after a currency depreciation.',
        keywords: ['short', 'long', 'imports', 'exports', 'worsen', 'improve'],
        modelAnswer: `Short term: trade balance may worsen (contracts priced in foreign currency, import prices jump). Long term: exports rise and imports fall — the path traces a J shape.`,
      },
      {
        question: 'Why might a US citizen dining in Paris create both a current and financial entry?',
        keywords: ['tourism', 'service', 'import', 'credit card', 'liability', 'financial'],
        modelAnswer: `Current account debit: US imports a service (travel). Financial account credit: rising US liability to the card network/payment chain — double-entry offset.`,
      },
    ],
  },
  level3: {
    problem: {
      title: 'Current account arithmetic (2019-style)',
      scenario: 'Use simplified numbers from the numerical appendix.',
      given: {
        headers: ['Line', '$B'],
        rows: [
          ['Goods balance', '−861.5'],
          ['Services balance', '+285.2'],
          ['Primary income', '+231.9'],
          ['Secondary income', '−127.7'],
        ],
      },
      required: 'Compute total current account balance (billions).',
      hints: ['Sum the four lines.', '−861.5 + 285.2 + 231.9 − 127.7', '≈ −472.1'],
      answer: -472.1,
      solution: {
        steps: [{ desc: 'Sum', calc: '−861.5 + 285.2 + 231.9 − 127.7', result: '−$472.1B' }],
        finalAnswer: '−$472.1 billion',
        insight: 'Matches the TD1 tutorial decomposition style.',
      },
    },
  },
  level4: {
    openQuestion: {
      question: 'Classify: Indian immigrant in LA sends a check to parents in Mumbai.',
      keywords: ['secondary', 'income', 'remittance', 'debit', 'financial', 'deposit'],
      modelAnswer: `Current account debit: secondary income / remittance outflow. Financial account credit: offset via reduced US bank deposit — classic TD1 example pairing.`,
    },
    calcQuestion: {
      question: 'Financial account: FDI inflows $302.2B; FDI outflows $122.2B. Balance on direct investment?',
      answer: 180,
      solution: {
        steps: [{ desc: 'Net FDI', calc: '302.2 − 122.2', result: '+$180.0B' }],
        finalAnswer: '+$180.0 billion',
        insight: 'More foreigners investing in US than US abroad in this snapshot.',
      },
    },
  },
  level5: {
    caseStudy: {
      title: 'Memo — BoP desk',
      scenario: 'You must classify transactions for US BoP reporting.',
      partA: {
        question: 'US exports $200M software — which account and sign?',
        keywords: ['current', 'credit', 'goods', 'export'],
        modelAnswer: `Current account credit +$200M (export of goods/services per classification exercise).`,
      },
      partB: {
        question: 'Net goods balance if exports $1,652.1B and imports $2,513.6B?',
        answer: -861.5,
        solution: { steps: [{ desc: '1,652.1−2,513.6', calc: '', result: '−861.5' }], finalAnswer: '−$861.5B' },
      },
      partC: {
        question: 'State the BoP identity from the course.',
        keywords: ['bca', 'bka', 'bfa', 'bra', 'zero'],
        modelAnswer: `BCA + BKA + BFA + BRA = 0 — the four accounts sum to zero as a consistency check.`,
      },
    },
  },
};

TOPICS.IF4 = {
  id: 'IF4',
  title: 'Foreign Exchange Market',
  tagline: 'Largest financial market; quotes, spreads, cross rates, and arbitrage.',
  level1: {
    explanation: `The FX market is where currencies trade — about $7.5 trillion per day in 2022. It has no single location; it is a 24-hour global network. The UK hosts the largest share of turnover (about 38% in 2022 per course).`,
    analogy: `Bid-ask is like buying and selling used cars: the dealer buys low (bid) and sells high (ask) — you always get the worse side.`,
    historicalExample: {
      title: 'Australian woolgrower',
      story: `Sell AUD 1,300,000 wool; rate 1 AUD = 0.98112 CAD → Canadian cost = 1,300,000 × 0.98112 = CAD 1,275,456 (course example).`,
    },
    keyTerms: [
      { term: 'Base currency', definition: 'The “one unit” currency in a pair (e.g. EUR in EUR/USD).' },
      { term: 'Bid-Ask', definition: 'Bank buys base at bid (lower); sells at ask (higher).' },
      { term: 'Cross rate', definition: 'Rate between two currencies via a third (often USD).' },
      { term: 'Triangular arbitrage', definition: 'Profit when implied cross ≠ quoted cross.' },
      { term: 'Spot vs forward', definition: 'Spot ~2 business days; forward is agreed today for future delivery.' },
    ],
    mcqs: [
      {
        question: 'EUR/USD = 1.12 in American terms is best described as:',
        options: ['Indirect quote', 'Direct quote for USD per EUR', 'A cross rate only', 'Inflation adjusted'],
        correct: 1,
        explanation: 'For a US resident, USD per EUR is a direct quote (price of foreign currency in dollars).',
      },
      {
        question: 'If USD/EUR = 1.1235 and USD/GBP = 1.3447, EUR/GBP equals:',
        options: ['1.3447/1.1235', '1.1235/1.3447', '1.1235×1.3447', '1'],
        correct: 1,
        explanation: 'EUR/GBP = (USD/GBP)/(USD/EUR) = 1.1235/1.3447 per course cross-rate method.',
      },
    ],
  },
  level2: {
    formulas: [
      {
        formula: 'A/B = (A/USD) / (B/USD)  (cross rate)',
        variables: [
          { symbol: 'A/USD, B/USD', meaning: 'Common-dollar quotes', color: '#6B21A8' },
          { symbol: 'A/B', meaning: 'Cross rate', color: '#16A34A' },
        ],
      },
      {
        formula: '% Spread ≈ (Ask − Bid) / Ask × 100',
        variables: [
          { symbol: 'Bid', meaning: 'Bank buys base', color: '#CA8A04' },
          { symbol: 'Ask', meaning: 'Bank sells base', color: '#EA580C' },
        ],
      },
    ],
    workedExample: {
      title: 'EUR/GBP cross (Exhibit-style)',
      given: ['USD/EUR = 1.1235', 'USD/GBP = 1.3447'],
      steps: [
        { desc: 'EUR/GBP', calc: '1.1235 / 1.3447', result: '0.8355' },
      ],
      finalAnswer: '1 GBP = 0.8355 EUR (or invert for GBP/EUR)',
      insight: 'Divide common-dollar quotes to get a cross rate.',
    },
    questions: [
      {
        question: 'Explain why a customer buying euros pays the ask, not the bid.',
        keywords: ['ask', 'bank', 'sell', 'base', 'worse'],
        modelAnswer: `The bank sells euros to the customer at the higher ask price — the customer always gets the worse rate in a round trip.`,
      },
      {
        question: 'When does triangular arbitrage exist?',
        keywords: ['implied', 'quoted', 'cross', 'inconsistent', 'profit'],
        modelAnswer: `When the quoted cross rate differs from the cross implied by two dollar rates — risk-free profit by trading around the triangle until prices align.`,
      },
    ],
  },
  level3: {
    problem: {
      title: 'Wool payment in CAD',
      scenario: 'Australian producer; course wool example.',
      given: { headers: ['Quantity', 'Rate'], rows: [['AUD 1,300,000 wool', '1 AUD = 0.98112 CAD']] },
      required: 'Canadian dollar cost to buyer.',
      hints: ['Multiply AUD amount by CAD per AUD.', '1,300,000 × 0.98112'],
      answer: 1275456,
      solution: {
        steps: [{ desc: 'Cost in CAD', calc: '1,300,000 × 0.98112', result: 'CAD 1,275,456' }],
        finalAnswer: 'CAD 1,275,456',
        insight: 'Multiply quantity in AUD by the CAD price of one AUD.',
      },
    },
  },
  level4: {
    openQuestion: {
      question: 'You BUY €100,000 with USD. EUR/USD bid 1.1200 ask 1.1210. How much USD do you pay?',
      keywords: ['ask', '112100', 'bank', 'sells', 'euro'],
      modelAnswer: `You pay the ask because the bank sells you euros: €100,000 × $1.1210 = $112,100.`,
    },
    calcQuestion: {
      question: 'EUR/GBP implied from USD/EUR 1.1235 and USD/GBP 1.3447 — give EUR per GBP to 4 decimals.',
      answer: 0.8355,
      solution: {
        steps: [{ desc: 'Divide', calc: '1.1235 / 1.3447', result: '0.8355' }],
        finalAnswer: '0.8355 EUR/GBP',
        insight: 'Matches cross-rate drill.',
      },
    },
  },
  level5: {
    caseStudy: {
      title: 'Memo — FX desk',
      scenario: 'Triangular arbitrage: USD/EUR 1.1235, USD/GBP 1.3447, quoted EUR/GBP 0.8350.',
      partA: {
        question: 'Compute implied EUR/GBP and state if quoted rate mispriced.',
        keywords: ['1.1235', '1.3447', '0.8355', 'arbitrage'],
        modelAnswer: `Implied = 1.1235/1.3447 = 0.8355. Quoted 0.8350 ≠ 0.8355 → arbitrage opportunity exists.`,
      },
      partB: {
        question: 'Percentage spread: bid 1.1200 ask 1.1210 — approximate % spread using (Ask−Bid)/Ask×100.',
        answer: 0.089,
        solution: {
          steps: [{ desc: 'Spread', calc: '0.001/1.121×100', result: '≈0.089%' }],
          finalAnswer: '≈0.089%',
        },
      },
      partC: {
        question: 'In one sentence, what is the bid side for the bank in EUR/USD?',
        keywords: ['buy', 'base', 'euro', 'lower'],
        modelAnswer: `Bid is the rate at which the dealer buys the base currency (euros) — lower than the ask.`,
      },
    },
  },
};

TOPICS.IF5 = {
  id: 'IF5',
  title: 'PPP & Interest Rate Parity',
  tagline: 'Law of one price, inflation differentials, and covered interest parity.',
  level1: {
    explanation: `PPP links price levels and exchange rates. IRP links interest differentials to forward rates. Together with Fisher and UIP they form the parity “wheel” in the course.`,
    analogy: `Big Mac Index: if a burger costs $5.58 in the US and ¥21 in China, PPP implied rate differs from the market — signals over/undervaluation.`,
    historicalExample: {
      title: 'UK/US covered interest arbitrage',
      story: `US 5%, UK 8%, spot $1.80/£, forward $1.78/£ — IRP-implied forward ≈ $1.75/£; actual forward higher → arbitrage profit $18,000 on $1M (course).`,
    },
    keyTerms: [
      { term: 'Relative PPP', definition: 'E[S] = S×(1+π_d)/(1+π_f) (course formula).' },
      { term: 'IRP', definition: 'F = S × (1+i_d)/(1+i_f) with consistent quote conventions.' },
      { term: 'Covered vs uncovered', definition: 'Covered uses forwards; uncovered uses expected spot.' },
      { term: 'Currency carry trade', definition: 'Borrow low-yield currency, invest high-yield unhedged — crash risk.' },
    ],
    mcqs: [
      {
        question: 'If US inflation exceeds euro inflation, relative PPP predicts the dollar will:',
        options: ['Appreciate vs euro', 'Depreciate vs euro', 'Be unchanged', 'Become gold-linked'],
        correct: 1,
        explanation: 'Higher US inflation → more dollars per euro needed → dollar depreciates vs euro (direct USD/EUR quote rises).',
      },
      {
        question: 'Ruritania: US 5%, RUP 15.5%, spot RUP 50/$, forward RUP 55/$ — investments both return $1,050 on $1,000. Conclusion?',
        options: ['IRP violated', 'IRP holds', 'PPP fails', 'No forward exists'],
        correct: 1,
        explanation: 'Equal hedged returns → IRP holds; no arbitrage.',
      },
    ],
  },
  level2: {
    formulas: [
      {
        formula: 'F = S × (1 + i_$) / (1 + i_£)   (example quote convention)',
        variables: [
          { symbol: 'F,S', meaning: 'Forward and spot $/£', color: '#6B21A8' },
          { symbol: 'i', meaning: 'Nominal interest rates', color: '#16A34A' },
        ],
      },
      {
        formula: 'E[S₁] = S₀ × (1 + π_domestic) / (1 + π_foreign)',
        variables: [
          { symbol: 'π', meaning: 'Inflation rates', color: '#CA8A04' },
        ],
      },
    ],
    workedExample: {
      title: 'Relative PPP numeric',
      given: ['Spot $1.20/€', 'US inflation 3%', 'Eurozone 1%'],
      steps: [
        { desc: '1-year PPP rate', calc: '1.20 × (1.03/1.01)', result: '$1.2238/€' },
      ],
      finalAnswer: 'Dollar depreciates vs euro (more $ per €).',
      insight: 'Higher US inflation → weaker dollar in PPP sense.',
    },
    questions: [
      {
        question: 'Outline covered interest arbitrage steps when forward pound is overpriced vs IRP.',
        keywords: ['borrow', 'dollar', 'invest', 'sterling', 'forward', 'profit'],
        modelAnswer: `Compute IRP forward. If actual F > implied, forward pound is expensive: borrow USD, buy £ spot, invest in UK, sell £ forward — profit equals excess return after repaying USD loan (course UK/US example).`,
      },
      {
        question: 'What does the international Fisher effect link?',
        keywords: ['inflation', 'nominal', 'interest', 'exchange'],
        modelAnswer: `Higher-inflation countries tend to have higher nominal rates; with PPP, nominal rates and expected currency depreciation align in the long run — course “wheel” of parities.`,
      },
    ],
  },
  level3: {
    problem: {
      title: 'IRP forward check',
      scenario: 'US 2%, UK rate unknown; spot GBP/USD 1.3447; 1-year forward 1.3435.',
      given: { headers: ['Item', 'Value'], rows: [['Spot ($/£)', '1.3447'], ['Forward', '1.3435'], ['US rate', '2% annual']] },
      required: 'Using F = S×(1+i_US)/(1+i_UK), solve for i_UK approximately.',
      hints: ['Rearrange: (1+i_UK) = S×(1+i_US)/F', 'Plug numbers', '≈2.09%'],
      answer: 2.09,
      solution: {
        steps: [
          { desc: '1+i_UK', calc: '1.3447×1.02/1.3435', result: '1.0209' },
          { desc: 'i_UK', calc: '', result: '≈2.09%' },
        ],
        finalAnswer: '≈2.09%',
        insight: 'Matches exam-style IRP algebra in appendix 8.1.',
      },
    },
  },
  level4: {
    openQuestion: {
      question: 'Explain why a currency carry trade is risky even if interest spreads look attractive.',
      keywords: ['uncovered', 'depreciation', 'irp', 'crash', 'hedge'],
      modelAnswer: `Carry trades skip hedging. If the high-yield currency depreciates more than the spread suggests, losses can wipe interest gains — “peso problem” and sudden reversals.`,
    },
    calcQuestion: {
      question: '$1,000 at RUP 50/$, invest at 15.5%, convert back at forward RUP 55/$. Dollar proceeds?',
      answer: 1050,
      solution: {
        steps: [
          { desc: 'RUP', calc: '1000×50×1.155', result: '57,750 RUP' },
          { desc: 'USD', calc: '57,750/55', result: '$1,050' },
        ],
        finalAnswer: '$1,050 — matches IRP exercise',
        insight: 'Same as US buy-and-hold at 5% when IRP holds.',
      },
    },
  },
  level5: {
    caseStudy: {
      title: 'Memo — Parity check',
      scenario: 'Spot $1.80/£; US 5%; UK 8%; 1-year forward $1.78/£.',
      partA: {
        question: 'Is IRP violated? Show implied forward.',
        keywords: ['1.75', '1.78', 'violated', 'arbitrage'],
        modelAnswer: `Implied F = 1.80×(1.05/1.08)= $1.75/£. Actual $1.78 → violated; arbitrage possible.`,
      },
      partB: {
        question: 'Arbitrage profit on $1,000,000 using course strategy (round to nearest dollar).',
        answer: 18000,
        solution: {
          steps: [
            { desc: 'Borrow repay', calc: '1.05M owed', result: '' },
            { desc: 'UK path', calc: 'Forward receipts $1,068,000', result: '' },
          ],
          finalAnswer: '$18,000',
        },
      },
      partC: {
        question: 'Give one market adjustment that restores IRP if investors sell £ forward.',
        keywords: ['forward', 'down', 'f', 'irp'],
        modelAnswer: `Selling £ forward pushes F down toward the implied parity, reducing arbitrage.`,
      },
    },
  },
};

TOPICS.IF6 = {
  id: 'IF6',
  title: 'Futures & Options',
  tagline: 'Standardized contracts, marking-to-market, payoffs, and hedging with derivatives.',
  level1: {
    explanation: `Derivatives depend on an underlying (currency, commodity, index). Futures trade on exchanges with a clearinghouse; options give rights, not obligations. Use them to hedge or speculate.`,
    analogy: `Corn farmer sells futures to lock a price — like fixing the sale price before harvest; the course shows offsetting spot and futures gains/losses.`,
    historicalExample: {
      title: 'Mexican peso put hedge (past paper)',
      story: `Receivable MXN 20M; put on MXN; strike MXN 20/USD; at spot MXN 18/USD the option is not exercised — convert at spot; subtract premium FV — net proceeds computed in course solution.`,
    },
    keyTerms: [
      { term: 'Mark-to-market', definition: 'Daily cash settlement of futures gains/losses.' },
      { term: 'Call payoff', definition: 'max(S_T − K, 0)' },
      { term: 'Put payoff', definition: 'max(K − S_T, 0)' },
      { term: 'Put-call parity', definition: 'C − P = S₀ − PV(K) (course form)' },
    ],
    mcqs: [
      {
        question: 'Which eliminates counterparty default risk on exchange-traded futures?',
        options: ['Broker tips', 'Clearinghouse', 'Spot desk', 'Central bank only'],
        correct: 1,
        explanation: 'The clearinghouse becomes buyer to every seller and seller to every buyer.',
      },
      {
        question: 'Long futures profit when settlement price:',
        options: ['Falls below entry', 'Rises above entry', 'Equals zero', 'Ignores contract size'],
        correct: 1,
        explanation: 'Long P&L = (F_close − F_open) × size — price up helps the long.',
      },
    ],
  },
  level2: {
    formulas: [
      {
        formula: 'F = S₀ × (1 + r_d)^T / (1 + r_f)^T  (currency futures)',
        variables: [
          { symbol: 'r_d', meaning: 'Domestic rate', color: '#6B21A8' },
          { symbol: 'r_f', meaning: 'Foreign rate', color: '#16A34A' },
        ],
      },
      {
        formula: 'Long P&L = (F_close − F_open) × Contract Size',
        variables: [
          { symbol: 'F', meaning: 'Futures prices', color: '#CA8A04' },
        ],
      },
    ],
    workedExample: {
      title: 'Gold futures (exam style)',
      given: ['Long at $1,500/oz', '100 oz contract', 'Maturity spot $1,600'],
      steps: [{ desc: 'P&L', calc: '(1600−1500)×100', result: '$10,000' }],
      finalAnswer: '$10,000 profit to long',
      insight: 'At expiry futures price converges to spot.',
    },
    questions: [
      {
        question: 'List two factors that increase a call option premium per course.',
        keywords: ['underlying', 'volatility', 'time', 'strike', 'rate'],
        modelAnswer: `Higher underlying price, lower strike, longer maturity, higher volatility, higher risk-free rate (for calls) — per course summary table.`,
      },
      {
        question: 'Why does a farmer short corn futures to hedge a crop sale?',
        keywords: ['lock', 'price', 'offset', 'spot', 'fall'],
        modelAnswer: `Short futures gain if price falls — offsets spot loss on the physical crop; net locked price (course corn farmer example).`,
      },
    ],
  },
  level3: {
    problem: {
      title: 'Corn futures (TD5)',
      scenario: 'Commodity futures pricing with convenience yield.',
      given: { headers: ['Symbol', 'Value'], rows: [['S₀', '95 cents/bu'], ['r_f', '10%'], ['y', '8/95'], ['T', '0.5 years']] },
      required: 'Compute F = S₀ × (1 + r_f − y)^T.',
      hints: ['y = 8/95 = 0.0842', 'Inside bracket 1.0158', 'sqrt for 0.5'],
      answer: 95.747,
      solution: {
        steps: [
          { desc: 'Bracket', calc: '1 + 0.10 − 0.0842', result: '1.0158' },
          { desc: 'F', calc: '95 × 1.0158^0.5', result: '95.747' },
        ],
        finalAnswer: '95.747',
        insight: 'Commodity futures net of convenience yield.',
      },
    },
  },
  level4: {
    openQuestion: {
      question: 'Contrast American and European options from the course definitions.',
      keywords: ['exercise', 'expiry', 'before', 'maturity'],
      modelAnswer: `American: exercise any time before expiry. European: exercise only at expiry — same payoff formulas at maturity for both.`,
    },
    calcQuestion: {
      question: 'Short 4 EUR futures at $1.10/€; size 125,000 € each; price falls to $1.05. Profit?',
      answer: 25000,
      solution: {
        steps: [{ desc: 'Short P&L', calc: '(1.10−1.05)×125,000×4', result: '$25,000' }],
        finalAnswer: '$25,000',
        insight: 'Course speculation example.',
      },
    },
  },
  level5: {
    caseStudy: {
      title: 'Memo — Options desk',
      scenario: 'Put strike K=$95, premium $5, S_T=$80.',
      partA: {
        question: 'Put payoff and buyer net profit?',
        keywords: ['max', '15', '10', 'premium'],
        modelAnswer: `Payoff = max(95−80,0)=15. Net profit = 15 − 5 = $10 per share (buyer).`,
      },
      partB: {
        question: 'Minimum call price (C) from put-call parity: S=100, K=100, r=10%, T=1, P given? Use C ≥ S−PV(K).',
        answer: 9.09,
        solution: {
          steps: [{ desc: 'PV(K)', calc: '100/1.10=90.91', result: 'C ≥ 9.09' }],
          finalAnswer: '$9.09 minimum call (TD7)',
        },
      },
      partC: {
        question: 'When would the peso put in the MXN receivable example be exercised?',
        keywords: ['spot', 'strike', 'worse', 'market'],
        modelAnswer: `Exercise when the market MXN/USD rate is worse (fewer dollars per peso) than the strike — if spot peso per dollar is above the strike threshold so converting at strike beats spot.`,
      },
    },
  },
};

TOPICS.IF7 = {
  id: 'IF7',
  title: 'Transaction Exposure & Hedging',
  tagline: 'Receivables, payables, forward, money market, and options hedges.',
  level1: {
    explanation: `Transaction exposure is risk that contractual FC cash flows change value with the exchange rate. Economic exposure affects competitiveness broadly; translation exposure is accounting-only.`,
    analogy: `Boeing £ receivable: forward hedge locks dollars; options keep upside at premium cost — course comparison table.`,
    historicalExample: {
      title: 'Boeing £10M receivable',
      story: `Sell £ forward at $1.46/£ → $14.6M locked. Money market hedge borrows PV of £, converts at spot, invests USD — same outcome when IRP holds.`,
    },
    keyTerms: [
      { term: 'Forward hedge', definition: 'Sell FC forward (receivable) or buy FC forward (payable).' },
      { term: 'Money market hedge', definition: 'Borrow FC against receivable; convert; invest domestic.' },
      { term: 'Options hedge', definition: 'Puts on FC for receivables; calls for payables — floor with premium.' },
    ],
    mcqs: [
      {
        question: 'Translation exposure primarily affects:',
        options: ['Cash payroll', 'Consolidated statements', 'Taxable income only', 'Product demand'],
        correct: 1,
        explanation: 'Accounting translation — no necessary cash impact.',
      },
      {
        question: 'For a £ payable, the option hedge uses:',
        options: ['Puts on £', 'Calls on £', 'Futures only', 'No premium'],
        correct: 1,
        explanation: 'Right to buy foreign currency — call on £.',
      },
    ],
  },
  level2: {
    formulas: [
      {
        formula: 'Gain from forward hedge (receivable) ≈ (F − S_T) × FC amount',
        variables: [
          { symbol: 'F', meaning: 'Locked forward rate', color: '#6B21A8' },
          { symbol: 'S_T', meaning: 'Spot at maturity', color: '#EA580C' },
        ],
      },
    ],
    workedExample: {
      title: 'Hedging cost (exam screenshot)',
      given: ['EUR 300,000', 'Spot 1.10', 'Forward 1.15'],
      steps: [
        { desc: 'Forward $', calc: '300,000×1.15', result: '$345,000' },
        { desc: 'Spot $', calc: '300,000×1.10', result: '$330,000' },
        { desc: 'Cost of hedge', calc: '345,000−330,000', result: '$15,000' },
      ],
      finalAnswer: '$15,000 hedging cost for certainty',
      insight: 'Paying forward premium versus spot for insurance.',
    },
    questions: [
      {
        question: 'Give two reasons firms hedge from the course “for hedging” list.',
        keywords: ['asymmetry', 'transaction', 'costs', 'default', 'tax'],
        modelAnswer: `Information asymmetry; differential transaction costs; bankruptcy/default costs; progressive taxes — shareholders may not replicate perfectly.`,
      },
      {
        question: 'When does an options hedge beat a forward on a receivable?',
        keywords: ['upside', 'spot', 'premium', 'exercise'],
        modelAnswer: `If spot moves favorably (FC strengthens), you let the option lapse and convert at better spot — upside kept minus premium; forward forfeits upside.`,
      },
    ],
  },
  level3: {
    problem: {
      title: 'Money market hedge — Boeing style',
      scenario: '£10M receivable in 1 year; UK 9%; US 6.10%; spot $1.50/£.',
      given: { headers: ['Item', 'Value'], rows: [['Receivable', '£10,000,000'], ['i_UK', '9%'], ['i_US', '6.10%'], ['Spot', '$1.50/£']] },
      required: 'Borrow PV of £, convert, invest USD — final USD ≈?',
      hints: ['PV £ = 10M/1.09', '× spot', '× 1.061'],
      answer: 14600000,
      solution: {
        steps: [
          { desc: 'Borrow £', calc: '10M/1.09', result: '£9,174,312' },
          { desc: 'USD now', calc: '×1.50', result: '$13,761,468' },
          { desc: 'Invest', calc: '×1.061', result: '≈$14,600,000' },
        ],
        finalAnswer: '≈$14.6M — matches forward when IRP holds',
        insight: 'Same economics as selling £ forward.',
      },
    },
  },
  level4: {
    openQuestion: {
      question: 'TechGlobal: ¥800M receivable; forward $0.0095/¥; expected spot $0.0100/¥. Interpret hedging P&L vs expected.',
      keywords: ['7600000', '8000000', '400000', 'opportunity', 'insurance'],
      modelAnswer: `Hedged $7.6M vs expected unhedged $8.0M → −$400k opportunity cost if forecast right — but hedge insures against yen weakness (appendix 5.3).`,
    },
    calcQuestion: {
      question: 'Forward locked dollars for ¥800M at $0.0095/¥?',
      answer: 7600000,
      solution: {
        steps: [{ desc: 'Multiply', calc: '800,000,000×0.0095', result: '$7,600,000' }],
        finalAnswer: '$7,600,000',
        insight: 'TechGlobal past-paper setup.',
      },
    },
  },
  level5: {
    caseStudy: {
      title: 'Memo — Treasury hedge choice',
      scenario: '£10M receivable; forward $1.46/£ vs put with premium.',
      partA: {
        question: 'Locked forward proceeds?',
        keywords: ['14.6', 'million', 'forward'],
        modelAnswer: `£10M × $1.46 = $14.6 million — certain.`,
      },
      partB: {
        question: 'If spot ends $1.60/£, compare unhedged USD to forward — difference?',
        answer: 400000,
        solution: {
          steps: [
            { desc: 'Unhedged', calc: '10M×1.60', result: '$16M' },
            { desc: 'vs forward', calc: '16M−14.6M', result: '$1.4M opportunity cost of hedge' },
          ],
          finalAnswer: 'Unhedged beats forward by $1.4M — but ex ante risk differed',
        },
      },
      partC: {
        question: 'Name exposure type for future sales competitiveness when yen weakens — transaction or economic?',
        keywords: ['economic', 'operating', 'competitor'],
        modelAnswer: `Economic (operating) exposure — affects future cash flows and competitiveness beyond a single invoice.`,
      },
    },
  },
};

TOPICS.IF8 = {
  id: 'IF8',
  title: 'Corporate Governance',
  tagline: 'Agency conflicts, ownership structures, and investor protection.',
  level1: {
    explanation: `Corporate governance allocates control and cash-flow rights among shareholders, managers, and stakeholders. The agency problem separates ownership and control.`,
    analogy: `Taxi driver taking the long route — driver incentive ≠ passenger goal; managers may pursue private benefits vs shareholders.`,
    historicalExample: {
      title: 'Parmalat / Petrobras (course cases)',
      story: `Parmalat: fake cash; weak transparency and family control. Petrobras: massive corruption under state influence — governance failures documented in course case boxes.`,
    },
    keyTerms: [
      { term: 'Agency problem', definition: 'Managers vs shareholders misaligned incentives.' },
      { term: 'Pyramid', definition: 'Control chain multiplies voting power vs cash-flow ownership.' },
      { term: 'Dual-class shares', definition: 'Superior voting rights vs economic stake.' },
    ],
    mcqs: [
      {
        question: 'La Porta et al. link strong investor protection to:',
        options: ['More pyramids only', 'More dispersed ownership and deeper markets', 'No IPOs', 'Only civil law'],
        correct: 1,
        explanation: 'Strong protection supports dispersed ownership and market development.',
      },
      {
        question: 'Sarbanes-Oxley chiefly strengthened:',
        options: ['Tariffs', 'Disclosure and accountability post-Enron', 'Gold standard', 'Exchange rates'],
        correct: 1,
        explanation: 'SOX 2002: certification and penalties for financial misreporting.',
      },
    ],
  },
  level2: {
    formulas: [
      {
        formula: 'Control value C = (voting %) × (Company Value) − Debt',
        variables: [
          { symbol: 'Voting %', meaning: 'Share of votes controlled', color: '#6B21A8' },
        ],
      },
    ],
    workedExample: {
      title: 'Ownership vs votes',
      given: ['10,000 shares', 'Investor B: 4,000 shares, 2 votes each', 'Others: 6,000 shares, 1 vote'],
      steps: [
        { desc: 'Ownership', calc: '4000/10000', result: '40%' },
        { desc: 'Votes', calc: '8000/14000', result: '57.1%' },
      ],
      finalAnswer: 'Minority cash-flow, majority votes possible',
      insight: 'Dual-class / superior voting rights.',
    },
    questions: [
      {
        question: 'Explain concentrated ownership as substitute for weak legal protection.',
        keywords: ['monitor', 'large', 'shareholder', 'minority', 'expropriate'],
        modelAnswer: `When courts protect poorly, blockholders monitor directly — but minority investors may be expropriated by the controller — course open-ended model.`,
      },
      {
        question: 'Name two remedies for agency problems.',
        keywords: ['board', 'incentive', 'debt', 'takeover', 'transparency'],
        modelAnswer: `Independent board, incentive contracts, concentrated owners who monitor, transparency, debt discipline, activism, cross-listing, market for control — course list.`,
      },
    ],
  },
  level3: {
    problem: {
      title: 'Control value',
      scenario: 'Dominant investor 60% votes; firm value $10M; debt $2M.',
      given: { headers: ['Item', 'Value'], rows: [['Votes', '60%'], ['Value', '$10M'], ['Debt', '$2M']] },
      required: 'Control value C.',
      hints: ['0.6×10M = 6M', 'Minus debt 2M'],
      answer: 4000000,
      solution: {
        steps: [{ desc: 'C', calc: '0.6×10,000,000−2,000,000', result: '$4,000,000' }],
        finalAnswer: '$4,000,000',
        insight: 'Course governance formula.',
      },
    },
  },
  level4: {
    openQuestion: {
      question: 'Discuss Germany vs US ownership concentration (3 largest shareholders averages).',
      keywords: ['germany', '48', 'united states', '19', 'bank', 'dispersed'],
      modelAnswer: `Germany ~48% held by top 3 shareholders; US ~19% — more dispersed Anglo-Saxon ownership; different agency tensions (large owner vs manager in Europe; manager vs dispersed owners in US).`,
    },
    calcQuestion: {
      question: 'Pyramid: 51%×51%×51% effective cash-flow in bottom firm?',
      answer: 13.27,
      solution: {
        steps: [{ desc: 'Multiply', calc: '0.51^3', result: '13.27%' }],
        finalAnswer: '13.27% economic ownership',
        insight: 'Yet control maintained at each 51% step.',
      },
    },
  },
  level5: {
    caseStudy: {
      title: 'Memo — Minority protection',
      scenario: 'Family controls 51%→51%→51% chain; considers tunneling $1M.',
      partA: {
        question: 'Why do minority shareholders bear most tunneling loss?',
        keywords: ['cash flow', '13', 'percent', 'expropriate'],
        modelAnswer: `Family’s cash-flow stake is small vs control — most wealth expropriated from minorities who lack votes — course tunneling arithmetic illustration.`,
      },
      partB: {
        question: 'If 13.27% economic and $1M tunnel, approximate family private cost share?',
        answer: 132700,
        solution: {
          steps: [{ desc: 'Share of loss', calc: '0.1327×1,000,000', result: '$132,700' }],
          finalAnswer: '$132,700 borne via ownership',
        },
      },
      partC: {
        question: 'One reform from post-scandal era?',
        keywords: ['sox', 'certify', 'disclosure'],
        modelAnswer: `SOX-style certification and stronger disclosure/penalties — course governance reform section.`,
      },
    },
  },
};

TOPICS.IF9 = {
  id: 'IF9',
  title: 'Foreign Direct Investment & Cross-Border M&A',
  tagline: 'Why firms cross borders for control — and how they enter.',
  level1: {
    explanation: `FDI means control (>10% threshold in BoP context). Firms invest to bypass trade barriers, exploit wage gaps, protect intangibles, integrate vertically, follow product life cycle, or provide diversification when markets are segmented.`,
    analogy: `Honda in Ohio: build inside the US to avoid import barriers — classic FDI motivation from slides.`,
    historicalExample: {
      title: 'Coca-Cola in India',
      story: `Withdrew in 1970s rather than reveal formula; returned when legal environment improved — intangible protection / internalization.`,
    },
    keyTerms: [
      { term: 'Greenfield', definition: 'Build new plant abroad — full control, slow.' },
      { term: 'M&A', definition: 'Buy existing firm — faster, integration risk.' },
      { term: 'Political risk', definition: 'Transfer, operational, ownership risks — manage with insurance, JVs, negotiation.' },
    ],
    mcqs: [
      {
        question: 'Internalization theory stresses:',
        options: ['Only tariffs', 'Protecting intangible assets inside the firm', 'Ignoring FX', 'Gold standard'],
        correct: 1,
        explanation: 'Better to own operations than license when intangible leakage is costly.',
      },
      {
        question: 'Product life cycle: where does production move in maturity?',
        options: ['Only home', 'Lowest-cost locations abroad', 'Nowhere', 'Government only'],
        correct: 1,
        explanation: 'Standardized products shift to cost-competitive sites.',
      },
    ],
  },
  level2: {
    formulas: [
      {
        formula: 'FDI vs portfolio: control threshold commonly >10% (BoP)',
        variables: [
          { symbol: 'Control', meaning: 'Operational influence', color: '#6B21A8' },
        ],
      },
    ],
    workedExample: {
      title: 'Wage gaps (2020 manufacturing, course)',
      given: ['Denmark $54.46/hr', 'India $0.80/hr'],
      steps: [{ desc: 'Implication', calc: 'Labor immobility → FDI moves capital to cheap labor', result: 'Imperfect labor market motive' }],
      finalAnswer: 'Explains offshoring / FDI to developing countries',
      insight: 'Workers cannot migrate freely — firms move jobs.',
    },
    questions: [
      {
        question: 'Explain trade-barrier FDI with the Honda US example.',
        keywords: ['tariff', 'quota', 'local', 'production', 'imports'],
        modelAnswer: `Tariffs or import threats on cars made Japanese exports expensive; producing in Ohio delivered “American-made” cars — bypasses barriers relative to exporting from Japan.`,
      },
      {
        question: 'Two disadvantages of cross-border M&A vs greenfield?',
        keywords: ['integration', 'overpay', 'liabilities', 'culture'],
        modelAnswer: `Winner’s curse / overpayment; cultural and systems integration; inherited liabilities — course M&A disadvantages list.`,
      },
    ],
  },
  level3: {
    problem: {
      title: 'FDI threshold',
      scenario: 'Classify investment levels.',
      given: { headers: ['Stake', 'Type'], rows: [['8%', 'Portfolio'], ['12%', 'FDI']] },
      required: 'Typical FDI minimum % threshold cited in course/BoP context.',
      hints: ['Greater than 10%', 'Control'],
      answer: 10,
      solution: {
        steps: [{ desc: 'Rule of thumb', calc: '>10% ownership', result: 'FDI' }],
        finalAnswer: '10% control threshold (course)',
        insight: 'IMF/BoP classification uses control not just return motive.',
      },
    },
  },
  level4: {
    openQuestion: {
      question: 'List three political risk types and one mitigation.',
      keywords: ['transfer', 'operational', 'expropriation', 'miga', 'joint venture'],
      modelAnswer: `Transfer, operational, ownership/expropriation risks — mitigate with MIGA/political insurance, local partners, negotiation/stabilization clauses — course political risk section.`,
    },
    calcQuestion: {
      question: 'If US Big Mac $5.58 and China ¥21, PPP implied CNY/USD from burger prices alone?',
      answer: 3.76,
      solution: {
        steps: [{ desc: 'Implied', calc: '21/5.58', result: '¥3.76/$' }],
        finalAnswer: '¥3.76 per $ (Big Mac PPP exercise)',
        insight: 'Compare to actual rate for under/overvaluation discussion.',
      },
    },
  },
  level5: {
    caseStudy: {
      title: 'Memo — Enron Dabhol (India)',
      scenario: 'Political risk case from course.',
      partA: {
        question: 'What went wrong politically vs Congress-only focus?',
        keywords: ['bjp', 'opposition', 'nationalist', 'stakeholders'],
        modelAnswer: `Underestimated BJP opposition; fast-track without competitive bidding looked corrupt; confidentiality fueled suspicion — course Enron India lessons.`,
      },
      partB: {
        question: 'If project cost cut from $2.9B to $2.5B, absolute savings ($M)?',
        answer: 400,
        solution: { steps: [{ desc: '2.9−2.5', calc: '', result: '$400M' }], finalAnswer: '$400M' },
      },
      partC: {
        question: 'Why might internalization beat licensing for proprietary tech?',
        keywords: ['intangible', 'theft', 'control', 'license'],
        modelAnswer: `Licensing leaks technology to partners; FDI keeps know-how inside the firm — internalization advantage.`,
      },
    },
  },
};

const TOPIC_ORDER = ['IF4', 'IF5', 'IF6', 'IF3', 'IF7', 'IF8', 'IF9', 'IF2', 'IF1'];
const TOPIC_PRIORITY = {
  IF4: { label: 'HIGH PRIORITY', level: 'high', weight: '20% weight' },
  IF5: { label: 'HIGH PRIORITY', level: 'high', weight: '27% combined' },
  IF6: { label: 'HIGH PRIORITY', level: 'high', weight: '24% combined' },
  IF3: { label: 'HIGH PRIORITY', level: 'high', weight: '10%' },
  IF7: { label: 'HIGH PRIORITY', level: 'high', weight: '8%' },
  IF8: { label: 'MEDIUM PRIORITY', level: 'medium', weight: '5%' },
  IF9: { label: 'MEDIUM PRIORITY', level: 'medium', weight: '5%' },
  IF2: { label: 'MEDIUM PRIORITY', level: 'medium', weight: '4%' },
  IF1: { label: 'MEDIUM PRIORITY', level: 'medium', weight: '3%' },
};

const FLASHCARDS = {
  IF1: [
    { type:'definition', front:'What are the 4 key dimensions that make international finance different from domestic finance?', back:'1. Foreign Exchange Risk — uncertain exchange rates can wipe out profits when converting currencies. 2. Political Risk — governments can change rules, seize assets, no effective recourse. 3. Market Imperfections — restrictions, transaction costs, info asymmetry block free flows. 4. Expanded Opportunity Set — produce, raise capital, and sell anywhere globally.', example:'Apple makes iPhones in China, sells in Europe. If the euro weakens, European revenue is worth LESS in dollars — that is foreign exchange risk.' },
    { type:'application', front:'You invest $1,000 in Toyota shares at $1 = ¥100. Shares rise 10%. But yen falls to $1 = ¥120. What is your dollar return?', back:'Step 1: $1,000 × 100 = ¥100,000. Step 2: ¥100,000 × 1.10 = ¥110,000. Step 3: ¥110,000 / 120 = $916.67. Result: You LOST $83.33 despite shares rising 10%. Currency depreciation wiped out your gain.', formula:'Dollar return ≠ Foreign currency return when exchange rate moves' },
    { type:'definition', front:'What is political risk?', back:'The risk that a sovereign government changes the rules adversely — unexpected tax changes, regulations, nationalization, or outright expropriation of assets. No effective legal recourse for the foreign investor.', example:'India cancelled Enron\'s $2.9 billion power plant after an election. Enron lost $300M already invested.' }
  ],
  IF2: [
    { type:'definition', front:'What is the Impossible Trinity (Mundell\'s Trilemma)?', back:'A country CANNOT simultaneously have: (1) Fixed exchange rate, (2) Free capital mobility, AND (3) Independent monetary policy. You must sacrifice one. This appears in almost every final exam.', example:'Eurozone: has fixed rates (within) + free capital → gave up independent monetary policy. Each country cannot set its own interest rates.' },
    { type:'application', front:'EXAM QUESTION: Fixed exchange rates and free capital mobility are jointly incompatible with what?', back:'INDEPENDENT MONETARY POLICY. If you fix your exchange rate AND allow free capital flows, you cannot also set your own interest rates — capital flows will force your rates to match the anchor currency. Answer: C in the MCQ.', formula:'Fixed rate + Free capital = No monetary autonomy' },
    { type:'definition', front:'What is the Triffin Paradox?', back:'The fundamental contradiction of Bretton Woods: the US had to run balance of payments DEFICITS to supply the world with enough dollar reserves. But deficits eventually undermined confidence in the dollar — making the system self-defeating. Led to collapse in 1971.', formula:'Reserve currency country must run deficits → deficits undermine confidence → system collapses' }
  ],
  IF3: [
    { type:'definition', front:'What is the Balance of Payments?', back:'A statistical record of ALL economic transactions between residents of a country and the rest of the world over a period. Uses double-entry bookkeeping: every transaction has one credit and one debit entry. The total always balances.', formula:'BCA + BKA + BFA + BRA = 0' },
    { type:'definition', front:'What is the rule for credits and debits in the BoP?', back:'CREDIT (+): Money flows INTO the country — exports, foreign investment in the country, receipts from abroad. DEBIT (−): Money flows OUT — imports, investment abroad, payments to foreigners. Think: credit = someone pays US dollars TO you.', example:'US exports Boeing planes → foreign buyer pays USD → CREDIT to US current account.' },
    { type:'application', front:'Tesla acquires a French startup for $500M. Where does this appear in France\'s BoP?', back:'France\'s Financial Account CREDIT (+): France received $500M foreign investment — capital inflow. This is FDI inflow, NOT current account. TRAP: FDI is ALWAYS in the financial account, never the current account.', formula:'FDI → Financial Account (NOT Current Account)' }
  ],
  IF4: [
    { type:'definition', front:'What is a direct quote vs indirect quote? (US perspective)', back:'Direct (US): USD per 1 foreign currency unit. EUR/USD = 1.12 means 1 EUR costs $1.12. Indirect (US): foreign currency per 1 USD. USD/EUR = 0.89 means $1 buys €0.89. Direct = 1/Indirect. The base currency is ALWAYS the "one unit."', formula:'Direct = 1/Indirect. Base currency = 1 unit.' },
    { type:'application', front:'TRAP: EUR/USD changes from 1.2 to 1.5. EUR appreciated by 25%. USD depreciated by what %?', back:'USD depreciated by 20% — NOT 25%. USD/EUR went from 1/1.2=0.833 to 1/1.5=0.667. Change = (0.667-0.833)/0.833 = -20%. Appreciation and depreciation percentages are ALWAYS different. BOTH appear as answer choices.', formula:'% change (base) = (New-Old)/Old × 100. Appreciation ≠ Depreciation %.' },
    { type:'formula', front:'What is the formula for forward premium/discount? What do positive and negative values mean?', back:'Forward Premium/Discount = (F - S) / S × 100. Annualized: × (360/days) or × (12/months). Positive = base currency at PREMIUM (worth more forward). Negative = base currency at DISCOUNT (worth less forward).', formula:'FP/D = [(F-S)/S] × (360/days) × 100' }
  ],
  IF5: [
    { type:'formula', front:'What is Interest Rate Parity (IRP)? Give the formula.', back:'The forward exchange rate exactly offsets the interest rate differential between two countries. If IRP holds, investing domestically or abroad (with FX hedging) gives the same return.', formula:'F = S × (1 + i_domestic) / (1 + i_foreign). Or: F/S = (1+i_d)/(1+i_f)' },
    { type:'application', front:'S_USD/GBP = 1.2478, F_USD/GBP = 1.2696, i_GBP = 3.25%. Find i_USD using IRP. (2025 Final Q3)', back:'(1+i_$) = (F/S) × (1+i_£) = (1.2696/1.2478) × 1.0325 = 1.01747 × 1.0325 = 1.05054. i_$ = 5.054% ≈ 5.05%.', formula:'(1+i_d) = (F/S) × (1+i_f)' },
    { type:'formula', front:'What is Relative PPP? What does it predict?', back:'The exchange rate CHANGE reflects the inflation differential. The country with HIGHER inflation sees its currency DEPRECIATE.', formula:'E[S_t] = S_0 × (1+π_domestic)/(1+π_foreign). Approximate: ΔS/S ≈ π_d - π_f' }
  ],
  IF6: [
    { type:'formula', front:'Futures P&L formulas for long and short positions.', back:'You BOUGHT (long): profit when price RISES. You SOLD (short): profit when price FALLS.', formula:'Long P&L = (S_T - F_0) × Contract Size. Short P&L = (F_0 - S_T) × Contract Size.' },
    { type:'application', front:'TRAP: You sold corn futures at $1.99/bushel. Spot at maturity = $2.10. Contract = 5,000 bushels. P&L? (2025 Final)', back:'Short: (F_0 - S_T) × size = (1.99 - 2.10) × 5,000 = -$0.11 × 5,000 = -$550 LOSS. You SOLD at $1.99 but market went to $2.10 → you must deliver at $1.99 → LOSS.', formula:'Short profits when price FALLS. If price rises → SHORT LOSES.' },
    { type:'formula', front:'Option payoffs at expiry — call and put formulas.', back:'Call is valuable when spot EXCEEDS strike (right to buy cheaply). Put is valuable when spot is BELOW strike (right to sell expensively).', formula:'Call payoff = max(0, S_T - X). Put payoff = max(0, X - S_T). Profit = Payoff - Premium.' }
  ],
  IF7: [
    { type:'definition', front:'What are the 3 types of foreign exchange exposure?', back:'1. Transaction: sensitivity of CONTRACTUAL cash flows (receivables/payables) to FX changes. 2. Economic: extent firm VALUE is affected by unexpected FX changes — affects future sales and costs. 3. Translation: potential for CONSOLIDATED financial statements to be affected when converting foreign subsidiaries.', formula:'Transaction = contracts. Economic = firm value. Translation = accounting.' },
    { type:'application', front:'A US firm has a £10M receivable in 1 year. Spot $1.50/£, Forward $1.46/£. What is the forward hedge and what does it guarantee?', back:'SELL £10M forward at $1.46/£. Guaranteed proceeds = £10M × $1.46 = $14,600,000 regardless of what spot does. If spot falls to $1.30, unhedged would only give $13M — hedge saves $1.6M. If spot rises to $1.60, unhedged gives $16M — hedge gives up $1.4M of upside.', formula:'Forward hedge receivable: proceeds = FC amount × F' },
    { type:'application', front:'How does an OPTIONS hedge differ from a forward hedge for a receivable?', back:'Forward: locks in rate, eliminates all uncertainty, gives up all upside. Options (buy PUT): gives FLOOR protection but keeps UPSIDE. If spot falls below strike → exercise put, get strike. If spot rises above strike → let put expire, sell at higher market rate. Cost: premium paid upfront.', formula:'Options hedge = guaranteed floor + upside potential - premium cost' }
  ],
  IF8: [
    { type:'definition', front:'What is the agency problem?', back:'Managers (agents) might act in their own short-term best interest instead of shareholders\' (principals\') long-term best interest. When professional managers have small equity stakes in diffusely owned companies, they have both POWER and MOTIVE to engage in self-dealing.', example:'CEO approves a bad acquisition that grows their empire and salary but destroys shareholder value.' },
    { type:'definition', front:'What are the 8 remedies for the agency problem? (mnemonic: ICCA-DOSM)', back:'I: Independent Board. C: Concentrated Ownership. C: Contracts (Incentive). A: Accounting Transparency. D: Debt. O: Overseas Listing. S: Shareholder Activism. M: Market for Corporate Control (hostile takeover threat).', formula:'ICCA-DOSM: 8 mechanisms that ALL alleviate the agency problem.' },
    { type:'application', front:'TRAP: Which of the following does NOT alleviate the agency problem? A) Stock options B) Independent board C) Dispersed shareholding D) Debt E) None of the above', back:'Answer: C — Dispersed shareholding is a WEAKNESS of the public corporation, not a remedy. When ownership is dispersed, NO individual shareholder has enough at stake to pay the costs of monitoring management. The remedy is CONCENTRATED ownership, not dispersed.', formula:'Dispersed = weak monitoring. Concentrated = strong monitoring.' }
  ],
  IF9: [
    { type:'definition', front:'What is FDI and how does it differ from portfolio investment?', back:'FDI (Foreign Direct Investment): cross-border investment giving the investor CONTROL (≥10% ownership) and lasting interest in a foreign enterprise. Portfolio: buying stocks/bonds for financial return WITHOUT operational control. FDI appears in the FINANCIAL ACCOUNT of the BoP — tested every year.', formula:'FDI ≥ 10% ownership + control. Portfolio = financial return only. Both in Financial Account.' },
    { type:'application', front:'Give 3 reasons firms invest overseas and explain each. (Always asked in finals)', back:'1. Trade Barriers: tariffs/quotas block exports → build factory inside target market. Honda Ohio bypasses US import restrictions. 2. Imperfect Labor Market: immigration barriers create wage gaps → move factory to cheap labor. India $0.80/hr vs Denmark $54/hr. 3. Intangible Assets: patents/brands valuable globally; FDI protects from misappropriation. Coca-Cola withdrew from India rather than reveal formula.' },
    { type:'application', front:'TRAP: Which is NOT a reason for FDI? A) Trade barriers B) Imperfect labor market C) Expropriation of assets D) Product life cycle E) Vertical integration', back:'Answer: C — Expropriation is a RISK of FDI (political risk), NOT a reason TO invest. One final exam specifically tested this. Firms invest overseas DESPITE expropriation risk, not BECAUSE of it.', formula:'Expropriation = risk, not motive.' }
  ]
};

const TRAP_TRAINER = [
  { category: 'Appreciation vs Depreciation (different percentages)', q: 'EUR/USD changes from 1.2 to 1.5. What is the percentage DEPRECIATION of the USD?', options: ['25%','20%','-25%','-20%','None of the above'], answer: 1, explanation: 'EUR appreciated (1.5-1.2)/1.2 = 25%. For USD: USD/EUR went from 0.833 to 0.667. Change = (0.667-0.833)/0.833 = -20%. Appreciation and depreciation percentages are ALWAYS different numbers. The exam puts BOTH as answer choices.' },
  { category: 'Appreciation vs Depreciation (different percentages)', q: 'CAN/EUR goes from 1.1 to 1.4. EUR has appreciated by:', options: ['21.4%','27.3%','-27.3%','-21.4%','None of the above'], answer: 1, explanation: 'EUR is the BASE currency. % change = (1.4-1.1)/1.1 = 27.3%. CAN depreciated (1.1-1.4)/1.4 = -21.4%. These are DIFFERENT. Always identify which currency the question asks about.' },
  { category: 'Appreciation vs Depreciation (different percentages)', q: 'USD/GBP spot = 1.42, forward = 1.4109. USD is at a:', options: ['0.642% premium vs GBP','0.642% discount vs GBP','1.284% discount','0.642% premium vs USD','None of the above'], answer: 1, explanation: '(1.4109/1.42)-1 = -0.642%. Fewer USD per GBP forward → USD buys LESS GBP → USD at DISCOUNT. From 2025 final.' },
  { category: 'None of the Above', q: 'A put option is worth $10. The spot price is $50. What is the strike price?', options: ['$40','$50','$55','$60','None of the above'], answer: 3, explanation: 'Put payoff = max(0, X - S_T). 10 = X - 50. X = $60. If you rushed and picked "None of the above" by mistake, you lost 0.25 points. Always compute first.' },
  { category: 'None of the Above', q: 'You sold corn futures at $1.99. Spot at maturity = $2.10. Contract size = 5,000 bushels. Profit?', options: ['+$550','-$1,050','+$1,050','-$550','None of the above'], answer: 3, explanation: 'Short: (F_0 - S_T) × size = (1.99 - 2.10) × 5,000 = -$550 LOSS. From 2025 final. Answer D is -$550, which IS one of the choices — don\'t reflexively pick "None."' },
  { category: 'Forward Premium/Discount — Which Currency', q: 'Spot: ¥119.795/$. 4-month forward: ¥118.397/$. Annualised forward premium/discount on USD?', options: ['3.5% premium','3.5% discount','4.5% premium','4.5% discount','None of the above'], answer: 1, explanation: 'Fewer yen per dollar forward → dollar buys LESS yen → USD at DISCOUNT. (118.397/119.795 - 1) × 3 = -3.5%. Annualised = -3.5% per year. USD is at a 3.5% DISCOUNT.' },
  { category: 'Bid-Ask Direction', q: 'EUR/USD: Bid 1.08, Ask 1.09. A US traveller returning from Europe wants to SELL euros. What rate?', options: ['1.09','1.085','1.08','Depends on amount','None of the above'], answer: 2, explanation: 'Traveller SELLS EUR → bank BUYS EUR at the BID = 1.08. Customer always gets the worse rate. If you\'re SELLING, you get the BID (lower). If you\'re BUYING, you pay the ASK (higher).' },
  { category: 'Bid-Ask Direction', q: 'The ASK price is the price at which the bank is willing to:', options: ['Buy the base currency','Sell the base currency','Buy the quote currency','Sell the quote currency','None of the above'], answer: 1, explanation: 'ASK = bank SELLS the BASE currency. BID = bank BUYS the base currency. Simple but frequently tested.' },
  { category: 'Call vs Put Direction', q: 'You bought a put option on EUR with strike $1.10. Spot at expiry = $1.05. Do you exercise?', options: ['No — the put is out of the money','Yes — you profit $0.05 per EUR','No — calls are exercised when spot < strike','Yes — but only if you own EUR','None of the above'], answer: 1, explanation: 'Long PUT = right to SELL EUR at $1.10. Spot = $1.05. Exercising lets you sell at $1.10 when market only offers $1.05 → profit of $0.05 per EUR. The put is IN the money (spot < strike).' },
  { category: 'Call vs Put Direction', q: 'A written (short) call option: profit is:', options: ['Unlimited when price rises','Limited to the premium received','Zero if not exercised','Equal to the payoff of a long put','None of the above'], answer: 1, explanation: 'Short call writer: maximum profit = premium received. If price never exceeds strike, option expires worthless, writer keeps premium. But if price rises above strike: writer faces UNLIMITED loss.' },
  { category: 'Futures P&L Sign', q: 'You bought gold futures at $1,500/oz. At maturity, spot = $1,400/oz. Contract = 100 oz. P&L?', options: ['$10,000 profit','$10,000 loss','$14,000 profit','$15,000 loss','None of the above'], answer: 1, explanation: 'Long: (S_T - F_0) × size = (1,400 - 1,500) × 100 = -$10,000. You BOUGHT at $1,500 and the market is only worth $1,400 → loss. Many students put the wrong sign.' },
  { category: 'Futures P&L Sign', q: 'You SOLD 3 EUR September futures at $1.08/€. Spot at maturity = $1.12/€. Size = 125,000 EUR each. P&L?', options: ['+$15,000','-$15,000','+$45,000','-$45,000','None of the above'], answer: 1, explanation: 'Short: (F_0 - S_T) × size × contracts = (1.08 - 1.12) × 125,000 × 3 = -$0.04 × 375,000 = -$15,000 LOSS. You sold at $1.08, market went to $1.12 → you lost.' },
  { category: 'Put Option Strike Calculation', q: 'A put option is worth $20. Spot = $70. What is the strike price?', options: ['$50','$70','$80','$90','None of the above'], answer: 3, explanation: 'Put payoff = max(0, X - S_T). 20 = X - 70. X = $90. From 2024 final. Key formula: Strike = Spot + Put Value (when option is in the money).' },
  { category: 'Put Option Strike Calculation', q: 'A put option with strike $95 expires when spot = $80. What is the put worth?', options: ['$0','$15','$80','$95','None of the above'], answer: 1, explanation: 'Put payoff = max(0, 95 - 80) = $15. Spot < Strike → in the money → worth Strike - Spot.' }
];

const MOCK_EXAM = {
  mcq: [
    { q: 'Globalization:', options: ['Causes countries to become more self-sufficient','Facilitates easy movement of goods, capital and services across borders','Has no effect on international trade','Is primarily a post-2010 phenomenon','None of the other answers'], answer: 1, explanation: 'Keywords: movement, goods, capital, services' },
    { q: 'In the Balance of Payments, which belongs to the FINANCIAL ACCOUNT?', options: ['Worker remittances sent home from abroad','Exports of goods','Foreign Direct Investment by a domestic firm','Primary income (interest and dividends)','None of the other answers'], answer: 2, explanation: 'FDI → Financial Account. Others → Current Account.' },
    { q: 'EUR/GBP changes from 0.88 to 0.90. Which is TRUE?', options: ['GBP has appreciated 2.27%','EUR has appreciated 2.27%','GBP has depreciated 2.22%','EUR has depreciated 2.27%','None of the other answers'], answer: 1, explanation: 'EUR/GBP: EUR is base. (0.90-0.88)/0.88 = 2.27%. EUR appreciated.' },
    { q: 'You sold one wheat futures at $6.50/bushel. Spot at maturity = $6.80/bushel. Contract = 5,000 bushels. P&L?', options: ['$1,500 profit','$1,500 loss','$2,500 loss','$2,500 profit','None of the other answers'], answer: 1, explanation: 'Short: (6.50-6.80)×5,000 = -$1,500 LOSS.' },
    { q: 'Stock spot = $80. May put worth $15. What is the exercise price?', options: ['$65','$80','$95','$15','None of the other answers'], answer: 2, explanation: 'max(0,X-80)=15 → X=$95.' },
    { q: 'i_US=4.5%, i_EUR=2%, Spot EUR/USD=1.0850. 1-year forward under IRP?', options: ['1.0850','1.1120','1.1117','1.0583','None of the other answers'], answer: 2, explanation: 'F = 1.0850×(1.045/1.02) = 1.1116 ≈ 1.1117.' },
    { q: 'Which does NOT alleviate the agency problem?', options: ['Independent board','Incentive contracts','Concentrated ownership','Dispersed shareholding with no monitoring','None of the other answers'], answer: 3, explanation: 'Dispersed shareholding = WEAKNESS (weak monitoring). All others = remedies.' },
    { q: 'Tesla\'s acquisition of a French startup appears in which account of France\'s BoP?', options: ['Current Account (Services)','Current Account (Primary Income)','Capital Account','Financial Account','None of the other answers'], answer: 3, explanation: 'FDI → Financial Account. Always.' }
  ],
  problems: [
    { q: 'P1: CAN/EUR changes from 1.40 to 1.25. What is % change for EUR? Appreciation or depreciation?', answer: '-10.71', model: 'EUR is base. (1.25-1.40)/1.40 = -10.71%. EUR DEPRECIATED by 10.71%.' },
    { q: 'P2: Spot USD/GBP=1.2478, Forward=1.2696, i_GBP=3.25%. Find i_USD.', answer: '5.05', model: '(1+i_$) = (1.2696/1.2478)×1.0325 = 1.05054 → i_$ = 5.05%' },
    { q: 'P3: US basket=$500, Japan basket=¥55,000, Spot=¥110/$. Is USD correctly valued under absolute PPP?', answer: 'correctly', model: 'PPP rate = ¥55,000/$500 = ¥110/$. Current = ¥110/$. CORRECTLY VALUED under PPP.' },
    { q: 'P4: Long 3 EUR September futures at $1.08/€. Maturity spot=$1.12/€. Size=125,000 EUR. Total P&L?', answer: '15000', model: '(1.12-1.08)×125,000×3 = $15,000 PROFIT.' },
    { q: 'P5: Stock=$100. Call option with strike $95 about to expire. Option worth?', answer: '5', model: 'Call payoff = max(0, 100-95) = $5.' },
    { q: 'P6: Sold corn futures at $7.50/bushel. Maturity spot=$6.90. Size=5,000 bushels. P&L?', answer: '3000', model: 'Short: (7.50-6.90)×5,000 = $3,000 PROFIT.' },
    { q: 'P7: Forward USD/EUR=1.0572, Spot=1.0420, i_EUR=3%. Find i_USD.', answer: '4.50', model: '(1+i_$) = (1.0572/1.0420)×1.03 = 1.04503 → i_$ = 4.50%' }
  ],
  oq: [
    { q: 'OQ1: List and explain 2 features that make International Finance different from domestic finance.', keywords: ['foreign exchange','political risk','market imperfections','opportunity','currency','sovereign'], model: 'Foreign Exchange Risk and Political Risk are core distinctions.' },
    { q: 'OQ2: Define the Balance of Payments. Why is it useful to analyse? Give 2 reasons.', keywords: ['statistical record','transactions','currency','forecasting','competitiveness','policy'], model: 'BoP records all resident-vs-rest-of-world transactions and helps currency forecasting and competitiveness analysis.' },
    { q: 'OQ3: Cross-rates: USD/JPY=150, USD/CHF=0.92. What is JPY/CHF?', keywords: ['163.04'], model: 'JPY/CHF = 150/0.92 = 163.04.' },
    { q: 'OQ4: IRP: Spot EUR/USD=1.10, i_US=5%, i_EU=2%. Calculate 1-year forward rate.', keywords: ['1.1324'], model: 'F = 1.10×(1.05/1.02) = 1.1324.' },
    { q: 'OQ5: Invest $1M: US rate=5.25%, UK rate=4.25%, Spot=1.2225 USD/GBP, Forward=1.2588. Where?', keywords: ['uk','1073455'], model: 'UK investment gives $1,073,455; invest in UK.' },
    { q: 'OQ6: Explain absolute PPP. US basket=$400, UK basket=£250, Spot=$1.50/£. Is USD correctly valued?', keywords: ['law of one price','price level','basket','overvalued','undervalued','equilibrium'], model: 'PPP is $1.60/£ vs actual $1.50/£, so USD is overvalued.' },
    { q: 'OQ7: US firm sold €2M of goods to Germany. Payment in 1 year. Forward = $1.10/€. Forward hedge?', keywords: ['sell','forward','2200000','guaranteed'], model: 'Sell €2M forward at $1.10/€; lock $2.2M.' },
    { q: 'OQ8: Buy silver futures at $25/oz, 100 oz. Spot at maturity = $30/oz. Profit? What if SOLD instead?', keywords: ['500','-500','long','short'], model: 'Long +$500, short -$500.' },
    { q: 'OQ9: What is transaction exposure? Name 2 instruments to hedge it.', keywords: ['contractual','receivables','payables','forward','options','money market','exchange rate'], model: 'Sensitivity of contractual cash flows; hedge with forwards/options/money market.' },
    { q: 'OQ10: Give 3 reasons why firms invest overseas. Explain each.', keywords: ['trade barriers','labor','intangible','vertical','product cycle','diversification'], model: 'Trade barriers, labor market imperfections, and intangibles are key motives.' }
  ]
};

const rendered = new Set();

function escapeHtml(s) {
  const d = document.createElement('div');
  d.textContent = s;
  return d.innerHTML;
}

function formulaVarsHTML(vars) {
  if (!vars || !vars.length) return '';
  const colors = ['#6B21A8', '#16A34A', '#CA8A04', '#EA580C', '#DC2626', '#7C3AED'];
  return vars
    .map(
      (v, i) =>
        `<p class="var-line"><span style="color:${v.color || colors[i % colors.length]}">${escapeHtml(v.symbol)}</span> — ${escapeHtml(v.meaning)}</p>`
    )
    .join('');
}

function renderTopicSection(id) {
  const t = TOPICS[id];
  if (!t) return '';
  const levels = ['1', '2', '3', '4', '5'];
  const badges = ['L1', 'L2', 'L3', 'L4', 'L5'];
  const anchor = (n) => `${id}-L${n}`;
  const mastered = localStorage.getItem(`mastered-${id}`) === '1';
  return `
  <section class="topic-section" data-topic="${id}">
    <nav class="topic-breadcrumb" aria-label="Back to topics">
      <a href="#home" class="breadcrumb-back">${tr('nav.back')}</a>
    </nav>
    <div class="topic-banner">
      <span class="topic-badge">${id}</span>
      <h2>${escapeHtml(t.title)}${mastered ? `<span class="topic-mastered">${tr('mastered')}</span>` : ''}</h2>
      <p class="topic-tagline">${escapeHtml(t.tagline)}</p>
      <div class="level-nav" aria-label="Levels">
        ${levels.map((n, i) => `<a href="#${anchor(n)}">${badges[i]}</a>`).join('')}
      </div>
    </div>
    ${renderLevel1(id, t)}
    ${renderFlashcardDeck(id)}
    ${renderLevel2(id, t)}
    ${renderLevel3(id, t)}
    ${renderLevel4(id, t)}
    ${renderLevel5(id, t)}
  </section>`;
}

function renderFlashcardDeck(id) {
  const cards = FLASHCARDS[id] || [];
  const state = {
    queue: shuffle(cards.map((c, i) => ({ ...c, _id: `${id}-${i}` }))),
    mastered: 0,
    total: cards.length,
  };
  window.__flashState = window.__flashState || {};
  window.__flashState[id] = state;
  if (!cards.length) return '';
  return `
  <article class="level-card flashcard-shell" id="${id}-flashcards">
    <div class="level-head">
      <h3><span class="level-dot" aria-hidden="true"></span>${tr('flash.title')}</h3>
      <p class="level-sub">${tr('flash.sub')}</p>
    </div>
    <div class="progress-line"><div class="progress-fill" id="${id}-flash-progress"></div></div>
    <p id="${id}-flash-count">0 / ${cards.length} mastered</p>
    <div id="${id}-flash-body"></div>
  </article>`;
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function renderLevel1(id, t) {
  const l = t.level1;
  const terms = l.keyTerms
    .map(
      (kt, i) => `
    <div class="term-wrap" style="width:100%">
      <button type="button" class="term-pill" id="${id}-term-${i}" aria-expanded="false" data-term="${id}-${i}">${escapeHtml(kt.term)}</button>
      <div class="term-def" id="${id}-def-${i}">${escapeHtml(kt.definition)}</div>
    </div>`
    )
    .join('');
  const mcqs = l.mcqs
    .map(
      (q, qi) => `
    <div class="mcq-block" data-mcq="${id}-1-${qi}">
      <p><strong>${escapeHtml(q.question)}</strong></p>
      <div class="mcq-grid">
        ${q.options
          .map(
            (opt, oi) =>
              `<button type="button" class="mcq-option" data-correct="${oi === q.correct}" data-oi="${oi}">${escapeHtml(opt)}</button>`
          )
          .join('')}
      </div>
      <p class="mcq-feedback-block" style="display:none;margin-top:0.75rem;font-size:0.95rem" data-feedback>${escapeHtml(q.explanation)}</p>
    </div>`
    )
    .join('');
  return `
  <article class="level-card l1" id="${id}-L1">
    <div class="level-head">
      <h3><span class="level-dot" aria-hidden="true"></span>${tr('level.1.title')}</h3>
      <p class="level-sub">${tr('level.1.sub')}</p>
    </div>
    <div class="concept-block">
      <p>${escapeHtml(l.explanation)}</p>
      <div class="callout"><strong>Analogy:</strong> ${escapeHtml(l.analogy)}</div>
      <div class="story-card">
        <h4>${escapeHtml(l.historicalExample.title)}</h4>
        <p>${escapeHtml(l.historicalExample.story)}</p>
      </div>
    </div>
    <h4>${tr('terms.title')}</h4>
    <div class="key-term-tags">${terms}</div>
    <h4>Level 1 quiz</h4>
    ${mcqs}
    <p class="mcq-score" id="${id}-mcq1-score"></p>
    <div class="continue-row" id="${id}-l1-continue" hidden>
      <a class="btn btn-primary" href="#${id}-L2">Continue to Level 2</a>
    </div>
  </article>`;
}

function renderLevel2(id, t) {
  const l = t.level2;
  const formulas = l.formulas
    .map(
      (f) => `
    <div class="formula-card">
      <div class="formula-mono">${escapeHtml(f.formula)}</div>
      ${formulaVarsHTML(f.variables)}
    </div>`
    )
    .join('');
  const steps = l.workedExample.steps
    .map(
      (s, i) => `
    <div class="worked-step"><strong>Step ${i + 1}:</strong> ${escapeHtml(s.desc)} → ${escapeHtml(s.calc)} = <strong>${escapeHtml(s.result)}</strong></div>`
    )
    .join('');
  const givenList = l.workedExample.given.map((g) => `<li>${escapeHtml(g)}</li>`).join('');
  const qs = l.questions
    .map(
      (q, qi) => `
    <div class="l2-q question-block" data-l2q="${id}-${qi}">
      <p><strong>${escapeHtml(q.question)}</strong></p>
      <textarea class="l2-textarea" minlength="3" rows="4" placeholder="Type at least 3 words..."></textarea>
      <button type="button" class="btn btn-primary l2-check check-answer-btn" data-topic="${id}" data-qi="${qi}" data-question-index="${qi}">${tr('btn.check')}</button>
      <div class="l2-result" id="${id}-l2-result-${qi}" hidden></div>
    </div>`
    )
    .join('');
  return `
  <article class="level-card l2" id="${id}-L2">
    <div class="level-head">
      <h3><span class="level-dot" aria-hidden="true"></span>${tr('level.2.title')}</h3>
      <p class="level-sub">${tr('level.2.sub')}</p>
    </div>
    ${formulas}
    <div class="worked-example">
      <h4>${escapeHtml(l.workedExample.title)}</h4>
      <ul>${givenList}</ul>
      ${steps}
      <div class="final-answer">Final: ${escapeHtml(l.workedExample.finalAnswer)}</div>
      <p>Why this works: ${escapeHtml(l.workedExample.insight)}</p>
    </div>
    <h4>Open questions</h4>
    ${qs}
  </article>`;
}

function renderGivenTable(g) {
  if (!g || !g.headers) return '';
  const rows = g.rows.map((r) => `<tr>${r.map((c) => `<td>${escapeHtml(String(c))}</td>`).join('')}</tr>`).join('');
  return `<table class="given-table"><thead><tr>${g.headers.map((h) => `<th>${escapeHtml(h)}</th>`).join('')}</tr></thead><tbody>${rows}</tbody></table>`;
}

function renderLevel3(id, t) {
  const p = t.level3.problem;
  const solSteps = p.solution.steps
    .map(
      (s, i) => `
    <div class="worked-step"><strong>Step ${i + 1}:</strong> ${escapeHtml(s.desc)} — ${escapeHtml(s.calc)} → <strong>${escapeHtml(String(s.result))}</strong></div>`
    )
    .join('');
  return `
  <article class="level-card l3" id="${id}-L3">
    <div class="level-head">
      <h3><span class="level-dot" aria-hidden="true"></span>${tr('level.3.title')}</h3>
      <p class="level-sub">${tr('level.3.sub')}</p>
    </div>
    <h4>${escapeHtml(p.title)}</h4>
    <p>${escapeHtml(p.scenario)}</p>
    ${renderGivenTable(p.given)}
    <p><strong>Required:</strong> ${escapeHtml(p.required)}</p>
    <div class="hints" id="${id}-hints">
      ${p.hints.map((h, i) => `<div class="hint-box" id="${id}-hint-${i}" hidden><strong>Hint ${i + 1}:</strong> ${escapeHtml(h)}</div>`).join('')}
    </div>
    <button type="button" class="btn btn-outline l3-hint-btn" data-id="${id}" data-next="0">${tr('btn.hint')} 1</button>
    <p>
      <label>Your answer<br />
      <input type="text" id="${id}-l3-ans" class="l3-input" style="width:100%;min-height:44px;padding:0.5rem" /></label>
    </p>
    <button type="button" class="btn btn-primary l3-submit" data-id="${id}">${tr('btn.submit')}</button>
    <div class="l3-solution" id="${id}-l3-sol" hidden>
      <h4>Worked solution</h4>
      ${solSteps}
      <div class="final-answer">${escapeHtml(p.solution.finalAnswer || p.solution.insight || '')}</div>
      <p>${escapeHtml(p.solution.insight || '')}</p>
    </div>
  </article>`;
}

function renderLevel4(id, t) {
  const l = t.level4;
  const sol = l.calcQuestion.solution;
  const calcSteps = sol.steps
    .map(
      (s, i) => `<div class="worked-step"><strong>Step ${i + 1}:</strong> ${escapeHtml(s.desc)} ${escapeHtml(s.calc)} → ${escapeHtml(String(s.result))}</div>`
    )
    .join('');
  return `
  <article class="level-card l4" id="${id}-L4">
    <div class="level-head">
      <h3><span class="level-dot" aria-hidden="true"></span>${tr('level.4.title')}</h3>
      <p class="level-sub">${tr('level.4.sub')}</p>
    </div>
    <div class="l4-open" data-l4open="${id}">
      <p><strong>${escapeHtml(l.openQuestion.question)}</strong></p>
      <textarea class="l4-textarea" minlength="20" rows="6" placeholder="At least 20 words…"></textarea>
      <button type="button" class="btn btn-primary l4-open-submit" data-id="${id}">${tr('btn.submit')}</button>
      <div id="${id}-l4-open-result" hidden></div>
    </div>
    <hr />
    <div class="l4-calc" data-l4calc="${id}">
      <p><strong>${escapeHtml(l.calcQuestion.question)}</strong></p>
      <input type="text" id="${id}-l4-calc" style="width:100%;min-height:44px;padding:0.5rem" />
      <button type="button" class="btn btn-primary l4-calc-submit" data-id="${id}">${tr('btn.submit')}</button>
      <div id="${id}-l4-calc-result" hidden></div>
      <div class="model-answer" id="${id}-l4-calc-model" hidden>
        <strong>Worked solution:</strong>
        ${calcSteps}
        <div class="final-answer">${escapeHtml(sol.finalAnswer)}</div>
      </div>
    </div>
    <div class="self-assess" id="${id}-self" hidden>
      <p><strong>How do you feel about this topic?</strong></p>
      <button type="button" class="btn btn-primary self-btn" data-msg="Level 5 unlocked! You're ready for the boss.">Got it</button>
      <button type="button" class="btn btn-outline self-btn" data-msg="Review Level 2 formulas, then try Level 5.">Mostly</button>
      <button type="button" class="btn btn-outline self-btn" data-msg="Go back to Level 1 and take your time.">Need more practice</button>
      <p class="self-msg" aria-live="polite"></p>
    </div>
  </article>`;
}

function renderLevel5(id, t) {
  const c = t.level5.caseStudy;
  const solB = c.partB.solution;
  const bSteps = solB.steps.map((s, i) => `<div class="worked-step">${escapeHtml(s.desc)} ${escapeHtml(s.calc)} → ${escapeHtml(String(s.result))}</div>`).join('');
  return `
  <article class="level-card l5" id="${id}-L5">
    <div class="level-head">
      <h3><span class="level-dot" aria-hidden="true"></span>${tr('level.5.title')}</h3>
      <p class="level-sub">${tr('level.5.sub')}</p>
    </div>
    <div class="memo" style="border:1px solid #E5E7EB;padding:1rem;border-radius:8px;background:#fff">
      <strong>${escapeHtml(c.title)}</strong>
      <p>${escapeHtml(c.scenario)}</p>
    </div>
    <div class="boss-part" data-part="a">
      <h4>Part A</h4>
      <p><strong>${escapeHtml(c.partA.question)}</strong></p>
      <textarea class="l5-a" rows="5" style="width:100%"></textarea>
      <button type="button" class="btn btn-primary l5a-sub" data-id="${id}">${tr('btn.submit')} Part A</button>
      <div id="${id}-l5a-result" hidden></div>
    </div>
    <div class="boss-part part-locked" data-part="b" id="${id}-l5b-wrap">
      <h4>Part B</h4>
      <p><strong>${escapeHtml(c.partB.question)}</strong></p>
      <input type="text" class="l5-b" style="width:100%;min-height:44px" />
      <button type="button" class="btn btn-primary l5b-sub" data-id="${id}">${tr('btn.submit')} Part B</button>
      <div id="${id}-l5b-result" hidden></div>
      <div id="${id}-l5b-model" hidden class="model-answer">${bSteps}<div class="final-answer">${escapeHtml(solB.finalAnswer)}</div></div>
    </div>
    <div class="boss-part part-locked" data-part="c" id="${id}-l5c-wrap">
      <h4>Part C</h4>
      <p><strong>${escapeHtml(c.partC.question)}</strong></p>
      <textarea class="l5-c" rows="4" style="width:100%"></textarea>
      <button type="button" class="btn btn-primary l5c-sub" data-id="${id}">${tr('btn.submit')} Part C</button>
      <div id="${id}-l5c-result" hidden></div>
    </div>
    <div class="badge-row" id="${id}-l5-badge" hidden></div>
    <div class="continue-row"><a class="btn btn-outline" href="#mock-exam">Take the Mock Exam</a></div>
  </article>`;
}

function mountTopics() {
  const mount = document.getElementById('topics-mount');
  if (!mount) return;
  mount.innerHTML = `<div id="story-route" class="topic-route story-route" style="display:none"></div>${TOPIC_ORDER.map(
    (id) => `<div id="topic-${id}" class="topic-route topic-page" data-topic-wrap="${id}" style="display:none"></div>`
  ).join('')}`;
}

function ensureTopicRendered(id) {
  if (rendered.has(id)) return;
  const wrap = document.getElementById(`topic-${id}`);
  if (!wrap) return;
  wrap.innerHTML = renderTopicSection(id);
  rendered.add(id);
  initTopicInteractions(id);
}

function parseHash(hash) {
  const raw = (hash || '').replace(/^#/, '').trim() || 'home';
  if (raw === 'home' || raw === '') return { type: 'home', scrollTo: null };
  if (raw === 'story') return { type: 'story', topicId: null };
  if (raw === 'how-to-study') return { type: 'how-to-study' };
  const storyTopic = raw.match(/^story-(IF\d+)$/);
  if (storyTopic) return { type: 'story', topicId: storyTopic[1] };
  const homeAnchorAliases = { traps: 'trap-trainer', mock: 'mock-exam', grades: 'grade-calc' };
  if (homeAnchorAliases[raw]) return { type: 'home', scrollTo: homeAnchorAliases[raw] };
  const homeAnchors = ['grade-calc', 'doubt-board', 'hero', 'topic-picker', 'trap-trainer', 'mock-exam'];
  if (homeAnchors.includes(raw)) return { type: 'home', scrollTo: raw };
  const topicPrefix = raw.match(/^(IF\d+)/);
  if (topicPrefix) {
    const id = topicPrefix[1];
    const inTopicAnchor = raw !== id ? raw : null;
    return { type: 'topic', id, inTopicAnchor };
  }
  return { type: 'home', scrollTo: null };
}

function renderView(hash, options) {
  const opts = options || {};
  const skipFade = opts.skipFade === true;
  const parsed = parseHash(hash);
  const stage = document.getElementById('spa-stage');
  const homeEl = document.getElementById('home-view');
  const storyViewEl = document.getElementById('story-view');
  const howToStudyViewEl = document.getElementById('how-to-study-view');
  if (!homeEl) return;

  const applyView = () => {
    document.querySelectorAll('.nav-topic-link').forEach((el) => el.classList.remove('active'));
    homeEl.style.display = 'none';
    if (storyViewEl) storyViewEl.style.display = 'none';
    if (howToStudyViewEl) howToStudyViewEl.style.display = 'none';
    document.querySelectorAll('.topic-route').forEach((el) => {
      el.style.display = 'none';
    });
    document.querySelectorAll('.topic-section').forEach((el) => {
      el.style.display = 'none';
    });

    if (parsed.type === 'home') {
      homeEl.style.display = 'block';
      if (parsed.scrollTo) {
        requestAnimationFrame(() => {
          const target = document.getElementById(parsed.scrollTo);
          if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else if (parsed.type === 'story') {
      if (parsed.topicId) renderStoryTopic(parsed.topicId);
      else renderStoryMode();
      if (storyViewEl) storyViewEl.style.display = 'block';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (parsed.type === 'how-to-study') {
      renderHowToStudy();
      if (howToStudyViewEl) howToStudyViewEl.style.display = 'block';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (parsed.type === 'topic') {
      ensureTopicRendered(parsed.id);
      const te = document.getElementById(`topic-${parsed.id}`);
      if (te) te.style.display = 'block';
      const navLink = document.querySelector(`.nav-topic-link[data-topic="${parsed.id}"]`);
      if (navLink) navLink.classList.add('active');
      if (parsed.inTopicAnchor) {
        requestAnimationFrame(() => {
          document.getElementById(parsed.inTopicAnchor)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
    document.getElementById('site-header')?.classList.remove('nav-open');
  };

  if (skipFade || !stage) {
    applyView();
    return;
  }

  stage.classList.add('spa-fade-out');
  window.setTimeout(() => {
    applyView();
    stage.classList.remove('spa-fade-out');
    stage.classList.add('spa-fade-in');
    window.setTimeout(() => stage.classList.remove('spa-fade-in'), 220);
  }, 150);
}

function renderHowToStudy() {
  const container = document.getElementById('how-to-study-view');
  if (!container) return;
  container.innerHTML = `
    <div class="how-to-study-shell">
      <h1 class="how-to-study-title">How to Use This Platform</h1>
      <p class="how-to-study-subtitle">You have 6 days. Here is exactly what to do.</p>

      <div class="study-steps">
        <article class="study-step-card" style="--step-color:#34D399;">
          <span class="study-step-number">01</span>
          <h2>Start with Story Mode</h2>
          <p>If you have never studied International Finance before, start here. Each topic (IF1-IF9) is broken into short stories. A real scenario, a simple explanation, one question. Work through IF4, IF5, and IF6 first — they are 60% of the exam.</p>
          <a href="#story" class="nav-link nav-btn">→ Open Story Mode</a>
        </article>

        <article class="study-step-card" style="--step-color:#4F8EF7;">
          <span class="study-step-number">02</span>
          <h2>Use the Topic Sections for Formulas</h2>
          <p>After each story topic, go to the matching section in the nav (IF1, IF2... IF9). Level 1 explains the concept. Level 2 gives you the formulas. Level 3 gives you a guided calculation. Do this for every topic you cover in Story Mode.</p>
          <a href="#IF4" class="nav-link nav-btn">→ Start with IF4 (most tested)</a>
        </article>

        <article class="study-step-card" style="--step-color:#A78BFA;">
          <span class="study-step-number">03</span>
          <h2>Test Yourself with Traps and Mock Exam</h2>
          <p>Once you have covered the main topics, go to Trap Trainer. These are the 7 mistakes students make every year — negative marking means each wrong answer costs you 0.25 points. Then take the full Mock Exam under timed conditions. It matches the exact 2025 final exam format.</p>
          <div class="study-step-actions">
            <a href="#traps" class="nav-link nav-btn">→ Trap Trainer</a>
            <a href="#mock" class="nav-link nav-btn">→ Mock Exam</a>
          </div>
        </article>

        <article class="study-step-card" style="--step-color:#FBBF24;">
          <span class="study-step-number">04</span>
          <h2>Ask the Tutor Anything</h2>
          <p>The chat bar at the bottom of every page is your personal tutor. It knows the entire course. Ask it to explain a formula, work through a calculation, or tell you what the exam will test on any topic. It only answers International Finance questions.</p>
          <button type="button" class="nav-link nav-btn study-chat-btn" onclick="window.openIFTutorWithPrompt && window.openIFTutorWithPrompt('What is the Impossible Trinity?')">→ Try asking: What is the Impossible Trinity?</button>
        </article>
      </div>

      <section class="how-to-study-block">
        <h2>Know Your Numbers</h2>
        <p class="how-to-study-subtitle">Enter your scores to see what you need on the final.</p>
        <p>The grade calculator is in the Grades section → use it to find out the minimum you need to pass.</p>
        <a href="#grades" class="nav-link nav-btn">→ Open Grade Calculator</a>
      </section>

      <section class="how-to-study-block">
        <h2>The Formula Sheet</h2>
        <p class="how-to-study-subtitle">All formulas from all 9 topics in one place.</p>
        <p>At the bottom of every page is a Formula Sheet button. Click it before the exam for a complete reference. The most important formulas:</p>
        <p class="how-formula-line">- FX: % change = (New - Old) / Old × 100</p>
        <p class="how-formula-line">- IRP: F = S × (1 + i_domestic) / (1 + i_foreign)</p>
        <p class="how-formula-line">- PPP: E[S] = S₀ × (1 + π_domestic) / (1 + π_foreign)</p>
        <p class="how-formula-line">- Futures Long: (S_T - F_0) × Contract Size</p>
        <p class="how-formula-line">- Futures Short: (F_0 - S_T) × Contract Size</p>
        <p class="how-formula-line">- Put payoff: max(0, Strike - Spot)</p>
        <p class="how-formula-line">- Call payoff: max(0, Spot - Strike)</p>
      </section>

      <div class="how-warning-box">⚠ Exam is April 16, 2026.<br>Part I: 8 MCQs (+1 / -0.25 / 0)<br>Part II: 7 Open Problems (show all working)<br>Part III: 10 Open Questions (1.5 pts each)<br>Total: 30 points | 2 hours | Closed book<br>Negative marking: only answer MCQs if you are 70%+ confident.</div>
    </div>
  `;
}

function initSpaRouter() {
  const initial = window.location.hash || '#home';
  renderView(initial, { skipFade: true });

  window.addEventListener('hashchange', () => {
    renderView(window.location.hash || '#home', { skipFade: false });
  });

  document.getElementById('nav-logo')?.addEventListener('click', (e) => {
    if (window.location.hash === '#home' || window.location.hash === '') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });

  document.querySelectorAll('.nav-scroll-home').forEach((a) => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      const target = a.getAttribute('data-scroll-target') || (a.getAttribute('href') || '').replace('#', '');
      if (target) {
        window.location.hash = target;
      }
    });
  });
}

function renderTopicCards() {
  const grid = document.getElementById('topic-cards-grid');
  if (!grid) return;
  grid.innerHTML = TOPIC_ORDER.map((id) => {
    const t = TOPICS[id];
    const p = TOPIC_PRIORITY[id];
    if (!t) return '';
    return `
      <article class="topic-card" data-topic-id="${id}">
        <span class="topic-card-badge">${id}</span>
        ${p ? `<span class="priority-pill ${p.level}">${p.label}</span>` : ''}
        <h3 class="topic-card-title">${escapeHtml(t.title)}</h3>
        <p class="topic-card-tagline">${escapeHtml(t.tagline)}${p ? ` · ${p.weight}` : ''}</p>
        <a href="#${id}" class="btn btn-primary topic-card-cta">${tr('btn.start')}</a>
      </article>`;
  }).join('');
}

function renderStoryMode() {
  const container =
    document.getElementById('story-view') ||
    document.getElementById('story-route') ||
    document.querySelector('[data-view="story"]') ||
    document.querySelector('.story-container');

  if (!container) return;

  const storyMode = (typeof window !== 'undefined') ? window.STORY_MODE : null;

  if (!storyMode) {
    console.error('STORY_MODE not defined');
    return;
  }

  const topics = storyMode.topics;

  container.innerHTML = `
    <div style="max-width:1100px;margin:0 auto;padding:2rem;">
      <h1 style="font-family:var(--font-display);font-size:2.5rem;
                 color:var(--text-primary);margin-bottom:0.5rem;">
        Story Mode
      </h1>
      <p style="color:var(--text-secondary);margin-bottom:3rem;">
        Learn through real stories. Pick a topic to begin.
      </p>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);
                  gap:1rem;">
        ${topics
          .map(
            (topic) => `
          <div onclick="navigateToStoryTopic('${topic.id}')"
               style="background:var(--glass-bg);
                      border:1px solid var(--glass-border);
                      border-left:4px solid ${topic.color};
                      border-radius:16px;padding:1.75rem;
                      cursor:pointer;transition:all 0.3s ease;"
               onmouseover="this.style.transform='translateY(-4px)';
                            this.style.boxShadow='0 20px 40px rgba(0,0,0,0.4)'"
               onmouseout="this.style.transform='translateY(0)';
                           this.style.boxShadow='none'">
            <div style="font-size:0.65rem;font-weight:600;
                        letter-spacing:0.15em;text-transform:uppercase;
                        color:${topic.color};margin-bottom:0.75rem;">
              ${topic.id}
              <span style="margin-left:0.5rem;padding:0.1rem 0.5rem;
                           border-radius:100px;font-size:0.6rem;
                           background:${
                             topic.priority === 'high' ? 'rgba(248,113,113,0.15)' : 'rgba(251,191,36,0.15)'
                           };
                           color:${topic.priority === 'high' ? '#F87171' : '#FBBF24'}">
                ${topic.priority === 'high' ? 'HIGH PRIORITY' : 'MEDIUM'}
              </span>
            </div>
            <div style="font-family:var(--font-display);font-size:1.05rem;
                        color:var(--text-primary);margin-bottom:0.75rem;
                        line-height:1.3;">
              ${topic.title_en}
            </div>
            <div style="font-size:0.78rem;color:var(--text-secondary);
                        margin-bottom:1.25rem;">
              ${topic.stories} stories
            </div>
            <div style="font-size:0.72rem;font-weight:600;
                        letter-spacing:0.08em;text-transform:uppercase;
                        color:${topic.color};">
              Begin →
            </div>
          </div>
        `
          )
          .join('')}
      </div>
    </div>
  `;
}

function navigateToStoryTopic(topicId) {
  window.location.hash = 'story-' + topicId;
  renderStoryTopic(topicId);
}

function renderStoryTopic(topicId) {
  const container = document.getElementById('story-view');
  if (!container) return;
  
  const allStories = window.STORY_MODE;
  if (!allStories || !allStories[topicId]) {
    container.innerHTML = '<p style="color:red;padding:2rem">Stories not found for ' + topicId + '</p>';
    return;
  }
  
  const stories = allStories[topicId];
  const topic = allStories.topics.find(t => t.id === topicId);
  let idx = 0;

  function render(i) {
    const s = stories[i];
    const pct = Math.round(((i + 1) / stories.length) * 100);
    
    let formulaHTML = '';
    if (s.formula) {
      formulaHTML = `<div style="background:rgba(167,139,250,0.08);border:1px solid rgba(167,139,250,0.25);border-radius:12px;padding:1.25rem 1.5rem;margin-bottom:1.5rem;"><div style="font-size:0.6rem;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;color:#A78BFA;margin-bottom:0.6rem;">Formula</div><pre style="font-family:monospace;font-size:0.85rem;color:#C4B5FD;margin:0;white-space:pre-wrap;">${s.formula}</pre></div>`;
    }
    
    let exampleHTML = '';
    if (s.example) {
      exampleHTML = `<div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:1.25rem 1.5rem;margin-bottom:1.5rem;"><div style="font-size:0.6rem;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;color:#94A3B8;margin-bottom:0.6rem;">Example</div><p style="color:#94A3B8;font-size:0.88rem;line-height:1.8;margin:0;white-space:pre-line;">${s.example}</p></div>`;
    }
    
    let questionHTML = '';
    if (s.question.type === 'mcq') {
      const opts = s.question.options.map((opt, oi) => 
        `<div id="opt-${oi}" onclick="pickOpt(${oi},${s.question.answer},'${s.question.explanation.replace(/'/g,"\\'").replace(/\n/g,' ')}')" style="padding:0.9rem 1.25rem;border-radius:10px;border:1px solid rgba(255,255,255,0.08);background:rgba(255,255,255,0.04);cursor:pointer;margin-bottom:0.5rem;font-size:0.9rem;color:#94A3B8;transition:all 0.2s;">${opt}</div>`
      ).join('');
      questionHTML = `<div style="margin-bottom:2rem;"><div style="font-size:0.6rem;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;color:#94A3B8;margin-bottom:1rem;">Quick Check</div><p style="color:#F1F5F9;font-size:1rem;font-weight:500;margin-bottom:1rem;line-height:1.5;">${s.question.text}</p>${opts}<div id="mcq-exp" style="display:none;margin-top:1rem;padding:1rem;border-radius:10px;font-size:0.88rem;line-height:1.6;color:#94A3B8;"></div></div>`;
    } else {
      questionHTML = `<div style="margin-bottom:2rem;"><div style="font-size:0.6rem;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;color:#94A3B8;margin-bottom:1rem;">Your Turn</div><p style="color:#F1F5F9;font-size:1rem;font-weight:500;margin-bottom:1rem;line-height:1.5;">${s.question.text}</p><textarea id="ans" placeholder="Write your answer here..." style="width:100%;min-height:130px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.12);border-radius:10px;padding:1rem;color:#F1F5F9;font-size:0.9rem;line-height:1.7;resize:vertical;font-family:inherit;outline:none;box-sizing:border-box;"></textarea><button onclick="checkAns('${topicId}',${i})" style="margin-top:0.75rem;padding:0.7rem 1.5rem;background:#4F8EF7;color:white;border:none;border-radius:8px;font-size:0.75rem;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;cursor:pointer;">Check Answer</button><div id="open-fb" style="margin-top:1rem;display:none;"></div></div>`;
    }

    container.innerHTML = `
      <div style="max-width:760px;margin:0 auto;padding:5rem 2rem 3rem;">
        <div style="display:flex;align-items:center;gap:1rem;margin-bottom:2.5rem;">
          <button onclick="window.location.hash='story';renderStoryMode();" style="padding:0.4rem 0.9rem;border:1px solid rgba(255,255,255,0.1);border-radius:6px;background:rgba(255,255,255,0.04);color:#94A3B8;font-size:0.72rem;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;cursor:pointer;">← Back</button>
          <div style="flex:1;height:4px;background:rgba(255,255,255,0.06);border-radius:100px;overflow:hidden;">
            <div style="height:100%;background:${topic ? topic.color : '#4F8EF7'};width:${pct}%;transition:width 0.5s ease;border-radius:100px;"></div>
          </div>
          <span style="font-size:0.72rem;color:#475569;white-space:nowrap;">${i+1} / ${stories.length}</span>
        </div>

        <h2 style="font-family:var(--font-display,Georgia),serif;font-size:2rem;color:#F1F5F9;margin-bottom:2rem;line-height:1.2;">${s.title}</h2>

        <div style="background:rgba(79,142,247,0.07);border-left:4px solid #4F8EF7;border-radius:0 12px 12px 0;padding:1.25rem 1.5rem;margin-bottom:2rem;">
          <div style="font-size:0.6rem;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;color:#4F8EF7;margin-bottom:0.5rem;">The Story</div>
          <p style="color:#94A3B8;line-height:1.9;font-size:0.95rem;margin:0;">${s.hook}</p>
        </div>

        <div style="color:#94A3B8;line-height:1.9;font-size:0.92rem;margin-bottom:2rem;white-space:pre-line;">${s.concept}</div>

        ${formulaHTML}
        ${exampleHTML}
        ${questionHTML}

        <button id="next-btn" style="display:none;width:100%;padding:1rem;background:#4F8EF7;color:white;border:none;border-radius:10px;font-size:0.8rem;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;cursor:pointer;" onclick="goNext(${i},${stories.length},'${topicId}')">
          ${i < stories.length - 1 ? 'Next Story →' : 'Complete Topic ✓'}
        </button>
      </div>`;

    window.pickOpt = function(sel, correct, exp) {
      for (let o = 0; o < s.question.options.length; o++) {
        const el = document.getElementById('opt-'+o);
        if (!el) continue;
        el.onclick = null;
        if (o === correct) { el.style.borderColor='#34D399'; el.style.color='#34D399'; el.style.background='rgba(52,211,153,0.1)'; }
        else if (o === sel) { el.style.borderColor='#F87171'; el.style.color='#F87171'; el.style.background='rgba(248,113,113,0.1)'; }
      }
      const e = document.getElementById('mcq-exp');
      if (e) { e.style.display='block'; e.style.background= sel===correct ? 'rgba(52,211,153,0.08)':'rgba(248,113,113,0.08)'; e.style.border= sel===correct ? '1px solid rgba(52,211,153,0.2)':'1px solid rgba(248,113,113,0.2)'; e.innerHTML=exp; }
      const nb = document.getElementById('next-btn');
      if (nb) nb.style.display='block';
    };

    window.checkAns = function(tid, si) {
      const ans = (document.getElementById('ans')||{}).value || '';
      const kws = window.STORY_MODE[tid][si].question.keywords || [];
      const ma = window.STORY_MODE[tid][si].question.model_answer || '';
      const lower = ans.toLowerCase();
      const matched = kws.filter(k => lower.includes(k.toLowerCase()));
      const score = kws.length ? Math.round(matched.length/kws.length*100) : 50;
      const color = score>=70?'#34D399':score>=40?'#FBBF24':'#F87171';
      const fb = document.getElementById('open-fb');
      if (fb) {
        fb.style.display='block';
        fb.innerHTML=`<div style="height:4px;background:rgba(255,255,255,0.06);border-radius:100px;overflow:hidden;margin-bottom:0.5rem;"><div style="height:100%;background:${color};width:${score}%;transition:width 0.6s ease;border-radius:100px;"></div></div><p style="color:${color};font-size:0.8rem;font-weight:600;margin-bottom:1rem;">${score}% — ${score>=70?'Strong answer':score>=40?'Good attempt':'Review needed'}</p><div style="background:rgba(79,142,247,0.06);border:1px solid rgba(79,142,247,0.15);border-radius:10px;padding:1rem;"><div style="font-size:0.6rem;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#4F8EF7;margin-bottom:0.5rem;">Model Answer</div><p style="color:#94A3B8;font-size:0.88rem;line-height:1.7;margin:0;">${ma}</p></div>`;
      }
      const nb = document.getElementById('next-btn');
      if (nb) nb.style.display='block';
    };

    window.goNext = function(ci, total, tid) {
      if (ci < total - 1) {
        window.scrollTo({top:0,behavior:'smooth'});
        render(ci + 1);
      } else {
        container.innerHTML=`<div style="max-width:600px;margin:0 auto;padding:6rem 2rem;text-align:center;"><div style="width:64px;height:64px;border-radius:50%;background:rgba(52,211,153,0.12);border:1px solid rgba(52,211,153,0.3);display:flex;align-items:center;justify-content:center;margin:0 auto 1.5rem;font-size:1.5rem;color:#34D399;">✓</div><h2 style="font-family:Georgia,serif;font-size:2rem;color:#F1F5F9;margin-bottom:0.5rem;">Topic Complete</h2><p style="color:#94A3B8;margin-bottom:2rem;">You finished all ${total} stories.</p><button onclick="window.location.hash='story';renderStoryMode();" style="padding:0.8rem 2rem;background:#4F8EF7;color:white;border:none;border-radius:10px;font-size:0.8rem;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;cursor:pointer;">Back to Topics</button></div>`;
      }
    };

    window.scrollTo({top:0,behavior:'smooth'});
  }

  render(0);
}

function initTopicInteractions(id) {
  const t = TOPICS[id];
  initFlashcards(id);
  initMCQ1(id, t);
  document.querySelectorAll(`#topic-${id} .term-pill`).forEach((btn) => {
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
    });
  });
  let hintIdx = 0;
  const hintBtn = document.querySelector(`#topic-${id} .l3-hint-btn`);
  if (hintBtn) {
    hintBtn.addEventListener('click', () => {
      const h = t.level3.problem.hints;
      if (hintIdx < h.length) {
        const box = document.getElementById(`${id}-hint-${hintIdx}`);
        if (box) box.hidden = false;
        hintIdx++;
        if (hintIdx < h.length) hintBtn.textContent = `${tr('btn.hint')} ${hintIdx + 1}`;
        else hintBtn.hidden = true;
      }
    });
  }
  const l3sub = document.querySelector(`#topic-${id} .l3-submit`);
  if (l3sub) {
    l3sub.addEventListener('click', () => {
      if (l3sub.getAttribute('data-done') === '1') return;
      l3sub.setAttribute('data-done', '1');
      const val = document.getElementById(`${id}-l3-ans`).value;
      const a = t.level3.problem.answer;
      const num = checkNumerical(val, a, 2);
      const sol = document.getElementById(`${id}-l3-sol`);
      sol.hidden = false;
      sol.querySelector('h4').insertAdjacentHTML('afterend', `<p>${escapeHtml(num.message)}</p>`);
    });
  }
  const l4open = document.querySelector(`#topic-${id} .l4-open-submit`);
  if (l4open) {
    l4open.addEventListener('click', () => {
      const ta = document.querySelector(`#topic-${id} .l4-textarea`);
      if (ta.value.trim().split(/\s+/).length < 20) return;
      const { score, missing } = checkKeywords(ta.value, t.level4.openQuestion.keywords);
      const lvl = getScoreLevel(score);
      const barId = `${id}-l4-bar`;
      const el = document.getElementById(`${id}-l4-open-result`);
      el.hidden = false;
      el.innerHTML = `
        <div class="score-bar-wrap"><div class="score-bar" id="${barId}" style="background:${lvl.color}"></div></div>
        <p style="color:${lvl.color}">${score}%</p>
        <p>${tr('feedback.model')}: ${escapeHtml(t.level4.openQuestion.modelAnswer)}</p>`;
      animateScoreBar(document.getElementById(barId), score);
    });
  }
  const l4c = document.querySelector(`#topic-${id} .l4-calc-submit`);
  if (l4c) {
    l4c.addEventListener('click', () => {
      const val = document.getElementById(`${id}-l4-calc`).value;
      const r = checkNumerical(val, t.level4.calcQuestion.answer, 2);
      const el = document.getElementById(`${id}-l4-calc-result`);
      el.hidden = false;
      el.textContent = r.message;
      document.getElementById(`${id}-l4-calc-model`).hidden = false;
      document.getElementById(`${id}-self`).hidden = false;
    });
  }
  document.querySelectorAll(`#topic-${id} .self-btn`).forEach((b) => {
    b.addEventListener('click', () => {
      const p = b.closest('.self-assess').querySelector('.self-msg');
      p.textContent = b.getAttribute('data-msg');
    });
  });
  let scores = { a: null, b: null, c: null };
  const l5a = document.querySelector(`#topic-${id} .l5a-sub`);
  if (l5a) {
    l5a.addEventListener('click', () => {
      const ta = document.querySelector(`#topic-${id} .l5-a`);
      if (ta.value.trim().split(/\s+/).length < 3) return;
      const { score } = checkKeywords(ta.value, t.level5.caseStudy.partA.keywords);
      scores.a = score;
      const el = document.getElementById(`${id}-l5a-result`);
      el.hidden = false;
      el.innerHTML = `<p>${tr('score')}: ${score}%</p><p>${tr('feedback.model')}: ${escapeHtml(t.level5.caseStudy.partA.modelAnswer)}</p>`;
      document.getElementById(`${id}-l5b-wrap`).classList.add('unlocked');
    });
  }
  const l5b = document.querySelector(`#topic-${id} .l5b-sub`);
  if (l5b) {
    l5b.addEventListener('click', () => {
      const val = document.querySelector(`#topic-${id} .l5-b`).value;
      const r = checkNumerical(val, t.level5.caseStudy.partB.answer, 2);
      scores.b = r.correct ? 100 : 0;
      const el = document.getElementById(`${id}-l5b-result`);
      el.hidden = false;
      el.textContent = r.message;
      document.getElementById(`${id}-l5b-model`).hidden = false;
      document.getElementById(`${id}-l5c-wrap`).classList.add('unlocked');
    });
  }
  const l5c = document.querySelector(`#topic-${id} .l5c-sub`);
  if (l5c) {
    l5c.addEventListener('click', () => {
      const ta = document.querySelector(`#topic-${id} .l5-c`);
      if (ta.value.trim().split(/\s+/).length < 3) return;
      const { score } = checkKeywords(ta.value, t.level5.caseStudy.partC.keywords);
      scores.c = score;
      const el = document.getElementById(`${id}-l5c-result`);
      el.hidden = false;
      el.innerHTML = `<p>${tr('score')}: ${score}%</p><p>${tr('feedback.model')}: ${escapeHtml(t.level5.caseStudy.partC.modelAnswer)}</p>`;
      const total = (scores.a + scores.b + scores.c) / 3;
      const badge = document.getElementById(`${id}-l5-badge`);
      badge.hidden = false;
      let msg = '';
      if (total >= 80) {
        msg = `${tr('mastered')}! You're exam-ready on this topic.`;
        localStorage.setItem(`mastered-${id}`, '1');
        document.querySelector(`[data-topic="${id}"]`)?.classList.add('topic-done');
      } else if (total >= 50) msg = 'Good progress. Review the model answers above.';
      else msg = 'Try again from Level 3.';
      badge.textContent = `Overall ≈ ${total.toFixed(0)}% — ${msg}`;
      updateNavBadges();
    });
  }
}

function initFlashcards(id) {
  const state = window.__flashState && window.__flashState[id];
  const body = document.getElementById(`${id}-flash-body`);
  if (!state || !body) return;
  const renderCard = () => {
    if (!state.queue.length) {
      body.innerHTML = `<div class="final-answer">${tr('flash.complete')}</div><button type="button" class="btn btn-primary" id="${id}-flash-restart">${tr('flash.restart')}</button>`;
      document.getElementById(`${id}-flash-restart`)?.addEventListener('click', () => {
        const original = FLASHCARDS[id].map((c, i) => ({ ...c, _id: `${id}-${i}` }));
        state.queue = shuffle(original);
        state.mastered = 0;
        updateProgress();
        renderCard();
      });
      return;
    }
    const card = state.queue[0];
    const typeCls = `flash-type-${card.type}`;
    body.innerHTML = `
      <div class="flashcard-wrap">
        <div class="flashcard" id="${id}-flashcard">
          <div class="flash-face front">
            <div class="flash-meta"><span class="flash-type-pill ${typeCls}">${card.type}</span><span>${tr('flash.question')}</span></div>
            <h4>${escapeHtml(card.front)}</h4>
            <p style="position:absolute;bottom:12px;right:16px;color:var(--text-secondary)">${tr('flash.reveal')}</p>
          </div>
          <div class="flash-face back">
            <div class="flash-meta"><span class="flash-type-pill ${typeCls}">${card.type}</span><span>Answer</span></div>
            <p>${escapeHtml(card.back)}</p>
            ${card.formula ? `<div class="formula-box">${escapeHtml(card.formula)}</div>` : ''}
            ${card.example ? `<p><strong>Example:</strong> ${escapeHtml(card.example)}</p>` : ''}
          </div>
        </div>
      </div>
      <div class="flash-actions" id="${id}-flash-actions" hidden>
        <button class="btn btn-danger" type="button" id="${id}-flash-still">${tr('flash.still')}</button>
        <button class="btn btn-success" type="button" id="${id}-flash-got">${tr('flash.got')}</button>
      </div>`;
    const cardEl = document.getElementById(`${id}-flashcard`);
    cardEl?.addEventListener('click', () => {
      cardEl.classList.toggle('is-flipped');
      document.getElementById(`${id}-flash-actions`).hidden = !cardEl.classList.contains('is-flipped');
    });
    document.getElementById(`${id}-flash-still`)?.addEventListener('click', () => {
      state.queue.push(state.queue.shift());
      renderCard();
    });
    document.getElementById(`${id}-flash-got`)?.addEventListener('click', () => {
      state.queue.shift();
      state.mastered += 1;
      updateProgress();
      renderCard();
    });
  };
  const updateProgress = () => {
    const fill = document.getElementById(`${id}-flash-progress`);
    const count = document.getElementById(`${id}-flash-count`);
    const pct = state.total ? (state.mastered / state.total) * 100 : 0;
    if (fill) fill.style.width = `${pct}%`;
    if (count) count.textContent = `${state.mastered} / ${state.total} mastered`;
  };
  updateProgress();
  renderCard();
}

function initMCQ1(id, t) {
  const blocks = document.querySelectorAll(`#topic-${id} .mcq-block`);
  let answered = 0;
  let correctTotal = 0;
  const total = t.level1.mcqs.length;
  blocks.forEach((block) => {
    const opts = block.querySelectorAll('.mcq-option');
    const fb = block.querySelector('[data-feedback]');
    opts.forEach((opt) => {
      opt.addEventListener('click', () => {
        if (opt.disabled) return;
        const correct = opt.getAttribute('data-correct') === 'true';
        opts.forEach((o) => {
          o.disabled = true;
          const isC = o.getAttribute('data-correct') === 'true';
          o.classList.add('revealed');
          if (isC) o.classList.add('correct');
          else if (o === opt && !correct) o.classList.add('wrong');
        });
        if (fb) {
          fb.style.display = 'block';
          if (correct) fb.insertAdjacentText('afterbegin', `${tr('feedback.correct')} — `);
        }
        if (!block.querySelector('.mcq-answered')) {
          block.classList.add('mcq-answered');
          answered++;
          if (correct) correctTotal++;
          const sc = document.getElementById(`${id}-mcq1-score`);
          if (sc) sc.textContent = `${correctTotal}/${total} correct`;
          if (answered === total) {
            const cont = document.getElementById(`${id}-l1-continue`);
            if (cont) cont.hidden = false;
          }
        }
      });
    });
  });
}

function updateNavBadges() {
  TOPIC_ORDER.forEach((id) => {
    const a = document.querySelector(`nav a[data-topic="${id}"]`);
    if (!a) return;
    if (localStorage.getItem(`mastered-${id}`) === '1') a.setAttribute('data-mastered', '1');
  });
}

function initCountdown() {
  const examDate = new Date('2026-04-16T09:00:00+02:00');
  const prev = {};
  function tick() {
    const now = new Date();
    const diff = examDate - now;
    const d = Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24)));
    const h = Math.max(0, Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const m = Math.max(0, Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)));
    const s = Math.max(0, Math.floor((diff % (1000 * 60)) / 1000));
    [
      ['days', d],
      ['hours', h],
      ['minutes', m],
      ['seconds', s],
    ].forEach(([unit, val]) => {
      const el = document.querySelector(`.countdown-digit[data-unit="${unit}"]`);
      if (!el) return;
      const str = String(val).padStart(2, '0');
      if (prev[unit] !== str) {
        el.classList.add('flip');
        el.textContent = unit === 'days' ? String(d) : str;
        setTimeout(() => el.classList.remove('flip'), 350);
        prev[unit] = unit === 'days' ? String(d) : str;
      }
    });
  }
  tick();
  setInterval(tick, 1000);
}

function initGradeCalc() {
  const mid = document.getElementById('midterm');
  const onl = document.getElementById('online');
  const fin = document.getElementById('final');
  const finVal = document.getElementById('final-val');
  const bar = document.getElementById('grade-bar-fill');
  const pred = document.getElementById('grade-predicted');
  const stat = document.getElementById('grade-status');
  const need = document.getElementById('grade-need');
  function upd() {
    const mt = parseFloat(mid.value) || 0;
    const oc = parseFloat(onl.value) || 0;
    const f = parseFloat(fin.value) || 0;
    finVal.textContent = f;
    const total = calculateGrade(mt, oc, f);
    pred.textContent = `${tr('grade.predicted')}: ${total}%`;
    bar.style.width = Math.min(100, total) + '%';
    if (total < 40) bar.style.background = '#DC2626';
    else if (total < 50) bar.style.background = '#EA580C';
    else bar.style.background = '#16A34A';
    let st = '';
    if (total >= 50) st = `Status: ${tr('grade.passing').toUpperCase()}`;
    else if (total >= 40) st = `Status: ${tr('grade.borderline').toUpperCase()}`;
    else st = `Status: ${tr('grade.failing').toUpperCase()}`;
    stat.textContent = st;
    const cur = (mt / 20) * 40 + (oc / 10) * 10;
    const mf = minFinalNeeded(mt, oc);
    if (cur >= 50) {
      need.textContent = tr('grade.safe');
    } else if (mf === null) {
      const mx = maxPossiblePercent(mt, oc);
      need.textContent = `${tr('grade.impossible')} ${mx.toFixed(1)}% — speak to your professor`;
    } else {
      need.textContent = `${tr('grade.need')} ${mf}/40 ${tr('grade.on.final')}`;
    }
  }
  [mid, onl, fin].forEach((el) => el.addEventListener('input', upd));
  upd();
}

function initMobileNav() {
  const btn = document.getElementById('nav-toggle');
  const header = document.getElementById('site-header');
  const topics = document.getElementById('nav-topics');
  if (!btn || !header) return;
  btn.addEventListener('click', () => {
    const open = header.classList.toggle('nav-open');
    btn.setAttribute('aria-expanded', open);
  });
  topics.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => header.classList.remove('nav-open')));
}

function initFormulaModal() {
  const modal = document.getElementById('formula-modal');
  const body = document.getElementById('formula-modal-body');
  const openBtn = document.getElementById('open-formula-modal');
  const cheat = [
    ['IRP', 'F = S × (1+i_d)/(1+i_f)', 'Forward rate pricing'],
    ['Relative PPP', 'E[S₁] = S₀ × (1+π_d)/(1+π_f)', 'Predict future exchange rates'],
    ['Forward P&L', '(F − S_T) × Amount', 'Gain/loss from forward hedge'],
    ['Futures P&L (Long)', '(S_T − F₀) × Size', 'Profit on futures position'],
    ['Call Payoff', 'max(S_T − K, 0)', 'Option at expiry'],
    ['Put Payoff', 'max(K − S_T, 0)', 'Option at expiry'],
    ['BoP Identity', 'BCA + BKA + BFA + BRA = 0', 'Balance of payments'],
    ['Grade Calculator', '(MT/20×40)+(OC/10×10)+(F/40×50)', 'Pass if ≥50%'],
    ['Ownership %', 'Shares held / Total shares × 100', 'Corporate governance'],
    ['Pyramid control', '∏ (stake at each level)', 'Effective ownership'],
    ['Annualized premium', '(F−S)/S × 12/months × 100', 'Forward premium/discount'],
  ];
  body.innerHTML = `<table><thead><tr><th>Topic</th><th>Formula</th><th>Use</th></tr></thead><tbody>${cheat
    .map((r) => `<tr><td>${escapeHtml(r[0])}</td><td>${escapeHtml(r[1])}</td><td>${escapeHtml(r[2])}</td></tr>`)
    .join('')}</tbody></table>`;
  function open() {
    modal.hidden = false;
  }
  function close() {
    modal.hidden = true;
  }
  openBtn?.addEventListener('click', open);
  modal?.querySelectorAll('[data-close-modal]').forEach((el) => el.addEventListener('click', close));
}

function initL2AnswerDelegation() {
  const mount = document.getElementById('topics-mount');
  if (!mount) return;
  mount.addEventListener('click', (e) => {
    const btn = e.target.closest('.check-answer-btn');
    if (!btn || !btn.classList.contains('l2-check')) return;
    e.preventDefault();
    const topicId = btn.getAttribute('data-topic');
    const qiRaw = btn.getAttribute('data-question-index') ?? btn.getAttribute('data-qi');
    const questionIndex = parseInt(qiRaw, 10);
    const block = btn.closest('.question-block');
    const textarea = block && block.querySelector('textarea.l2-textarea');
    if (!topicId || textarea == null || Number.isNaN(questionIndex)) return;
    handleL2AnswerCheck(topicId, questionIndex, textarea.value);
  });
}

function renderTrapTrainer() {
  const mount = document.getElementById('trap-trainer-mount');
  if (!mount) return;
  let idx = 0;
  let score = 0;
  const selected = new Array(TRAP_TRAINER.length).fill(null);
  const categoryMistakes = {};
  const draw = () => {
    if (idx >= TRAP_TRAINER.length) {
      const bad = Object.entries(categoryMistakes).filter(([, v]) => v > 0).map(([k]) => k);
      mount.innerHTML = `<div class="trap-shell"><h3>You would score ${score.toFixed(2)}/7 — here are the traps you fell for</h3><p>${bad.length ? bad.join(' | ') : 'No major trap errors.'}</p><button class="btn btn-primary" id="trap-restart">Retry</button></div>`;
      document.getElementById('trap-restart')?.addEventListener('click', renderTrapTrainer);
      return;
    }
    const q = TRAP_TRAINER[idx];
    mount.innerHTML = `<div class="trap-shell"><p><strong>${tr('trap.score')}:</strong> ${score.toFixed(2)} / 7</p><p><strong>Q${idx + 1}</strong> (${q.category})<br />${escapeHtml(q.q)}</p><div class="mcq-grid">${q.options.map((o, oi) => `<button class="mcq-option trap-opt" data-oi="${oi}">${String.fromCharCode(65 + oi)}) ${escapeHtml(o)}</button>`).join('')}</div><button class="btn btn-outline" id="trap-skip">Blank (0)</button><div id="trap-exp" style="margin-top:0.8rem" hidden></div></div>`;
    mount.querySelectorAll('.trap-opt').forEach((btn) => {
      btn.addEventListener('click', () => {
        const pick = Number(btn.getAttribute('data-oi'));
        selected[idx] = pick;
        if (pick === q.answer) score += 1;
        else {
          score -= 0.25;
          categoryMistakes[q.category] = (categoryMistakes[q.category] || 0) + 1;
        }
        const exp = document.getElementById('trap-exp');
        exp.hidden = false;
        exp.innerHTML = `<p><strong>Answer:</strong> ${String.fromCharCode(65 + q.answer)}</p><p>${escapeHtml(q.explanation)}</p><button class="btn btn-primary" id="trap-next">Next</button>`;
        document.getElementById('trap-next')?.addEventListener('click', () => { idx += 1; draw(); });
      });
    });
    document.getElementById('trap-skip')?.addEventListener('click', () => {
      idx += 1;
      draw();
    });
  };
  draw();
}

function renderMockExam() {
  const mount = document.getElementById('mock-exam-mount');
  if (!mount) return;
  let part1 = 0;
  let part2 = 0;
  let part3 = 0;
  let unlocked = 1;
  let seconds = 2 * 60 * 60;
  let timerOn = true;
  mount.innerHTML = `<div class="mock-shell">
    <div style="display:flex;justify-content:space-between;gap:1rem;align-items:center;flex-wrap:wrap">
      <p class="mock-timer" id="mock-timer">02:00:00</p>
      <label><input type="checkbox" id="mock-timer-toggle" checked /> Timer enabled</label>
    </div>
    <div class="mock-part" id="mock-p1"></div>
    <div class="mock-part mock-locked" id="mock-p2"></div>
    <div class="mock-part mock-locked" id="mock-p3"></div>
    <div class="mock-part" id="mock-final" hidden></div>
  </div>`;
  const tick = () => {
    if (!timerOn || seconds <= 0) return;
    seconds -= 1;
    const h = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const s = String(seconds % 60).padStart(2, '0');
    const el = document.getElementById('mock-timer');
    if (el) el.textContent = `${h}:${m}:${s}`;
  };
  window.setInterval(tick, 1000);
  document.getElementById('mock-timer-toggle')?.addEventListener('change', (e) => { timerOn = e.target.checked; });

  const p1El = document.getElementById('mock-p1');
  p1El.innerHTML = `<h3>Part I: 8 MCQs | +1 / 0 / -0.25</h3>${MOCK_EXAM.mcq.map((q, i) => `<div><p><strong>MCQ${i + 1}:</strong> ${escapeHtml(q.q)}</p><div class="mcq-grid">${q.options.map((o, oi) => `<label><input type="radio" name="mcq-${i}" value="${oi}" /> ${String.fromCharCode(65 + oi)}) ${escapeHtml(o)}</label>`).join('')}</div></div>`).join('')}<button class="btn btn-primary" id="submit-p1">Submit Part I</button><div id="p1-feedback"></div>`;
  document.getElementById('submit-p1')?.addEventListener('click', () => {
    part1 = 0;
    MOCK_EXAM.mcq.forEach((q, i) => {
      const selected = document.querySelector(`input[name="mcq-${i}"]:checked`);
      if (!selected) return;
      if (Number(selected.value) === q.answer) part1 += 1;
      else part1 -= 0.25;
    });
    unlocked = 2;
    document.getElementById('p1-feedback').textContent = `Part I score: ${part1.toFixed(2)} / 8`;
    document.getElementById('mock-p2').classList.remove('mock-locked');
    renderPart2();
  });

  const renderPart2 = () => {
    const p2El = document.getElementById('mock-p2');
    p2El.innerHTML = `<h3>Part II: 7 Open Problems</h3>${MOCK_EXAM.problems.map((p, i) => `<div><p>${escapeHtml(p.q)}</p><input id="p2-${i}" type="text" style="width:100%;min-height:44px" /></div>`).join('')}<button class="btn btn-primary" id="submit-p2">Submit Part II</button><div id="p2-feedback"></div>`;
    document.getElementById('submit-p2')?.addEventListener('click', () => {
      part2 = 0;
      MOCK_EXAM.problems.forEach((p, i) => {
        const val = document.getElementById(`p2-${i}`).value.trim().toLowerCase();
        if (!val) return;
        if (val.includes(String(p.answer).toLowerCase())) part2 += 1;
      });
      unlocked = 3;
      document.getElementById('p2-feedback').textContent = `Part II score: ${part2.toFixed(2)} / 7`;
      document.getElementById('mock-p3').classList.remove('mock-locked');
      renderPart3();
    });
  };

  const renderPart3 = () => {
    const p3El = document.getElementById('mock-p3');
    p3El.innerHTML = `<h3>Part III: 10 Open Questions</h3>${MOCK_EXAM.oq.map((q, i) => `<div><p>${escapeHtml(q.q)}</p><textarea id="p3-${i}" rows="4" style="width:100%"></textarea></div>`).join('')}<button class="btn btn-primary" id="submit-p3">Submit Part III</button><button class="btn btn-outline" id="show-model">${tr('mock.model')}</button><div id="p3-feedback"></div><div id="model-answers" hidden>${MOCK_EXAM.oq.map((q, i) => `<p><strong>OQ${i + 1}:</strong> ${escapeHtml(q.model)}</p>`).join('')}</div>`;
    document.getElementById('submit-p3')?.addEventListener('click', () => {
      part3 = 0;
      MOCK_EXAM.oq.forEach((q, i) => {
        const ans = document.getElementById(`p3-${i}`).value.toLowerCase();
        const match = q.keywords.filter((k) => ans.includes(k.toLowerCase())).length;
        const ratio = q.keywords.length ? match / q.keywords.length : 0;
        part3 += ratio * 1.5;
      });
      const total = part1 + part2 + part3;
      const grade = total >= 25 ? 'Excellent' : total >= 20 ? 'Good' : total >= 15 ? 'Pass' : 'Below Pass';
      const weak = [];
      if (part1 < 6) weak.push('Part I');
      if (part2 < 5) weak.push('Part II');
      if (part3 < 10) weak.push('Part III');
      const final = document.getElementById('mock-final');
      final.hidden = false;
      final.innerHTML = `<h3>Final score: ${total.toFixed(2)} / 30</h3><p>Part I: ${part1.toFixed(2)} | Part II: ${part2.toFixed(2)} | Part III: ${part3.toFixed(2)}</p><p>Grade: ${grade}</p><p>You struggled with: ${weak.join(', ') || 'No major weaknesses'}</p><button class="btn btn-primary" id="retry-mock">Retry</button>`;
      document.getElementById('retry-mock')?.addEventListener('click', renderMockExam);
    });
    document.getElementById('show-model')?.addEventListener('click', () => {
      const m = document.getElementById('model-answers');
      m.hidden = !m.hidden;
    });
  };
}

document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('if_lang') || localStorage.getItem('if-study-lang');
  if (savedLang && LANG[savedLang]) currentLang = savedLang;
  applyStaticTranslations();
  mountTopics();
  renderTopicCards();
  initL2AnswerDelegation();
  initSpaRouter();
  initCountdown();
  initGradeCalc();
  initMobileNav();
  initFormulaModal();
  updateNavBadges();
  renderTrapTrainer();
  renderMockExam();
  switchLang(currentLang);
  if (window.initSupabaseUI) window.initSupabaseUI();
});
