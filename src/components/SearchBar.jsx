import { useState, useRef, useEffect, useContext } from 'react';
import { HeroContext } from '../context/HeroContext';

function SearchBar() {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);
  const { dispatch } = useContext(HeroContext);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleSearch = async () => {
    if (!query.trim()) return;

    dispatch({ type: 'FETCH_START' });

    try {
      const res = await fetch('https://akabab.github.io/superhero-api/api/all.json');
      const allHeroes = await res.json();

      const filtered = allHeroes.filter((hero) =>
        hero.name.toLowerCase().includes(query.trim().toLowerCase())
      );

      if (filtered.length > 0) {
        dispatch({ type: 'FETCH_SUCCESS', payload: filtered });
      } else {
        dispatch({ type: 'FETCH_ERROR', payload: 'No heroes found.' });
      }
    } catch (err) {
      dispatch({ type: 'FETCH_ERROR', payload: err.message });
    }
  };

  return (
    <div className="search-bar">
      <input
        className="search-input"
        ref={inputRef}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Search for a hero..."
      />
      <button
        className="search-button"
        onClick={handleSearch}
        disabled={!query.trim()}
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;