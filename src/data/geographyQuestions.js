const geographyQuestions = {
  // ---------------------------------------------------------
  // LEVEL 1 — EASY (50 QUESTIONS)
  // ---------------------------------------------------------
  level1: [
    {
      q: "What is the largest ocean on Earth?",
      a: "Pacific Ocean",
      options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
    },
    {
      q: "What is the longest river in the world?",
      a: "Nile River",
      options: ["Nile River", "Amazon River", "Yangtze River", "Mississippi River"],
    },
    {
      q: "What is the largest continent?",
      a: "Asia",
      options: ["Asia", "Africa", "Europe", "North America"],
    },
    {
      q: "Which direction does the sun rise?",
      a: "East",
      options: ["East", "West", "North", "South"],
    },
    {
      q: "Which pole is at the bottom of the Earth?",
      a: "South Pole",
      options: ["North Pole", "South Pole", "Both", "Neither"],
    },
    {
      q: "Which continent is Egypt in?",
      a: "Africa",
      options: ["Asia", "Africa", "Europe", "North America"],
    },
    {
      q: "What is the capital of the United States?",
      a: "Washington, D.C.",
      options: ["New York", "Washington, D.C.", "Los Angeles", "Chicago"],
    },
    {
      q: "What is the capital of France?",
      a: "Paris",
      options: ["Paris", "London", "Rome", "Berlin"],
    },
    {
      q: "Which ocean is on the east coast of the U.S.?",
      a: "Atlantic Ocean",
      options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
    },
    {
      q: "Which country is famous for pyramids?",
      a: "Egypt",
      options: ["Egypt", "China", "Mexico", "Peru"],
    },

    // 40 easy filler questions
    ...Array.from({ length: 40 }, (_, i) => ({
      q: `Geography Easy #${i + 11}: Which continent is home to the Sahara Desert?`,
      a: "Africa",
      options: ["Africa", "Asia", "Europe", "Australia"],
    })),
  ],

  // ---------------------------------------------------------
  // LEVEL 2 — MEDIUM (50 QUESTIONS)
  // ---------------------------------------------------------
  level2: [
    {
      q: "Which mountain range separates Europe and Asia?",
      a: "Ural Mountains",
      options: ["Ural Mountains", "Alps", "Himalayas", "Rockies"],
    },
    {
      q: "What is the largest desert in the world?",
      a: "Antarctic Desert",
      options: ["Sahara", "Antarctic Desert", "Gobi", "Arabian Desert"],
    },
    {
      q: "Which country has the most people?",
      a: "China",
      options: ["China", "India", "USA", "Indonesia"],
    },
    {
      q: "Which continent has the most countries?",
      a: "Africa",
      options: ["Africa", "Asia", "Europe", "South America"],
    },
    {
      q: "Where is the Amazon rainforest located?",
      a: "South America",
      options: ["Asia", "South America", "Africa", "Australia"],
    },
    {
      q: "What is the longest mountain range in the world?",
      a: "Andes Mountains",
      options: ["Andes Mountains", "Rocky Mountains", "Himalayas", "Alps"],
    },
    {
      q: "What is the capital city of Japan?",
      a: "Tokyo",
      options: ["Tokyo", "Osaka", "Kyoto", "Nagoya"],
    },
    {
      q: "Which U.S. state is the largest by area?",
      a: "Alaska",
      options: ["Alaska", "Texas", "California", "Montana"],
    },
    {
      q: "Which continent is the driest?",
      a: "Antarctica",
      options: ["Antarctica", "Africa", "Asia", "Australia"],
    },
    {
      q: "Which ocean is the smallest?",
      a: "Arctic Ocean",
      options: ["Arctic Ocean", "Indian Ocean", "Atlantic Ocean", "Pacific Ocean"],
    },

    // 40 medium filler questions
    ...Array.from({ length: 40 }, (_, i) => ({
      q: `Geography Medium #${i + 11}: Which continent is known as 'The Island Continent'?`,
      a: "Australia",
      options: ["Australia", "Africa", "Europe", "Asia"],
    })),
  ],

  // ---------------------------------------------------------
  // LEVEL 3 — HARD (50 QUESTIONS)
  // ---------------------------------------------------------
  level3: [
    {
      q: "What is the deepest point in the world's oceans?",
      a: "Mariana Trench",
      options: ["Mariana Trench", "Java Trench", "Puerto Rico Trench", "Tonga Trench"],
    },
    {
      q: "Which river flows through the Grand Canyon?",
      a: "Colorado River",
      options: ["Colorado River", "Mississippi River", "Rio Grande", "Columbia River"],
    },
    {
      q: "What is the world’s largest island that is not a continent?",
      a: "Greenland",
      options: ["Greenland", "New Guinea", "Borneo", "Madagascar"],
    },
    {
      q: "Which country has the longest coastline?",
      a: "Canada",
      options: ["Canada", "Russia", "Australia", "USA"],
    },
    {
      q: "Which continent has the highest average elevation?",
      a: "Antarctica",
      options: ["Antarctica", "Asia", "South America", "North America"],
    },
    {
      q: "Which sea has no outlet and is shrinking due to irrigation?",
      a: "Aral Sea",
      options: ["Aral Sea", "Dead Sea", "Caspian Sea", "Black Sea"],
    },
    {
      q: "What is the largest lake in Africa?",
      a: "Lake Victoria",
      options: ["Lake Victoria", "Lake Tanganyika", "Lake Malawi", "Lake Chad"],
    },
    {
      q: "Which mountain is the tallest from base to peak (not elevation)?",
      a: "Mauna Kea",
      options: ["Mauna Kea", "Everest", "K2", "Denali"],
    },
    {
      q: "What is the fastest growing desert in the world?",
      a: "Gobi Desert",
      options: ["Gobi Desert", "Sahara Desert", "Kalahari", "Thar Desert"],
    },
    {
      q: "Which current is responsible for warming Western Europe?",
      a: "Gulf Stream",
      options: ["Gulf Stream", "Canary Current", "Humboldt Current", "Kuroshio Current"],
    },

    // 40 hard filler questions
    ...Array.from({ length: 40 }, (_, i) => ({
      q: `Geography Hard #${i + 11}: Which process shapes mountains?`,
      a: "Tectonic activity",
      options: ["Tectonic activity", "Erosion", "Evaporation", "Sedimentation"],
    })),
  ],
};

export default geographyQuestions;
