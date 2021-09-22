import React from "react";
import PropTypes from "prop-types";

//react router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import clsx from "clsx";

import styles from "./react_router_setup.module.scss";

//data
import musicals from "../data";

//pages
import Navbar from "../Pages/Navbar/Navbar";
import Home from "../Pages/Home/Home";
import Musical from "../Pages/Musical/Musical";
import Error from "../Pages/Error/Error";
import WatchedWrapper from "../WatchedWrapper/WatchedWrapper";
import ToWatchWrapper from "../ToWatchWrapper/ToWatchWrapper";

const ReactRouterSetup = ({ className, children }) => {
  return (
    <div className={clsx(className, styles.root)}>
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
      {children}
    </div>
  );
};

ReactRouterSetup.PropsTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default ReactRouterSetup;
