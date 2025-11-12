import React, { useContext } from 'react';
import { HeroContext } from '../context/HeroContext';
import HeroCard from './HeroCard';
import Loader from './Loader';
import Error from './Error';

function HeroList() {
  const { state } = useContext(HeroContext);
  const { heroes, loading, error } = state;

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Error message={error} />;
  }

  if (!heroes || heroes.length === 0) {
    return <p className="no-results">No heroes found. Try a different search!</p>;
  }

  return (
    <div className="hero-list">
      {heroes.map((hero) => (
        <HeroCard key={hero.id} hero={hero} />
      ))}
    </div>
  );
}

export default HeroList;