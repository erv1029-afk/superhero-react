import HeroFilterBar from './HeroFilterBar';
import SearchBar from './SearchBar';
import HeroList from './HeroList';
import Loader from './Loader';
import Error from './Error';

function AppContent() {
  const { state, dispatch } = useHeroContext();
  const { heroes, loading, error, selectedUniverse, searchTerm } = state;

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
        <SearchBar
          value={searchTerm}
          onSearch={(term) =>
            dispatch({ type: 'SET_SEARCH_TERM', payload: term })
          }
        />
        <button
          className="randomize-button"
          onClick={() => dispatch({ type: 'RANDOMIZE_HEROES' })}
        >
          🎲 Randomize Heroes
        </button>
      </section>

      {loading && <Loader />}
      {error && <Error message={error} />}

      <HeroList heroes={heroes} />
    </main>
  );
}