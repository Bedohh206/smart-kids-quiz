import fetch from "node-fetch";

/**
 * Call OpenAI using Chat Completions (Express-safe)
 * @param {string} prompt
 * @returns {string|null}
 */
export async function runAI(prompt) {
  try {
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "user", content: prompt }
        ],
        temperature: 0.4,
      }),
    });

    const data = await res.json();

    if (!data?.choices?.[0]?.message?.content) {
      console.error("⚠️ OpenAI empty response:", data);
      return null;
    }

    return data.choices[0].message.content.trim();
  } catch (err) {
    console.error("🔥 OpenAI Error:", err);
    return null;
  }
}
