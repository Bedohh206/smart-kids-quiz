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
        Smart Kids Quiz is an educational app designed to help children practice core subjects
        through interactive quizzes, guided lessons, and skill-based activities.
      </p>
      <p>
        Our goal is to make learning clear, engaging, and age-appropriate for young learners.
      </p>
      <p>
        Visit our learning articles: <Link to="/learn/math-for-kids">Math</Link>,{" "}
        <Link to="/learn/english-for-kids">English</Link>, and{" "}
        <Link to="/learn/science-for-kids">Science</Link>.
      </p>
      <p><Link to="/">Back to Home</Link></p>
    </main>
  );
}
