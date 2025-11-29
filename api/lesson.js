import OpenAI from "openai";

export const config = {
  runtime: "nodejs",
  maxDuration: 20, // prevents timeout
};

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req) {
  try {
    if (req.method !== "POST") {
      return new Response(
        JSON.stringify({ error: "Use POST only" }),
        { status: 405, headers: { "Content-Type": "application/json" } }
      );
    }

    const body = await req.json();
    const { topic, age = 10, language = "English" } = body;

    const prompt = `
      Create a child-friendly mini-lesson.
      Topic: ${topic}
      Age: ${age}
      Language: ${language}

      Rules:
      - EXACTLY 4 steps
      - One short sentence each
      - No numbering, no markdown
      - Split steps using ||
    `;

    const completion = await client.responses.create({
      model: "gpt-4o-mini",
      input: prompt,
    });

    let text = completion.output_text?.trim() || "";
    const steps = text.split("||").map(s => s.trim()).filter(Boolean);

    return new Response(
      JSON.stringify({ steps }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Lesson API Error:", err);
    return new Response(
      JSON.stringify({ error: "Server failed to generate lesson" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
