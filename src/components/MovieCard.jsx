import React from "react";
import { useMovies } from "../Context/MovieContext";

function MovieCard() {
  const { movies } = useMovies();
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 mt-4">
      {movies.map((movie, index) => (
        <div
          key={index}
          className="border-gray-900 border-2 cursor-pointer rounded-md p-1 hover:scale-105 duration-150 pb-5 hover:border-2 hover:border-[#2f7575]"
        >
          <img src={movie.poster} className="h-64 w-full" />
          <h1 className="text-center font-bold text-2xl mt-2 text-gray-200">
            {movie.title}
          </h1>
        </div>
      ))}
    </div>
  );
}

export default MovieCard;
