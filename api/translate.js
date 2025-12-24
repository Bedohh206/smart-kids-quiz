import OpenAI from "openai";

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  try {
    const { text, targetLang } = req.body || {};

    if (!text || !targetLang) {
      res.status(400).json({ error: 'Text and targetLang are required' });
      return;
    }

    // Skip translation for English
    if (targetLang === "en" || targetLang === "English") {
      res.json({ translation: text });
      return;
    }

    try {
      const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
      const completion = await client.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: `Translate content to ${targetLang}. Preserve JSON structure if present. Translate values only, not keys.`
          },
          {
            role: "user",
            content: text
          }
        ],
        temperature: 0.3,
        max_tokens: 500,
      });

      const translation = completion?.choices?.[0]?.message?.content;
      if (translation && translation.trim()) {
        res.json({ translation: translation.trim() });
        return;
      }
    } catch (err) {
      console.error("[translate] OpenAI error:", err.message || err);
    }

    // Return original text if translation fails
    res.json({ translation: text });

  } catch (err) {
    console.error("[translate] Error:", err);
    res.status(200).json({ translation: req.body?.text || '' });
  }
}
