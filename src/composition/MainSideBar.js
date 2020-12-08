// this is the side bar that will show when on the home page
import React from "react";
import ReactDOM from "react-dom";
import Folder from "./Folder";
import "../composition/MainSideBar.css";

function MainSideBar() {
  return (
    <div className="MainSideBar">
      <Folder />
      <Folder />
      <Folder />
      <Folder />
      <Folder />
      <Folder />
      <div>
        <button>Add folder</button>
      </div>
    </div>
  );
}

export default MainSideBar;
