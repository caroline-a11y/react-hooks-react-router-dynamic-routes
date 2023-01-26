import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import MoviesList from "./MoviesList";
import MovieShow from "./MovieShow"

function MoviesPage({ movies }) {
  const match =useRouteMatch();
  
  return (
    <div>
      <MoviesList movies={movies} />
      <Route>
        <MoviesShow />
      <Route path={`${match.url}/:movieId`}>
        <MoviesShow movies={movies} />
      </Route>
    </div>
  )};
}
export default MoviesPage
