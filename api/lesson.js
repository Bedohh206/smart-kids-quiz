import OpenAI from "openai";

export const config = { runtime: "nodejs" };

export async function runAI(systemPrompt, userPrompt) {
  try {
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt }
      ],
      max_tokens: 200,
      temperature: 0.6,
    });

    return response.choices[0].message.content.trim();

  } catch (err) {
    console.error("🔥 OpenAI Error:", err.message);
    return null;
  }
}

export default async function handler() {
  return new Response(
    JSON.stringify({ status: "AI service running" }),
    { status: 200, headers: { "Content-Type": "application/json" } }
  );
}
