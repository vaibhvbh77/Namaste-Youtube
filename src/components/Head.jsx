import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkTheme, toggleMenu } from "../utils/appSlice";
import { SEARCH_SUGGESTIONS } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import { Link } from "react-router-dom";
const Head = () => {
  const disptach = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestion, setSearchSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const cacheSearch = useSelector((store) => store.search);
  const darkTheme = useSelector((store) => store.app.darkTheme);

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
    <div
      className={
        darkTheme
          ? "grid grid-flow-col p-2 m-0 shadow-lg top-0 sticky bg-black"
          : "grid grid-flow-col p-2 m-0 shadow-lg top-0 sticky bg-white "
      }
    >
      <div className="flex pt-1 px-3 m-3">
        <img
          onClick={toogleMenu}
          className="h-[40px] w-[60px] -mx-3 my-6 cursor-pointer"
          src={
            darkTheme
              ? "https://res.cloudinary.com/practicaldev/image/fetch/s--pwlGUbeq--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/gt5xtiacq4sjqmxuz2d7.gif"
              : "https://simpleweblearning.s3.us-west-2.amazonaws.com/2021/06/09000259/hamburger_menu3.gif"
          }
          alt="menu"
        />
        <Link to="/">
          <img
            className="h-[80px] w-[110px] pb-4 mx-4 my-4 w-50"
            src={
              darkTheme
                ? "https://www.cultofmac.com/wp-content/uploads/2018/01/YouTube-dark.jpg"
                : "https://cdn.vox-cdn.com/thumbor/6MyN91DqRPwnQlOhvqPEHV8paaI=/0x0:1680x1050/1400x1050/filters:focal(840x525:841x526):no_upscale()/cdn0.vox-cdn.com/uploads/chorus_asset/file/9130449/YTLogo_old_new_animation.gif"
            }
            alt=""
          />
        </Link>
      </div>

      <div className="col-span-10 px-20 pl-25">
        <div>
          <input
            className={
              darkTheme
                ? "bg-black w-1/2  border border-slate-500 p-2 rounded-l-full px-2 text-white shadow-lg"
                : "w-1/2 border border-grey-400 p-2 rounded-l-full px-2 bg-white"
            }
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={searchQueryHandler}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
          />
          <Link to={"/search?v=" + searchQuery}>
            <button
              className={
                darkTheme
                  ? "border border-slate-500 px-5 rounded-r-full py-2 "
                  : "border border-grey-400 px-5 rounded-r-full py-2"
              }
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
          className="h-8 my-3 rounded-2xl"
          src={
            !darkTheme
              ? "https://cdn-icons-png.flaticon.com/512/61/61205.png"
              : "https://www.nicepng.com/png/detail/128-1280406_view-user-icon-png-user-circle-icon-png.png"
          }
          alt="userimage"
        />
      </div>
      <div className="text-gray-500 my-2 ">
        Dark Theme{" "}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mx-2"
          onClick={() => {
            disptach(toggleDarkTheme());
          }}
        >
          {darkTheme == false ? <div>OFF </div> : <div>ON</div>}
        </button>
      </div>
    </div>
  );
};

export default Head;
