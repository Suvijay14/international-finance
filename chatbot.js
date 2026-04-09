const SYSTEM_PROMPT = `You are a strict but clear International 
Finance tutor for SKEMA Business School students preparing for 
their final exam on April 16, 2026.

EXAM FORMAT the student is preparing for:
- Part I: 8 MCQs (+1 correct, -0.25 wrong, 0 blank)
- Part II: 7 Open Problems (numerical, show all working)
- Part III: 10 Open Questions (1.5 pts each)
- Total: 30 points, 2 hours, closed book

TOPICS YOU TEACH (IF1 to IF9):
IF1: Globalization, MNCs, FX risk, political risk, market imperfections
IF2: IMS, Gold Standard, Bretton Woods, Triffin Paradox, 
     Impossible Trinity, Euro
IF3: Balance of Payments, Current Account (4 parts), Financial 
     Account, FDI classification, J-curve
IF4: FX Market, bid-ask, cross rates, forward premium/discount, 
     triangular arbitrage, appreciation vs depreciation
IF5: PPP (absolute and relative), IRP, Covered Interest Arbitrage, 
     Fisher Effect, IFE
IF6: Futures vs Forwards, Futures P&L, marking to market, 
     Options (calls/puts), option pricing factors, implied vol
IF7: Transaction/Economic/Translation exposure, forward hedge, 
     money market hedge, options hedge
IF8: Agency problem, 8 remedies (ICCA-DOSM), concentrated 
     ownership, pyramidal structures, dual-class shares
IF9: FDI vs portfolio, 6 reasons for FDI, Greenfield vs M&A, 
     political risk

KEY EXAM TRAPS TO ALWAYS MENTION WHEN RELEVANT:
- Appreciation % ≠ Depreciation % (always different numbers)
- "None of the above" correct 2-4 times per exam — always compute first
- FDI goes in Financial Account NOT Current Account
- Dispersed shareholding is a WEAKNESS not a remedy
- Short futures LOSES when price RISES
- Implied volatility is the ONLY unobservable option variable
- Impossible Trinity: fixed rates + free capital = no independent policy

YOUR RULES:
1. Only answer questions about International Finance. 
   If asked anything else, say: "I only help with International 
   Finance. What finance topic can I help you with?"
2. Always show formulas when doing calculations.
3. Always show step-by-step working for numerical problems.
4. When relevant, mention if this topic appears in the final exam 
   and how it is typically tested.
5. Keep answers concise — maximum 4 paragraphs.
6. If a student makes a calculation error, correct it gently 
   but clearly.
7. Never give general life advice, opinions on politics, or 
   anything outside finance.`;

const SUGGESTION_CHIPS = [
  "What is the Impossible Trinity?",
  "How do I calculate triangular arbitrage?",
  "What is covered interest arbitrage?"
];
const CHATBOT_API_ENDPOINT = "/api/chat";

let conversationHistory = [
  { role: "system", content: SYSTEM_PROMPT }
];

(function initChatbot() {
  const collapsedBar = document.getElementById("if-chatbot-collapsed");
  const expandedPanel = document.getElementById("if-chatbot-expanded");
  const openBtn = document.getElementById("if-chatbot-open");
  const closeBtn = document.getElementById("if-chatbot-close");
  const messageList = document.getElementById("if-chatbot-messages");
  const form = document.getElementById("if-chatbot-form");
  const input = document.getElementById("if-chatbot-input");
  const sendBtn = document.getElementById("if-chatbot-send");

  if (!collapsedBar || !expandedPanel || !openBtn || !closeBtn || !messageList || !form || !input || !sendBtn) {
    return;
  }

  let initialized = false;
  let pendingTypingNode = null;
  let pendingSlowNode = null;

  function scrollToBottom() {
    messageList.scrollTop = messageList.scrollHeight;
  }

  function openChat() {
    collapsedBar.hidden = true;
    expandedPanel.hidden = false;
    if (!initialized) {
      initialized = true;
      addMessage(
        "assistant",
        "I am your IF tutor. Ask me anything about the course — formulas, concepts, past exam questions. I will not help with anything outside International Finance."
      );
      renderSuggestionChips();
    }
    window.setTimeout(function delayedFocus() {
      input.focus();
      scrollToBottom();
    }, 80);
  }

  function closeChat() {
    expandedPanel.hidden = true;
    collapsedBar.hidden = false;
  }

  function addMessage(role, text) {
    const node = document.createElement("div");
    node.className = "if-chatbot-message " + role;
    node.textContent = text;
    messageList.appendChild(node);
    scrollToBottom();
    return node;
  }

  function renderSuggestionChips() {
    const wrapper = document.createElement("div");
    wrapper.className = "if-chatbot-message assistant";
    const title = document.createElement("div");
    title.textContent = "Try one:";
    wrapper.appendChild(title);

    const chips = document.createElement("div");
    chips.className = "if-chatbot-chips";

    SUGGESTION_CHIPS.forEach(function addChip(text) {
      const chip = document.createElement("button");
      chip.type = "button";
      chip.className = "if-chatbot-chip";
      chip.textContent = text;
      chip.addEventListener("click", function handleChipClick() {
        sendUserMessage(text);
      });
      chips.appendChild(chip);
    });

    wrapper.appendChild(chips);
    messageList.appendChild(wrapper);
    scrollToBottom();
  }

  function addTypingIndicator() {
    const node = document.createElement("div");
    node.className = "if-chatbot-message assistant";
    node.innerHTML = '<span class="if-chatbot-typing-dots"><span></span><span></span><span></span></span>';
    messageList.appendChild(node);
    scrollToBottom();
    pendingTypingNode = node;
  }

  function removeTypingIndicator() {
    if (pendingTypingNode && pendingTypingNode.parentNode) {
      pendingTypingNode.parentNode.removeChild(pendingTypingNode);
    }
    pendingTypingNode = null;
  }

  function trimConversationHistory() {
    const nonSystemMessages = conversationHistory.filter(function keepNonSystem(item) {
      return item.role !== "system";
    });
    if (nonSystemMessages.length <= 20) {
      return;
    }
    const latestNonSystem = nonSystemMessages.slice(-20);
    conversationHistory = [{ role: "system", content: SYSTEM_PROMPT }].concat(latestNonSystem);
  }

  async function sendUserMessage(rawText) {
    const userMessage = rawText.trim();
    if (!userMessage) {
      return;
    }

    addMessage("user", userMessage);
    input.value = "";
    sendBtn.disabled = true;
    input.disabled = true;

    conversationHistory.push({ role: "user", content: userMessage });
    trimConversationHistory();

    addTypingIndicator();

    const slowResponseTimer = window.setTimeout(function onSlowResponse() {
      pendingSlowNode = addMessage("assistant", "Taking longer than usual... still working.");
    }, 10000);

    try {
      const response = await fetch(
        CHATBOT_API_ENDPOINT,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            messages: conversationHistory,
            max_tokens: 400,
            temperature: 0.3
          })
        }
      );

      const rawText = await response.text();
      let data = null;
      try {
        data = rawText ? JSON.parse(rawText) : null;
      } catch (parseError) {
        data = null;
      }

      if (!response.ok) {
        const apiError =
          data &&
          data.error &&
          (typeof data.error === "string"
            ? data.error
            : data.error.message || data.error.code || "Server error");
        const fallback = response.status + " " + (response.statusText || "Request failed");
        throw new Error(apiError || fallback);
      }
      const reply = data && data.choices && data.choices[0] && data.choices[0].message
        ? data.choices[0].message.content
        : "Connection error. Check your internet and try again.";

      conversationHistory.push({ role: "assistant", content: reply });
      trimConversationHistory();

      removeTypingIndicator();
      addMessage("assistant", reply);
    } catch (error) {
      removeTypingIndicator();
      const detail = error && error.message ? " (" + error.message + ")" : "";
      addMessage("assistant", "Connection error. Check your internet and try again." + detail);
    } finally {
      window.clearTimeout(slowResponseTimer);
      if (pendingSlowNode && pendingSlowNode.parentNode) {
        pendingSlowNode.parentNode.removeChild(pendingSlowNode);
      }
      pendingSlowNode = null;
      sendBtn.disabled = false;
      input.disabled = false;
      input.focus();
      scrollToBottom();
    }
  }

  window.openIFTutorWithPrompt = function openIFTutorWithPrompt(promptText) {
    openChat();
    const prompt = typeof promptText === "string" ? promptText : "";
    input.value = prompt;
    input.focus();
  };

  openBtn.addEventListener("click", openChat);
  closeBtn.addEventListener("click", closeChat);
  form.addEventListener("submit", function handleSubmit(event) {
    event.preventDefault();
    sendUserMessage(input.value);
  });
})();
