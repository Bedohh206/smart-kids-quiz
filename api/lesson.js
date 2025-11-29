export const config = { runtime: "edge" }; // 🚀 fastest mode

import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export default async function handler(request) {
  try {
    const { topic, age = 8 } = await request.json();

    const response = await client.responses.create({
      model: "gpt-4o-mini",
      input: `
        Create a kid-friendly lesson in EXACTLY 4 steps.
        Topic: ${topic}
        Age: ${age}
        Format: Step 1 || Step 2 || Step 3 || Step 4
        Simple sentences. No markdown.
      `
    });

    const text = response.output_text;
    const steps = text.split("||").map(s => s.trim()).filter(Boolean);

    return new Response(JSON.stringify({ steps }), {
      headers: { "Content-Type": "application/json" }
    });

  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
