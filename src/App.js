import React from "react";

function App() {
  return (
    <div className="App">
      <Sidebar>
        <Route path="/" component={MainSidebar} />
        <Route path="/FOO" component={FooSidebar} />
      </Sidebar>
      <Main>
        <Route path="/" component={MainMain} />
        <Route path="/Foo" component={FooMain} />
      </Main>
    </div>
  );
}

export default App;
