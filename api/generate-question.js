export const config = { runtime: "edge" };

import OpenAI from "openai";

export default async function handler(req) {
  try {
    const { subject } = await req.json();

    if (!subject) {
      return new Response(JSON.stringify({ error: "Missing subject" }), {
        status: 400,
      });
    }

    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "Generate 5 multiple-choice questions for kids. Format output strictly as a JSON array: [{q:'', a:'', options:[]}, ...]. No extra text.",
        },
        {
          role: "user",
          content: `Create 5 questions for: ${subject}`,
        },
      ],
    });

    let raw = completion.choices?.[0]?.message?.content || "[]";

    // 🔥 FIX: Remove backticks or accidental text around JSON
    raw = raw.replace(/```json|```/g, "").trim();

    let questions;

    try {
      questions = JSON.parse(raw);
    } catch (e) {
      // 🔥 FALLBACK: If GPT returns messy output
      questions = [];
    }

    // Final safety: ensure array
    if (!Array.isArray(questions)) questions = [];

    return new Response(JSON.stringify({ questions }), { status: 200 });
  } catch (err) {
    return new Response(
      JSON.stringify({ error: err.message || "Server error" }),
      { status: 500 }
    );
  }
}
