import React from "react";
import ReactDOM from "react-dom";
import Folder from "./Folder";
import "../composition/FolderSideBar.css";

function FolderSideBar() {
  return (
    <div className="FolderSideBar">
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
