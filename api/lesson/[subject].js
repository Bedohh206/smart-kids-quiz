export default function handler(req, res) {
  const { subject } = req.query;

  const lessons = {
    math: "Math is the study of numbers, shapes, and logic!",
    english: "English helps us read, write, and communicate clearly.",
    science: "Science teaches us about the natural world.",
    chemistry: "Chemistry studies matter and how substances change.",
    health: "Health education helps us take care of our bodies.",
    computer: "Computer Science is about programming and technology!"
  };

  const content = lessons[subject] || "No lesson available.";

  res.status(200).json({ subject, content });
}
