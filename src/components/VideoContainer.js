import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

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
    <div className="flex">
      {videos[1] && <VideoCard info={videos[0]} />}
      {videos[1] && <VideoCard info={videos[1]} />}
      {videos[1] && <VideoCard info={videos[2]} />}
      {videos[1] && <VideoCard info={videos[3]} />}
      {videos[1] && <VideoCard info={videos[4]} />}
    </div>
  );
};

export default VideoContainer;
