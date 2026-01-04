// Small helper to shuffle arrays deterministically enough for variety
const shuffle = (arr) => arr.sort(() => Math.random() - 0.5);

// Easy generators: rotate through parts of speech, plurals, articles
const makeEasyItems = (n) => {
  const items = [];
  const bank = [
    {
      q: "Which word is a noun?",
      a: "Book",
      options: ["Book", "Run", "Slowly", "Blue"],
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
      q: "Which word is an adverb?",
      a: "Quickly",
      options: ["Quickly", "Quick", "Quicker", "Quickness"],
    },
    {
      q: "Choose the correct plural of 'cat'",
      a: "cats",
      options: ["cats", "cates", "catz", "catt"],
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
    {
      q: "Choose the correct article: ___ apple",
      a: "an",
      options: ["a", "an", "the", "no article"],
    },
  ];
  for (let i = 0; i < n; i++) {
    const base = bank[i % bank.length];
    // Clone to avoid mutating shared arrays
    items.push({ q: base.q, a: base.a, options: [...base.options] });
  }
  return shuffle(items);
};

// Medium generators: synonyms, antonyms, punctuation, spelling, homophones
const makeMediumItems = (n) => {
  const items = [];
  const bank = [
    {
      q: "Choose the correct synonym for 'happy'.",
      a: "Joyful",
      options: ["Joyful", "Sad", "Tired", "Angry"],
    },
    {
      q: "Choose the correct antonym for 'cold'.",
      a: "Hot",
      options: ["Hot", "Cool", "Warm", "Chilly"],
    },
    {
      q: "Which sentence uses correct punctuation?",
      a: "Where are you going?",
      options: ["Where are you going?", "Where are you going.", "Where are you going!", "Where are you going"],
    },
    {
      q: "Choose the correctly spelled word:",
      a: "Because",
      options: ["Because", "Becaus", "Beacause", "Becauss"],
    },
    {
      q: "Choose the correct homophone: I can hear/_____ you.",
      a: "hear",
      options: ["here", "hear", "hare", "hair"],
    },
    {
      q: "Choose the correct synonym for 'big'.",
      a: "Large",
      options: ["Large", "Small", "Tiny", "Little"],
    },
  ];
  for (let i = 0; i < n; i++) {
    const base = bank[i % bank.length];
    items.push({ q: base.q, a: base.a, options: [...base.options] });
  }
  return shuffle(items);
};

// Hard generators: tense, passive voice, figurative language, clauses
const makeHardItems = (n) => {
  const items = [];
  const bank = [
    {
      q: "Which sentence uses the past perfect tense?",
      a: "She had finished her work.",
      options: ["She finishes her work.", "She had finished her work.", "She will finish her work.", "She is finishing her work."],
    },
    {
      q: "Which sentence is written in passive voice?",
      a: "The cake was eaten by John.",
      options: ["John ate the cake.", "The cake was eaten by John.", "John is eating the cake.", "John will eat the cake."],
    },
    {
      q: "Which word is an abstract noun?",
      a: "Bravery",
      options: ["Chair", "Bravery", "Dog", "Tree"],
    },
    {
      q: "Identify the figure of speech: 'The world is a stage'.",
      a: "Metaphor",
      options: ["Metaphor", "Simile", "Hyperbole", "Irony"],
    },
    {
      q: "Choose the correct relative clause: The boy ___ won the race is my friend.",
      a: "who",
      options: ["who", "which", "whose", "whom"],
    },
  ];
  for (let i = 0; i < n; i++) {
    const base = bank[i % bank.length];
    items.push({ q: base.q, a: base.a, options: [...base.options] });
  }
  return shuffle(items);
};

const englishQuestions = {
  // ---------------------------------------------------------
  // KIDS MODE - LEVEL 1 — EASY (50 Questions)
  // ---------------------------------------------------------
  kids_level1: [
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
    ...makeEasyItems(45),
  ],

  // ---------------------------------------------------------
  // KIDS MODE - LEVEL 2 — MEDIUM (50 Questions)
  // ---------------------------------------------------------
  kids_level2: [
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
    ...makeMediumItems(45),
  ],

  // ---------------------------------------------------------
  // KIDS MODE - LEVEL 3 — HARD (50 Questions)
  // ---------------------------------------------------------
  kids_level3: [
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
    ...makeHardItems(45),
  ],

  // ---------------------------------------------------------
  // ADVANCED MODE - Same questions for now
  // ---------------------------------------------------------
  advanced_level1: [],
  advanced_level2: [],
  advanced_level3: [],
};

// For advanced mode, reuse the same questions for now
englishQuestions.advanced_level1 = englishQuestions.kids_level1;
englishQuestions.advanced_level2 = englishQuestions.kids_level2;
englishQuestions.advanced_level3 = englishQuestions.kids_level3;

export default englishQuestions;
