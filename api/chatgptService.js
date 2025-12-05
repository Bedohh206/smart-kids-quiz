import OpenAI from "openai";

export const config = { runtime: "edge" };

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function runAI(system, user) {
  try {
    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: system },
        { role: "user", content: user }
      ],
      max_tokens: 180,
      temperature: 0.4,
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
