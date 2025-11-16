// utils/simulateFight.js
export const simulateFight = (heroA, heroB) => {
  const winner = Math.random() < 0.5 ? heroA : heroB;
  const loser = winner === heroA ? heroB : heroA;

  const moves = ['thunder punch', 'laser blast', 'telekinetic slam', 'shadow strike'];
  const move = moves[Math.floor(Math.random() * moves.length)];

  const description = `${winner.name} uses ${move} to defeat ${loser.name} in a fierce battle!`;

  return { winner, description };
};