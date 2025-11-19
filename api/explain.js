export const config = { runtime: "edge" };

import OpenAI from "openai";

export default async function handler(req) {
  try {
    const { question, answer } = await req.json();

    if (!question || !answer) {
      return new Response(
        JSON.stringify({ error: "Missing question or answer" }),
        { status: 400 }
      );
    }

    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You are a fun AI tutor. Explain things to children in a friendly, simple way.",
        },
        {
          role: "user",
          content: `Explain why "${answer}" is the correct answer to the question:\n\n"${question}"`,
        },
      ],
    });

    const text =
      completion.choices?.[0]?.message?.content ||
      "I’m not sure, but try your best!";

    return new Response(JSON.stringify({ explanation: text }), {
      status: 200,
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ error: err.message || "Server error" }),
      { status: 500 }
    );
  }
}
