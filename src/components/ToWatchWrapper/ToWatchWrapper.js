import React, { useState } from "react";
import PropTypes from "prop-types";
import Watched from "../Pages/Watched/Watched";

import clsx from "clsx";

import styles from "./to_watch_wrapper.module.scss";

const ToWatchWrapper = ({ items, className, children }) => {
  const getToWatch = () => {
    const toWatch = JSON.parse(localStorage.getItem("toWatch"));
    console.log(toWatch);
    return toWatch || [];
  };

  const [toWatch, setToWatch] = useState(getToWatch());

  //update toWatch removing itemId
  const removeItem = (itemId) => {
    setToWatch((toWatch, props) =>
      toWatch.filter((id) => {
        return id !== itemId;
      })
    );
    //update localStorage
    localStorage.setItem("toWatch", JSON.stringify(toWatch));
  };

  const clearList = () => {
    setToWatch(() => []);
    localStorage.setItem("toWatch", JSON.stringify(toWatch));
  };

  const getSelectedItems = () => {
    return items.filter((item) => toWatch.includes(item.id));
  };
  return (
    <Watched
      className={clsx(className, styles.root)}
      listTitle="Dying to see"
      removeItem={removeItem}
      list={getSelectedItems()} //array of whole items
      clearList={clearList}
    >
      {children}
    </Watched>
  );
};

ToWatchWrapper.PropsTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default ToWatchWrapper;
