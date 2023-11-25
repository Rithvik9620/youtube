import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    getVideos();
    // console.log(videos[0]);
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    // console.log(json.items);
    setVideos(json.items);
  };

  return (
    <div
      className="flex flex-wrap overflow-y-auto overscroll-y-contain scrollbar scrollbar-thumb-rounded-full scrollbar-track-black scrollbar-thumb-gray-400 scrollbar-h-1 scrollbar-w-2 scrollbar-none hover:scrollbar"
      style={{ height: "calc(100vh - 164px)" }}
    >
      {videos &&
        videos.map((video) => (
          <Link to={"watch?v=" + video.id}>
            <VideoCard key={video.id} info={video} />
          </Link>
        ))}
    </div>
  );
};

export default VideoContainer;
