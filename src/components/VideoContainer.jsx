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
    setListVideos(json.items);
  };
  if (listVideos.length == 0) return "";
  return (
    <div className="flex flex-wrap mx-15 p-5 -mt-3">
      {listVideos.map((curr) => {
        return (
          <Link key={curr.id} to={"/watch?v=" + curr.id}>
            <VideoCard info={curr} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
