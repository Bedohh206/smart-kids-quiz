export const config = { runtime: "nodejs" };

import { runAI } from "../chatgptService.js";

export async function POST(req) {
  try {
    const body = await req.json();
    const { topic, age = 10, language = "en" } = body;

    if (!topic) {
      return Response.json({ error: "Missing topic" }, { status: 400 });
    }

    const sys = `
      Create a kid-friendly mini-lesson on ${topic}.
      EXACTLY 4 steps.
      Format: Step 1 || Step 2 || Step 3 || Step 4
      Age ${age}, language ${language}.
    `;

    const answer = await runAI(sys, "Generate now");

    const steps = answer.split("||").map(s => s.trim()).filter(Boolean);

    return Response.json({ steps });

  } catch (err) {
    console.error("Lesson API error:", err);
    return Response.json({ error: err.message }, { status: 500 });
  }
}
