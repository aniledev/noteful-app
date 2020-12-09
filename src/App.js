import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Route, Switch } from "react-router-dom";
import Sidebar from "./composition/Sidebar";
import Main from "./composition/Main";
import Header from "./composition/Header";
import MainSideBar from "./composition/MainSideBar";
import MainContent from "./composition/MainContent";
import FolderSideBar from "./composition/FolderSideBar";
import FolderContent from "./composition/FolderContent";
import NoteSideBar from "./composition/NoteSideBar";
import NoteContent from "./composition/NoteContent";
import NotFoundSideBar from "./NotFoundSideBar";
import "./App.css";
import NotFoundMain from "./NotFoundMain";

class App extends Component {
  // give the app default props to pass through
  static defaultProps = {
    STORE: {
      folders: [],
      notes: [],
    },
  };

  render() {
    const { STORE } = this.props;
    return (
      <div className="App">
        <Header className="Header">{}</Header>
        <div className="Main">
          <Sidebar className="Sidebar-section">
            <Switch>
              <Route exact path="/" component={MainSideBar} />
              <Route path="/folder" component={FolderSideBar} />
              <Route path="/note" component={NoteSideBar} />
              <Route component={NotFoundSideBar} />
            </Switch>
          </Sidebar>
          <Main className="Main-section">
            <Switch>
              <Route exact path="/" component={MainContent} />
              <Route path="/folder" component={FolderContent} />
              <Route path="/note" component={NoteContent} />
              <Route component={NotFoundMain} />
            </Switch>
          </Main>
        </div>
      </div>
    );
  }
}

// function App(props) {
//   return (
//     <div className="App">
//       <Header className="Header">{}</Header>
//       <div className="Main">
//         <Sidebar className="Sidebar-section">
//           <Route exact path="/" component={MainSideBar} />
//           <Route path="/folder" component={FolderSideBar} />
//           <Route path="/note" component={NoteSideBar} />
//         </Sidebar>
//         <Main className="Main-section">
//           <Route exact path="/" component={MainContent} />
//           <Route path="/folder" component={FolderContent} />
//           <Route path="/note" component={NoteContent} />
//         </Main>
//       </div>
//     </div>
//   );
// }

export default App;
