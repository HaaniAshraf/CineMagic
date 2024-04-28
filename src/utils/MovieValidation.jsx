import * as Yup from "yup";

export const MovieValidation = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  cast: Yup.string().required("Cast is required"),
  description: Yup.string().required("Description is required"),
  rating: Yup.number().min(1).max(5).required("Rating is required"),
});
