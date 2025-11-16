import React from 'react';

const BattleNarration = ({ description }) => {
  const fallbackPhrases = [
    '🔥 The battle rages on...',
    '⚡ Clash of titans!',
    '💥 Fists fly and fury ignites!',
    '🩸 Who will survive the carnage?',
    '🎯 Critical hit incoming!',
    '💣 Combo breaker!',
    '👊 Finish them!'
  ];

  const fallback = fallbackPhrases[Math.floor(Math.random() * fallbackPhrases.length)];

  return (
    <p
      className="battle-description"
      role="status"
      aria-live="polite"
    >
      {description || fallback}
    </p>
  );
};

export default BattleNarration;