import OpenAI from "openai";

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  try {
    const { topic, age, level, language = 'English' } = req.body || {};

    if (!topic) {
      res.status(400).json({ error: 'Topic is required' });
      return;
    }

    const prompt = `Generate 5 kid-friendly multiple-choice quiz questions.

Topic: ${topic}
Age group: ${age || '8-10'}
Difficulty: ${level || 'level1'}
Language: ${language}

FORMAT RULES:
- Return ONLY a valid JSON array
- Each item must be:
{
  "q": "Question text",
  "a": "Correct answer",
  "options": ["Option A","Option B","Option C","Option D"]
}
- EXACTLY 4 options per question
- The correct answer must be one of the options
- Keep questions age-appropriate and educational`;

    try {
      const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
      const completion = await client.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: "You generate educational quiz questions in valid JSON format only. No markdown, no explanation."
          },
          {
            role: "user",
            content: prompt
          }
        ],
        temperature: 0.8,
        max_tokens: 800,
      });

      const content = completion?.choices?.[0]?.message?.content;
      if (content && content.trim()) {
        // Try to parse as JSON
        try {
          const questions = JSON.parse(content.trim());
          if (Array.isArray(questions)) {
            res.json({ questions });
            return;
          }
        } catch (parseErr) {
          console.error("[generate-question] JSON parse error:", parseErr);
        }
      }
    } catch (err) {
      console.error("[generate-question] OpenAI error:", err.message || err);
    }

    // Fallback questions
    res.json({
      questions: [
        {
          q: `What is interesting about ${topic}?`,
          a: "It's worth learning about",
          options: ["It's worth learning about", "Nothing special", "I don't know", "Not sure"]
        }
      ]
    });

  } catch (err) {
    console.error("[generate-question] Error:", err);
    res.status(200).json({ questions: [] });
  }
}
