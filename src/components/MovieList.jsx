import React from "react";
import Card from "./Card";
import Pagination from "./pagination";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovie } from "../redux/actions/movieActions";

const MovieList = () => {

  const [movies, setMovies] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMovie());
  }, [dispatch]);

  const movieData = useSelector((state) => state.movies);

  useEffect(() => {
    setMovies(movieData);
  }, [movieData]);

  return (
    <div className="row mt-3">
      {movies.length >= 1 ? (
        movies.map((movie) => {
          return <Card key={movie.id} movie={movie} />;
        })
      ) : (
        <h1 className="text-white text-center">There Is No Movies</h1>
      )}
      {movies.length >= 1 ? (
        <Pagination  />
      ) : null}
    </div>
  );
};

export default MovieList;
