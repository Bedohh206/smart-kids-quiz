export default async function handler(req, res) {
  try {
    const key = process.env.OPENAI_API_KEY;
    if (!key) {
      res.status(200).json({ ok: false, reason: "missing_key" });
      return;
    }
    const r = await fetch("https://api.openai.com/v1/models", {
      headers: { Authorization: `Bearer ${key}` },
    });
    if (!r.ok) {
      res.status(200).json({ ok: false, status: r.status, reason: "invalid_or_unauthorized" });
      return;
    }
    res.status(200).json({ ok: true });
  } catch (e) {
    res.status(200).json({ ok: false, reason: "network_error" });
  }
}
