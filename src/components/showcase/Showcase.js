import React from "react";
import "./Showcase.css";
import play from "../../assets/Play.svg";
import imdb from "../../assets/imdb.svg";
import tomato from "../../assets/tomato.svg";
import poster from "../../assets/Poster.png";

const Showcase = ({ randomMovie }) => {
  return (
    <div
      className="showcase_container p-[30px] max-[640px]:h-[300px] sm:h-[400px] md:p-[30px] md:h-[400px] lg:p-[70px] lg:h-[600px] flex items-center"
      style={{ backgroundImage: `url(${poster})` }}
    >
      <div className="showcase_details text-white flex flex-col items-start">
        <h1 className="max-[900px]:text-2xl lg:text-4xl">
          John Wick 3 : Parabellum
        </h1>
        <div className="icon_flex mb-[20px] max-[766px]:hidden">
          <div>
            <img src={imdb} alt="imbd logo" />
            <p>60/100</p>
          </div>
          <div>
            <img src={tomato} alt="rotten tomatoe logo logo" />
            <p>97%</p>
          </div>
        </div>
        <p className="showcase_description mb-[20px] max-[900px]:text-sm max-[766px]:hidden">
          John Wick is on the run after killing a member of the international
          assassins' guild, and with a $14 million price tag on his head, he is
          the target of hit men and women everywhere.
        </p>
        <button className="btn showcase_button">
          <img src={play} alt="play icon" />
          <h4>Watch Trailer</h4>
        </button>
      </div>
    </div>
  );
};

export default Showcase;
