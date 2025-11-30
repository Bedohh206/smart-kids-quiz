import OpenAI from "openai";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function runAI(system, user) {
  const result = await client.responses.create({
    model: "gpt-4o-mini",
    input: [
      { role: "system", content: system },
      { role: "user", content: user }
    ],
  });

  return result.output_text.trim();
}

export const config = { runtime: "nodejs" };
