import React from "react";

const Button = ({ name }) => {
  return (
    <button className="m-3 py-2 px-5 rounded-lg bg-gray-200">{name}</button>
  );
};

export default Button;
