import { runAI } from "./chatgptService.js";
export const config = { runtime: "edge" };

export default async function handler(request) {
  try {
    const { topic, age = 8 } = await request.json();

    const system = `
      Create a kids mini-lesson in 4 short steps.
      Topic: ${topic}
      Age: ${age}
      Format: Step 1 || Step 2 || Step 3 || Step 4
      Keep language simple and fun.
    `;

    const output = await runAI(system, "Generate now.");

    const steps = output.split("||").map(s => s.trim());

    return new Response(JSON.stringify({ steps }), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });

  } catch (err) {
    return new Response(JSON.stringify({ steps: ["Lesson not available"] }), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  }
}
