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
        Smart Kids Quiz is committed to protecting user privacy. We collect only the data needed
        to operate educational features, improve performance, and maintain security.
      </p>
      <p>
        We do not sell personal information. For support requests, contact us at
        <a href="mailto:smartkidsquiz@mail.com"> smartkidsquiz@mail.com</a>.
      </p>
      <p>
        By using this app, you agree to this privacy policy and our educational use terms.
      </p>
      <p><Link to="/">Back to Home</Link></p>
    </main>
  );
}
