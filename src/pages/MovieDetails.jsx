import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useMovies } from "../Context/MovieContext";
import YouTube from "react-youtube";
import { FaStar } from "react-icons/fa";
import Button from "../components/Button";

function MovieDetails() {
  const { movieId } = useParams();
  const { movies } = useMovies();
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);

  const getYouTubeId = (url) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const movie = movies.find((m) => m.id === movieId);
  console.log('movie:',movie);
  const handleSubmit=()=>{

  }

  return (
    <div className="flex flex-col md:flex-row gap-20 pt-32 px-5 sm:px-10 pb-40">
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
          <div className="flex flex-col gap-2 border-2 border-gray-900 p-3 rounded-md">
            <div className="flex">
              {[...Array(5)].map((_, index) => (
                <FaStar
                  key={index}
                  className={`cursor-pointer transition-colors duration-200 ${
                    index < (hover || rating)
                      ? "text-yellow-400"
                      : "text-gray-400"
                  }`}
                  onMouseEnter={() => setHover(index + 1)}
                  onMouseLeave={() => setHover(null)}
                  onClick={() => setRating(index + 1)}
                />
              ))}
            </div>
            <textarea
              name="review"
              id=""
              cols="30"
              rows="3"
              className="bg-gray-900 pl-1 placeholder:text-gray-600"
              placeholder="Give your valuable opinion..."
            ></textarea>
            <Button
              type="submit"
              onClick={handleSubmit}
              className="w-full bg-[#004c4c] hover:bg-transparent hover:text-[#306161] hover:border-[#004c4c] hover:border-2 duration-150 mt-1"
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
