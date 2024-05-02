import React, { useEffect, useState } from "react";
import bgImg from "../assets/banners/oppen.jpeg";
import { FaStar } from "react-icons/fa6";
import Button from "../components/Button";
import { FaPlay, FaRupeeSign } from "react-icons/fa";
import MovieCard from "../components/MovieCard";
import { useMovies } from "../Context/MovieContext";

function UserHome() {
  const { movies } = useMovies();
  const [filtermovies, setFilterMovies] = useState([]);

  const avgRating = (reviews) => {
    if (!reviews.length) return 0;
    const totalRating = reviews.reduce((acc, review) => acc + review.rating, 0);
    return reviews.length > 0 ? totalRating / reviews.length : 0;
  };
  useEffect(() => {
    const ratedMovies = movies.map((movie) => ({
      ...movie,
      avgRating: avgRating(movie.reviews),
    }));
    setFilterMovies(ratedMovies);
  }, [movies]);
  const handleFilter = (ratingCondition) => {
    setFilterMovies(
      movies.filter((movie) => ratingCondition(avgRating(movie.reviews)))
    );
  };

  const stars = Array(5)
    .fill(0)
    .map((_, index) => <FaStar key={index} className="text-yellow-400" />);
  return (
    <div className="flex flex-col">
      <div className="w-full common flex flex-col items-center justify-center">
        <img
          src={bgImg}
          alt=""
          className="h-5/6 w-5/6 rounded-xl relative bg-cover pt-7"
        />
        <div className="absolute w-1/2 md:w-1/3 top-28 md:top-44 left-30 md:left-44 flex flex-col gap-3">
          <div className="flex gap-1">{stars}</div>
          <h1 className="font-bold text-4xl">OPPENHEIMER</h1>
          <h4 className="font-semibold text-gray-500">
            Released on 21 July 2023
          </h4>
          <p className="sm:mt-10 font-semibold sm:leading-7">
            During World War II, Lt. Gen. Leslie Groves Jr. appoints physicist
            J. Robert Oppenheimer to work on the top-secret Manhattan Project.
            Oppenheimer and a team of scientists spend years developing and
            designing the atomic bomb. Their work comes to fruition on July 16,
            1945, as they witness the world's first nuclear explosion, forever
            changing the course of history.
          </p>
          <div className="flex gap-4 mt-8 sm:mt-16 md:mt-12">
            <a
              href="https://www.youtube.com/watch?v=uYPbbksJxIg"
              className="w-full"
            >
              <Button className="w-full flex items-center justify-center gap-2 bg-gray-900 hover:bg-transparent hover:text-[#306161] hover:border-[#004c4c] hover:border-2 duration-150">
                <FaPlay /> <span>Trailer</span>
              </Button>
            </a>
            <Button className="w-full flex items-center justify-center gap-2 bg-gray-900 hover:bg-transparent hover:text-[#306161] hover:border-[#004c4c] hover:border-2 duration-150">
              <FaRupeeSign /> <span>Buy</span>
            </Button>
          </div>
        </div>
      </div>
      <div className="md:px-20 pb-40 px-6 sm:px-10 flex flex-col gap-5">
        <h2 className="font-bold text-3xl">Trending Shows</h2>
        <div className="flex items-center gap-7 mt-4">
          <Button
            onClick={() => handleFilter((rating) => rating === 5)}
            className="filter-button"
          >
            <span>5</span>
            <FaStar />
          </Button>
          <Button
            onClick={() => handleFilter((rating) => rating > 3)}
            className="filter-button"
          >
            <span>Above 3</span>
            <FaStar />
          </Button>
          <Button
            onClick={() => handleFilter((rating) => rating < 3)}
            className="filter-button"
          >
            <span>Below 3</span>
            <FaStar />
          </Button>
        </div>
        <div className="grid grid-cols-1 px-20 sm:px-12 md:px-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-4">
          {filtermovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserHome;
