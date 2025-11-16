export const simulateFight = (heroA = {}, heroB = {}) => {
  const winner = Math.random() < 0.5 ? heroA : heroB;
  const loser = winner === heroA ? heroB : heroA;

  const moves = [
    'Power Punch',
    'Energy Blast',
    'Speed Dash',
    'Aerial Slam',
    'Shield Block',
    'Teleport Strike',
    'Mind Shock',
    'Elemental Surge',
    'Weapon Whirl',
    'Combo Barrage'
  ];
  const move = moves[Math.floor(Math.random() * moves.length)];

  const winnerName = winner?.name || 'Unknown Hero';
  const loserName = loser?.name || 'Unknown Hero';
  const winnerImage = winner?.images?.md || '/images/default_superhero.jpg';

  const description = `${winnerName} uses ${move} to defeat ${loserName} in a fierce battle!`;

  return {
    winner: {
      ...winner,
      name: winnerName,
      image: winnerImage
    },
    description
  };
};