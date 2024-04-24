import React from "react";
import Logo from "../assets/logo.png";
import { IoSearch } from "react-icons/io5";
import Button from "./Button";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="common h-16 flex justify-between px-5 items-center">
      <div className="flex items-center justify-center">
        <img src={Logo} alt="CineMagic Logo" className="h-10" />
        <h2 className="text-2xl font-semibold font-signature ml-4">
          CineMagic
        </h2>
      </div>
      <div className="w-1/2 sm:w-1/4 md:w-1/3 relative h-9">
        <input
          type="text"
          className="w-full sm:w-full sm:ml pl-2 h-full rounded-md bg-gray-800 placeholder-pl-2 placeholder-ml-2"
          placeholder="Search"
        />
        <IoSearch className="cursor-pointer absolute inset-y-0 right-7 sm:right-1 md:right-1 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#328282]" />
      </div>
      <ul className="flex items-center gap-5">
        <Link to={'/'}>
        <li className={location.pathname === "/" ? "active-link" : "nav-item"}>Home</li>
        </Link>
        <Link to={'/about'}>
        <li className={location.pathname === "/about" ? "active-link" : "nav-item"}>About</li>
        </Link>
        <Link to={'/profile'}>
        <li className={location.pathname === "/profile" ? "active-link" : "nav-item"}>Profile</li>
        </Link>
        <Button className="bg-[#2e7878] p-1 hover:bg-[#2a6868]">Subscribe</Button>
      </ul>
    </div>
  );
}

export default Header;
