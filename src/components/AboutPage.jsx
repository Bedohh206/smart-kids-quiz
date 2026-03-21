import React from "react";
import { Link } from "react-router-dom";
import SeoMeta from "./SeoMeta";
import AdSense from "./AdSense";

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
        Smart Kids Quiz was created to make early learning fun, simple, and accessible for every child.
        Our mission is to help kids build strong foundations in reading, math, and critical thinking
        through short, playful quizzes designed for children ages 4&ndash;10.
      </p>

      <section style={{ marginTop: 20 }}>
        <h2>What We Believe</h2>
        <ul>
          <li>Learning should be joyful</li>
          <li>Kids learn best through repetition and play</li>
          <li>Safe, clean design helps children focus</li>
          <li>Parents deserve tools they can trust</li>
        </ul>
      </section>

      <section style={{ marginTop: 20 }}>
        <h2>What We Offer</h2>
        <ul>
          <li>Age-appropriate quizzes for children ages 4&ndash;10</li>
          <li>Colorful visuals that keep young learners engaged</li>
          <li>Simple navigation designed for young children</li>
          <li>No confusing menus or distracting elements</li>
          <li>No harmful content &mdash; safe for all ages</li>
        </ul>
      </section>

      <section style={{ marginTop: 20 }}>
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

      <section style={{ marginTop: 20 }}>
        <h2>What You Can Find on Smart Kids Quiz</h2>
        <ul>
          <li>Interactive quizzes covering math, reading, science, geography, and more</li>
          <li>Guided learning articles with practical examples and age-friendly explanations</li>
          <li>AI-assisted explanations for selected educational tasks</li>
          <li>Progress-focused activities that encourage regular practice</li>
          <li>Simple educational resources for parents and classroom helpers</li>
        </ul>
      </section>

      <section style={{ marginTop: 20 }}>
        <h2>Safety and Child-Friendly Design</h2>
        <p>
          Smart Kids Quiz is built to be child-friendly and privacy-conscious. We avoid
          account-heavy onboarding, keep interactions straightforward, and prioritize educational
          value over distraction.
        </p>
        <p>
          For details on data handling and user rights, review our{" "}
          <Link to="/privacy">Privacy Policy</Link> and <Link to="/terms">Terms of Service</Link>.
        </p>
      </section>

      <section style={{ marginTop: 20 }}>
        <h2>Explore Learning Guides</h2>
        <p>
          Visit our educational articles:{" "}
          <Link to="/learn/math-for-kids">Math</Link>,{" "}
          <Link to="/learn/english-for-kids">English</Link>, and{" "}
          <Link to="/learn/science-for-kids">Science</Link>.
        </p>
      </section>

      <section style={{ marginTop: 20 }}>
        <h2>Contact and Collaboration</h2>
        <p>
          Smart Kids Quiz is built with love, creativity, and a passion for helping kids grow.
          We welcome feedback from parents, teachers, and school communities. If you want to suggest
          a topic, report an issue, or request a classroom-friendly feature, visit our{" "}
          <Link to="/contact">Contact page</Link>.
        </p>
      </section>

      <AdSense slot="9408631164" format="auto" style={{ marginTop: 32, marginBottom: 8 }} />

      <p style={{ marginTop: 16 }}><Link to="/">&#8592; Back to Home</Link></p>
    </main>
  );
}
