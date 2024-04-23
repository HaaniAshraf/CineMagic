import React from "react";
import bgImg from "../assets/interstellar.jpg";
import Logo from "../assets/logo.png";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
import { FiLock } from "react-icons/fi";
import { Link } from "react-router-dom";
import Button from "../components/Button";

function Signup() {
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
      <div className="z-10 mt-28 sm:mt-20 relative bg-[#05050599] py-4 px-14 pb-8 rounded-lg text-center">
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center">
            <img src={Logo} alt="CineMagic Logo" className="h-20" />
            <h2 className="text-5xl font-semibold font-signature ml-4">
              CineMagic
            </h2>
          </div>
          <form className="flex flex-col gap-5 mt-4 w-full max-w-md">
            <div className="flex gap-2 items-center bg-gray-900 pl-2 py-1 rounded-md">
              <FaRegUserCircle className="text-gray-400 text-xl" />
              <input
                type="text"
                className="bg-gray-900 pl-1 placeholder:text-gray-600 flex-grow"
                placeholder="Name"
              />
            </div>
            <div className="flex gap-2 items-center bg-gray-900 pl-2 py-1 rounded-md">
              <MdOutlineEmail className="text-gray-400 text-xl" />
              <input
                type="email"
                className="bg-gray-900 pl-1 placeholder:text-gray-600 flex-grow"
                placeholder="Email Address"
              />
            </div>
            <div className="flex gap-2 items-center bg-gray-900 pl-2 py-1 rounded-md">
              <HiMiniDevicePhoneMobile className="text-gray-400 text-xl" />
              <input
                type="number"
                className="bg-gray-900 pl-1 placeholder:text-gray-600 flex-grow"
                placeholder="Phone"
              />
            </div>
            <div className="flex gap-2 items-center bg-gray-900 pl-2 py-2 rounded-md">
              <FiLock className="text-gray-400 text-xl" />
              <input
                type="password"
                className="bg-gray-900 pl-1 placeholder:text-gray-600 flex-grow"
                placeholder="Password"
              />
            </div>
            <div className="flex gap-2 items-center bg-gray-900 pl-2 py-2 rounded-md">
              <FiLock className="text-gray-400 text-xl" />
              <input
                type="password"
                className="bg-gray-900 pl-1 placeholder:text-gray-600 flex-grow"
                placeholder="Confirm Password"
              />
            </div>
            <Button className="w-full bg-[#004c4c] hover:bg-transparent hover:text-[#306161] hover:border-[#004c4c] hover:border-2 duration-150">
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
