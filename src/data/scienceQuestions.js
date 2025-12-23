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

    // More variety (animals, senses, weather, materials, states of matter)
    { q: "Which animal says 'Moo'?", a: "Cow", options: ["Cow", "Cat", "Dog", "Sheep"] },
    { q: "Which sense helps you see?", a: "Sight", options: ["Sight", "Smell", "Taste", "Touch"] },
    { q: "What do we wear when it rains?", a: "Raincoat", options: ["Raincoat", "Sunglasses", "Scarf", "Helmet"] },
    { q: "What is ice?", a: "Solid", options: ["Gas", "Liquid", "Solid", "Plasma"] },
    { q: "What is steam?", a: "Gas", options: ["Gas", "Liquid", "Solid", "Rock"] },
    { q: "What part of a plant is usually green?", a: "Leaf", options: ["Leaf", "Root", "Flower", "Seed"] },
    { q: "Which star is closest to Earth?", a: "The Sun", options: ["The Sun", "Sirius", "Polaris", "Betelgeuse"] },
    { q: "What do bees collect from flowers?", a: "Nectar", options: ["Nectar", "Water", "Leaves", "Bark"] },
    { q: "What protects your head?", a: "Skull", options: ["Skull", "Heart", "Lungs", "Stomach"] },
    { q: "What do we call baby frogs?", a: "Tadpoles", options: ["Tadpoles", "Puppies", "Chicks", "Kittens"] },
    ...[
      { q: "Which organ helps you think?", a: "Brain", options: ["Brain", "Lungs", "Kidneys", "Skin"] },
      { q: "What do we use to smell?", a: "Nose", options: ["Nose", "Ears", "Eyes", "Mouth"] },
      { q: "Which animal can fly?", a: "Bird", options: ["Bird", "Fish", "Worm", "Snail"] },
      { q: "What do fish use to breathe?", a: "Gills", options: ["Gills", "Lungs", "Skin", "Leaves"] },
      { q: "What makes a rainbow?", a: "Light", options: ["Light", "Sound", "Wind", "Heat"] },
      { q: "What do you call young plants?", a: "Seedlings", options: ["Seedlings", "Eggs", "Pebbles", "Clouds"] },
      { q: "Where do penguins live mostly?", a: "Antarctica", options: ["Antarctica", "Sahara", "Amazon", "Arctic"] },
      { q: "Which is a source of light?", a: "Lamp", options: ["Lamp", "Chair", "Spoon", "Book"] },
      { q: "What is milk?", a: "Liquid", options: ["Solid", "Liquid", "Gas", "Metal"] },
      { q: "What do we breathe out?", a: "Carbon dioxide", options: ["Carbon dioxide", "Oxygen", "Hydrogen", "Helium"] },
    ],
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

    // Variety: energy, life cycles, ecosystems, body systems, earth science
    { q: "What gas is needed for burning?", a: "Oxygen", options: ["Oxygen", "Nitrogen", "Helium", "Neon"] },
    { q: "What are producers in a food chain?", a: "Plants", options: ["Plants", "Herbivores", "Carnivores", "Decomposers"] },
    { q: "Water cycle: vapor to clouds is?", a: "Condensation", options: ["Evaporation", "Condensation", "Precipitation", "Runoff"] },
    { q: "Which carries blood away from heart?", a: "Arteries", options: ["Arteries", "Veins", "Capillaries", "Nerves"] },
    { q: "What type of energy is stored in food?", a: "Chemical", options: ["Chemical", "Solar", "Thermal", "Nuclear"] },
    { q: "What do magnets attract strongly?", a: "Iron", options: ["Iron", "Wood", "Plastic", "Glass"] },
    { q: "Which organ filters blood?", a: "Kidneys", options: ["Kidneys", "Liver", "Stomach", "Lungs"] },
    { q: "What are clouds made of?", a: "Water droplets", options: ["Water droplets", "Smoke", "Dust", "Ice only"] },
    { q: "Energy that travels in waves?", a: "Light", options: ["Light", "Friction", "Gravity", "Mass"] },
    { q: "Which is NOT a renewable source?", a: "Coal", options: ["Solar", "Wind", "Coal", "Hydro"] },
    { q: "What animal group lays eggs and has feathers?", a: "Birds", options: ["Mammals", "Birds", "Reptiles", "Amphibians"] },
    { q: "What is Earth's outermost layer?", a: "Crust", options: ["Core", "Mantle", "Crust", "Atmosphere"] },
    { q: "What do decomposers do?", a: "Break down dead matter", options: ["Make food", "Break down dead matter", "Hunt", "Store water"] },
    { q: "Heat moves from?", a: "Hot to cold", options: ["Cold to hot", "Hot to cold", "Both", "Neither"] },
    { q: "Which simple machine is a see-saw?", a: "Lever", options: ["Lever", "Pulley", "Wedge", "Screw"] },
    { q: "Earth spins around its?", a: "Axis", options: ["Axis", "Equator", "Orbit", "Pole"] },
    { q: "Which is a vertebrate?", a: "Frog", options: ["Frog", "Earthworm", "Jellyfish", "Starfish"] },
    { q: "Which vitamin do we get from sunlight?", a: "Vitamin D", options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"] },
    { q: "What is measured by a thermometer?", a: "Temperature", options: ["Temperature", "Mass", "Length", "Speed"] },
    { q: "What causes seasons?", a: "Tilt of Earth's axis", options: ["Tilt of Earth's axis", "Distance to Sun", "Moon's phases", "Clouds"] },
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

    // More advanced concepts: genetics, chemistry, physics, astronomy, ecology
    { q: "What carries genetic information?", a: "DNA", options: ["DNA", "RNA", "Lipid", "Protein"] },
    { q: "pH less than 7 indicates?", a: "Acid", options: ["Acid", "Base", "Neutral", "Salt"] },
    { q: "Force equals mass times?", a: "Acceleration", options: ["Speed", "Velocity", "Acceleration", "Momentum"] },
    { q: "What is the SI unit of force?", a: "Newton", options: ["Joule", "Newton", "Watt", "Pascal"] },
    { q: "The process of cell division for growth?", a: "Mitosis", options: ["Meiosis", "Mitosis", "Fusion", "Fission"] },
    { q: "Which planet has the most moons?", a: "Saturn", options: ["Mars", "Jupiter", "Saturn", "Earth"] },
    { q: "What is the hardest natural substance?", a: "Diamond", options: ["Gold", "Iron", "Diamond", "Quartz"] },
    { q: "What gas makes up most of air?", a: "Nitrogen", options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Argon"] },
    { q: "Energy of motion is called?", a: "Kinetic", options: ["Potential", "Kinetic", "Thermal", "Chemical"] },
    { q: "Which organelle packages proteins?", a: "Golgi body", options: ["Ribosome", "Golgi body", "Nucleus", "Lysosome"] },
    { q: "What type of bond transfers electrons?", a: "Ionic", options: ["Ionic", "Covalent", "Metallic", "Hydrogen"] },
    { q: "What is the unit of electric current?", a: "Ampere", options: ["Volt", "Ohm", "Ampere", "Watt"] },
    { q: "Which wave needs a medium to travel?", a: "Sound", options: ["Light", "Radio", "Sound", "X-ray"] },
    { q: "What is biodiversity?", a: "Variety of life", options: ["Variety of life", "Plant growth", "Soil type", "Climate"] },
    { q: "What causes tides?", a: "Moon's gravity", options: ["Sunlight", "Moon's gravity", "Wind", "Earthquakes"] },
  ],
};

export default scienceQuestions;
