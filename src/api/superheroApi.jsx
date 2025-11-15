const BASE_URL = 'https://akabab.github.io/superhero-api/api/all.json';

export async function fetchAllHeroes() {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) throw new Error('Failed to fetch heroes');
    return await response.json();
  } catch (error) {
    console.error('API error:', error);
    return null;
  }
}

export async function fetchHeroById(id) {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) throw new Error('Failed to fetch heroes');
    const heroes = await response.json();
    return heroes.find(hero => hero.id === id) || null;
  } catch (error) {
    console.error('API error:', error);
    return null;
  }
}