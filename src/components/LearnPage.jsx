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
  }
};

export default function LearnPage() {
  const { slug } = useParams();
  const content = learnContent[slug];

  if (!content) {
    return (
      <main style={{ maxWidth: 900, margin: "30px auto", padding: "0 20px" }}>
        <SeoMeta
          title="Learn | Smart Kids Quiz"
          description="Educational learning guides for kids in math, english, and science."
          canonicalPath="/learn"
        />
        <h1>Learn</h1>
        <p>Article not found. Choose one of our learning guides:</p>
        <ul>
          <li><Link to="/learn/math-for-kids">Math for Kids</Link></li>
          <li><Link to="/learn/english-for-kids">English for Kids</Link></li>
          <li><Link to="/learn/science-for-kids">Science for Kids</Link></li>
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
        <Link to="/">Home</Link> · <Link to="/about">About</Link> · <Link to="/contact">Contact</Link> · <Link to="/privacy">Privacy Policy</Link>
      </nav>

      <article>
        <h1>{content.title}</h1>
        <p>{content.intro}</p>

        {content.sections.map((section) => (
          <section key={section.heading} style={{ marginTop: 18 }}>
            <h2>{section.heading}</h2>
            <p>{section.text}</p>
          </section>
        ))}
      </article>

      <AdSense slot="9408631164" format="auto" />
    </main>
  );
}
