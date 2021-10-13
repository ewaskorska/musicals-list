import React, { useState } from "react";
import PropTypes from "prop-types";

import clsx from "clsx";

import styles from "./tags.module.scss";

const Tags = ({ filterItems, tags, className, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={clsx(className, styles.root, `${isOpen ? styles.open : ""}`)}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className={styles.filters}>
        <div className={styles.searchbox}>
          <i class="fas fa-search"></i>
          <input type="text" />
        </div>
        <i class="fas fa-angle-right"></i>
      </div>
      <div className={styles.tags}>
        {tags.map((tag, index) => {
          return (
            <button type="button" key={index} onClick={() => filterItems(tag)}>
              {tag}
            </button>
          );
        })}
      </div>
      {children}
    </div>
  );
};

Tags.PropsTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Tags;
