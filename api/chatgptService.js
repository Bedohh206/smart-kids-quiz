import OpenAI from "openai";

export const config = { runtime: "edge" };

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function runAI(prompt) {
  try {
    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "user", content: prompt }
      ],
      max_tokens: 800, // ⬅️ was 180, now more room for full lessons
      temperature: 0.5, // slightly more creative, still controlled
    });

    return completion.choices[0].message.content.trim();
  } catch (err) {
    console.error("🔥 AI ERROR:", err);
    return null;
  }
}

export default function handler() {
  return new Response(JSON.stringify({ status: "AI READY 🚀" }), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
}
