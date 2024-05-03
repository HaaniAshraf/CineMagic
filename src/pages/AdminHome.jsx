import React, { useState } from "react";
import Logo from "../assets/logo.png";
import Button from "../components/Button";
import { MdLogout } from "react-icons/md";
import { LuPlusCircle } from "react-icons/lu";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useMovies } from "../Context/MovieContext";
import YouTube from "react-youtube";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../redux/reducers/userReducer";
import Swal from "sweetalert2";

function AdminHome() {
  const { movies, deleteMovie } = useMovies();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out of your account.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log out",
      cancelButtonText: "Cancel",
      backdrop: "rgba(0,0,0,0.9)",
      customClass: {
        container: "custom-swal-container",
        popup: "custom-swal-popup",
        title: "custom-swal-title",
        text: "custom-swal-text",
        confirmButton: "custom-swal-confirm-button",
        cancelButton: "custom-swal-cancel-button",
        backdrop: "rgba(0,0,0,0.9)",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(logoutUser());
        navigate("/");
      }
    });
  };

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 4;
  const lastMovieIndex = currentPage * moviesPerPage;
  const firstMovieIndex = lastMovieIndex - moviesPerPage;
  const currentMovies = movies.slice(firstMovieIndex, lastMovieIndex);
  const handlePageChange = (pageNum) => {
    setCurrentPage(pageNum);
  };

  // Function to extract YouTube ID from URL
  const getYouTubeId = (url) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const handleDelete = (movieId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This movie will be deleted!!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Delete it!",
      cancelButtonText: "Cancel",
      backdrop: "rgba(0,0,0,0.9)",
      customClass: {
        container: "custom-swal-container",
        popup: "custom-swal-popup",
        title: "custom-swal-title",
        text: "custom-swal-text",
        confirmButton: "custom-swal-confirm-button",
        cancelButton: "custom-swal-cancel-button",
        backdrop: "rgba(0,0,0,0.9)",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        deleteMovie(movieId);
      }
    });
  };

  return (
    <div className="pb-24 xxs:w-[235%] md:w-full">
      <div className="flex justify-between items-center xs:px-7 px-5 py-3">
        <div className="flex items-center">
          <img src={Logo} alt="CineMagic Logo" className="h-16" />
          <h2 className="text-3xl font-semibold font-signature ml-4">
            CineMagic
          </h2>
        </div>
        <div>
          <button
            onClick={handleLogout}
            className=" text-red-400 flex items-center gap-2 text-xl"
          >
            <span>Logout</span>
            <MdLogout />
          </button>{" "}
        </div>
      </div>
      <div className="w-full flex items-end justify-end px-5">
        <Link to={"/addMovie"}>
          <Button className="bg-[#004c4c] w-36 h-10 hover:bg-transparent hover:text-[#306161] hover:border-[#004c4c] hover:border-2 duration-150 flex items-center justify-center gap-1">
            <span>Add Movie</span>
            <LuPlusCircle />
          </Button>
        </Link>
      </div>
      <h1 className="text-center text-3xl mt-5 font-bold text-[#3c9b9b]">
        Movies
      </h1>
      <div className="md:px-10 px-3 mt-5">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-900 text-[#3c9b9b]">
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Poster</th>
              <th className="px-4 py-2">Description</th>
              <th className="px-4 py-2">Cast</th>
              <th className="px-4 py-2">Trailer</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentMovies.map((movie, index) => (
              <tr key={index} className="text-center">
                <td className="border border-gray-800 px-4 py-2">
                  {movie.title}
                </td>
                <td className="border border-gray-800 px-4 py-2">
                  <img
                    src={movie.poster}
                    alt="Movie Poster"
                    className="h-20 mx-auto"
                  />
                </td>
                <td className="border border-gray-800 px-4 py-2">
                  {movie.description}
                </td>
                <td className="border border-gray-800 px-4 py-2">
                  {movie.cast}
                </td>
                <td className="border border-gray-800 px-4 py-2">
                  <YouTube
                    videoId={getYouTubeId(movie.trailer)}
                    opts={{
                      height: "150",
                      width: "200",
                      playerVars: { mute: 1 },
                    }}
                  />
                </td>
                <td className="border border-gray-800 px-4 py-2">
                  <div className="flex flex-col gap-5 items-center justify-center">
                    <Link to={`/editMovie/${movie.id}`}>
                      <button className="text-yellow-500 hover:text-yellow-700 mx-2 text-xl">
                        <FaEdit />
                      </button>
                    </Link>
                    <button
                      className="text-red-500 hover:text-red-700 mx-2 text-xl"
                      onClick={() => handleDelete(movie.id)}
                    >
                      <FaTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-center mt-10">
          {currentPage > 1 && (
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              className="mx-2 px-3 py-1 rounded bg-gray-950 hover:bg-gray-900 text-[#3b9292] font-medium"
            >
              Prev
            </button>
          )}
          {Array.from(
            { length: Math.ceil(movies.length / moviesPerPage) },
            (_, i) => (
              <button
                key={i + 1}
                onClick={() => handlePageChange(i + 1)}
                className={`mx-2 px-3 py-1 rounded ${
                  currentPage === i + 1
                    ? "bg-[#328282] text-white font-medium"
                    : "bg-gray-900 text-[#3b9292] font-medium hover:bg-gray-950"
                }`}
              >
                {i + 1}
              </button>
            )
          )}
          {currentPage < Math.ceil(movies.length / moviesPerPage) && (
            <button
              onClick={() =>
                setCurrentPage((prev) =>
                  Math.min(prev + 1, Math.ceil(movies.length / moviesPerPage))
                )
              }
              className="mx-2 px-3 py-1 rounded bg-gray-950 hover:bg-gray-900 text-[#3b9292] font-medium"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminHome;
