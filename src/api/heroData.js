import axios from 'axios';

const API_URL = 'https://akabab.github.io/superhero-api/api/all.json';

export async function fetchHeroData() {
  try {
    const response = await axios.get(API_URL);
    return response.data; // Returns an array of hero objects
  } catch (error) {
    console.error('Error fetching hero data:', error);
    return []; // Fallback to empty array
  }
}