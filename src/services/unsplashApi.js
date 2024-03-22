const API_KEY = 'RvngCk-XXSUxNg50zvu4-sLAxwl4xkgnwwwuM29PbZ8';

export async function fetchImages(query) {
  const response = await fetch(
    `https://api.unsplash.com/search/photos?query=${query}&client_id=${API_KEY}`
  );
  if (!response.ok) {
    throw new Error('Failed to fetch images');
  }
  const data = await response.json();
  return data;
}