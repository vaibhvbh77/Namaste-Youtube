import React from "react";

const ShimmerSearchPage = () => {
  const arr = new Array(20).fill("");
  return (
    <div className="m-2 p-2">
      {arr.map((curr) => {
        {
          return <div className="bg-gray-300 h-[180px] w-72 p-2 m-2 "></div>;
        }
      })}
    </div>
  );
};

export default ShimmerSearchPage;
