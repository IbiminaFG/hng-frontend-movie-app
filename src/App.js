import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import MovieDetals from "./pages/movieDetails/MovieDetals";

function App() {
  const [topRated, setTopRated] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const tmdbApiKey = process.env.REACT_APP_TMDB_API_KEY;

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=6a20bf09977b484c238bf2c43b5f4e63&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((data) => setTopRated(data.results))
      .catch((error) => {
        console.error("Error fetching top-rated movies:", error);
      });
  }, [tmdbApiKey]);

  const handleSearch = async () => {
    setLoading(true);
    setErrorMessage(null);
    try {
      fetch(
        `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&api_key=6a20bf09977b484c238bf2c43b5f4e63`
      )
        .then((res) => res.json())
        .then((data) => setSearchResult(data.results));
      console.log(searchResult);
    } catch (error) {
      console.error("Error searching movies:", error);
    }
    setTimeout(() => {
      setLoading(false);
      setErrorMessage(
        "An error occured while fetching results. Please try again."
      );
    }, 2000);
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            index
            element={
              <Home
                topRated={topRated}
                handleSearch={handleSearch}
                searchResult={searchResult}
                setSearchResult={setSearchResult}
                setSearchQuery={setSearchQuery}
                loading={loading}
                error={errorMessage}
              />
            }
          />
          <Route path="/movies/:id" element={<MovieDetals />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
