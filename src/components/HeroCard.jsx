import React from 'react';

function HeroCard({ hero, onClick }) {
  const handleImageError = (e) => {
    const fallbackPath = '/images/default_superhero.jpg';
    if (!e.target.src.includes(fallbackPath)) {
      e.target.onerror = null;
      e.target.src = fallbackPath;
    }
  };

  return (
    <div
      className="hero-card"
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') onClick();
      }}
      aria-label={`Select ${hero.name}`}
    >
      <img
        src={hero.images?.md || '/images/default_superhero.jpg'}
        alt={`Portrait of ${hero.name}`}
        className="hero-image"
        onError={handleImageError}
      />
      <h2 className="hero-name">{hero.name}</h2>
      <div className="hero-stats">
        <p><strong>Intelligence:</strong> {hero.powerstats?.intelligence ?? 'N/A'}</p>
        <p><strong>Strength:</strong> {hero.powerstats?.strength ?? 'N/A'}</p>
        <p><strong>Speed:</strong> {hero.powerstats?.speed ?? 'N/A'}</p>
      </div>
    </div>
  );
}

export default HeroCard;