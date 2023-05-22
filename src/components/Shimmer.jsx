import React from "react";

const Shimmer = () => {
  const arr = new Array(20).fill("");
  return (
    <div className="flex flex-wrap p-2">
      {arr.map((curr) => {
        {
          return <div className="bg-gray-300 h-[180px] w-72 p-2 m-2 "></div>;
        }
      })}
    </div>
  );
};

export default Shimmer;
