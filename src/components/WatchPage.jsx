import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";

import { API_VIDEO_DETAIL, GOOGLE_API_KEY } from "../utils/constants";
import CommentsContainer from "./CommentsContainer";
import DetailsBar from "./DetailsBar";
import LiveChat from "./LiveChat";
const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const [videoDetails, setVideoDetails] = useState({});
  const darkTheme = useSelector((store) => store.app.darkTheme);
  const [showDescription, setShowDescrition] = useState(false);
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  useEffect(() => {
    getVideDataFromYoutube();
  }, []);
  const getVideDataFromYoutube = async () => {
    const data = await fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=" +
        searchParams.get("v") +
        "&key=" +
        GOOGLE_API_KEY
    );
    const json = await data.json();
    const { snippet, statistics } = json.items[0];

    const videDetailPageObj = {
      snippet,
      statistics,
    };
    setVideoDetails(videDetailPageObj);
  };

  return (
    <div
      className={
        !darkTheme
          ? "px-6 flex flex-col "
          : "px-5 flex flex-col bg-black text-white "
      }
      style={{ width: "1000px" }}
    >
      <div className="px-5 flex w-full">
        <div className="">
          <iframe
            width="900"
            height="500"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full">
          <LiveChat />
        </div>
      </div>
      <DetailsBar snippet={videoDetails.snippet} />
      <div className={darkTheme ? "bg-black" : "bg-gray-100"}>
        <div className="text-3xl">{videoDetails?.snippet?.title}</div>
        <div className="shadow-lg bg-transparent rounded">
          <h3>{videoDetails?.statistics?.viewCount} Views</h3>
          {/* <p className={darkTheme ? "shadow-lg" : "bg-black"}> */}
          {showDescription ? (
            <p>{videoDetails?.snippet?.description}</p>
          ) : (
            <p>
              {videoDetails?.snippet?.description?.slice(0, 200)}
              <br />
            </p>
          )}
          <button
            className={
              darkTheme
                ? "shadow-mg bg-red-700 rounded p-1 m-1 text-white"
                : "shadow-mg bg-gray-200 rounded p-1 m-1"
            }
            onClick={() => setShowDescrition((prev) => !prev)}
          >
            See More
          </button>
        </div>
      </div>

      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
