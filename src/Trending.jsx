export default function Trending({ trendingProp }){
    return (
        <>
        <h2>Trending Shows</h2>
        <div> {trendingProp[0].name} </div>
        {/* <div className="trending-shows">
        {trending.map(show =>(
            <div key={show.id}>
                <h2>{show.name}</h2>
            </div>
        ))} 
         <div>{trending.id}</div>
        </div> */}
        </> 
    )
}