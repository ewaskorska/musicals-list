import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";

import clsx from "clsx";

import styles from "./tags.module.scss";

const Tags = ({ filterItems, tags, className, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const filterRef = useRef();

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  React.useEffect(() => {
    const results = tags.filter((tag) =>
      tag.toLowerCase().includes(searchTerm)
    );

    if (!arraysEqualRespectOrder(results, searchResults))
      setSearchResults(() => results); //
    console.log("searchResults", searchResults);
  }, [searchTerm, searchResults, tags]);

  const arraysEqualRespectOrder = (a, b) => {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;

    for (var i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  };

  const closeIfOutside = (event) => {
    //set false only if outside of element
    if (!filterRef?.current?.contains(event.target)) {
      setIsOpen(() => false);
    }
  };

  useEffect(() => {
    document.addEventListener("touchend", (event) => closeIfOutside(event));
    return () => {
      document.removeEventListener("touchend", (event) =>
        closeIfOutside(event)
      );
    };
  });

  return (
    <div
      className={clsx(className, styles.root, `${isOpen ? styles.open : ""}`)}
      onClick={() => setIsOpen(!isOpen)}
      ref={filterRef}
    >
      <div className={styles.filters}>
        <div className={styles.searchbox}>
          <i className="fas fa-search"></i>
          <input
            type="text"
            placeholder={"search"}
            value={searchTerm}
            onChange={handleChange}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
        <i className="fas fa-angle-right"></i>
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
