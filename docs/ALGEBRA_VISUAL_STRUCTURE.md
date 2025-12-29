# Algebra Mode Structure - Visual Flow

```
                           WORLD MAP / MENU
                                  |
                         Click "Algebra 1"
                                  |
                                  v
                    ╔═══════════════════════════════╗
                    ║   MODE SELECTION SCREEN       ║
                    ║                               ║
                    ║  ┌─────────────────────────┐ ║
                    ║  │  👶 KIDS MODE           │ ║
                    ║  │  Early Elementary       │ ║
                    ║  │  Ages 6-8               │ ║
                    ║  └─────────────────────────┘ ║
                    ║                               ║
                    ║  ┌─────────────────────────┐ ║
                    ║  │  🎓 ADVANCED MODE       │ ║
                    ║  │  Early High School      │ ║
                    ║  │  Ages 13-14             │ ║
                    ║  └─────────────────────────┘ ║
                    ╚═══════════════════════════════╝
                          |                |
                    [Kids]                [Advanced]
                          |                |
                          v                v
        ┌─────────────────────┐  ┌─────────────────────┐
        │  LEVEL SELECTION    │  │  LEVEL SELECTION    │
        │  (Kids Mode)        │  │  (Advanced Mode)    │
        │                     │  │                     │
        │  • Level 1 (Easy)   │  │  • Level 1 (Easy)   │
        │  • Level 2 (Medium) │  │  • Level 2 (Medium) │
        │  • Level 3 (Hard)   │  │  • Level 3 (Hard)   │
        │                     │  │                     │
        │  [Change Mode]      │  │  [Change Mode]      │
        └─────────────────────┘  └─────────────────────┘
                  |                        |
                  v                        v
        ┌─────────────────────┐  ┌─────────────────────┐
        │  QUIZ               │  │  QUIZ               │
        │  kids_level1        │  │  advanced_level1    │
        │  kids_level2        │  │  advanced_level2    │
        │  kids_level3        │  │  advanced_level3    │
        └─────────────────────┘  └─────────────────────┘
```

## Question Distribution

```
┌──────────────────────────────────────────────────┐
│              KIDS MODE (150 Questions)           │
├──────────────────────────────────────────────────┤
│  Level 1 (Easy)      → 50 questions              │
│  - Basic patterns                                │
│  - Missing numbers                               │
│  - Simple sequences                              │
├──────────────────────────────────────────────────┤
│  Level 2 (Medium)    → 50 questions              │
│  - Simple equations with variables               │
│  - Order of operations                           │
│  - Solving for unknowns                          │
├──────────────────────────────────────────────────┤
│  Level 3 (Hard)      → 50 questions              │
│  - Complex equations                             │
│  - Fractions & negative numbers                  │
│  - Multi-step problems                           │
└──────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────┐
│         ADVANCED MODE (150 Questions)            │
├──────────────────────────────────────────────────┤
│  Level 1 (Easy)      → 50 questions              │
│  - Linear equations                              │
│  - Basic expressions                             │
│  - Simple operations                             │
├──────────────────────────────────────────────────┤
│  Level 2 (Medium)    → 50 questions              │
│  - Polynomials & factoring                       │
│  - Inequalities                                  │
│  - Quadratics                                    │
├──────────────────────────────────────────────────┤
│  Level 3 (Hard)      → 50 questions              │
│  - Complex quadratics                            │
│  - Rational expressions                          │
│  - Radicals & advanced concepts                  │
└──────────────────────────────────────────────────┘
```

## Sample Questions by Mode

### Kids Mode Examples

**Level 1:**
```
Q: What number comes next? 2, 4, 6, 8, __
A: 10
```

**Level 2:**
```
Q: If x + 5 = 12, what is x?
A: 7
```

**Level 3:**
```
Q: If 2x + 3 = 11, what is x?
A: 4
```

### Advanced Mode Examples

**Level 1:**
```
Q: Solve for x: 3x + 6 = 21
A: 5
```

**Level 2:**
```
Q: Factor: x² + 5x + 6
A: (x + 2)(x + 3)
```

**Level 3:**
```
Q: Use quadratic formula: x² + 4x - 5 = 0
A: x = 1 or x = -5
```

## Technical Implementation

### Data Structure
```javascript
const algebraQuestions = {
  // Kids Mode (Ages 8-12)
  kids_level1: [...50 questions...],
  kids_level2: [...50 questions...],
  kids_level3: [...50 questions...],
  
  // Advanced Mode (Ages 13-17)
  advanced_level1: [...50 questions...],
  advanced_level2: [...50 questions...],
  advanced_level3: [...50 questions...],
};
```

### QuizPage Logic
```javascript
// 1. Mode Selection
if (finalKey === "algebra" && !algebraMode) {
  // Show mode selection screen
}

// 2. Level Key Construction
let levelKey = selectedLevel;
if (finalKey === "algebra" && algebraMode) {
  levelKey = `${algebraMode}_${selectedLevel}`;
  // e.g., "kids_level1" or "advanced_level2"
}

// 3. Load Questions
const base = selectedSet[levelKey];
```

## Key Features

✓ **Dual-Mode System**: Separate content for different age groups  
✓ **300 Total Questions**: 150 per mode, well-distributed  
✓ **Clear Navigation**: Intuitive mode and level selection  
✓ **Mode Switching**: Easy to change modes without restarting  
✓ **Age-Appropriate**: Content tailored to skill level  
✓ **Consistent Structure**: Same pattern as other subjects  

## Next Steps (Compliance Structure)

- [ ] Add progress tracking per mode
- [ ] Implement achievement badges
- [ ] Add standards alignment metadata
- [ ] Create performance analytics
- [ ] Build prerequisite system
- [ ] Add parent/teacher dashboard
- [ ] Generate completion certificates
