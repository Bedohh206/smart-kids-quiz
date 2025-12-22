export default function handler(req, res) {
  const raw = process.env.OPENAI_API_KEY || "";
  const hasKey = !!raw;
  const masked = hasKey ? `${raw.slice(0, 7)}…${raw.slice(-4)}` : "<missing>";
  res.status(200).json({ hasKey, masked });
}
