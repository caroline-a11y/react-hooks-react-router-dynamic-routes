import React from "react"
import { useParams  } from "react-router-dom";

function MovieShow() {
function MovieShow({movies}) {
    const params = useParams()

    return (
        <div>
            <h1>Movie Show Component</h1>
            <h3>{movies[params.movieId].title}</h3>
        </div>
    )
}}
export default MovieShow