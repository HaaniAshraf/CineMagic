import React, { useEffect, useState, useMemo } from "react";
import bgImg from "../assets/banners/oppen.jpeg";
import { FaStar } from "react-icons/fa6";
import Button from "../components/Button";
import { FaPlay, FaRupeeSign } from "react-icons/fa";
import { VscDebugRestart } from "react-icons/vsc";
import MovieCard from "../components/MovieCard";
import { useMovies } from "../Context/MovieContext";

function UserHome() {
  const { movies } = useMovies();
  const [filtermovies, setFilterMovies] = useState([]);

  const avgRating = useMemo(
    () => (reviews) => {
      if (!reviews.length) return 0;
      const totalRating = reviews.reduce(
        (acc, review) => acc + review.rating,
        0
      );
      return reviews.length > 0 ? totalRating / reviews.length : 0;
    },
    []
  );
  useEffect(() => {
    const ratedMovies = movies.map((movie) => ({
      ...movie,
      avgRating: avgRating(movie.reviews),
    }));
    setFilterMovies(ratedMovies);
  }, [movies, avgRating]);

  const handleFilter = (ratingCondition) => {
    setFilterMovies(
      movies.filter((movie) => ratingCondition(avgRating(movie.reviews)))
    );
  };
  const handleReset = () => {
    setFilterMovies(movies);
  };

  const stars = Array(5)
    .fill(0)
    .map((_, index) => <FaStar key={index} className="text-yellow-400" />);
  return (
    <div className="flex flex-col gap-10 pt-28 xxs:px-5 md:px-8">
      <div
        className="flex items-center xxs:px-3"
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100vh",
        }}
      >
        <div className="flex flex-col gap-3 md:w-2/3 lg:w-1/2">
          <div className="flex gap-1">{stars}</div>
          <h1 className="font-bold xxs:text-base md:text-xl lg:text-4xl">OPPENHEIMER</h1>
          <h4 className="font-semibold text-gray-500">
            Released on 21 July 2023
          </h4>
          <p className="font-semibold xxs:text-sm md:text-base sm:leading-7">
            During World War II, Lt. Gen. Leslie Groves Jr. appoints physicist
            J. Robert Oppenheimer to work on the top-secret Manhattan Project.
            Oppenheimer and a team of scientists spend years developing and
            designing the atomic bomb. Their work comes to fruition on July 16,
            1945, as they witness the world's first nuclear explosion, forever
            changing the course of history.
          </p>
          <div className="flex gap-5 xs:mt-2 md:mt-5 lg:mt-8">
            <a
              href="https://www.youtube.com/watch?v=uYPbbksJxIg"
              className=""
            >
              <Button className="flex xxs:px-2 xs:px-4 sm:px-6 xl:px-8 lg:px-8 sm:py-2 xxs:text-sm md:text-base items-center justify-center gap-2 bg-gray-900 hover:bg-transparent hover:text-[#306161] hover:border-[#004c4c] hover:border-2 duration-150">
                <FaPlay /> <span>Trailer</span>
              </Button>
            </a>
            <Button className="flex xxs:px-2 xs:px-4 sm:px-6 lg:px-10 sm:py-2 xxs:text-sm md:text-base items-center justify-center gap-2 bg-gray-900 hover:bg-transparent hover:text-[#306161] hover:border-[#004c4c] hover:border-2 duration-150">
              <FaRupeeSign /> <span>Buy</span>
            </Button>
          </div>
        </div>
      </div>
      <div className="pb-40 flex flex-col gap-5">
        <h2 className="font-bold xxs:text-xl text-3xl">Trending Shows</h2>
        <div className="flex items-center xxs:gap-2 xs:gap-5 sm:gap-8 mt-4">
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
          <Button onClick={handleReset} className="filter-button">
            <span>Reset</span>
            <VscDebugRestart />
          </Button>
        </div>
        <div className="grid grid-cols-1 xxs:px-10 xs:px-14 sm:px-0 lg:px-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 sm:gap-5 lg:gap-8 mt-10">
          {filtermovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserHome;
