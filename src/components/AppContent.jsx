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
      <header className="app-header">
        <h1 className="app-title">Superhero Search</h1>
      </header>

      <section className="controls-section">
        <div className="filter-bar-wrapper">
          <HeroFilterBar
            selectedUniverse={selectedUniverse}
            onFilterChange={(universe) =>
              dispatch({ type: 'SET_UNIVERSE', payload: universe })
            }
          />
        </div>

        <div className="search-bar-wrapper">
          <SearchBar />
        </div>
      </section>

      <section className="results-section">
        {loading && <Loader />}
        {error && <Error message={error} />}
        {!loading && !error && <HeroList heroes={heroes} />}
      </section>

      <footer className="app-footer">
        Built with comic-book flair by Emily ✨
      </footer>
    </main>
  );
}

export default AppContent;