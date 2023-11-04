import React from "react";
import {
  BsList,
  BsSearch,
  BsBell,
  BsPersonCircle,
  BsMicFill,
} from "react-icons/bs";
import { BiCameraMovie } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { toggleSideBar } from "../utils/appSlice";

const Header = () => {
  const dispatch = useDispatch();

  const handleToggleSideBar = () => {
    dispatch(toggleSideBar());
  };

  return (
    <div className="bg-black text-white px-4 grid grid-flow-col">
      <div className="flex items-center col-span-2">
        <BsList
          className="cursor-pointer hover:bg-gray-800 rounded-full p-2"
          size={40}
          onClick={handleToggleSideBar}
        />
        <img
          className="h-16"
          alt="logo"
          src="https://cdn.gtricks.com/2021/04/how-to-enable-youtube-dark-mode-on-pc-and-android-ios-1280x720.jpg"
        />
      </div>
      <div className="col-span-8 flex justify-center items-center">
        <input
          type="text"
          className="border border-gray-700 bg-black rounded-l-full py-2 px-4 h-10 w-1/2 focus:outline-none focus:border-blue-500"
          placeholder="Search"
        />
        <BsSearch
          className="border border-gray-700 h-10 rounded-r-full bg-gray-800 pr-4 pl-4"
          size={50}
        />
        <BsMicFill
          size={35}
          className="cursor-pointer hover:bg-gray-700 rounded-full p-2 mx-4 h-10 rounded-r-full bg-gray-800"
        />
      </div>
      <div className="col-span-2 text-white flex items-center ml-auto">
        <BiCameraMovie
          size={40}
          className="cursor-pointer hover:bg-gray-800 rounded-full p-2"
        />
        <BsBell
          size={40}
          className="cursor-pointer hover:bg-gray-800 rounded-full p-2 mx-3"
        />
        <BsPersonCircle
          size={40}
          className="cursor-pointer hover:bg-gray-800 rounded-full p-2"
        />
      </div>
    </div>
  );
};

export default Header;
