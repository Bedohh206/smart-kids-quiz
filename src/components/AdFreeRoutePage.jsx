import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AdFreeRoutePage({ title = "Page", message = "This route is ad-free.", redirectTo = "/" }) {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => navigate(redirectTo), 1800);
    return () => clearTimeout(timer);
  }, [navigate, redirectTo]);

  return (
    <main style={{ maxWidth: 760, margin: "40px auto", padding: "0 20px", textAlign: "center", lineHeight: 1.7 }}>
      <h1>{title}</h1>
      <p>{message}</p>
      <p>Redirecting…</p>
      <p><Link to={redirectTo}>Go now</Link></p>
    </main>
  );
}
