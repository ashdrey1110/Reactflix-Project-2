import Trending from './Trending.jsx';
import Favorites from './Favorites.jsx';

export default function Home({ mockData, realData }) {
    return (
        <>
        <h2>Home Page</h2>
        <Trending mockData={mockData} realData={realData} />
        <Favorites />
        </>
    );
}
