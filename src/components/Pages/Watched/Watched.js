import React from "react";
import PropTypes from "prop-types";
import WatchedItem from "../../WatchedItem/WatchedItem";
import List from "../../List/List";

import clsx from "clsx";

import styles from "./watched.module.scss";

const Watched = ({ listTitle, list, clearList, className, children }) => {
  const listItem = (id, props) => <WatchedItem key={id} props={props} />;
  return (
    <List
      className={clsx(className, styles.root)}
      items={list}
      listTitle={listTitle}
      listItem={listItem}
    >
      <button onClick={() => clearList()}>remove all</button>
      {children}
    </List>
  );
};

Watched.PropsTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Watched;
