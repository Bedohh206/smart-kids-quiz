export const config = { runtime: "edge" };
import { runAI } from "./chatgptService.js";

export default async function handler(request) {
  try {
    const { topic, age = 8 } = await request.json();

    if (!topic) {
      return new Response(JSON.stringify({ steps: ["Topic missing"] }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    }

    const system = `
      You are a kids' learning tutor.
      Create a fun 4-step lesson.
      Topic: ${topic}
      Age: ${age}
      Format MUST be: Step 1 || Step 2 || Step 3 || Step 4
      Keep each step short and engaging.
    `;

    const result = await runAI(system, "Generate now.");
    if (!result) throw new Error("AI returned null");

    const steps = result
      .split("||")
      .map(s => s.trim())
      .filter(Boolean);

    return new Response(JSON.stringify({ steps }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });

  } catch (err) {
    console.error("Lesson Error:", err);
    return new Response(
      JSON.stringify({ steps: ["AI unavailable — try again later"] }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
}
