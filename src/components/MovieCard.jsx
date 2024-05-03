import React from "react";
import { Link } from "react-router-dom";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

const MovieCard = React.memo(({ movie }) => {
  const renderStars = (rating) => {
    let stars = [];
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else if (i === fullStars + 1 && halfStar) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-gray-400" />);
      }
    }
    return stars;
  };

  const avgRating = (reviews) => {
    if (!reviews || reviews.length === 0) return 0;
    const total = reviews.reduce((acc, review) => acc + review.rating, 0);
    return total / reviews.length;
  };

  return (
    <div>
      <Link to={`/movieDetails/${movie.id}`}>
        <div className="border-gray-900 border-2 flex h-96 flex-col items-center cursor-pointer rounded-md p-1 hover:scale-105 duration-150 pb-5 hover:border-2 hover:border-[#2f7575]">
          <img src={movie.poster} className="h-64 w-full" />
          <h1 className="text-center font-bold text-2xl mt-2 text-gray-200">
            {movie.title}
          </h1>
          <div className="flex gap-1 mt-2 text-lg">
            {renderStars(avgRating(movie.reviews))}
          </div>
        </div>
      </Link>
    </div>
  );
});

export default MovieCard;
