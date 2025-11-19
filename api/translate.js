export const config = { runtime: "edge" };

import OpenAI from "openai";

export default async function handler(req) {
  try {
    const { text, targetLang } = await req.json();

    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
    });

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `Translate JSON strictly into ${targetLang}. Do NOT change any keys or structure.`
        },
        { role: "user", content: text }
      ]
    });

    return new Response(
      JSON.stringify({
        translated: completion.choices[0].message.content
      }),
      { status: 200 }
    );
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
