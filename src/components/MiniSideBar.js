import React from "react";
import {
  BsFilm,
  BsHouseDoorFill,
  BsPersonSquare,
  BsYoutube,
} from "react-icons/bs";
import { FaClockRotateLeft } from "react-icons/fa6";
import { useSelector } from "react-redux";

const MiniSideBar = () => {
  const isDisplay = useSelector((store) => store.app.showSideBar);

  if (isDisplay) return null;

  return (
    <div
      className="bg-black text-white px-4 w-1/12 h-screen"
      style={{ height: "calc(100vh - 64px)" }}
    >
      <div className="cursor-pointer hover:bg-gray-700 py-3 rounded-md">
        <div className="flex justify-center items-center py-1">
          <BsHouseDoorFill size={20} />
        </div>
        <p className="text-center text-sm">Home</p>
      </div>
      <div className="cursor-pointer hover:bg-gray-700 py-3 rounded-md">
        <div className="flex justify-center items-center py-1">
          <BsFilm size={20} />
        </div>
        <p className="text-center text-sm">Shorts</p>
      </div>
      <div className="cursor-pointer hover:bg-gray-700 py-3 rounded-md">
        <div className="flex justify-center items-center py-1">
          <BsYoutube size={20} />
        </div>
        <p className="text-center text-sm">Subscriptions</p>
      </div>
      <div className="cursor-pointer hover:bg-gray-700 py-3 rounded-md">
        <div className="flex justify-center items-center py-1">
          <BsPersonSquare size={20} />
        </div>
        <p className="text-center text-sm">You</p>
      </div>
      <div className="cursor-pointer hover:bg-gray-700 py-3 rounded-md">
        <div className="flex justify-center items-center py-1">
          <FaClockRotateLeft size={20} />
        </div>
        <p className="text-center text-sm">History</p>
      </div>
    </div>
  );
};

export default MiniSideBar;
