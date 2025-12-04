export const config = { runtime: "edge" };

import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function runAI(system, user) {
  try {
    const completion = await client.responses.create({
      model: "gpt-4o-mini",
      input: [
        { role: "system", content: system },
        { role: "user", content: user }
      ],
      max_output_tokens: 200
    });

    return completion.output_text.trim();
  } catch (err) {
    console.error("🔥 OpenAI Failure:", err.message);
    return null;
  }
}

export default function handler() {
  return new Response(JSON.stringify({ status: "AI OK 🚀" }), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
}
