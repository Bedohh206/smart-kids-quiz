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

    // More variety: nutrition, safety, habits
    { q: "Which food is the healthiest choice?", a: "Fruits and vegetables", options: ["Candy", "Fruits and vegetables", "Chips", "Cookies"] },
    { q: "What should you do after exercise?", a: "Drink water and rest", options: ["Drink water and rest", "Eat candy", "Go to sleep", "Do more exercise"] },
    { q: "How often should you exercise per week?", a: "3-5 times", options: ["Once a week", "3-5 times", "Every day", "Rarely"] },
    { q: "What is a healthy breakfast?", a: "Oatmeal with fruit", options: ["Oatmeal with fruit", "Sugary cereal", "Fried food", "Candy"] },
    { q: "Which is NOT a symptom of stress?", a: "Happiness", options: ["Happiness", "Headache", "Sleep issues", "Stomach pain"] },
    { q: "What helps prevent cavities?", a: "Brushing teeth", options: ["Eating candy", "Brushing teeth", "Drinking soda", "Skipping meals"] },
    { q: "Which stretches your muscles before exercise?", a: "Warm-up", options: ["Warm-up", "Cooldown", "Sleep", "Eating"] },
    { q: "What is a healthy snack?", a: "Apple or almonds", options: ["Apple or almonds", "Chips", "Cookies", "Soda"] },
    { q: "How much water should you drink daily?", a: "6-8 glasses", options: ["1-2 glasses", "6-8 glasses", "10-12 glasses", "Just soda"] },
    { q: "What helps you feel less tired?", a: "Moving and exercising", options: ["Moving and exercising", "Staying still", "Eating sugar", "Watching TV"] },
    { q: "Which meal should never be skipped?", a: "Breakfast", options: ["Breakfast", "Lunch", "Snacks", "Dinner"] },
    { q: "What is sunscreen used for?", a: "Protect skin from UV rays", options: ["Protect skin from UV rays", "Keep you cool", "Hydrate skin", "Remove spots"] },
    { q: "How long should you brush teeth?", a: "2 minutes", options: ["30 seconds", "1 minute", "2 minutes", "5 minutes"] },
    { q: "What does stretching improve?", a: "Flexibility", options: ["Flexibility", "Speed", "Strength", "Energy"] },
    { q: "Which posture is correct for studying?", a: "Straight back and shoulders", options: ["Slouching", "Straight back and shoulders", "Leaning to one side", "Lying down"] },
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

    // More variety: anatomy, diseases, prevention
    { q: "What organ filters waste from the blood?", a: "Kidneys", options: ["Kidneys", "Heart", "Lungs", "Stomach"] },
    { q: "What is the result of poor diet and lack of exercise?", a: "Obesity", options: ["Obesity", "Dehydration", "Fatigue", "Anemia"] },
    { q: "Which disease affects the lungs?", a: "Asthma", options: ["Asthma", "Diabetes", "Arthritis", "Hemophilia"] },
    { q: "What type of exercise strengthens bones?", a: "Weight-bearing exercise", options: ["Weight-bearing exercise", "Swimming", "Reading", "Meditation"] },
    { q: "What causes common cold?", a: "Virus", options: ["Bacteria", "Virus", "Dust", "Cold air"] },
    { q: "How long does hand-washing prevent germs?", a: "Several hours", options: ["5 minutes", "30 minutes", "Several hours", "Permanently"] },
    { q: "What does the immune system fight?", a: "Infections and pathogens", options: ["Infections and pathogens", "Exercise", "Water", "Food"] },
    { q: "Which vitamin is made by the body in sunlight?", a: "Vitamin D", options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"] },
    { q: "What is healthy cholesterol called?", a: "HDL", options: ["LDL", "HDL", "Triglyceride", "Glucose"] },
    { q: "What is balanced diet?", a: "All food groups in right amounts", options: ["All food groups in right amounts", "Eating fruits only", "No carbs", "Protein only"] },
    { q: "What organ digests food?", a: "Stomach", options: ["Lungs", "Heart", "Stomach", "Brain"] },
    { q: "Which vitamin boosts immunity?", a: "Vitamin C", options: ["Vitamin A", "Vitamin C", "Vitamin E", "Vitamin K"] },
    { q: "What is dehydration?", a: "Lack of water in body", options: ["Lack of water in body", "Too much water", "Excess salt", "Low sugar"] },
    { q: "Which mineral helps bones?", a: "Calcium", options: ["Iron", "Calcium", "Zinc", "Magnesium"] },
    { q: "What helps fight infections?", a: "Good hygiene", options: ["Good hygiene", "Staying dirty", "No sleep", "No exercise"] },
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

    // More variety: systems, medical concepts, health conditions
    { q: "Which system regulates hormones in the body?", a: "Endocrine system", options: ["Endocrine system", "Respiratory system", "Skeletal system", "Urinary system"] },
    { q: "What is the normal body temperature?", a: "98.6°F (37°C)", options: ["96°F", "98.6°F (37°C)", "100°F", "102°F"] },
    { q: "Which blood type is universal donor?", a: "O negative", options: ["O negative", "A positive", "AB positive", "B positive"] },
    { q: "What does BMI measure?", a: "Body mass relative to height", options: ["Heart rate", "Body mass relative to height", "Lung capacity", "Bone density"] },
    { q: "Which gland produces insulin?", a: "Pancreas", options: ["Pancreas", "Liver", "Thyroid", "Pituitary"] },
    { q: "What is the effect of anemia?", a: "Reduced oxygen in blood", options: ["Reduced oxygen in blood", "High blood sugar", "Weak bones", "Weak immunity"] },
    { q: "Which vitamin prevents scurvy?", a: "Vitamin C", options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin K"] },
    { q: "What is hypertension?", a: "High blood pressure", options: ["High cholesterol", "Low blood sugar", "High blood pressure", "Low oxygen"] },
    { q: "Which mineral strengthens teeth and bones?", a: "Calcium", options: ["Iron", "Calcium", "Zinc", "Magnesium"] },
    { q: "What is a resting heart rate?", a: "60-100 beats per minute", options: ["40-50 bpm", "60-100 bpm", "120-150 bpm", "200+ bpm"] },
    { q: "What is metabolism?", a: "Chemical processes in body", options: ["Chemical processes in body", "Muscle growth", "Fat storage", "Energy loss"] },
    { q: "Which protein helps carry oxygen?", a: "Hemoglobin", options: ["Hemoglobin", "Collagen", "Insulin", "Antibodies"] },
    { q: "What is inflammation?", a: "Body's response to injury", options: ["Body's response to injury", "Loss of heat", "Muscle fatigue", "Bone loss"] },
    { q: "What reduces risk of heart disease?", a: "Regular exercise", options: ["Regular exercise", "High stress", "Smoking", "Poor diet"] },
    { q: "Which organ filters blood?", a: "Kidneys", options: ["Lungs", "Liver", "Kidneys", "Heart"] },
  ],
};

export default healthQuestions;
