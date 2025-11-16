import React, { useState, useEffect } from 'react';
import { HeroProvider } from './context/HeroContext';
import SearchBar from './components/SearchBar';
import HeroList from './components/HeroList';
import FightArena from './components/FightArena';

function App() {
  const [heroA, setHeroA] = useState(null);
  const [heroB, setHeroB] = useState(null);

  // 🧹 Clear both selected heroes
  const handleClear = () => {
    setHeroA(null);
    setHeroB(null);
  };

  // 🧠 Debug: log selected heroes on change
  useEffect(() => {
    console.log('Hero A:', heroA?.name);
    console.log('Hero B:', heroB?.name);
  }, [heroA, heroB]);

  return (
    <HeroProvider>
      <main className="app-container" role="main">
        <header>
          <h1 className="app-title">Superhero Search</h1>
        </header>

        <section className="search-section" aria-label="Search for superheroes">
          <SearchBar />
        </section>

        <section className="results-section" aria-label="Search results">
          <HeroList
            setHeroA={setHeroA}
            setHeroB={setHeroB}
            heroA={heroA}
            heroB={heroB}
          />
        </section>

        {(heroA || heroB) && (
          <section className="fight-section" aria-label="Fight arena">
            <FightArena
              heroA={heroA}
              heroB={heroB}
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