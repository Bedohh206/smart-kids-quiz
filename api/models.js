export default async function handler(req, res) {
  try {
    const r = await fetch("https://api.openai.com/v1/models", {
      headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}` },
    });
    const data = await r.json();
    const names = Array.isArray(data?.data) ? data.data.map(m => m.id) : [];
    const filtered = names.filter(n => /gpt|o4/i.test(n)).slice(0, 50);
    res.status(200).json({ count: names.length, models: filtered });
  } catch (e) {
    res.status(200).json({ count: 0, models: [], error: "fetch_failed" });
  }
}
