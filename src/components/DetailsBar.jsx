import React from "react";

const DetailsBar = ({ snippet }) => {
  return (
    <div className="flex p-2    ">
      <img
        src={snippet?.thumbnails?.default?.url}
        alt="Logo"
        className="h-10 w-10 rounded-lg -mx-1 "
      ></img>
      <h1 className="mx-10 p-2 rounded-lg bg-gray-200">
        {snippet?.channelTitle}
      </h1>
      <button className="rounded-lg bg-gray-200">Subscribe</button>

      <div className="mx-10">
        <button className="p-2  rounded-l-lg bg-gray-200">Like</button>
        <button className="p-2 rounded-r-lg bg-gray-200">Dislike</button>
      </div>
      <button className="p-2 rounded-lg bg-gray-200">Share</button>
    </div>
  );
};

export default DetailsBar;
