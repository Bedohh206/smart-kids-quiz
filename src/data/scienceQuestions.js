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
