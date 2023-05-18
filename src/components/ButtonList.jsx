import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "./Button";

const ButtonList = () => {
  const darkTheme = useSelector((store) => store.app.darkTheme);
  return (
    <div className={!darkTheme ? "flex  mb-4" : "flex bg-black"}>
      <Link to={"/search?v=" + "ALL"}>
        <Button name="All" />
      </Link>
      <Link to={"/search?v=" + "Hits"}>
        <Button name="Hits" />
      </Link>
      <Link to={"/search?v=" + "Songs"}>
        <Button name="Songs" />
      </Link>
      <Link to={"/search?v=" + "Movies"}>
        <Button name="Movies" />
      </Link>
      <Link to={"/search?v=" + "News"}>
        <Button name="News" />
      </Link>
      <Link to={"/search?v=" + "Sports"}>
        <Button name="Sports" />
      </Link>
      <Link to={"/search?v=" + "Cricket"}>
        <Button name="Cricket" />
      </Link>
      <Link to={"/search?v=" + "Games"}>
        <Button name="Games" />
      </Link>
      <Link to={"/search?v=" + "BollyWood"}>
        <Button name="BollyWood" />
      </Link>
    </div>
  );
};

export default ButtonList;
