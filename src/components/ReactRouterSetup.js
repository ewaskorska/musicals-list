//react
import React from "react";
import musicals from "./data";

//react router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//pages
import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";
import Musical from "./Pages/Musical";
import Error from "./Pages/Error";
import WatchedWrapper from "./WatchedWrapper";
import ToWatchWrapper from "./ToWatchWrapper";

//styles
import "../styles/styles.scss";

const ReactRouterSetup = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home items={musicals} />
        </Route>
        <Route path="/musical/:params">
          <Musical items={musicals} />
        </Route>
        <Route path="/watched">
          <WatchedWrapper items={musicals} />
        </Route>
        <Route path="/to-watch">
          <ToWatchWrapper items={musicals} />
        </Route>
        <Route path="*">
          <Error></Error>
        </Route>
      </Switch>
    </Router>
  );
};

export default ReactRouterSetup;
