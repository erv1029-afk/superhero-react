import React from 'react';
import { HeroProvider } from './context/HeroContext';
import SearchBar from './components/SearchBar';
import HeroList from './components/HeroList';
import HeroCard from './components/HeroCard';

function App() {
  return (
    <HeroProvider>
      <main className="app-container">
        
        <header>
          <h1 className="app-title">Superhero Search</h1>
        </header>

        
        <section className="search-section">
          <SearchBar />
        </section>

       
        <section className="results-section">
          <HeroList />
        </section>

        
      </main>
    </HeroProvider>
  );
}

export default App;
