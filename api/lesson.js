export const config = { runtime: "edge" };

import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(request) {
  try {
    const { topic, age = 8 } = await request.json();

    const system = `
      Create a kids mini-lesson in 4 steps.
      Topic: ${topic}
      Age: ${age}
      Format: Step 1 || Step 2 || Step 3 || Step 4
      Simple and fun language.
    `;

    const response = await client.responses.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: system },
        { role: "user", content: "Generate now." }
      ],
      max_output_tokens: 100,
    });

    const raw = response.output_text.trim();
    const steps = raw.split("||").map(s => s.trim());

    return new Response(JSON.stringify({ steps }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });

  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
