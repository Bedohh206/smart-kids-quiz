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
  // KIDS LEVEL 2 — MEDIUM
  // ------------------------------
  kids_level2: [
    multQ(12, 2),
    divQ(15, 3),
    divQ(18, 2),
    multQ(7, 4),
    multQ(9, 5),
    divQ(14, 2),
    multQ(6, 6),
    multQ(5, 9),
    multQ(8, 3),
    divQ(20, 4),

    // Times tables 3–12 and matching divisions
    ...Array.from({ length: 20 }, (_, i) => {
      const base = 3 + (i % 10); // 3..12
      const m = 2 + Math.floor(i / 2); // 2..11
      return i % 2 === 0 ? multQ(base, m) : divQ(base * m, base);
    }),

    // Two-step ops and easy percents
    ...[
      { a: 15, b: 8, c: 2 },
      { a: 30, b: 6, c: 3 },
      { a: 25, b: 5, c: 4 },
      { a: 18, b: 2, c: 5 },
      { a: 40, b: 4, c: 5 },
    ].flatMap(({ a, b, c }) => [
      { q: `Solve: ${a} + (${b} × ${c})`, a: String(a + b * c), options: [String(a + b * c - b), String(a + b * c), String(a + b * c + c), String(a + b * c + b)] },
      { q: `Solve: (${a} - ${b}) ÷ ${c}`, a: String((a - b) / c), options: [String((a - b) / c - 1), String((a - b) / c), String((a - b) / c + 1), String((a - b) / c + 2)] },
    ]),

    percQ(10, 90),
    percQ(20, 150),
    percQ(25, 80),
    percQ(50, 60),
    percQ(30, 70),
  ].slice(0, 50),

  // ------------------------------
  // KIDS LEVEL 3 — HARD
  // ------------------------------
  kids_level3: [
    { q: "Solve: 15 + (8 × 2)", a: "31", options: ["30", "31", "32", "33"] },
    { q: "Solve: 50 - (6 × 3)", a: "32", options: ["33", "34", "32", "30"] },
    { q: "What is 144 ÷ 12?", a: "12", options: ["10", "11", "12", "13"] },
    { q: "What is 8²?", a: "64", options: ["48", "56", "64", "72"] },
    { q: "What is the square root of 81?", a: "9", options: ["6", "7", "8", "9"] },
    { q: "Solve: 3(4 + 5)", a: "27", options: ["24", "26", "27", "30"] },
    { q: "Solve: 100 ÷ 4", a: "25", options: ["20", "25", "30", "35"] },
    { q: "What is 12 × 12?", a: "144", options: ["132", "140", "144", "150"] },
    { q: "What is 25% of 80?", a: "20", options: ["10", "20", "30", "40"] },
    { q: "Solve: 3² + 4²", a: "25", options: ["18", "20", "25", "30"] },

    // Squares / roots / percentages / GCD / order of ops
    ...[5, 6, 7, 9, 11, 13].map((n) => ({ q: `What is ${n}²?`, a: String(n * n), options: [String(n * n - n), String(n * n), String(n * n + n), String(n * n + 2 * n)] })),
    ...[49, 64, 100, 121, 144].map((n) => ({ q: `What is √${n}?`, a: String(Math.round(Math.sqrt(n))), options: [String(Math.round(Math.sqrt(n)) - 1), String(Math.round(Math.sqrt(n))), String(Math.round(Math.sqrt(n)) + 1), String(Math.round(Math.sqrt(n)) + 2)] })),
    percQ(15, 200),
    percQ(12, 150),
    percQ(40, 90),
    percQ(60, 50),
    percQ(75, 80),
    { q: "Find GCD of 18 and 24", a: "6", options: ["4", "6", "8", "12"] },
    { q: "Find GCD of 21 and 28", a: "7", options: ["3", "5", "7", "14"] },
    { q: "Solve: (18 ÷ 3) + 4 × 2", a: "14", options: ["12", "14", "16", "18"] },
    { q: "Solve: 50% of 120 + 3²", a: "69", options: ["60", "69", "72", "78"] },
    { q: "Convert 1/4 to decimal", a: "0.25", options: ["0.2", "0.25", "0.3", "0.4"] },
    { q: "Convert 3/5 to decimal", a: "0.6", options: ["0.5", "0.6", "0.65", "0.7"] },
    { q: "What is 2³?", a: "8", options: ["6", "8", "9", "12"] },
    { q: "What is 3³?", a: "27", options: ["24", "27", "30", "36"] },
  ].slice(0, 50),

  // =========================================
  // ADVANCED MODE - Advanced Level
  // =========================================
  
  // ------------------------------
  // ADVANCED LEVEL 1 — EASY
  // ------------------------------
  advanced_level1: [
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
  // ADVANCED LEVEL 2 — MEDIUM
  // ------------------------------
  advanced_level2: [
    multQ(12, 2),
    divQ(15, 3),
    divQ(18, 2),
    multQ(7, 4),
    multQ(9, 5),
    divQ(14, 2),
    multQ(6, 6),
    multQ(5, 9),
    multQ(8, 3),
    divQ(20, 4),

    // Times tables 3–12 and matching divisions
    ...Array.from({ length: 20 }, (_, i) => {
      const base = 3 + (i % 10); // 3..12
      const m = 2 + Math.floor(i / 2); // 2..11
      return i % 2 === 0 ? multQ(base, m) : divQ(base * m, base);
    }),

    // Two-step ops and easy percents
    ...[
      { a: 15, b: 8, c: 2 },
      { a: 30, b: 6, c: 3 },
      { a: 25, b: 5, c: 4 },
      { a: 18, b: 2, c: 5 },
      { a: 40, b: 4, c: 5 },
    ].flatMap(({ a, b, c }) => [
      { q: `Solve: ${a} + (${b} × ${c})`, a: String(a + b * c), options: [String(a + b * c - b), String(a + b * c), String(a + b * c + c), String(a + b * c + b)] },
      { q: `Solve: (${a} - ${b}) ÷ ${c}`, a: String((a - b) / c), options: [String((a - b) / c - 1), String((a - b) / c), String((a - b) / c + 1), String((a - b) / c + 2)] },
    ]),

    percQ(10, 90),
    percQ(20, 150),
    percQ(25, 80),
    percQ(50, 60),
    percQ(30, 70),
  ].slice(0, 50),

  // ------------------------------
  // ADVANCED LEVEL 3 — HARD
  // ------------------------------
  advanced_level3: [
    { q: "Solve: 15 + (8 × 2)", a: "31", options: ["30", "31", "32", "33"] },
    { q: "Solve: 50 - (6 × 3)", a: "32", options: ["33", "34", "32", "30"] },
    { q: "What is 144 ÷ 12?", a: "12", options: ["10", "11", "12", "13"] },
    { q: "What is 8²?", a: "64", options: ["48", "56", "64", "72"] },
    { q: "What is the square root of 81?", a: "9", options: ["6", "7", "8", "9"] },
    { q: "Solve: 3(4 + 5)", a: "27", options: ["24", "26", "27", "30"] },
    { q: "Solve: 100 ÷ 4", a: "25", options: ["20", "25", "30", "35"] },
    { q: "What is 12 × 12?", a: "144", options: ["132", "140", "144", "150"] },
    { q: "What is 25% of 80?", a: "20", options: ["10", "20", "30", "40"] },
    { q: "Solve: 3² + 4²", a: "25", options: ["18", "20", "25", "30"] },

    // Squares / roots / percentages / GCD / order of ops
    ...[5, 6, 7, 9, 11, 13].map((n) => ({ q: `What is ${n}²?`, a: String(n * n), options: [String(n * n - n), String(n * n), String(n * n + n), String(n * n + 2 * n)] })),
    ...[49, 64, 100, 121, 144].map((n) => ({ q: `What is √${n}?`, a: String(Math.round(Math.sqrt(n))), options: [String(Math.round(Math.sqrt(n)) - 1), String(Math.round(Math.sqrt(n))), String(Math.round(Math.sqrt(n)) + 1), String(Math.round(Math.sqrt(n)) + 2)] })),
    percQ(15, 200),
    percQ(12, 150),
    percQ(40, 90),
    percQ(60, 50),
    percQ(75, 80),
    { q: "Find GCD of 18 and 24", a: "6", options: ["4", "6", "8", "12"] },
    { q: "Find GCD of 21 and 28", a: "7", options: ["3", "5", "7", "14"] },
    { q: "Solve: (18 ÷ 3) + 4 × 2", a: "14", options: ["12", "14", "16", "18"] },
    { q: "Solve: 50% of 120 + 3²", a: "69", options: ["60", "69", "72", "78"] },
    { q: "Convert 1/4 to decimal", a: "0.25", options: ["0.2", "0.25", "0.3", "0.4"] },
    { q: "Convert 3/5 to decimal", a: "0.6", options: ["0.5", "0.6", "0.65", "0.7"] },
    { q: "What is 2³?", a: "8", options: ["6", "8", "9", "12"] },
    { q: "What is 3³?", a: "27", options: ["24", "27", "30", "36"] },
  ].slice(0, 50),
};

export default mathQuestions;
