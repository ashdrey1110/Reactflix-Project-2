import Trending from './Trending.jsx';
import Favorites from './Favorites.jsx';
import localStorage from './Details.jsx'

export default function Home({ mockData, realData }) {
    return (
        <>
        <Trending mockData={mockData} realData={realData} />
        <Favorites />
        </>
    );
}
