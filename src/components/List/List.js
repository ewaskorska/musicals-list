import React from "react";
import PropTypes from "prop-types";

import clsx from "clsx";

import styles from "./list.module.scss";

const List = ({ items, listTitle, listItem, className, children }) => {
  return (
    <div className={clsx(className, styles.root)} id="watched">
      <div className={styles.header}>
        <h2 className={styles.title}>{listTitle}</h2>
      </div>
      {children}
      {items.map((item) => {
        return listItem(item.id, item);
      })}
    </div>
  );
};

List.PropsTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default List;
