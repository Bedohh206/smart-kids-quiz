export const config = { runtime: "edge" };
import OpenAI from "openai";

/**
 * 🔥 UNIVERSAL AI HELPER FUNCTION
 * Supports: lessons, questions, explanations, translations
 */
export async function runAI(system, user) {
  try {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      console.error("❌ Missing OPENAI_API_KEY");
      return null;
    }

    const client = new OpenAI({ apiKey });

    // ✅ New OpenAI API (responses.create)
    const response = await client.responses.create({
      model: "gpt-4o-mini",
      input: [
        { role: "system", content: system },
        { role: "user", content: user }
      ],
      max_output_tokens: 300,
      temperature: 0.7,
    });

    // Handle the new response format
    let text = response.output_text;

    if (!text || typeof text !== "string") {
      console.warn("⚠️ AI returned empty output");
      return null;
    }

    // Clean formatting
    text = text
      .replace(/```/g, "")
      .replace(/\*\*/g, "")
      .replace(/\*/g, "")
      .replace(/\s{2,}/g, " ")
      .trim();

    return text;

  } catch (err) {
    console.error("🔥 AI Error:", err);
    return null;
  }
}

// TEST ROUTE
export default async function handler() {
  return new Response(
    JSON.stringify({ status: "AI service running" }),
    { status: 200, headers: { "Content-Type": "application/json" } }
  );
}
