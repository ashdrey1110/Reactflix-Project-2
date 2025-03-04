import { useState, useEffect, useContext } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import  Home  from './Home.jsx'
import  Details  from './Details.jsx'
import './App.css'

function App() {
  //an array of trending shows to be presented
  const [trendingList, setTrendingList] = useState([]);

  //an array of favorite shows to be presented -- might be put in diff file/location
  //consider interaction with searching for a show and then adding it to faves
  const [favoritesList, setFavoritesList] = useState([]);

  // object of details on one specific show
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
  // let trendingIds = [169];
  const trendingShows = [];

  useEffect(() => {
    const trendingIds = [169, 43031, 44933, 43687, 51394];
    trendingIds.forEach((trendingID) => {
      fetch(`https://api.tvmaze.com/shows/${trendingID}`)
      .then(res => res.json())
      .then(data => trendingShows.push(data))
    })
    setTrendingList(trendingShows);
    //uncomment below to see this work!
    //console.log(trendingList[3]);
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
      <Route path='/' element={<Home trendingProp={trendingList} favoritesProp={favoritesList} />}/>
      <Route path='/details/:id' element={<Details showDetails={details} />}/>
    </Routes>
    </>
  )

}

export default App
