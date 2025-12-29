# Algebra - Two Mode System

## Overview
Algebra has been implemented with a **dual-mode** structure to accommodate different age groups and skill levels.

## Modes

### 1. **Kids Mode** 👶
- **Target Age**: 6-8 years (Early Elementary)
- **Level Structure**:
  - `kids_level1` (Easy) - 50 questions
    - Basic patterns and sequences
    - Simple missing numbers
    - Introduction to variables
  - `kids_level2` (Medium) - 50 questions
    - Simple equations with variables
    - Basic order of operations
    - Introduction to solving for unknowns
  - `kids_level3` (Hard) - 50 questions
    - More complex equations
    - Fractions and negative numbers
    - Multi-step problems

**Example Topics**: Pattern completion, basic variable introduction (x + 5 = 12), order of operations, simple word problems

### 2. **Advanced Mode** 🎓
- **Target Age**: 13-14 years (Early High School)
- **Level Structure**:
  - `advanced_level1` (Easy) - 50 questions
    - Linear equations
    - Basic expressions
    - Simple algebraic operations
  - `advanced_level2` (Medium) - 50 questions
    - Polynomials and factoring
    - Inequalities
    - Systems of equations
    - Quadratics
  - `advanced_level3` (Hard) - 50 questions
    - Complex quadratics
    - Rational expressions
    - Radicals
    - Quadratic formula and completing the square

**Example Topics**: Solving linear equations, factoring polynomials, quadratic formula, systems of equations, rational expressions

## Implementation Details

### File Structure
```
src/
  data/
    algebraQuestions.js    - Contains all question banks for both modes
  components/
    QuizPage.jsx          - Main quiz component with mode selection logic
```

### Question Bank Structure
```javascript
const algebraQuestions = {
  // Kids Mode
  kids_level1: [...],
  kids_level2: [...],
  kids_level3: [...],
  
  // Advanced Mode
  advanced_level1: [...],
  advanced_level2: [...],
  advanced_level3: [...],
};
```

### User Flow
1. User selects "Algebra" from the World Map or subject menu
2. **Mode Selection Screen** appears:
   - Option 1: 👶 Kids Mode (Ages 8-12)
   - Option 2: 🎓 Advanced Mode (Ages 13-17)
3. User selects their mode
4. **Level Selection Screen** shows 3 levels (level1, level2, level3)
5. User selects level and starts quiz

### Code Logic
- When algebra is selected and no mode is chosen, the mode selection screen is displayed
- After mode selection, only the relevant levels for that mode are shown
- Questions are loaded based on the combined key: `{mode}_{level}` (e.g., `kids_level1` or `advanced_level2`)
- Users can change mode using the "Change Algebra Mode" button on the level selection screen

## Future Enhancements (Compliance Structure)
You mentioned designing a "compliance structure" - this could include:
- Progress tracking across modes
- Certificates/badges for completing mode levels
- Standards alignment (Common Core, etc.)
- Performance analytics
- Adaptive difficulty
- Prerequisite checking (Kids → Advanced progression)

## Adding New Questions
To add more algebra questions:

1. Open `src/data/algebraQuestions.js`
2. Navigate to the appropriate mode and level
3. Add questions following this format:
```javascript
{
  q: "Question text here",
  a: "Correct answer",
  options: ["Option 1", "Option 2", "Option 3", "Option 4"],
}
```

## Testing
Test the implementation by:
1. Navigate to Algebra from the main menu
2. Verify mode selection screen appears
3. Test both Kids and Advanced modes
4. Verify appropriate questions appear for each level
5. Test the "Change Algebra Mode" button

---

**Note**: The current implementation includes 150 questions per mode (50 per level × 3 levels), totaling 300 algebra questions.
