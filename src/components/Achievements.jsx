import React from 'react';
import { trackAchievement } from '../utils/analytics';
import './Achievements.css';

const BADGES = [
  { id: 'first_correct', emoji: '🌟', title: 'First Win', desc: 'Answer your first question', req: (stats) => stats.totalCorrect >= 1 },
  { id: 'streak_3', emoji: '🔥', title: 'Hot Streak', desc: '3 correct in a row', req: (stats) => stats.maxStreak >= 3 },
  { id: 'streak_5', emoji: '⚡', title: 'Lightning', desc: '5 correct in a row', req: (stats) => stats.maxStreak >= 5 },
  { id: 'perfect_quiz', emoji: '💎', title: 'Perfect!', desc: 'Score 100% on a quiz', req: (stats) => stats.perfectQuizzes >= 1 },
  { id: 'quiz_master', emoji: '👑', title: 'Quiz Master', desc: 'Complete 10 quizzes', req: (stats) => stats.quizzesCompleted >= 10 },
  { id: 'century', emoji: '💯', title: 'Century', desc: '100 correct answers', req: (stats) => stats.totalCorrect >= 100 },
];

export default function Achievements({ stats, newBadges = [] }) {
  const unlockedIds = BADGES.filter(b => b.req(stats)).map(b => b.id);
  
  // Track new achievement unlocks
  React.useEffect(() => {
    if (newBadges && newBadges.length > 0) {
      newBadges.forEach(badgeId => {
        const badge = BADGES.find(b => b.id === badgeId);
        if (badge) {
          trackAchievement(badge.title);
        }
      });
    }
  }, [newBadges]);
  
  return (
    <div className="achievements">
      <h3>🏆 Achievements</h3>
      <div className="badge-grid">
        {BADGES.map(badge => {
          const unlocked = unlockedIds.includes(badge.id);
          const isNew = newBadges.includes(badge.id);
          return (
            <div 
              key={badge.id} 
              className={`badge ${unlocked ? 'unlocked' : 'locked'} ${isNew ? 'new-badge' : ''}`}
              title={badge.desc}
            >
              <div className="badge-emoji">{unlocked ? badge.emoji : '🔒'}</div>
              <div className="badge-title">{badge.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
