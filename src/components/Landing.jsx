import React from "react";
import Banner from "./Banner";
import NavBar from "./NavBar";
import "./Landing.css";

function Landing() {
  return (
    <div className="landing">
      <NavBar />
      <Banner />
    </div>
  );
}

export default Landing;
