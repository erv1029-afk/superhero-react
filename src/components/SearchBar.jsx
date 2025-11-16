import { useState, useRef, useEffect } from 'react';
import { useHeroContext } from '../context/HeroContext';
import { fetchHeroData } from '../api/heroData';

function SearchBar() {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);
  const { dispatch } = useHeroContext();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleHeroFilter = async (filterType) => {
    dispatch({ type: 'SET_LOADING', payload: true });

    try {
      const allHeroes = await fetchHeroData();
      let filtered = [];

      switch (filterType) {
        case 'search': {
          const trimmed = query.trim().toLowerCase();
          if (!trimmed) return;
          filtered = allHeroes.filter(hero =>
            hero.name.toLowerCase().includes(trimmed)
          );
          break;
        }
        case 'marvel':
          filtered = allHeroes.filter(hero =>
            hero.publisher?.toLowerCase().includes('marvel')
          );
          break;
        case 'dc':
          filtered = allHeroes.filter(hero =>
            hero.publisher?.toLowerCase().includes('dc')
          );
          break;
        case 'random':
          filtered = [allHeroes[Math.floor(Math.random() * allHeroes.length)]];
          break;
        default:
          break;
      }

      dispatch({ type: 'SET_HERO_LIST', payload: filtered });

      dispatch({
        type: 'SET_ERROR',
        payload: filtered.length
          ? ''
          : filterType === 'search'
            ? `No heroes found for "${query}".`
            : 'No matching heroes found.',
      });
    } catch (err) {
      dispatch({ type: 'SET_ERROR', payload: `Search failed: ${err.message}` });
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  const handleClear = () => {
    setQuery('');
    dispatch({ type: 'SET_HERO_LIST', payload: [] });
    dispatch({ type: 'SET_ERROR', payload: '' });
  };

  return (
    <div className="search-bar">
      <input
        ref={inputRef}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleHeroFilter('search')}
        placeholder="Search for a hero..."
        aria-label="Hero search input"
        className="search-input"
      />
      <button
        onClick={() => handleHeroFilter('search')}
        disabled={!query.trim()}
        className="search-button"
        aria-label="Search for matching heroes"
      >
        Search
      </button>
      <button
        onClick={() => handleHeroFilter('marvel')}
        className="marvel-button"
        aria-label="Filter Marvel heroes"
      >
        Marvel
      </button>
      <button
        onClick={() => handleHeroFilter('dc')}
        className="dc-button"
        aria-label="Filter DC heroes"
      >
        DC
      </button>
      <button
        onClick={() => handleHeroFilter('random')}
        className="randomizer-button"
        aria-label="Show a random hero"
      >
        Randomizer
      </button>
      <button
        onClick={handleClear}
        className="clear-button"
        aria-label="Clear search and hero list"
      >
        Clear
      </button>
    </div>
  );
}

export default SearchBar;
