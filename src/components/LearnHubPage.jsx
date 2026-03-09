import React from "react";
import { Link } from "react-router-dom";
import SeoMeta from "./SeoMeta";

export default function LearnHubPage() {
  const updatedLabel = "Updated: March 2026";

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
        <h2>How to Use These Guides</h2>
        <p>
          Each guide is written for quick daily practice. Start with one section, discuss the
          examples with your child, then try a short quiz to reinforce understanding.
        </p>
      </section>

      <section style={{ marginTop: 18 }}>
        <h2>Featured Guides</h2>
        <ul>
          <li>
            <Link to="/learn/math-for-kids">Math for Kids</Link>
            <span style={{ marginLeft: 8, color: "#555", fontSize: "0.9rem" }}>({updatedLabel})</span>
          </li>
          <li>
            <Link to="/learn/english-for-kids">English for Kids</Link>
            <span style={{ marginLeft: 8, color: "#555", fontSize: "0.9rem" }}>({updatedLabel})</span>
          </li>
          <li>
            <Link to="/learn/science-for-kids">Science for Kids</Link>
            <span style={{ marginLeft: 8, color: "#555", fontSize: "0.9rem" }}>({updatedLabel})</span>
          </li>
        </ul>
      </section>

      <section style={{ marginTop: 18 }}>
        <h2>Recent Modules</h2>
        <ul>
          <li>
            <Link to="/learn/algebra-for-kids">Algebra for Kids</Link>
            <span style={{ marginLeft: 8, color: "#555", fontSize: "0.9rem" }}>({updatedLabel})</span>
          </li>
          <li>
            <Link to="/learn/geometry-for-kids">Geometry for Kids</Link>
            <span style={{ marginLeft: 8, color: "#555", fontSize: "0.9rem" }}>({updatedLabel})</span>
          </li>
          <li>
            <Link to="/learn/coding-for-kids">Coding for Kids</Link>
            <span style={{ marginLeft: 8, color: "#555", fontSize: "0.9rem" }}>({updatedLabel})</span>
          </li>
          <li>
            <Link to="/learn/health-for-kids">Health Education for Kids</Link>
            <span style={{ marginLeft: 8, color: "#555", fontSize: "0.9rem" }}>({updatedLabel})</span>
          </li>
          <li>
            <Link to="/learn/history-for-kids">History for Kids</Link>
            <span style={{ marginLeft: 8, color: "#555", fontSize: "0.9rem" }}>({updatedLabel})</span>
          </li>
          <li>
            <Link to="/learn/geography-for-kids">Geography for Kids</Link>
            <span style={{ marginLeft: 8, color: "#555", fontSize: "0.9rem" }}>({updatedLabel})</span>
          </li>
        </ul>
      </section>

      <section style={{ marginTop: 18 }}>
        <h2>More Pages</h2>
        <p>
          <Link to="/about">About</Link> · <Link to="/contact">Contact</Link> · <Link to="/privacy">Privacy Policy</Link> · <Link to="/terms">Terms of Service</Link>
        </p>
      </section>

      <p style={{ marginTop: 20 }}><Link to="/">Back to Home</Link></p>
    </main>
  );
}
