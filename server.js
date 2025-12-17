import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import OpenAI from "openai";

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;
const apiKey = process.env.OPENAI_API_KEY;

if (!apiKey) {
  console.error("❌ Missing OpenAI API key. Please add it to your .env file.");
  process.exit(1);
}

console.log("🔑 API key loaded successfully!");

const openai = new OpenAI({ apiKey });

// ✅ Simple test route
app.get("/", (req, res) => {
  res.send("✅ Smart Kids Quiz API is running and your OpenAI key is loaded!");
});

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
