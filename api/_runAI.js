export const config = { runtime: "nodejs" };

import OpenAI from "openai";
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function runAI(system, user) {
  try {
    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: system },
        { role: "user", content: user }
      ],
      temperature: 0.3
    });

    return completion.choices[0].message.content;
  } catch (err) {
    console.error("🔥 OpenAI error:", err.message);
    return null;
  }
}
