import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect (() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
}, []);
 
return (
    <>
    <div className="favorites-header">Favorite Shows</div>
    <div className="favorites-container">
      {favorites.length > 0 ? (
        <div className="favorites-list">
          {favorites.map((show) => (
            <div key={show.id} className="favorites-item">
              <Link to={`/details/${show.id}/favorited${show.id}`}>
                <img src={show.image?.medium || 'placeholder.jpg'} alt={show.name} className="individ-show-img"/>
              </Link>
              <div className="show-name">{show.name}</div>
            </div>
          ))}
        </div> 
      ) : (
        <p>You dont seem to have any favorites yet... Try adding some!</p>
        )}
    </div>
    </>
    );
}