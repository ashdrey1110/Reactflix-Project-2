import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import StarRating from './rating';
import useFontSize from './FontSize.jsx';
import Button from '@mui/material/Button';
import './App.css';

function Details() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [show, setShow] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const { fontSize, largerFont, defaultFont }= useFontSize();

  useEffect(() => {
    const fetchShowDetails = async () => {
      try {
        const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
        const data = await response.json();
        setShow(data);
      } catch (error) {
        console.error('Error fetching show details:', error);
      }
    };

    fetchShowDetails();
    
    // Load favorites from localStorage
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, [id]);

  if (!show) return <p>Loading...</p>;

  // Check if the show is already in favorites
  const isFavorite = favorites.some(fav => fav.id === show.id);

  // Toggle favorite function
  const handleToggleFavorite = () => {
    let updatedFavorites;

    if (isFavorite) {
      // Remove from favorites
      updatedFavorites = favorites.filter(fav => fav.id !== show.id);
    } else {
      // Add to favorites
      updatedFavorites = [...favorites, show];
    }

    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div className="detail-container">
      {/* Left side: Show Image */}
      <div className="detail-image">
        {show.image ? (
          <img src={show.image.original} alt={show.name} />
        ) : (
          <p>No Image Available</p>
        )}
      </div>

      {/* Right side: Show Details */}
      <div className="detail-info">
        <h1>{show.name}</h1>

        {/* Add/Remove Favorites Button */}
        <div className="button-container">
          <button 
            className={`favorite-btn ${isFavorite ? 'active' : ''}`} 
            onClick={handleToggleFavorite}
          >
            {isFavorite ? '💔 Remove from Favorites' : '❤️ Add to Favorites'}
          </button>
        </div>

        <div className='details-description' style={{ fontSize: `${fontSize}px` }}>
          <p><strong>Summary:</strong> {show.summary.replace(/<\/?[^>]+(>|$)/g, "")}</p>
          <p><strong>Language:</strong> {show.language}</p>
          <p><strong>Genres:</strong> {show.genres?.join(', ') || 'N/A'}</p>
          <p><strong>Premiered:</strong> {show.premiered}</p>
          <p><strong>Status:</strong> {show.status}</p>
          <p><strong>Rating:</strong> {show.rating?.average || 'N/A'}</p>
        </div>

        {/* Star Rating Component */}
        <div className="user-rating">
          <h3>Rate this show:</h3>
          <StarRating />
        </div>

        {/* Font Size Adjust Buttons */}
        <div className='text-sizing-btns'> 
          <div className='adjust-sizing-label'>Adjust Size</div>
          <Button variant="outlined" onClick={largerFont}>Larger</Button>
          <Button variant="outlined" onClick={defaultFont}>Default</Button>
        </div>
      </div>
    </div>
  );
}

export default Details;
