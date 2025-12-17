const mathQuestions = {
  // ------------------------------
  // LEVEL 1 — EASY (50 QUESTIONS)
  // ------------------------------
  level1: [
    { q: "What is 2 + 3?", a: "5", options: ["4", "5", "6", "7"] },
    { q: "What is 10 - 4?", a: "6", options: ["5", "6", "7", "8"] },
    { q: "What is 5 + 5?", a: "10", options: ["8", "9", "10", "11"] },
    { q: "What is 9 - 2?", a: "7", options: ["6", "7", "8", "5"] },
    { q: "What is 6 + 3?", a: "9", options: ["8", "9", "10", "7"] },
    { q: "What is 4 + 4?", a: "8", options: ["6", "7", "8", "9"] },
    { q: "What is 7 - 3?", a: "4", options: ["3", "4", "5", "6"] },
    { q: "What is 8 - 5?", a: "3", options: ["2", "3", "4", "5"] },
    { q: "What is 3 + 6?", a: "9", options: ["7", "8", "9", "10"] },
    { q: "What is 1 + 9?", a: "10", options: ["8", "9", "10", "11"] },

    // more easy questions (40 more)
    { q: "What is 7 + 2?", a: "9", options: ["8", "9", "10", "11"] },
    { q: "What is 8 + 1?", a: "9", options: ["7", "8", "9", "10"] },
    { q: "What is 6 - 1?", a: "5", options: ["4", "5", "6", "7"] },
    { q: "What is 12 - 4?", a: "8", options: ["6", "7", "8", "9"] },
    { q: "What is 3 + 4?", a: "7", options: ["6", "7", "8", "5"] },
    { q: "What is 10 + 0?", a: "10", options: ["9", "10", "11", "8"] },
    { q: "What is 5 - 2?", a: "3", options: ["1", "2", "3", "4"] },
    { q: "What is 4 + 3?", a: "7", options: ["6", "7", "8", "9"] },
    { q: "What is 2 + 7?", a: "9", options: ["7", "8", "9", "10"] },
    { q: "What is 9 - 3?", a: "6", options: ["4", "5", "6", "7"] },

    // 30 more easy questions
    ...Array.from({ length: 30 }, (_, i) => ({
      q: `What is ${i + 1} + 1?`,
      a: `${i + 2}`,
      options: [`${i}`, `${i + 1}`, `${i + 2}`, `${i + 3}`],
    })),
  ],

  // ------------------------------
  // LEVEL 2 — MEDIUM (50 QUESTIONS)
  // ------------------------------
  level2: [
    { q: "What is 12 × 2?", a: "24", options: ["22", "24", "26", "28"] },
    { q: "What is 15 ÷ 3?", a: "5", options: ["3", "4", "5", "6"] },
    { q: "What is 18 ÷ 2?", a: "9", options: ["7", "8", "9", "10"] },
    { q: "What is 7 × 4?", a: "28", options: ["24", "26", "28", "30"] },
    { q: "What is 9 × 5?", a: "45", options: ["35", "40", "45", "50"] },
    { q: "What is 14 ÷ 2?", a: "7", options: ["6", "7", "8", "9"] },
    { q: "What is 6 × 6?", a: "36", options: ["30", "36", "42", "48"] },
    { q: "What is 5 × 9?", a: "45", options: ["40", "42", "44", "45"] },
    { q: "What is 8 × 3?", a: "24", options: ["22", "24", "26", "28"] },
    { q: "What is 20 ÷ 4?", a: "5", options: ["3", "4", "5", "6"] },

    // 40 more medium questions
    ...Array.from({ length: 40 }, (_, i) => ({
      q: `What is ${(i + 10) * 2} ÷ 2?`,
      a: `${i + 10}`,
      options: [`${i + 8}`, `${i + 9}`, `${i + 10}`, `${i + 11}`],
    })),
  ],

  // ------------------------------
  // LEVEL 3 — HARD (50 QUESTIONS)
  // ------------------------------
  level3: [
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

    // 40 more hard questions
    ...Array.from({ length: 40 }, (_, i) => ({
      q: `What is ${(i + 10) * (i + 3)}?`,
      a: `${(i + 10) * (i + 3)}`,
      options: [
        `${(i + 10) * (i + 3) - 5}`,
        `${(i + 10) * (i + 3)}`,
        `${(i + 10) * (i + 3) + 5}`,
        `${(i + 10) * (i + 3) + 10}`,
      ],
    })),
  ],
};

export default mathQuestions;
