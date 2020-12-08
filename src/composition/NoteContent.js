import React from "react";
import ReactDOM from "react-dom";
import "../composition/MainContent.css";
import Notes from "./Notes";
import "./NoteContent.css";

function NoteContent() {
  return (
    <div className="Note-Content">
      <Notes className="Notes"></Notes>
      <div>
        <p>
          This is the content for the note itself. Sunt laboris adipisicing
          laborum reprehenderit ipsum anim eu.
        </p>
      </div>
    </div>
  );
}

export default NoteContent;
