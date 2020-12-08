// make react and reactdom available
import React from "react";
import ReactDOM from "react-dom";
import "../composition/Main.css";

function Main(props) {
  return (
    <div className="Main-section">
      <p>{props.children}</p>
    </div>
  );
}

export default Main;
