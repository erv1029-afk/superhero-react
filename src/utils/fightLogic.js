export function calculateWinner(hero1, hero2) {
  const score1 = hero1.power + hero1.speed + hero1.intelligence;
  const score2 = hero2.power + hero2.speed + hero2.intelligence;

  return score1 >= score2 ? hero1 : hero2;
}