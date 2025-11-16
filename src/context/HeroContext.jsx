import React, { createContext, useReducer } from 'react';

export const HeroContext = createContext();

// 🧠 Initial global state
const initialState = {
  heroes: [],
  loading: false,
  error: null,
  selectedHero: null,
  selectedHeroDetails: null,
};

// ⚙️ Reducer logic
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

    default:
      return state;
  }
}

// 🌐 Context provider
export function HeroProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <HeroContext.Provider value={{ state, dispatch }}>
      {children}
    </HeroContext.Provider>
  );
}