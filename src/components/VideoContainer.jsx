import React, { useEffect, useState } from "react";
import { YOUTUB_API_KEY } from "../utils/constants";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    videoData();
  }, []);
  const videoData = async () => {
    const data = await fetch(YOUTUB_API_KEY);
    const json = await data.json();
    setVideos(json.items);
  };
  return (
    <div className="grid grid-cols-4">
      {videos.map((video) => (
        <VideoCard info={video} key={video.id} />
        
      ))}
    </div>
  );
};

export default VideoContainer;
