import React, { useState } from "react";
import bgImg from "../assets/interstellar.jpg";
import Logo from "../assets/logo.png";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { FiLock } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { useDispatch } from "react-redux";
import { saveUserDetails } from "../redux/reducers/userReducer";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getUsers = () => {
    const users = localStorage.getItem("users");
    return users ? JSON.parse(users) : [];
  };
  const userExists = (email) => {
    const users = getUsers();
    return users.some((user) => user.email === email);
  };
  const validate = () => {
    let tempErrors = {};
    tempErrors.name = name ? "" : "Name is required";
    tempErrors.email = email ? "" : "Email is required";
    if (email && !/^\S+@\S+\.\S+$/.test(email)) {
      tempErrors.email = "Email is invalid.";
    } else if (userExists(email)) {
      tempErrors.email = "Email already exists.";
    }
    tempErrors.phone = phone ? "" : "Phone number is required";
    tempErrors.password = password ? "" : "Password is required";
    tempErrors.confirmPassword = confirmPassword
      ? ""
      : "Confirm Password is required";
    if (password && password !== confirmPassword)
      tempErrors.confirmPassword = "Passwords do not match.";
    setErrors(tempErrors);
    // Checking if every element x is an empty string ("").
    return Object.values(tempErrors).every((x) => x === "");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const newUserDetails = { name, email, phone, password };
      const users = getUsers();
      if (userExists(email)) {
        setErrors({ ...errors, email: "Email already exists." });
        return;
      }
      users.push(newUserDetails);
      localStorage.setItem("users", JSON.stringify(users));
      dispatch(saveUserDetails(newUserDetails));
      navigate("/");
    }
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center common sm:px-0">
      <img src={bgImg} className="absolute h-full w-full object-cover" alt="" />
      <h2 className="text-2xl absolute top-8 text-center font-bold px-3 sm:px-0">
        "Where movies and <span className="text-[#328282]">Magic</span> meet."
        <br />
        <span className="text-lg text-gray-400">
          Sign up for CineMagic and start your enchanting cinematic journey
          today!
        </span>
      </h2>
      <div className="z-10 mt-28 sm:mt-20 relative bg-[#05050599] py-4 px-14 pb-8 rounded-lg">
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center">
            <img src={Logo} alt="CineMagic Logo" className="h-20" />
            <h2 className="text-5xl font-semibold font-signature ml-4">
              CineMagic
            </h2>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 mt-4 w-full max-w-md"
          >
            <div className="flex flex-col gap-1">
              <div className="flex gap-2 items-center bg-gray-900 pl-2 py-1 rounded-md">
                <FaRegUserCircle className="text-gray-400 text-xl" />
                <input
                  type="text"
                  className="bg-gray-900 pl-1 placeholder:text-gray-600 flex-grow"
                  placeholder="Name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </div>
              {errors.name && (
                <p className="text-red-400 text-sm">{errors.name}</p>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex gap-2 items-center bg-gray-900 pl-2 py-1 rounded-md">
                <MdOutlineEmail className="text-gray-400 text-xl" />
                <input
                  type="email"
                  className="bg-gray-900 pl-1 placeholder:text-gray-600 flex-grow"
                  placeholder="Email Address"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              {errors.email && (
                <p className="text-red-400 text-sm">{errors.email}</p>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex gap-2 items-center bg-gray-900 pl-2 py-1 rounded-md">
                <MdOutlinePhoneIphone className="text-gray-400 text-xl" />
                <input
                  type="number"
                  className="bg-gray-900 pl-1 placeholder:text-gray-600 flex-grow"
                  placeholder="Phone"
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                />
              </div>
              {errors.phone && (
                <p className="text-red-400 text-sm">{errors.phone}</p>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex gap-2 items-center bg-gray-900 pl-2 py-2 rounded-md">
                <FiLock className="text-gray-400 text-xl" />
                <input
                  type="password"
                  className="bg-gray-900 pl-1 placeholder:text-gray-600 flex-grow"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </div>
              {errors.password && (
                <p className="text-red-400 text-sm">{errors.password}</p>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex gap-2 items-center bg-gray-900 pl-2 py-2 rounded-md">
                <FiLock className="text-gray-400 text-xl" />
                <input
                  type="password"
                  className="bg-gray-900 pl-1 placeholder:text-gray-600 flex-grow"
                  placeholder="Confirm Password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  value={confirmPassword}
                />
              </div>
              {errors.confirmPassword && (
                <p className="text-red-400 text-sm">{errors.confirmPassword}</p>
              )}
            </div>
            <Button type="submit" className="w-full bg-[#004c4c] hover:bg-transparent hover:text-[#306161] hover:border-[#004c4c] hover:border-2 duration-150">
              Signup
            </Button>
          </form>
          <div className="mt-5 text-white">
            Already a user?{" "}
            <span className="text-[#328282] font-semibold">
              <Link to={"/"}>Login</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
