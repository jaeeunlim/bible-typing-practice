import React from "react";
import { Route, Switch } from "react-router-dom";
import Typing from "./Typing";
import Scriptures from "./Scriptures";
import Sidebar from "./components/Sidebar";

import "./css/sidebar-styles.css";

export default class App extends React.Component {
  currentYear = new Date().getFullYear();
  
  render() {
    return (
      <div id="App">
        <Sidebar pageWrapId={"page-wrap"} outerContainerId={"App"} />
        <Switch>
          <Route exact path="/" component={Scriptures} />
          <Route
            exact
            path="/typing/:testament/:book/:chapter/:verse/:text"
            component={Typing}
          />
        </Switch>
        <div id="page-wrap" />
        <footer>
          <small>&copy; Copyright {this.currentYear}, Esther Lim</small>
        </footer>
      </div>
    );
  }
}
