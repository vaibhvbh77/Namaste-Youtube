import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="shadow-lg p-5 w-48 my-2 ">
      <ul className="my-2">
        <Link to="/">
          <li className="my-3">Home</li>
        </Link>
        <li className="my-3">Shorts</li>
        <li className="my-3"> Videos</li>
        <li className="my-3">Live</li>
      </ul>

      <h1 className="font-bold pt-9 py-2">Subscribe</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Movies</li>
        <li>Gaming</li>
      </ul>

      <h1 className="font-bold pt-9 py-2">Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Movies</li>
        <li>Gaming</li>
      </ul>
    </div>
  );
};

export default SideBar;
