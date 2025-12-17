const southAmericaQuestions = {
  // ---------------------------------------------------------
  // LEVEL 1 — EASY (50)
  // ---------------------------------------------------------
  level1: [
    {
      q: "What is the largest country in South America?",
      a: "Brazil",
      options: ["Brazil", "Argentina", "Chile", "Peru"],
    },
    {
      q: "Which river is the second longest in the world?",
      a: "Amazon River",
      options: ["Nile", "Amazon River", "Yangtze", "Mississippi"],
    },
    {
      q: "Which continent contains the Amazon rainforest?",
      a: "South America",
      options: ["Asia", "Africa", "South America", "Australia"],
    },
    {
      q: "Which country is famous for the Andes Mountains?",
      a: "Chile",
      options: ["Brazil", "Chile", "Paraguay", "Uruguay"],
    },
    {
      q: "Which country speaks Portuguese?",
      a: "Brazil",
      options: ["Brazil", "Argentina", "Chile", "Peru"],
    },

    // 45 easy filler
    ...Array.from({ length: 45 }, (_, i) => ({
      q: `South America Easy Question #${i + 6}: Which continent is Brazil in?`,
      a: "South America",
      options: ["South America", "Africa", "Asia", "Europe"],
    })),
  ],

  // ---------------------------------------------------------
  // LEVEL 2 — MEDIUM (50)
  // ---------------------------------------------------------
  level2: [
    {
      q: "What is the capital of Argentina?",
      a: "Buenos Aires",
      options: ["Buenos Aires", "Lima", "Santiago", "Bogotá"],
    },
    {
      q: "Which South American country is landlocked?",
      a: "Bolivia",
      options: ["Brazil", "Bolivia", "Peru", "Chile"],
    },
    {
      q: "Which ancient civilization built Machu Picchu?",
      a: "Inca",
      options: ["Aztec", "Inca", "Maya", "Olmec"],
    },
    {
      q: "Which desert is the driest in the world?",
      a: "Atacama Desert",
      options: ["Sahara", "Atacama Desert", "Gobi", "Kalahari"],
    },

    // 46 medium filler
    ...Array.from({ length: 46 }, (_, i) => ({
      q: `South America Medium #${i + 5}: Which region is common in South America?`,
      a: "Rainforest",
      options: ["Rainforest", "Tundra", "Savanna", "Desert"],
    })),
  ],

  // ---------------------------------------------------------
  // LEVEL 3 — HARD (50)
  // ---------------------------------------------------------
  level3: [
    {
      q: "Which empire was centered in Peru before Spanish colonization?",
      a: "Inca Empire",
      options: ["Aztec", "Inca Empire", "Maya", "Olmec"],
    },
    {
      q: "Which country has the world's largest oil reserves in South America?",
      a: "Venezuela",
      options: ["Brazil", "Argentina", "Venezuela", "Colombia"],
    },
    {
      q: "Which treaty divided South America between Spain and Portugal?",
      a: "Treaty of Tordesillas",
      options: [
        "Treaty of Paris",
        "Treaty of Tordesillas",
        "Treaty of Rome",
        "Treaty of Madrid",
      ],
    },

    // 47 hard filler
    ...Array.from({ length: 47 }, (_, i) => ({
      q: `South America Hard #${i + 4}: Which factor influenced South American history?`,
      a: "Colonization",
      options: ["Colonization", "Isolation", "Industrialization", "Nomadism"],
    })),
  ],
};

export default southAmericaQuestions;
