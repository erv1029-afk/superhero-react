import HeroFilterBar from './HeroFilterBar';
import SearchBar from './SearchBar';
import HeroList from './HeroList';
import Loader from './Loader';
import Error from './Error';
import { useHeroContext } from '../context/HeroContext';

function AppContent() {
  const { state, dispatch } = useHeroContext();
  const { heroes, loading, error, selectedUniverse } = state;

  return (
    <main className="app-container">
      <header>
        <h1 className="app-title">Superhero Search</h1>
      </header>

      <section className="controls-section">
        <HeroFilterBar
          selectedUniverse={selectedUniverse}
          onFilterChange={(universe) =>
            dispatch({ type: 'SET_UNIVERSE', payload: universe })
          }
        />
        <SearchBar />
      </section>

      {loading && <Loader />}
      {error && <Error message={error} />}

      <HeroList heroes={heroes} />

      <footer className="app-footer">
        Built with comic-book flair by Emily ✨
      </footer>
    </main>
  );
}

export default AppContent;