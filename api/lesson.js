export const config = { runtime: "nodejs" };
import { runAI } from "./chatgptService.js";

export default async function handler(req) {
  try {
    const body = await req.json();
    const { topic, age, language } = body;

    if (!topic) {
      return jsonError("Missing topic");
    }

    const system = `
      Create a simple ${age}-year-old-friendly lesson.
      Format exactly like: Step 1 || Step 2 || Step 3 || Step 4
      No bullet points, no markdown.
      Language: ${language || "en"}.
    `;

    const user = `Create a lesson about ${topic}`;

    const output = await runAI(system, user);

    if (!output) return jsonError("AI returned no content");

    const steps = output.split("||").map(s => s.trim()).filter(Boolean);

    return jsonOK({ steps });

  } catch (err) {
    console.error("Lesson API Error:", err);
    return jsonError(err.message || "Internal error");
  }
}

function jsonOK(obj) {
  return new Response(JSON.stringify(obj), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
}

function jsonError(msg) {
  return new Response(JSON.stringify({ error: msg }), {
    status: 500,
    headers: { "Content-Type": "application/json" }
  });
}
