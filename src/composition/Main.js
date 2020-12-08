// make react and reactdom available
import React from "react";
import ReactDOM from "react-dom";
import "../composition/Main.css";
import MainContent from "./MainContent";

function Main(props) {
  return <div className="Main-section">{props.children}</div>;
}

export default Main;

// i want to show maincontent
