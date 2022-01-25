import React from "react";
import { Router } from "@reach/router";
import "./App.css";
import Main from "./views/Main";
import ViewAuthor from "./components/ViewAuthor";
import Update from "./views/Update";

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/" />
        <ViewAuthor path="/author/:id" />
        <Update path="/author/edit/:id" />
      </Router>
    </div>
  );
}

export default App;
