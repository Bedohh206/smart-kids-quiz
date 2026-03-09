import React from "react";
import { Link } from "react-router-dom";
import SeoMeta from "./SeoMeta";

export default function TermsPage() {
  return (
    <main style={{ maxWidth: 900, margin: "30px auto", padding: "0 20px", lineHeight: 1.7 }}>
      <SeoMeta
        title="Terms of Service | Smart Kids Quiz"
        description="Read the Smart Kids Quiz terms of service for app usage, educational scope, and responsibilities."
        canonicalPath="/terms"
      />
      <h1>Terms of Service</h1>
      <p>
        These Terms of Service govern your use of Smart Kids Quiz. By using this educational app,
        you agree to the terms below.
      </p>

      <section style={{ marginTop: 18 }}>
        <h2>Educational Purpose</h2>
        <p>
          Smart Kids Quiz is provided as a learning support tool for children, parents, and teachers.
          It is designed to supplement study and classroom learning, not replace school instruction.
        </p>
      </section>

      <section style={{ marginTop: 18 }}>
        <h2>Acceptable Use</h2>
        <ul>
          <li>Use the app for personal, family, or classroom educational activities</li>
          <li>Do not attempt to disrupt, abuse, or reverse engineer the platform</li>
          <li>Do not use the app for unlawful, harmful, or misleading purposes</li>
        </ul>
      </section>

      <section style={{ marginTop: 18 }}>
        <h2>Content and Accuracy</h2>
        <p>
          We work to keep educational content useful and age-appropriate. Some explanations,
          especially AI-assisted content, may occasionally contain mistakes. Parents and teachers
          should review important learning material as needed.
        </p>
      </section>

      <section style={{ marginTop: 18 }}>
        <h2>Child Safety and Supervision</h2>
        <p>
          Smart Kids Quiz is intended for use with parent, guardian, or educator oversight,
          especially for younger learners.
        </p>
      </section>

      <section style={{ marginTop: 18 }}>
        <h2>Service Changes</h2>
        <p>
          We may update features, content, and these terms over time. Continued use of the app after
          updates means you accept the revised terms.
        </p>
      </section>

      <section style={{ marginTop: 18 }}>
        <h2>Contact</h2>
        <p>
          Questions about these terms can be sent to
          <a href="mailto:smartkidsquiz@mail.com"> smartkidsquiz@mail.com</a>.
        </p>
        <p>
          You can also review our <Link to="/privacy">Privacy Policy</Link> for data practices.
        </p>
      </section>

      <p><Link to="/">Back to Home</Link></p>
    </main>
  );
}
