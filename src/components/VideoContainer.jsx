import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API } from "../utils/constants";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [listVideos, setListVideos] = useState([]);
  useEffect(() => {
    getDataFromYoutube();
  }, []);
  const getDataFromYoutube = async () => {
    const data = await fetch(API);
    const json = await data.json();
    console.log(json);
    setListVideos(json.items);
  };
  if (listVideos.length == 0) return "";
  return (
    <div className="flex flex-wrap">
      {listVideos.map((curr) => {
        return (
          <Link to={"/watch?v=" + curr.id}>
            <VideoCard info={curr} key={curr.id} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
