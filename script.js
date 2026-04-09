/**
 * International Finance Study Platform — content sourced from
 * MASTER_REFERENCE.md and NUMERICAL_APPENDIX.md in this project.
 * (COMPLETE_MASTER_REFERENCE.md was not present.)
 */

const LANG = {
  en: {
    'nav.grades': 'Grades',
    'nav.doubt': 'Doubt Board',
    'nav.notes': 'Notes',
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
    'notes.title': 'Class Sticky Notes',
    'notes.subtitle': 'Pin something important. Everyone sees it.',
    'notes.placeholder': 'Write something important...',
    'notes.pin': 'Pin Note',
    'formula.title': 'Formula Sheet',
    'mastered': 'Topic Mastered',
    'score': 'Score',
  },
  fr: {
    'nav.grades': 'Notes',
    'nav.doubt': 'Questions',
    'nav.notes': 'Mémos',
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
    'notes.title': 'Mémos de la classe',
    'notes.subtitle': "Épinglez quelque chose d'important. Tout le monde le voit.",
    'notes.placeholder': "Écrivez quelque chose d'important...",
    'notes.pin': 'Épingler',
    'formula.title': 'Formules',
    'mastered': 'Sujet maîtrisé',
    'score': 'Score',
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
  currentLang = lang === 'fr' ? 'fr' : 'en';
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
  });
  applyStaticTranslations();
  rendered.clear();
  renderTopicCards();
  renderView(window.location.hash || '#home', { skipFade: true });
  initGradeCalc();
  localStorage.setItem('if-study-lang', currentLang);
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

const TOPIC_ORDER = ['IF1', 'IF2', 'IF3', 'IF4', 'IF5', 'IF6', 'IF7', 'IF8', 'IF9'];

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
    ${renderLevel2(id, t)}
    ${renderLevel3(id, t)}
    ${renderLevel4(id, t)}
    ${renderLevel5(id, t)}
  </section>`;
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
  </article>`;
}

function mountTopics() {
  const mount = document.getElementById('topics-mount');
  if (!mount) return;
  mount.innerHTML = TOPIC_ORDER.map(
    (id) => `<div id="topic-${id}" class="topic-route topic-page" data-topic-wrap="${id}" style="display:none"></div>`
  ).join('');
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
  const homeAnchors = ['grade-calc', 'doubt-board', 'sticky-notes', 'hero', 'topic-picker'];
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
  if (!homeEl) return;

  const applyView = () => {
    document.querySelectorAll('.nav-topic-link').forEach((el) => el.classList.remove('active'));
    homeEl.style.display = 'none';
    document.querySelectorAll('.topic-route').forEach((el) => {
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
      const target = a.getAttribute('data-scroll-target');
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
    if (!t) return '';
    return `
      <article class="topic-card" data-topic-id="${id}">
        <span class="topic-card-badge">${id}</span>
        <h3 class="topic-card-title">${escapeHtml(t.title)}</h3>
        <p class="topic-card-tagline">${escapeHtml(t.tagline)}</p>
        <a href="#${id}" class="btn btn-primary topic-card-cta">${tr('btn.start')}</a>
      </article>`;
  }).join('');
}

function initTopicInteractions(id) {
  const t = TOPICS[id];
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

document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('if-study-lang');
  if (savedLang === 'fr') currentLang = 'fr';
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
  switchLang(currentLang);
  if (window.initSupabaseUI) window.initSupabaseUI();
});
