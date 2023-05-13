import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { thumbnails, title, channelTitle } = snippet;

  return (
    <div className="p-2 m-2 w-72 ">
      <img src={thumbnails.medium.url} className="rounded-lg" alt="" />
      <div className="">
        <ul>
          <li className="font-bold py-2">{title}</li>
          <li>{channelTitle}</li>
          <li>{statistics.viewCount} Views</li>
        </ul>
      </div>
    </div>
  );
};

export default VideoCard;
