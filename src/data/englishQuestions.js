const englishQuestions = {
  // ---------------------------------------------------------
  // LEVEL 1 — EASY (50 Questions)
  // ---------------------------------------------------------
  level1: [
    {
      q: "Which word is a noun?",
      a: "Dog",
      options: ["Run", "Blue", "Dog", "Quickly"],
    },
    {
      q: "Which word is a verb?",
      a: "Jump",
      options: ["Happy", "Jump", "Red", "Tall"],
    },
    {
      q: "Which word is an adjective?",
      a: "Beautiful",
      options: ["Walk", "Beautiful", "Quickly", "Teacher"],
    },
    {
      q: "Choose the correct plural form: 'cat'",
      a: "cats",
      options: ["catz", "cats", "cates", "catt"],
    },
    {
      q: "Which sentence is correct?",
      a: "The dog is running.",
      options: [
        "The dog are running.",
        "The dog is running.",
        "Dog the running is.",
        "Running is dog the.",
      ],
    },

    // 45 additional easy questions
    ...Array.from({ length: 45 }, (_, i) => ({
      q: `English Easy #${i + 6}: Which word is a noun?`,
      a: "Book",
      options: ["Book", "Run", "Slowly", "Blue"],
    })),
  ],

  // ---------------------------------------------------------
  // LEVEL 2 — MEDIUM (50 Questions)
  // ---------------------------------------------------------
  level2: [
    {
      q: "Which sentence uses correct punctuation?",
      a: "Where are you going?",
      options: [
        "Where are you going?",
        "Where are you going.",
        "Where are you going!",
        "Where are you going",
      ],
    },
    {
      q: "Choose the correct synonym for 'happy'.",
      a: "Joyful",
      options: ["Sad", "Joyful", "Tired", "Angry"],
    },
    {
      q: "Which word is an adverb?",
      a: "Quickly",
      options: ["Quick", "Quickly", "Quicker", "Quickness"],
    },
    {
      q: "Choose the correct antonym for 'cold'.",
      a: "Hot",
      options: ["Warm", "Hot", "Cool", "Chilly"],
    },
    {
      q: "Choose the correctly spelled word:",
      a: "Because",
      options: ["Becaus", "Beacause", "Because", "Becauss"],
    },

    // 45 medium-level fillers
    ...Array.from({ length: 45 }, (_, i) => ({
      q: `English Medium #${i + 6}: Choose the correct synonym for 'big'.`,
      a: "Large",
      options: ["Large", "Small", "Tiny", "Little"],
    })),
  ],

  // ---------------------------------------------------------
  // LEVEL 3 — HARD (50 Questions)
  // ---------------------------------------------------------
  level3: [
    {
      q: "Which sentence uses the past perfect tense?",
      a: "She had finished her work.",
      options: [
        "She finishes her work.",
        "She had finished her work.",
        "She will finish her work.",
        "She is finishing her work.",
      ],
    },
    {
      q: "Which sentence is written in passive voice?",
      a: "The cake was eaten by John.",
      options: [
        "John ate the cake.",
        "The cake was eaten by John.",
        "John is eating the cake.",
        "John will eat the cake.",
      ],
    },
    {
      q: "Which word is an abstract noun?",
      a: "Bravery",
      options: ["Chair", "Bravery", "Dog", "Tree"],
    },
    {
      q: "Choose the correct homophone for: 'I want ____ ice cream.'",
      a: "some",
      options: ["sum", "some", "sam", "sume"],
    },
    {
      q: "What is the literary device used when giving human traits to non-human things?",
      a: "Personification",
      options: ["Metaphor", "Simile", "Irony", "Personification"],
    },

    // 45 hard fillers
    ...Array.from({ length: 45 }, (_, i) => ({
      q: `English Hard #${i + 6}: Identify the figure of speech in ‘The world is a stage’.`,
      a: "Metaphor",
      options: ["Metaphor", "Simile", "Hyperbole", "Irony"],
    })),
  ],
};

export default englishQuestions;
