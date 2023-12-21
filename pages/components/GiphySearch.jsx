// components/GiphySearch.js
import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './GiphySearch.module.css'; // Import your CSS module

const GiphySearch = () => {
  const [query, setQuery] = useState('');
  const [gifs, setGifs] = useState([]);
  const [showTrendingMessage, setShowTrendingMessage] = useState(true);
  const [favorites, setFavorites] = useState(new Set());

  useEffect(() => {
    const fetchTrendingGifs = async () => {
      try {
        const trendingResponse = await axios.get('https://api.giphy.com/v1/gifs/trending', {
          params: {
            api_key: 'v5uGneVYRi2tFU8W7ZMEUfbH8efZ9tTx',
          },
        });
        setGifs(trendingResponse.data.data);
        setShowTrendingMessage(true);
      } catch (error) {
        console.error('Giphy API Error', error.message);
      }
    };

    const fetchData = async () => {
      if (query.trim() === '') {
        // If the query is empty, fetch trending GIFs
        await fetchTrendingGifs();
        return;
      }

      try {
        const response = await axios.get('https://api.giphy.com/v1/gifs/search', {
          params: {
            q: query,
            api_key: 'v5uGneVYRi2tFU8W7ZMEUfbH8efZ9tTx',
          },
        });
        setGifs(response.data.data);
        setShowTrendingMessage(false);
      } catch (error) {
        console.error('Giphy API Error', error.message);
      }
    };

    fetchData();
  }, [query]);

  const toggleFavorite = (id) => {
    setFavorites((prevFavorites) => {
      const newFavorites = new Set(prevFavorites);
      if (newFavorites.has(id)) {
        newFavorites.delete(id);
      } else {
        newFavorites.add(id);
      }
      return newFavorites;
    });
  };

  // check to avoid useEffect on the server side
  if (typeof window !== 'undefined') {
    useEffect(() => {
      // Additional client-side effects can go here
    }, [query, favorites]); // Added query and favorites as dependencies
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title} style={{ color: '#FF4081', backgroundColor: '#F3E5F5' }}>
        GIPHY
      </h1>
      <p className={styles.subtitle}>by YOGRAJ TRIPATHI</p>
      {showTrendingMessage && (
        <p className={styles.message}>You are currently viewing trending GIFs.</p>
      )}
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search GIFs"
          onChange={(e) => setQuery(e.target.value)}
          className={styles.searchInput}
        />
      </div>
      <div className={styles.gifContainer}>
        {gifs.map((gif) => (
          <div key={gif.id} className={styles.gifItem}>
            <img src={gif.images.fixed_height.url} alt={gif.title} />
            <button
              onClick={() => toggleFavorite(gif.id)}
              className={`${styles.favoriteButton} ${favorites.has(gif.id) ? styles.favorite : ''}`}
            >
              ❤️
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GiphySearch;