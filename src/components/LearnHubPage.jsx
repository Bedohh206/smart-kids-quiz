import React from "react";
import { Link } from "react-router-dom";
import SeoMeta from "./SeoMeta";

export default function LearnHubPage() {
  return (
    <main style={{ maxWidth: 900, margin: "30px auto", padding: "0 20px", lineHeight: 1.7 }}>
      <SeoMeta
        title="Learn for Kids | Smart Kids Quiz"
        description="Content-rich educational guides for kids: math, english, and science with examples and explanations."
        canonicalPath="/learn"
      />
      <h1>Learn</h1>
      <p>
        Explore our educational guides with clear explanations, practical examples,
        and age-appropriate learning tips.
      </p>

      <section style={{ marginTop: 18 }}>
        <h2>Featured Guides</h2>
        <ul>
          <li><Link to="/learn/math-for-kids">Math for Kids</Link></li>
          <li><Link to="/learn/english-for-kids">English for Kids</Link></li>
          <li><Link to="/learn/science-for-kids">Science for Kids</Link></li>
        </ul>
      </section>

      <section style={{ marginTop: 18 }}>
        <h2>More Pages</h2>
        <p>
          <Link to="/about">About</Link> · <Link to="/contact">Contact</Link> · <Link to="/privacy">Privacy Policy</Link>
        </p>
      </section>

      <p style={{ marginTop: 20 }}><Link to="/">Back to Home</Link></p>
    </main>
  );
}
