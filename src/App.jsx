import { useState } from 'react';
import './index.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [heroes, setHeroes] = useState([]);
  const [error, setError] = useState('');

  const fetchHeroes = async () => {
    const response = await fetch('https://akabab.github.io/superhero-api/api/all.json');
    return await response.json();
  };

  const handleSearch = async () => {
    console.log('Search triggered');

    if (!searchTerm.trim()) {
      setHeroes([]);
      setError('NO HEROES FOUND. TRY A DIFFERENT SEARCH!');
      return;
    }

    try {
      const data = await fetchHeroes();
      console.log('Fetched data:', data);

      const filtered = data.filter(hero =>
        hero.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

      setHeroes(filtered);
      setError(filtered.length === 0 ? 'NO HEROES FOUND. TRY A DIFFERENT SEARCH!' : '');
    } catch (err) {
      console.error('Fetch error:', err);
      setHeroes([]);
      setError('Something went wrong. Please try again.');
    }
  };

  const handleMarvel = async () => {
    try {
      const data = await fetchHeroes();
      const marvelHeroes = data.filter(hero => hero.biography.publisher === 'Marvel Comics');
      setHeroes(marvelHeroes);
      setError(marvelHeroes.length === 0 ? 'No Marvel heroes found.' : '');
    } catch (err) {
      setHeroes([]);
      setError('Something went wrong. Please try again.');
    }
  };

  const handleDC = async () => {
    try {
      const data = await fetchHeroes();
      const dcHeroes = data.filter(hero => hero.biography.publisher === 'DC Comics');
      setHeroes(dcHeroes);
      setError(dcHeroes.length === 0 ? 'No DC heroes found.' : '');
    } catch (err) {
      setHeroes([]);
      setError('Something went wrong. Please try again.');
    }
  };

  const handleRandom = async () => {
    try {
      const data = await fetchHeroes();
      const randomHero = data[Math.floor(Math.random() * data.length)];
      setHeroes([randomHero]);
      setError('');
    } catch (err) {
      setHeroes([]);
      setError('Something went wrong. Please try again.');
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
        <button className="marvel-button" onClick={handleMarvel}>Marvel</button>
        <button className="dc-button" onClick={handleDC}>DC</button>
        <button className="randomizer-button" onClick={handleRandom}>Random</button>
      </div>

      {error && <div className="error-message">{error}</div>}

      <div className="hero-list">
        {heroes.map((hero) => (
          <div key={hero.id} className="hero-card">
            <img src={hero.images.md} alt={hero.name} className="hero-image" />
            <div className="hero-name">{hero.name}</div>
            <div className="hero-stats">
              <p>Power: {hero.powerstats.power}</p>
              <p>Speed: {hero.powerstats.speed}</p>
              <p>Strength: {hero.powerstats.strength}</p>
              <p>Intelligence: {hero.powerstats.intelligence}</p>
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