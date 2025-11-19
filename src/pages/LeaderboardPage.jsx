import React, { useEffect, useState } from "react";
import "./Leaderboard.css";

export default function LeaderboardPage() {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const local = JSON.parse(localStorage.getItem("smartKidsLeaderboard")) || [];
    const sorted = local.sort((a, b) => b.score - a.score);
    setScores(sorted);
  }, []);

  return (
    <div className="leaderboard-page">
      <h1>🏆 Leaderboard</h1>
      <p>Top players from your device</p>

      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Score</th>
            <th>Badge</th>
          </tr>
        </thead>
        <tbody>
          {scores.map((player, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{player.name}</td>
              <td>{player.score}</td>
              <td>
                {index === 0 && "🥇"}
                {index === 1 && "🥈"}
                {index === 2 && "🥉"}
                {index > 2 && "🎖"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
