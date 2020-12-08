import React from "react";
import ReactDOM from "react-dom";
import { Route } from "react-router-dom";
import Sidebar from "./composition/Sidebar";
import Main from "./composition/Main";
import Header from "./composition/Header";
import MainSideBar from "./composition/MainSideBar";
import MainContent from "./composition/MainContent";
import FolderSideBar from "./composition/FolderSideBar";
import FolderContent from "./composition/FolderContent";
import NoteSideBar from "./composition/NoteSideBar";
import NoteContent from "./composition/NoteContent";
import "./App.css";

function App(props) {
  return (
    <div className="App">
      <Header className="Header">{}</Header>
      <div className="Main">
        <Sidebar className="Sidebar-section">
          <Route exact path="/" component={MainSideBar} />
          <Route path="/folder" component={FolderSideBar} />
          <Route path="/note" component={NoteSideBar} />
        </Sidebar>
        <Main className="Main-section">
          <Route exact path="/" component={MainContent} />
          <Route path="/folder" component={FolderContent} />
          <Route path="/note" component={NoteContent} />
        </Main>
      </div>
    </div>
  );
}

export default App;
