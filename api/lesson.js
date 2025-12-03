import { runAI } from "./chatgptService.js";

export const config = { runtime: "edge" };

export default async function handler(req) {
  try {
    const { topic, age = 8 } = await req.json();
    const sys = `Create a 4-step fun lesson about ${topic} for kids age ${age}. Use this format: Step 1 || Step 2 || Step 3 || Step 4`;

    const text = await runAI(sys, "Generate now");
    const steps = text.split("||").map(s => s.trim());

    return new Response(JSON.stringify({ steps }), {
      headers: { "Content-Type": "application/json" }
    });

  } catch (err) {
    return new Response(JSON.stringify({ steps: ["Lesson not available"] }), {
      headers: { "Content-Type": "application/json" }
    });
  }
}
