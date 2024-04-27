import React, { useState } from "react";
import { useMovies } from "../Context/MovieContext";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { MovieValidation } from "../utils/MovieValidation";
import Logo from "../assets/logo.png";
import Button from "../components/Button";
import { Link,useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

function AddMovie() {
  const { addMovie } = useMovies();
  const [poster, setPoster] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const navigate = useNavigate();
  const handlePosterChange = (event) => {
    setPoster(event.currentTarget.files[0]);
  };
  const handleTrailerChange = (event) => {
    setTrailer(event.currentTarget.files[0]);
  };
  return (
    <div className="common w-full h-screen flex items-center justify-center">
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
          const formData = new FormData();
          formData.append("title", values.title);
          formData.append("cast", values.cast);
          formData.append("description", values.description);
          formData.append("rating", values.rating);
          formData.append("poster", poster);
          formData.append("trailer", trailer);
          addMovie(formData);
          setSubmitting(false);
          resetForm();
          setPoster(null);
          setTrailer(null);
          navigate('/adminHome')
        }}
      >
        {() => (
          <div className="w-full flex flex-col items-center justify-center">
            <Form className="flex flex-col gap-3 border-2 border-gray-900 rounded-md px-10 py-1 pb-5">
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
                  placeholder="movie title"
                  className="bg-gray-800 pl-1 py-1 rounded-sm placeholder:text-gray-500"
                />
                <ErrorMessage
                  name="title"
                  component="div"
                  className="text-red-400"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="title">Movie Poster :</label>
                <input
                  name="poster"
                  type="file"
                  onChange={handlePosterChange}
                  className=""
                  accept="image/*"
                />
                {poster && <div>File: {poster.name}</div>}
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
                <input
                  name="trailer"
                  type="file"
                  onChange={handleTrailerChange}
                  className="file-input"
                  accept="video/*"
                />
                {trailer && <div>File: {trailer.name}</div>}
              </div>
              <div className="w-full flex items-center justify-center">
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
