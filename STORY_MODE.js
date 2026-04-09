(() => {
  const topics = [
    { id: "IF1", title_en: "Globalization & the MNC", stories: 6, color: "#34D399", priority: "medium" },
    { id: "IF2", title_en: "International Monetary System", stories: 7, color: "#FBBF24", priority: "medium" },
    { id: "IF3", title_en: "Balance of Payments", stories: 8, color: "#4F8EF7", priority: "high" },
    { id: "IF4", title_en: "Foreign Exchange Market", stories: 10, color: "#F97316", priority: "high" },
    { id: "IF5", title_en: "PPP & Interest Rate Parity", stories: 10, color: "#A78BFA", priority: "high" },
    { id: "IF6", title_en: "Futures & Options", stories: 10, color: "#F87171", priority: "high" },
    { id: "IF7", title_en: "Managing Exposure", stories: 8, color: "#34D399", priority: "high" },
    { id: "IF8", title_en: "Corporate Governance", stories: 7, color: "#FBBF24", priority: "medium" },
    { id: "IF9", title_en: "FDI & Cross-Border M&A", stories: 6, color: "#4F8EF7", priority: "medium" }
  ];

  function makeStory(topicId, idx, title) {
    const n = idx + 1;
    const isMcq = n % 2 === 0;
    return {
      id: `${topicId}_S${n}`,
      title: `${title} — Story ${n}`,
      hook: `A short real-world scenario introduces ${title} with curiosity and surprise.`,
      concept: `This unit explains one core concept from ${title} in simple language.\n\nIt is designed for sequential learning in Story Mode.`,
      formula: n % 3 === 0 ? `${topicId} Formula ${n}: value = (new - old) / old` : null,
      example: `Exam-style example for ${topicId} story ${n}.`,
      question: isMcq
        ? {
            type: "mcq",
            text: `Quick check for ${topicId} story ${n}: choose the best answer.`,
            options: ["Option A", "Option B", "Option C", "Option D"],
            answer: 1,
            explanation: "Correct answer is Option B. Review the concept and retry if needed."
          }
        : {
            type: "open",
            text: `In your own words, explain the key idea in ${topicId} story ${n}.`,
            keywords: ["risk", "rate", "market", "hedge", "value", "currency"],
            model_answer: `A strong answer defines the concept clearly, applies it to a practical example, and links it to decision-making in international finance.`
          }
    };
  }

  const data = { topics };
  topics.forEach((t) => {
    data[t.id] = Array.from({ length: t.stories }, (_, i) => makeStory(t.id, i, t.title_en));
  });

  window.STORY_MODE = data;
})();
