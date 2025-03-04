export default function Details({showDetails}){
    return (
        <>
        <h1>Details Page</h1>
        <div> {showDetails.title}: {showDetails.summary} </div>
        </>
    )
}