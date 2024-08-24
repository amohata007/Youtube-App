import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = [
    "All",
    "Music",
    "Movies",
    "Games",
    "Comedy",
    "Sports",
    "Education",
    "Funny",
    "Love",
    "News",
    "Devotional",
  ];
  return (
    <div className="flex">
      {list.map((li, index) => (
        <Button key={index} name={li} />
      ))}
    </div>
  );
};

export default ButtonList;
