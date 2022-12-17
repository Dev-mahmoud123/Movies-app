import axios from "axios";
import React, { useState, useEffect, useCallback } from "react";
import { useParams , Link } from "react-router-dom";

function MovieDetails() {
  const param = useParams();

  const [movie, setMovie] = useState([]);

  const getMovieDetails = useCallback(async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${param.id}?api_key=b0d3631a60b6a0e15c08a794f144dda5&language=en-US`
    );
    setMovie(response.data);
  }, [param.id]);

  useEffect(() => {
    getMovieDetails();
  }, [getMovieDetails]);

  return (
    <div
      className="card m-2"
      style={{ backgroundColor: "rgb(0,0,0,.1)" }}
    >
      <div className="row w-100  m-1 d-flex ">
        <div className="col-lg-3 col-xs-12 col-md-12">
          <img
            className="card_img "
            src={`https://image.tmdb.org/t/p/w500` + movie.poster_path}
            alt="movie_image"
            style={{ height: "400px", borderRadius: "8px", width: "300px" }}
          />
        </div>
        <div className="col-lg-6 col-xs-12 col-md-12 my-auto">
          <p>Name: {movie.title}</p>
          <p>Publish Date: {movie.release_date}</p>
          <p>Rate: {movie.vote_average}</p>
          <p>vote count: {movie.vote_count}</p>
          <p>Runtime: {movie.runtime}min</p>
        </div>
      </div>
      <div className="row w-100 m-2">
        <div className="card-story text-start">
          <div className="story">
            <p className="fw-bold fs-4">Story:</p>
          </div>
          <div className="story-details ms-1 ">
            <p className="fs-6">{movie.overview}</p>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center m-2">
        <Link to={"/"}>
            <button className="btn btn-outline-primary  me-2 ">
              Back to Home
            </button>
        </Link>
        <a href={movie.homepage}>
            <button className="btn btn-outline-danger  ">
              Watch Film
            </button>
        </a>
      </div>
    </div>
  );
}

export default MovieDetails;
