import React from "react";
import { Link } from "react-router-dom";
import SeoMeta from "./SeoMeta";

export default function AboutPage() {
  return (
    <main style={{ maxWidth: 900, margin: "30px auto", padding: "0 20px", lineHeight: 1.7 }}>
      <SeoMeta
        title="About | Smart Kids Quiz"
        description="Learn about Smart Kids Quiz, our educational mission, and learning resources for children."
        canonicalPath="/about"
      />
      <h1>About Smart Kids Quiz</h1>
      <p>
        Smart Kids Quiz is an educational learning platform for children, families, and teachers.
        We combine quizzes, guided lessons, and simple practice activities to help learners build
        strong foundations in reading, math, science, geography, and problem solving.
      </p>
      <p>
        Our goal is to make learning clear, engaging, and age-appropriate for young learners from
        early elementary through middle school.
      </p>

      <section style={{ marginTop: 18 }}>
        <h2>Our Learning Approach</h2>
        <p>
          Children learn best when practice is short, encouraging, and repeated over time. Our
          content is written in simple language, uses familiar examples, and focuses on one concept
          at a time so learners can build confidence step by step.
        </p>
        <p>
          We design activities to support classroom learning and at-home revision. Parents and
          teachers can use the app for warm-up practice, homework support, and review before tests.
        </p>
      </section>

      <section style={{ marginTop: 18 }}>
        <h2>What You Can Find on Smart Kids Quiz</h2>
        <ul>
          <li>Interactive quizzes for multiple school subjects and general knowledge topics</li>
          <li>Guided learning articles with practical examples and age-friendly explanations</li>
          <li>AI-assisted explanations for selected educational tasks</li>
          <li>Progress-focused activities that encourage regular practice</li>
          <li>Simple educational resources for parents and classroom helpers</li>
        </ul>
      </section>

      <section style={{ marginTop: 18 }}>
        <h2>Editorial and Quality Standards</h2>
        <p>
          We review learning content for clarity, age suitability, and educational usefulness. When
          we use AI tools, outputs are treated as drafts and reviewed before becoming part of the
          learning experience.
        </p>
        <p>
          Our team updates lessons and explanations regularly to keep topics understandable,
          relevant, and useful for real learning outcomes.
        </p>
      </section>

      <section style={{ marginTop: 18 }}>
        <h2>Safety and Child-Friendly Design</h2>
        <p>
          Smart Kids Quiz is built to be child-friendly and privacy-conscious. We avoid
          account-heavy onboarding, keep interactions straightforward, and prioritize educational
          value over distraction.
        </p>
        <p>
          For details on data handling and user rights, review our <Link to="/privacy">Privacy Policy</Link> and <Link to="/terms">Terms of Service</Link>.
        </p>
      </section>

      <section style={{ marginTop: 18 }}>
        <h2>Explore Learning Guides</h2>
        <p>
          Visit our educational articles: <Link to="/learn/math-for-kids">Math</Link>,{" "}
          <Link to="/learn/english-for-kids">English</Link>, and{" "}
          <Link to="/learn/science-for-kids">Science</Link>.
        </p>
      </section>

      <section style={{ marginTop: 18 }}>
        <h2>Contact and Collaboration</h2>
        <p>
          We welcome feedback from parents, teachers, and school communities. If you want to suggest
          a topic, report an issue, or request a classroom-friendly feature, visit our{" "}
          <Link to="/contact">Contact page</Link>.
        </p>
      </section>
      <p><Link to="/">Back to Home</Link></p>
    </main>
  );
}
