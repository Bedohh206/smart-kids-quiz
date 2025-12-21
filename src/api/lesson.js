import { runAI } from "./chatgptService.js";

export const config = { runtime: "edge" };

export default async function handler(req) {
  try {
    const { topic, age = 8 } = await req.json();

    const system = `
      You are an AI teacher for kids.
      Create a kid-friendly lesson in EXACTLY 4 steps.
      Topic: ${topic}
      Age: ${age}
      
      FORMAT RULES:
      - Return ONLY: Step 1 || Step 2 || Step 3 || Step 4
      - Each step must be 1 short sentence.
      - No titles, no markdown, no bullets, no extra text.
      - No explanations. Just the steps.
    `;

    const text = await runAI(system, "Begin.");
    if (!text) throw new Error("AI failed");

    const steps = text.split("||").map(s => s.trim());

    return new Response(JSON.stringify({ steps }), {
      headers: { "Content-Type": "application/json" }
    });

  } catch (err) {
    return new Response(
      JSON.stringify({ steps: ["Lesson not available"] }),
      { headers: { "Content-Type": "application/json" } }
    );
  }
}
