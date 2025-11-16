import React from 'react';

const WinnerCard = ({ winner }) => {
  if (!winner) return null;

  const imageSrc = winner?.image || '/images/default_superhero.jpg';
  const winnerName = winner?.name || 'Unknown Hero';

  return (
    <div className="winner-card" role="region" aria-label={`Winner: ${winnerName}`}>
      <h2 className="winner-name">🏆 {winnerName} wins!</h2>
      <img
        src={imageSrc}
        alt={`Portrait of ${winnerName}`}
        className="winner-image"
      />
    </div>
  );
};

export default WinnerCard;