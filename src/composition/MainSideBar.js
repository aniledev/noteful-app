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
    const { STORE } = this.props;
    return (
      <div className="MainSideBar">
        {STORE.folders.map((folder) => (
          <Folder key={this.props.id} header={this.props.name} />
        ))}

        <div>
          <button>Add folder</button>
        </div>
      </div>
    );
  }
}

export default MainSideBar;
