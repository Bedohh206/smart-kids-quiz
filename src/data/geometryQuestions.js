// Geometry Questions - Two Modes: Kids & Advanced\r\n// Kids Mode: Early Elementary (ages 6-8) - Basic shapes and concepts\r\n// Advanced Mode: Early High School (ages 13-14) - Formal geometry

const geometryQuestions = {
  // ------------------------------
  // LEVEL 1 — EASY (50 QUESTIONS)
  // Basic shapes, angles, perimeter, area
  // ------------------------------
  kids_level1: [
    {
      q: "What is the sum of angles in a triangle?",
      a: "180°",
      options: ["90°", "180°", "360°", "270°"],
    },
    {
      q: "What is the area of a square with side 5 cm?",
      a: "25 cm²",
      options: ["20 cm²", "25 cm²", "10 cm²", "50 cm²"],
    },
    {
      q: "How many sides does a hexagon have?",
      a: "6",
      options: ["5", "6", "7", "8"],
    },
    {
      q: "What is the perimeter of a rectangle 4 cm × 6 cm?",
      a: "20 cm",
      options: ["10 cm", "20 cm", "24 cm", "12 cm"],
    },
    {
      q: "What is a 90° angle called?",
      a: "Right angle",
      options: ["Acute angle", "Right angle", "Obtuse angle", "Straight angle"],
    },
    {
      q: "What is the area of a rectangle 3 cm × 7 cm?",
      a: "21 cm²",
      options: ["10 cm²", "20 cm²", "21 cm²", "24 cm²"],
    },
    {
      q: "How many degrees in a complete circle?",
      a: "360°",
      options: ["180°", "270°", "360°", "450°"],
    },
    {
      q: "What is the perimeter of a square with side 8 cm?",
      a: "32 cm",
      options: ["16 cm", "24 cm", "32 cm", "64 cm"],
    },
    {
      q: "What is an angle less than 90° called?",
      a: "Acute",
      options: ["Acute", "Obtuse", "Right", "Reflex"],
    },
    {
      q: "What is the area of a triangle with base 6 and height 4?",
      a: "12",
      options: ["10", "12", "24", "14"],
    },
    {
      q: "How many sides does a pentagon have?",
      a: "5",
      options: ["4", "5", "6", "7"],
    },
    {
      q: "What is the circumference formula for a circle?",
      a: "2πr",
      options: ["πr", "2πr", "πr²", "2r"],
    },
    {
      q: "What is 180° - 60°?",
      a: "120°",
      options: ["120°", "110°", "130°", "100°"],
    },
    {
      q: "What is the area of a circle with radius 3? (π = 3.14)",
      a: "28.26",
      options: ["9.42", "18.84", "28.26", "37.68"],
    },
    {
      q: "How many vertices does a cube have?",
      a: "8",
      options: ["6", "8", "10", "12"],
    },
    {
      q: "What is the area formula for a rectangle?",
      a: "length × width",
      options: ["2(l + w)", "length × width", "l + w", "l²"],
    },
    {
      q: "What is an angle greater than 90° but less than 180°?",
      a: "Obtuse",
      options: ["Acute", "Obtuse", "Right", "Straight"],
    },
    {
      q: "What is the perimeter of a triangle with sides 3, 4, 5?",
      a: "12",
      options: ["10", "12", "15", "6"],
    },
    {
      q: "How many edges does a cube have?",
      a: "12",
      options: ["6", "8", "12", "16"],
    },
    {
      q: "What is the volume of a cube with side 2?",
      a: "8",
      options: ["4", "6", "8", "12"],
    },
    {
      q: "What is a 180° angle called?",
      a: "Straight angle",
      options: ["Right angle", "Obtuse angle", "Straight angle", "Reflex angle"],
    },
    {
      q: "What is the area of a square with side 10?",
      a: "100",
      options: ["40", "100", "20", "50"],
    },
    {
      q: "How many faces does a rectangular prism have?",
      a: "6",
      options: ["4", "5", "6", "8"],
    },
    {
      q: "What is the sum of angles in a quadrilateral?",
      a: "360°",
      options: ["180°", "270°", "360°", "450°"],
    },
    {
      q: "If two angles are complementary, they sum to:",
      a: "90°",
      options: ["45°", "90°", "180°", "360°"],
    },
    {
      q: "What is the area of a triangle with base 8 and height 5?",
      a: "20",
      options: ["13", "20", "40", "26"],
    },
    {
      q: "What shape has all sides equal and all angles 90°?",
      a: "Square",
      options: ["Rectangle", "Square", "Rhombus", "Trapezoid"],
    },
    {
      q: "What is the perimeter of a rectangle 5 × 10?",
      a: "30",
      options: ["15", "25", "30", "50"],
    },
    {
      q: "How many sides does an octagon have?",
      a: "8",
      options: ["6", "7", "8", "9"],
    },
    {
      q: "What is the area formula for a triangle?",
      a: "½ × base × height",
      options: ["base × height", "½ × base × height", "base + height", "2 × base × height"],
    },
    {
      q: "What is a line segment from center to edge of circle?",
      a: "Radius",
      options: ["Diameter", "Radius", "Chord", "Arc"],
    },
    {
      q: "If two angles are supplementary, they sum to:",
      a: "180°",
      options: ["90°", "180°", "270°", "360°"],
    },
    {
      q: "What is the volume formula for a rectangular prism?",
      a: "l × w × h",
      options: ["l + w + h", "l × w × h", "2(l + w + h)", "lwh/2"],
    },
    {
      q: "What is the area of a rectangle 9 × 3?",
      a: "27",
      options: ["12", "24", "27", "36"],
    },
    {
      q: "How many degrees in a right angle?",
      a: "90°",
      options: ["45°", "90°", "180°", "60°"],
    },
    {
      q: "What is a polygon with 4 sides called?",
      a: "Quadrilateral",
      options: ["Triangle", "Quadrilateral", "Pentagon", "Hexagon"],
    },
    {
      q: "What is the perimeter of a square with side 12?",
      a: "48",
      options: ["24", "36", "48", "144"],
    },
    {
      q: "What is a line from one side of circle through center?",
      a: "Diameter",
      options: ["Radius", "Diameter", "Chord", "Arc"],
    },
    {
      q: "What is the area of a square with side 6?",
      a: "36",
      options: ["12", "24", "36", "42"],
    },
    {
      q: "What are angles that share a common vertex and side?",
      a: "Adjacent angles",
      options: ["Vertical angles", "Adjacent angles", "Alternate angles", "Corresponding angles"],
    },
    {
      q: "What is the volume of a cube with side 3?",
      a: "27",
      options: ["9", "18", "27", "81"],
    },
    {
      q: "What is the perimeter of an equilateral triangle with side 7?",
      a: "21",
      options: ["14", "21", "28", "7"],
    },
    {
      q: "How many sides does a triangle have?",
      a: "3",
      options: ["2", "3", "4", "5"],
    },
    {
      q: "What is the area of a rectangle 4 × 8?",
      a: "32",
      options: ["12", "24", "32", "16"],
    },
    {
      q: "What is the measure of each angle in an equilateral triangle?",
      a: "60°",
      options: ["45°", "60°", "90°", "120°"],
    },
    {
      q: "What is the area formula for a circle?",
      a: "πr²",
      options: ["2πr", "πr²", "πd", "2r²"],
    },
    {
      q: "What is 360° ÷ 4?",
      a: "90°",
      options: ["45°", "60°", "90°", "120°"],
    },
    {
      q: "What is the perimeter of a rectangle 2 × 9?",
      a: "22",
      options: ["11", "18", "22", "20"],
    },
    {
      q: "What do you call two lines that never intersect?",
      a: "Parallel lines",
      options: ["Perpendicular lines", "Parallel lines", "Intersecting lines", "Diagonal lines"],
    },
    {
      q: "What is the area of a triangle with base 10 and height 6?",
      a: "30",
      options: ["16", "30", "60", "40"],
    },
  ],

  // ------------------------------
  // LEVEL 2 — MEDIUM (50 QUESTIONS)
  // Pythagorean theorem, circle properties, 3D shapes, coordinate geometry
  // ------------------------------
  kids_level2: [
    {
      q: "In a right triangle, if legs are 3 and 4, what is hypotenuse?",
      a: "5",
      options: ["5", "6", "7", "√7"],
    },
    {
      q: "What is the area of a circle with radius 5? (use π ≈ 3.14)",
      a: "78.5",
      options: ["31.4", "62.8", "78.5", "157"],
    },
    {
      q: "What is the volume of a cylinder with r = 2, h = 5? (π ≈ 3.14)",
      a: "62.8",
      options: ["31.4", "62.8", "20", "40"],
    },
    {
      q: "What is the surface area of a cube with side 4?",
      a: "96",
      options: ["64", "96", "48", "16"],
    },
    {
      q: "What is the distance between points (0,0) and (3,4)?",
      a: "5",
      options: ["5", "7", "12", "√7"],
    },
    {
      q: "What is the slope of line through (1,2) and (3,6)?",
      a: "2",
      options: ["1", "2", "4", "1/2"],
    },
    {
      q: "What is the circumference of a circle with diameter 10? (π ≈ 3.14)",
      a: "31.4",
      options: ["15.7", "31.4", "78.5", "62.8"],
    },
    {
      q: "What is the area of a trapezoid with bases 8, 12 and height 5?",
      a: "50",
      options: ["40", "50", "60", "100"],
    },
    {
      q: "If angles of a triangle are 60°, 60°, x. Find x.",
      a: "60°",
      options: ["60°", "90°", "120°", "30°"],
    },
    {
      q: "What is the volume of a rectangular prism 3 × 4 × 5?",
      a: "60",
      options: ["12", "60", "20", "120"],
    },
    {
      q: "What is the area of a parallelogram with base 10 and height 7?",
      a: "70",
      options: ["17", "70", "35", "140"],
    },
    {
      q: "In right triangle, if one leg = 6 and hypotenuse = 10, other leg?",
      a: "8",
      options: ["4", "7", "8", "16"],
    },
    {
      q: "What is the midpoint of (2,4) and (8,10)?",
      a: "(5, 7)",
      options: ["(5, 7)", "(10, 14)", "(6, 6)", "(4, 8)"],
    },
    {
      q: "What is the diagonal of a square with side 6?",
      a: "6√2",
      options: ["6", "6√2", "12", "36"],
    },
    {
      q: "What is the volume of a sphere with radius 3? (π ≈ 3.14)",
      a: "113.04",
      options: ["28.26", "37.68", "113.04", "339.12"],
    },
    {
      q: "What is the area of a rhombus with diagonals 8 and 6?",
      a: "24",
      options: ["14", "24", "48", "28"],
    },
    {
      q: "If exterior angle of triangle is 120°, what is remote interior sum?",
      a: "120°",
      options: ["60°", "90°", "120°", "180°"],
    },
    {
      q: "What is the lateral surface area of cylinder r = 3, h = 5? (π ≈ 3.14)",
      a: "94.2",
      options: ["47.1", "94.2", "141.3", "188.4"],
    },
    {
      q: "What is the slope of a horizontal line?",
      a: "0",
      options: ["0", "1", "undefined", "∞"],
    },
    {
      q: "What is the sum of interior angles of a pentagon?",
      a: "540°",
      options: ["360°", "540°", "720°", "900°"],
    },
    {
      q: "If triangle has sides 5, 12, 13, what type is it?",
      a: "Right triangle",
      options: ["Acute", "Right triangle", "Obtuse", "Equilateral"],
    },
    {
      q: "What is the area of a sector with angle 90° and radius 4? (π ≈ 3.14)",
      a: "12.56",
      options: ["6.28", "12.56", "25.12", "50.24"],
    },
    {
      q: "What is the distance between (1,2) and (4,6)?",
      a: "5",
      options: ["3", "5", "7", "√7"],
    },
    {
      q: "What is the volume of a cone with r = 3, h = 4? (π ≈ 3.14)",
      a: "37.68",
      options: ["12.56", "37.68", "75.36", "113.04"],
    },
    {
      q: "Each interior angle of a regular hexagon measures:",
      a: "120°",
      options: ["108°", "120°", "135°", "140°"],
    },
    {
      q: "What is the slope of a vertical line?",
      a: "Undefined",
      options: ["0", "1", "Undefined", "-1"],
    },
    {
      q: "What is the perimeter of a rhombus with side 7?",
      a: "28",
      options: ["14", "21", "28", "49"],
    },
    {
      q: "If two sides of triangle are 7 and 10, third side must be:",
      a: "Between 3 and 17",
      options: ["Less than 3", "Between 3 and 17", "Greater than 17", "Exactly 17"],
    },
    {
      q: "What is the area of equilateral triangle with side 6?",
      a: "9√3",
      options: ["18", "9√3", "6√3", "36"],
    },
    {
      q: "What is the surface area of a sphere with radius 5? (π ≈ 3.14)",
      a: "314",
      options: ["78.5", "157", "314", "523.3"],
    },
    {
      q: "What is the arc length of 60° in circle with radius 6? (π ≈ 3.14)",
      a: "6.28",
      options: ["3.14", "6.28", "12.56", "18.84"],
    },
    {
      q: "In isosceles triangle, if base angles are 50° each, vertex angle?",
      a: "80°",
      options: ["50°", "80°", "100°", "130°"],
    },
    {
      q: "What is the diagonal of rectangle 8 × 6?",
      a: "10",
      options: ["10", "14", "12", "48"],
    },
    {
      q: "What is the volume of pyramid with base area 24 and height 9?",
      a: "72",
      options: ["72", "216", "36", "108"],
    },
    {
      q: "What is the equation of line through origin with slope 3?",
      a: "y = 3x",
      options: ["y = 3x", "y = x + 3", "y = 3", "x = 3y"],
    },
    {
      q: "What is the perimeter of a regular pentagon with side 8?",
      a: "40",
      options: ["32", "40", "48", "64"],
    },
    {
      q: "If inscribed angle is 40°, what is the central angle?",
      a: "80°",
      options: ["20°", "40°", "80°", "160°"],
    },
    {
      q: "What is the area of a kite with diagonals 10 and 12?",
      a: "60",
      options: ["22", "60", "120", "110"],
    },
    {
      q: "What is the sum of interior angles of an octagon?",
      a: "1080°",
      options: ["720°", "900°", "1080°", "1260°"],
    },
    {
      q: "If two chords intersect in circle, what angles are formed?",
      a: "Vertical angles are equal",
      options: ["All equal", "Vertical angles are equal", "All 90°", "Sum to 360°"],
    },
    {
      q: "What is the area of regular hexagon with side 4?",
      a: "24√3",
      options: ["24", "24√3", "48", "48√3"],
    },
    {
      q: "If altitude to hypotenuse of right triangle is 6, and segments are 4 and 9, hypotenuse?",
      a: "13",
      options: ["10", "13", "15", "√85"],
    },
    {
      q: "What is the measure of each exterior angle of regular decagon?",
      a: "36°",
      options: ["30°", "36°", "40°", "45°"],
    },
    {
      q: "What is the area of circle inscribed in square with side 8? (π ≈ 3.14)",
      a: "50.24",
      options: ["12.56", "25.12", "50.24", "200.96"],
    },
    {
      q: "If tangent to circle makes 90° with radius, what theorem?",
      a: "Tangent perpendicular to radius",
      options: ["Pythagorean", "Tangent perpendicular to radius", "Inscribed angle", "Central angle"],
    },
    {
      q: "What is the volume of a prism with base area 15 and height 8?",
      a: "120",
      options: ["23", "120", "60", "240"],
    },
    {
      q: "What is the slope of line 2x + 3y = 6?",
      a: "-2/3",
      options: ["2/3", "-2/3", "3/2", "-3/2"],
    },
    {
      q: "What is the diagonal of a cube with side 4?",
      a: "4√3",
      options: ["4", "4√2", "4√3", "8"],
    },
    {
      q: "If parallelogram has consecutive angles x and 3x, find x:",
      a: "45°",
      options: ["30°", "45°", "60°", "90°"],
    },
    {
      q: "What is the area of semicircle with diameter 10? (π ≈ 3.14)",
      a: "39.25",
      options: ["15.7", "25.12", "39.25", "78.5"],
    },
  ],

  // ------------------------------
  // LEVEL 3 — HARD (50 QUESTIONS)
  // Advanced theorems, proofs, coordinate geometry, transformations, circles
  // ------------------------------
  kids_level3: [
    {
      q: "In 30-60-90 triangle, if short leg = 5, what is long leg?",
      a: "5√3",
      options: ["5", "5√2", "5√3", "10"],
    },
    {
      q: "What is the centroid dividing ratio of median in triangle?",
      a: "2:1",
      options: ["1:1", "2:1", "1:2", "3:1"],
    },
    {
      q: "If circle has equation (x-3)² + (y+2)² = 16, what is center?",
      a: "(3, -2)",
      options: ["(3, 2)", "(3, -2)", "(-3, 2)", "(-3, -2)"],
    },
    {
      q: "What is the area of triangle with vertices (0,0), (4,0), (2,3)?",
      a: "6",
      options: ["6", "12", "8", "10"],
    },
    {
      q: "If two secants from external point, PA × PB = ?",
      a: "PC × PD",
      options: ["PC × PD", "PA + PB", "PA - PB", "Equal to radius"],
    },
    {
      q: "What is the locus of points equidistant from two points?",
      a: "Perpendicular bisector",
      options: ["Circle", "Perpendicular bisector", "Parallel lines", "Parabola"],
    },
    {
      q: "In 45-45-90 triangle, if leg = 7, what is hypotenuse?",
      a: "7√2",
      options: ["7", "7√2", "14", "7√3"],
    },
    {
      q: "What is the area of ellipse with semi-axes 3 and 4? (π ≈ 3.14)",
      a: "37.68",
      options: ["12.56", "25.12", "37.68", "75.36"],
    },
    {
      q: "If inscribed angle intercepts 120° arc, angle measures:",
      a: "60°",
      options: ["30°", "60°", "120°", "240°"],
    },
    {
      q: "What is the equation of circle center (2,-3) radius 5?",
      a: "(x-2)² + (y+3)² = 25",
      options: ["(x-2)² + (y-3)² = 25", "(x-2)² + (y+3)² = 25", "(x+2)² + (y-3)² = 5", "(x-2)² + (y+3)² = 5"],
    },
    {
      q: "What is the power of point (5,0) with respect to x² + y² = 9?",
      a: "16",
      options: ["4", "16", "25", "34"],
    },
    {
      q: "If two tangents from external point to circle, they are:",
      a: "Equal in length",
      options: ["Equal in length", "Perpendicular", "Different lengths", "Parallel"],
    },
    {
      q: "What is the distance from (2,3) to line 3x + 4y = 10?",
      a: "4/5",
      options: ["4/5", "1", "8/5", "2"],
    },
    {
      q: "What transformation is (x,y) → (-x, -y)?",
      a: "Rotation 180°",
      options: ["Reflection over x-axis", "Reflection over y-axis", "Rotation 180°", "Translation"],
    },
    {
      q: "If altitudes of triangle meet at point H, what is H called?",
      a: "Orthocenter",
      options: ["Centroid", "Circumcenter", "Incenter", "Orthocenter"],
    },
    {
      q: "What is the area of triangle with sides 13, 14, 15?",
      a: "84",
      options: ["84", "90", "105", "168"],
    },
    {
      q: "If diagonals of quadrilateral bisect each other, it is:",
      a: "Parallelogram",
      options: ["Trapezoid", "Parallelogram", "Kite", "Rectangle"],
    },
    {
      q: "What is the volume of tetrahedron with edge length 6?",
      a: "36√2",
      options: ["36", "36√2", "72", "216"],
    },
    {
      q: "If angle between two chords is 50° and arcs are x and 80°, find x:",
      a: "20°",
      options: ["20°", "30°", "40°", "130°"],
    },
    {
      q: "What is the sum of distances from any point on ellipse to foci?",
      a: "Constant (2a)",
      options: ["Varies", "Constant (2a)", "Equals semi-minor axis", "Zero"],
    },
    {
      q: "If perpendicular bisectors of triangle meet at O, what is O?",
      a: "Circumcenter",
      options: ["Centroid", "Circumcenter", "Incenter", "Orthocenter"],
    },
    {
      q: "What is the equation of perpendicular bisector of (1,2) and (5,6)?",
      a: "y = -x + 7",
      options: ["y = x + 3", "y = -x + 7", "y = x - 1", "y = -x + 3"],
    },
    {
      q: "If similar triangles have ratio 2:3, area ratio is:",
      a: "4:9",
      options: ["2:3", "4:9", "8:27", "4:6"],
    },
    {
      q: "What is the length of median to hypotenuse of right triangle?",
      a: "Half the hypotenuse",
      options: ["Equal to leg", "Half the hypotenuse", "Equal to hypotenuse", "Varies"],
    },
    {
      q: "If line has equation 4x - 3y = 12, what is y-intercept?",
      a: "-4",
      options: ["3", "4", "-3", "-4"],
    },
    {
      q: "What is the area of regular dodecagon with side 2?",
      a: "24",
      options: ["12", "24", "36", "48"],
    },
    {
      q: "If tangent and secant from external point, tangent² = ?",
      a: "External × whole secant",
      options: ["External × whole secant", "Radius²", "Diameter", "Half chord"],
    },
    {
      q: "What is the surface area of cone with r = 4, slant = 5? (π ≈ 3.14)",
      a: "113.04",
      options: ["62.8", "75.36", "113.04", "150.72"],
    },
    {
      q: "If angle bisectors meet at I, what is I called?",
      a: "Incenter",
      options: ["Centroid", "Circumcenter", "Incenter", "Orthocenter"],
    },
    {
      q: "What is the reflection of (3, -5) over the x-axis?",
      a: "(3, 5)",
      options: ["(3, 5)", "(-3, -5)", "(-3, 5)", "(3, -5)"],
    },
    {
      q: "If base angles of isosceles trapezoid are 60°, find other angles:",
      a: "120° each",
      options: ["60° each", "120° each", "90° each", "30° each"],
    },
    {
      q: "What is the area of cyclic quadrilateral with sides 3,4,5,6?",
      a: "18",
      options: ["15", "18", "21", "24"],
    },
    {
      q: "If two parallel lines cut by transversal, alternate interior angles are:",
      a: "Equal",
      options: ["Equal", "Supplementary", "Complementary", "Different"],
    },
    {
      q: "What is the equation of line perpendicular to 2x + 5y = 10?",
      a: "5x - 2y = c",
      options: ["2x + 5y = c", "5x - 2y = c", "-2x - 5y = c", "5x + 2y = c"],
    },
    {
      q: "If triangle has sides a, b, c and s = (a+b+c)/2, area = ?",
      a: "√[s(s-a)(s-b)(s-c)]",
      options: ["½ab", "√[s(s-a)(s-b)(s-c)]", "abc/4", "s²"],
    },
    {
      q: "What is the volume of octahedron with edge 4?",
      a: "64√2/3",
      options: ["64", "64√2/3", "128", "256/3"],
    },
    {
      q: "If point (4,k) is on line 3x - 2y = 8, find k:",
      a: "2",
      options: ["2", "4", "6", "8"],
    },
    {
      q: "What is the angle between hour and minute hands at 3:00?",
      a: "90°",
      options: ["60°", "75°", "90°", "120°"],
    },
    {
      q: "If medians of triangle are 6, 8, 10, what is area?",
      a: "32",
      options: ["24", "32", "40", "48"],
    },
    {
      q: "What is the radius of circle inscribed in triangle 3-4-5?",
      a: "1",
      options: ["1", "1.5", "2", "2.5"],
    },
    {
      q: "If similar solids have ratio 1:2, volume ratio is:",
      a: "1:8",
      options: ["1:2", "1:4", "1:6", "1:8"],
    },
    {
      q: "What transformation is (x,y) → (y, x)?",
      a: "Reflection over y = x",
      options: ["Reflection over x-axis", "Reflection over y-axis", "Reflection over y = x", "Rotation 90°"],
    },
    {
      q: "If trapezoid has bases 8 and 12, median length is:",
      a: "10",
      options: ["4", "10", "20", "96"],
    },
    {
      q: "What is the shortest distance from point to line?",
      a: "Perpendicular distance",
      options: ["Any distance", "Perpendicular distance", "Parallel distance", "Diagonal distance"],
    },
    {
      q: "If regular polygon has exterior angle 40°, how many sides?",
      a: "9",
      options: ["8", "9", "10", "12"],
    },
    {
      q: "What is the area of rhombus with side 5 and angle 60°?",
      a: "25√3/2",
      options: ["25", "25√3/2", "25√3", "50"],
    },
    {
      q: "If two circles touch externally, distance between centers = ?",
      a: "r₁ + r₂",
      options: ["r₁ + r₂", "r₁ - r₂", "|r₁ - r₂|", "2(r₁ + r₂)"],
    },
    {
      q: "What is the locus of points with constant sum of distances to two foci?",
      a: "Ellipse",
      options: ["Circle", "Ellipse", "Parabola", "Hyperbola"],
    },
    {
      q: "If parallelogram has diagonals 10 and 24, and side 13, find other side:",
      a: "13",
      options: ["5", "12", "13", "17"],
    },
    {
      q: "What is the sum of squares of medians of triangle with sides a, b, c?",
      a: "¾(a² + b² + c²)",
      options: ["a² + b² + c²", "¾(a² + b² + c²)", "½(a² + b² + c²)", "2(a² + b² + c²)"],
    },
  ],
};

export { geometryQuestions };


