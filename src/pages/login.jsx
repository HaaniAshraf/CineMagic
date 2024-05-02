import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Logo from "../assets/logo.png";
import BgImg from "../assets/batman.jpg";
import { MdOutlineEmail } from "react-icons/md";
import { FiLock } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { useDispatch } from "react-redux";
import { saveUserDetails } from "../redux/reducers/userReducer";

const Login = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();
  const getUserDetails = (email, password) => {
    const users = localStorage.getItem("users");
    const parsedUsers = JSON.parse(users);
    return parsedUsers.find(
      (user) => user.email === email && user.password === password
    );
  };

  const onSubmit = (data) => {
    const { email, password } = data;
    const userDetails = getUserDetails(email, password);
    if (userDetails) {
      dispatch(saveUserDetails(userDetails));
      if (userDetails.role === "admin") {
        navigate("/adminHome");
      } else {
        navigate("/home");
      }
    } else {
      setLoginError("Incorrect email or password.");
    }
  };
  return (
    <div
      className="flex flex-col gap-12 items-center justify-center"
      style={{
        backgroundImage: `url(${BgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100vh",
      }}
    >
      <h2 className="text-2xl text-center font-bold">
        Ready to explore the <span className="text-[#328282]">Magic</span> of
        movies?
        <br />
        <span className="text-lg text-gray-400">
          Log in and let the adventure begin!
        </span>
      </h2>
      <div className="z-10 py-6 px-8 bg-[#05050599] rounded-lg">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center">
            <img src={Logo} alt="CineMagic Logo" className="h-20" />
            <h2 className="text-5xl font-semibold font-signature ml-4">
              CineMagic
            </h2>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-4 w-full max-w-md"
          >
            <div className="flex gap-2 items-center bg-gray-900 pl-2 py-1 rounded-md">
              <MdOutlineEmail className="text-gray-400 text-xl" />
              <input
                type="email"
                {...register("email", { required: true })}
                className="bg-transparent pl-1 flex-grow border-none text-white placeholder:text-gray-600"
                placeholder="Email Address"
              />
            </div>
            {errors.email && (
              <span className="text-red-400 text-sm">Email is required</span>
            )}
            <div className="flex gap-2 items-center bg-gray-900 pl-2 py-1 rounded-md mt-4">
              <FiLock className="text-gray-400 text-xl" />
              <input
                type="password"
                {...register("password", { required: true })}
                className="bg-transparent pl-1 flex-grow border-none text-white placeholder:text-gray-600"
                placeholder="Password"
              />
            </div>
            {errors.password && (
              <span className="text-red-400 text-sm">Password is required</span>
            )}
            <Button
              type="submit"
              className="mt-4 w-full bg-[#004c4c] hover:bg-transparent hover:text-[#306161] hover:border-[#004c4c] hover:border-2 duration-150"
            >
              Login
            </Button>
            {loginError && (
              <p className="text-red-400 text-sm mt-4">{loginError}</p>
            )}
          </form>
          <div className="mt-4 text-gray-500">Forget Password?</div>
          <div className="mt-2">
            New User?{" "}
            <Link to="/signup" className="text-[#328282] font-semibold">
              Signup
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
