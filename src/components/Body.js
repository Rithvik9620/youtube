import React from "react";
import SideBar from "./SideBar";
import VideoContainer from "./VideoContainer";
import MiniSideBar from "./MiniSideBar";

const Body = () => {
  return (
    <div className="flex">
      <SideBar />
      <MiniSideBar />
      <VideoContainer />
    </div>
  );
};

export default Body;
