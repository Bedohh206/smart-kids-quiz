import React from "react";
import { useUserProfile } from "../hooks/useUserProfile.js";
import "./AvatarShop.css";

// Available avatars
const avatars = [
  { id: "robot", name: "RoboTutor", xp: 0 },
  { id: "lion", name: "Lion King", xp: 200 },
  { id: "panda", name: "Panda Genius", xp: 500 },
  { id: "eagle", name: "Eagle Scholar", xp: 800 },
  { id: "dragon", name: "Dragon Master", xp: 1200 },
];

export default function AvatarShop() {
  const { profile, updateProfile } = useUserProfile();

  const selectAvatar = (avatar) => {
    if (profile.xp < avatar.xp) {
      alert(`🔒 Requires ${avatar.xp} XP to unlock this avatar!`);
      return;
    }
    updateProfile({ avatar: avatar.id });
  };

  return (
    <div className="avatar-shop">
      <h2>🛍 Avatar Shop</h2>
      <p>Unlock avatars using XP earned from quizzes!</p>

      <div className="avatar-grid">
        {avatars.map((a) => (
          <div
            key={a.id}
            className={`avatar-card ${profile.avatar === a.id ? "selected" : ""}`}
            onClick={() => selectAvatar(a)}
          >
            <img src={`/avatars/${a.id}.png`} alt={a.name} className="avatar-icon" />
            <div className="avatar-info">
              <strong>{a.name}</strong><br />
              {a.xp} XP
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
