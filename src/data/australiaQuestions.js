const australiaQuestions = {
  // ---------------------------------------------------------
  // LEVEL 1 — EASY (50)
  // ---------------------------------------------------------
  level1: [
    {
      q: "What is the largest country in Oceania?",
      a: "Australia",
      options: ["Australia", "New Zealand", "Fiji", "Papua New Guinea"],
    },
    {
      q: "Which animal is famous in Australia?",
      a: "Kangaroo",
      options: ["Lion", "Kangaroo", "Elephant", "Bear"],
    },
    {
      q: "Which Australian city has the Opera House?",
      a: "Sydney",
      options: ["Sydney", "Melbourne", "Perth", "Brisbane"],
    },

    // 47 easy filler
    ...Array.from({ length: 47 }, (_, i) => ({
      q: `Australia Easy #${i + 4}: Which continent is Australia in?`,
      a: "Australia",
      options: ["Australia", "Asia", "Africa", "Europe"],
    })),
  ],

  // ---------------------------------------------------------
  // LEVEL 2 — MEDIUM (50)
  // ---------------------------------------------------------
  level2: [
    {
      q: "What is the capital of Australia?",
      a: "Canberra",
      options: ["Sydney", "Canberra", "Melbourne", "Adelaide"],
    },
    {
      q: "What is the largest coral reef system in the world?",
      a: "Great Barrier Reef",
      options: ["Red Sea Reef", "Great Barrier Reef", "Fiji Reef", "Caribbean Reef"],
    },

    // 48 medium filler
    ...Array.from({ length: 48 }, (_, i) => ({
      q: `Australia Medium #${i + 3}: What region is common in Australia?`,
      a: "Deserts",
      options: ["Deserts", "Rainforest", "Tundra", "Ice fields"],
    })),
  ],

  // ---------------------------------------------------------
  // LEVEL 3 — HARD (50)
  // ---------------------------------------------------------
  level3: [
    {
      q: "Which indigenous group are the first known people of Australia?",
      a: "Aboriginal Australians",
      options: [
        "Maori",
        "Aboriginal Australians",
        "Samoans",
        "Torres Strait Islanders",
      ],
    },
    {
      q: "Which explorer claimed Australia for Britain in 1770?",
      a: "James Cook",
      options: [
        "James Cook",
        "Ferdinand Magellan",
        "Marco Polo",
        "Roald Amundsen",
      ],
    },

    // 48 hard filler
    ...Array.from({ length: 48 }, (_, i) => ({
      q: `Australia Hard #${i + 3}: Which factor influenced Oceania history?`,
      a: "Colonization",
      options: ["Colonization", "Isolation", "Nomadism", "Industrialization"],
    })),
  ],
};

export default australiaQuestions;
