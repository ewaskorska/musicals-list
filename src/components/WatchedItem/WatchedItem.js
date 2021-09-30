import React from "react";
import PropTypes from "prop-types";
import ListItem from "../ListItem/ListItem";

import clsx from "clsx";

import styles from "./watched_item.module.scss";

const WatchedItem = ({ props, className, children }) => {
  return (
    <ListItem {...props} className={clsx(className, styles.root)}>
      {children}
    </ListItem>
  );
};

WatchedItem.PropsTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default WatchedItem;
