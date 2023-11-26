import React, { useEffect, useState } from "react";
import {
  YOUTUBE_CHANNEL_API_FIRST_HALF,
  YOUTUBE_CHANNEL_API_SECOND_HALF,
} from "../utils/constants";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails, channelId } = snippet;

  const [thumbnail, setThumbnail] = useState(null);
  const [viewCount, setViewCount] = useState(statistics.viewCount);

  const getViewCount = () => {
    const views = parseInt(viewCount);
    let quotient = Math.floor(views / 1000);
    if (quotient > 0 && quotient < 1000) {
      setViewCount(quotient + "K");
    } else if (quotient >= 1000) {
      quotient = Math.floor(quotient / 1000);
      setViewCount(quotient + "M");
    }
  };

  useEffect(() => {
    getViewCount();
    getChannelInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getChannelInfo = async () => {
    const data = await fetch(
      YOUTUBE_CHANNEL_API_FIRST_HALF +
        channelId +
        YOUTUBE_CHANNEL_API_SECOND_HALF
    );
    const json = await data.json();
    setThumbnail(json.items[0].snippet.thumbnails);
  };

  return (
    <div className="p-2 m-2 w-[290px] max-h-80">
      <img alt="thumbnail" src={thumbnails.medium.url} className="rounded-lg" />
      <div className="flex my-4">
        <div className="w-2/12">
          {thumbnail && (
            <img
              alt="channelLogo"
              src={thumbnail.default.url}
              className="w-10 rounded-full"
            />
          )}
        </div>
        <div className="w-10/12 ml-1">
          <div className="font-bold mb-1 max-h-12 line-clamp-2 pr-2">
            {title}
          </div>
          <div className="text-gray-400">
            <div>{channelTitle}</div>
            <div>{viewCount + " views"}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
