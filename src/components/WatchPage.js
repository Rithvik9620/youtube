import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { hideSideBarInWatchPage } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  useEffect(() => {
    dispatch(hideSideBarInWatchPage());
    // eslint-disable-next-line
  }, []);

  return (
    <div className="border border-yellow-500 bg-white text-purple-500 h-vh w-full">
      <iframe
        className="ml-36"
        width="1200"
        height="600"
        src={
          "https://www.youtube.com/embed/" +
          videoId +
          "?autoplay=1&si=9dR4iHCaJ6TwV-SN"
        }
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <div>GG</div>
    </div>
  );
};

export default WatchPage;
