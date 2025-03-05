import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Random() {
  // const navigate = useNavigate();

  // const handleRandomShow = async () => {
  //   const pageResponse = await fetch('https://api.tvmaze.com/shows?page=1');
  //   const shows = await pageResponse.json();

  //   const randomIndex = Math.floor(Math.random() * shows.length);
  //   const randomSelectedShow = shows[randomIndex];

  //   navigate(`/details/${randomSelectedShow.id}/${encodeURIComponent(randomSelectedShow.name)}`);
  // };

  let randomId = Math.floor(Math.random() * 83000);

  return (
    <>
      <Link to={`/details/${randomId}/randomid${randomId}}`}>
          <button className='random-btn'>Click me!</button>    
      </Link> 
    </>
  );
}

export default Random;