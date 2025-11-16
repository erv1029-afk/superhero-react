import React, { useState, useEffect } from 'react';
import { simulateFight } from '../utils/simulateFight';
import BattleNarration from './BattleNarration';
import HeroCard from './HeroCard'; // Needed for lock-in preview

const fallbackHero = {
  name: 'Unknown Hero',
  images: { md: '/images/default_superhero.jpg' },
};

const FightArena = ({ heroA, heroB, onClear }) => {
  const [result, setResult] = useState(null);
  const [canFight, setCanFight] = useState(false);

  useEffect(() => {
    const validA = heroA?.images?.md;
    const validB = heroB?.images?.md;
    setCanFight(Boolean(validA && validB));
  }, [heroA, heroB]);

  const handleFight = () => {
    if (!canFight) {
      console.warn('Both heroes must be selected and valid before fighting.');
      return;
    }

    const fight = simulateFight(heroA, heroB);
    setResult(fight);
  };

  const handleRematch = () => {
    handleFight();
  };

  const winner = result?.winner || fallbackHero;
  const winnerImage = winner?.images?.md || fallbackHero.images.md;

  return (
    <div className="fight-arena">
      {/* 🧙‍♂️ Choose your rival prompt */}
      {heroA && !heroB && !result && (
        <p className="choose-rival" aria-live="polite">
          🧙‍♂️ Choose your rival to begin the battle!
        </p>
      )}

      {/* 🦸 Lock-in preview panel */}
      {(heroA || heroB) && !result && (
        <div className="locked-in-panel">
          {heroA && <HeroCard hero={heroA} isSelected />}
          {heroB && <HeroCard hero={heroB} isSelected />}
        </div>
      )}

      {/* 🆚 VS Banner */}
      {heroA && heroB && !result && (
        <div className="vs-banner">
          <h2>{heroA.name} 💥 VS 💥 {heroB.name}</h2>
        </div>
      )}

      {/* ⚔️ Fight Button */}
      {canFight && !result && (
        <div className="fight-controls">
          <button onClick={handleFight}>⚔️ Fight!</button>
        </div>
      )}

      {/* 🏆 Fight Result */}
      {result && (
        <div className="battle-result winner-reveal">
          <div className="winner-card">
            <h2>🏆 {winner.name} wins!</h2>
            <img
              src={winnerImage}
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