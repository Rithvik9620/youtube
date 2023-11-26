import React, { useEffect, useState } from "react";
import {
  BsList,
  BsSearch,
  BsBell,
  BsPersonCircle,
  BsMicFill,
} from "react-icons/bs";
import { BiCameraMovie } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { toggleSideBar } from "../utils/appSlice";
import { YOUTUBE_SUGGESTION_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState(null);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const cachedResults = useSelector((store) => store.search);

  const handleToggleSideBar = () => {
    dispatch(toggleSideBar());
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (cachedResults[searchQuery]) {
        setSuggestions(cachedResults[searchQuery]);
      } else {
        getSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [searchQuery]);

  const getSuggestions = async () => {
    const data = await fetch(YOUTUBE_SUGGESTION_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
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
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
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
      {searchQuery !== "" && suggestions && showSuggestions && (
        <div className="fixed top-[56px] left-[613px] z-20 bg-gray-800 p-3 rounded-xl w-[586px]">
          <ul>
            {suggestions.map((s) => (
              <li
                key={s}
                className="flex items-center hover:bg-gray-600 rounded-lg"
              >
                <BsSearch className="my-2 mr-4 ml-2" />
                {s}
              </li>
            ))}
          </ul>
        </div>
      )}
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
