const antarcticaQuestions = {
  // ---------------------------------------------------------
  // LEVEL 1 — EASY (50)
  // ---------------------------------------------------------
  level1: [
    {
      q: "What is the coldest continent?",
      a: "Antarctica",
      options: ["Asia", "Antarctica", "Europe", "Africa"],
    },
    {
      q: "What animal lives in Antarctica?",
      a: "Penguin",
      options: ["Lion", "Tiger", "Penguin", "Camel"],
    },
    {
      q: "What is Antarctica mostly covered in?",
      a: "Ice",
      options: ["Sand", "Ice", "Grass", "Forest"],
    },

    // 47 easy filler
    ...Array.from({ length: 47 }, (_, i) => ({
      q: `Antarctica Easy #${i + 4}: What is found most in Antarctica?`,
      a: "Ice",
      options: ["Ice", "Desert", "Forest", "Mountains"],
    })),
  ],

  // ---------------------------------------------------------
  // LEVEL 2 — MEDIUM (50)
  // ---------------------------------------------------------
  level2: [
    {
      q: "Which ocean surrounds Antarctica?",
      a: "Southern Ocean",
      options: ["Atlantic", "Pacific", "Indian", "Southern Ocean"],
    },
    {
      q: "What is the largest iceberg-producing area in Antarctica?",
      a: "Ross Ice Shelf",
      options: [
        "Ross Ice Shelf",
        "Amery Ice Shelf",
        "Larsen Ice Shelf",
        "Filchner Ice Shelf",
      ],
    },

    // 48 medium filler
    ...Array.from({ length: 48 }, (_, i) => ({
      q: `Antarctica Medium #${i + 3}: What climate is found in Antarctica?`,
      a: "Polar",
      options: ["Polar", "Tropical", "Arid", "Mediterranean"],
    })),
  ],

  // ---------------------------------------------------------
  // LEVEL 3 — HARD (50)
  // ---------------------------------------------------------
  level3: [
    {
      q: "Which treaty reserves Antarctica for peace and science?",
      a: "Antarctic Treaty",
      options: [
        "Antarctic Treaty",
        "Paris Agreement",
        "Kyoto Protocol",
        "Oslo Treaty",
      ],
    },
    {
      q: "Which explorers led the first expedition to the South Pole?",
      a: "Roald Amundsen",
      options: [
        "Roald Amundsen",
        "Ernest Shackleton",
        "Robert Scott",
        "James Cook",
      ],
    },

    // 48 hard filler
    ...Array.from({ length: 48 }, (_, i) => ({
      q: `Antarctica Hard #${i + 3}: What factor impacts polar exploration the most?`,
      a: "Extreme cold",
      options: ["Extreme cold", "Rainfall", "Forests", "Monsoons"],
    })),
  ],
};

export default antarcticaQuestions;
