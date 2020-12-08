// make react and reactdom available
import React from "react";
import ReactDOM from "react-dom";
import "../composition/Sidebar.css";
import MainSideBar from "./MainSideBar";

function Sidebar(props) {
  return <div className="Sidebar-section">{props.children}</div>;
}

export default Sidebar;
