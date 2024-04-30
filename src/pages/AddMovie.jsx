import React from "react";
import { useNavigate } from "react-router-dom";
import { useMovies } from "../Context/MovieContext";
import MovieForm from "../components/MovieForm";

function AddMovie() {
  const navigate = useNavigate();
  const { addMovie } = useMovies();

  const initialValues = {
    title: "",
    poster: "",
    cast: "",
    description: "",
    trailer: "",
    review:"",
    rating:""
  };

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    addMovie(values);
    setSubmitting(false);
    resetForm();
    navigate("/adminHome");
  };

  return (
    <div className="movie-form-container">
      <MovieForm
        initialValues={initialValues}
        onSubmit={handleSubmit}
        buttonLabel="Add Movie"
      />
    </div>
  );
}

export default AddMovie;
