import React from "react";
import "./home.css";
import Header from "../../components/header/Header";
import Showcase from "../../components/showcase/Showcase";
import MovieList from "../../components/movieList/MovieList";
import Footer from "../../components/footer/Footer";

const Home = ({
  topRated,
  handleSearch,
  searchResult,
  setSearchResult,
  setSearchQuery,
  loading,
  errorMessage,
}) => {
  return (
    <div>
      <section id="showcase">
        <Header
          handleSearch={handleSearch}
          searchResult={searchResult}
          setSearchResult={setSearchResult}
          setSearchQuery={setSearchQuery}
        />
        <Showcase />
      </section>
      <MovieList
        topRated={topRated}
        loading={loading}
        searchResult={searchResult}
        errorMessage={errorMessage}
      />
      <Footer />
    </div>
  );
};

export default Home;
