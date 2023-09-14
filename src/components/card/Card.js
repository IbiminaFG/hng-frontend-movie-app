import { Link } from "react-router-dom";
import React from "react";
import imdb from "../../assets/imdb.svg";
import favorite from "../../assets/Favorite.svg";

const Card = ({ movie }) => {
  const vote = Math.floor(movie.vote_average * 10);

  return (
    <div
      className="w-full hover:scale-110 transition-transform duration-100 ease-in-out"
      data-testid="movie-card"
    >
      <div className="w-full relative">
        <Link to={`/movies/${movie.id}`}>
          <img
            className="w-full"
            src={`https://image.tmdb.org/t/p/original${
              movie && movie.poster_path
            }`}
            alt={movie && movie.title}
            data-testid="movie-poster"
          />
        </Link>
        <img
          src={favorite}
          className="absolute top-3 right-3 cursor-pointer hover:scale-110 transition-transform duration-100 ease-in-out"
          alt="favorite icon"
        />
      </div>
      <p
        className="text-xs text-gray-400 pt-1"
        data-testid="movie-release-date"
      >
        {movie && movie.release_date}
      </p>
      <Link className="text-sm font-bold pt-1" data-testid="movie-title">
        {movie && movie.title}
      </Link>
      <div className="icon_flex">
        <div>
          <img src={imdb} alt="imbd logo" />
          <p>{vote}/100</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
