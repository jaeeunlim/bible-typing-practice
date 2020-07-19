import React from "react";
import { Route, Switch } from "react-router-dom";
import Typing from "./Typing";
import Scriptures from "./Scriptures";
import Sidebar from "./components/Sidebar";
import LanguageMenu from "./components/LanguageMenu";
import { Language } from "./utils/translations";

import "./css/sidebar-styles.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: Language.ENGLISH
    };
  }

  setLanguage = lang => {
    this.setState({ language: lang });
  };

  currentYear = new Date().getFullYear();

  render() {
    return (
      <div id="App">
        <LanguageMenu setLanguage={this.setLanguage} />
        <Sidebar
          pageWrapId={"page-wrap"}
          outerContainerId={"App"}
          language={this.state.language}
        />
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <Scriptures {...props} language={this.state.language} />
            )}
          />
          <Route
            exact
            path="/typing/:testament/:book/:chapter/:verse/:text"
            render={props => (
              <Typing {...props} language={this.state.language} />
            )}
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
