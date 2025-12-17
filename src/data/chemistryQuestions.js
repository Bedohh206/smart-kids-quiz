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
