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
