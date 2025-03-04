import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Details() {
    const { id, name } = useParams();  // Get the show ID & Name from URL
    const [showDetails, setShowDetails] = useState(null);

    useEffect(() => {
        fetch(`https://api.tvmaze.com/shows/${id}`)
            .then((res) => res.json())
            .then((data) => setShowDetails(data));
    }, [id]);

    if (!showDetails) return <h2>Loading details...</h2>;

    return (
        <div>
            <h1>{showDetails.name}</h1>
            <img src={showDetails.image?.original} alt={showDetails.name} width="300"/>
            <p dangerouslySetInnerHTML={{ __html: showDetails.summary }}></p>
            <p><strong>Rating:</strong> {showDetails.rating?.average || 'N/A'}</p>
            <p><strong>Language:</strong> {showDetails.language}</p>
            <p><strong>Premiered:</strong> {showDetails.premiered}</p>
            <p><strong>Genres:</strong> {showDetails.genres?.join(', ') || 'N/A'}</p>
        </div>
    );
}
