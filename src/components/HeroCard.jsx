import React from 'react';

function HeroCard({ hero = {}, onClick, isSelected = false }) {
  const fallbackImage = '/images/default_superhero.jpg';

  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = fallbackImage;
  };

  const {
    name = 'Unknown Hero',
    images = {},
    powerstats = {},
  } = hero;

  return (
    <div
      className={`hero-card ${isSelected ? 'selected' : ''}`}
      role="button"
      tabIndex={0}
      onClick={onClick}
      aria-label={`Select ${name}`}
    >
      <img
        src={images.md || fallbackImage}
        alt={`Portrait of ${name}`}
        onError={handleImageError}
        className="hero-image"
      />
      <h2 className="hero-name">{name}</h2>
      <ul className="hero-stats">
        <li><strong>Intelligence:</strong> {powerstats.intelligence ?? 'N/A'}</li>
        <li><strong>Strength:</strong> {powerstats.strength ?? 'N/A'}</li>
        <li><strong>Speed:</strong> {powerstats.speed ?? 'N/A'}</li>
      </ul>
    </div>
  );
}

export default HeroCard;