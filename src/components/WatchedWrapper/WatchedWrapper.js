import React, { useState } from "react";
import PropTypes from "prop-types";
import Watched from "../Pages/Watched/Watched";

import clsx from "clsx";

import styles from "./watched_wrapper.module.scss";

const WatchedWrapper = ({ items, className, children }) => {
  const getWatchedIds = () => {
    const parsedVal = localStorage.getItem("watched");
    const watched = JSON.parse(parsedVal === undefined ? null : parsedVal);
    return watched ? Object.keys(watched).map((el) => +el) : {};
  };

  const [watchedIds, setWatchedIds] = useState(getWatchedIds());

  //update watchedIds removing itemId
  const removeItem = (itemId) => {
    setWatchedIds((watchedIds, props) =>
      watchedIds.filter((id) => {
        return id !== itemId;
      })
    );
    //remove from localStorage item with given id
    const watched = JSON.parse(localStorage.getItem("watched"));
    delete watched[itemId];
    localStorage.setItem("watched", JSON.stringify(watched));
  };

  const clearList = () => {
    setWatchedIds(() => []);
    localStorage.setItem("watched", JSON.stringify({}));
  };

  const getSelectedItems = () => {
    return items.filter((item) => watchedIds.includes(item.id));
  };
  return (
    <Watched
      className={clsx(className, styles.root)}
      listTitle="Musicals I've seen"
      removeItem={removeItem}
      list={getSelectedItems()} //array of whole items
      clearList={clearList}
    >
      {children}
    </Watched>
  );
};

WatchedWrapper.PropsTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default WatchedWrapper;
