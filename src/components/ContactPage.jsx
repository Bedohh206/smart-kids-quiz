import React from "react";
import { Link } from "react-router-dom";
import SeoMeta from "./SeoMeta";

export default function ContactPage() {
  return (
    <main style={{ maxWidth: 900, margin: "30px auto", padding: "0 20px", lineHeight: 1.7 }}>
      <SeoMeta
        title="Contact | Smart Kids Quiz"
        description="Contact Smart Kids Quiz for support, feedback, and educational app questions."
        canonicalPath="/contact"
      />
      <h1>Contact</h1>
      <p>If you have questions, suggestions, or feedback, please contact our team:</p>
      <p>
        Email: <a href="mailto:smartkidsquiz@mail.com">smartkidsquiz@mail.com</a>
      </p>
      <p>
        For policy details, see our <Link to="/privacy">Privacy Policy</Link>.
      </p>
      <p><Link to="/">Back to Home</Link></p>
    </main>
  );
}
