import React from "react";
import ReactDOM from "react-dom";
import "../composition/FolderContent.css";
import Notes from "./Notes";

function FolderContent() {
  return (
    <div className="Main-Content-Section">
      This is where each note would go based on the folder selected
      <Notes className="Notes"></Notes>
      <Notes className="Notes"></Notes>
      <div>
        <button>Add note</button>
      </div>
    </div>
  );
}

export default FolderContent;

// change this to reflect folder content and not main content evenhough they display the same
