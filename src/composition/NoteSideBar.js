// this is the side bar that will show when on the home page
import React from "react";
import ReactDOM from "react-dom";
import Folder from "./Folder";
import "../composition/NoteSideBar.css";

function NoteSideBar() {
  return (
    <div className="NoteSideBar">
      <button>Go Back</button>
      <h2>Current Folder #</h2>
    </div>
  );
}

export default NoteSideBar;
