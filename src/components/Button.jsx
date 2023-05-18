import React from "react";
import { useSelector } from "react-redux";

const Button = ({ name }) => {
  const darkTheme = useSelector((store) => store.app.darkTheme);
  return (
    <button
      className={
        darkTheme
          ? "m-3 py-2 px-5 rounded-lg bg-gray-300"
          : "m-3 py-2 px-5 rounded-lg bg-gray-200"
      }
    >
      {name}
    </button>
  );
};

export default Button;
