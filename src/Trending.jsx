import { Link } from 'react-router-dom';

export default function Trending({ mockData = [], realData = [] }) {
    // Ensure that we always have an array, even if data is undefined
    const dataToShow = realData.length > 0 ? realData : mockData;

    return (
        <>
        <div className="trending-header">Trending Shows</div>
        <div className="trending-shows">
        {dataToShow.map((show) => (
            <div key={show.id}>
                <Link to={`/details/${show.id}/${encodeURIComponent(show.name)}`}>
                    <img src={show.image?.medium} alt={show.name} className="individ-show-img"/>
                </Link>
                <div className="show-name">{show.name}</div>
            </div>
        ))}
        </div>
        </> 
    );
}
