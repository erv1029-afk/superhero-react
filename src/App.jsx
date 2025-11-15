import React from 'react';
import { HeroProvider } from './context/HeroContext';
import SearchBar from './components/SearchBar';
import HeroList from './components/HeroList';

function App() {
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
          <HeroList />
        </section>

        <footer className="app-footer">
          <p>
            Powered by <a href="https://akabab.github.io/superhero-api/" target="_blank" rel="noopener noreferrer">Akabab Superhero API</a>
          </p>
        </footer>
      </main>
    </HeroProvider>
  );
}

export default App;