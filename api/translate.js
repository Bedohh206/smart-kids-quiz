export const config = { runtime: "edge" };

import OpenAI from "openai";

export default async function handler(req) {
  try {
    const { text, targetLang } = await req.json();

    if (!text || !targetLang) {
      return new Response(JSON.stringify({ error: "Missing fields" }), {
        status: 400,
      });
    }

    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
    });

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            `Translate the JSON object values ONLY into ${targetLang}. 
             Do NOT change keys. 
             Do NOT add explanations. 
             Return ONLY valid JSON.`
        },
        {
          role: "user",
          content: text
        }
      ]
    });

    let output = completion?.choices?.[0]?.message?.content || "";

    // 🔥 Remove Markdown blocks like ```json or ```
    output = output.replace(/```json|```/g, "").trim();

    // 🔥 Ensure it is valid JSON
    let translatedJSON;
    try {
      translatedJSON = JSON.parse(output);
    } catch (error) {
      // fallback: attempt to extract JSON substring
      const match = output.match(/\{[\s\S]*\}/);
      if (match) {
        translatedJSON = JSON.parse(match[0]);
      } else {
        throw new Error("Invalid JSON returned by AI");
      }
    }

    return new Response(
      JSON.stringify({ translated: JSON.stringify(translatedJSON) }),
      { status: 200 }
    );

  } catch (err) {
    return new Response(
      JSON.stringify({ error: err.message || "Translate error" }),
      { status: 500 }
    );
  }
}
