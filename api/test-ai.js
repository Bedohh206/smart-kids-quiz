import OpenAI from "openai";

export default async function handler(req, res) {
  try {
    const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    const result = await client.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "user", content: "Say 'Hello from OpenAI'" }
      ],
      temperature: 0.2,
      max_tokens: 20,
    });
    
    const content = result?.choices?.[0]?.message?.content;
    res.json({ 
      success: true, 
      content,
      model: result?.model,
      usage: result?.usage
    });
  } catch (err) {
    res.json({ 
      success: false, 
      error: err.message || String(err),
      type: err.type,
      code: err.code,
      status: err.status
    });
  }
}
