// api/generate-question.js

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST allowed" });
  }

  let body = req.body;
  if (typeof body === "string") {
    try {
      body = JSON.parse(body);
    } catch {
      body = {};
    }
  }

  const subject = (body.subject || "general").toString().toLowerCase().trim();
  const level = (body.level || "easy").toString().toLowerCase().trim();
  const age = (body.age || "8-10").toString().trim();
  const language = (body.language || "en").toString().toLowerCase().trim();
  const numQuestions = Math.min(Math.max(parseInt(body.numQuestions || 20, 10), 5), 50); // 5–50

  const openaiKey = process.env.OPENAI_API_KEY;

  // Friendly metadata for more grounded questions
  const subjectMeta = {
    math: {
      title: "Mathematics",
      focus:
        "numbers, operations, word problems with money, time, and simple measurements that relate to everyday life in villages, towns, and cities.",
    },
    science: {
      title: "Science",
      focus:
        "plants, animals, weather, forces, and simple experiments children can imagine doing at home or school.",
    },
    biology: {
      title: "Biology",
      focus:
        "living things, the human body, diseases like malaria, nutrition, and healthy behaviors.",
    },
    chemistry: {
      title: "Chemistry",
      focus:
        "everyday substances like water, salt, smoke, and basic changes such as boiling, melting, burning, and rusting.",
    },
    geography: {
      title: "Geography",
      focus:
        "continents, countries, rivers, climate, and local environments such as farms, markets, villages, and cities.",
    },
    health: {
      title: "Health Education",
      focus:
        "hygiene, handwashing, safe water, nutrition, mental health, and public health messages for communities.",
    },
    history: {
      title: "History",
      focus:
        "important events and heroes from Africa and the world that inspire children and teach lessons.",
    },
    computer: {
      title: "Computer Science",
      focus:
        "basic computer parts, safe internet use, and simple thinking like algorithms and step-by-step instructions.",
    },
    english: {
      title: "English / Literacy",
      focus:
        "reading comprehension, vocabulary, simple grammar, and understanding short stories.",
    },
    africa: {
      title: "Africa",
      focus:
        "African geography, cultures, languages, and famous landmarks and people.",
    },
    asia: { title: "Asia", focus: "countries, cultures, and landscapes in Asia." },
    europe: { title: "Europe", focus: "countries, history, and landmarks in Europe." },
    northamerica: {
      title: "North America",
      focus: "countries, landmarks, climates, and cultures.",
    },
    southamerica: {
      title: "South America",
      focus: "forests, rivers like the Amazon, and local cultures.",
    },
    australia: {
      title: "Australia & Oceania",
      focus: "islands, oceans, and special animals like kangaroos and koalas.",
    },
    antarctica: {
      title: "Antarctica",
      focus: "ice, climate change in simple terms, penguins, and scientists.",
    },
  };

  const meta = subjectMeta[subject] || {
    title: subject.toUpperCase(),
    focus:
      "basic general knowledge that helps children better understand their world in simple terms.",
  };

  // Difficulty description for the AI
  const levelDescription = (() => {
    if (level === "easy") {
      return "very simple recall questions with one concept each, using short, clear sentences.";
    }
    if (level === "medium") {
      return "questions that may require one or two steps of thinking or combining two ideas.";
    }
    if (level === "hard") {
      return "more challenging questions that ask learners to apply, compare, or explain ideas, but still in age-appropriate language.";
    }
    return "a mix of easy and medium questions that are clear for children.";
  })();

  const ageDescription = (() => {
    if (age === "5-7") return "young children aged about 5 to 7 years, early primary school.";
    if (age === "8-10")
      return "children aged about 8 to 10 years, primary school who can read short paragraphs.";
    if (age === "11-14")
      return "older children aged about 11 to 14 years, upper primary or junior secondary.";
    return "school-aged children in primary or junior secondary school.";
  })();

  // Helper to dedupe questions by text
  const dedupeQuestions = (questions) => {
    if (!Array.isArray(questions)) return [];
    return questions.filter(
      (q, idx, self) =>
        q &&
        q.q &&
        idx ===
          self.findIndex(
            (x) => x.q.toLowerCase().trim() === q.q.toLowerCase().trim()
          )
    );
  };

  // If no OpenAI key: return a small static set so the feature still works
  if (!openaiKey) {
    const fallback = [
      {
        q: `What is one important thing you learned in ${meta.title} recently?`,
        a: "Answers will vary.",
        options: [
          "Answers will vary.",
          "There is only one correct opinion.",
          "You cannot learn without internet.",
          "Only adults can learn.",
        ],
        age,
        level,
      },
      {
        q: `Why is ${meta.title} useful in real life?`,
        a: "It helps us understand and solve real-life problems.",
        options: [
          "It helps us understand and solve real-life problems.",
          "It is not useful at all.",
          "Only scientists need it.",
          "It is only for exams.",
        ],
        age,
        level,
      },
    ];
    return res.status(200).json({
      subject,
      age,
      level,
      language,
      questions: fallback,
      source: "fallback-static",
    });
  }

  // Build OpenAI prompt
  const systemMessage = `
You are "RoboTutor", an AI teacher creating multiple-choice quiz questions for children.
Your learners often live in low-resource settings (e.g., Sierra Leone, other African or developing countries).
You must:
- Use simple, clear language.
- Use everyday examples (home, school, village, town, farm, market, church, mosque, river, etc.).
- Avoid unsafe, graphic, or inappropriate topics.
- Focus on correct, up-to-date, scientifically accurate information.
  `.trim();

  const userMessage = `
Create ${numQuestions} UNIQUE multiple-choice questions for the subject "${meta.title}".

CONTEXT:
- Focus of the subject: ${meta.focus}
- Age group: ${ageDescription}
- Difficulty level: ${levelDescription}
- Region: Many learners are in West Africa (including Sierra Leone), but questions should work for any child in a developing country.
- Avoid repeating the same fact with slightly different wording. Each question should test a different idea or angle.

QUESTION REQUIREMENTS:
- Each question must have:
  - "q": the question text.
  - "a": the single correct answer (must exactly match one of the options).
  - "options": an array of 4 options (strings), including the correct one.
- Use friendly, simple language appropriate for the age group.
- Avoid trick questions or very confusing wording.
- Do NOT include references to the exam, AI, or that the question was generated.
- Focus on knowledge that is broadly true and not country-specific law or politics.

DIVERSITY:
- Do not repeat the same question text.
- Avoid repeating the same exact fact (like "a baby frog is called a tadpole") more than once.
- For biology/health, include some items that relate to hygiene, nutrition, and common illnesses (in age-appropriate ways).
- For geography, mix continents, countries, climate, and local environment.
- For math, include simple word problems that connect to real life (money, water, distance, time).

OUTPUT FORMAT (VERY IMPORTANT):
Return ONLY valid JSON in this shape, no extra text:

{
  "questions": [
    {
      "q": "Question text here",
      "a": "Correct answer here",
      "options": ["Option 1", "Option 2", "Option 3", "Option 4"],
      "age": "8-10",
      "level": "easy"
    }
  ]
}

- "age" should match "${age}".
- "level" should match "${level}".
- All questions.q must be unique.
- "a" must be one of the "options".
Language for the content: "${language}" (if unsure, use very simple English).
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
        temperature: 0.8,
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

    let parsed;
    try {
      parsed = JSON.parse(content);
    } catch (err) {
      console.error("Failed to parse JSON from OpenAI:", content);
      throw err;
    }

    let questions = Array.isArray(parsed.questions) ? parsed.questions : [];

    // Basic cleaning & validation
    questions = questions
      .map((q) => ({
        q: (q.q || "").toString().trim(),
        a: (q.a || "").toString().trim(),
        options: Array.isArray(q.options)
          ? q.options.map((o) => (o || "").toString().trim())
          : [],
        age: q.age || age,
        level: q.level || level,
      }))
      .filter(
        (q) =>
          q.q &&
          q.a &&
          q.options.length === 4 &&
          q.options.includes(q.a)
      );

    questions = dedupeQuestions(questions);

    // If we lost too many, keep at least a few
    if (!questions.length) {
      questions = [
        {
          q: `What is one important idea from ${meta.title}?`,
          a: "It helps us understand the world better.",
          options: [
            "It helps us understand the world better.",
            "It is not useful at all.",
            "Only adults need it.",
            "It is only for exams.",
          ],
          age,
          level,
        },
      ];
    }

    return res.status(200).json({
      subject,
      age,
      level,
      language,
      questions,
      source: "openai-gpt-4o-mini",
    });
  } catch (err) {
    console.error("Question generator error:", err);

    return res.status(200).json({
      subject,
      age,
      level,
      language,
      questions: [
        {
          q: `Sometimes the quiz cannot load new questions. What can you still do?`,
          a: "Review old questions and discuss with a friend, teacher, or parent.",
          options: [
            "Review old questions and discuss with a friend, teacher, or parent.",
            "Stop learning completely.",
            "Believe that learning only works with internet.",
            "Never ask questions again.",
          ],
          age,
          level,
        },
      ],
      source: "error-fallback",
    });
  }
}
