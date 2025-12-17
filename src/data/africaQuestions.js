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
