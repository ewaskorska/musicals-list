//react
import React from "react";
import items from "./data";

//react router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//pages
import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";
import Musical from "./Pages/Musical";
import Error from "./Pages/Error";
import WatchedWrapper from "./WatchedWrapper";
import ToWatchWrapper from "./ToWatchWrapper";

const ReactRouterSetup = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home items={items} />
        </Route>
        <Route path="/musical/:params">
          <Musical items={items} />
        </Route>
        <Route path="/watched">
          <WatchedWrapper items={items} />
        </Route>
        <Route path="/to-watch">
          <ToWatchWrapper items={items} />
        </Route>
        <Route path="*">
          <Error></Error>
        </Route>
      </Switch>
    </Router>
  );
};

export default ReactRouterSetup;
