export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "Missing GROQ_API_KEY env var" });
  }

  try {
    const payload = req.body || {};
    const messages = Array.isArray(payload.messages) ? payload.messages : [];
    const maxTokens = typeof payload.max_tokens === "number" ? payload.max_tokens : 400;
    const temperature = typeof payload.temperature === "number" ? payload.temperature : 0.3;

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + apiKey
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant",
        messages: messages,
        max_tokens: maxTokens,
        temperature: temperature
      })
    });

    const data = await response.json();
    if (!response.ok) {
      const groqMessage =
        data &&
        data.error &&
        (data.error.message || data.error.code || "Groq API request failed");
      return res.status(response.status).json({
        error: groqMessage || "Groq API request failed"
      });
    }
    return res.status(response.status).json(data);
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
}
