export const simulateFight = (heroA, heroB) => {
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

  const description = `${winner.name} uses ${move} to defeat ${loser.name} in a fierce battle!`;

  return { winner, description };
};