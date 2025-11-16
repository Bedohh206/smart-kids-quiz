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
