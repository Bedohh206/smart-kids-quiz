// Google Analytics 4 Utility Functions

/**
 * Track custom events in Google Analytics 4
 * @param {string} eventName - The name of the event
 * @param {object} eventParams - Optional parameters for the event
 */
export const trackEvent = (eventName, eventParams = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
};

/**
 * Track page views
 * @param {string} pagePath - The path of the page
 * @param {string} pageTitle - The title of the page
 */
export const trackPageView = (pagePath, pageTitle) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-XXXXXXXXXX', {
      page_path: pagePath,
      page_title: pageTitle,
    });
  }
};

/**
 * Track quiz completion
 * @param {string} subject - The subject of the quiz
 * @param {string} level - The level of the quiz
 * @param {number} score - The score achieved
 * @param {number} totalQuestions - Total number of questions
 */
export const trackQuizCompletion = (subject, level, score, totalQuestions) => {
  trackEvent('quiz_completed', {
    subject,
    level,
    score,
    total_questions: totalQuestions,
    percentage: Math.round((score / totalQuestions) * 100),
  });
};

/**
 * Track quiz start
 * @param {string} subject - The subject of the quiz
 * @param {string} level - The level of the quiz
 */
export const trackQuizStart = (subject, level) => {
  trackEvent('quiz_started', {
    subject,
    level,
  });
};

/**
 * Track continent selection
 * @param {string} continent - The selected continent
 */
export const trackContinentSelect = (continent) => {
  trackEvent('continent_selected', {
    continent,
  });
};

/**
 * Track mini-game play
 * @param {string} gameName - The name of the mini-game
 */
export const trackMiniGamePlay = (gameName) => {
  trackEvent('mini_game_played', {
    game_name: gameName,
  });
};

/**
 * Track AI lesson request
 * @param {string} topic - The topic of the lesson
 */
export const trackAILesson = (topic) => {
  trackEvent('ai_lesson_requested', {
    topic,
  });
};

/**
 * Track user engagement time
 * @param {number} seconds - Time spent on the page in seconds
 */
export const trackEngagement = (seconds) => {
  trackEvent('user_engagement', {
    engagement_time_seconds: seconds,
  });
};

/**
 * Track PWA install
 */
export const trackPWAInstall = () => {
  trackEvent('pwa_installed', {});
};

/**
 * Track achievement unlock
 * @param {string} achievementName - The name of the achievement
 */
export const trackAchievement = (achievementName) => {
  trackEvent('achievement_unlocked', {
    achievement_name: achievementName,
  });
};

/**
 * Track language change
 * @param {string} language - The selected language
 */
export const trackLanguageChange = (language) => {
  trackEvent('language_changed', {
    language,
  });
};

/**
 * Track leaderboard view
 */
export const trackLeaderboardView = () => {
  trackEvent('leaderboard_viewed', {});
};

export default {
  trackEvent,
  trackPageView,
  trackQuizCompletion,
  trackQuizStart,
  trackContinentSelect,
  trackMiniGamePlay,
  trackAILesson,
  trackEngagement,
  trackPWAInstall,
  trackAchievement,
  trackLanguageChange,
  trackLeaderboardView,
};
