import { useState, useRef, useEffect, useContext } from 'react';
import { HeroContext } from '../context/HeroContext';
import { fetchHeroData } from '../api/heroData';

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

    dispatch({ type: 'SET_LOADING', payload: true });

    try {
      const allHeroes = await fetchHeroData();
      const filtered = allHeroes.filter(hero =>
        hero.name.toLowerCase().includes(trimmedQuery)
      );

      if (filtered.length) {
        dispatch({ type: 'SET_HERO_LIST', payload: filtered });
        dispatch({ type: 'SET_ERROR', payload: '' });
      } else {
        dispatch({ type: 'SET_HERO_LIST', payload: [] });
        dispatch({ type: 'SET_ERROR', payload: `No heroes found for "${query}".` });
      }
    } catch (error) {
      dispatch({
        type: 'SET_ERROR',
        payload: `Search failed: ${error.message}`,
      });
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
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