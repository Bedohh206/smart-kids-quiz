import OpenAI from "openai";

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  try {
    const { question, answer, language = 'English' } = req.body || {};

    if (!question || !answer) {
      res.status(400).json({ error: 'Question and answer are required' });
      return;
    }

    // Fallback explanation
    const fallbackExplanation = `The correct answer is "${answer}". This is an important fact to remember.`;

    // Try AI explanation
    try {
      const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
      const completion = await client.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: `You are a friendly teacher explaining quiz answers to children. Keep explanations simple, clear, and encouraging. Use language: ${language}`
          },
          {
            role: "user",
            content: `Question: ${question}\nCorrect Answer: ${answer}\n\nExplain why this is the correct answer in 2-3 simple sentences for kids.`
          }
        ],
        temperature: 0.7,
        max_tokens: 150,
      });

      const explanation = completion?.choices?.[0]?.message?.content;
      if (explanation && explanation.trim()) {
        res.json({ explanation: explanation.trim() });
        return;
      }
    } catch (err) {
      console.error("[explain] OpenAI error:", err.message || err);
    }

    // Return fallback if AI fails
    res.json({ explanation: fallbackExplanation });

  } catch (err) {
    console.error("[explain] Error:", err);
    res.status(200).json({ 
      explanation: `The correct answer is "${req.body?.answer || 'this answer'}". This is an important fact to remember.` 
    });
  }
}
