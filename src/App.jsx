import { HeroProvider } from './context/HeroContext';
import AppContent from './components/AppContent';

export default function App() {
  return (
    <HeroProvider>
      <AppContent />
    </HeroProvider>
  );
}