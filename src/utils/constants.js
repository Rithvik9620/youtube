const GOOGLE_API_KEY = "AIzaSyB81fLHVo9-9wFX0uDdh15O7qPLXFFfFIY";

export const YOUTUBE_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_CHANNEL_API_FIRST_HALF =
  "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=";

export const YOUTUBE_CHANNEL_API_SECOND_HALF = "&key=" + GOOGLE_API_KEY;
