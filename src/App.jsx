import { useState } from 'react';
import './index.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [heroes, setHeroes] = useState([]);
  const [error, setError] = useState('');

  const handleSearch = () => {
    // Placeholder logic — replace with actual API call
    if (!searchTerm.trim()) {
      setHeroes([]);
      setError('NO HEROES FOUND. TRY A DIFFERENT SEARCH!');
    } else {
      setHeroes([]); // simulate empty result
      setError('NO HEROES FOUND. TRY A DIFFERENT SEARCH!');
    }
  };

  return (
    <div className="app-container">
      <h1 className="app-title">SUPERHERO SEARCH</h1>

      <div className="search-bar">
        <input
          className="search-input"
          type="text"
          placeholder="Search for a hero..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
      </div>

      <div className="button-container">
        <button className="marvel-button">Marvel</button>
        <button className="dc-button">DC</button>
        <button className="randomizer-button">Random</button>
      </div>

      {error && <div className="error-message">{error}</div>}

      <div className="hero-list">
        {heroes.map((hero) => (
          <div key={hero.id} className="hero-card">
            <img src={hero.image} alt={hero.name} className="hero-image" />
            <div className="hero-name">{hero.name}</div>
            <div className="hero-stats">
              <p>Power: {hero.power}</p>
              <p>Speed: {hero.speed}</p>
              {/* Add more stats as needed */}
            </div>
          </div>
        ))}
      </div>

      <div className="app-footer">
        POWERED BY <a href="https://akabab.github.io/superhero-api/">AKABAB SUPERHERO API</a>
      </div>
    </div>
  );
}

export default App;