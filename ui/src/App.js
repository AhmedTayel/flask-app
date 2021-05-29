import "./App.css";
import SignIn from "./components/signin";
import Home from "./components/home";
import history from "./history";

import React, { Component } from "react";

import { Redirect, Router, Switch, Route } from "react-router-dom";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      signedIn: false,
    };
  }

  toggle() {
    history.push("/home/");
  }
  render() {
    return (
      <Router history={history}>
        <div>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/">
              <Redirect from="/" to="/signin" />
            </Route>
            <Route exact path="/signin">
              <SignIn signIn={() => this.toggle()} />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
