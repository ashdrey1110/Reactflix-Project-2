import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import StarRating from './rating'; // Ensure this component exists
import './App.css';

function Details() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [show, setShow] = useState(null);
  const [favorites, setFavorites] = useState([]);

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
  }, [id]);

  if (!show) return <p>Loading...</p>;

  // Add to Favorites function
  const handleAddToFavorites = () => {
    const updatedFavorites = [...favorites, show];
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    alert(`${show.name} has been added to favorites!`);
  };

  // Navigate to a random show
  const handleRandomShow = () => {
    const randomId = Math.floor(Math.random() * 83000);
    navigate(`/details/${randomId}`);
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

        {/* Add to Favorites and Random Show Buttons */}
        <div className="button-container">
          <button className="favorite-btn" onClick={handleAddToFavorites}>Add to Favorites</button>
        </div>

        <p><strong>Language:</strong> {show.language}</p>
        <p><strong>Genres:</strong> {show.genres?.join(', ') || 'N/A'}</p>
        <p><strong>Premiered:</strong> {show.premiered}</p>
        <p><strong>Status:</strong> {show.status}</p>
        <p><strong>Rating:</strong> {show.rating?.average || 'N/A'}</p>
        <p><strong>Summary:</strong> {show.summary.replace(/<\/?[^>]+(>|$)/g, "")}</p>

        {/* Star Rating Component */}
        <div className="user-rating">
          <h3>Rate this show:</h3>
          <StarRating />
        </div>
      </div>
    </div>
  );
}

export default Details;
