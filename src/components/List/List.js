import React from "react";
import PropTypes from "prop-types";

import clsx from "clsx";

import styles from "./list.module.scss";

const List = ({ items, listTitle, listItem, className, children }) => {
  return (
    <div className={clsx(className, styles.root)}>
      <div>
        <h2>{listTitle}</h2>
        <div className={styles.underline}></div>
      </div>
      {children}
      {items.map((item) => listItem(item.id, { ...item }))}
    </div>
  );
};

List.PropsTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default List;
