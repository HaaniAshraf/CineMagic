import React from "react";
import { useMovies } from "../Context/MovieContext";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

function MovieCard() {
  const { movies } = useMovies();
  const renderStars = (rating) => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else if (i - rating < 1) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-gray-600" />);
      }
    }
    return stars;
  };
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 mt-4">
      {movies.map((movie, index) => (
        <div
          key={index}
          className="border-gray-900 border-2 flex flex-col items-center cursor-pointer rounded-md p-1 hover:scale-105 duration-150 pb-5 hover:border-2 hover:border-[#2f7575]"
        >
          <img src={movie.poster} className="h-64 w-full" />
          <h1 className="text-center font-bold text-2xl mt-2 text-gray-200">
            {movie.title}
          </h1>
          <div className="text-center mt-3 flex gap-1 text-xl">
            {renderStars(Math.round(movie.rating))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default MovieCard;
