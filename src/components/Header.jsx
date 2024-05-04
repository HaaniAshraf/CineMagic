import React from "react";
import Logo from "../assets/logo.png";
import { IoSearch } from "react-icons/io5";
import { HiHome } from "react-icons/hi2";
import { FaCircleUser } from "react-icons/fa6";
import { MdLogout } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useMovies } from "../Context/MovieContext";
import { debounce } from "lodash";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../redux/reducers/userReducer";
import Swal from "sweetalert2";

function Header() {
  const location = useLocation();
  const [nav, setNav] = useState(false);
  const { setSearchTerm } = useMovies();
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const closeNav = () => {
    setNav(false);
  };
  const debouncedSearchTerm = debounce(setSearchTerm, 300);
  const handleSearch = (event) => {
    const { value } = event.target;
    setInput(value);
    debouncedSearchTerm(value);
  };
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
  return (
    <div className="bg-black shadow-customShadow h-20 z-50 flex xxs:gap-3 sm:px-2 sm:w-full md:w-full md:px-5 gap-5 justify-between items-center fixed">
      <div className="flex items-center justify-center">
        <img src={Logo} alt="CineMagic Logo" className="h-10" />
        <h2 className="text-2xl font-semibold font-signature ml-4">
          CineMagic
        </h2>
      </div>
      <div className="w-1/2 xxs:w-1/3 sm:w-1/3 md:w-1/3 relative h-9">
        <input
          type="text"
          className="w-full sm:w-full sm:ml pl-2 h-full rounded-md bg-gray-800 placeholder-pl-2 placeholder-ml-2"
          placeholder="Search"
          value={input}
          onChange={handleSearch}
        />
        <IoSearch className="cursor-pointer absolute inset-y-0 right-2 sm:right-1 md:right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#328282]" />
      </div>
      <ul className="sm:flex hidden items-center md:gap-8 sm:gap-4">
        <Link to={"/home"}>
          <li
            className={
              location.pathname === "/home" ? "active-link" : "nav-item"
            }
          >
            <HiHome />
          </li>
        </Link>
        <Link to={"/profile"}>
          <li
            className={
              location.pathname === "/profile" ? "active-link" : "nav-item"
            }
          >
            <FaCircleUser />
          </li>
        </Link>
        <button
          onClick={handleLogout}
          className=" text-red-400 sm:text-xl md:text-2xl"
        >
          <MdLogout />
        </button>
      </ul>
      <div className="sm:hidden">
        <button
          onClick={() => setNav(!nav)}
          className="text-3xl pr-2 pt-2 text-gray-500 hover:text-[#3e9e9e]"
        >
          {nav ? <FaTimes /> : <FaBars />}
        </button>
        {nav && (
          <ul className="flex flex-col items-center justify-center bg-[#0c0c0c] text-white absolute top-16 left-0 w-full py-4 border-b border-gray-200">
            <li className="my-2">
              <Link
                to={"/home"}
                onClick={closeNav}
                className=" hover:text-[#3e9e9e] font-semibold text-xl"
              >
                Home
              </Link>
            </li>
            <li className="my-2">
              <Link
                to={"/profile"}
                onClick={closeNav}
                className=" hover:text-[#3e9e9e] font-semibold text-xl"
              >
                Profile
              </Link>
            </li>

            <li className="my-2">
              <button className="text-red-400 text-xl">Logout</button>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Header;
