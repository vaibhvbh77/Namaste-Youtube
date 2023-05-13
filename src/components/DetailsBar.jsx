import React from "react";

const DetailsBar = ({ snippet }) => {
  return (
    <div className="flex p-2    ">
      <img
        src={snippet?.thumbnails?.default?.url}
        alt="Logo"
        className="h-10 w-10 rounded-lg mx-10"
      ></img>
      <h1 className="mx-10">{snippet?.channelTitle}</h1>
      <button>Subscribe</button>

      <div className="mx-10">
        <button>Like</button>
        <button>Dislike</button>
      </div>
      <button>Share</button>
    </div>
  );
};

export default DetailsBar;
