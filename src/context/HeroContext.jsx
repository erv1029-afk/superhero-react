import React, { createContext, useReducer } from 'react';

export const HeroContext = createContext();

const initialState = {
  heroes: [],
  loading: false,
  error: null,
  selectedHero: null,
  selectedHeroDetails: null,
  heroA: null,
  heroB: null,
  fightResult: null,
};

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_START':
      return { ...state, loading: true, error: null };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, heroes: action.payload };
    case 'FETCH_ERROR':
      return { ...state, loading: false, error: action.payload };
    case 'SELECT_HERO':
      return { ...state, selectedHero: action.payload };
    case 'FETCH_DETAILS_SUCCESS':
      return { ...state, selectedHeroDetails: action.payload };
    case 'SET_HERO_A':
      return { ...state, heroA: action.payload };
    case 'SET_HERO_B':
      return { ...state, heroB: action.payload };
    case 'SET_FIGHT_RESULT':
      return { ...state, fightResult: action.payload };
    case 'CLEAR_FIGHT':
      return { ...state, heroA: null, heroB: null, fightResult: null };
    default:
      return state;
  }
}

export function HeroProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <HeroContext.Provider value={{ state, dispatch }}>
      {children}
    </HeroContext.Provider>
  );
}