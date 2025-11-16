import { createContext, useReducer, useContext } from 'react';
import { simulateFight } from '../utils/simulateFight';

const HeroContext = createContext();

const initialState = {
  heroes: [],       // full hero list from API
  hero1: null,      // selected fighter A
  hero2: null,      // selected fighter B
  winner: null,     // fight result
  loading: false,   // loading state
  error: '',        // error message
};

function heroReducer(state, action) {
  switch (action.type) {
    case 'SET_HERO_LIST':
      return { ...state, heroes: action.payload };

    case 'SET_HERO_1':
      return { ...state, hero1: action.payload, hero2: null, winner: null };

    case 'SET_HERO_2':
      return { ...state, hero2: action.payload };

    case 'CALCULATE_WINNER':
      const winner = simulateFight(state.hero1, state.hero2);
      return { ...state, winner };

    case 'SET_LOADING':
      return { ...state, loading: action.payload };

    case 'SET_ERROR':
      return { ...state, error: action.payload };

    case 'RESET':
      return initialState;

    default:
      return state;
  }
}

export function HeroProvider({ children }) {
  const [state, dispatch] = useReducer(heroReducer, initialState);
  return (
    <HeroContext.Provider value={{ state, dispatch }}>
      {children}
    </HeroContext.Provider>
  );
}

export function useHeroContext() {
  return useContext(HeroContext);
}