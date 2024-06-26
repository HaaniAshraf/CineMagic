import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useMovies } from "../Context/MovieContext";
import MovieForm from "../components/MovieForm";

function EditMovie() {
  const navigate = useNavigate();
  const { movieId } = useParams();
  const { movies, updateMovie } = useMovies();
  const movie = movies.find((m) => m.id === movieId);
  const initialValues = {
    title: movie?.title || "",
    poster: movie?.poster || "",
    cast: movie?.cast || "",
    description: movie?.description || "",
    trailer: movie?.trailer || "",
  };

  const handleSubmit = (values) => {
    updateMovie(movieId, values);
    navigate("/adminHome");
  };

  return (
    <div className="movie-form-container">
      <MovieForm
        initialValues={initialValues}
        onSubmit={handleSubmit}
        buttonLabel="Update Movie"
      />
    </div>
  );
}

export default EditMovie;
