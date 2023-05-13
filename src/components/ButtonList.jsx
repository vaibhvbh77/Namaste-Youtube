import React from "react";
import Button from "./Button";

const ButtonList = () => {
  return (
    <div className="flex mt-2">
      <Button name="All" />
      <Button name="Fav" />
      <Button name="Songs" />
      <Button name="Hits" />
      <Button name="BollyWood" />
      <Button name="Movies" />
      <Button name="Friday-Hits" />
      <Button name="Games" />

      <Button name="Cricket" />

      <Button name="News" />
      <Button name="Sports" />
    </div>
  );
};

export default ButtonList;
