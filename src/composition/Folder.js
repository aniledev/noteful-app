import React from "react";
import ReactDOM from "react-dom";
import STORE from "../STORE";

function Folder(props) {
  return (
    <div className="Folder">
      <h3>{props.name}</h3>
    </div>
  );
}
export default Folder;
