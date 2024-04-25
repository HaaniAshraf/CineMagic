import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const Error = () => {
    const navigate = useNavigate();
    const handleSubmit=()=>{
        navigate('/')
    }

  return (
    <div className="flex common flex-col h-screen w-full">
      <div className="flex-grow flex justify-center items-center pb-40">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-[#3d9e9e]">Oops!!</h1>
          <h3 className="text-xl text-gray-400">Something went wrong...</h3>          
          <Button onClick={handleSubmit} className="mt-6 bg-[#004c4c] hover:bg-transparent hover:text-[#306161] hover:border-[#004c4c] hover:border-2 duration-150">
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Error;
