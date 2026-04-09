export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { messages } = req.body;
    
    const groqResponse = await fetch(
      'https://api.groq.com/openai/v1/chat/completions',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + process.env.GROQ_API_KEY
        },
        body: JSON.stringify({
          model: 'llama-3.3-70b-versatile',
          messages: messages,
          max_tokens: 400,
          temperature: 0.3
        })
      }
    );

    const data = await groqResponse.json();
    
    if (!groqResponse.ok) {
      return res.status(500).json({ 
        error: 'Groq API error', 
        details: data 
      });
    }

    if (!data.choices || !data.choices[0]) {
      return res.status(500).json({ 
        error: 'Unexpected Groq response', 
        details: data 
      });
    }

    return res.status(200).json(data);

  } catch (err) {
    return res.status(500).json({ 
      error: 'Server error', 
      message: err.message 
    });
  }
}
