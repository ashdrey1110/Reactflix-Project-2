import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

export default function Search(){
    // const [inputId, setInputId] = useState('');
    const [inputText, setInputText] = useState('');
    const [results, setResults] = useState([]);

    // const inputBox = (event) => {
    //     setInputId(event.target.value);
    //   };

    const inputTextBox = (event) => {
        setInputText(event.target.value);
    };

    const getSearchResults = async () => {
    const res = await fetch(`https://api.tvmaze.com/search/shows?q=${inputText}`);
    const shows = await res.json();
    setResults(shows);
    }

    return (
        <>
        <div className="search-header">Search</div>
        {/* <div className="search-description">Try searching for a show by entering an ID number</div> */}
        <div className="search-input">
            {/* <input name="searchInput" className='text-input' value={inputId} onChange={inputBox}/> 
            <Link to={`/details/${inputId}/searched${inputId}}`}>
                <button className='search-btn'>Search</button>    
            </Link> */}

            <input name="searchInputText" className='text-input' value={inputText} onChange={inputTextBox}/> 
            <button className='text-search-btn' onClick={getSearchResults}>Search</button>    
            <div className="search-results">
            {results.map((show) => (
                <div key={show.show.id} className="searched-show">
                    <Link to={`/details/${show.show.id}/${encodeURIComponent(show.show.name)}`}>
                        <img src={show.show.image?.medium} alt={show.show.name} className="searched-show-img"/>
                    </Link>
                <div className="show-name">{show.show.name}</div>
            </div>
        ))}
        </div>
        </div>
        </>
    )
}