import React, { useState } from 'react';
import { HeroProvider } from './context/HeroContext';
import SearchBar from './components/SearchBar';
import HeroList from './components/HeroList';
import FightArena from './components/FightArena';
import { simulateFight } from './utils/simulateFight';

function App() {
  const [heroA, setHeroA] = useState(null);
  const [heroB, setHeroB] = useState(null);
  const [fightResult, setFightResult] = useState(null);

  const handleFight = () => {
    if (heroA && heroB) {
      const result = simulateFight(heroA, heroB);
      setFightResult(result);
    }
  };

  const handleRematch = () => {
    handleFight(); 
  };

  const handleClear = () => {
    setHeroA(null);
    setHeroB(null);
    setFightResult(null);
  };

  return (
    <HeroProvider>
      <main className="app-container" role="main">
        <header>
          <h1 className="app-title">Superhero Search</h1>
        </header>

        <section className="search-section">
          <SearchBar />
        </section>

        <section className="results-section">
          <HeroList setHeroA={setHeroA} setHeroB={setHeroB} />
        </section>

        {heroA && heroB && (
          <section className="fight-section">
            <FightArena
              heroA={heroA}
              heroB={heroB}
              fightResult={fightResult}
              onFight={handleFight}
              onRematch={handleRematch}
              onClear={handleClear}
            />
          </section>
        )}

        <footer className="app-footer">
          <p>
            Powered by{' '}
            <a
              href="https://akabab.github.io/superhero-api/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Akabab Superhero API
            </a>
          </p>
        </footer>
      </main>
    </HeroProvider>
  );
}

export default App;