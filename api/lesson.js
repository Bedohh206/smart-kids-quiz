export const config = { runtime: "edge" };

import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(request) {
  try {
    const { topic, age = 8 } = await request.json();

    const system = `
      Create a kids mini-lesson in 4 small steps.
      Topic: ${topic}
      Age: ${age}
      Format: Step 1 || Step 2 || Step 3 || Step 4
    `;

    const user = "Generate now.";

    const response = await client.responses.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: system },
        { role: "user", content: user }
      ],
      max_output_tokens: 150
    });

    const raw = response.output_text.trim();
    const steps = raw.split("||").map(x => x.trim());

    return new Response(
      JSON.stringify({ steps }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );

  } catch (err) {
    return new Response(
      JSON.stringify({ error: err.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
