import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useMovies } from "../Context/MovieContext";
import YouTube from "react-youtube";
import { FaStar, FaRegStar } from "react-icons/fa";
import Button from "../components/Button";

function MovieDetails() {
  const { movieId } = useParams();
  const { movies, addReview } = useMovies();
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [hover, setHover] = useState(null);

  const getYouTubeId = (url) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const movie = movies.find((m) => m.id === movieId);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (reviewText != "" || undefined) {
      addReview(movieId, rating, reviewText);
    }
    setReviewText("");
    setRating(0);
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  const stars = (rating) => {
    return [...Array(5)].map((_, index) => {
      return index < Math.floor(rating) ? (
        <FaStar key={index} className="text-yellow-400" />
      ) : (
        <FaRegStar key={index} className="text-gray-400" />
      );
    });
  };

  return (
    <div className="flex flex-col px-5 sm:px-10 pt-32 pb-40 gap-10">
      <div className="flex gap-20">
        <div className="w-full md:w-1/2">
          <YouTube
            videoId={getYouTubeId(movie.trailer)}
            opts={{
              height: "500",
              width: "750",
              playerVars: { mute: 1 },
            }}
          />
        </div>
        <div className="flex flex-col items-center gap-8 justify-center">
          <h1 className="mt-2 text-3xl font-bold">{movie.title}</h1>
          <h2 className="text-[#41adad] font-medium">Cast: {movie.cast}</h2>
          <p className="text-gray-400 leading-7">{movie.description}</p>
          <div className="flex justify-center gap-2 mt-2">
            <p>Rate and review :</p>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-2 border-2 border-gray-900 p-3 rounded-md"
            >
              <div className="flex">
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    className={`cursor-pointer transition-colors duration-200 ${
                      index < (hover || rating)
                        ? "text-yellow-400"
                        : "text-gray-500"
                    }`}
                    onMouseEnter={() => setHover(index + 1)}
                    onMouseLeave={() => setHover(null)}
                    onClick={() => setRating(index + 1)}
                  />
                ))}
              </div>
              <textarea
                name="review"
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                cols="30"
                rows="3"
                className="bg-gray-900 pl-1 placeholder:text-gray-600"
                placeholder="Write your review here..."
              ></textarea>
              <Button
                type="submit"
                className="w-full bg-[#004c4c] hover:bg-transparent hover:text-[#306161] hover:border-[#004c4c] hover:border-2 duration-150 mt-1"
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        <h2>User Reviews :</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {movie?.reviews.map((rev, index) => (
            <div
              key={index}
              className="border-2 p-4 rounded-md border-gray-900 flex flex-col"
            >
              <div className="flex gap-1">{stars(rev.rating)}</div>
              <p className="text-[#41adad] font-medium">{rev.review}</p>
              <p className="text-gray-500">{formatDate(rev.date)}</p>
            </div>
          ))}
          {movie.reviews.date}
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
