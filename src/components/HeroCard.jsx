import React from 'react';

function HeroCard({ hero = {}, onClick, isSelected = false }) {
  const fallbackImage = '/images/default_superhero.jpg';

  const handleImageError = (e) => {
    if (!e.target.src.includes(fallbackImage)) {
      e.target.onerror = null;
      e.target.src = fallbackImage;
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick?.();
    }
  };

  const {
    name = 'Unknown Hero',
    images = {},
    powerstats = {},
  } = hero;

  const imageSrc = images.md || fallbackImage;

  return (
    <div
      className={`hero-card ${isSelected ? 'selected' : ''}`}
      role="button"
      tabIndex={0}
      title={`Click to select ${name}`}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      aria-label={`Select ${name}`}
      data-selected={isSelected}
    >
      <img
        src={imageSrc}
        alt={`Portrait of ${name}`}
        className="hero-image"
        onError={handleImageError}
      />
      <h2 className="hero-name">{name}</h2>
      <ul className="hero-stats" aria-label="Power stats">
        <li><strong>Intelligence:</strong> {powerstats.intelligence ?? 'N/A'}</li>
        <li><strong>Strength:</strong> {powerstats.strength ?? 'N/A'}</li>
        <li><strong>Speed:</strong> {powerstats.speed ?? 'N/A'}</li>
      </ul>
    </div>
  );
}

export default HeroCard;