import React from "react";
import { useSelector } from "react-redux";

const Comment = ({ data }) => {
  const { text, replies, name } = data;
  const darkTheme = useSelector((store) => store.app.darkTheme);
  return (
    <div
      className={
        !darkTheme
          ? "flex shadow-mg bg-gray-100 p-2 my-2"
          : "flex shadow-mg bg-black p-2 my-2 "
      }
    >
      <img
        className="w-12 h-12 "
        src="https://www.nicepng.com/png/detail/128-1280406_view-user-icon-png-user-circle-icon-png.png"
        alt="userimage"
      />
      <div className="px-3 ">
        <h3 className="font-bold">{name}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comment;
