import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const darkTheme = useSelector((store) => store.app.darkTheme);
  return (
    <div
      className={
        !darkTheme
          ? "shadow-lg p-5 w-48 -my-2"
          : "shadow-lg p-5 w-48 -my-2 bg-black text-white"
      }
    >
      <ul className="my-2">
        <Link to={"/search?v=" + "Home"}>
          <li className="my-3">Home</li>
        </Link>
        <Link to={"/search?v=" + "Shorts"}>
          <li className="my-3">Shorts</li>
        </Link>
        <Link to={"/search?v=" + "Videos"}>
          <li className="my-3">Videos</li>
        </Link>
        <Link to={"/search?v=" + "Live"}>
          <li className="my-3">Live</li>
        </Link>
      </ul>

      <h1 className="font-bold pt-9 py-2">Subscribe</h1>
      <ul>
        <Link to={"/search?v=" + "Music"}>
          <li className="my-3">Music</li>
        </Link>

        <Link to={"/search?v=" + "Sports"}>
          <li className="my-3">Sports</li>
        </Link>

        <Link to={"/search?v=" + "Movies"}>
          <li className="my-3">Movies</li>
        </Link>
        <Link to={"/search?v=" + "Gaming"}>
          <li className="my-3">Gaming</li>
        </Link>
      </ul>

      <h1 className="font-bold pt-9 py-2">Watch Later</h1>
      <ul>
        <Link to={"/search?v=" + "Music"}>
          <li className="my-3">Music</li>
        </Link>

        <Link to={"/search?v=" + "Sports"}>
          <li className="my-3">Sports</li>
        </Link>

        <Link to={"/search?v=" + "Movies"}>
          <li className="my-3">Movies</li>
        </Link>
        <Link to={"/search?v=" + "Gaming"}>
          <li className="my-3">Gaming</li>
        </Link>
      </ul>
    </div>
  );
};

export default SideBar;
