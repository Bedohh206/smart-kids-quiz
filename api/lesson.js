import OpenAI from "openai";

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  try {
    const body = typeof req.body === 'string' ? (() => { try { return JSON.parse(req.body); } catch { return {}; } })() : (req.body || {});
    const { topic, age = 8, language = 'English', mode = 'auto' } = body;

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

    const prompt = `You are an AI teacher for kids.\n\nCreate EXACTLY 4 short lesson steps.\n\nTopic: ${topic}\nAge: ${age}\nLanguage: ${language}\n\nFORMAT RULES (VERY IMPORTANT):\n- Return ONLY plain text\n- Separate each step with: ||\n- Example:\nStep 1 || Step 2 || Step 3 || Step 4\n- NO markdown\n- NO JSON\n- NO explanations`;

    let text = null;
    try {
      const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
      // First try Responses API
      const resp = await client.responses.create({
        model: "gpt-4o",
        input: prompt,
        temperature: 0.2,
        max_output_tokens: 256,
      });
      if (resp && typeof resp.output_text === "string" && resp.output_text.trim()) {
        text = resp.output_text.trim();
      }
      // If Responses didn't yield text, fall back to Chat Completions
      if (!text) {
        console.warn("[lesson] Responses API returned empty; falling back to Chat Completions");
        const cc = await client.chat.completions.create({
          model: "gpt-4o",
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
        }
      }
    } catch (_) {
      // Swallow error; we'll handle fallback below
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
