import React from "react";
import SideBar from "./SideBar";
import MainContainer from "./MainContainer";

const Body = () => {
  return (
    <div className="flex">
      <h1>Body</h1>
      <SideBar />
      <MainContainer />
    </div>
  );
};

export default Body;
