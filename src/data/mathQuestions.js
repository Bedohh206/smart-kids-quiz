// Mathematics Questions - Two Modes: Kids & Advanced
// Kids Mode: Beginner Level - Basic arithmetic
// Advanced Mode: Advanced Level - Pre-algebra & advanced concepts

// Helper builders to increase variety without randomness
const addQ = (a, b) => ({
  q: `What is ${a} + ${b}?`,
  a: String(a + b),
  options: [String(a + b - 1), String(a + b), String(a + b + 1), String(a + b + 2)],
});
const subQ = (a, b) => ({
  q: `What is ${a} - ${b}?`,
  a: String(a - b),
  options: [String(a - b - 1), String(a - b), String(a - b + 1), String(a - b + 2)],
});
const multQ = (a, b) => ({
  q: `What is ${a} × ${b}?`,
  a: String(a * b),
  options: [String(a * b - a), String(a * b), String(a * b + a), String(a * b + b)],
});
const divQ = (a, b) => ({
  q: `What is ${a} ÷ ${b}?`,
  a: String(a / b),
  options: [String(a / b - 1), String(a / b), String(a / b + 1), String(a / b + 2)],
});
const percQ = (p, n) => ({
  q: `What is ${p}% of ${n}?`,
  a: String((p * n) / 100),
  options: [String((p * n) / 100 - p / 10), String((p * n) / 100), String((p * n) / 100 + p / 10), String((p * n) / 100 + p / 5)],
});

const mathQuestions = {
  // =========================================
  // KIDS MODE - Beginner Level
  // =========================================
  
  // ------------------------------
  // KIDS LEVEL 1 — EASY
  // ------------------------------
  kids_level1: [
    // Starter set
    addQ(2, 3),
    subQ(10, 4),
    addQ(5, 5),
    subQ(9, 2),
    addQ(6, 3),
    addQ(4, 4),
    subQ(7, 3),
    subQ(8, 5),
    addQ(3, 6),
    addQ(1, 9),

    // Near-doubles and 10s friends
    addQ(7, 2),
    addQ(8, 1),
    subQ(6, 1),
    subQ(12, 4),
    addQ(3, 4),
    addQ(10, 0),
    subQ(5, 2),
    addQ(4, 3),
    addQ(2, 7),
    subQ(9, 3),

    // Mix of small sums and differences
    ...Array.from({ length: 30 }, (_, i) => {
      const a = 2 + (i % 9); // 2..10
      const b = 1 + ((i * 2) % 9); // 1..9 var
      return i % 2 === 0 ? addQ(a, b) : subQ(a + b, a);
    }),
  ],

  // ------------------------------
  // KIDS LEVEL 2 — MEDIUM (Times tables, basic division, two-step)
  // ------------------------------
  kids_level2: [
    // Basic multiplication
    multQ(3, 4),
    multQ(5, 6),
    multQ(7, 3),
    multQ(4, 8),
    multQ(6, 7),
    multQ(9, 4),
    multQ(8, 6),
    multQ(5, 9),
    
    // Basic division
    divQ(12, 3),
    divQ(15, 5),
    divQ(18, 6),
    divQ(21, 7),
    divQ(24, 8),
    divQ(32, 4),
    divQ(45, 9),
    divQ(28, 4),

    // Times tables 2-10
    ...Array.from({ length: 20 }, (_, i) => {
      const base = 2 + (i % 9); // 2..10
      const m = 2 + Math.floor(i / 3); // 2..8
      return i % 2 === 0 ? multQ(base, m) : divQ(base * m, base);
    }),

    // Simple two-step problems
    { q: "What is 5 + 4 × 2?", a: "13", options: ["11", "13", "14", "18"] },
    { q: "What is 10 - 6 ÷ 2?", a: "7", options: ["2", "4", "7", "8"] },
    { q: "What is 3 × 4 + 5?", a: "17", options: ["15", "17", "19", "20"] },
    { q: "What is 20 ÷ 4 + 3?", a: "8", options: ["6", "7", "8", "9"] },
    { q: "What is 8 × 2 - 6?", a: "10", options: ["8", "10", "12", "14"] },

    ...Array.from({ length: 10 }, (_, i) => {
      const a = 10 + (i % 15);
      const b = 2 + (i % 8);
      return addQ(a, b);
    }),
  ].slice(0, 50),

  // ------------------------------
  // KIDS LEVEL 3 — HARD (Larger numbers, order of operations, intro to advanced concepts)
  // ------------------------------
  kids_level3: [
    // Larger multiplication and division
    multQ(12, 8),
    multQ(11, 9),
    multQ(15, 6),
    divQ(72, 9),
    divQ(96, 8),
    divQ(84, 7),
    multQ(13, 5),
    multQ(16, 4),
    divQ(108, 12),
    divQ(144, 12),

    // Order of operations
    { q: "Solve: 15 + (8 × 2)", a: "31", options: ["30", "31", "32", "33"] },
    { q: "Solve: 50 - (6 × 3)", a: "32", options: ["30", "32", "34", "36"] },
    { q: "Solve: (12 + 8) ÷ 4", a: "5", options: ["4", "5", "6", "7"] },
    { q: "Solve: 7 × (5 - 2)", a: "21", options: ["19", "21", "23", "25"] },
    { q: "Solve: 40 ÷ 5 + 6", a: "14", options: ["12", "14", "16", "18"] },

    // Introduction to squares and basic concepts
    { q: "What is 5 × 5?", a: "25", options: ["20", "25", "30", "35"] },
    { q: "What is 6 × 6?", a: "36", options: ["30", "36", "42", "48"] },
    { q: "What is 7 × 7?", a: "49", options: ["42", "49", "56", "63"] },
    { q: "What is 8 × 8?", a: "64", options: ["56", "64", "72", "80"] },
    { q: "What is 9 × 9?", a: "81", options: ["72", "81", "90", "99"] },
    { q: "What is 10 × 10?", a: "100", options: ["90", "100", "110", "120"] },

    // Simple percentages
    { q: "What is 10% of 50?", a: "5", options: ["4", "5", "6", "7"] },
    { q: "What is 20% of 100?", a: "20", options: ["15", "20", "25", "30"] },
    { q: "What is 50% of 80?", a: "40", options: ["35", "40", "45", "50"] },
    { q: "What is 25% of 60?", a: "15", options: ["12", "15", "18", "20"] },

    // Basic fractions
    { q: "What is 1/2 of 20?", a: "10", options: ["8", "10", "12", "14"] },
    { q: "What is 1/4 of 16?", a: "4", options: ["2", "4", "6", "8"] },
    { q: "What is 1/3 of 15?", a: "5", options: ["3", "5", "7", "9"] },
    { q: "What is 1/5 of 25?", a: "5", options: ["3", "5", "7", "9"] },

    // Word problems
    { q: "If you have 3 bags with 8 apples each, how many apples in total?", a: "24", options: ["21", "24", "27", "30"] },
    { q: "A pizza is cut into 8 slices. You eat 3. How many left?", a: "5", options: ["4", "5", "6", "7"] },
    { q: "If a toy costs $12 and you have $50, how much change after buying it?", a: "38", options: ["36", "38", "40", "42"] },

    ...Array.from({ length: 15 }, (_, i) => {
      const base = 8 + (i % 7); // 8..14
      const m = 3 + (i % 9); // 3..11
      return i % 2 === 0 ? multQ(base, m) : divQ(base * m, base);
    }),
  ].slice(0, 50),

  // =========================================
  // ADVANCED MODE - Advanced Level
  // =========================================
  
  // ------------------------------
  // ADVANCED LEVEL 1 — EASY (Larger numbers, multi-digit)
  // ------------------------------
  advanced_level1: [
    // Multi-digit addition and subtraction
    addQ(24, 37),
    addQ(56, 28),
    subQ(95, 47),
    subQ(83, 39),
    addQ(67, 54),
    multQ(11, 9),
    multQ(13, 7),
    divQ(88, 8),
    divQ(96, 12),
    addQ(145, 76),

    // Fractions and decimals introduction
    { q: "What is 1/2 + 1/4?", a: "3/4", options: ["1/2", "2/4", "3/4", "1"] },
    { q: "What is 0.5 + 0.3?", a: "0.8", options: ["0.7", "0.8", "0.9", "1.0"] },
    { q: "What is 1/3 of 12?", a: "4", options: ["3", "4", "5", "6"] },
    { q: "Convert 1/2 to decimal", a: "0.5", options: ["0.3", "0.5", "0.6", "0.7"] },
    { q: "Which is larger: 0.6 or 0.59?", a: "0.6", options: ["0.59", "0.6", "Same", "Cannot compare"] },

    // Larger multiplication
    ...Array.from({ length: 20 }, (_, i) => {
      const a = 11 + (i % 10); // 11..20
      const b = 2 + (i % 9); // 2..10
      return multQ(a, b);
    }),

    // Word problems
    { q: "If a book costs $15 and you buy 3 books, how much do you pay?", a: "45", options: ["40", "45", "50", "55"] },
    { q: "Sarah has 84 candies. She gives 36 to her friend. How many does she have left?", a: "48", options: ["42", "46", "48", "50"] },
    { q: "A rectangle has length 12cm and width 8cm. What is its perimeter?", a: "40", options: ["36", "40", "44", "48"] },
    
    ...Array.from({ length: 15 }, (_, i) => {
      const a = 45 + (i % 55); // 45..99
      const b = 12 + ((i * 3) % 28); // 12..39
      return i % 2 === 0 ? addQ(a, b) : subQ(a + b, b);
    }),
  ],

  // ------------------------------
  // ADVANCED LEVEL 2 — MEDIUM (Complex operations, fractions, percentages)
  // ------------------------------
  advanced_level2: [
    // Advanced multiplication and division
    multQ(24, 15),
    multQ(18, 23),
    divQ(144, 16),
    divQ(225, 15),
    multQ(35, 12),
    divQ(324, 18),

    // Fractions operations
    { q: "What is 2/3 + 1/6?", a: "5/6", options: ["3/6", "4/6", "5/6", "6/6"] },
    { q: "What is 3/4 - 1/2?", a: "1/4", options: ["1/8", "1/4", "1/2", "2/4"] },
    { q: "What is 2/5 × 3?", a: "6/5", options: ["5/5", "6/5", "6/15", "2/15"] },
    { q: "Simplify: 12/16", a: "3/4", options: ["6/8", "3/4", "4/5", "2/3"] },
    { q: "What is 5/8 as a decimal?", a: "0.625", options: ["0.525", "0.625", "0.725", "0.825"] },

    // Percentages
    percQ(35, 200),
    percQ(45, 180),
    percQ(18, 250),
    percQ(66, 150),
    { q: "What percentage is 45 out of 180?", a: "25", options: ["20", "25", "30", "35"] },
    { q: "Increase 80 by 25%", a: "100", options: ["90", "95", "100", "105"] },
    { q: "Decrease 120 by 15%", a: "102", options: ["100", "102", "105", "108"] },

    // Order of operations (PEMDAS/BODMAS)
    { q: "Solve: 24 ÷ (3 + 5) × 2", a: "6", options: ["4", "6", "8", "10"] },
    { q: "Solve: 18 + 6 ÷ 2 - 3", a: "18", options: ["15", "18", "21", "24"] },
    { q: "Solve: (45 - 15) ÷ 6 + 7", a: "12", options: ["10", "12", "14", "16"] },
    { q: "Solve: 8 × (4 + 3) - 12", a: "44", options: ["40", "44", "48", "52"] },

    // Mixed word problems
    { q: "A car travels 65 km/h for 3 hours. How far does it go?", a: "195", options: ["180", "195", "210", "225"] },
    { q: "If 5 apples cost $8, how much do 12 apples cost?", a: "19.2", options: ["18", "19.2", "20", "21"] },
    { q: "A circle has radius 7cm. What is its area? (Use π≈3.14)", a: "153.86", options: ["143.86", "153.86", "163.86", "173.86"] },

    ...Array.from({ length: 15 }, (_, i) => {
      const a = 15 + (i % 20);
      const b = 8 + (i % 12);
      const c = 2 + (i % 5);
      return { 
        q: `Solve: (${a} × ${b}) ÷ ${c}`, 
        a: String(Math.floor((a * b) / c)), 
        options: [String(Math.floor((a * b) / c) - 2), String(Math.floor((a * b) / c)), String(Math.floor((a * b) / c) + 2), String(Math.floor((a * b) / c) + 4)] 
      };
    }),
  ].slice(0, 50),

  // ------------------------------
  // ADVANCED LEVEL 3 — HARD (Pre-algebra, advanced concepts, problem solving)
  // ------------------------------
  advanced_level3: [
    // Advanced squares, cubes, and roots
    { q: "What is 15²?", a: "225", options: ["200", "215", "225", "235"] },
    { q: "What is 20²?", a: "400", options: ["380", "390", "400", "410"] },
    { q: "What is √225?", a: "15", options: ["13", "14", "15", "16"] },
    { q: "What is √196?", a: "14", options: ["12", "13", "14", "15"] },
    { q: "What is 4³?", a: "64", options: ["54", "60", "64", "72"] },
    { q: "What is 5³?", a: "125", options: ["115", "120", "125", "130"] },
    { q: "What is ³√27?", a: "3", options: ["2", "3", "4", "5"] },
    { q: "What is ³√64?", a: "4", options: ["3", "4", "5", "6"] },

    // Complex fractions and decimals
    { q: "What is 3/8 + 5/12?", a: "19/24", options: ["8/20", "17/24", "19/24", "21/24"] },
    { q: "What is 7/9 - 2/3?", a: "1/9", options: ["1/12", "1/9", "2/9", "1/3"] },
    { q: "What is 2.75 × 4?", a: "11", options: ["10", "10.5", "11", "11.5"] },
    { q: "What is 15.6 ÷ 1.2?", a: "13", options: ["12", "12.5", "13", "13.5"] },
    { q: "Convert 7/8 to a percentage", a: "87.5", options: ["82.5", "85", "87.5", "90"] },

    // Ratios and proportions
    { q: "Simplify the ratio 24:36", a: "2:3", options: ["3:4", "2:3", "4:6", "6:9"] },
    { q: "If 3:5 = x:25, what is x?", a: "15", options: ["12", "15", "18", "20"] },
    { q: "A recipe uses 2 cups flour for 3 cups sugar. For 9 cups sugar, how much flour?", a: "6", options: ["5", "6", "7", "8"] },

    // LCM and GCD
    { q: "Find GCD of 36 and 48", a: "12", options: ["8", "10", "12", "14"] },
    { q: "Find GCD of 45 and 60", a: "15", options: ["10", "12", "15", "18"] },
    { q: "Find LCM of 12 and 18", a: "36", options: ["24", "30", "36", "42"] },
    { q: "Find LCM of 15 and 20", a: "60", options: ["50", "55", "60", "65"] },

    // Complex order of operations
    { q: "Solve: 5² - 3 × (8 - 2)", a: "7", options: ["5", "6", "7", "8"] },
    { q: "Solve: 100 ÷ (15 - 10) + 7²", a: "69", options: ["65", "67", "69", "71"] },
    { q: "Solve: (12 + 18) ÷ 6 × 4 - 5", a: "15", options: ["13", "15", "17", "19"] },
    { q: "Solve: 8 + 6² ÷ 4 - 2³", a: "9", options: ["7", "8", "9", "10"] },

    // Pre-algebra expressions
    { q: "If x = 5, what is 3x + 7?", a: "22", options: ["20", "22", "24", "26"] },
    { q: "If y = 8, what is 2y - 11?", a: "5", options: ["3", "5", "7", "9"] },
    { q: "Solve for x: x + 15 = 32", a: "17", options: ["15", "16", "17", "18"] },
    { q: "Solve for x: 3x = 27", a: "9", options: ["7", "8", "9", "10"] },
    { q: "Solve for x: x/4 = 12", a: "48", options: ["44", "46", "48", "50"] },

    // Advanced word problems
    { q: "A train travels 240 km in 3 hours. What is its average speed in km/h?", a: "80", options: ["75", "80", "85", "90"] },
    { q: "If you save $25 per week, how much will you have after 18 weeks?", a: "450", options: ["400", "425", "450", "475"] },
    { q: "A triangle has angles 45° and 65°. What is the third angle?", a: "70", options: ["65", "70", "75", "80"] },
    { q: "What is 18% of 350?", a: "63", options: ["59", "61", "63", "65"] },
    { q: "A shirt costs $48 after a 20% discount. What was the original price?", a: "60", options: ["55", "58", "60", "62"] },

    ...Array.from({ length: 10 }, (_, i) => {
      const n = 14 + i;
      return { q: `What is ${n}²?`, a: String(n * n), options: [String(n * n - 10), String(n * n - 5), String(n * n), String(n * n + 5)] };
    }),
  ].slice(0, 50),
};

export default mathQuestions;
