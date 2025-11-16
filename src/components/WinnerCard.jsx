import React from 'react';

const WinnerCard = ({ winner }) => {
  if (!winner) return null;

  return (
    <div className="winner-card" role="region" aria-label={`Winner: ${winner.name}`}>
      <h2 className="winner-name">🏆 {winner.name} wins!</h2>
      <img
        src={winner.image.url}
        alt={`Portrait of ${winner.name}`}
        className="winner-image"
      />
    </div>
  );
};

export default WinnerCard;