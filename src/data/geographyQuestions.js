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

    // More variety: capitals, continents, directions, landmarks
    { q: "In which continent is Brazil?", a: "South America", options: ["South America", "Europe", "Asia", "Africa"] },
    { q: "What is the capital of Italy?", a: "Rome", options: ["Rome", "Milan", "Venice", "Naples"] },
    { q: "Which direction is opposite of East?", a: "West", options: ["West", "North", "South", "Up"] },
    { q: "Which country has the Eiffel Tower?", a: "France", options: ["France", "Spain", "Germany", "UK"] },
    { q: "Which is the smallest continent?", a: "Australia", options: ["Australia", "Europe", "Antarctica", "South America"] },
    { q: "Which desert is the largest hot desert?", a: "Sahara", options: ["Sahara", "Gobi", "Kalahari", "Mojave"] },
    { q: "What is the capital of Canada?", a: "Ottawa", options: ["Ottawa", "Toronto", "Vancouver", "Montreal"] },
    { q: "Which ocean borders India?", a: "Indian Ocean", options: ["Indian Ocean", "Atlantic Ocean", "Pacific Ocean", "Arctic Ocean"] },
    { q: "Mount Fuji is in which country?", a: "Japan", options: ["Japan", "China", "Korea", "Thailand"] },
    { q: "Which continent is Egypt in?", a: "Africa", options: ["Africa", "Europe", "Asia", "Oceania"] },
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

    // More variety: population, capitals, rivers, climate, regions
    { q: "What is the capital of Australia?", a: "Canberra", options: ["Canberra", "Sydney", "Melbourne", "Perth"] },
    { q: "Which river runs through Egypt?", a: "Nile", options: ["Nile", "Tigris", "Euphrates", "Indus"] },
    { q: "Which climate is hot and wet all year?", a: "Tropical", options: ["Tropical", "Polar", "Temperate", "Desert"] },
    { q: "Which sea separates Europe and Africa?", a: "Mediterranean", options: ["Mediterranean", "Black Sea", "Red Sea", "Baltic Sea"] },
    { q: "What is the capital of Kenya?", a: "Nairobi", options: ["Nairobi", "Mombasa", "Kampala", "Addis Ababa"] },
    { q: "Which U.S. river is the longest?", a: "Missouri", options: ["Missouri", "Mississippi", "Colorado", "Columbia"] },
    { q: "Which continent is called 'The Island Continent'?", a: "Australia", options: ["Australia", "Africa", "Asia", "Europe"] },
    { q: "Which country is both in Europe and Asia?", a: "Turkey", options: ["Turkey", "Greece", "Spain", "Italy"] },
    { q: "What is the capital of India?", a: "New Delhi", options: ["New Delhi", "Mumbai", "Kolkata", "Chennai"] },
    { q: "Which country is landlocked?", a: "Nepal", options: ["Nepal", "Vietnam", "Bangladesh", "Myanmar"] },
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

    // More variety: currents, biomes, geopolitics, coordinates, landforms
    { q: "Which biome has permafrost?", a: "Tundra", options: ["Tundra", "Savanna", "Desert", "Rainforest"] },
    { q: "Which canal connects the Med and Red Sea?", a: "Suez Canal", options: ["Suez Canal", "Panama Canal", "Kiel Canal", "Corinth Canal"] },
    { q: "Which line is at 0° latitude?", a: "Equator", options: ["Equator", "Prime Meridian", "Tropic of Cancer", "Arctic Circle"] },
    { q: "Which country has two capitals?", a: "Bolivia", options: ["Bolivia", "Peru", "Chile", "Ecuador"] },
    { q: "Loess is a type of?", a: "Silt", options: ["Silt", "Basalt", "Granite", "Limestone"] },
    { q: "Which current cools Peru's coast?", a: "Humboldt Current", options: ["Humboldt Current", "Gulf Stream", "Kuroshio", "Canary Current"] },
    { q: "Which country encloses Lesotho?", a: "South Africa", options: ["South Africa", "Botswana", "Namibia", "Zimbabwe"] },
    { q: "What do isohyets connect?", a: "Equal rainfall", options: ["Equal rainfall", "Equal temperature", "Equal pressure", "Equal altitude"] },
    { q: "Which delta is at the Ganges?", a: "Sundarbans", options: ["Sundarbans", "Okavango", "Nile Delta", "Mekong Delta"] },
    { q: "Which lake lies on the US-Canada border?", a: "Lake Superior", options: ["Lake Superior", "Lake Tahoe", "Great Salt Lake", "Lake Winnipeg"] },
  ],
};

export default geographyQuestions;
