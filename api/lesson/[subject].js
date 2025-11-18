// api/lesson/[subject].js

export default async function handler(req, res) {
  const { subject } = req.query;

  // Age group like "5-7", "8-10", "11-14"
  const age = (req.query.age || "8-10").trim();
  const language = (req.query.lang || "en").trim().toLowerCase();

  // Map internal keys to friendly names + context
  const subjectMeta = {
    math: {
      title: "Mathematics",
      focus: "numbers, operations, problem solving, and real-life money or measurement examples.",
    },
    science: {
      title: "Science",
      focus:
        "plants, animals, the human body, and simple experiments children can imagine at home or school.",
    },
    biology: {
      title: "Biology",
      focus:
        "living things, cells, body systems, and health connections like nutrition, malaria, or hygiene.",
    },
    chemistry: {
      title: "Chemistry",
      focus:
        "everyday substances, water, air, simple reactions like rusting, boiling, and safe examples.",
    },
    geography: {
      title: "Geography",
      focus:
        "continents, countries, weather, and local environments like villages, cities, rivers, and farms.",
    },
    health: {
      title: "Health Education",
      focus:
        "nutrition, hygiene, exercise, mental health, disease prevention, and real public health messages.",
    },
    history: {
      title: "History",
      focus:
        "important events, heroes, and stories from Africa and the wider world that inspire children.",
    },
    computer: {
      title: "Computer Science",
      focus:
        "basic computer parts, safe internet use, and simple ideas like algorithms and coding blocks.",
    },
    english: {
      title: "English / Literacy",
      focus:
        "reading, writing, speaking clearly, understanding stories, and building strong vocabulary.",
    },
    africa: {
      title: "Africa",
      focus:
        "African geography, cultures, animals, and stories that help children feel proud of their continent.",
    },
    asia: { title: "Asia", focus: "countries, cultures, and environments in Asia." },
    europe: { title: "Europe", focus: "countries, history, and cultures in Europe." },
    northamerica: {
      title: "North America",
      focus: "geography, landmarks, and cultures in North America.",
    },
    southamerica: {
      title: "South America",
      focus: "rainforests, rivers, and cultures in South America.",
    },
    australia: {
      title: "Australia & Oceania",
      focus: "islands, oceans, and unique animals like kangaroos.",
    },
    antarctica: {
      title: "Antarctica",
      focus: "ice, climate, and animals like penguins and seals.",
    },
  };

  const meta = subjectMeta[subject] || {
    title: subject?.toString().toUpperCase() || "General Knowledge",
    focus:
      "basic ideas that help children understand the world in a simple, friendly way.",
  };

  const openaiKey = process.env.OPENAI_API_KEY;

  // Helper: simple age description for the prompt
  const ageDescription = (() => {
    if (age === "5-7") return "young children (about 5 to 7 years old, early primary school).";
    if (age === "8-10")
      return "children (about 8 to 10 years old, primary school, can read short paragraphs).";
    if (age === "11-14")
      return "older children (about 11 to 14 years, upper primary or junior secondary).";
    return "school children in primary or junior secondary school.";
  })();

  // If no API key, return a simple, static lesson so the app still works.
  if (!openaiKey) {
    const fallbackSteps = [
      `Welcome! Today we are learning about ${meta.title}.`,
      `This topic is important for ${ageDescription}`,
      `In simple words, ${meta.title} is about ${meta.focus}`,
      "Think about your own life or community. Where have you seen this topic before?",
      "Talk to a friend, parent, or teacher about one new thing you learned today.",
    ];
    return res.status(200).json({
      subject,
      age,
      language,
      steps: fallbackSteps,
      source: "fallback-static-lesson",
    });
  }

  // Build a strong prompt for the AI
  const systemMessage = `
You are "RoboTutor", a patient, friendly teacher creating mini-lessons for children.
You teach students in low-resource settings, including children in Africa and other developing regions.
You always use simple, clear language, and explain with everyday examples (water, food, school, village, church, mosque, local market, farm, etc).
You respect culture and avoid any unsafe or controversial content.
  `.trim();

  const userMessage = `
Create a short mini-lesson on the topic "${meta.title}" for ${ageDescription}

CONTEXT:
- Focus of the topic: ${meta.focus}
- Audience: children who may have limited internet, textbooks, or electricity.
- Many may be in Sierra Leone or West Africa, but the lesson should work for children in any developing country.
- Make the content encouraging and empowering.

REQUIREMENTS:
- Write the lesson as 5 to 8 simple steps.
- Each step should be 1–3 short sentences.
- Use simple, child-friendly language.
- Include at least:
  1. A "hook" or way to grab attention.
  2. A clear definition or main idea.
  3. One or two real-life examples from daily life.
  4. A quick activity or question for the learner.
  5. A short, positive encouragement at the end.

OUTPUT FORMAT (VERY IMPORTANT):
Respond ONLY with valid JSON, no extra text, in this exact shape:

{
  "steps": [
    "Step 1 sentence(s)...",
    "Step 2 sentence(s)...",
    "Step 3 sentence(s)..."
  ]
}

Language code to use: "${language}" (if you are not sure, default to very simple English).
  `.trim();

  try {
    const completionRes = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${openaiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        temperature: 0.7,
        messages: [
          { role: "system", content: systemMessage },
          { role: "user", content: userMessage },
        ],
      }),
    });

    if (!completionRes.ok) {
      console.error("OpenAI API error:", await completionRes.text());
      throw new Error("OpenAI request failed");
    }

    const completionJson = await completionRes.json();
    const content =
      completionJson.choices?.[0]?.message?.content?.trim() || "";

    let lesson;
    try {
      lesson = JSON.parse(content);
    } catch (parseErr) {
      console.error("Failed to parse JSON from OpenAI:", content);
      throw parseErr;
    }

    let steps = Array.isArray(lesson.steps) ? lesson.steps : [];

    // Safety net: ensure there is at least some content
    if (!steps.length) {
      steps = [
        `Welcome! Today we are learning about ${meta.title}.`,
        `${meta.title} is about ${meta.focus}`,
        "Think of one real-life example you can see around you.",
        "Share what you learned with a friend or family member.",
      ];
    }

    // Remove duplicates or empty steps
    const cleanedSteps = steps
      .map((s) => (s || "").toString().trim())
      .filter((s, idx, self) => s && idx === self.findIndex((x) => x === s));

    return res.status(200).json({
      subject,
      age,
      language,
      steps: cleanedSteps,
      source: "openai-gpt-4o-mini",
    });
  } catch (err) {
    console.error("Lesson engine error:", err);
    return res.status(200).json({
      subject,
      age,
      language,
      steps: [
        `We are learning about ${meta.title}.`,
        `${meta.title} is about ${meta.focus}`,
        "Sometimes the AI teacher cannot connect, but you can still review your notes or talk to a teacher or parent.",
      ],
      source: "error-fallback",
    });
  }
}
