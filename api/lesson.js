import { runAI } from "./chatgptService.js";
export const config = { runtime: "edge" };

export default async function handler(request) {
  try {
    const { topic, age = 9 } = await request.json();

    const system = `
      Create a kid-friendly mini-lesson in 4 steps.
      Topic: ${topic}
      Age: ${age}
      Format: Step 1 || Step 2 || Step 3 || Step 4
      Simple and fun language.
    `;

    const raw = await runAI(system, "Generate lesson now.");

    const steps = raw.split("||").map(s => s.trim());

    return new Response(JSON.stringify({ steps }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });

  } catch (e) {
    return new Response(JSON.stringify({ steps: ["Lesson not available"] }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  }
}
