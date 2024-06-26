import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { MovieValidation } from "../utils/MovieValidation";
import Button from "../components/Button";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

function MovieForm({ initialValues, onSubmit, buttonLabel }) {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={MovieValidation}
      onSubmit={onSubmit}
    >
      {() => (
        <div className="xxs:px-7 xxs:py-14 sm:py-10 lg:py-4 xl:py-10 flex flex-col items-center justify-center">
          <Form className="flex flex-col xxs:gap-2 lg:gap-3 xl:gap-4 border-2 border-gray-900 rounded-md px-10 py-1 pb-5">
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
                className="bg-gray-800 pl-1 xxs:py-0 sm:py-1 sm:w-56 md:w-64 lg:w-72 xl:w-80 rounded-sm placeholder:text-gray-500"
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
                className="bg-gray-800 pl-1 xxs:py-0 sm:py-1 rounded-sm placeholder:text-gray-500"
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
                className="bg-gray-800 pl-1 xxs:py-0 sm:py-1 rounded-sm placeholder:text-gray-500"
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
                className="bg-gray-800 pl-1 xxs:py-0 sm:py-1 rounded-sm placeholder:text-gray-500"
              />
              <ErrorMessage
                name="description"
                component="div"
                className="text-red-400"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="title">Trailer :</label>
              <Field
                name="trailer"
                placeholder="Trailer link"
                className="bg-gray-800 pl-1 xxs:py-0 sm:py-1 rounded-sm placeholder:text-gray-500"
              />
              <ErrorMessage
                name="trailer"
                component="div"
                className="text-red-400"
              />
            </div>
            <div className="w-full flex items-center justify-center mt-2">
              <Button
                type="submit"
                className="bg-[#004c4c] md:w-36 md:h-10 xxs:h-8 xxs:w-32 hover:bg-transparent hover:text-[#306161] hover:border-[#004c4c] hover:border-2 duration-150"
              >
                {buttonLabel}
              </Button>
            </div>
          </Form>
          <Link
            to={"/adminHome"}
            className="mt-4 xl:mt-8 xl:text-xl flex items-center justify-center gap-2 hover:text-[#306161]"
          >
            <FaArrowLeft />
            <span>Back to Home</span>
          </Link>
        </div>
      )}
    </Formik>
  );
}

export default MovieForm;
