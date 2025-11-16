import React from 'react';

function HeroCard({ hero, onClick, isSelected = false }) {
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
      onClick();
    }
  };

  return (
    <div
      className={`hero-card ${isSelected ? 'selected' : ''}`}
      role="button"
      tabIndex={0}
      title={`Click to select ${hero.name}`}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      aria-label={`Select ${hero.name}`}
      data-selected={isSelected}
    >
      <img
        src={hero.images?.md || fallbackPath}
        alt={`Portrait of ${hero.name}`}
        className="hero-image"
        onError={handleImageError}
      />
      <h2 className="hero-name">{hero.name}</h2>
      <ul className="hero-stats" aria-label="Power stats">
        <li><strong>Intelligence:</strong> {hero.powerstats?.intelligence ?? 'N/A'}</li>
        <li><strong>Strength:</strong> {hero.powerstats?.strength ?? 'N/A'}</li>
        <li><strong>Speed:</strong> {hero.powerstats?.speed ?? 'N/A'}</li>
      </ul>
    </div>
  );
}

export default HeroCard;