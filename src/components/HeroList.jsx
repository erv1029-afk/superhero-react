import React, { useContext } from 'react';
import { HeroContext } from '../context/HeroContext';
import HeroCard from './HeroCard';
import Loader from './Loader';
import Error from './Error';

function HeroList({ setHeroA, setHeroB }) {
  const { state } = useContext(HeroContext);
  const { heroes, loading, error } = state;

  if (loading) return <Loader />;
  if (error) return <Error message={error} />;

  if (!heroes?.length) {
    return (
      <p className="no-results" role="alert">
        No heroes found. Try a different search!
      </p>
    );
  }

  
  const handleSelect = (hero) => {
    setHeroA((prev) => (prev ? prev : hero));
    setHeroB((prev) => (prev ? (hero.id !== prev.id ? hero : prev) : hero));
  };

  return (
    <div className="hero-list" aria-label="List of matching superheroes">
      {heroes.map((hero) => (
        <HeroCard
          key={hero.id}
          hero={hero}
          onClick={() => handleSelect(hero)}
        />
      ))}
    </div>
  );
}

export default HeroList;