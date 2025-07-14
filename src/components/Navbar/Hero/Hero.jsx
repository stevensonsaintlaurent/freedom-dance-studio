import React from "react";
import "./Hero.css";
import dark_arrow from "../../../assets/dark-arrow.png";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>WELCOME TO OUR DANCE Academy</h1>

        <p>
          We support fresh concepts, welcome creative originality, and provide
          dancing performers with incredible opportunities.
        </p>

        <button className="btn">
          Explore more <img src={dark_arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
