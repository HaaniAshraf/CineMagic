import React from "react";
import bgImg from "../assets/banners/oppen.jpeg";
import { FaStar } from "react-icons/fa6";
import Button from "../components/Button";

function UserHome() {
  const stars = Array(5)
    .fill(0)
    .map((_, index) => <FaStar key={index} className="text-yellow-400" />);
  return (
    <div>
      <div className="h-screen w-screen common flex flex-col items-center justify-center">
        <img
          src={bgImg}
          alt=""
          className="h-5/6 w-5/6 rounded-xl relative bg-cover pt-7"
        />
        <div className="absolute w-1/2 md:w-1/3 top-28 md:top-44 left-30 md:left-44 flex flex-col gap-3">
          <div className="flex gap-1">{stars}</div>
          <h1 className="font-bold text-4xl">OPPENHEIMER</h1>
          <h4 className="font-semibold text-gray-300">
            Released on 21 July 2023
          </h4>
          <p className="sm:mt-10 font-semibold">
            During World War II, Lt. Gen. Leslie Groves Jr. appoints physicist
            J. Robert Oppenheimer to work on the top-secret Manhattan Project.
            Oppenheimer and a team of scientists spend years developing and
            designing the atomic bomb. Their work comes to fruition on July 16,
            1945, as they witness the world's first nuclear explosion, forever
            changing the course of history.
          </p>
          <div className="flex gap-4 mt-10 sm:mt-24 md:mt-16">
            <Button className="w-full bg-gray-900 text-white hover:bg-transparent hover:text-[#306161] hover:border-[#004c4c] hover:border-2 duration-150">
              Trailer
            </Button>
            <Button className="w-full bg-gray-900 hover:bg-transparent hover:text-[#306161] hover:border-[#004c4c] hover:border-2 duration-150">
              Buy
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserHome;
