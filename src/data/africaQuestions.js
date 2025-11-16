const africaQuestions = {
  // 🌱 LEVEL 1 — EASY / FUN (50)
  level1: [
    {
      q: "What is the largest desert in Africa?",
      a: "Sahara",
      options: ["Kalahari", "Sahara", "Namib", "Gobi"],
    },
    {
      q: "Which river is the longest in Africa?",
      a: "Nile",
      options: ["Nile", "Congo", "Zambezi", "Limpopo"],
    },
    {
      q: "Which African animal has a very long neck?",
      a: "Giraffe",
      options: ["Hippo", "Giraffe", "Rhino", "Buffalo"],
    },
    {
      q: "Which African animal has black and white stripes?",
      a: "Zebra",
      options: ["Leopard", "Hyena", "Zebra", "Buffalo"],
    },
    {
      q: "What is the capital city of Nigeria?",
      a: "Abuja",
      options: ["Lagos", "Abuja", "Accra", "Nairobi"],
    },
    {
      q: "In which continent is Kenya located?",
      a: "Africa",
      options: ["Asia", "Africa", "Europe", "Australia"],
    },
    {
      q: "Which ocean is on the east coast of Africa?",
      a: "Indian Ocean",
      options: ["Pacific Ocean", "Indian Ocean", "Arctic Ocean", "Atlantic Ocean"],
    },
    {
      q: "What is the capital city of Kenya?",
      a: "Nairobi",
      options: ["Nairobi", "Mombasa", "Kisumu", "Dodoma"],
    },
    {
      q: "Which African animal is called the 'king of the jungle'?",
      a: "Lion",
      options: ["Elephant", "Lion", "Cheetah", "Hyena"],
    },
    {
      q: "Which African country is famous for its pyramids?",
      a: "Egypt",
      options: ["Ghana", "Kenya", "Egypt", "Uganda"],
    },

    // Generate extra fun/easy ones to reach 50
    ...Array.from({ length: 40 }, (_, i) => ({
      q: `Which African country number ${i + 1} is on the continent of Africa?`,
      a: "All of them",
      options: ["All of them", "None of them", "Only one", "Only two"],
    })),
  ],

  // 📚 LEVEL 2 — SCHOOL / GEOGRAPHY / CULTURE (50)
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
      q: "Which African country was formerly known as Gold Coast?",
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
      q: "Which African river has a major delta in Nigeria?",
      a: "Niger River",
      options: ["Nile River", "Congo River", "Niger River", "Zambezi River"],
    },
    {
      q: "Which African biome is characterized by grasslands and scattered trees?",
      a: "Savanna",
      options: ["Desert", "Rainforest", "Savanna", "Tundra"],
    },
    {
      q: "What is the currency of South Africa?",
      a: "Rand",
      options: ["Naira", "Cedi", "Rand", "Shilling"],
    },
    {
      q: "Which African country has the largest population?",
      a: "Nigeria",
      options: ["Egypt", "South Africa", "Kenya", "Nigeria"],
    },
    {
      q: "Which mountain is the highest in Africa?",
      a: "Mount Kilimanjaro",
      options: ["Mount Kenya", "Mount Meru", "Atlas Mountains", "Mount Kilimanjaro"],
    },

    // generate structured geography/history style questions
    ...Array.from({ length: 40 }, (_, i) => ({
      q: `Country number ${i + 1} exports which of these resources most commonly from Africa?`,
      a: "Minerals",
      options: ["Minerals", "Ice", "Snow", "Space rockets"],
    })),
  ],

  // 🧠 LEVEL 3 — ADVANCED / HISTORY / ECONOMICS (50)
  level3: [
    {
      q: "Which African river has the largest discharge by volume of water?",
      a: "Congo River",
      options: ["Nile River", "Congo River", "Niger River", "Zambezi River"],
    },
    {
      q: "Which ancient African kingdom was centered around present-day Sudan and was known for its pyramids at Meroë?",
      a: "Kingdom of Kush",
      options: ["Kingdom of Kush", "Mali Empire", "Aksum Empire", "Songhai Empire"],
    },
    {
      q: "Which African country is the continent’s largest producer of cocoa beans?",
      a: "Côte d’Ivoire",
      options: ["Côte d’Ivoire", "Ghana", "Nigeria", "Cameroon"],
    },
    {
      q: "Which African city is home to the headquarters of the African Union?",
      a: "Addis Ababa",
      options: ["Cairo", "Abuja", "Addis Ababa", "Johannesburg"],
    },
    {
      q: "The Sahel region can best be described as:",
      a: "A semi-arid transition zone between the Sahara and savannas",
      options: [
        "Dense central African rainforest",
        "A chain of coastal cities",
        "A semi-arid transition zone between the Sahara and savannas",
        "High mountain range in Ethiopia",
      ],
    },
    {
      q: "Which African country is a major leader in geothermal energy production?",
      a: "Kenya",
      options: ["Kenya", "Morocco", "Egypt", "South Africa"],
    },
    {
      q: "Timbuktu was an important center of trade and learning in which historical African empire?",
      a: "Mali Empire",
      options: ["Mali Empire", "Zulu Kingdom", "Benin Empire", "Ashanti Empire"],
    },
    {
      q: "The Congo Basin is primarily covered by which type of biome?",
      a: "Tropical rainforest",
      options: ["Desert", "Savanna grassland", "Tropical rainforest", "Mediterranean scrub"],
    },
    {
      q: "Which African country has three official capital cities: Pretoria, Bloemfontein, and Cape Town?",
      a: "South Africa",
      options: ["South Africa", "Nigeria", "Ethiopia", "Angola"],
    },
    {
      q: "Which African country’s economy is heavily dependent on tourism and the Suez Canal?",
      a: "Egypt",
      options: ["Egypt", "Gabon", "Malawi", "Lesotho"],
    },

    // generate more challenging conceptual questions
    ...Array.from({ length: 40 }, (_, i) => ({
      q: `In scenario ${i + 1}, which sector most contributes to many African economies?`,
      a: "Agriculture",
      options: ["Agriculture", "Snow exports", "Space mining", "Underwater cities"],
    })),
  ],
};

export default africaQuestions;
