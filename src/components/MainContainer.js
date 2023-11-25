import React, { useEffect } from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useDispatch, useSelector } from "react-redux";
import { showSideBarSetToTrue } from "../utils/appSlice";

const MainContainer = () => {
  const dispatch = useDispatch();
  const isToggle = useSelector((store) => store.app.showSideBar);

  useEffect(() => {
    dispatch(showSideBarSetToTrue());
    // eslint-disable-next-line
  }, []);

  let className = isToggle ? "w-10/12 ml-[310px]" : "w-12/12 ";

  return (
    <div className={className + " p-4"}>
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
