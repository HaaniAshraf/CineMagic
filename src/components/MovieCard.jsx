import React from "react";
import { useMovies } from "../Context/MovieContext";
import { Link } from "react-router-dom";

function MovieCard() {
  const { movies } = useMovies();
  return (
    <div className="grid grid-cols-1 px-20 sm:px-12 md:px-0 sm:grid-cols-2 md:grid-cols-5 gap-8 mt-4">
      {movies.map((movie, index) => (
        <Link to={`/movieDetails/${movie.id}`}>
          <div
            key={index}
            className="border-gray-900 border-2 flex h-96 flex-col items-center cursor-pointer rounded-md p-1 hover:scale-105 duration-150 pb-5 hover:border-2 hover:border-[#2f7575]"
          >
            <img src={movie.poster} className="h-64 w-full" />
            <h1 className="text-center font-bold text-2xl mt-2 text-gray-200">
              {movie.title}
            </h1>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default MovieCard;
