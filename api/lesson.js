import OpenAI from "openai";

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  try {
    const { topic, age = 8, language = 'English', mode = 'auto' } = req.body || {};

    const staticSteps = (t) => {
      const s = t ? String(t).replace(/[-_]/g, ' ') : 'this topic';
      return [
        `Learn what ${s} is.`,
        `See one example of ${s}.`,
        `Try a short activity about ${s}.`,
        `Review what you learned about ${s}.`,
      ];
    };

    if (mode === 'static') {
      res.json({ steps: staticSteps(topic) });
      return;
    }

    const prompt = `You are an AI teacher for kids.

Create EXACTLY 4 short lesson steps about: ${topic}
Age: ${age}
Language: ${language}

FORMAT (CRITICAL):
Return 4 sentences separated by ||
DO NOT include "Step 1" or "Step 2" labels
DO NOT use numbering
DO NOT use markdown
Just write: Sentence 1 || Sentence 2 || Sentence 3 || Sentence 4

Example: Learn about planets. || See pictures of planets. || Try naming planets. || Quiz yourself.`;

    let text = null;
    try {
      const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
      const cc = await client.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: "You format lessons for kids exactly as instructed." },
          { role: "user", content: prompt },
        ],
        temperature: 0.2,
        max_tokens: 256,
      });
      const content = cc?.choices?.[0]?.message?.content;
      if (content && String(content).trim()) {
        text = String(content).trim();
      } else {
        console.warn("[lesson] OpenAI returned no content");
      }
    } catch (err) {
      console.error("[lesson] OpenAI error:", err.message || err);
    }

    if (!text) {
      if (mode === 'auto') {
        res.json({ steps: staticSteps(topic) });
        return;
      }
      res.json({ steps: ["Lesson unavailable right now."] });
      return;
    }

    const steps = text.split('||').map(s => s.trim()).filter(Boolean);
    if (steps.length !== 4) {
      console.warn(`[lesson] Unexpected steps length: ${steps.length}; mode=${mode}`);
    }
    // If the AI did not produce exactly 4 steps, handle according to mode
    if (steps.length !== 4) {
      if (mode === 'auto') {
        res.json({ steps: staticSteps(topic) });
        return;
      }
      res.json({ steps: ["Lesson unavailable right now."] });
      return;
    }
    res.json({ steps });
  } catch (err) {
    res.status(200).json({ steps: ["Lesson unavailable right now."] });
  }
}
