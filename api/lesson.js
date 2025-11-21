export const config = { runtime: "edge" };

import { runAI } from "../../src/utils/chatgptService.js";

export default async function handler(req) {
  try {
    // Parse request body safely
    let body = {};
    try {
      body = await req.json();
    } catch (err) {
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
      Write exactly 4 steps.
      Format MUST be: Step 1 || Step 2 || Step 3 || Step 4
      Use simple language.
      No markdown, no lists, no decoration.
      Respond in language: ${language || "en"}.
    `;

    const userPrompt = `Create a mini-lesson about: ${topic}`;

    let raw = await runAI(systemPrompt, userPrompt);

    if (!raw) raw = "Step 1 || Step 2 || Step 3 || Step 4";

    raw = raw.replace(/```/g, "").trim();

    let steps = raw
      .split("||")
      .map((s) => s.trim())
      .filter((s) => s.length > 0);

    return new Response(
      JSON.stringify({ steps }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );

  } catch (err) {
    return new Response(
      JSON.stringify({ error: "Server error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
