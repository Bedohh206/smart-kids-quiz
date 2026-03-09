import React from "react";
import { Link } from "react-router-dom";
import SeoMeta from "./SeoMeta";

export default function PrivacyPage() {
  return (
    <main style={{ maxWidth: 900, margin: "30px auto", padding: "0 20px", lineHeight: 1.7 }}>
      <SeoMeta
        title="Privacy Policy | Smart Kids Quiz"
        description="Read the Smart Kids Quiz privacy policy and how educational user data is handled."
        canonicalPath="/privacy"
      />
      <h1>Privacy Policy</h1>
      <p>
        Smart Kids Quiz is committed to protecting user privacy. We collect only the data needed to
        operate educational features, improve performance, and maintain security.
      </p>

      <section style={{ marginTop: 18 }}>
        <h2>Information We Collect</h2>
        <ul>
          <li>Basic usage events to improve learning features and performance</li>
          <li>Technical diagnostics for reliability and error monitoring</li>
          <li>Locally stored progress data on your device</li>
        </ul>
        <p>
          We do not require child user accounts to access core quiz and learning experiences.
        </p>
      </section>

      <section style={{ marginTop: 18 }}>
        <h2>How We Use Data</h2>
        <p>
          Data is used only for educational product operations such as lesson quality, feature
          stability, and understanding which topics help learners most.
        </p>
      </section>

      <section style={{ marginTop: 18 }}>
        <h2>Children and Family Privacy</h2>
        <p>
          Our product is built for families and classrooms. We avoid collecting unnecessary personal
          information and design features to be child-friendly and parent-aware.
        </p>
      </section>

      <section style={{ marginTop: 18 }}>
        <h2>Third-Party Services</h2>
        <p>
          Some educational and infrastructure features may rely on third-party providers such as
          hosting and AI services. We configure these services to support educational functionality,
          safety, and reliability.
        </p>
      </section>

      <section style={{ marginTop: 18 }}>
        <h2>Your Choices</h2>
        <ul>
          <li>Clear local app data through your browser or device settings</li>
          <li>Contact us to ask questions about privacy practices</li>
          <li>Review our Terms of Service for usage expectations</li>
        </ul>
      </section>

      <section style={{ marginTop: 18 }}>
        <h2>Contact</h2>
        <p>
          We do not sell personal information. For support requests, contact us at
          <a href="mailto:smartkidsquiz@mail.com"> smartkidsquiz@mail.com</a>.
        </p>
        <p>
          By using this app, you agree to this privacy policy and our <Link to="/terms">Terms of Service</Link>.
        </p>
      </section>
      <p><Link to="/">Back to Home</Link></p>
    </main>
  );
}
