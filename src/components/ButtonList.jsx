import React from "react";
import ButtonsYt from "./ButtonsYt";

const ButtonList = () => {
  const list = [
    "All",
    "Music",
    "Trailers",
    "Podcast",
    "React routers",
    "React",
  ];
  return (
    <div className="flex">
      {list.map((item) => (
        <ButtonsYt name={item} key={item} />
      ))}
    </div>
  );
};

export default ButtonList;
