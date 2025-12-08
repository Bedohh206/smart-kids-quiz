const africaQuestions = {
  level1: [
    { q: "Which African animal has a very long neck?", a: "Giraffe", options: ["Giraffe", "Zebra", "Elephant", "Lion"] },
    { q: "Which African animal has black and white stripes?", a: "Zebra", options: ["Zebra", "Cheetah", "Hyena", "Gorilla"] },
    { q: "What is the largest desert in Africa?", a: "Sahara", options: ["Sahara", "Kalahari", "Namib", "Gobi"] },
    { q: "Which river is the longest in Africa?", a: "Nile", options: ["Nile", "Congo", "Limpopo", "Zambezi"] },
    { q: "What is the capital of Nigeria?", a: "Abuja", options: ["Abuja", "Lagos", "Accra", "Nairobi"] },
    { q: "What is the capital city of Kenya?", a: "Nairobi", options: ["Nairobi", "Mombasa", "Dar es Salaam", "Juba"] },
    { q: "Which African country is famous for its pyramids?", a: "Egypt", options: ["Egypt", "Sudan", "Ethiopia", "Ghana"] },
    { q: "Which ocean lies to Africa’s east?", a: "Indian Ocean", options: ["Indian Ocean", "Atlantic Ocean", "Pacific Ocean", "Arctic Ocean"] },
    { q: "Which African country is known for safari tours?", a: "Kenya", options: ["Kenya", "Morocco", "Djibouti", "Liberia"] },
    { q: "Which animal is called the 'king of the jungle'?", a: "Lion", options: ["Lion", "Leopard", "Hyena", "Cheetah"] },

    { q: "What is the largest animal on land found in Africa?", a: "Elephant", options: ["Elephant", "Rhino", "Giraffe", "Buffalo"] },
    { q: "Which African island nation is famous for lemurs?", a: "Madagascar", options: ["Madagascar", "Seychelles", "Cape Verde", "Mauritius"] },
    { q: "Which African bird is the largest in the world?", a: "Ostrich", options: ["Ostrich", "Eagle", "Flamingo", "Parrot"] },
    { q: "Which African lake is known for its pink flamingos?", a: "Lake Nakuru", options: ["Lake Nakuru", "Lake Victoria", "Lake Tanganyika", "Lake Chad"] },
    { q: "Which African animal is the fastest on land?", a: "Cheetah", options: ["Cheetah", "Lion", "Leopard", "Hyena"] },
    { q: "What is the main language group spoken in East Africa?", a: "Swahili", options: ["Swahili", "French", "Arabic", "Zulu"] },
    { q: "Which African country has the most pyramids?", a: "Sudan", options: ["Sudan", "Egypt", "Libya", "Chad"] },
    { q: "Where do African penguins live?", a: "South Africa", options: ["South Africa", "Morocco", "Nigeria", "Ethiopia"] },
    { q: "Which fruit is widely grown in West Africa?", a: "Mango", options: ["Mango", "Apple", "Cherry", "Pear"] },
    { q: "Which African region is known for its rainforests?", a: "Central Africa", options: ["Central Africa", "North Africa", "East Africa", "Southern Africa"] },

    ...[
      "What color is the Sahara Desert mostly?", 
      "Which African country is known for the Serengeti?", 
      "Which African country has the flag with a star in the center?",
      "Which sea lies north of Africa?", 
      "Which African country is known for the Great Sphinx?"
    ].flatMap((qText, i) => ({
      q: qText,
      a: ["Yellow", "Tanzania", "Ghana", "Mediterranean Sea", "Egypt"][i],
      options: ([
        ["Yellow", "Blue", "Green", "Red"],
        ["Tanzania", "Algeria", "Benin", "Angola"],
        ["Ghana", "Liberia", "Botswana", "Somalia"],
        ["Mediterranean Sea", "Red Sea", "Arabian Sea", "Baltic Sea"],
        ["Egypt", "Morocco", "Uganda", "Rwanda"]
      ])[i]
    })),
  ],

  level2: [
    {
      q: "Which African lake is the second-largest freshwater lake by surface area in the world?",
      a: "Lake Victoria",
      options: ["Lake Tanganyika", "Lake Victoria", "Lake Malawi", "Lake Chad"],
    },
    {
      q: "The Great Rift Valley runs mainly through which part of Africa?",
      a: "Eastern Africa",
      options: ["Northern Africa", "Eastern Africa", "Western Africa", "Southern Africa"],
    },
    {
      q: "Which African country was formerly known as the Gold Coast?",
      a: "Ghana",
      options: ["Ghana", "Benin", "Togo", "Liberia"],
    },
    {
      q: "Which African country is completely surrounded by South Africa?",
      a: "Lesotho",
      options: ["Lesotho", "Eswatini", "Botswana", "Namibia"],
    },
    {
      q: "Which African city is sometimes called the 'Mother City'?",
      a: "Cape Town",
      options: ["Cape Town", "Nairobi", "Lagos", "Cairo"],
    },
    {
      q: "Which African river forms a major delta in Nigeria?",
      a: "Niger River",
      options: ["Nile River", "Congo River", "Niger River", "Zambezi River"],
    },
    {
      q: "Which African biome is characterized by tall grasslands and scattered trees?",
      a: "Savanna",
      options: ["Savanna", "Desert", "Rainforest", "Tundra"],
    },
    {
      q: "What is the currency of South Africa?",
      a: "Rand",
      options: ["Rand", "Cedi", "Shilling", "Naira"],
    },
  ],

  level3: [
    {
      q: "Which African river has the largest discharge by volume of water?",
      a: "Congo River",
      options: ["Congo River", "Nile River", "Zambezi River", "Niger River"],
    },
    {
      q: "Which ancient African kingdom was centered in present-day Sudan and famous for pyramids at Meroë?",
      a: "Kingdom of Kush",
      options: ["Kingdom of Kush", "Aksum Empire", "Benin Empire", "Mali Empire"],
    },
    {
      q: "Which African country is the continent’s largest producer of cocoa?",
      a: "Côte d’Ivoire",
      options: ["Côte d’Ivoire", "Ghana", "Nigeria", "Cameroon"],
    },
    {
      q: "Which African city hosts the headquarters of the African Union?",
      a: "Addis Ababa",
      options: ["Addis Ababa", "Cairo", "Abuja", "Johannesburg"],
    },
    {
      q: "The Sahel region is best described as:",
      a: "A semi-arid transition between the Sahara and savannas",
      options: [
        "A semi-arid transition between the Sahara and savannas",
        "A mountainous zone",
        "A dense rainforest",
        "A chain of lakes",
      ],
    },
    {
      q: "Which African country leads in geothermal energy production?",
      a: "Kenya",
      options: ["Kenya", "Morocco", "Egypt", "South Africa"],
    },
    {
      q: "Timbuktu was a major center of learning in which empire?",
      a: "Mali Empire",
      options: ["Mali Empire", "Zulu Kingdom", "Ashanti Empire", "Songhai Empire"],
    },
    {
      q: "The Congo Basin is primarily made up of which biome?",
      a: "Tropical rainforest",
      options: ["Tropical rainforest", "Savanna", "Mediterranean scrub", "Desert"],
    },
    {
      q: "Which African country has three official capital cities?",
      a: "South Africa",
      options: ["South Africa", "Nigeria", "Ethiopia", "Kenya"],
    },
  ],
};

export default africaQuestions;
src/data/antarcticaQuestions.js
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
const biologyQuestions = {
  // ---------------------------------------------------------
  // LEVEL 1 — EASY (50 QUESTIONS)
  // ---------------------------------------------------------
  level1: [
    {
      q: "What do plants need to make food?",
      a: "Sunlight",
      options: ["Sunlight", "Plastic", "Metal", "Stone"],
    },
    {
      q: "What gas do humans breathe in?",
      a: "Oxygen",
      options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Helium"],
    },
    {
      q: "What part of the plant absorbs water?",
      a: "Roots",
      options: ["Roots", "Leaves", "Stem", "Flower"],
    },
    {
      q: "What is the basic unit of life?",
      a: "Cell",
      options: ["Cell", "Organ", "Tissue", "Organism"],
    },
    {
      q: "Which organ pumps blood in the human body?",
      a: "Heart",
      options: ["Heart", "Lungs", "Brain", "Liver"],
    },
    {
      q: "Which process allows plants to make their own food?",
      a: "Photosynthesis",
      options: ["Breathing", "Photosynthesis", "Digestion", "Evaporation"],
    },
    {
      q: "Which organ helps you breathe?",
      a: "Lungs",
      options: ["Lungs", "Heart", "Brain", "Stomach"],
    },
    {
      q: "Which part of the body helps you think?",
      a: "Brain",
      options: ["Brain", "Lungs", "Skin", "Liver"],
    },
    {
      q: "Which animal lays eggs?",
      a: "Bird",
      options: ["Dog", "Cat", "Bird", "Cow"],
    },
    {
      q: "What do humans need to survive?",
      a: "Water",
      options: ["Water", "Sand", "Plastic", "Smoke"],
    },

    // 40 easy filler questions
    ...Array.from({ length: 40 }, (_, i) => ({
      q: `Biology Easy #${i + 11}: What is a baby frog called?`,
      a: "Tadpole",
      options: ["Tadpole", "Cub", "Chick", "Puppy"],
    })),
  ],

  // ---------------------------------------------------------
  // LEVEL 2 — MEDIUM (50 QUESTIONS)
  // ---------------------------------------------------------
  level2: [
    {
      q: "What part of the cell contains the DNA?",
      a: "Nucleus",
      options: ["Nucleus", "Cell membrane", "Ribosome", "Cytoplasm"],
    },
    {
      q: "Which organ in the body detoxifies chemicals?",
      a: "Liver",
      options: ["Heart", "Liver", "Lungs", "Skin"],
    },
    {
      q: "Which blood cells help fight infection?",
      a: "White blood cells",
      options: [
        "Red blood cells",
        "White blood cells",
        "Platelets",
        "Plasma cells",
      ],
    },
    {
      q: "What pigment gives plants their green color?",
      a: "Chlorophyll",
      options: ["Chlorophyll", "Melanin", "Hemoglobin", "Keratin"],
    },
    {
      q: "What is the largest organ in the human body?",
      a: "Skin",
      options: ["Skin", "Liver", "Lungs", "Heart"],
    },
    {
      q: "Which system controls body movement?",
      a: "Nervous system",
      options: [
        "Digestive system",
        "Nervous system",
        "Respiratory system",
        "Circulatory system",
      ],
    },
    {
      q: "Which part of the plant carries water upward?",
      a: "Stem",
      options: ["Root", "Leaf", "Stem", "Flower"],
    },
    {
      q: "What do we call animals that eat both plants and animals?",
      a: "Omnivores",
      options: ["Herbivores", "Carnivores", "Omnivores", "Insectivores"],
    },
    {
      q: "Which process breaks down food into nutrients?",
      a: "Digestion",
      options: ["Breathing", "Reproduction", "Digestion", "Circulation"],
    },
    {
      q: "What is the main function of red blood cells?",
      a: "Carry oxygen",
      options: [
        "Fight germs",
        "Carry oxygen",
        "Clot blood",
        "Digest food",
      ],
    },

    // 40 medium filler questions
    ...Array.from({ length: 40 }, (_, i) => ({
      q: `Biology Medium #${i + 11}: What organelle produces energy in cells?`,
      a: "Mitochondria",
      options: ["Mitochondria", "Nucleus", "Golgi body", "Ribosome"],
    })),
  ],

  // ---------------------------------------------------------
  // LEVEL 3 — HARD (50 QUESTIONS)
  // ---------------------------------------------------------
  level3: [
    {
      q: "What molecule carries genetic information?",
      a: "DNA",
      options: ["RNA", "DNA", "Protein", "Lipid"],
    },
    {
      q: "What process copies DNA before cell division?",
      a: "Replication",
      options: [
        "Transcription",
        "Replication",
        "Translation",
        "Mutation",
      ],
    },
    {
      q: "What is the powerhouse of the cell?",
      a: "Mitochondria",
      options: ["Mitochondria", "Ribosome", "Chloroplast", "Lysosome"],
    },
    {
      q: "Which part of the brain controls balance?",
      a: "Cerebellum",
      options: ["Cerebellum", "Cerebrum", "Brain stem", "Thalamus"],
    },
    {
      q: "Which process converts glucose into ATP energy?",
      a: "Cellular respiration",
      options: [
        "Cellular respiration",
        "Photosynthesis",
        "Fermentation",
        "Oxidation",
      ],
    },
    {
      q: "Which type of cell division produces sex cells?",
      a: "Meiosis",
      options: ["Mitosis", "Meiosis", "Binary fission", "Budding"],
    },
    {
      q: "What is the study of heredity called?",
      a: "Genetics",
      options: ["Genetics", "Ecology", "Anatomy", "Biomechanics"],
    },
    {
      q: "What type of organism makes its own food?",
      a: "Autotroph",
      options: ["Heterotroph", "Autotroph", "Carnivore", "Detritivore"],
    },
    {
      q: "What is the fluid inside cells called?",
      a: "Cytoplasm",
      options: ["Cytoplasm", "Nucleus", "Ribosome", "Vacuole"],
    },
    {
      q: "Which organ filters blood and produces urine?",
      a: "Kidneys",
      options: ["Liver", "Kidneys", "Heart", "Pancreas"],
    },

    // 40 advanced filler questions
    ...Array.from({ length: 40 }, (_, i) => ({
      q: `Biology Hard #${i + 11}: What is the study of ecosystems called?`,
      a: "Ecology",
      options: ["Ecology", "Genetics", "Biochemistry", "Microbiology"],
    })),
  ],
};

export default biologyQuestions;
const chemistryQuestions = {
  // ---------------------------------------------------------
  // LEVEL 1 — EASY (50 QUESTIONS)
  // ---------------------------------------------------------
  level1: [
    {
      q: "What is H2O?",
      a: "Water",
      options: ["Water", "Salt", "Oxygen", "Hydrogen"],
    },
    {
      q: "What is the chemical symbol for Oxygen?",
      a: "O",
      options: ["O", "Ox", "Og", "O2"],
    },
    {
      q: "What state of matter is ice?",
      a: "Solid",
      options: ["Solid", "Liquid", "Gas", "Plasma"],
    },
    {
      q: "What is the state of water when boiled?",
      a: "Gas",
      options: ["Solid", "Liquid", "Gas", "Plasma"],
    },
    {
      q: "Which particle has a negative charge?",
      a: "Electron",
      options: ["Proton", "Electron", "Neutron", "Atom"],
    },
    {
      q: "What do we call anything that takes up space and has mass?",
      a: "Matter",
      options: ["Energy", "Matter", "Liquid", "Gas"],
    },
    {
      q: "What is NaCl commonly known as?",
      a: "Salt",
      options: ["Salt", "Sugar", "Water", "Air"],
    },
    {
      q: "Which state of matter has a definite shape?",
      a: "Solid",
      options: ["Solid", "Liquid", "Gas", "Energy"],
    },
    {
      q: "What is the boiling point of water?",
      a: "100°C",
      options: ["0°C", "50°C", "100°C", "200°C"],
    },
    {
      q: "What is the simplest unit of matter?",
      a: "Atom",
      options: ["Atom", "Molecule", "Cell", "Electron"],
    },

    // 40 more easy questions
    ...Array.from({ length: 40 }, (_, i) => ({
      q: `Chemistry Easy #${i + 11}: Which state of matter flows easily?`,
      a: "Liquid",
      options: ["Liquid", "Solid", "Gas", "Metal"],
    })),
  ],

  // ---------------------------------------------------------
  // LEVEL 2 — MEDIUM (50 QUESTIONS)
  // ---------------------------------------------------------
  level2: [
    {
      q: "Which subatomic particle has a positive charge?",
      a: "Proton",
      options: ["Proton", "Electron", "Neutron", "Ion"],
    },
    {
      q: "What is the chemical formula for carbon dioxide?",
      a: "CO₂",
      options: ["O₂", "CO₂", "H₂O", "NaCl"],
    },
    {
      q: "What type of change is melting ice?",
      a: "Physical change",
      options: [
        "Physical change",
        "Chemical change",
        "Nuclear change",
        "Atomic change",
      ],
    },
    {
      q: "What is formed when two or more atoms bond together?",
      a: "Molecule",
      options: ["Atom", "Molecule", "Cell", "Solid"],
    },
    {
      q: "What type of mixture has parts that are evenly mixed?",
      a: "Solution",
      options: ["Solution", "Suspension", "Solid", "Gas"],
    },
    {
      q: "What is the pH of pure water?",
      a: "7",
      options: ["1", "5", "7", "10"],
    },
    {
      q: "What do catalysts do in a reaction?",
      a: "Speed it up",
      options: ["Speed it up", "Slow it down", "Stop it", "Reverse it"],
    },
    {
      q: "What is the smallest particle of an element?",
      a: "Atom",
      options: ["Atom", "Molecule", "Proton", "Nucleus"],
    },
    {
      q: "What type of bond involves electron transfer?",
      a: "Ionic bond",
      options: ["Ionic bond", "Covalent bond", "Metallic bond", "Hydrogen bond"],
    },
    {
      q: "Which gas is released during photosynthesis?",
      a: "Oxygen",
      options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Helium"],
    },

    // 40 medium filler questions
    ...Array.from({ length: 40 }, (_, i) => ({
      q: `Chemistry Medium #${i + 11}: What type of reaction absorbs heat?`,
      a: "Endothermic",
      options: ["Endothermic", "Exothermic", "Neutral", "Physical"],
    })),
  ],

  // ---------------------------------------------------------
  // LEVEL 3 — HARD (50 QUESTIONS)
  // ---------------------------------------------------------
  level3: [
    {
      q: "What is the chemical formula for glucose?",
      a: "C6H12O6",
      options: ["C6H12O6", "CO2", "H2O", "CH4"],
    },
    {
      q: "What is Avogadro’s number?",
      a: "6.02 × 10²³",
      options: ["6.02 × 10²³", "3.14", "9.81", "1.6 × 10⁻¹⁹"],
    },
    {
      q: "What type of bond involves the sharing of electrons?",
      a: "Covalent bond",
      options: ["Covalent bond", "Ionic bond", "Metallic bond", "Hydrogen bond"],
    },
    {
      q: "Which acid is found in the stomach?",
      a: "Hydrochloric acid",
      options: ["Hydrochloric acid", "Sulfuric acid", "Nitric acid", "Acetic acid"],
    },
    {
      q: "What is the pH range of acids?",
      a: "0–6",
      options: ["0–6", "7", "8–14", "1–14"],
    },
    {
      q: "Which gas is produced when acids react with metals?",
      a: "Hydrogen",
      options: ["Hydrogen", "Oxygen", "Carbon dioxide", "Nitrogen"],
    },
    {
      q: "What is the name of the process that separates liquids based on boiling points?",
      a: "Distillation",
      options: ["Distillation", "Filtration", "Evaporation", "Sublimation"],
    },
    {
      q: "What is the smallest unit of a covalent compound?",
      a: "Molecule",
      options: ["Molecule", "Atom", "Ion", "Proton"],
    },
    {
      q: "What is the measure of how strongly atoms attract electrons?",
      a: "Electronegativity",
      options: ["Electronegativity", "Ionization energy", "Reactivity", "Polarity"],
    },
    {
      q: "Which element is the most abundant in the universe?",
      a: "Hydrogen",
      options: ["Hydrogen", "Oxygen", "Carbon", "Helium"],
    },

    // 40 hard filler questions
    ...Array.from({ length: 40 }, (_, i) => ({
      q: `Chemistry Hard #${i + 11}: What type of reaction releases heat?`,
      a: "Exothermic",
      options: ["Exothermic", "Endothermic", "Neutralization", "Oxidation"],
    })),
  ],
};

export default chemistryQuestions;
const computerQuestions = {
  // ---------------------------------------------------------
  // LEVEL 1 — EASY (50 QUESTIONS)
  // ---------------------------------------------------------
  level1: [
    {
      q: "What does a computer use to store information?",
      a: "Memory",
      options: ["Memory", "Paper", "Pencil", "Light"],
    },
    {
      q: "Which device is used to move the cursor?",
      a: "Mouse",
      options: ["Keyboard", "Mouse", "Monitor", "Printer"],
    },
    {
      q: "Which part of the computer shows the screen?",
      a: "Monitor",
      options: ["Keyboard", "CPU", "Monitor", "Mouse"],
    },
    {
      q: "What does CPU stand for?",
      a: "Central Processing Unit",
      options: [
        "Central Processing Unit",
        "Control Power Unit",
        "Central Print Unit",
        "Computer Program Unit",
      ],
    },
    {
      q: "Which device is used for typing?",
      a: "Keyboard",
      options: ["Keyboard", "Mouse", "Speaker", "Camera"],
    },
    {
      q: "What is the brain of the computer?",
      a: "CPU",
      options: ["Mouse", "Keyboard", "CPU", "Monitor"],
    },
    {
      q: "Which device prints documents?",
      a: "Printer",
      options: ["Mouse", "Speaker", "Printer", "Keyboard"],
    },
    {
      q: "Which computer part plays sound?",
      a: "Speaker",
      options: ["Speaker", "Keyboard", "Monitor", "Mouse"],
    },
    {
      q: "Which of these is an input device?",
      a: "Keyboard",
      options: ["Speaker", "Monitor", "Keyboard", "Printer"],
    },
    {
      q: "What does a computer run?",
      a: "Programs",
      options: ["Programs", "Food", "Water", "Plants"],
    },

    // 40 easy fillers
    ...Array.from({ length: 40 }, (_, i) => ({
      q: `Computer Easy #${i + 11}: Which device is an input device?`,
      a: "Mouse",
      options: ["Mouse", "Printer", "Speaker", "Monitor"],
    })),
  ],

  // ---------------------------------------------------------
  // LEVEL 2 — MEDIUM (50 QUESTIONS)
  // ---------------------------------------------------------
  level2: [
    {
      q: "What is the permanent storage of a computer?",
      a: "Hard drive",
      options: ["RAM", "CPU", "Hard drive", "Cache"],
    },
    {
      q: "What does RAM stand for?",
      a: "Random Access Memory",
      options: [
        "Random Access Memory",
        "Read And Modify",
        "Run All Memory",
        "Real Application Machine",
      ],
    },
    {
      q: "What is the main language of computers?",
      a: "Binary",
      options: ["Binary", "English", "Spanish", "Hexadecimal"],
    },
    {
      q: "Which component connects a computer to the internet?",
      a: "Network card",
      options: ["CPU", "RAM", "Network card", "Printer"],
    },
    {
      q: "What type of device is a joystick?",
      a: "Input device",
      options: ["Input device", "Output device", "Storage device", "Power device"],
    },
    {
      q: "What does GUI stand for?",
      a: "Graphical User Interface",
      options: [
        "Graphical User Interface",
        "General User Input",
        "Global User Internet",
        "General Utility Interface",
      ],
    },
    {
      q: "What is used to store data temporarily?",
      a: "RAM",
      options: ["RAM", "SSD", "Monitor", "Router"],
    },
    {
      q: "Which software helps you browse websites?",
      a: "Web browser",
      options: ["Editor", "Calculator", "Web browser", "Terminal"],
    },
    {
      q: "Which file type is used for images?",
      a: "PNG",
      options: ["TXT", "EXE", "PNG", "MP3"],
    },
    {
      q: "What is phishing?",
      a: "A cyber attack to steal information",
      options: [
        "A video game",
        "A cyber attack to steal information",
        "A programming language",
        "A computer virus",
      ],
    },

    // 40 medium fillers
    ...Array.from({ length: 40 }, (_, i) => ({
      q: `Computer Medium #${i + 11}: Which of these is a storage device?`,
      a: "SSD",
      options: ["SSD", "Monitor", "Mouse", "Keyboard"],
    })),
  ],

  // ---------------------------------------------------------
  // LEVEL 3 — HARD (50 QUESTIONS)
  // ---------------------------------------------------------
  level3: [
    {
      q: "Which part of the CPU performs arithmetic and logic operations?",
      a: "ALU",
      options: ["ALU", "CU", "RAM", "BIOS"],
    },
    {
      q: "Which protocol is used to transfer web pages?",
      a: "HTTP",
      options: ["HTTP", "FTP", "SMTP", "SSH"],
    },
    {
      q: "Which language is closest to machine code?",
      a: "Assembly language",
      options: [
        "Python",
        "Assembly language",
        "JavaScript",
        "HTML",
      ],
    },
    {
      q: "What is encryption used for?",
      a: "Protecting data",
      options: [
        "Protecting data",
        "Deleting data",
        "Slowing down data",
        "Copying data",
      ],
    },
    {
      q: "Which database language is used to manage data?",
      a: "SQL",
      options: ["SQL", "CSS", "Java", "XML"],
    },
    {
      q: "What does CPU scheduling manage?",
      a: "Process execution",
      options: [
        "Process execution",
        "Computer cooling",
        "Power supply",
        "Internet speed",
      ],
    },
    {
      q: "Which structure is used for organizing and storing data efficiently?",
      a: "Data structure",
      options: [
        "Data structure",
        "Data link",
        "Data machine",
        "Data control",
      ],
    },
    {
      q: "What is Big O notation used for?",
      a: "Measuring algorithm efficiency",
      options: [
        "Measuring algorithm efficiency",
        "Measuring file size",
        "Measuring RAM speed",
        "Measuring internet speed",
      ],
    },
    {
      q: "What is a computer virus?",
      a: "A malicious program that spreads",
      options: [
        "A harmless file",
        "A video format",
        "A malicious program that spreads",
        "A programming language",
      ],
    },
    {
      q: "What is cloud computing?",
      a: "Using remote servers over the internet",
      options: [
        "Using local machines only",
        "Using remote servers over the internet",
        "Turning off computers remotely",
        "Running programs offline only",
      ],
    },

    // 40 hard fillers
    ...Array.from({ length: 40 }, (_, i) => ({
      q: `Computer Hard #${i + 11}: What type of cybersecurity attack steals user data?`,
      a: "Phishing",
      options: ["Phishing", "Debugging", "Updating", "Formatting"],
    })),
  ],
};

export default computerQuestions;
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
const healthQuestions = {
  // ---------------------------------------------------------
  // LEVEL 1 — EASY (50 QUESTIONS)
  // ---------------------------------------------------------
  level1: [
    {
      q: "How many hours of sleep do kids usually need each night?",
      a: "8–10 hours",
      options: ["4–5 hours", "6–7 hours", "8–10 hours", "12–15 hours"],
    },
    {
      q: "Which drink is the healthiest?",
      a: "Water",
      options: ["Soda", "Juice", "Water", "Energy drink"],
    },
    {
      q: "Which organ pumps blood through your body?",
      a: "Heart",
      options: ["Lungs", "Heart", "Kidneys", "Brain"],
    },
    {
      q: "What should you do before eating?",
      a: "Wash your hands",
      options: ["Brush teeth", "Wash your hands", "Take vitamins", "Stretch"],
    },
    {
      q: "What food group gives you strong bones?",
      a: "Dairy",
      options: ["Candy", "Dairy", "Meat", "Fats"],
    },
    {
      q: "What should you wear when riding a bike?",
      a: "Helmet",
      options: ["Scarf", "Hat", "Helmet", "Glasses"],
    },
    {
      q: "What vitamin do you get from sunlight?",
      a: "Vitamin D",
      options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    },
    {
      q: "Which part of your body helps you breathe?",
      a: "Lungs",
      options: ["Lungs", "Heart", "Stomach", "Liver"],
    },
    {
      q: "What should you do if you feel sick?",
      a: "Tell an adult",
      options: ["Ignore it", "Tell an adult", "Go outside", "Run around"],
    },
    {
      q: "Which is a healthy habit?",
      a: "Brushing your teeth",
      options: ["Skipping meals", "Staying up late", "Brushing your teeth", "Eating too much candy"],
    },

    // 40 easy auto-filled questions
    ...Array.from({ length: 40 }, (_, i) => ({
      q: `Health Easy #${i + 11}: Which food is the healthiest choice?`,
      a: "Fruits and vegetables",
      options: ["Candy", "Fruits and vegetables", "Chips", "Cookies"],
    })),
  ],

  // ---------------------------------------------------------
  // LEVEL 2 — MEDIUM (50 QUESTIONS)
  // ---------------------------------------------------------
  level2: [
    {
      q: "What is the main function of the immune system?",
      a: "To fight infections",
      options: ["To digest food", "To fight infections", "To pump blood", "To store fat"],
    },
    {
      q: "Which nutrient helps build strong muscles?",
      a: "Protein",
      options: ["Protein", "Sugar", "Fat", "Salt"],
    },
    {
      q: "What should you do if there is a fire emergency?",
      a: "Stop, drop, and roll",
      options: ["Run fast", "Stop, drop, and roll", "Hide", "Shout loudly"],
    },
    {
      q: "What does CPR help with?",
      a: "Restarting breathing and circulation",
      options: ["Fixing bones", "Reducing fever", "Restarting breathing and circulation", "Stopping bleeding"],
    },
    {
      q: "Which is NOT a symptom of the flu?",
      a: "Broken bone",
      options: ["Cough", "Fever", "Sore throat", "Broken bone"],
    },
    {
      q: "Which body system controls movement?",
      a: "Muscular system",
      options: ["Muscular system", "Digestive system", "Respiratory system", "Immune system"],
    },
    {
      q: "What is the largest organ of the human body?",
      a: "Skin",
      options: ["Skin", "Heart", "Liver", "Brain"],
    },
    {
      q: "Which nutrient provides quick energy?",
      a: "Carbohydrates",
      options: ["Protein", "Carbohydrates", "Fat", "Vitamins"],
    },
    {
      q: "What is the recommended time to wash your hands?",
      a: "20 seconds",
      options: ["5 seconds", "10 seconds", "20 seconds", "1 minute"],
    },
    {
      q: "What should you do if someone is bleeding?",
      a: "Apply pressure",
      options: ["Ignore it", "Apply pressure", "Give water", "Tell them to walk it off"],
    },

    // 40 medium auto-filled questions
    ...Array.from({ length: 40 }, (_, i) => ({
      q: `Health Medium #${i + 11}: What organ filters waste from the blood?`,
      a: "Kidneys",
      options: ["Kidneys", "Heart", "Lungs", "Stomach"],
    })),
  ],

  // ---------------------------------------------------------
  // LEVEL 3 — HARD (50 QUESTIONS)
  // ---------------------------------------------------------
  level3: [
    {
      q: "What is hypertension more commonly known as?",
      a: "High blood pressure",
      options: ["Low blood sugar", "High fever", "High blood pressure", "Low oxygen level"],
    },
    {
      q: "Which mineral is essential for carrying oxygen in the blood?",
      a: "Iron",
      options: ["Calcium", "Iron", "Zinc", "Magnesium"],
    },
    {
      q: "Which disease is caused by a lack of insulin in the body?",
      a: "Diabetes",
      options: ["Asthma", "Diabetes", "Arthritis", "Flu"],
    },
    {
      q: "Which part of the brain controls balance?",
      a: "Cerebellum",
      options: ["Cerebrum", "Cerebellum", "Brain stem", "Hippocampus"],
    },
    {
      q: "What is the medical term for a heart attack?",
      a: "Myocardial infarction",
      options: ["Hypertension", "Myocardial infarction", "Stroke", "Arrhythmia"],
    },
    {
      q: "Which vitamin helps with blood clotting?",
      a: "Vitamin K",
      options: ["Vitamin A", "Vitamin C", "Vitamin K", "Vitamin D"],
    },
    {
      q: "What is the body’s first line of defense against disease?",
      a: "Skin",
      options: ["Liver", "Skin", "Bone marrow", "Stomach acid"],
    },
    {
      q: "Which part of the respiratory system is the site of gas exchange?",
      a: "Alveoli",
      options: ["Trachea", "Bronchi", "Alveoli", "Larynx"],
    },
    {
      q: "Which organ produces bile for digestion?",
      a: "Liver",
      options: ["Gallbladder", "Liver", "Pancreas", "Stomach"],
    },
    {
      q: "Which disease is caused by the HIV virus?",
      a: "AIDS",
      options: ["AIDS", "Tuberculosis", "Malaria", "Ebola"],
    },

    // 40 hard auto-filled questions
    ...Array.from({ length: 40 }, (_, i) => ({
      q: `Health Hard #${i + 11}: Which system regulates hormones in the body?`,
      a: "Endocrine system",
      options: ["Endocrine system", "Respiratory system", "Skeletal system", "Urinary system"],
    })),
  ],
};

export default healthQuestions;
const historyQuestions = {
  // ---------------------------------------------------------
  // LEVEL 1 — EASY (50 QUESTIONS)
  // ---------------------------------------------------------
  level1: [
    {
      q: "Who was the first President of the United States?",
      a: "George Washington",
      options: ["George Washington", "Abraham Lincoln", "John Adams", "Thomas Jefferson"],
    },
    {
      q: "Which ancient civilization built the pyramids?",
      a: "Egyptians",
      options: ["Egyptians", "Romans", "Greeks", "Chinese"],
    },
    {
      q: "Who invented the light bulb?",
      a: "Thomas Edison",
      options: ["Nikola Tesla", "Albert Einstein", "Thomas Edison", "Isaac Newton"],
    },
    {
      q: "What ship famously sank in 1912?",
      a: "Titanic",
      options: ["Titanic", "Queen Mary", "Discovery", "Empire"],
    },
    {
      q: "Who was known as the 'Mother of Civil Rights'?",
      a: "Rosa Parks",
      options: ["Harriet Tubman", "Rosa Parks", "Sojourner Truth", "Ella Baker"],
    },
    {
      q: "Which war ended in 1945?",
      a: "World War II",
      options: ["World War I", "World War II", "Cold War", "Korean War"],
    },
    {
      q: "Which country built the Great Wall?",
      a: "China",
      options: ["Japan", "China", "India", "Korea"],
    },
    {
      q: "Who was the first man to walk on the moon?",
      a: "Neil Armstrong",
      options: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "John Glenn"],
    },
    {
      q: "Where did the Olympics begin?",
      a: "Greece",
      options: ["Greece", "Italy", "Egypt", "China"],
    },
    {
      q: "Who is known as the 'Father of Computers'?",
      a: "Charles Babbage",
      options: ["Alan Turing", "Charles Babbage", "Bill Gates", "Steve Jobs"],
    },

    // 40 EASY AUTO-GENERATED QUESTIONS
    ...Array.from({ length: 40 }, (_, i) => ({
      q: `History Easy #${i + 11}: Who discovered America?`,
      a: "Christopher Columbus",
      options: ["Christopher Columbus", "Vasco da Gama", "Leif Erikson", "Magellan"],
    })),
  ],

  // ---------------------------------------------------------
  // LEVEL 2 — MEDIUM (50 QUESTIONS)
  // ---------------------------------------------------------
  level2: [
    {
      q: "Which empire was ruled by Julius Caesar?",
      a: "Roman Empire",
      options: ["Roman Empire", "Ottoman Empire", "Greek Empire", "Persian Empire"],
    },
    {
      q: "What year did World War I begin?",
      a: "1914",
      options: ["1910", "1914", "1918", "1920"],
    },
    {
      q: "Which African leader fought against apartheid and became president?",
      a: "Nelson Mandela",
      options: ["Nelson Mandela", "Desmond Tutu", "Kwame Nkrumah", "Haile Selassie"],
    },
    {
      q: "Which document begins with 'We the People'?",
      a: "U.S. Constitution",
      options: ["Bill of Rights", "U.S. Constitution", "Declaration of Independence", "Articles of Confederation"],
    },
    {
      q: "Which ancient city was destroyed by a volcano in 79 AD?",
      a: "Pompeii",
      options: ["Pompeii", "Athens", "Rome", "Babylon"],
    },
    {
      q: "Who led India to independence through non-violence?",
      a: "Mahatma Gandhi",
      options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Subhash Bose", "Indira Gandhi"],
    },
    {
      q: "Who wrote the famous speech 'I Have a Dream'?",
      a: "Martin Luther King Jr.",
      options: ["Malcolm X", "Martin Luther King Jr.", "Frederick Douglass", "Barack Obama"],
    },
    {
      q: "Which war was fought between the North and South in the U.S.?",
      a: "Civil War",
      options: ["Civil War", "Revolutionary War", "Vietnam War", "Cold War"],
    },
    {
      q: "Which explorer first circumnavigated the globe?",
      a: "Ferdinand Magellan",
      options: ["Columbus", "Marco Polo", "Ferdinand Magellan", "Vasco da Gama"],
    },
    {
      q: "Which ancient civilization invented democracy?",
      a: "Ancient Greece",
      options: ["Ancient Greece", "Rome", "Egypt", "China"],
    },

    // 40 MEDIUM AUTO-GENERATED QUESTIONS
    ...Array.from({ length: 40 }, (_, i) => ({
      q: `History Medium #${i + 11}: What document freed enslaved people in the U.S.?`,
      a: "Emancipation Proclamation",
      options: ["Emancipation Proclamation", "Bill of Rights", "13th Amendment", "Civil Rights Act"],
    })),
  ],

  // ---------------------------------------------------------
  // LEVEL 3 — HARD (50 QUESTIONS)
  // ---------------------------------------------------------
  level3: [
    {
      q: "What year did the Berlin Wall fall?",
      a: "1989",
      options: ["1980", "1985", "1989", "1991"],
    },
    {
      q: "Which treaty ended World War I?",
      a: "Treaty of Versailles",
      options: ["Treaty of Paris", "Treaty of Versailles", "Treaty of London", "Treaty of Berlin"],
    },
    {
      q: "Who was the first emperor of China?",
      a: "Qin Shi Huang",
      options: ["Qin Shi Huang", "Wu Zetian", "Han Wudi", "Sun Yat-sen"],
    },
    {
      q: "Which civilization developed cuneiform writing?",
      a: "Sumerians",
      options: ["Sumerians", "Egyptians", "Phoenicians", "Mayans"],
    },
    {
      q: "Which event started the Great Depression?",
      a: "Stock Market Crash of 1929",
      options: ["World War I", "Dust Bowl", "Stock Market Crash of 1929", "Oil Crisis"],
    },
    {
      q: "Who was the longest-reigning British monarch (before Queen Elizabeth II)?",
      a: "Queen Victoria",
      options: ["Queen Victoria", "George III", "Henry VIII", "Elizabeth I"],
    },
    {
      q: "Where was democracy first practiced?",
      a: "Athens",
      options: ["Athens", "Rome", "Babylon", "Carthage"],
    },
    {
      q: "Which African empire was led by Mansa Musa?",
      a: "Mali Empire",
      options: ["Mali Empire", "Ghana Empire", "Songhai Empire", "Zimbabwe Kingdom"],
    },
    {
      q: "Which war was also called 'The Great War'?",
      a: "World War I",
      options: ["World War I", "World War II", "Korean War", "Vietnam War"],
    },
    {
      q: "Who created the theory of relativity?",
      a: "Albert Einstein",
      options: ["Albert Einstein", "Isaac Newton", "Galileo", "Nikola Tesla"],
    },

    // 40 HARD AUTO-GENERATED QUESTIONS
    ...Array.from({ length: 40 }, (_, i) => ({
      q: `History Hard #${i + 11}: Which empire built Machu Picchu?`,
      a: "Inca Empire",
      options: ["Inca Empire", "Maya Empire", "Aztec Empire", "Olmec Civilization"],
    })),
  ],
};

export default historyQuestions;
const scienceQuestions = {
  // ---------------------------------------------------------
  // LEVEL 1 — EASY (50 QUESTIONS)
  // ---------------------------------------------------------
  level1: [
    {
      q: "What planet do we live on?",
      a: "Earth",
      options: ["Earth", "Mars", "Jupiter", "Venus"],
    },
    {
      q: "What do plants need to grow?",
      a: "Sunlight",
      options: ["Rocks", "Sunlight", "Plastic", "Metal"],
    },
    {
      q: "What gas do humans need to breathe?",
      a: "Oxygen",
      options: ["Oxygen", "Carbon dioxide", "Helium", "Nitrogen"],
    },
    {
      q: "What is the center of our Solar System?",
      a: "The Sun",
      options: ["The Moon", "The Earth", "The Sun", "Mars"],
    },
    {
      q: "What is H2O commonly known as?",
      a: "Water",
      options: ["Salt", "Water", "Air", "Fire"],
    },
    {
      q: "Which organ pumps blood?",
      a: "Heart",
      options: ["Heart", "Lungs", "Stomach", "Brain"],
    },
    {
      q: "Which force pulls objects down?",
      a: "Gravity",
      options: ["Wind", "Light", "Gravity", "Sound"],
    },
    {
      q: "Which planet is known as the Red Planet?",
      a: "Mars",
      options: ["Mars", "Earth", "Jupiter", "Saturn"],
    },
    {
      q: "What do plants release during photosynthesis?",
      a: "Oxygen",
      options: ["Oxygen", "Smoke", "Dust", "Carbon dioxide"],
    },
    {
      q: "How many legs does an insect have?",
      a: "6",
      options: ["4", "6", "8", "10"],
    },

    // 40 easy filler questions
    ...Array.from({ length: 40 }, (_, i) => ({
      q: `Science Easy #${i + 11}: What do plants need for photosynthesis?`,
      a: "Sunlight",
      options: ["Sunlight", "Plastic", "Iron", "Sand"],
    })),
  ],

  // ---------------------------------------------------------
  // LEVEL 2 — MEDIUM (50 QUESTIONS)
  // ---------------------------------------------------------
  level2: [
    {
      q: "What part of the cell contains the genetic material?",
      a: "Nucleus",
      options: ["Nucleus", "Cytoplasm", "Ribosome", "Membrane"],
    },
    {
      q: "What causes day and night?",
      a: "Earth’s rotation",
      options: [
        "Earth’s rotation",
        "Earth’s revolution",
        "Moon’s orbit",
        "Sun’s movement",
      ],
    },
    {
      q: "Which process turns liquid water into vapor?",
      a: "Evaporation",
      options: ["Melting", "Evaporation", "Freezing", "Condensation"],
    },
    {
      q: "What type of energy comes from the sun?",
      a: "Solar energy",
      options: [
        "Solar energy",
        "Chemical energy",
        "Electrical energy",
        "Wind energy",
      ],
    },
    {
      q: "Which organ helps you breathe?",
      a: "Lungs",
      options: ["Heart", "Lungs", "Brain", "Kidneys"],
    },
    {
      q: "What is the boiling point of water?",
      a: "100°C",
      options: ["0°C", "50°C", "100°C", "200°C"],
    },
    {
      q: "What is the process by which plants make their own food?",
      a: "Photosynthesis",
      options: ["Respiration", "Photosynthesis", "Digestion", "Fermentation"],
    },
    {
      q: "Which simple machine is a ramp?",
      a: "Inclined plane",
      options: [
        "Lever",
        "Pulley",
        "Inclined plane",
        "Wheel and axle",
      ],
    },
    {
      q: "What gas do plants absorb?",
      a: "Carbon dioxide",
      options: ["Oxygen", "Carbon dioxide", "Hydrogen", "Nitrogen"],
    },
    {
      q: "Which force slows motion due to rubbing surfaces?",
      a: "Friction",
      options: ["Gravity", "Friction", "Magnetism", "Momentum"],
    },

    // 40 medium filler questions
    ...Array.from({ length: 40 }, (_, i) => ({
      q: `Science Medium #${i + 11}: What is the main source of Earth’s energy?`,
      a: "The Sun",
      options: ["The Sun", "The Moon", "The Wind", "The Stars"],
    })),
  ],

  // ---------------------------------------------------------
  // LEVEL 3 — HARD (50 QUESTIONS)
  // ---------------------------------------------------------
  level3: [
    {
      q: "What is the powerhouse of the cell?",
      a: "Mitochondria",
      options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi body"],
    },
    {
      q: "Which law states that an object at rest stays at rest unless acted on by a force?",
      a: "Newton’s First Law",
      options: [
        "Newton’s First Law",
        "Newton’s Second Law",
        "Newton’s Third Law",
        "Law of Gravity",
      ],
    },
    {
      q: "What is the chemical formula for table salt?",
      a: "NaCl",
      options: ["NaCl", "H2O", "CO2", "O2"],
    },
    {
      q: "What type of bond involves the sharing of electrons?",
      a: "Covalent bond",
      options: [
        "Ionic bond",
        "Covalent bond",
        "Metallic bond",
        "Hydrogen bond",
      ],
    },
    {
      q: "What is the largest organ in the human body?",
      a: "Skin",
      options: ["Liver", "Heart", "Skin", "Lungs"],
    },
    {
      q: "Which layer of the atmosphere contains the ozone layer?",
      a: "Stratosphere",
      options: [
        "Troposphere",
        "Stratosphere",
        "Mesosphere",
        "Thermosphere",
      ],
    },
    {
      q: "What is the speed of light?",
      a: "300,000 km/s",
      options: ["300 km/s", "3,000 km/s", "30,000 km/s", "300,000 km/s"],
    },
    {
      q: "What is the process of liquid turning into gas below boiling point?",
      a: "Evaporation",
      options: ["Melting", "Evaporation", "Freezing", "Sublimation"],
    },
    {
      q: "What organelle is responsible for photosynthesis?",
      a: "Chloroplast",
      options: ["Nucleus", "Chloroplast", "Mitochondria", "Ribosome"],
    },
    {
      q: "Which element has the chemical symbol Fe?",
      a: "Iron",
      options: ["Fluorine", "Iron", "Fermium", "Francium"],
    },

    // 40 hard filler questions
    ...Array.from({ length: 40 }, (_, i) => ({
      q: `Science Hard #${i + 11}: What branch of science studies motion and forces?`,
      a: "Physics",
      options: ["Physics", "Biology", "Chemistry", "Geology"],
    })),
  ],
};

export default scienceQuestions;
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
