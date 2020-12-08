// this is the sidebar that will show when user has clieked into a folder
// this is the side bar that will show when on the home page
import React from "react";
import ReactDOM from "react-dom";
import "../composition/FolderSideBar.css";
import Folder from "./Folder";

function FolderSideBar() {
  return (
    <div className="FolderSideBar">
      Highlight the selcted folder based on the url
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

export default FolderSideBar;
