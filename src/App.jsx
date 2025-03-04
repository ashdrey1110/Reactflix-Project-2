import { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home.jsx';
import Favorites from './Favorites.jsx';
import Details from './Details.jsx';
import Search from './Search.jsx';
import Random from './Random.jsx';
import mockData from './mockTrending.js'; 
import './App.css';

function App() {
  const [realData, setRealData] = useState([]); 

  useEffect(() => {
    const trendingIds = [169, 43031, 44933, 43687, 51394];

    Promise.all(
      trendingIds.map((id) =>
        fetch(`https://api.tvmaze.com/shows/${id}`).then((res) => res.json())
      )
    )
    .then((results) => setRealData(results))
    .catch((error) => console.error("Error fetching API data:", error));
  }, []);

  return (
    <div className="main">
      
      <div className='nav'>
        <div className="title-logo"><img src='/images/REACTFLIX-LOGO.png' alt='react-logo' className='reactflix-logo' /></div>
        <div className="nav-options"> 
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
        <Link to="/search">Search</Link>
        
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home mockData={mockData} realData={realData} />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/details/:id/:name" element={<Details />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      <div className="random-btn">
        <Random />
      </div>
    </div>
  );
}

export default App;
