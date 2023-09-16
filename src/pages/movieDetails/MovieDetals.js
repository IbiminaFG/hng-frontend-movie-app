import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import movieLogo from "../../assets/tv.png";
import imdb from "../../assets/imdb.svg";

const MovieDetals = () => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const tmdbApiKey = process.env.TMDB_API_KEY;

  // Fetch movie details by id or load them from a context/state
  useEffect(() => {
    // Fetch movie details when the component mounts
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=6a20bf09977b484c238bf2c43b5f4e63&language=en-US`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setMovie(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching movie details:", error);
        setLoading(false);
      });
  }, [id, movie, tmdbApiKey]);

  if (loading) {
    return <Loading />;
  }

  if (!movie) {
    return <div>Movie not found</div>;
  }

  const utcReleaseDate = new Date(movie.release_date).toUTCString();

  return (
    <section
      className="h-screen w-screen"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Link
        to="/"
        className="flex items-center gap-2 px-4 lg:px-[70px] py-3 bg-white"
      >
        <img src={movieLogo} alt="movie logo" />
        <h2 className="font-bold">Movie Box</h2>
      </Link>
      <div className="flex items-center h-[550px] px-4 lg:px-[70px] gap-10 bg-gray-400">
        <div className="max-w-[270px] rounded-xl overflow-hidden hover:scale-110 transition-transform duration-100 ease-in-out">
          <img
            className="w-full"
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt="movie poster"
          />
        </div>
        <div className="text-white">
          <h1 className="text-5xl font-bold" data-testid="movie-title">
            {movie.title}
          </h1>
          <div className="flex items-center my-4 gap-3">
            <img src={imdb} alt="imdb logo" />
            <p data-testid="movie-release-date">{utcReleaseDate}.</p>
            <p data-testid="movie-runtime">{movie.runtime} mins</p>
          </div>
          <h2 className="text-xl font-bold">Overview</h2>
          <p data-testid="movie-runtime">{movie.overview}</p>
        </div>
      </div>
    </section>
  );
};

export default MovieDetals;
