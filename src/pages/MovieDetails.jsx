import React from "react";
import { useParams } from "react-router-dom";
import { useMovies } from "../Context/MovieContext";
import YouTube from "react-youtube";

function MovieDetails() {
  const { movieId } = useParams();
  const { movies } = useMovies();
  const getYouTubeId = (url) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };
  const movie = movies.find((m) => m.id === movieId);
  return (
    <div className="w-full h-full flex flex-col md:flex-row gap-20 pt-32 px-5 sm:px-10 bg-black text-white pb-40">
      <div className="w-1/2">
        <YouTube
          videoId={getYouTubeId(movie.trailer)}
          opts={{
            height: "500",
            width: "750",
            playerVars: { mute: 1 },
          }}
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <img src={movie.poster} alt="" className="h-56 w-44" />
        <h1 className="mt-2 text-3xl font-bold">{movie.title}</h1>
        <h2 className="text-[#41adad] font-medium">Cast: {movie.cast}</h2>
        <p className="text-gray-400">{movie.description}</p>
      </div>
    </div>
  );
}

export default MovieDetails;
