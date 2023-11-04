import React from "react";
import SideBar from "./SideBar";
import MiniSideBar from "./MiniSideBar";
import MainContainer from "./MainContainer";

const Body = () => {
  return (
    <div className="flex bg-black text-white">
      <SideBar />
      <MiniSideBar />
      <MainContainer />
    </div>
  );
};

export default Body;
