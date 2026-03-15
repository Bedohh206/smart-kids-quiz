import React from "react";
import { Link, useParams } from "react-router-dom";
import AdSense from "./AdSense";
import SeoMeta from "./SeoMeta";

const learnContent = {
  "math-for-kids": {
    title: "Math for Kids",
    intro:
      "Math helps children understand patterns, solve real-life problems, and think clearly. Start with simple ideas, then build confidence through everyday examples.",
    sections: [
      {
        heading: "Counting and Number Sense",
        text: "Children first learn that numbers represent quantity. Practice counting objects around the house, comparing which groups have more or less, and ordering numbers from smallest to biggest."
      },
      {
        heading: "Addition and Subtraction",
        text: "Addition means putting groups together, and subtraction means taking away. Use stories such as 'You had 5 apples and ate 2, how many are left?' so kids connect math to daily life."
      },
      {
        heading: "Shapes and Measurement",
        text: "Identify circles, squares, rectangles, and triangles in toys, signs, and furniture. Measure length with rulers and compare weights to build practical math understanding."
      },
      {
        heading: "Tips for Parents",
        text: "Keep practice short and positive, celebrate effort, and use games to make learning enjoyable. Consistency matters more than long sessions."
      }
    ]
  },
  "english-for-kids": {
    title: "English for Kids",
    intro:
      "Strong language skills help children read better, express ideas clearly, and succeed across all school subjects.",
    sections: [
      {
        heading: "Vocabulary Building",
        text: "Introduce new words through stories, conversations, and pictures. Encourage children to use new words in complete sentences during daily routines."
      },
      {
        heading: "Reading Comprehension",
        text: "Ask simple questions after reading: Who is the main character? What happened first? Why did it happen? This helps children understand meaning, not just pronounce words."
      },
      {
        heading: "Grammar Basics",
        text: "Teach nouns, verbs, adjectives, and punctuation through examples. Practice turning short phrases into full sentences with proper capitalization and punctuation."
      },
      {
        heading: "Writing Practice",
        text: "Start with short writing prompts such as 'My favorite animal' or 'What I learned today.' Encourage neat handwriting and clear sentence structure."
      }
    ]
  },
  "science-for-kids": {
    title: "Science for Kids",
    intro:
      "Science teaches children to observe carefully, ask questions, and test ideas. It builds curiosity and problem-solving skills for life.",
    sections: [
      {
        heading: "Observation and Inquiry",
        text: "Ask children what they notice about plants, weather, animals, and materials. Help them form simple questions and predictions before experiments."
      },
      {
        heading: "Basic Experiments",
        text: "Try safe activities like mixing colors, floating and sinking tests, or seed growth in sunlight vs shade. Discuss the results and what they mean."
      },
      {
        heading: "Earth and Space",
        text: "Teach day and night, seasons, planets, and weather patterns using visuals and outdoor observation. Connect science topics to what children see around them."
      },
      {
        heading: "Scientific Thinking",
        text: "Encourage children to describe evidence, explain their thinking, and revise ideas when new information appears. This is the foundation of scientific literacy."
      }
    ]
  },
  "algebra-for-kids": {
    title: "Algebra for Kids",
    intro:
      "Algebra helps children notice patterns, use symbols, and solve unknowns step by step. It builds strong thinking skills for later math topics.",
    sections: [
      {
        heading: "What Is a Variable?",
        text: "A variable is a letter that stands for a number we do not know yet. Start with simple examples like x + 3 = 7 and let children find the missing value."
      },
      {
        heading: "Patterns and Rules",
        text: "Use number patterns such as 2, 4, 6, 8 to help learners discover rules. Ask children to explain the rule in words before writing it as a math expression."
      },
      {
        heading: "Balancing Equations",
        text: "Teach that both sides of an equation must stay equal. Use concrete examples, including blocks or drawings, to show why the same action on both sides keeps balance."
      },
      {
        heading: "Real-Life Algebra",
        text: "Connect algebra to shopping totals, distance problems, and simple schedules. Real contexts make symbols less abstract and easier to understand."
      }
    ]
  },
  "geometry-for-kids": {
    title: "Geometry for Kids",
    intro:
      "Geometry teaches children how shapes, lines, and space work in the world around them. It supports visual reasoning and practical problem solving.",
    sections: [
      {
        heading: "2D and 3D Shapes",
        text: "Compare flat shapes like triangles and rectangles with 3D objects like cubes and spheres. Encourage learners to identify faces, edges, and corners."
      },
      {
        heading: "Angles and Lines",
        text: "Introduce right, acute, and obtuse angles using clocks, books, and doors. Discuss parallel and perpendicular lines with classroom examples."
      },
      {
        heading: "Perimeter and Area Basics",
        text: "Use grid paper to count squares for area and trace boundaries for perimeter. Children understand better when they can draw and measure directly."
      },
      {
        heading: "Geometry in Daily Life",
        text: "Point out geometry in buildings, road signs, packaging, and sports fields. This helps kids see geometry as a useful life skill, not only a school topic."
      }
    ]
  },
  "coding-for-kids": {
    title: "Coding for Kids",
    intro:
      "Coding teaches children logical thinking, sequencing, and creativity. Kids learn to break big tasks into small steps and test ideas.",
    sections: [
      {
        heading: "Algorithms and Steps",
        text: "Explain that code is a set of instructions. Practice with unplugged activities, such as giving step-by-step directions to complete a simple task."
      },
      {
        heading: "Loops and Repetition",
        text: "Show how loops repeat actions to save time. Use examples like clapping patterns or repeating drawing commands to build intuition."
      },
      {
        heading: "Conditions and Decisions",
        text: "Teach if-then logic using everyday choices: 'If it rains, take an umbrella.' This prepares learners for program decision making."
      },
      {
        heading: "Debugging Mindset",
        text: "Encourage children to treat mistakes as clues. Reading errors calmly and testing one change at a time builds resilience and analytical thinking."
      }
    ]
  },
  "health-for-kids": {
    title: "Health Education for Kids",
    intro:
      "Health education helps children build habits that support growth, focus, and wellbeing. Small daily routines create long-term benefits.",
    sections: [
      {
        heading: "Nutrition Fundamentals",
        text: "Teach balanced meals using fruits, vegetables, proteins, and whole grains. Explain how food gives energy for learning and play."
      },
      {
        heading: "Movement and Exercise",
        text: "Children need regular movement for healthy bodies and minds. Mix structured exercise with active play, stretching, and outdoor activities."
      },
      {
        heading: "Sleep and Daily Routine",
        text: "Consistent sleep schedules improve memory, attention, and mood. Support bedtime routines with reduced screen time before sleep."
      },
      {
        heading: "Hygiene and Prevention",
        text: "Reinforce handwashing, dental care, hydration, and basic illness prevention. Practical health habits help children stay safe at school and home."
      }
    ]
  },
  "history-for-kids": {
    title: "History for Kids",
    intro:
      "History helps children understand how people lived in the past and how events shape the world today. It strengthens critical thinking and perspective.",
    sections: [
      {
        heading: "Timelines and Sequence",
        text: "Teach children to place events in order using simple timelines. Understanding what happened first, next, and later helps make history easier to follow."
      },
      {
        heading: "People and Communities",
        text: "Explore how families, schools, leaders, and communities changed over time. Comparing past and present helps children connect history to daily life."
      },
      {
        heading: "Primary and Secondary Sources",
        text: "Introduce photos, letters, maps, and stories as evidence from the past. Children learn that historians use sources to build explanations."
      },
      {
        heading: "Learning from History",
        text: "Discuss achievements, mistakes, and turning points in age-appropriate ways. Encourage children to ask what lessons from the past can improve the future."
      }
    ]
  },
  "geography-for-kids": {
    title: "Geography for Kids",
    intro:
      "Geography helps children understand places, environments, and how people live across the world. It builds map skills and global awareness.",
    sections: [
      {
        heading: "Maps and Directions",
        text: "Teach map symbols, compass directions, and simple coordinates. Let children practice finding places and describing routes from one location to another."
      },
      {
        heading: "Landforms and Water",
        text: "Introduce mountains, rivers, valleys, deserts, and oceans with pictures and examples. Explain how land and water affect settlement and travel."
      },
      {
        heading: "Weather and Climate",
        text: "Help children compare daily weather with long-term climate. Use local observations and global examples to show why regions can be very different."
      },
      {
        heading: "People, Culture, and Environment",
        text: "Discuss how food, homes, transport, and traditions vary by region. Geography becomes meaningful when children see links between place and lifestyle."
      }
    ]
  }
};

const adApprovedSlugs = new Set([
  "math-for-kids",
  "english-for-kids",
  "science-for-kids",
  "algebra-for-kids",
  "geometry-for-kids",
  "coding-for-kids",
  "health-for-kids",
  "history-for-kids",
  "geography-for-kids"
]);

const moduleUpdatedDates = {
  "math-for-kids": "March 2026",
  "english-for-kids": "March 2026",
  "science-for-kids": "March 2026",
  "algebra-for-kids": "March 2026",
  "geometry-for-kids": "March 2026",
  "coding-for-kids": "March 2026",
  "health-for-kids": "March 2026",
  "history-for-kids": "March 2026",
  "geography-for-kids": "March 2026"
};

export default function LearnPage() {
  const { slug } = useParams();
  const content = learnContent[slug];

  if (!content) {
    return (
      <main style={{ maxWidth: 900, margin: "30px auto", padding: "0 20px" }}>
        <SeoMeta
          title="Learn | Smart Kids Quiz"
          description="Educational learning guides for kids in math, english, science, algebra, geometry, coding, and health."
          canonicalPath="/learn"
        />
        <h1>Learn</h1>
        <p>Article not found. Choose one of our learning guides:</p>
        <ul>
          <li><Link to="/learn/math-for-kids">Math for Kids</Link></li>
          <li><Link to="/learn/english-for-kids">English for Kids</Link></li>
          <li><Link to="/learn/science-for-kids">Science for Kids</Link></li>
          <li><Link to="/learn/algebra-for-kids">Algebra for Kids</Link></li>
          <li><Link to="/learn/geometry-for-kids">Geometry for Kids</Link></li>
          <li><Link to="/learn/coding-for-kids">Coding for Kids</Link></li>
          <li><Link to="/learn/health-for-kids">Health Education for Kids</Link></li>
          <li><Link to="/learn/history-for-kids">History for Kids</Link></li>
          <li><Link to="/learn/geography-for-kids">Geography for Kids</Link></li>
        </ul>
        <p><Link to="/">Back to Home</Link></p>
      </main>
    );
  }

  return (
    <main style={{ maxWidth: 900, margin: "30px auto", padding: "0 20px", lineHeight: 1.75 }}>
      <SeoMeta
        title={`${content.title} | Smart Kids Quiz`}
        description={content.intro}
        canonicalPath={`/learn/${slug}`}
      />
      <nav style={{ marginBottom: 16 }}>
        <Link to="/">Home</Link> · <Link to="/about">About</Link> · <Link to="/contact">Contact</Link> · <Link to="/privacy">Privacy Policy</Link> · <Link to="/terms">Terms of Service</Link>
      </nav>

      <article>
        <h1>{content.title}</h1>
        <p>{content.intro}</p>
        {moduleUpdatedDates[slug] && (
          <p style={{ fontSize: "0.95rem", color: "#555", marginTop: 6 }}>
            Updated: {moduleUpdatedDates[slug]}
          </p>
        )}

        {content.sections.map((section) => (
          <section key={section.heading} style={{ marginTop: 18 }}>
            <h2>{section.heading}</h2>
            <p>{section.text}</p>
          </section>
        ))}
      </article>

      {adApprovedSlugs.has(slug) && <AdSense slot="9408631164" format="auto" />}
    </main>
  );
}
