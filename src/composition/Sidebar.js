// make react and reactdom available
import React from "react";
import ReactDOM from "react-dom";
import "../composition/Sidebar.css";

function Sidebar(props) {
  return (
    <div className="Sidebar-section">
      <p>{props.children}</p>
    </div>
  );
}

export default Sidebar;
