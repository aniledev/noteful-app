import React from "react";
import ReactDOM from "react-dom";
import "../composition/MainContent.css";
import Notes from "./Notes";

function MainContent() {
  return (
    <div className="Main-Content-Section">
      <Notes className="Notes"></Notes>
      <Notes className="Notes"></Notes>
      <Notes className="Notes"></Notes>
      <Notes className="Notes"></Notes>
      <Notes className="Notes"></Notes>
      <Notes className="Notes"></Notes>
      <div>
        <button>Add note</button>
      </div>
    </div>
  );
}

export default MainContent;
