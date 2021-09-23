import React from "react";
import PropTypes from "prop-types";
import ListItem from "../ListItem/ListItem";
import { FaTrashAlt } from "react-icons/fa";

import clsx from "clsx";

import styles from "./watched_item.module.scss";

const WatchedItem = ({ props, className, children }) => {
  return (
    <ListItem {...props} className={clsx(className, styles.root)}>
      <button onClick={() => props.removeItem(props.id)}>
        <FaTrashAlt />
      </button>
      {children}
    </ListItem>
  );
};

WatchedItem.PropsTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default WatchedItem;
