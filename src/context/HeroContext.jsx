import { createContext, useReducer, useContext } from 'react';

const HeroContext = createContext();

const initialState = {
  heroList: [],
  loading: false,
  error: '',
};

function heroReducer(state, action) {
  switch (action.type) {
    case 'SET_HERO_LIST':
      return { ...state, heroList: action.payload };
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