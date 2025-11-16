import React from 'react';
import { HeroProvider } from './context/HeroContext';
import SearchBar from './components/SearchBar';
import HeroList from './components/HeroList';
import FightArena from './components/FightArena';
import BattleNarration from './components/BattleNarration';
import WinnerCard from './components/WinnerCard';
import { useHeroContext } from './context/HeroContext';

function AppContent() {
  const { state, dispatch } = useHeroContext();
  const { hero1, hero2, winner, narration } = state;

  const handleClear = () => {
    dispatch({ type: 'RESET' });
  };

  return (
    <main className="app-container" role="main">
      <header>
        <h1 className="app-title">Superhero Showdown</h1>
      </header>

      <section className="search-section" aria-label="Search for superheroes">
        <SearchBar />
      </section>

      <section className="results-section" aria-label="Search results">
        <HeroList
          heroA={hero1}
          heroB={hero2}
          setHeroA={(hero) => dispatch({ type: 'SET_HERO_1', payload: hero })}
          setHeroB={(hero) => dispatch({ type: 'SET_HERO_2', payload: hero })}
        />
      </section>

      {(hero1 && hero2) && (
        <section className="fight-section" aria-label="Fight arena">
          <FightArena />
          <BattleNarration description={narration} />
          <WinnerCard hero={winner} />
          <button onClick={handleClear} className="clear-button">
            🔄 Rematch
          </button>
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
  );
}

export default function App() {
  return (
    <HeroProvider>
      <AppContent />
    </HeroProvider>
  );
}