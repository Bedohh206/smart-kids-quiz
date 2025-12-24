// Algebra 1 Questions - High School Level
// Covers: Linear equations, inequalities, polynomials, factoring, quadratic equations, exponents, radicals

const algebraQuestions = {
  // ------------------------------
  // LEVEL 1 — EASY (50 QUESTIONS)
  // Linear equations, basic expressions, and simple operations
  // ------------------------------
  level1: [
    {
      q: "Solve for x: x + 5 = 12",
      a: "7",
      options: ["5", "7", "8", "17"],
    },
    {
      q: "Solve for x: 2x = 16",
      a: "8",
      options: ["6", "8", "14", "32"],
    },
    {
      q: "Solve for x: x - 3 = 10",
      a: "13",
      options: ["7", "10", "13", "30"],
    },
    {
      q: "Simplify: 3x + 2x",
      a: "5x",
      options: ["5x", "6x", "5x²", "x"],
    },
    {
      q: "Solve for x: x/4 = 5",
      a: "20",
      options: ["1", "9", "20", "1.25"],
    },
    {
      q: "Evaluate: 2x when x = 5",
      a: "10",
      options: ["7", "10", "25", "2"],
    },
    {
      q: "Solve for x: 3x + 6 = 21",
      a: "5",
      options: ["3", "5", "9", "15"],
    },
    {
      q: "Simplify: 7x - 4x",
      a: "3x",
      options: ["3x", "11x", "3", "-3x"],
    },
    {
      q: "Solve for x: x + 8 = 3x",
      a: "4",
      options: ["2", "4", "8", "24"],
    },
    {
      q: "Evaluate: x² when x = 4",
      a: "16",
      options: ["8", "12", "16", "2"],
    },
    {
      q: "Solve for x: 5x - 10 = 0",
      a: "2",
      options: ["0", "2", "5", "10"],
    },
    {
      q: "Simplify: 4(x + 2)",
      a: "4x + 8",
      options: ["4x + 2", "4x + 8", "4x + 4", "x + 8"],
    },
    {
      q: "Solve for y: y/3 = 6",
      a: "18",
      options: ["2", "9", "18", "3"],
    },
    {
      q: "What is the coefficient of x in 7x + 3?",
      a: "7",
      options: ["3", "7", "10", "x"],
    },
    {
      q: "Solve for x: 2x + 3 = 11",
      a: "4",
      options: ["2", "4", "7", "8"],
    },
    {
      q: "Simplify: 6x + 3 - 2x",
      a: "4x + 3",
      options: ["4x + 3", "8x + 3", "4x", "8x"],
    },
    {
      q: "Solve for x: 4x = 2x + 10",
      a: "5",
      options: ["2", "5", "10", "20"],
    },
    {
      q: "Evaluate: 3x - 5 when x = 4",
      a: "7",
      options: ["2", "7", "12", "17"],
    },
    {
      q: "Solve for x: x/2 + 3 = 7",
      a: "8",
      options: ["4", "5", "8", "10"],
    },
    {
      q: "Simplify: -3x + 8x",
      a: "5x",
      options: ["-5x", "5x", "11x", "-11x"],
    },
    {
      q: "Solve for x: 6 = 2x - 4",
      a: "5",
      options: ["1", "2", "5", "10"],
    },
    {
      q: "What is 2³?",
      a: "8",
      options: ["6", "8", "9", "16"],
    },
    {
      q: "Solve for x: 10 - x = 3",
      a: "7",
      options: ["3", "7", "10", "13"],
    },
    {
      q: "Simplify: 5(2x)",
      a: "10x",
      options: ["7x", "10x", "10x²", "2x"],
    },
    {
      q: "Solve for x: 3(x + 1) = 12",
      a: "3",
      options: ["1", "3", "4", "9"],
    },
    {
      q: "Evaluate: x² + 2x when x = 3",
      a: "15",
      options: ["6", "9", "15", "11"],
    },
    {
      q: "Solve for x: 2x/3 = 4",
      a: "6",
      options: ["3", "6", "8", "12"],
    },
    {
      q: "Simplify: 9x - 5x + 2",
      a: "4x + 2",
      options: ["4x + 2", "4x", "14x + 2", "4x - 2"],
    },
    {
      q: "Solve for x: x + 2x = 15",
      a: "5",
      options: ["3", "5", "7", "15"],
    },
    {
      q: "What is 4²?",
      a: "16",
      options: ["8", "12", "16", "24"],
    },
    {
      q: "Solve for x: 7x = 35",
      a: "5",
      options: ["3", "5", "7", "42"],
    },
    {
      q: "Simplify: 2(3x - 4)",
      a: "6x - 8",
      options: ["6x - 4", "6x - 8", "5x - 8", "6x + 8"],
    },
    {
      q: "Solve for x: 5x + 2 = 3x + 12",
      a: "5",
      options: ["2", "5", "7", "10"],
    },
    {
      q: "Evaluate: 4x² when x = 2",
      a: "16",
      options: ["8", "12", "16", "32"],
    },
    {
      q: "Solve for x: x - 7 = -2",
      a: "5",
      options: ["-9", "5", "9", "-5"],
    },
    {
      q: "Simplify: 3x² + 2x²",
      a: "5x²",
      options: ["5x", "5x²", "5x⁴", "6x²"],
    },
    {
      q: "Solve for x: 8 = 4 + x",
      a: "4",
      options: ["2", "4", "8", "12"],
    },
    {
      q: "What is 5¹?",
      a: "5",
      options: ["1", "5", "10", "25"],
    },
    {
      q: "Solve for x: 2x - 5 = 9",
      a: "7",
      options: ["2", "4", "7", "14"],
    },
    {
      q: "Simplify: x + x + x",
      a: "3x",
      options: ["x³", "3x", "x", "3x²"],
    },
    {
      q: "Solve for x: 15/x = 3",
      a: "5",
      options: ["3", "5", "12", "45"],
    },
    {
      q: "Evaluate: (x + 3)² when x = 2",
      a: "25",
      options: ["7", "10", "25", "13"],
    },
    {
      q: "Solve for x: 4(x - 2) = 8",
      a: "4",
      options: ["0", "2", "4", "6"],
    },
    {
      q: "Simplify: 8x - 3x + 5",
      a: "5x + 5",
      options: ["5x + 5", "5x", "11x + 5", "5x - 5"],
    },
    {
      q: "Solve for x: x/5 = 2",
      a: "10",
      options: ["2.5", "7", "10", "5"],
    },
    {
      q: "What is 10⁰?",
      a: "1",
      options: ["0", "1", "10", "undefined"],
    },
    {
      q: "Solve for x: 3x + 4 = 2x + 9",
      a: "5",
      options: ["1", "5", "13", "3"],
    },
    {
      q: "Simplify: -2(x - 3)",
      a: "-2x + 6",
      options: ["-2x - 3", "-2x + 6", "-2x - 6", "2x + 6"],
    },
    {
      q: "Solve for x: 6x - 8 = 4x",
      a: "4",
      options: ["2", "4", "8", "-2"],
    },
    {
      q: "Evaluate: 2(x + y) when x = 3, y = 4",
      a: "14",
      options: ["7", "9", "11", "14"],
    },
  ],

  // ------------------------------
  // LEVEL 2 — MEDIUM (50 QUESTIONS)
  // Inequalities, systems, quadratics, polynomials
  // ------------------------------
  level2: [
    {
      q: "Solve: x² - 9 = 0",
      a: "x = ±3",
      options: ["x = 3", "x = ±3", "x = 9", "x = -9"],
    },
    {
      q: "Factor: x² + 5x + 6",
      a: "(x + 2)(x + 3)",
      options: ["(x + 1)(x + 6)", "(x + 2)(x + 3)", "(x - 2)(x - 3)", "x(x + 5) + 6"],
    },
    {
      q: "Solve: x² - 4x = 0",
      a: "x = 0 or x = 4",
      options: ["x = 0", "x = 4", "x = 0 or x = 4", "x = -4"],
    },
    {
      q: "Simplify: (x³)(x²)",
      a: "x⁵",
      options: ["x⁵", "x⁶", "x", "x⁹"],
    },
    {
      q: "Solve: 2x² = 50",
      a: "x = ±5",
      options: ["x = 5", "x = ±5", "x = 25", "x = 10"],
    },
    {
      q: "Factor: x² - 16",
      a: "(x + 4)(x - 4)",
      options: ["(x + 4)(x - 4)", "(x - 4)²", "(x + 16)(x - 1)", "Cannot factor"],
    },
    {
      q: "Solve: |x| = 7",
      a: "x = ±7",
      options: ["x = 7", "x = -7", "x = ±7", "x = 0"],
    },
    {
      q: "Simplify: x⁴/x²",
      a: "x²",
      options: ["x", "x²", "x⁶", "x⁸"],
    },
    {
      q: "Solve: x² + 6x + 8 = 0",
      a: "x = -2 or x = -4",
      options: ["x = 2, 4", "x = -2 or x = -4", "x = 1, 8", "x = -1, -8"],
    },
    {
      q: "Expand: (x + 3)²",
      a: "x² + 6x + 9",
      options: ["x² + 9", "x² + 6x + 9", "x² + 3x + 9", "x² + 9x + 3"],
    },
    {
      q: "Solve inequality: 2x + 3 > 11",
      a: "x > 4",
      options: ["x > 4", "x < 4", "x > 7", "x < 7"],
    },
    {
      q: "Factor: 2x² + 7x + 3",
      a: "(2x + 1)(x + 3)",
      options: ["(2x + 1)(x + 3)", "(2x + 3)(x + 1)", "(x + 1)(x + 3)", "Cannot factor"],
    },
    {
      q: "Solve: x² = 64",
      a: "x = ±8",
      options: ["x = 8", "x = ±8", "x = 32", "x = 4"],
    },
    {
      q: "Simplify: (2x²)³",
      a: "8x⁶",
      options: ["6x⁵", "8x⁶", "2x⁶", "8x⁵"],
    },
    {
      q: "Solve: 3x - 5 < 10",
      a: "x < 5",
      options: ["x < 5", "x > 5", "x < 15", "x > 15"],
    },
    {
      q: "What is the slope of y = 3x + 2?",
      a: "3",
      options: ["2", "3", "5", "1"],
    },
    {
      q: "Factor: x² - 7x + 12",
      a: "(x - 3)(x - 4)",
      options: ["(x - 3)(x - 4)", "(x + 3)(x + 4)", "(x - 2)(x - 6)", "(x - 1)(x - 12)"],
    },
    {
      q: "Solve: |2x - 4| = 6",
      a: "x = 5 or x = -1",
      options: ["x = 5", "x = 5 or x = -1", "x = 1 or x = -5", "x = 3"],
    },
    {
      q: "Simplify: √(x⁶)",
      a: "x³",
      options: ["x²", "x³", "x⁶", "√x"],
    },
    {
      q: "Solve: x² + 2x - 15 = 0",
      a: "x = 3 or x = -5",
      options: ["x = 3 or x = -5", "x = -3 or x = 5", "x = 1 or x = 15", "x = -1 or x = -15"],
    },
    {
      q: "Expand: (x - 5)²",
      a: "x² - 10x + 25",
      options: ["x² - 25", "x² - 10x + 25", "x² + 10x + 25", "x² - 5x + 25"],
    },
    {
      q: "Solve: -3x ≤ 12",
      a: "x ≥ -4",
      options: ["x ≤ -4", "x ≥ -4", "x ≤ 4", "x ≥ 4"],
    },
    {
      q: "Factor: x² - 25",
      a: "(x + 5)(x - 5)",
      options: ["(x + 5)(x - 5)", "(x - 5)²", "(x + 25)(x - 1)", "Cannot factor"],
    },
    {
      q: "Solve: x² - 10x + 25 = 0",
      a: "x = 5",
      options: ["x = 5", "x = -5", "x = 10", "x = ±5"],
    },
    {
      q: "Simplify: (x²y³)(x³y)",
      a: "x⁵y⁴",
      options: ["x⁵y³", "x⁵y⁴", "x⁶y⁴", "x²y³"],
    },
    {
      q: "What is the y-intercept of y = 4x - 7?",
      a: "-7",
      options: ["4", "-7", "7", "-4"],
    },
    {
      q: "Factor: 3x² - 12",
      a: "3(x + 2)(x - 2)",
      options: ["3(x + 2)(x - 2)", "(3x + 6)(x - 2)", "3(x - 4)", "Cannot factor"],
    },
    {
      q: "Solve: x² + 4x = 12",
      a: "x = 2 or x = -6",
      options: ["x = 2 or x = -6", "x = 3 or x = 4", "x = -2 or x = 6", "x = 1 or x = 12"],
    },
    {
      q: "Simplify: x⁰",
      a: "1",
      options: ["0", "1", "x", "undefined"],
    },
    {
      q: "Solve: |x + 3| = 5",
      a: "x = 2 or x = -8",
      options: ["x = 2", "x = 2 or x = -8", "x = -2 or x = 8", "x = 5"],
    },
    {
      q: "Factor: x² + 8x + 16",
      a: "(x + 4)²",
      options: ["(x + 2)(x + 8)", "(x + 4)²", "(x + 16)(x + 1)", "(x - 4)²"],
    },
    {
      q: "Solve: 5x + 7 ≥ 22",
      a: "x ≥ 3",
      options: ["x ≤ 3", "x ≥ 3", "x > 3", "x < 3"],
    },
    {
      q: "Simplify: (3x)²",
      a: "9x²",
      options: ["3x²", "6x²", "9x²", "9x"],
    },
    {
      q: "Solve: x² = 100",
      a: "x = ±10",
      options: ["x = 10", "x = ±10", "x = 50", "x = 20"],
    },
    {
      q: "Expand: (2x + 3)(x - 4)",
      a: "2x² - 5x - 12",
      options: ["2x² - 5x - 12", "2x² + 5x - 12", "2x² - 8x + 12", "2x² - 12"],
    },
    {
      q: "Solve: x² - 6x + 9 = 0",
      a: "x = 3",
      options: ["x = 3", "x = -3", "x = ±3", "x = 6"],
    },
    {
      q: "Simplify: x⁻²",
      a: "1/x²",
      options: ["-x²", "1/x²", "x²", "-1/x²"],
    },
    {
      q: "Factor: x² - x - 12",
      a: "(x - 4)(x + 3)",
      options: ["(x - 4)(x + 3)", "(x + 4)(x - 3)", "(x - 2)(x + 6)", "(x - 1)(x + 12)"],
    },
    {
      q: "Solve: 4x - 9 < 11",
      a: "x < 5",
      options: ["x < 5", "x > 5", "x < 2", "x > 2"],
    },
    {
      q: "What is the vertex form of a parabola?",
      a: "y = a(x - h)² + k",
      options: ["y = mx + b", "y = ax² + bx + c", "y = a(x - h)² + k", "y = x²"],
    },
    {
      q: "Solve: x² + 3x - 10 = 0",
      a: "x = 2 or x = -5",
      options: ["x = 2 or x = -5", "x = -2 or x = 5", "x = 1 or x = 10", "x = -1 or x = -10"],
    },
    {
      q: "Simplify: √(25x²)",
      a: "5x",
      options: ["5x", "25x", "5x²", "√25x"],
    },
    {
      q: "Factor: 2x² - 8",
      a: "2(x + 2)(x - 2)",
      options: ["2(x + 2)(x - 2)", "(2x + 4)(x - 2)", "2(x - 4)", "Cannot factor"],
    },
    {
      q: "Solve: |3x| = 15",
      a: "x = ±5",
      options: ["x = 5", "x = -5", "x = ±5", "x = 15"],
    },
    {
      q: "Expand: (x + 2)(x - 2)",
      a: "x² - 4",
      options: ["x² - 4", "x² + 4", "x² - 2x - 4", "x² + 2x - 4"],
    },
    {
      q: "Solve: x² + 5x = 0",
      a: "x = 0 or x = -5",
      options: ["x = 0", "x = -5", "x = 0 or x = -5", "x = 5"],
    },
    {
      q: "Simplify: (x⁴)²",
      a: "x⁸",
      options: ["x⁶", "x⁸", "x⁴", "x²"],
    },
    {
      q: "Solve: 2x + 1 ≤ 9",
      a: "x ≤ 4",
      options: ["x ≤ 4", "x ≥ 4", "x < 5", "x > 5"],
    },
    {
      q: "Factor: x² + 10x + 25",
      a: "(x + 5)²",
      options: ["(x + 5)²", "(x + 5)(x - 5)", "(x + 10)(x + 25)", "Cannot factor"],
    },
    {
      q: "Solve: x² - 2x - 8 = 0",
      a: "x = 4 or x = -2",
      options: ["x = 4 or x = -2", "x = -4 or x = 2", "x = 1 or x = 8", "x = -1 or x = -8"],
    },
  ],

  // ------------------------------
  // LEVEL 3 — HARD (50 QUESTIONS)
  // Complex quadratics, rational expressions, radicals, advanced concepts
  // ------------------------------
  level3: [
    {
      q: "Use quadratic formula: x² + 4x - 5 = 0",
      a: "x = 1 or x = -5",
      options: ["x = 1 or x = -5", "x = -1 or x = 5", "x = 2 or x = -3", "x = 5 or x = -1"],
    },
    {
      q: "Simplify: (x² - 9)/(x - 3)",
      a: "x + 3",
      options: ["x - 3", "x + 3", "x² - 3", "Cannot simplify"],
    },
    {
      q: "Solve: x² + 6x + 5 = 0 by completing the square",
      a: "x = -1 or x = -5",
      options: ["x = -1 or x = -5", "x = 1 or x = 5", "x = -2 or x = -3", "x = 2 or x = 3"],
    },
    {
      q: "Simplify: √(72)",
      a: "6√2",
      options: ["6√2", "8√2", "2√6", "36"],
    },
    {
      q: "Solve: 2x² - 7x + 3 = 0",
      a: "x = 3 or x = 1/2",
      options: ["x = 3 or x = 1/2", "x = -3 or x = -1/2", "x = 1 or x = 3", "x = 2 or x = 3"],
    },
    {
      q: "Factor completely: x³ - 8",
      a: "(x - 2)(x² + 2x + 4)",
      options: ["(x - 2)(x² + 2x + 4)", "(x - 2)³", "(x + 2)(x² - 4)", "Cannot factor"],
    },
    {
      q: "Solve: √(x + 5) = 4",
      a: "x = 11",
      options: ["x = 9", "x = 11", "x = 1", "x = -1"],
    },
    {
      q: "Simplify: (2x + 3)/(x² - 9) × (x - 3)",
      a: "(2x + 3)/(x + 3)",
      options: ["(2x + 3)/(x + 3)", "2x + 3", "(x - 3)/(x + 3)", "1"],
    },
    {
      q: "Solve system: x + y = 7, x - y = 3",
      a: "x = 5, y = 2",
      options: ["x = 5, y = 2", "x = 2, y = 5", "x = 4, y = 3", "x = 3, y = 4"],
    },
    {
      q: "Simplify: (x⁴y⁻²)/(x²y³)",
      a: "x²/y⁵",
      options: ["x²/y⁵", "x²y", "x⁶/y⁵", "x²y⁵"],
    },
    {
      q: "Solve: |2x - 3| = 7",
      a: "x = 5 or x = -2",
      options: ["x = 5 or x = -2", "x = -5 or x = 2", "x = 4 or x = -4", "x = 2"],
    },
    {
      q: "Factor: x⁴ - 16",
      a: "(x² + 4)(x + 2)(x - 2)",
      options: ["(x² + 4)(x + 2)(x - 2)", "(x - 4)(x + 4)", "(x - 2)⁴", "Cannot factor"],
    },
    {
      q: "Solve: x²/3 = 12",
      a: "x = ±6",
      options: ["x = 6", "x = ±6", "x = 4", "x = 36"],
    },
    {
      q: "Simplify: ∛(64x⁶)",
      a: "4x²",
      options: ["4x²", "4x³", "8x²", "2x²"],
    },
    {
      q: "Solve: 3x² + 5x - 2 = 0",
      a: "x = 1/3 or x = -2",
      options: ["x = 1/3 or x = -2", "x = -1/3 or x = 2", "x = 2 or x = -1", "x = 1 or x = -6"],
    },
    {
      q: "What is the discriminant of x² + 3x + 2 = 0?",
      a: "1",
      options: ["-7", "1", "9", "17"],
    },
    {
      q: "Solve: √(2x - 1) = x - 2",
      a: "x = 5",
      options: ["x = 3", "x = 5", "x = 1", "No solution"],
    },
    {
      q: "Simplify: (x² - 4)/(x² + 4x + 4)",
      a: "(x - 2)/(x + 2)",
      options: ["(x - 2)/(x + 2)", "(x + 2)/(x - 2)", "x - 2", "Cannot simplify"],
    },
    {
      q: "Solve system: 2x + y = 8, x - y = 1",
      a: "x = 3, y = 2",
      options: ["x = 3, y = 2", "x = 2, y = 3", "x = 4, y = 0", "x = 5, y = -2"],
    },
    {
      q: "Expand: (2x - 3)³",
      a: "8x³ - 36x² + 54x - 27",
      options: ["8x³ - 27", "8x³ - 36x² + 54x - 27", "8x³ + 36x² - 54x + 27", "6x³ - 9"],
    },
    {
      q: "Solve: x⁴ - 13x² + 36 = 0",
      a: "x = ±2, ±3",
      options: ["x = ±2, ±3", "x = 2, 3", "x = ±6", "x = ±4, ±9"],
    },
    {
      q: "Simplify: (√x + √y)(√x - √y)",
      a: "x - y",
      options: ["x - y", "x + y", "√(x - y)", "√(x² - y²)"],
    },
    {
      q: "Solve: 4x² - 12x + 9 = 0",
      a: "x = 3/2",
      options: ["x = 3", "x = 3/2", "x = ±3/2", "x = 2/3"],
    },
    {
      q: "Factor: 6x² + 11x - 10",
      a: "(2x + 5)(3x - 2)",
      options: ["(2x + 5)(3x - 2)", "(3x + 5)(2x - 2)", "(6x - 5)(x + 2)", "Cannot factor"],
    },
    {
      q: "Solve: |x² - 4| = 5",
      a: "x = ±3 or x = ±1",
      options: ["x = ±3", "x = ±3 or x = ±1", "x = 3 or x = -1", "x = ±9"],
    },
    {
      q: "Simplify: (2√3)(3√2)",
      a: "6√6",
      options: ["6√5", "6√6", "5√6", "√6"],
    },
    {
      q: "Solve: x/(x-2) + 3 = 2x/(x-2)",
      a: "x = 3",
      options: ["x = 2", "x = 3", "x = 6", "No solution"],
    },
    {
      q: "What is the vertex of y = x² - 4x + 3?",
      a: "(2, -1)",
      options: ["(2, -1)", "(-2, 15)", "(4, 3)", "(1, 0)"],
    },
    {
      q: "Simplify: (x³ - 27)/(x - 3)",
      a: "x² + 3x + 9",
      options: ["x² + 9", "x² + 3x + 9", "x² - 3x + 9", "x + 9"],
    },
    {
      q: "Solve: √(x) + √(x - 5) = 5",
      a: "x = 9",
      options: ["x = 5", "x = 9", "x = 4", "x = 25"],
    },
    {
      q: "Factor: x³ + 3x² - 4x - 12",
      a: "(x + 3)(x + 2)(x - 2)",
      options: ["(x + 3)(x + 2)(x - 2)", "(x - 3)(x² - 4)", "(x + 1)(x² + 12)", "Cannot factor"],
    },
    {
      q: "Solve: (x + 1)² = 16",
      a: "x = 3 or x = -5",
      options: ["x = 3 or x = -5", "x = -3 or x = 5", "x = 15", "x = ±4"],
    },
    {
      q: "Simplify: √(50) + √(32)",
      a: "9√2",
      options: ["9√2", "√82", "7√2", "11√2"],
    },
    {
      q: "Solve system: x² + y² = 25, y = x + 1",
      a: "(3,4) or (-4,-3)",
      options: ["(3,4) or (-4,-3)", "(4,3) only", "(5,0) only", "(3,4) only"],
    },
    {
      q: "Rationalize: 1/√5",
      a: "√5/5",
      options: ["1/√5", "√5/5", "5/√5", "√5"],
    },
    {
      q: "Solve: 2x² = 3x + 2",
      a: "x = 2 or x = -1/2",
      options: ["x = 2 or x = -1/2", "x = -2 or x = 1/2", "x = 1 or x = -2", "x = 3 or x = -1"],
    },
    {
      q: "What is the axis of symmetry of y = 2x² - 8x + 3?",
      a: "x = 2",
      options: ["x = 2", "x = -2", "x = 4", "x = -4"],
    },
    {
      q: "Simplify: (a² - b²)/(a + b)",
      a: "a - b",
      options: ["a + b", "a - b", "a² - b", "Cannot simplify"],
    },
    {
      q: "Solve: x⁴ = 81",
      a: "x = ±3",
      options: ["x = 3", "x = ±3", "x = 9", "x = ±9"],
    },
    {
      q: "Factor: x³ - 6x² + 9x",
      a: "x(x - 3)²",
      options: ["x(x - 3)²", "(x - 3)³", "x(x² - 6x + 9)", "x(x - 3)(x + 3)"],
    },
    {
      q: "Solve: 3/(x-1) - 2/(x+1) = 1",
      a: "x = 0 or x = 4",
      options: ["x = 0 or x = 4", "x = 1 or x = -1", "x = 2", "No solution"],
    },
    {
      q: "Simplify: (x⁻³)²",
      a: "1/x⁶",
      options: ["x⁶", "1/x⁶", "-x⁶", "x⁻⁵"],
    },
    {
      q: "Solve: |x² - 9| = 0",
      a: "x = ±3",
      options: ["x = 3", "x = -3", "x = ±3", "x = 9"],
    },
    {
      q: "What is the sum of roots of 2x² - 5x + 3 = 0?",
      a: "5/2",
      options: ["5/2", "-5/2", "3/2", "2/5"],
    },
    {
      q: "Simplify: ⁴√(16x⁸)",
      a: "2x²",
      options: ["2x²", "4x²", "2x⁴", "4x⁴"],
    },
    {
      q: "Solve: √(x+3) - √(x-1) = 2",
      a: "x = 1",
      options: ["x = 1", "x = 5", "x = 3", "No solution"],
    },
    {
      q: "Factor: 4x² - 25y²",
      a: "(2x + 5y)(2x - 5y)",
      options: ["(2x + 5y)(2x - 5y)", "(4x + 5y)(x - 5y)", "(2x - 5y)²", "Cannot factor"],
    },
    {
      q: "Solve: x³ - 7x² + 10x = 0",
      a: "x = 0, 2, or 5",
      options: ["x = 0, 2, or 5", "x = 1, 2, or 5", "x = 0 or 7", "x = -2 or -5"],
    },
    {
      q: "What is the product of roots of x² + 7x + 10 = 0?",
      a: "10",
      options: ["7", "10", "-7", "-10"],
    },
  ],
};

export { algebraQuestions };
