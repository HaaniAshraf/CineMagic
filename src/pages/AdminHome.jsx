import React from "react";
import Logo from "../assets/logo.png";
import Button from "../components/Button";
import { LuPlusCircle } from "react-icons/lu";
import { FaEdit, FaTrash } from "react-icons/fa";

function AdminHome() {
  return (
    <div className="common">
      <div className="flex justify-between items-center px-5 py-3">
        <div className="flex items-center">
          <img src={Logo} alt="CineMagic Logo" className="h-16" />
          <h2 className="text-3xl font-semibold font-signature ml-4">
            CineMagic
          </h2>
        </div>
        <div>
          <h2 className="text-[#3c9b9b] text-xl font-semibold">Hey, Admin</h2>
        </div>
      </div>
      <div className="w-full flex items-end justify-end px-5">
        <Button className="bg-[#004c4c] w-36 h-10 hover:bg-transparent hover:text-[#306161] hover:border-[#004c4c] hover:border-2 duration-150 flex items-center justify-center gap-1">
          <span>Add Movie</span>
          <LuPlusCircle />
        </Button>
      </div>
      <h1 className="text-center text-3xl mt-5 font-bold text-[#3c9b9b]">
        Movies
      </h1>
      <div className="md:px-10 px-3 mt-5">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-900 text-[#3c9b9b]">
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Poster</th>
              <th className="px-4 py-2">Description</th>
              <th className="px-4 py-2">Cast</th>
              <th className="px-4 py-2">Rating</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td className="border border-gray-800 px-4 py-2">hahah</td>
              <td className="border border-gray-800 px-4 py-2">
                <img src="" alt="Movie Poster" className="h-20 mx-auto" />
              </td>
              <td className="border border-gray-800 px-4 py-2">huhuhu</td>
              <td className="border border-gray-800 px-4 py-2">dfgdfsg</td>
              <td className="border border-gray-800 px-4 py-2">asfgsdfg</td>
              <td className="border border-gray-800 px-4 py-2">
                <button
                  className="text-yellow-500 hover:text-yellow-700 mx-2 text-xl"
                  onClick={() => onEdit(movie)}
                >
                  <FaEdit />
                </button>
                <button
                  className="text-red-500 hover:text-red-700 mx-2 text-xl"
                  onClick={() => onDelete(movie.id)}
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminHome;
