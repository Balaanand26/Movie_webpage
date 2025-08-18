import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";


const Home = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    let url = `https://api.themoviedb.org/3/movie/popular?page=${page}&api_key=c92299673508f95ae5e979fe7a194ac8`;

    if (search) {
      url = `https://api.themoviedb.org/3/search/movie?query=${search}&page=${page}&api_key=c92299673508f95ae5e979fe7a194ac8`;
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => setMovies(data.results));
  }, [page, search]);

  return (
    <div className="p-4 pt-16">
      <input
        type="text"
        placeholder="Search Movies..."
        className="p-2 w-3/4 md:w-1/2 border rounded border-gray-700 bg-gray-900 bg-opacity-60 backdrop-blur-md text-white fixed top-16 left-1/2 transform -translate-x-1/2 z-10"
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="movies-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-16">
        {movies.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />;
        })}
      </div>
      <div className="pagination-container flex justify-between mt-8">
        <button
          disabled={page === 1}
          className="bg-gray-800 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-700 transition duration-300"
          onClick={() => {
            setPage((prev) => Math.max(prev - 1, 1));}}
        >
          Previous
        </button>

        <button
          className="bg-gray-800 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-700 transition duration-300"
          onClick={() => setPage((prev) => prev + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;
