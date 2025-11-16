import React from 'react';

function HeroCard({ hero = {}, onClick, isSelected = false }) {
  const fallbackPath = '/images/default_superhero.jpg';

  const handleImageError = (e) => {
    if (!e.target.src.includes(fallbackPath)) {
      e.target.onerror = null;
      e.target.src = fallbackPath;
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick?.();
    }
  };

  const imageSrc = hero?.images?.md || fallbackPath;
  const heroName = hero?.name || 'Unknown Hero';
  const stats = hero?.powerstats || {};

  return (
    <div
      className={`hero-card ${isSelected ? 'selected' : ''}`}
      role="button"
      tabIndex={0}
      title={`Click to select ${heroName}`}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      aria-label={`Select ${heroName}`}
      data-selected={isSelected}
    >
      <img
        src={imageSrc}
        alt={`Portrait of ${heroName}`}
        className="hero-image"
        onError={handleImageError}
      />
      <h2 className="hero-name">{heroName}</h2>
      <ul className="hero-stats" aria-label="Power stats">
        <li><strong>Intelligence:</strong> {stats.intelligence ?? 'N/A'}</li>
        <li><strong>Strength:</strong> {stats.strength ?? 'N/A'}</li>
        <li><strong>Speed:</strong> {stats.speed ?? 'N/A'}</li>
      </ul>
    </div>
  );
}

export default HeroCard;