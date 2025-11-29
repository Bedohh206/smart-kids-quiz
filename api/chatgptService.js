import OpenAI from "openai";

export const config = { runtime: "nodejs" };

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function runAI(system, user) {
  try {
    const response = await client.responses.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: system },
        { role: "user", content: user }
      ],
      max_output_tokens: 200,
      temperature: 0.6,
    });

    const out = response.output_text?.trim();
    return out || null;

  } catch (err) {
    console.log("🔥 AI ERROR:", err.message);
    return null;
  }
}
