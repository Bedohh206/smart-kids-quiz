export const config = { runtime: "edge" };

import OpenAI from "openai";

export default async function handler(req) {
  try {
    const { subject } = await req.json();

    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
    });

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "Generate multiple-choice questions formatted as JSON {q:'', a:'', options:[]}."
        },
        {
          role: "user",
          content: `Give me 5 multiple-choice questions for children on: ${subject}`
        }
      ]
    });

    return new Response(
      JSON.stringify({ questions: JSON.parse(completion.choices[0].message.content) }),
      { status: 200 }
    );
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
