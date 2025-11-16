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
    if (e.key === 'Enter') handleSearch();
  };

  const handleSearch = async () => {
    const trimmedQuery = query.trim().toLowerCase();
    if (!trimmedQuery) return;

    dispatch({ type: 'FETCH_START' });

    try {
      const response = await fetch('https://akabab.github.io/superhero-api/api/all.json');
      const heroes = await response.json();

      const results = heroes.filter((hero) =>
        hero.name.toLowerCase().includes(trimmedQuery)
      );

      dispatch({
        type: results.length ? 'FETCH_SUCCESS' : 'FETCH_ERROR',
        payload: results.length
          ? results
          : `No heroes found for "${query}".`,
      });
    } catch (error) {
      dispatch({
        type: 'FETCH_ERROR',
        payload: `Search failed: ${error.message}`,
      });
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
        aria-label="Hero search input"
      />
      <button
        className="search-button"
        onClick={handleSearch}
        disabled={!query.trim()}
        aria-label="Search for matching heroes"
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;