import { runAI } from "./chatgptService.js";   // 🚀 Correct path

export const config = {
  runtime: "nodejs",     // MUST be "nodejs" — NOT nodejs18.x
  maxDuration: 60        // Allows long AI responses
};

export default async function handler(req) {
  try {
    const body = await req.json().catch(() => null);

    if (!body) {
      return new Response(
        JSON.stringify({ error: "Invalid JSON body" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const { topic, age, language } = body;

    if (!topic || !age) {
      return new Response(
        JSON.stringify({ error: "Missing lesson parameters" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const systemPrompt = `
      Create a kid-friendly mini-lesson for ages ${age}.
      Write exactly 4 steps separated by ||
      Use simple language.
      No markdown, no emojis, no bullet points.
      Respond in language: ${language || "en"}.
    `;

    const userPrompt = `Create a mini-lesson about: ${topic}`;

    let raw = await runAI(systemPrompt, userPrompt);
    if (!raw) raw = "Step 1 || Step 2 || Step 3 || Step 4";

    const steps = raw
      .replace(/```/g, "")
      .trim()
      .split("||")
      .map((s) => s.trim())
      .filter(Boolean);

    return new Response(
      JSON.stringify({ steps }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );

  } catch (err) {
    return new Response(
      JSON.stringify({ error: err.message || "Server error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
