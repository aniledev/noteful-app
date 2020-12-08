import React from "react";
import ReactDOM from "react-dom";
import Sidebar from "./composition/Sidebar";
import Main from "./composition/Main";
import Header from "./composition/Header";
import "./App.css";

function App(props) {
  return (
    <div className="App">
      <Header className="Header">{}</Header>
      <div className="Main">
        <Sidebar className="Sidebar-section">
          {/* <Route path="/" component={MainSidebar} />
        <Route path="/foo" component={FooSidebar} /> */}
          This is the left side content
        </Sidebar>
        <Main className="Main-section">
          {/* <Route path="/" component={MainMain} />
        <Route path="/Foo" component={FooMain} /> */}
          This is the right side content
        </Main>
      </div>
    </div>
  );
}

export default App;
