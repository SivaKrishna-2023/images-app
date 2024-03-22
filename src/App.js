import React, { useState } from 'react';
import './App.css'; 
import SearchBar from './components/SearchBar';
import ImageGrid from './components/ImageGrid';
import LoadingIndicator from './components/LoadingIndicator';
import { fetchImages } from './services/unsplashApi'; // Import your API fetching function

function App() {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const data = await fetchImages(query);
      setImages(data.results);
    } catch (error) {
      console.error('Error fetching images:', error);
      // Handle error, maybe show an error message to the user
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <SearchBar query={query} setQuery={setQuery} onSearch={handleSearch} />
      {loading ? (
        <LoadingIndicator />
      ) : (
        <ImageGrid images={images} />
      )}
    </div>
  );
}

export default App;