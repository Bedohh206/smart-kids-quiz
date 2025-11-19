export const config = { runtime: "edge" };

import OpenAI from "openai";

export default async function handler(req) {
  try {
    const { topic } = await req.json();

    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
    });

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You create short kid-friendly lessons. Return steps as a list separated by '||'."
        },
        {
          role: "user",
          content: `Build a very short lesson for kids about: ${topic}`
        }
      ]
    });

    const steps = completion.choices[0].message.content.split("||");

    return new Response(JSON.stringify({ steps }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
