import React, { useState } from "react";
import FlashMatch from "./mini-games/FlashMatch";
import QuickTap from "./mini-games/QuickTap";
import { trackMiniGamePlay } from "../utils/analytics";
import "../css/MiniGames.css";

export default function MiniGamesLauncher() {
  const [active, setActive] = useState(null);

  const handleGameStart = (gameName) => {
    trackMiniGamePlay(gameName);
    setActive(gameName === 'Flash Match' ? 'flash' : 'tap');
  };

  return (
    <div className="minigames-launcher">
      {!active && (
        <div className="minigames-menu">
          <h3>🎮 Mini-Games</h3>
          <p>Pick a quick game to warm up!</p>
          <div className="mini-menu-buttons">
            <button onClick={() => handleGameStart("Flash Match")}>Flash Match</button>
            <button onClick={() => handleGameStart("Quick Tap")}>Quick Tap</button>
          </div>
        </div>
      )}

      {active === "flash" && <FlashMatch onClose={() => setActive(null)} />}
      {active === "tap" && <QuickTap onClose={() => setActive(null)} />}
    </div>
  );
}
