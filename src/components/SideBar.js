import React from "react";
import {
  BsHouseDoorFill,
  BsFilm,
  BsYoutube,
  BsPersonSquare,
  BsCameraReels,
  BsClock,
  BsFire,
  BsBag,
  BsMusicNoteList,
  BsController,
  BsNewspaper,
  BsTrophy,
  BsLightbulb,
  BsHandbag,
  BsBroadcastPin,
  BsBroadcast,
  BsGear,
  BsFlag,
  BsQuestionCircle,
  BsChatLeftText,
} from "react-icons/bs";
import {
  FaAngleRight,
  FaClockRotateLeft,
  FaClapperboard,
} from "react-icons/fa6";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isDisplay = useSelector((store) => store.app.showSideBar);

  if (!isDisplay) return null;

  return (
    <div
      className="bg-black text-white w-2/12 overflow-y-auto overscroll-y-contain scrollbar scrollbar-thumb-rounded-full scrollbar-track-black scrollbar-thumb-gray-400 scrollbar-h-1 scrollbar-w-1 scrollbar-none hover:scrollbar fixed"
      style={{ height: "calc(100vh - 64px)" }}
    >
      <div className="px-4 pt-2">
        <div className="flex items-center cursor-pointer hover:bg-gray-700 px-2 rounded-md">
          <BsHouseDoorFill />
          <Link to="/">
            <p className="px-4 py-2">Home</p>
          </Link>
        </div>
        <div className="flex items-center cursor-pointer hover:bg-gray-700 px-2 rounded-md">
          <BsFilm />
          <p className="px-4 py-2">Shorts</p>
        </div>
        <div className="flex items-center cursor-pointer hover:bg-gray-700 px-2 rounded-md">
          <BsYoutube />
          <p className="px-4 py-2">Subscriptions</p>
        </div>
        <hr className="border border-gray-700 my-2"></hr>
      </div>
      <div className="px-4">
        <div className="flex items-center cursor-pointer hover:bg-gray-700 px-2 py-2 rounded-md">
          <h1 className="font-bold mr-2">You</h1>
          <FaAngleRight />
        </div>
        <div className="flex items-center cursor-pointer hover:bg-gray-700 px-2 rounded-md">
          <BsPersonSquare />
          <p className="px-4 py-2">Your Channel</p>
        </div>
        <div className="flex items-center cursor-pointer hover:bg-gray-700 px-2 rounded-md">
          <FaClockRotateLeft />
          <p className="px-4 py-2">History</p>
        </div>
        <div className="flex items-center cursor-pointer hover:bg-gray-700 px-2 rounded-md">
          <BsCameraReels />
          <p className="px-4 py-2">Your videos</p>
        </div>
        <div className="flex items-center cursor-pointer hover:bg-gray-700 px-2 rounded-md">
          <BsClock />
          <p className="px-4 py-2">Watch later</p>
        </div>
        <hr className="border border-gray-700 my-2"></hr>
      </div>
      <div className="px-4">
        <div className="flex items-center cursor-pointer hover:bg-gray-700 px-2 py-2 rounded-md">
          <h1 className="font-bold mr-2">Explore</h1>
        </div>
        <div className="flex items-center cursor-pointer hover:bg-gray-700 px-2 rounded-md">
          <BsFire />
          <p className="px-4 py-2">Trending</p>
        </div>
        <div className="flex items-center cursor-pointer hover:bg-gray-700 px-2 rounded-md">
          <BsBag />
          <p className="px-4 py-2">Shopping</p>
        </div>
        <div className="flex items-center cursor-pointer hover:bg-gray-700 px-2 rounded-md">
          <BsMusicNoteList />
          <p className="px-4 py-2">Music</p>
        </div>
        <div className="flex items-center cursor-pointer hover:bg-gray-700 px-2 rounded-md">
          <FaClapperboard />
          <p className="px-4 py-2">Movies</p>
        </div>
        <div className="flex items-center cursor-pointer hover:bg-gray-700 px-2 rounded-md">
          <BsBroadcast />
          <p className="px-4 py-2">Live</p>
        </div>
        <div className="flex items-center cursor-pointer hover:bg-gray-700 px-2 rounded-md">
          <BsController />
          <p className="px-4 py-2">Gaming</p>
        </div>
        <div className="flex items-center cursor-pointer hover:bg-gray-700 px-2 rounded-md">
          <BsNewspaper />
          <p className="px-4 py-2">News</p>
        </div>
        <div className="flex items-center cursor-pointer hover:bg-gray-700 px-2 rounded-md">
          <BsTrophy />
          <p className="px-4 py-2">Sports</p>
        </div>
        <div className="flex items-center cursor-pointer hover:bg-gray-700 px-2 rounded-md">
          <BsLightbulb />
          <p className="px-4 py-2">Learning</p>
        </div>
        <div className="flex items-center cursor-pointer hover:bg-gray-700 px-2 rounded-md">
          <BsHandbag />
          <p className="px-4 py-2">Fashion & Beauty</p>
        </div>
        <div className="flex items-center cursor-pointer hover:bg-gray-700 px-2 rounded-md">
          <BsBroadcastPin />
          <p className="px-4 py-2">Podcasts</p>
        </div>
        <hr className="border border-gray-700 my-2"></hr>
      </div>
      <div className="px-4 pb-6">
        <div className="flex items-center cursor-pointer hover:bg-gray-700 px-2 rounded-md">
          <BsGear />
          <p className="px-4 py-2">Settings</p>
        </div>
        <div className="flex items-center cursor-pointer hover:bg-gray-700 px-2 rounded-md">
          <BsFlag />
          <p className="px-4 py-2">Report History</p>
        </div>
        <div className="flex items-center cursor-pointer hover:bg-gray-700 px-2 rounded-md">
          <BsQuestionCircle />
          <p className="px-4 py-2">Help</p>
        </div>
        <div className="flex items-center cursor-pointer hover:bg-gray-700 px-2 rounded-md">
          <BsChatLeftText />
          <p className="px-4 py-2">Send feedback</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
