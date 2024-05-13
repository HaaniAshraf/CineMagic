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

  // Function to get users from localStorage
  const getUsers = () => {
    const users = localStorage.getItem("users");
    // JSON.parse is used to convert a JSON string back into a JavaScript object.
    return users ? JSON.parse(users) : [];
  };
  // Function to check if a user exists
  const userExists = (email) => {
    const users = getUsers();
    return users.some((user) => user.email === email);
  };

  // Form validation function
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

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const newUserDetails = { name, email, phone, password, role: "user" };
      const users = getUsers();
      users.push(newUserDetails);
      // Localstorage data is stored in key-value pairs which should be strings.
      // JSON.stringify is used to convert a JavaScript object into a JSON string.(Here,'users' is an array)
      localStorage.setItem("users", JSON.stringify(users));
      dispatch(saveUserDetails(newUserDetails));
      navigate("/");
    }
  };

  return (
    <div
      className="flex flex-col xxs:px-2 xxs:py-2 xxs:gap-3 md:gap-5 lg:gap-3 xl:gap-2  items-center justify-center"
      style={{
        backgroundImage: `url(${bgImg})`, 
        backgroundSize: "cover", 
        backgroundPosition: "center", 
        backgroundRepeat: "no-repeat", 
        width: "100%", 
        height: "100vh",
      }}
    >
      <h2 className="xxs:text-sm sm:text-xl lg:text-2xl xl:text-3xl text-center font-bold px-3 sm:px-0">
        "Where movies and <span className="text-[#328282]">Magic</span> meet."
        <br />
        <span className="xxs:text-xs sm:text-lg lg:text-xl xl:text-2xl text-gray-400">
          Sign up for CineMagic and start your enchanting cinematic journey
          today!
        </span>
      </h2>
      <div className="z-10 xxs:py-3 xxs:px-3 sm:px-5 md:px-9 lg:px-8 xl:px-14 sm:py-5 lg:py-7 xl:py-10 mt-8 relative bg-[#05050599] rounded-lg">
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center">
            <img src={Logo} alt="CineMagic Logo" className="xxs:h-14 lg:h-20" />
            <h2 className="text-5xl xxs:text-3xl lg:text-5xl font-semibold font-signature ml-4">
              CineMagic
            </h2>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 mt-4 w-full max-w-md"
          >
            <div className="flex flex-col gap-1">
              <div className="flex gap-2 items-center bg-gray-900 pl-2 py-1 xl:py-2 rounded-md">
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
              <div className="flex gap-2 items-center bg-gray-900 pl-2 py-1 xl:py-2 rounded-md">
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
              <div className="flex gap-2 items-center bg-gray-900 pl-2 py-1 xl:py-2 rounded-md">
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
              <div className="flex gap-2 items-center bg-gray-900 pl-2 py-1 xl:py-2 rounded-md">
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
              <div className="flex gap-2 items-center bg-gray-900 pl-2 py-1 xl:py-2 rounded-md">
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
            <Button
              type="submit"
              className="w-full bg-[#004c4c] xl:py-2 xl:text-lg hover:bg-transparent hover:text-[#306161] hover:border-[#004c4c] hover:border-2 duration-150"
            >
              Signup
            </Button>
          </form>
          <div className="xxs:text-sm md:text-base xl:text-xl xxs:mt-2 lg:mt-4">
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
