import React from "react";
import "./Leaderboard.css";

export default function Leaderboard() {
  const leaderboard =
    JSON.parse(localStorage.getItem("smartKidsLeaderboard")) || [];

  // Sort by highest score first
  const sorted = leaderboard.sort((a, b) => b.score - a.score);

  return (
    <div className="leaderboard-page">
      <h1>🏆 Leaderboard</h1>

      {sorted.length === 0 ? (
        <p>No scores yet. Play a quiz to get on the leaderboard! 🎉</p>
      ) : (
        <table className="leaderboard-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Player</th>
              <th>Score</th>
            </tr>
          </thead>

          <tbody>
            {sorted.map((entry, index) => (
              <tr key={index}>
                <td>#{index + 1}</td>
                <td>{entry.name}</td>
                <td>{entry.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <button className="back-btn" onClick={() => window.history.back()}>
        ← Back
      </button>
    </div>
  );
}
