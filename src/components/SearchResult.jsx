import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { GOOGLE_API_KEY } from "../utils/constants";

const SearchResult = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams] = useSearchParams();
  useEffect(() => {
    getSearchResults();
  }, [searchParams]);

  const getSearchResults = async () => {
    const data = await fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=" +
        searchParams.get("v") +
        "&key=" +
        GOOGLE_API_KEY
    );
    const json = await data.json();
    console.log(json.items);
    setSearchResults(json.items);
  };
  return (
    <div>
      {searchResults?.map((currVideo) => {
        return (
          <Link to={"/watch?v=" + currVideo.id.videoId}>
            <div className="p-2 flex h-50">
              <img
                className=" rounded-lg shadow-lg h-42  w-102 "
                alt="videopic"
                src={currVideo.snippet.thumbnails.high.url}
              ></img>
              <div className="m-3 p-2">
                <h1 className="p-2 m-2 text-2xl">{currVideo.snippet.title}</h1>
                <p>{currVideo.snippet.description}</p>
                <div className="flex p-2 m-3">
                  <img
                    className="w-12 h-12 "
                    src="https://www.nicepng.com/png/detail/128-1280406_view-user-icon-png-user-circle-icon-png.png"
                    alt=""
                  />
                  <h3 className="text-2xl p-2 m-2 ">
                    {currVideo.snippet.channelTitle}
                  </h3>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default SearchResult;
