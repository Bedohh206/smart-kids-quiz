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

    // More variety: elements, reactions, compounds
    { q: "Which state of matter flows easily?", a: "Liquid", options: ["Liquid", "Solid", "Gas", "Metal"] },
    { q: "What is the chemical symbol for Gold?", a: "Au", options: ["Go", "Gd", "Au", "G"] },
    { q: "What is the chemical symbol for Iron?", a: "Fe", options: ["Fe", "Ir", "I", "Fn"] },
    { q: "What is the most abundant element in the universe?", a: "Hydrogen", options: ["Oxygen", "Hydrogen", "Carbon", "Helium"] },
    { q: "What is a mixture where components are visibly separate?", a: "Heterogeneous mixture", options: ["Heterogeneous mixture", "Homogeneous mixture", "Solution", "Compound"] },
    { q: "What is the chemical formula for methane?", a: "CH₄", options: ["C₂H₆", "CH₄", "CH₂", "C₃H₈"] },
    { q: "What is an element that is a good conductor of electricity?", a: "Copper", options: ["Copper", "Sulfur", "Nitrogen", "Phosphorus"] },
    { q: "What number of electrons does Oxygen have?", a: "8", options: ["6", "8", "10", "12"] },
    { q: "What is rust an example of?", a: "Oxidation", options: ["Oxidation", "Reduction", "Melting", "Sublimation"] },
    { q: "What makes something acidic?", a: "High concentration of H+ ions", options: ["High concentration of H+ ions", "Low pH", "Sour taste", "Orange color"] },
    { q: "What is a compound?", a: "Substance with two or more elements", options: ["Substance with two or more elements", "Single element", "Pure substance", "Mixture"] },
    { q: "What is the symbol for Carbon?", a: "C", options: ["C", "Co", "Ca", "Cr"] },
    { q: "Which state of matter has fixed shape?", a: "Solid", options: ["Solid", "Liquid", "Gas", "Plasma"] },
    { q: "What does melting mean?", a: "Solid turning to liquid", options: ["Solid turning to liquid", "Liquid to gas", "Gas to solid", "Solid to gas"] },
    { q: "What is the boiling point of water?", a: "100°C", options: ["0°C", "50°C", "100°C", "200°C"] },
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

    // More variety: bonding, reactions, acids/bases
    { q: "What type of reaction absorbs heat?", a: "Endothermic", options: ["Endothermic", "Exothermic", "Neutral", "Physical"] },
    { q: "What is a base's opposite?", a: "Acid", options: ["Acid", "Salt", "Metal", "Water"] },
    { q: "What is the pH range of bases?", a: "8-14", options: ["0-6", "7", "8-14", "1-7"] },
    { q: "What happens when an acid and base react?", a: "They neutralize", options: ["They neutralize", "They ignite", "They freeze", "They separate"] },
    { q: "What element makes up all organic compounds?", a: "Carbon", options: ["Carbon", "Oxygen", "Nitrogen", "Hydrogen"] },
    { q: "What is the chemical formula for ammonia?", a: "NH₃", options: ["NO₂", "NH₃", "N₂H₄", "N₂H₂"] },
    { q: "Which gas is colorless and odorless?", a: "Nitrogen", options: ["Chlorine", "Nitrogen", "Fluorine", "Bromine"] },
    { q: "What does an oxidation reaction involve?", a: "Loss of electrons", options: ["Loss of electrons", "Gain of water", "Heat release only", "Color change"] },
    { q: "What is an isotope?", a: "Atom with different number of neutrons", options: ["Atom with different number of neutrons", "Different element", "Charged atom", "Compound"] },
    { q: "What is the main component of air?", a: "Nitrogen", options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"] },
    { q: "What forms when atoms share electrons?", a: "Covalent bond", options: ["Covalent bond", "Ionic bond", "Metallic bond", "Hydrogen bond"] },
    { q: "What is a nonmetal?", a: "Poor conductor of electricity", options: ["Poor conductor of electricity", "Good conductor", "Shiny element", "Malleable"] },
    { q: "What is a salt?", a: "Product of acid-base reaction", options: ["Product of acid-base reaction", "Sodium chloride only", "Ocean substance", "Seasoning"] },
    { q: "What does neutralization produce?", a: "Salt and water", options: ["Salt and water", "Acid", "Base", "Hydrogen"] },
    { q: "What is an exothermic reaction?", a: "Releases energy as heat", options: ["Releases energy as heat", "Absorbs energy", "No energy change", "Changes color"] },
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

    // More variety: thermodynamics, kinetics, organic chemistry
    { q: "What type of reaction releases heat?", a: "Exothermic", options: ["Exothermic", "Endothermic", "Neutralization", "Oxidation"] },
    { q: "What is Le Chatelier's principle?", a: "System shifts to counteract change", options: ["System shifts to counteract change", "Equilibrium never changes", "Entropy increases always", "Reactants are unchanged"] },
    { q: "What is the first law of thermodynamics?", a: "Energy is conserved", options: ["Energy is conserved", "Entropy always increases", "All reactions are exothermic", "Heat flows downhill"] },
    { q: "What is a transition metal?", a: "Element with d electrons", options: ["Element with d electrons", "Alkali metal", "Halogen", "Noble gas"] },
    { q: "What is a neutralization reaction?", a: "Acid + base → salt + water", options: ["Acid + base → salt + water", "Heat release only", "Color change", "Combustion"] },
    { q: "What is fractional distillation used for?", a: "Separating crude oil", options: ["Separating crude oil", "Creating molecules", "Measuring temperature", "Testing pH"] },
    { q: "What is a polymer?", a: "Large molecule of repeated units", options: ["Large molecule of repeated units", "Single atom", "Inert gas", "Simple compound"] },
    { q: "What is dehydration synthesis?", a: "Combining molecules by removing water", options: ["Combining molecules by removing water", "Breaking bonds", "Adding water", "Losing heat"] },
    { q: "What is kinetic energy in chemistry?", a: "Energy of moving particles", options: ["Energy of moving particles", "Energy at rest", "Heat energy only", "Light energy"] },
    { q: "What happens in a redox reaction?", a: "Electrons are transferred", options: ["Electrons are transferred", "Water is produced", "Heat is released", "Color changes"] },
    { q: "What is Avogadro's number?", a: "6.02 × 10²³", options: ["6.02 × 10²³", "3.14", "9.81", "1.6 × 10⁻¹⁹"] },
    { q: "What is combustion?", a: "Burning in oxygen", options: ["Burning in oxygen", "Mixing with water", "Freezing process", "Melting process"] },
    { q: "What is a catalyst?", a: "Speeds up reaction without being used", options: ["Speeds up reaction without being used", "Slows reactions", "Stops reactions", "Changes products"] },
    { q: "What is electronegativity?", a: "Atom's ability to attract electrons", options: ["Atom's ability to attract electrons", "Electric charge", "Heat capacity", "Boiling point"] },
    { q: "What is hydration?", a: "Water molecules surrounding solute", options: ["Water molecules surrounding solute", "Adding hydrogen", "Removing water", "Adding acid"] },
  ],
};

export default chemistryQuestions;
