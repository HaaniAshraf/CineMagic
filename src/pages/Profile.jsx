import React from "react";
import { useSelector } from "react-redux";

function Profile() {
  const userDetails = useSelector((store) => store.user.userDetails);
  if (!userDetails) {
    return (
      <div className="pt-28 h-full sm:text-3xl text-2xl font-bold text-center">
        Loading...
      </div>
    );
  }
  return (
    <div className="flex h-screen items-center flex-col pt-28 xxs:text-xs xs:text-sm md:text-base lg:text-lg">
      <h2 className="sm:text-3xl text-2xl font-bold mb-4 text-center text-gray-300">
        Profile
      </h2>
      <table className="mt-4 border-collapse border border-gray-400 rounded-md">
        <thead>
          <tr className="text-[#328282]">
            <th className="border border-gray-400 xxs:px-1 md:px-4 px-4 py-2">Name</th>
            <th className="border border-gray-400 xxs:px-1 md:px-4 px-4 py-2">Email</th>
            <th className="border border-gray-400 xxs:px-1 md:px-4 px-4 py-2">Phone</th>
          </tr>
        </thead>
        <tbody>
          <tr className="">
            <td className="border border-gray-400 xxs:px-1 md:px-4 px-4 py-2">
              {userDetails.name}
            </td>
            <td className="border border-gray-400 xxs:px-1 md:px-4 px-4 py-2">
              {userDetails.email}
            </td>
            <td className="border border-gray-400 xxs:px-1 md:px-4 px-4 py-2">
              {userDetails.phone}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Profile;
