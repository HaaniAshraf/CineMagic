import * as Yup from "yup";

export const MovieValidation = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  poster: Yup.string().url("Invalid URL").required("Poster URL is required"),
  cast: Yup.string().required("Cast is required"),
  description: Yup.string().required("Description is required"),
  trailer: Yup.string().url("Invalid URL").required("Trailer URL is required"),
});
