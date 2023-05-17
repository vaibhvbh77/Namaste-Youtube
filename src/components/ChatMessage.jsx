import React from "react";

const ChatMessage = ({ name, text }) => {
  return (
    <div className="flex m-2 items-center shadow-sm">
      <div>
        <img
          className="h-8"
          src="https://www.nicepng.com/png/detail/128-1280406_view-user-icon-png-user-circle-icon-png.png"
          alt="userimage"
        />
      </div>
      <div className="px-4 font-bold text-black">{name} : </div>
      <div className="text-black"> {text}</div>
    </div>
  );
};

export default ChatMessage;
