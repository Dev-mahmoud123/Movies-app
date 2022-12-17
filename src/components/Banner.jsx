import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <div className="banner  text-white">
      <div className="container">
        <h5>Movflx</h5>
        <h2>
          Unlimited <span>Movie</span>,<br /> TVs Shows, & More.
        </h2>
        <div className="info">
          <p>PG 1B</p>
          <p>HD</p>
          <p>
            <span>Romance,</span> <span>Drama</span>
          </p>
          <p><i className="fa-regular fa-calendar-days"></i> 2022</p>
          <p> <i className="fa-regular fa-clock "></i> 128 min</p>
        </div>
        <button><i className="fa-solid fa-play me-1"></i> Watch Now</button>
      </div>
    </div>
  );
}

export default Banner;
