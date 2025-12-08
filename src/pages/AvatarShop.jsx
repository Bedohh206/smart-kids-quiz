import React from "react";
import { avatars } from "../data/avatars.js";
import { useUserProfile } from "../hooks/useUserProfile.js";

export default function AvatarShop() {
  const { profile, updateProfile } = useUserProfile();

  const buyAvatar = (avatar) => {
    if (profile.xp < avatar.cost) {
      alert(`Not enough XP! You need ${avatar.cost} XP.`);
      return;
    }
    updateProfile({ avatar: avatar.id, xp: profile.xp - avatar.cost });
  };

  return (
    <div className="shop-container">
      <h2>🎭 Avatar Shop</h2>
      <p>Your XP: {profile.xp}</p>

      <div className="avatar-grid">
        {avatars.map((a) => (
          <button className="avatar-card" key={a.id} onClick={() => buyAvatar(a)}>
            <img src={a.img} className="avatar-img" />
            <p>{a.id.toUpperCase()}</p>
            <p>Cost: {a.cost} XP</p>
          </button>
        ))}
      </div>
    </div>
  );
}
