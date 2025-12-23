import OpenAI from "openai";

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    // Parse body - Vercel handles JSON automatically
    const { topic = "Test", age = 8, language = 'English', mode = 'ai' } = req.body || {};
    
    // Build prompt
    const prompt = `You are an AI teacher for kids.\n\nCreate EXACTLY 4 short lesson steps.\n\nTopic: ${topic}\nAge: ${age}\nLanguage: ${language}\n\nFORMAT RULES (VERY IMPORTANT):\n- Return ONLY plain text\n- Separate each step with: ||\n- Example:\nStep 1 || Step 2 || Step 3 || Step 4\n- NO markdown\n- NO JSON\n- NO explanations`;
    
    // Call OpenAI
    const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    const result = await client.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You format lessons for kids exactly as instructed." },
        { role: "user", content: prompt }
      ],
      temperature: 0.2,
      max_tokens: 256,
    });
    
    const text = result?.choices?.[0]?.message?.content?.trim();
    const steps = text ? text.split('||').map(s => s.trim()).filter(Boolean) : [];
    
    res.json({ 
      success: true,
      receivedBody: req.body,
      rawResponse: text,
      parsedSteps: steps,
      stepCount: steps.length
    });
  } catch (err) {
    res.json({ 
      success: false, 
      error: err.message,
      stack: err.stack
    });
  }
}
