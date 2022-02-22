/** @format */

import React, {Component} from "react";
// import {Route, Switch} from "react-router-dom";

import "./App.scss";
// import Navbar from "./Components/nav-bar/nav-bar";
import Main from "./Components/main/main";
class App extends Component {
  // To the DOM
  render() {
    return (
      <div className="App d-flex flex-column min-vh-100">
        <br />
        <header>{/* <Navbar /> */} </header>
        <main className="container-fluid flex-fill p-0 m-0">
          <Main />
        </main>
        <footer></footer>
      </div>
    );
  }
}

export default App;
