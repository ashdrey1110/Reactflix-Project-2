import React from 'react';
import { useNavigate } from 'react-router-dom';

function Random() {
  const navigate = useNavigate();

  const handleRandomShow = async () => {
    const pageResponse = await fetch('https://api.tvmaze.com/shows?page=1');
    const shows = await pageResponse.json();

    const randomIndex = Math.floor(Math.random() * shows.length);
    const randomSelectedShow = shows[randomIndex];

    navigate(`/details/${randomSelectedShow.id}/${encodeURIComponent(randomSelectedShow.name)}`);
  };

  return (
    <button onClick={handleRandomShow} className="nav-link">Pick4Me</button>
  );
}

export default Random;