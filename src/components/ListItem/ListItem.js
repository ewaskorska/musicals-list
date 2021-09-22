import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Rating from "../Rating/Rating";
import { FaEye } from "react-icons/fa";

import clsx from "clsx";

import styles from "./list_item.module.scss";

const ListItem = ({ className, children, ...props }) => {
  const { id, title, img_small, desc } = props;
  const [showMore, setShowMore] = useState(false);
  const [isToWatch, setIsToWatch] = useState(false);

  const handleToWatch = () => {
    updateList("toWatch");
    setIsToWatch(!isToWatch);
  };

  const updateList = (listName) => {
    //get from localStorage
    let storageIds = localStorage.getItem(listName);

    //create if doesn't exist
    if (!storageIds) {
      storageIds = [];
    } else {
      storageIds = JSON.parse(storageIds);
    }
    //if id doesn't exist -> add
    if (!containsId(storageIds)) {
      localStorage.setItem(listName, JSON.stringify(addId(storageIds)));
    }
    //if exists -> remove
    else {
      localStorage.setItem(listName, JSON.stringify(removeId(storageIds)));
    }
    console.log(listName, localStorage.getItem(listName));
  };

  const addId = (items) => {
    return [...items, id];
  };

  const removeId = (items) => {
    return items.filter((itemId) => itemId !== id);
  };

  const containsId = (array) => {
    return array.includes(id);
  };

  const getTitleWithPlus = () => {
    return title.replaceAll(" ", "-");
  };

  const url = `/musical/${id}-${getTitleWithPlus()}`;

  function truncate(str, wordsNum) {
    return str.split(" ").splice(0, wordsNum).join(" ").replace(/,\s*$/, "");
  }

  const toggleShowMore = () => setShowMore(!showMore);

  return (
    <div className={clsx(className, styles.root)}>
      <button onClick={handleToWatch}>
        <FaEye />
      </button>
      <Rating id={id}></Rating>
      <Link to={url}>
        <article key={id}>
          <div>
            <img src={img_small} alt={title} />
          </div>
          <div>
            <header>
              <h4>{title}</h4>
            </header>
            {showMore ? (
              <>
                <p>{desc}</p>
              </>
            ) : (
              <>
                <p>{truncate(desc, 40) + "..."}</p>
              </>
            )}
          </div>
        </article>
      </Link>
      <span>{props.children}</span>
      <button onClick={() => toggleShowMore()}>
        {showMore ? "show less" : "show more"}
      </button>
      {children}
    </div>
  );
};

ListItem.PropsTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default ListItem;
