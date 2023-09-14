import Card from "../card/Card";
import Loading from "../Loading";

const MovieList = ({ topRated, loading, searchResult, errorMessage }) => {
  const sortedArray = topRated
    ? topRated.sort((a, b) => b.vote_count - a.vote_count)
    : [];
  const topTenMovies = sortedArray.slice(0, 10);
  const movieList = topTenMovies.map((movie) => (
    <div key={movie.id}>
      <Card movie={movie} />
    </div>
  ));

  const searchedMovies = searchResult.map((movie) => (
    <div key={movie.id}>
      <Card movie={movie} />
    </div>
  ));

  return (
    <main>
      <div className="p-[30px] md:p-[30px] lg:p-[70px]">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            {searchResult.length > 0 ? "Your Search" : "Top 10 Rated"}
          </h1>
          <a href="http://" className="text-xs text-red-400">
            See more
          </a>
        </div>
        {loading ? (
          <Loading />
        ) : errorMessage ? (
          <div className="text-xl text-red-600">{errorMessage}</div>
        ) : (
          <section className="pt-[20px] lg:pt-[50px] grid md:grid-cols-4 sm:grid-cols-2 gap-x-[40px] gap-y-[70px]">
            {searchedMovies.length > 0 ? searchedMovies : movieList}
          </section>
        )}
      </div>
    </main>
  );
};

export default MovieList;
