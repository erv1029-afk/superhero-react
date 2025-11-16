import React, { useState } from 'react';
import { simulateFight } from '../utils/simulateFight';
import BattleNarration from './BattleNarration';

const fallbackHero = {
  name: 'Unknown Hero',
  image: { url: '/images/default_superhero.jpg' },
};

const FightArena = ({ heroA, heroB, onClear }) => {
  const [result, setResult] = useState(null);

  const handleFight = () => {
    if (!heroA || !heroB) {
      console.warn('Both heroes must be selected before fighting.');
      return;
    }

    const fight = simulateFight(heroA, heroB);
    setResult(fight);
  };

  const handleRematch = () => {
    handleFight();
  };

  const winner = result?.winner || fallbackHero;

  return (
    <div className="fight-arena">
      {/* 🆚 Fight Button */}
      {heroA && heroB && !result && (
        <div className="fight-controls">
          <button onClick={handleFight}>⚔️ Fight!</button>
        </div>
      )}

      {/* 🏆 Fight Result */}
      {result && (
        <div className="battle-result">
          <div className="winner-card">
            <h2>🏆 {winner.name} wins!</h2>
            <img
              src={winner.image?.url || '/images/default_superhero.jpg'}
              alt={winner.name || 'Unknown Hero'}
            />
          </div>

          <BattleNarration description={result.description || 'An epic clash unfolded...'} />

          <div className="fight-controls">
            <button onClick={handleRematch}>🔁 Rematch</button>
            <button onClick={onClear}>🧹 Clear</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FightArena;