//react
import React from "react";
// import ReactDOM from "react-dom";

//react router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//pages
import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";
import Musical from "./Pages/Musical";
import Error from "./Pages/Error";
import ContextList from "./ContextList";

const ReactRouterSetup = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/musical">
          <Musical />
        </Route>
        <Route path="/watched">
          <ContextList />
        </Route>
        <Route path="/to-watch">
          <ContextList />
        </Route>
        <Route path="*">
          <Error></Error>
        </Route>
      </Switch>
    </Router>
  );
};

export default ReactRouterSetup;
