import OpenAI from "openai";
export const config = { runtime: "edge" };

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function runAI(system, user) {
  try {
    const response = await client.responses.create({
      model: "gpt-4o-mini",
      input: [
        { role: "system", content: system },
        { role: "user", content: user }
      ]
    });

    return response.output_text.trim();
  } catch (err) {
    console.error("🔥 AI ERROR:", err);
    return null; // triggers fallback "AI unavailable — try again later"
  }
}

export default () =>
  new Response(JSON.stringify({ ok: true }), {
    headers: { "Content-Type": "application/json" }
  });
