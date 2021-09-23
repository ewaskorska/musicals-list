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

  const toggleShowMore = (e) => {
    e.preventDefault();
    setShowMore(!showMore);
  };

  return (
    <div className={clsx(className, styles.root, styles.card)}>
      <section className={styles.photo}>
        <button className={styles.toWatch} onClick={handleToWatch}>
          <FaEye />
        </button>
        <Rating className={styles.rating} id={id}></Rating>
        <Link to={url}>
          <img src={img_small} alt={title} />
        </Link>
      </section>
      <Link className={clsx(styles.info)} to={url}>
        <header>
          <h4 className={styles.title}>{title}</h4>
        </header>
        <section className={styles.description}>
          <p>
            {showMore ? desc : truncate(desc, 20) + "... "}
            <button
              className={styles.showDesc}
              onClick={(e) => toggleShowMore(e)}
            >
              {showMore ? "show less" : "show more"}
            </button>
          </p>
        </section>
      </Link>

      {children}
    </div>
  );
};

ListItem.PropsTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default ListItem;
