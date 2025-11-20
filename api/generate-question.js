export const config = { runtime: "edge" };
import { runAI } from "./chatgptService";

export default async function handler(req) {
  try {
    // Safely parse JSON body
    let subject, level, age;
    try {
      const body = await req.json();
      subject = body.subject;
      level = body.level;
      age = body.age;
    } catch (err) {
      return new Response(
        JSON.stringify({ error: "Invalid JSON body" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    if (!subject) {
      return new Response(
        JSON.stringify({ error: "Missing subject" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const systemPrompt = `
      Generate 5 multiple-choice questions for kids ages ${age || "6–14"}.
      Difficulty level: ${level || "basic"}.
      Format EXACTLY as VALID JSON:
      [
        {"q": "...", "a": "...", "options": ["...","...","...","..."]},
        ...
      ]
      Rules:
      - Options MUST be 4 items.
      - Correct answer ("a") must appear in ANY option index (randomized).
      - Keep language simple.
    `;

    const userPrompt = `Generate questions for subject: ${subject}`;

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
      raw = "[]";
    }

    raw = raw.replace(/```json|```/g, "").trim();

    let questions;
    try {
      questions = JSON.parse(raw);
    } catch (err) {
      const match = raw.match(/\[[\s\S]*\]/);
      if (match) {
        try {
          questions = JSON.parse(match[0]);
        } catch {
          questions = [];
        }
      } else {
        questions = [];
      }
    }

    if (!Array.isArray(questions)) questions = [];

    return new Response(
      JSON.stringify({ questions }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );

  } catch (err) {
    console.error("Question API error:", err);
    return new Response(
      JSON.stringify({ error: err.message || "Question generation error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}