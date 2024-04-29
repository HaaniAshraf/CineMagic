import React, { useState } from "react";
import { useMovies } from "../Context/MovieContext";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { MovieValidation } from "../utils/MovieValidation";
import Logo from "../assets/logo.png";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

function AddMovie() {
  const { addMovie } = useMovies();
  const navigate = useNavigate();

  return (
    <div className="bg-black text-white w-full h-full py-4 flex items-center justify-center">
      <Formik
        initialValues={{
          title: "",
          poster: "",
          cast: "",
          description: "",
          rating: "",
          trailer: "",
        }}
        validationSchema={MovieValidation}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          const movieData = {
            title: values.title,
            cast: values.cast,
            description: values.description,
            rating: values.rating,
            poster: values.poster,
            trailer: values.trailer,
          };
          console.log("movieData:", movieData);
          addMovie(movieData);
          setSubmitting(false);
          resetForm();
          navigate("/adminHome");
        }}
      >
        {() => (
          <div className="w-full h-full flex flex-col items-center justify-center">
            <Form className="flex flex-col gap-4 border-2 border-gray-900 rounded-md px-10 py-1 pb-5">
              <div className="flex items-center justify-center">
                <img src={Logo} alt="CineMagic Logo" className="h-14" />
                <h2 className="text-3xl font-semibold font-signature ml-4">
                  CineMagic
                </h2>
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="title">Movie Title :</label>
                <Field
                  name="title"
                  placeholder="Movie title"
                  className="bg-gray-800 pl-1 py-1 rounded-sm w-96 placeholder:text-gray-500"
                />
                <ErrorMessage
                  name="title"
                  component="div"
                  className="text-red-400"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="title">Movie Poster :</label>
                <Field
                  name="poster"
                  placeholder="Poster link"
                  className="bg-gray-800 pl-1 py-1 rounded-sm placeholder:text-gray-500"
                />
                <ErrorMessage
                  name="poster"
                  component="div"
                  className="text-red-400"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="title"> Cast :</label>
                <Field
                  name="cast"
                  placeholder="Cast"
                  className="bg-gray-800 pl-1 py-1 rounded-sm placeholder:text-gray-500"
                />
                <ErrorMessage
                  name="cast"
                  component="div"
                  className="text-red-400"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="title">Movie Description :</label>
                <Field
                  as="textarea"
                  name="description"
                  placeholder="Description"
                  className="bg-gray-800 pl-1 py-1 rounded-sm placeholder:text-gray-500"
                />
                <ErrorMessage
                  name="description"
                  component="div"
                  className="text-red-400"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="title">Rating :</label>
                <Field
                  name="rating"
                  placeholder="Rating (1-5)"
                  type="number"
                  className="bg-gray-800 pl-1 py-1 rounded-sm placeholder:text-gray-500"
                />
                <ErrorMessage
                  name="rating"
                  component="div"
                  className="text-red-400"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="title">Trailer :</label>
                <Field
                  name="trailer"
                  placeholder="Trailer link"
                  className="bg-gray-800 pl-1 py-1 rounded-sm placeholder:text-gray-500"
                />
                <ErrorMessage
                  name="cast"
                  component="div"
                  className="text-red-400"
                />
              </div>
              <div className="w-full flex items-center justify-center mt-2">
                <Button
                  type="submit"
                  className="bg-[#004c4c] w-36 h-10 hover:bg-transparent hover:text-[#306161] hover:border-[#004c4c] hover:border-2 duration-150"
                >
                  Add Movie
                </Button>
              </div>
            </Form>
            <Link
              to={"/adminHome"}
              className="mt-4 flex items-center justify-center gap-2 hover:text-[#306161]"
            >
              <FaArrowLeft />
              <span>Back to Home</span>
            </Link>
          </div>
        )}
      </Formik>
    </div>
  );
}

export default AddMovie;
