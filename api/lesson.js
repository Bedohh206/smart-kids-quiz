import { runAI } from "./chatgptService.js";

export const config = { runtime: "edge" };

export default async function handler(req) {
  try {
    const { topic, age = 8 } = await req.json();

    const system = `
  You are an AI tutor for children.
  Write a kid-friendly mini lesson in EXACTLY 4 steps.
  Topic: ${topic}
  Age: ${age}

  RULES:
  - Format MUST be: Step 1 || Step 2 || Step 3 || Step 4
  - Each step must be ONE short sentence.
  - NO new lines, NO markdown, NO quotes, NO bullets.
  - Do NOT explain the task. Just output the 4 steps.
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
