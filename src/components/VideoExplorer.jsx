import React, { useState } from "react";
import "./VideoExplorer.css";

export default function VideoExplorer({ continent, videos, onClose }) {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  if (!videos || videos.length === 0) {
    return (
      <div className="video-explorer-overlay" onClick={onClose}>
        <div className="video-explorer-modal" onClick={(e) => e.stopPropagation()}>
          <button className="video-close-btn" onClick={onClose}>✕</button>
          <h2>🎥 No videos available yet</h2>
          <p>Videos for this continent are coming soon!</p>
        </div>
      </div>
    );
  }

  const currentVideo = videos[currentVideoIndex];

  return (
    <div className="video-explorer-overlay" onClick={onClose}>
      <div className="video-explorer-modal" onClick={(e) => e.stopPropagation()}>
        <button className="video-close-btn" onClick={onClose}>✕</button>
        
        <div className="video-header">
          <h2>🌍 Explore {continent}</h2>
          <p className="video-subtitle">Educational Videos for Kids</p>
        </div>

        <div className="video-player-container">
          <iframe
            className="video-player"
            src={currentVideo.embedUrl}
            title={currentVideo.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="video-info">
          <h3>{currentVideo.title}</h3>
          <p>{currentVideo.description}</p>
        </div>

        <div className="video-navigation">
          <button
            className="video-nav-btn"
            onClick={() => setCurrentVideoIndex((prev) => (prev - 1 + videos.length) % videos.length)}
            disabled={videos.length <= 1}
          >
            ← Previous
          </button>
          
          <div className="video-indicators">
            {videos.map((_, index) => (
              <button
                key={index}
                className={`video-indicator ${index === currentVideoIndex ? "active" : ""}`}
                onClick={() => setCurrentVideoIndex(index)}
              >
                {index + 1}
              </button>
            ))}
          </div>

          <button
            className="video-nav-btn"
            onClick={() => setCurrentVideoIndex((prev) => (prev + 1) % videos.length)}
            disabled={videos.length <= 1}
          >
            Next →
          </button>
        </div>

        <div className="video-list">
          <h4>More Videos:</h4>
          <div className="video-thumbnails">
            {videos.map((video, index) => (
              <button
                key={index}
                className={`video-thumbnail ${index === currentVideoIndex ? "active" : ""}`}
                onClick={() => setCurrentVideoIndex(index)}
              >
                <span className="thumbnail-number">{index + 1}</span>
                <span className="thumbnail-title">{video.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
