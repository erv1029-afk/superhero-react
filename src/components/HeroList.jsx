import React, { useContext } from 'react';
import { HeroContext } from '../context/HeroContext';
import HeroCard from './HeroCard';
import Loader from './Loader';
import Error from './Error';

function HeroList({ setHeroA, setHeroB, heroA, heroB }) {
  const { state } = useContext(HeroContext);
  const { heroes = [], loading, error } = state;

  const handleSelect = (hero) => {
    if (!heroA) {
      setHeroA(hero);
    } else if (!heroB && hero.id !== heroA.id) {
      setHeroB(hero);
    }
  };

  const handleClearSelection = () => {
    setHeroA(null);
    setHeroB(null);
  };

  if (loading) return <Loader />;
  if (error) return <Error message={error} />;

  if (!heroes.length) {
    return (
      <p className="no-results" role="alert" aria-live="assertive">
        🕵️‍♀️ No heroes found. Try a different search or summon a new legend!
      </p>
    );
  }

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

      {/* 🦸 Hero Cards */}
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
    </section>
  );
}

export default HeroList;