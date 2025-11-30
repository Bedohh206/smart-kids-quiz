export const config = { runtime: "nodejs" };

import OpenAI from "openai";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async function handler(req) {
  try {
    if (req.method !== "POST") {
      return new Response(
        JSON.stringify({ error: "Only POST requests allowed" }),
        { status: 405, headers: { "Content-Type": "application/json" } }
      );
    }

    const { topic, age = 8 } = await req.json();

    const system = `
      Create a 4-step mini-lesson for kids.
      Topic: ${topic}
      Age: ${age}
      Use fun, friendly language.
      Format: Step 1 || Step 2 || Step 3 || Step 4
    `;

    const completion = await client.responses.create({
      model: "gpt-4o-mini",
      input: [
        { role: "system", content: system },
        { role: "user", content: "Generate lesson now." }
      ]
    });

    const text = completion.output_text.trim();
    const steps = text.split("||").map(s => s.trim());

    return new Response(JSON.stringify({ steps }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });

  } catch (err) {
    console.error("Lesson Error:", err.message);
    return new Response(
      JSON.stringify({ error: err.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
