import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [progress, setProgress] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const raw = localStorage.getItem("skqProgress");
      if (!raw) return;

      const obj = JSON.parse(raw);
      const rows = [];

      Object.entries(obj).forEach(([grade, subjects]) => {
        Object.entries(subjects).forEach(([subject, topics]) => {
          Object.entries(topics).forEach(([topicKey, info]) => {
            rows.push({
              grade,
              subject,
              topic: info.topic || topicKey,
              score: info.score,
              total: info.total,
              date: info.date,
            });
          });
        });
      });

      setProgress(rows);
    } catch (e) {
      console.error("Failed to read progress:", e);
    }
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Student Dashboard</h1>
      {progress.length === 0 ? (
        <p>No lessons completed yet.</p>
      ) : (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ borderBottom: "1px solid #ccc" }}>Grade</th>
              <th style={{ borderBottom: "1px solid #ccc" }}>Subject</th>
              <th style={{ borderBottom: "1px solid #ccc" }}>Topic</th>
              <th style={{ borderBottom: "1px solid #ccc" }}>Score</th>
              <th style={{ borderBottom: "1px solid #ccc" }}>Date</th>
            </tr>
          </thead>
          <tbody>
            {progress.map((row, i) => (
              <tr key={i}>
                <td>{row.grade}</td>
                <td>{row.subject}</td>
                <td>
                  <button
                    onClick={() =>
                      navigate(
                        `/lesson/${row.grade}/${row.subject}/${encodeURIComponent(
                          row.topic
                        )}`
                      )
                    }
                    style={{
                      background: "none",
                      border: "none",
                      color: "blue",
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                  >
                    {row.topic}
                  </button>
                </td>
                <td>
                  {row.score}/{row.total}
                </td>
                <td>{new Date(row.date).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
