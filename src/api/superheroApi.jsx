const BASE_URL = `https://superheroapi.com/api/${import.meta.env.VITE_SUPERHERO_TOKEN}`;

export async function fetchHeroById(id) {
  try {
    const response = await fetch(`${BASE_URL}/${id}`);
    if (!response.ok) throw new Error('Failed to fetch hero');
    return await response.json();
  } catch (error) {
    console.error('API error:', error);
    return null;
  }
}