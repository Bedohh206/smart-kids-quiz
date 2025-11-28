export const config = { runtime: "nodejs" };

import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

/**
 * 🌟 UNIVERSAL AI HELPER FUNCTION
 */
export async function runAI(systemPrompt, userPrompt) {
  try {
    const response = await client.responses.create({
      model: "gpt-4o-mini",
      input: `${systemPrompt}\nUser: ${userPrompt}`,
      max_output_tokens: 300,
      temperature: 0.7,
    });

    let text = response.output_text;

    if (!text) return null;

    return text
      .replace(/```/g, "")
      .replace(/\*\*/g, "")
      .replace(/\*/g, "")
      .replace(/\s{2,}/g, " ")
      .trim();

  } catch (err) {
    console.error("🔥 AI Error:", err);
    return null;
  }
}

export default async function handler() {
  return new Response(
    JSON.stringify({ status: "AI service running" }),
    { status: 200, headers: { "Content-Type": "application/json" } }
  );
}
