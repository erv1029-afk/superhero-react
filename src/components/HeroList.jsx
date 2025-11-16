import React, { useContext } from 'react';
import { HeroContext } from '../context/HeroContext';
import HeroCard from './HeroCard';
import Loader from './Loader';
import Error from './Error';

function HeroList({ setHeroA, setHeroB, heroA, heroB }) {
  const { state } = useContext(HeroContext);
  const { heroes = [], loading, error } = state;

  // 🦸 Selection logic: lock in heroA first, then heroB (if distinct)
  const handleSelect = (hero) => {
    if (!heroA) {
      setHeroA(hero);
    } else if (!heroB && hero.id !== heroA.id) {
      setHeroB(hero);
    }
  };

  // 🧹 Clear both selections
  const handleClearSelection = () => {
    setHeroA(null);
    setHeroB(null);
  };

  if (loading) return <Loader />;
  if (error) return <Error message={error} />;

  return (
    <section
      className="hero-list"
      aria-label="List of matching superheroes"
      aria-live="polite"
    >
      <h2 className="sr-only">Search Results</h2>

      {/* 🧹 Clear Button */}
      {(heroA || heroB) && (
        <div className="selection-controls">
          <button onClick={handleClearSelection} aria-label="Clear selected heroes">
            🧹 Clear Selection
          </button>
        </div>
      )}

      {/* 🦸 Selected Heroes Preview */}
      {(heroA || heroB) && (
        <div className="selected-heroes" aria-label="Selected heroes">
          {heroA && <HeroCard hero={heroA} isSelected />}
          {heroB && <HeroCard hero={heroB} isSelected />}
        </div>
      )}

      {/* 🦸 Hero Cards from Search Results */}
      <div className="search-results">
        {heroes.map((hero) => {
          const isSelected = hero.id === heroA?.id || hero.id === heroB?.id;

          return (
            <HeroCard
              key={hero.id}
              hero={hero}
              onClick={() => handleSelect(hero)}
              isSelected={isSelected}
            />
          );
        })}
      </div>
    </section>
  );
}

export default HeroList;