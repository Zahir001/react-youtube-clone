import React from "react";

const VideoCard = ({ info }) => {
  console.log(info);
  const { title, thumbnails, channelTitle } = info.snippet;
  const { statistics } = info;
  const formatNumber = (num) => {
    if (num >= 1000000) {
      return Math.floor(num / 1000000) + "M";
    } else if (num >= 1000) {
      return Math.floor(num / 1000) + "K";
    } else {
      return num.toString();
    }
  };
  return (
    <div className="m-2">
      <img src={thumbnails.medium.url} alt="video" className="rounded-lg"/>
      
      <ul>
        <li className="font-medium text-base">{title}</li>
        <li className="text-slate-500 text-sm">{channelTitle}</li>
        <li className="text-slate-500 text-sm">
          {formatNumber(statistics.viewCount)} views
        </li>
      </ul>
    </div>
  );
};

export default VideoCard;
