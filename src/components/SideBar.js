import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  //Early Return
  if (!isMenuOpen) return null;

  return (
    <div className="p-2 m-2 shadow-lg w-48">
      <ul>
        <Link to="/">
          <li>🏡Home</li>
        </Link>
        <li>📻Shorts</li>
        <li>🎥Videos</li>
        <li>📷Live</li>
      </ul>
      <h1 className="text-lg font-bold pt-4">Subscriptions</h1>
      <ul>
        <li>Movies</li>
        <li>Sports</li>
        <li>Music</li>
        <li>News</li>
      </ul>
      <h1 className="text-lg font-bold pt-4">Watch Later</h1>
      <ul>
        <li>Movies</li>
        <li>Sports</li>
        <li>Music</li>
        <li>News</li>
      </ul>
    </div>
  );
};

export default SideBar;
