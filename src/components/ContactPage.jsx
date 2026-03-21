import React from "react";
import { Link } from "react-router-dom";
import SeoMeta from "./SeoMeta";
import AdSense from "./AdSense";

export default function ContactPage() {
  return (
    <main style={{ maxWidth: 900, margin: "30px auto", padding: "0 20px", lineHeight: 1.7 }}>
      <SeoMeta
        title="Contact | Smart Kids Quiz"
        description="Contact Smart Kids Quiz for support, feedback, and educational app questions."
        canonicalPath="/contact"
      />
      <h1>Contact</h1>
      <p>
        If you have questions, suggestions, or feedback about lessons, quizzes, accessibility, or
        child safety features, please contact our team.
      </p>

      <section style={{ marginTop: 18 }}>
        <h2>Support Email</h2>
        <p>
          Email: <a href="mailto:smartkidsquiz@mail.com">smartkidsquiz@mail.com</a>
        </p>
        <p>We aim to respond to most support requests within 2 to 5 business days.</p>
      </section>

      <section style={{ marginTop: 18 }}>
        <h2>What to Include in Your Message</h2>
        <ul>
          <li>Topic or page where the issue happened</li>
          <li>Device and browser (for example, Chrome on Android)</li>
          <li>Short description of the problem or suggestion</li>
          <li>Screenshot if available (optional, but helpful)</li>
        </ul>
      </section>

      <section style={{ marginTop: 18 }}>
        <h2>Parents and Teachers</h2>
        <p>
          We welcome requests from schools and families for age-level recommendations, topic
          prioritization, and classroom-friendly study flows.
        </p>
      </section>

      <section style={{ marginTop: 18 }}>
        <h2>Policy Links</h2>
        <p>
          For legal and privacy details, read our <Link to="/privacy">Privacy Policy</Link> and <Link to="/terms">Terms of Service</Link>.
        </p>
      </section>
      <AdSense slot="9408631164" format="auto" style={{ marginTop: 32, marginBottom: 8 }} />

      <p><Link to="/">Back to Home</Link></p>
    </main>
  );
}
