import OpenAI from "openai";

export const config = { runtime: "edge" };

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function runAI(system, user) {
  try {
    const response = await client.responses.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: system },
        { role: "user", content: user }
      ],
      max_output_tokens: 150
    });

    // Extract model text safely
    const output = response.output_text;

    if (!output) {
      throw new Error("Empty AI response");
    }

    return output.trim();
  } catch (e) {
    console.error("AI ERROR:", e);
    return "Lesson not available";
  }
}
