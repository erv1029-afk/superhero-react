import React, { useContext } from 'react';
import { HeroContext } from '../context/HeroContext';

function HeroCard({ hero }) {
  const { dispatch } = useContext(HeroContext);

  const handleSelect = () => {
    dispatch({ type: 'SELECT_HERO', payload: hero });
  };

  const handleImageError = (e) => {
    const fallbackPath = '/images/default_superhero.jpg';
    if (!e.target.src.includes(fallbackPath)) {
      e.target.onerror = null;
      e.target.src = fallbackPath;
    }
  };

  return (
    <div className="hero-card" onClick={handleSelect}>
      <img
        src={hero.image.url}
        alt={hero.name}
        className="hero-image"
        onError={handleImageError}
      />
      <h2 className="hero-name">{hero.name}</h2>
      <div className="hero-stats">
        <p><strong>Intelligence:</strong> {hero.powerstats.intelligence}</p>
        <p><strong>Strength:</strong> {hero.powerstats.strength}</p>
        <p><strong>Speed:</strong> {hero.powerstats.speed}</p>
      </div>
    </div>
  );
}

export default HeroCard;