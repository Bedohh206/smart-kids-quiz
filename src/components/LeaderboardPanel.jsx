import React from "react";

// Load leaderboard entries from localStorage
export const loadLeaderboard = (key) => {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

// Save leaderboard entries to localStorage
export const saveLeaderboard = (key, entries) => {
  try {
    localStorage.setItem(key, JSON.stringify(entries));
  } catch {}
};

const LeaderboardPanel = React.forwardRef(function LeaderboardPanel({ title = "Leaderboard", entries = [], onClear }, ref) {
  const formatDate = (iso) => {
    try {
      return new Date(iso).toLocaleDateString();
    } catch {
      return "";
    }
  };

  return (
    <div className="leaderboard-panel" ref={ref}>
      <div className="leaderboard-header">
        <h3>{title}</h3>
        {onClear && (
          <button className="leaderboard-clear" onClick={onClear}>
            Clear
          </button>
        )}
      </div>
      {entries.length === 0 ? (
        <p className="leaderboard-empty">No scores yet. Play to set the first record!</p>
      ) : (
        <ol className="leaderboard-list">
          {entries.map((e, idx) => (
            <li key={`${e.when}-${idx}`}>
              <div className="lb-left">
                <span className="lb-rank">#{idx + 1}</span>
                <span className="lb-score">{e.score} pts</span>
              </div>
              <div className="lb-right">
                <span className="lb-meta">{e.subject} · {e.difficulty}</span>
                <span className="lb-date">{formatDate(e.when)}</span>
              </div>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
});

export default LeaderboardPanel;
