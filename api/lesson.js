import { runAI } from "./chatgptService.js";

export const config = { runtime: "edge" };

export default async function handler(request) {
  try {
    const { topic, age = 8 } = await request.json();

    const system = `
      Create a 4-step mini lesson for kids aged ${age}.
      Topic: ${topic}
      Format: Step 1 || Step 2 || Step 3 || Step 4
    `;

    const output = await runAI(system, "Generate now");
    const steps = output.split("||").map(s => s.trim());

    return new Response(JSON.stringify({ steps }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
