import React from "react";
import PropTypes from "prop-types";

import clsx from "clsx";

import styles from "./tags.module.scss";

const Tags = ({ filterItems, tags, className, children }) => {
  return (
    <div className={clsx(className, styles.root)}>
      {tags.map((tag, index) => {
        return (
          <button type="button" key={index} onClick={() => filterItems(tag)}>
            {tag}
          </button>
        );
      })}
      {children}
    </div>
  );
};

Tags.PropsTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Tags;
