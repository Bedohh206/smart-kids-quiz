export const config = { runtime: "edge" };

import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// MUST be exported – used by lesson.js and other APIs
export async function runAI(system, user) {
  const completion = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: system },
      { role: "user", content: user }
    ],
    temperature: 0.4,
  });

  return completion.choices[0].message.content.trim();
}

// Optional health check
export default function handler() {
  return new Response(
    JSON.stringify({ status: "AI service READY 🚀" }),
    { status: 200, headers: { "Content-Type": "application/json" } }
  );
}
