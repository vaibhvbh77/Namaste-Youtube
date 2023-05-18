import React from "react";
import { useSelector } from "react-redux";

const Button = ({ name }) => {
  const darkTheme = useSelector((store) => store.app.darkTheme);
  return (
    <button
      className={
        darkTheme
          ? "m-3 py-1 px-5 rounded-lg bg-red-600 text-white"
          : "m-3 py-1 px-5 rounded-lg bg-gray-200"
      }
    >
      {name}
    </button>
  );
};

export default Button;
