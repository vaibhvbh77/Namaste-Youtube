import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { SEARCH_SUGGESTIONS } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import { Link } from "react-router-dom";
const Head = () => {
  const disptach = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestion, setSearchSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const cacheSearch = useSelector((store) => store.search);

  const searchQueryHandler = (e) => {
    setSearchQuery(e.target.value);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      if (cacheSearch[searchQuery]) {
        setSearchSuggestions(cacheSearch[searchQuery]);
      } else {
        fetchSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const fetchSearchSuggestions = async () => {
    const data = await fetch(SEARCH_SUGGESTIONS + searchQuery);
    const json = await data.json();
    disptach(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
    setSearchSuggestions(json[1]);
  };

  const toogleMenu = () => {
    disptach(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg top-0 sticky bg-white  ">
      <div className="flex pt-1 px-3 m-3">
        <img
          onClick={toogleMenu}
          className="h-8 mx-3 cursor-pointer"
          src="https://static.vecteezy.com/system/resources/previews/002/292/406/original/hamburger-menu-line-icon-free-vector.jpg"
          alt="menu"
        />
        <img
          className="h-12 pb-4 mx-4 w-50"
          src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
          alt=""
        />
      </div>

      <div className="col-span-10 px-20 pl-25">
        <div>
          <input
            className="w-1/2 border border-grey-400 p-2 rounded-l-full px-2"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={searchQueryHandler}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
          />
          <Link to={"/search?s=" + searchQuery}>
            <button
              className="border border-grey-400 px-5 rounded-r-full py-2"
              type="button"
            >
              🔍
            </button>
          </Link>
        </div>
        <div>
          {searchSuggestion?.length > 0 && showSuggestions && (
            <div className="fixed bg-white py-2 px-2 w-[30rem] shadow-lg rounded-lg border border-gray-100">
              <ul>
                {searchSuggestion?.map((curr, i) => {
                  return (
                    // <Link to={"/search" + curr}>
                    <Link to={"/search?v=" + curr.trim()}>
                      <div className="flex">
                        <li
                          className=" cursor-pointer py-2 shadow-sm hover:bg-gray-100 "
                          onClick={() => setSearchQuery(curr)}
                          key={i}
                        >
                          🔍 {curr}
                        </li>
                      </div>
                    </Link>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="col-span-1">
        <img
          className="h-8"
          src="https://www.nicepng.com/png/detail/128-1280406_view-user-icon-png-user-circle-icon-png.png"
          alt="userimage"
        />
      </div>
    </div>
  );
};

export default Head;
