import React from "react";
import ReactDOM from "react-dom";
import "../composition/Notes.css";

function Notes() {
  return (
    <div className="Notes">
      <h3>Note 1</h3>
      <div className="Notes-info">
        <p>Date modified on 3rd Jan 2019</p>
        <button>Delete Note</button>
      </div>
    </div>
  );
}

export default Notes;
