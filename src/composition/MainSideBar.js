// this is the side bar that will show when on the home page
import React, { Component } from "react";
import ReactDOM from "react-dom";
import Folder from "./Folder";
import "../composition/MainSideBar.css";
import STORE from "../STORE";

class MainSideBar extends Component {
  static defaultProps = {
    STORE: {
      folders: [],
      notes: [],
    },
  };

  render() {
    return (
      <div className="MainSideBar">
        {STORE.folders.map((folder) => (
          <Folder key={folder.id} header={folder.name} />
        ))}

        <div>
          <button>Add folder</button>
        </div>
      </div>
    );
  }
}

export default MainSideBar;
