const BASE_URL = 'https://akabab.github.io/superhero-api/api/all.json';

let cachedHeroes = null;


export async function fetchAllHeroes() {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) throw new Error('Failed to fetch heroes');
    const data = await response.json();
    cachedHeroes = data;
    return data;
  } catch (error) {
    console.error('API error:', error);
    return []; // fallback to empty array
  }
}


export async function fetchHeroById(id) {
  try {
    if (!cachedHeroes) {
      const response = await fetch(BASE_URL);
      if (!response.ok) throw new Error('Failed to fetch heroes');
      cachedHeroes = await response.json();
    }

    const hero = cachedHeroes.find(h => h.id === id);

    return hero || {
      id,
      name: 'Unknown Hero',
      url: '', // fallback image URL or leave blank
      powerstats: {},
      appearance: {},
      biography: {},
      work: {},
      connections: {},
    };
  } catch (error) {
    console.error('API error:', error);
    return {
      id,
      name: 'Error Hero',
      url: '',
      powerstats: {},
      appearance: {},
      biography: {},
      work: {},
      connections: {},
    };
  }
}