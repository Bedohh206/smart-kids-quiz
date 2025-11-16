const northAmericaQuestions = {
  // ---------------------------------------------------------
  // LEVEL 1 — EASY (50)
  // ---------------------------------------------------------
  level1: [
    {
      q: "What is the capital of the United States?",
      a: "Washington, D.C.",
      options: ["New York", "Washington, D.C.", "Los Angeles", "Chicago"],
    },
    {
      q: "Which country is the largest in North America?",
      a: "Canada",
      options: ["Canada", "USA", "Mexico", "Cuba"],
    },
    {
      q: "Which country is south of the United States?",
      a: "Mexico",
      options: ["Canada", "Cuba", "Mexico", "Brazil"],
    },
    {
      q: "What is the capital of Mexico?",
      a: "Mexico City",
      options: ["Cancun", "Guadalajara", "Mexico City", "Monterrey"],
    },
    {
      q: "What is the capital of Canada?",
      a: "Ottawa",
      options: ["Toronto", "Ottawa", "Vancouver", "Montreal"],
    },
    {
      q: "Which North American country is famous for Hollywood?",
      a: "United States",
      options: ["Canada", "USA", "Mexico", "Jamaica"],
    },
    {
      q: "Which large river flows through the US?",
      a: "Mississippi River",
      options: [
        "Amazon River",
        "Nile River",
        "Mississippi River",
        "Yangtze River",
      ],
    },
    {
      q: "Which country has the Rocky Mountains?",
      a: "Canada and USA",
      options: ["USA only", "Canada only", "Canada and USA", "Mexico"],
    },
    {
      q: "Which island is part of the Caribbean?",
      a: "Jamaica",
      options: ["Japan", "Iceland", "Jamaica", "Cuba"],
    },
    {
      q: "Which ocean is on the east coast of North America?",
      a: "Atlantic Ocean",
      options: [
        "Indian Ocean",
        "Pacific Ocean",
        "Arctic Ocean",
        "Atlantic Ocean",
      ],
    },

    // 40 easy filler questions
    ...Array.from({ length: 40 }, (_, i) => ({
      q: `North America Easy Question #${i + 11}: Which continent is the USA located in?`,
      a: "North America",
      options: ["North America", "Africa", "Europe", "Asia"],
    })),
  ],

  // ---------------------------------------------------------
  // LEVEL 2 — MEDIUM (50)
  // ---------------------------------------------------------
  level2: [
    {
      q: "Which US state is known as the Sunshine State?",
      a: "Florida",
      options: ["Texas", "California", "Florida", "Georgia"],
    },
    {
      q: "What is the largest city in Canada?",
      a: "Toronto",
      options: ["Toronto", "Ottawa", "Vancouver", "Montreal"],
    },
    {
      q: "Which mountain is the highest in North America?",
      a: "Denali",
      options: ["Denali", "Mt. Logan", "Mt. Whitney", "Mt. Fairweather"],
    },
    {
      q: "What is the desert found in the southwestern US?",
      a: "Mojave Desert",
      options: [
        "Gobi Desert",
        "Sahara Desert",
        "Mojave Desert",
        "Atacama Desert",
      ],
    },
    {
      q: "Which country is known for maple syrup?",
      a: "Canada",
      options: ["USA", "Mexico", "Canada", "Cuba"],
    },
    {
      q: "Which island group includes the Bahamas?",
      a: "Caribbean",
      options: ["Mediterranean", "Caribbean", "Pacific Islands", "Arctic"],
    },
    {
      q: "Which gulf lies south of the USA?",
      a: "Gulf of Mexico",
      options: [
        "Persian Gulf",
        "Gulf of Mexico",
        "Gulf of Aden",
        "Gulf of Alaska",
      ],
    },
    {
      q: "What is the largest lake in North America?",
      a: "Lake Superior",
      options: ["Lake Superior", "Lake Michigan", "Lake Erie", "Lake Tahoe"],
    },
    {
      q: "What is the capital of Cuba?",
      a: "Havana",
      options: ["Havana", "Santiago", "Kingston", "San Juan"],
    },
    {
      q: "Which US state borders only one other state?",
      a: "Maine",
      options: ["Maine", "Florida", "Texas", "Washington"],
    },

    // 40 medium filler
    ...Array.from({ length: 40 }, (_, i) => ({
      q: `North America Medium Question #${i + 11}: Which major region is found here?`,
      a: "Forests",
      options: ["Forests", "Tundra", "Savanna", "Desert"],
    })),
  ],

  // ---------------------------------------------------------
  // LEVEL 3 — HARD (50)
  // ---------------------------------------------------------
  level3: [
    {
      q: "Which Native American civilization built Chichen Itza?",
      a: "Maya",
      options: ["Aztec", "Inca", "Maya", "Olmec"],
    },
    {
      q: "Which war was fought between the North and South regions of the United States?",
      a: "Civil War",
      options: ["Civil War", "World War I", "Cold War", "War of 1812"],
    },
    {
      q: "What is the oldest city in North America?",
      a: "St. Augustine",
      options: ["Quebec City", "New York", "St. Augustine", "Boston"],
    },
    {
      q: "Which European country colonized Mexico?",
      a: "Spain",
      options: ["France", "Portugal", "Spain", "England"],
    },
    {
      q: "Which US president issued the Emancipation Proclamation?",
      a: "Abraham Lincoln",
      options: [
        "George Washington",
        "Abraham Lincoln",
        "John Adams",
        "Theodore Roosevelt",
      ],
    },
    {
      q: "Which ancient civilization is known for its pyramids in Mexico?",
      a: "Aztec",
      options: ["Aztec", "Maya", "Olmec", "Inca"],
    },

    // 44 hard filler
    ...Array.from({ length: 44 }, (_, i) => ({
      q: `North America Hard Question #${i + 7}: Which factor shaped North American history?`,
      a: "Colonization",
      options: ["Colonization", "Isolation", "Feudalism", "Nomadism"],
    })),
  ],
};

export default northAmericaQuestions;
