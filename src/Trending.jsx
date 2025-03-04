import { Link } from 'react-router-dom';

export default function Trending({ mockData = [], realData = [] }) {
    // Ensure that we always have an array, even if data is undefined
    const dataToShow = realData.length > 0 ? realData : mockData;

    return (
        <>
        <h2>Trending Shows</h2>
        <div className="trending-shows">
        {dataToShow.map((show) => (
            <div key={show.id}>
                <h3>{show.name}</h3>
                <Link to={`/details/${show.id}/${encodeURIComponent(show.name)}`}>
                    <img src={show.image?.medium} alt={show.name} width="150"/>
                </Link>
            </div>
        ))}
        </div>
        </> 
    );
}
