import React, { useState } from "react";
import "./ResourcesPanel.css";

export default function ResourcesPanel({ subject, resources, onClose }) {
  const [filter, setFilter] = useState("All");

  if (!resources || resources.length === 0) {
    return (
      <div className="resources-overlay" onClick={onClose}>
        <div className="resources-modal" onClick={(e) => e.stopPropagation()}>
          <button className="resources-close-btn" onClick={onClose}>✕</button>
          <h2>📚 Educational Resources</h2>
          <p>Resources for this subject are coming soon!</p>
        </div>
      </div>
    );
  }

  // Get unique categories
  const categories = ["All", ...new Set(resources.map(r => r.category))];
  
  // Filter resources
  const filteredResources = filter === "All" 
    ? resources 
    : resources.filter(r => r.category === filter);

  return (
    <div className="resources-overlay" onClick={onClose}>
      <div className="resources-modal" onClick={(e) => e.stopPropagation()}>
        <button className="resources-close-btn" onClick={onClose}>✕</button>
        
        <div className="resources-header">
          <h2>📚 {subject} Resources</h2>
          <p className="resources-subtitle">Free, curated educational links</p>
        </div>

        {/* Category Filter */}
        <div className="resources-filter">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${filter === category ? 'active' : ''}`}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Resources List */}
        <div className="resources-list">
          {filteredResources.map((resource, index) => (
            <div key={index} className="resource-card">
              <div className="resource-content">
                <h3>{resource.title}</h3>
                <p className="resource-description">{resource.description}</p>
                <div className="resource-meta">
                  <span className="resource-category">{resource.category}</span>
                  <span className="resource-age">{resource.ageGroup}</span>
                </div>
              </div>
              <a 
                href={resource.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="resource-link-btn"
              >
                Visit →
              </a>
            </div>
          ))}
        </div>

        {filteredResources.length === 0 && (
          <div className="no-resources">
            <p>No resources found for this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
