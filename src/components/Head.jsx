import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
const Head = () => {
  const disptach = useDispatch();

  const toogleMenu = () => {
    disptach(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg">
      <div className="flex pt-1">
        <img
          onClick={toogleMenu}
          className="h-8 mx-3 cursor-pointer"
          src="https://static.vecteezy.com/system/resources/previews/002/292/406/original/hamburger-menu-line-icon-free-vector.jpg"
          alt="menu"
        />
        <img
          className="h-14 pb-4"
          src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
          alt=""
        />
      </div>

      <div className="col-span-10 px-20">
        <input
          className="w-1/2 border border-grey-400 p-2 rounded-l-full"
          type="text"
          placeholder="Search"
        />
        <button
          className="border border-grey-400 px-5 rounded-r-full py-2"
          type="button"
        >
          🔍
        </button>
      </div>

      <div className="col-span-1">
        <img
          className="h-8"
          src="https://www.nicepng.com/png/detail/128-1280406_view-user-icon-png-user-circle-icon-png.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Head;
