import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
const Head = () => {
  const disptach = useDispatch();

  const toogleMenu = () => {
    disptach(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex ">
        <img
          onClick={toogleMenu}
          className="h-8 mx-3 cursor-pointer"
          src="https://static.vecteezy.com/system/resources/previews/002/292/406/original/hamburger-menu-line-icon-free-vector.jpg"
          alt="menu"
        />
        <img
          className="h-8"
          src="data:image/png;base64,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"
          alt=""
        />
      </div>

      <div className="col-span-10 px-12">
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
