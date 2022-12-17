import React from "react";
import "./card.css";
import { Link } from "react-router-dom";

const Card = ({ movie }) => {
  return (
    <div className="col-xs-6 col-sm-6  col-md-4 col-lg-3 my-1">
      <Link to={`/movie/${movie.id}`}>
        <div className="card " style={{ height: "400px" }}>
          <img
            src={`https://image.tmdb.org/t/p/w500` + movie.poster_path}
            className="card__image rounded h-100"
            alt="poster"
          />
          <div className="card-img-overlay p-0">
            <div
              className="overlay__text text-center w-100  text-white h-100 rounded p-2 "
              style={{ backgroundColor: "rgb(0 ,0, 0, .5)" }}
            >
              <p>Name: {movie.name}</p>
              <p>Publish Date: {movie.first_air_date}</p>
              <p>Vote Count: {movie.vote_count}</p>
              <p>rating: {movie.vote_average}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
