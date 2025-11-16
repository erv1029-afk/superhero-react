import React, { useState } from 'react';
import { simulateFight } from '../utils/simulateFight';

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
      {heroA && heroB && !result && (
        <button onClick={handleFight}>⚔️ Fight!</button>
      )}

      {result && (
        <div className="battle-result">
          <h2>🏆 {result.winner.name} wins!</h2>
          <p>{result.description}</p>
          <img src={result.winner.image.url} alt={result.winner.name} />
          <div className="controls">
            <button onClick={handleRematch}>🔁 Rematch</button>
            <button onClick={onClear}>🧹 Clear</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FightArena;