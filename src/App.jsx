import SearchBar from './SearchBar';
import HeroList from './HeroList';
import { useHeroContext } from '../context/HeroContext';

function AppContent() {
  const { state } = useHeroContext();
  const { heroList, loading, error } = state;

  return (
    <div className="app-container">
      <h1 className="app-title">Hero Search Arena</h1>

      <SearchBar />

      {loading && <div className="spinner" />}

      {error && <div className="error-message">{error}</div>}

      {!loading && !error && heroList.length === 0 && (
        <div className="no-results">No heroes to display. Try searching or randomizing!</div>
      )}

      {!loading && heroList.length > 0 && <HeroList heroes={heroList} />}

      <footer className="app-footer">
        Built with comic-book flair by Emily ✨
      </footer>
    </div>
  );
}

export default AppContent;