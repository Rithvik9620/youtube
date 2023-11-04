import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const isToggle = useSelector((store) => store.app.showSideBar);
  let className = isToggle ? "w-10/12 " : "w-11/12 ";
  className += "p-4";

  return (
    <div className={className}>
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
