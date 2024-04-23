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
  return <div className="h-screen w-screen common">
    <img src={bgImg} className="h-screen w-screen relative bg-cover" alt="" />
    <div>
    <div className="flex flex-col items-center absolute top-4 sm:top-7 md:top-10 sm:right-20 md:right-1/4 right-6 gap-10">
          <h2 className="text-2xl font-bold text-center">
            "Where movies and <span className="text-[#328282]">Magic</span>{" "}
            meet."
            <br />{" "}
            <span className="text-lg text-gray-400">
            Sign up for CineMagic and start your enchanting cinematic journey today!
            </span>
          </h2>
          <div className="bg-[#05050595] py-4 px-14 pb-8 flex flex-col items-center rounded-lg">
            <div className=" flex items-center justify-center">
              <img src={Logo} alt="" className="h-20" />
              <h2 className="text-5xl font-semibold font-signature">
                CineMagic
              </h2>
            </div>
            <div>
              <form className="flex flex-col gap-5 mt-4">
                <div className="flex gap-2 items-center bg-gray-900 pl-2 py-1 rounded-md">
                  <FaRegUserCircle className="text-gray-400 text-xl" />
                  <input
                    type="text"
                    className=" bg-gray-900 border-l-2 border-gray-700 pl-1 placeholder:text-gray-600"
                    placeholder="Name"
                  />
                </div>
                <div className="flex gap-2 items-center bg-gray-900 pl-2 py-1 rounded-md">
                  <MdOutlineEmail className="text-gray-400 text-xl" />
                  <input
                    type="email"
                    className=" bg-gray-900 border-l-2 border-gray-700 pl-1 placeholder:text-gray-600"
                    placeholder="Email Address"
                  />
                </div><div className="flex gap-2 items-center bg-gray-900 pl-2 py-1 rounded-md">
                  <HiMiniDevicePhoneMobile  className="text-gray-400 text-xl" />
                  <input
                    type="number"
                    className=" bg-gray-900 border-l-2 border-gray-700 pl-1 placeholder:text-gray-600"
                    placeholder="Phone"
                  />
                </div><div className="flex gap-2 items-center bg-gray-900 pl-2 py-1 rounded-md">
                <FiLock className="text-gray-400 text-xl" />
                  <input
                    type="email"
                    className=" bg-gray-900 border-l-2 border-gray-700 pl-1 placeholder:text-gray-600"
                    placeholder="Password"
                  />
                </div>
                <div className="flex gap-2 items-center bg-gray-900 pl-2 py-1 rounded-md">
                  <FiLock className="text-gray-400 text-xl" />
                  <input
                    type="password"
                    className="bg-gray-900 border-l-2 border-gray-700 pl-1 placeholder:text-gray-600"
                    placeholder="Confirm Password"
                  />
                </div>
                <Button className="w-full bg-[#004c4c] hover:bg-transparent hover:text-[#306161] hover:border-[#004c4c] hover:border-2 duration-150">
                  Signup
                </Button>
              </form>
            </div>
            <h4 className="mt-4 text-gray-500 text-sm">Forget Password?</h4>
            <h4 className="mt-2">
              New User ?{" "}
              <span className="text-[#328282] font-semibold">
                <Link to={"/"}>Login</Link>
              </span>
            </h4>
          </div>
        </div>
    </div>
  </div>;
}

export default Signup;
