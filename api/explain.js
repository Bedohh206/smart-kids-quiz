export const config = { runtime: "nodejs" };
import { runAI } from "./chatgptService";

export default async function handler(req) {
  try {
    // Safely parse JSON body
    let topic, age, language;
    try {
      const body = await req.json();
      topic = body.topic;
      age = body.age;
      language = body.language;
    } catch (err) {
      return new Response(
        JSON.stringify({ error: "Invalid JSON body" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    if (!topic || !age) {
      return new Response(
        JSON.stringify({ error: "Missing lesson parameters" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const systemPrompt = `
      Create a kid-friendly mini-lesson (ages ${age}).
      Format EXACTLY like this: Step 1 || Step 2 || Step 3 || Step 4
      Use simple language. No markdown. No lists. No extra sentences.
      Respond in language: ${language || "en"}.
    `;

    const userPrompt = `Create a mini-lesson about: ${topic}`;

    let raw;
    try {
      raw = await runAI(systemPrompt, userPrompt);
    } catch (err) {
      console.error("runAI failed:", err);
      return new Response(
        JSON.stringify({ error: "AI generation failed" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    if (!raw || typeof raw !== "string") {
      raw = "Step 1 || Step 2 || Step 3";
    }

    raw = raw.replace(/```/g, "").trim();

    let steps = raw.split("||").map((s) => s.trim()).filter((s) => s.length > 0);

    return new Response(
      JSON.stringify({ steps }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );

  } catch (err) {
    console.error("Lesson API error:", err);
    return new Response(
      JSON.stringify({ error: err.message || "Lesson error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}