// src/hooks/useUserProfile.js

import { useState, useEffect } from "react";

const STORAGE_KEY = "smartKidsProfile";

const DEFAULT_PROFILE = {
  name: "",
  age: null,
  continent: null,     // "africa", "asia", etc.
  level: 1,            // numeric level 1–4
  xp: 0,
  grade: null,         // "PreK", "Kindergarten", "Grade1", ...
  lastLesson: null     // { grade, subject, topic }
};

const RANKS = [
  { xp: 0, title: "Explorer", emoji: "🧭" },
  { xp: 100, title: "Adventurer", emoji: "🌍" },
  { xp: 300, title: "Scholar", emoji: "📘" },
  { xp: 700, title: "Brainiac", emoji: "🧠" },
  { xp: 1200, title: "Prodigy", emoji: "🔥" },
  { xp: 2000, title: "Genius", emoji: "⭐" },
  { xp: 3000, title: "Mastermind", emoji: "👑" },
  { xp: 5000, title: "Legend", emoji: "🦄" },
];

export const getRank = (xp = 0) =>
  RANKS.reduce((acc, r) => (xp >= r.xp ? r : acc), RANKS[0]);

export function useUserProfile() {
  // 🟢 Lazy load profile to avoid reset flicker
  const [profile, setProfile] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : DEFAULT_PROFILE;
    } catch {
      return DEFAULT_PROFILE;
    }
  });

  // 📝 Persist changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
    } catch (err) {
      console.error("Failed to save profile:", err);
    }
  }, [profile]);

  // 🔧 Update profile safely
  function updateProfile(patch) {
    setProfile(prev => ({ ...prev, ...patch }));
  }

  return { profile, updateProfile, rank: getRank(profile.xp) };
}
