export const config = { runtime: "nodejs" };

import { runAI } from "./chatgptService.js";

export default async function handler(req) {
  try {
    if (req.method !== "POST") {
      return new Response(
        JSON.stringify({ error: "Only POST requests allowed" }),
        { status: 405, headers: { "Content-Type": "application/json" } }
      );
    }

    const body = await req.json();
    const { topic, age = 10, language = "en" } = body;

    if (!topic) {
      return new Response(
        JSON.stringify({ error: "Missing topic parameter" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const sysPrompt = `
      Create a kid-friendly mini-lesson about ${topic}.
      Must contain EXACTLY 4 short steps.
      Format: Step 1 || Step 2 || Step 3 || Step 4
      Keep language simple for age ${age}.
      Language: ${language}.
    `;

    const userPrompt = `Generate the lesson now.`;

    const output = await runAI(sysPrompt, userPrompt);

    if (!output) {
      throw new Error("AI returned no lesson");
    }

    const steps = output
      .split("||")
      .map(s => s.trim())
      .filter(Boolean);

    return new Response(
      JSON.stringify({ steps }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );

  } catch (err) {
    console.error("Lesson API Error =>", err.message);
    return new Response(
      JSON.stringify({ error: err.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
