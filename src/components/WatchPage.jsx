import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import { API_VIDEO_DETAIL, GOOGLE_API_KEY } from "../utils/constants";
import DetailsBar from "./DetailsBar";
const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const [videoDetails, setVideoDetails] = useState({});
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
    console.log(snippet);
    console.log(statistics);
    const videDetailPageObj = {
      snippet,
      statistics,
    };
    setVideoDetails(videDetailPageObj);
  };

  return (
    <div className="px-5">
      <iframe
        width="1200"
        height="500"
        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <DetailsBar snippet={videoDetails.snippet} />
      <div className="text-3xl">{videoDetails?.snippet?.title}</div>
      <div className="shadow-lg">
        <h3>{videoDetails?.statistics?.viewCount} Views</h3>
        {videoDetails?.snippet?.description}
      </div>
    </div>
  );
};

export default WatchPage;
