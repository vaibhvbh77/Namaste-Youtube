import React from "react";
import { useSelector } from "react-redux";

const ChatMessage = ({ name, text }) => {
  const darkTheme = useSelector((store) => store.app.darkTheme);
  return (
    <div className="flex m-2 items-center shadow-sm">
      <div>
        <img
          className="h-8 rounded-2xl"
          src="https://www.nicepng.com/png/detail/128-1280406_view-user-icon-png-user-circle-icon-png.png"
          alt="userimage"
        />
      </div>
      <div
        className={
          darkTheme ? " p-1 font-bold text-white" : " p-1 font-bold text-black"
        }
      >
        {name} :
      </div>
      <div className={darkTheme ? " p-1  text-white" : "  text-black text-sm"}>
        {text}
      </div>
    </div>
  );
};

export default ChatMessage;
