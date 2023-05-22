import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import { GOOGLE_API_KEY } from "../utils/constants";
import Shimmer from "./Shimmer";
import ShimmerSearchPage from "./ShimmerSearchPage";

const SearchResult = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const darkTheme = useSelector((store) => store.app.darkTheme);
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
    setSearchResults(json.items);
    setLoading(false);
  };
  return (
    <>
      {isLoading ? (
        <ShimmerSearchPage />
      ) : (
        <div className={darkTheme ? "text-white" : ""}>
          {searchResults?.map((currVideo) => {
            return (
              <Link to={"/watch?v=" + currVideo.id.videoId}>
                <div className="p-2 flex h-50">
                  <img
                    className=" rounded-lg shadow-lg h-[300px]  w-[450px] "
                    alt="videopic"
                    src={currVideo.snippet.thumbnails.high.url}
                  ></img>
                  <div className="m-3 py-2">
                    <h1 className="p-2 m-2 text-xl">
                      {currVideo.snippet.title}
                    </h1>
                    <p className="text-xs">{currVideo.snippet.description}</p>
                    <div className="flex p-2 m-3">
                      <img
                        className="w-[40px] h-[40px] "
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
      )}
    </>
  );
};

export default SearchResult;
