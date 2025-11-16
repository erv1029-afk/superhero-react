import React, { useState } from 'react';
import { simulateFight } from '../utils/simulateFight';
import BattleNarration from './BattleNarration';

const FightArena = ({ heroA, heroB, onClear }) => {
  const [result, setResult] = useState(null);

  const handleFight = () => {
    const fight = simulateFight(heroA, heroB);
    setResult(fight);
  };

  const handleRematch = () => {
    handleFight();
  };

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
            <h2>🏆 {result.winner.name} wins!</h2>
            <img src={result.winner.image.url} alt={result.winner.name} />
          </div>

          <BattleNarration description={result.description} />

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