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
          <div className="text-gray-500">
            <li>{channelTitle}</li>
            <li>{statistics.viewCount} Views</li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default VideoCard;
