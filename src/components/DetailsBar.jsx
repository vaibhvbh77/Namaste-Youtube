import React from "react";
import { useSelector } from "react-redux";

const DetailsBar = ({ snippet }) => {
  const darkTheme = useSelector((store) => store.app.darkTheme);
  return (
    <div className={!darkTheme ? "flex p-1 " : "flex p-1 bg-black "}>
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
              : "rounded-lg  px-3 mx-3 my-2"
          }
        >
          {snippet?.channelTitle}
        </h1>
        <div className="flex">
          <button
            className={
              !darkTheme
                ? "rounded-lg bg-gray-200 p-2 m-2"
                : "rounded-lg bg-red-700 p-2 m-2"
            }
          >
            Subscribe
          </button>
          <div className="mx-10 ">
            <button
              className={
                !darkTheme
                  ? "rounded-lg bg-gray-200 m-2 p-2"
                  : "rounded-lg bg-red-700 m-2 p-2"
              }
            >
              Like
            </button>
            <button
              className={
                !darkTheme
                  ? "rounded-lg bg-gray-200 m-2 p-2"
                  : "rounded-lg bg-red-700 p-2 m-2"
              }
            >
              Dislike
            </button>
          </div>
          <button
            className={
              !darkTheme
                ? "rounded-lg bg-gray-200 p-2 m-2"
                : "rounded-lg bg-red-700 p-2 m-2"
            }
          >
            Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailsBar;
