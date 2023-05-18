import React from "react";
import { useSelector } from "react-redux";

const DetailsBar = ({ snippet }) => {
  const darkTheme = useSelector((store) => store.app.darkTheme);
  return (
    <div className={!darkTheme ? "flex p-2 " : "flex p-2 bg-black "}>
      <img
        src={snippet?.thumbnails?.default?.url}
        alt="Logo"
        className="h-10 w-10 rounded-lg -mx-1 "
      ></img>
      <div className="flex px-3 mx-3">
        {" "}
        <h1
          className={
            !darkTheme
              ? "rounded-lg bg-gray-200 px-3 mx-3 my-2"
              : "rounded-lg bg-black px-3 mx-3 my-2"
          }
        >
          {snippet?.channelTitle}
        </h1>
        <button
          className={
            !darkTheme
              ? "rounded-lg bg-gray-200 px-3 mx-3"
              : "rounded-lg bg-black px-3 mx-3"
          }
        >
          Subscribe
        </button>
        <div className="mx-10 ">
          <button
            className={
              !darkTheme
                ? "rounded-lg bg-gray-200 my-2"
                : "rounded-lg bg-black my-2 mx-2"
            }
          >
            Like
          </button>
          <button
            className={
              !darkTheme
                ? "rounded-lg bg-gray-200 mx-2"
                : "rounded-lg bg-black mx-2"
            }
          >
            Dislike
          </button>
        </div>
        <button
          className={
            !darkTheme ? "rounded-lg bg-gray-200" : "rounded-lg bg-black"
          }
        >
          Share
        </button>
      </div>
    </div>
  );
};

export default DetailsBar;
