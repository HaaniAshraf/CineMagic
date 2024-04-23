import React from "react";
import Logo from "../assets/logo.png";
import BgImg from "../assets/batman.jpg";
import { MdOutlineEmail } from "react-icons/md";
import { FiLock } from "react-icons/fi";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const Login = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center common">
      <img src={BgImg} alt="" className="absolute h-full w-full object-cover" />
      <h2 className="text-2xl absolute top-12 text-center font-bold">
        Ready to explore the <span className="text-[#328282]">Magic</span> of
        movies?
        <br />
        <span className="text-lg text-gray-400">
          Log in and let the adventure begin!
        </span>
      </h2>
      <div className="z-10 py-6 px-8 bg-[#05050599] rounded-lg text-center">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center">
            <img src={Logo} alt="CineMagic Logo" className="h-20" />
            <h2 className="text-5xl font-semibold font-signature ml-4">
              CineMagic
            </h2>
          </div>
          <form className="mt-4 w-full max-w-md">
            <div className="flex gap-2 items-center bg-gray-900 pl-2 py-1 rounded-md">
              <MdOutlineEmail className="text-gray-400 text-xl" />
              <input
                type="email"
                className="bg-transparent flex-grow border-none text-white placeholder:text-gray-600"
                placeholder="Email Address"
              />
            </div>
            <div className="flex gap-2 items-center bg-gray-900 pl-2 py-1 rounded-md mt-4">
              <FiLock className="text-gray-400 text-xl" />
              <input
                type="password"
                className="bg-transparent flex-grow border-none text-white placeholder:text-gray-600"
                placeholder="Password"
              />
            </div>
            <Button className="mt-4 w-full bg-[#004c4c] hover:bg-transparent hover:text-[#306161] hover:border-[#004c4c] hover:border-2 duration-150">
              Login
            </Button>
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
