export const config = { runtime: "edge" };
import OpenAI from "openai";

/**
 * 🔥 UNIVERSAL AI HELPER FUNCTION
 * All AI features (explain, lessons, generate questions, translation)
 * call THIS function. Guarantees clean text and removes markdown.
 */
export async function runAI(system, user) {
  try {
    // Ensure API key is present
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      console.error("Missing OPENAI_API_KEY");
      return null;
    }

    const client = new OpenAI({ apiKey });

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: system },
        { role: "user", content: user },
      ],
      temperature: 0.7,
    });

    let text = completion.choices?.[0]?.message?.content;

    if (!text || typeof text !== "string") {
      console.warn("AI returned empty or invalid response");
      return null;
    }

    // Clean markdown, backticks, bullets, extra whitespace
    text = text
      .replace(/```json|```/g, "")
      .replace(/```/g, "")
      .replace(/\*\*/g, "")
      .replace(/\*/g, "")
      .replace(/•/g, "")
      .replace(/\s{2,}/g, " ")
      .trim();

    return text;
  } catch (err) {
    console.error("🔥 AI Error:", err);
    return null;
  }
}

/**
 * Default export: You may ping this route for testing
 */
export default async function handler() {
  return new Response(
    JSON.stringify({ status: "AI service running" }),
    { status: 200, headers: { "Content-Type": "application/json" } }
  );
}