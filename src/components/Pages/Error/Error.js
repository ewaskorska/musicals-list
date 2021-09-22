import React from "react";
import PropTypes from "prop-types";

import clsx from "clsx";

import styles from "./error.module.scss";

const Error = ({ className, children }) => {
  const message = "Please, come back to the home page ;(";
  return (
    <div className={clsx(className, styles.root)}>
      <h2>{message}</h2>
      {children}
    </div>
  );
};

Error.PropsTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Error;
