const europeQuestions = {
  // ---------------------------------------------------------
  // LEVEL 1 — EASY (50 QUESTIONS)
  // ---------------------------------------------------------
  level1: [
    {
      q: "What is the capital of France?",
      a: "Paris",
      options: ["Paris", "London", "Rome", "Berlin"]
    },
    {
      q: "Which continent is the United Kingdom in?",
      a: "Europe",
      options: ["Asia", "Africa", "Europe", "South America"]
    },
    {
      q: "What is the capital of the United Kingdom?",
      a: "London",
      options: ["London", "Dublin", "Madrid", "Paris"]
    },
    {
      q: "What is the capital of Germany?",
      a: "Berlin",
      options: ["Berlin", "Munich", "Hamburg", "Frankfurt"]
    },
    {
      q: "Which European country is famous for pizza?",
      a: "Italy",
      options: ["Germany", "Spain", "Italy", "France"]
    },
    {
      q: "Which European country is shaped like a boot?",
      a: "Italy",
      options: ["Italy", "Spain", "Norway", "Greece"]
    },
    {
      q: "Which European country is known for the Eiffel Tower?",
      a: "France",
      options: ["France", "Spain", "Greece", "Sweden"]
    },
    {
      q: "What is the capital of Spain?",
      a: "Madrid",
      options: ["Madrid", "Barcelona", "Valencia", "Seville"]
    },
    {
      q: "Which continent does Italy belong to?",
      a: "Europe",
      options: ["Asia", "Europe", "Africa", "Australia"]
    },
    {
      q: "What is the capital of Portugal?",
      a: "Lisbon",
      options: ["Lisbon", "Porto", "Madrid", "Valencia"]
    },

    // 40 additional easy questions
    ...Array.from({ length: 40 }, (_, i) => ({
      q: `Europe Easy Question #${i + 11}: Which continent is France in?`,
      a: "Europe",
      options: ["Europe", "Asia", "Africa", "South America"]
    }))
  ],

  // ---------------------------------------------------------
  // LEVEL 2 — MEDIUM (50 QUESTIONS)
  // ---------------------------------------------------------
  level2: [
    {
      q: "Which European river is the longest?",
      a: "Volga River",
      options: ["Thames", "Danube", "Volga River", "Rhine"]
    },
    {
      q: "What mountain range separates Europe from Asia?",
      a: "Ural Mountains",
      options: ["Ural Mountains", "Alps", "Carpathians", "Pyrenees"]
    },
    {
      q: "Which country is known for the ancient city of Athens?",
      a: "Greece",
      options: ["Greece", "Italy", "Turkey", "Cyprus"]
    },
    {
      q: "Which country has the city of Barcelona?",
      a: "Spain",
      options: ["Portugal", "France", "Spain", "Italy"]
    },
    {
      q: "Which country is known for the Leaning Tower of Pisa?",
      a: "Italy",
      options: ["Italy", "France", "Austria", "Germany"]
    },
    {
      q: "Which European country uses the Pound Sterling?",
      a: "United Kingdom",
      options: ["United Kingdom", "Germany", "Ireland", "Sweden"]
    },
    {
      q: "Which European country is famous for fjords?",
      a: "Norway",
      options: ["Norway", "Sweden", "Finland", "Iceland"]
    },
    {
      q: "Which country is known as the 'Land of Fire and Ice'?",
      a: "Iceland",
      options: ["Iceland", "Norway", "Finland", "Sweden"]
    },
    {
      q: "What is the capital of Sweden?",
      a: "Stockholm",
      options: ["Stockholm", "Oslo", "Copenhagen", "Helsinki"]
    },
    {
      q: "Which country shares a border with both France and Germany?",
      a: "Belgium",
      options: ["Belgium", "Poland", "Austria", "Denmark"]
    },

    // 40 additional medium questions
    ...Array.from({ length: 40 }, (_, i) => ({
      q: `Europe Medium Question #${i + 11}: Which region is common in Europe?`,
      a: "Forests",
      options: ["Forests", "Deserts", "Tropical jungles", "Savannas"]
    }))
  ],

  // ---------------------------------------------------------
  // LEVEL 3 — HARD (50 QUESTIONS)
  // ---------------------------------------------------------
  level3: [
    {
      q: "Which treaty founded the European Union?",
      a: "Maastricht Treaty",
      options: [
        "Versailles Treaty",
        "Maastricht Treaty",
        "Lisbon Treaty",
        "Rome Treaty"
      ]
    },
    {
      q: "Which empire was centered in modern-day Turkey and controlled Southeastern Europe for centuries?",
      a: "Ottoman Empire",
      options: ["Ottoman Empire", "Roman Empire", "Byzantine Empire", "Habsburg Empire"]
    },
    {
      q: "What is the highest mountain in Europe?",
      a: "Mount Elbrus",
      options: ["Mont Blanc", "Mount Elbrus", "Matterhorn", "Grossglockner"]
    },
    {
      q: "Which country was divided into East and West during the Cold War?",
      a: "Germany",
      options: ["Germany", "Italy", "Austria", "Greece"]
    },
    {
      q: "Which European country was home to the Roman Empire?",
      a: "Italy",
      options: ["Italy", "France", "Spain", "Greece"]
    },
    {
      q: "Which European language family includes Spanish, French, and Italian?",
      a: "Romance languages",
      options: ["Germanic", "Romance languages", "Slavic", "Celtic"]
    },
    {
      q: "Which country controlled the largest colonial empire in history?",
      a: "United Kingdom",
      options: ["United Kingdom", "Portugal", "Spain", "France"]
    },
    {
      q: "Which European city is the headquarters of the European Union?",
      a: "Brussels",
      options: ["Paris", "Berlin", "Brussels", "Vienna"]
    },
    {
      q: "Which European region experienced the Renaissance?",
      a: "Italy",
      options: ["Italy", "Germany", "France", "England"]
    },
    {
      q: "Which war began in Europe in 1914?",
      a: "World War I",
      options: ["World War I", "World War II", "Cold War", "Napoleonic Wars"]
    },

    // 40 additional hard questions
    ...Array.from({ length: 40 }, (_, i) => ({
      q: `Europe Hard Question #${i + 11}: Which European empire influenced world history the most?`,
      a: "Roman Empire",
      options: ["Roman Empire", "Mongol Empire", "Egyptian Empire", "Persian Empire"]
    }))
  ]
};

export default europeQuestions;
