import { useEffect } from 'react';
import { useHeroContext } from '../context/HeroContext';
import { fetchHeroData } from '../api/heroData';
import HeroList from './HeroList';
import WinnerCard from './WinnerCard';
import Error from './Error';
import Loader from './Loader';

export default function FightArena() {
  const { state, dispatch } = useHeroContext();
  const { hero1, hero2, winner, heroes, loading, error } = state;

  useEffect(() => {
    async function loadHeroes() {
      dispatch({ type: 'SET_LOADING', payload: true });
      try {
        const data = await fetchHeroData();
        dispatch({ type: 'SET_HERO_LIST', payload: data });
      } catch (err) {
        dispatch({ type: 'SET_ERROR', payload: 'Failed to load hero data.' });
      } finally {
        dispatch({ type: 'SET_LOADING', payload: false });
      }
    }
    loadHeroes();
  }, [dispatch]);

  useEffect(() => {
    if (hero1 && hero2) {
      dispatch({ type: 'CALCULATE_WINNER' });
    }
  }, [hero1, hero2, dispatch]);

  if (loading) return <Loader />;
  if (error) return <Error message={error} />;

  return (
    <div className="arena">
      <h2>Choose Your Fighters</h2>

      <HeroList
        heroA={hero1}
        heroB={hero2}
        setHeroA={hero => dispatch({ type: 'SET_HERO_1', payload: hero })}
        setHeroB={hero => dispatch({ type: 'SET_HERO_2', payload: hero })}
      />

      {winner && <WinnerCard hero={winner} />}
    </div>
  );
}