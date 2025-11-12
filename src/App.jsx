import React from 'react';
import { HeroProvider } from './context/HeroContext';
import SearchBar from './components/SearchBar';
import HeroList from './components/HeroList';

function App() {
  return (
    <HeroProvider>
      <div className="app-container">
        <h1 className="app-title">Superhero Search</h1>
        <SearchBar />
        <HeroList />
      </div>
    </HeroProvider>
  );
}

export default App;
