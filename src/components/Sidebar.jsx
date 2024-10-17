import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if(!isMenuOpen) return null;
  return (
    <div className="p-3 w-60">
      <div>
        <ul>
          <li>Home</li>
          <li>Shorts</li>
          <li>Subscriptions</li>
        </ul>
      </div>
      <div className="yt-explore">
        <h1 className="text-lg font-medium">Explore</h1>
        <ul>
          <li>Trending</li>
          <li>Shopping</li>
          <li>Music</li>
          <li>Movies</li>
          <li>Gaming</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
