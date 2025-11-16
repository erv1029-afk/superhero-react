import { useState } from 'react';
import { useHeroContext } from '../context/HeroContext';
import { fetchHeroData } from '../api/heroData';

export default function HeroFilterBar() {
  const [query, setQuery] = useState('');
  const { dispatch } = useHeroContext();

  const handleSearch = async () => {
    const trimmed = query.trim().toLowerCase();
    if (!trimmed) return;

    dispatch({ type: 'SET_LOADING', payload: true });

    try {
      const allHeroes = await fetchHeroData();
      const filtered = allHeroes.filter(hero =>
        hero.name.toLowerCase().includes(trimmed)
      );
      dispatch({ type: 'SET_HERO_LIST', payload: filtered });
      dispatch({ type: 'SET_ERROR', payload: '' });
    } catch (err) {
      dispatch({ type: 'SET_ERROR', payload: 'Search failed.' });
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  const handleRandomize = async () => {
    dispatch({ type: 'SET_LOADING', payload: true });

    try {
      const allHeroes = await fetchHeroData();
      const shuffled = allHeroes.sort(() => 0.5 - Math.random());
      dispatch({ type: 'SET_HERO_LIST', payload: shuffled.slice(0, 20) });
      dispatch({ type: 'SET_ERROR', payload: '' });
    } catch (err) {
      dispatch({ type: 'SET_ERROR', payload: 'Randomizer failed.' });
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  const handleFilterByPublisher = async (publisher) => {
    dispatch({ type: 'SET_LOADING', payload: true });

    try {
      const allHeroes = await fetchHeroData();
      const filtered = allHeroes.filter(hero =>
        hero.biography?.publisher?.toLowerCase().includes(publisher.toLowerCase())
      );
      dispatch({ type: 'SET_HERO_LIST', payload: filtered });
      dispatch({ type: 'SET_ERROR', payload: '' });
    } catch (err) {
      dispatch({ type: 'SET_ERROR', payload: 'Filter failed.' });
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  return (
    <div className="hero-filter-bar">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by name..."
        aria-label="Search heroes"
      />
      <button onClick={handleSearch}>🔍 Search</button>
      <button onClick={handleRandomize}>🎲 Randomize</button>
      <button onClick={() => handleFilterByPublisher('DC Comics')}>🦸‍♂️ DC</button>
      <button onClick={() => handleFilterByPublisher('Marvel Comics')}>🧑‍🔬 Marvel</button>
    </div>
  );
}