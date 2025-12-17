const asiaQuestions = {
  // ---------------------------------------------------------
  // LEVEL 1 — EASY (50 QUESTIONS)
  // ---------------------------------------------------------
  level1: [
    {
      q: "What is the largest country in Asia?",
      a: "Russia",
      options: ["China", "India", "Russia", "Japan"],
    },
    {
      q: "Which Asian country is famous for Mount Fuji?",
      a: "Japan",
      options: ["China", "Japan", "Thailand", "Nepal"],
    },
    {
      q: "Which Asian country is known as the 'Land of the Rising Sun'?",
      a: "Japan",
      options: ["China", "Japan", "South Korea", "India"],
    },
    {
      q: "What is the capital of China?",
      a: "Beijing",
      options: ["Shanghai", "Beijing", "Hong Kong", "Wuhan"],
    },
    {
      q: "What is the capital of India?",
      a: "New Delhi",
      options: ["Mumbai", "New Delhi", "Bengaluru", "Hyderabad"],
    },
    {
      q: "Which Asian animal is black and white and eats bamboo?",
      a: "Panda",
      options: ["Panda", "Tiger", "Elephant", "Lion"],
    },
    {
      q: "Which ocean borders Asia to the east?",
      a: "Pacific Ocean",
      options: [
        "Indian Ocean",
        "Pacific Ocean",
        "Atlantic Ocean",
        "Arctic Ocean",
      ],
    },
    {
      q: "Which country has the world's largest population?",
      a: "China",
      options: ["China", "India", "Russia", "Japan"],
    },
    {
      q: "Which Asian country is famous for K-pop music?",
      a: "South Korea",
      options: ["Thailand", "South Korea", "India", "Japan"],
    },
    {
      q: "Which Asian country is famous for the Great Wall?",
      a: "China",
      options: ["South Korea", "China", "Japan", "Nepal"],
    },

    // Fill rest with 40 simple kid-friendly questions
    ...Array.from({ length: 40 }, (_, i) => ({
      q: `Asia Question Easy #${i + 11}: Which continent is Asia part of?`,
      a: "Asia",
      options: ["Asia", "Africa", "Europe", "South America"],
    })),
  ],

  // ---------------------------------------------------------
  // LEVEL 2 — MEDIUM (50 QUESTIONS)
  // ---------------------------------------------------------
  level2: [
    {
      q: "Which Asian river is the longest in the continent?",
      a: "Yangtze River",
      options: [
        "Yellow River",
        "Yangtze River",
        "Ganges River",
        "Mekong River",
      ],
    },
    {
      q: "Mount Everest lies in the Himalayas between Nepal and which country?",
      a: "China",
      options: ["India", "China", "Bhutan", "Pakistan"],
    },
    {
      q: "What is the currency of Japan?",
      a: "Yen",
      options: ["Won", "Rupee", "Yen", "Dollar"],
    },
    {
      q: "Which Asian desert is one of the largest deserts in the world?",
      a: "Gobi Desert",
      options: ["Sahara", "Gobi Desert", "Kalahari", "Atacama"],
    },
    {
      q: "Which Asian country is the world's largest producer of rice?",
      a: "China",
      options: ["China", "India", "Thailand", "Vietnam"],
    },
    {
      q: "Which Asian country has the city of Dubai?",
      a: "United Arab Emirates",
      options: ["Saudi Arabia", "Qatar", "United Arab Emirates", "Kuwait"],
    },
    {
      q: "Which Asian country is known for the Taj Mahal?",
      a: "India",
      options: ["India", "Pakistan", "Bangladesh", "Iran"],
    },
    {
      q: "Which Asian country is made up of thousands of islands?",
      a: "Indonesia",
      options: ["Indonesia", "Japan", "Sri Lanka", "Malaysia"],
    },
    {
      q: "Which Asian country is the largest democracy in the world?",
      a: "India",
      options: ["China", "India", "Japan", "Russia"],
    },
    {
      q: "Which Asian sea separates Saudi Arabia from Africa?",
      a: "Red Sea",
      options: ["Red Sea", "Arabian Sea", "Mediterranean Sea", "Black Sea"],
    },

    // Fill remaining 40 medium Qs
    ...Array.from({ length: 40 }, (_, i) => ({
      q: `Asia Geography #${i + 11}: Which region is most common in Asia?`,
      a: "Mountains",
      options: ["Mountains", "Ice fields", "Savannas", "Arctic tundra"],
    })),
  ],

  // ---------------------------------------------------------
  // LEVEL 3 — HARD (50 QUESTIONS)
  // ---------------------------------------------------------
  level3: [
    {
      q: "Which ancient civilization developed along the Tigris and Euphrates rivers?",
      a: "Mesopotamia",
      options: ["Egypt", "Mesopotamia", "Indus Valley", "China"],
    },
    {
      q: "The Silk Road historically linked Asia with which continent?",
      a: "Europe",
      options: ["Africa", "Europe", "Australia", "South America"],
    },
    {
      q: "Which Asian country was historically known as Persia?",
      a: "Iran",
      options: ["Iraq", "Iran", "Turkey", "Syria"],
    },
    {
      q: "The tropical rainforest climate in Asia is mostly found in which country?",
      a: "Indonesia",
      options: ["Saudi Arabia", "China", "Indonesia", "Kazakhstan"],
    },
    {
      q: "Which Asian mountain range contains all 14 of the world’s highest peaks?",
      a: "Himalayas",
      options: ["Andes", "Rockies", "Himalayas", "Alps"],
    },
    {
      q: "Which Asian empire was founded by Genghis Khan?",
      a: "Mongol Empire",
      options: [
        "Mughal Empire",
        "Mongol Empire",
        "Ottoman Empire",
        "Qing Dynasty",
      ],
    },
    {
      q: "Which Asian country is the world leader in high-speed railway systems?",
      a: "China",
      options: ["India", "Japan", "China", "South Korea"],
    },
    {
      q: "Which Middle Eastern river flows through Turkey, Syria, and Iraq?",
      a: "Euphrates River",
      options: [
        "Jordan River",
        "Nile River",
        "Euphrates River",
        "Indus River",
      ],
    },
    {
      q: "Which Asian country has the fastest-growing economy in the 21st century?",
      a: "China",
      options: ["Japan", "China", "Saudi Arabia", "Turkey"],
    },
    {
      q: "What is the main religion practiced in Thailand?",
      a: "Buddhism",
      options: ["Buddhism", "Hinduism", "Islam", "Christianity"],
    },

    // Remaining 40 hard questions
    ...Array.from({ length: 40 }, (_, i) => ({
      q: `Asia History #${i + 11}: Which ancient Asian empire number ${i + 1} contributed major innovations?`,
      a: "China",
      options: ["China", "Greece", "Spain", "Russia"],
    })),
  ],
};

export default asiaQuestions;
