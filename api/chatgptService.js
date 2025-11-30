export const config = { runtime: "edge" };

import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

/**
 * UNIVERSAL AI HELPER — CALL ANY PROMPT
 */
export async function runAI(system, user) {
  try {
    const completion = await client.responses.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: system },
        { role: "user", content: user }
      ],
      max_output_tokens: 200,
    });

    return completion.output_text.trim();
  } catch (err) {
    console.error("AI run error:", err);
    return null;
  }
}
