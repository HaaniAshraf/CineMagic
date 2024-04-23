import React from "react";
import Logo from "../assets/logo.png";
import BgImg from "../assets/batman.jpg";
import { FaRegUserCircle } from "react-icons/fa";
import { FiLock } from "react-icons/fi";

const login = () => {
  return (
    <div className="common">
      <div>
        <img
          src={BgImg}
          alt=""
          className="h-screen w-screen object-cover relative"
        />
        <div className="flex flex-col items-center absolute top-24 sm:left-36 md:left-32 left-6 gap-10">
          <h2 className="text-2xl font-bold text-center">
            "Ready to explore the <span className="text-[#328282]">Magic</span>{" "}
            of movies?"
            <br />{" "}
            <span className="text-lg text-gray-400">
              Log in and let the adventure begin!
            </span>
          </h2>
          <div className="bg-[#05050580] py-4 w-3/4 pb-8 flex flex-col items-center rounded-lg">
            <div className=" flex items-center justify-center">
              <img src={Logo} alt="" className="h-20" />
              <h2 className="text-5xl font-semibold font-signature">
                CineMagic
              </h2>
            </div>
            <div>
              <form className="flex flex-col gap-5 mt-5">
                <div className="flex gap-2 items-center bg-gray-900 pl-2 py-1 rounded-md">
                  <FaRegUserCircle className="text-gray-400 text-xl" />
                  <input
                    type="email"
                    className=" bg-gray-900 border-l-2 border-gray-700 pl-1 placeholder:text-gray-600"
                    placeholder="Email Address"
                  />
                </div>
                <div className="flex gap-2 items-center bg-gray-900 pl-2 py-1 rounded-md">
                  <FiLock className="text-gray-400 text-xl" />
                  <input
                    type="password"
                    className="bg-gray-900 border-l-2 border-gray-700 pl-1 placeholder:text-gray-600"
                    placeholder="Password"
                  />
                </div>
                <button className="w-full bg-[#004c4c] mt-4 py-1 rounded-md hover:bg-transparent hover:text-[#306161] hover:border-[#004c4c] hover:border-2 font-bold">
                  Login
                </button>
              </form>
            </div>
            <h4 className="mt-4 text-gray-500 text-sm">Forget Password?</h4>
            <h4 className="mt-2">
              New User ? <span className="text-[#328282]">Signup</span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
