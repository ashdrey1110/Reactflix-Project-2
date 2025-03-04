import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Search(){
    const [inputId, setInputId] = useState('');

    const handleInputChange = (event) => {
        setInputId(event.target.value);
      };

    return (
        <>
        <div className="search-header">Search</div>
        <div className="search-description">Try searching for a show by entering an ID number</div>
        <div className="search-input">
            <input name="searchInput" className='text-input' value={inputId} onChange={handleInputChange}/> 
            <Link to={`/details/${inputId}/searched${inputId}}`}>
                <button className='search-btn'>Search</button>    
            </Link>      
        </div>
        </>
    )
}