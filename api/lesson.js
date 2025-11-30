import { runAI } from "./chatgptService.js";

export const config = { runtime: "edge" };

export default async function handler(req) {
  try {
    const { topic, age = 8, language = "English" } = await req.json();

    const system = `Create a child-friendly lesson in 4 short steps on '${topic}' for age ${age}, written in ${language}. Separate steps with ||.`;

    const text = await runAI(system, "Generate lesson");
    const steps = text.split("||").map(s => s.trim());

    return new Response(JSON.stringify({ steps }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });

  } catch (err) {
    return new Response(JSON.stringify({ steps: [] }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
