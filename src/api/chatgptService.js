import fetch from "node-fetch";
import OpenAI from "openai";

/**
 * Call OpenAI using Chat Completions (Express-safe)
 * @param {string} prompt
 * @returns {string|null}
 */
export async function runAI(systemOrPrompt, userPrompt) {
  const key = process.env.OPENAI_API_KEY || "";
  if (!key) {
    console.warn("⚠️ OPENAI_API_KEY missing — OpenAI calls will fail until set.");
  }

  const promptText = userPrompt
    ? `${systemOrPrompt}\n\n${userPrompt}`
    : systemOrPrompt;

  // Preferred: Responses API via official SDK (works with project keys)
  try {
    const client = new OpenAI({ apiKey: key });
    const resp = await client.responses.create({
      model: "gpt-4o",
      input: promptText,
      temperature: 0.2,
      max_output_tokens: 256,
    });
    const text = (resp && resp.output_text) ? resp.output_text.trim() : null;
    if (text) return text;
  } catch (err) {
    console.warn("⚠️ Responses API failed, falling back to Chat Completions:", err?.message || err);
  }

  // Fallback: Chat Completions API
  try {
    const messages = userPrompt
      ? [
          { role: "system", content: systemOrPrompt },
          { role: "user", content: userPrompt },
        ]
      : [
          { role: "user", content: systemOrPrompt },
        ];

    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o",
        messages,
        temperature: 0.2,
        max_tokens: 256,
      }),
    });

    const data = await res.json();
    const content = data?.choices?.[0]?.message?.content;
    if (!content) {
      console.error("⚠️ OpenAI empty response (fallback):", data);
      return null;
    }
    return String(content).trim();
  } catch (err) {
    console.error("🔥 OpenAI Error (fallback):", err);
    return null;
  }
}
