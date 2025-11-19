export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { text, targetLang } = req.body;

  if (!text || !targetLang) {
    return res.status(400).json({ error: "Missing fields" });
  }

  // TEMP fake translation — prevents crash
  const translated = text;

  res.status(200).json({ translated });
}
