// api/chatgptService.js
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function runAI(system, user) {
  const result = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: system },
      { role: "user", content: user }
    ],
    max_tokens: 200,
    temperature: 0.3
  });

  return result.choices[0].message.content.trim();
}

export const config = { runtime: "edge" };
