import { useState, useEffect, useContext } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import  Home  from './Home.jsx'
import './App.css'

function App() {
  const [data, setData] = useState([]);
  const [details, setDetails] = useState({
    title: '',
    id: '',
    imageMedium: '',
    imageOriginal: '',
    summary: '',
    rating: '',
    officialSite: '',
    premiereDate: '',
    endDate: '',
    country: '',
    genre: [], 
    language: ''
  })



// Trending: White Lotus 51394, Squid Game 43687, Severance 44933, Reacher 43031, Breaking Bad 169
  //let trendingIds = [169, 43031, 44933, 43687, 51394];
  let trendingIds = [169];
  const trendingShows = [];

  useEffect(() => {
    trendingIds.forEach((trendingID) => {
      fetch(`https://api.tvmaze.com/shows/${trendingID}`)
      .then(res => res.json())
      .then(data => setData(data))
    })
  }, [])


  return (
    <>
    <div className='nav'>
      <h1>Reactflix</h1>
      <div>Home</div>
      <div>Favorites</div>
      <div>Search</div>
    </div>

    
    <Routes>
      <Route path='/' element={<Home />}/>
    </Routes>
    </>
  )

}

export default App
