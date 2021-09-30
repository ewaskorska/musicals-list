import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { FaHeart } from "react-icons/fa";

import clsx from "clsx";

import styles from "./rating.module.scss";

const NUM_OF_HEARTS = 5;

const Rating = ({ id, className, children }) => {
  const getRating = () => {
    const parsedVal = localStorage.getItem("watched");
    const watched = JSON.parse(parsedVal === undefined ? null : parsedVal);
    let rate = -1;
    if (watched) {
      for (const [itemId, itemRating] of Object.entries(watched)) {
        if (+itemId === id) {
          rate = +itemRating;
        }
      }
    }
    return rate;
  };
  const [rating, setRating] = useState(getRating());

  const removeFromToWatch = () => {
    const toWatch = JSON.parse(localStorage.getItem("toWatch"));
    const updated = toWatch.filter((itemId) => id !== itemId);
    localStorage.setItem("toWatch", JSON.stringify(updated));
  };

  useEffect(() => {
    if (rating === -1) {
      //remove movie from storage
      const watched = JSON.parse(localStorage.getItem("watched")) || {};
      delete watched[id];
      localStorage.setItem("watched", JSON.stringify(watched));
    } else {
      //add to storage
      const parsedVal = localStorage.getItem("watched");
      const watched = JSON.parse(parsedVal === undefined ? "{}" : parsedVal);
      watched[id] = rating;
      localStorage.setItem("watched", JSON.stringify(watched));
    }
    console.log(localStorage);
  }, [rating]);

  const handleClick = (ratingValue) => {
    //close modal
    setIsOpen(() => false);

    //get previous rating for id
    const prevRating = getRating();
    if (prevRating === ratingValue) {
      setRating(-1);
      return;
    }
    setRating(ratingValue);
    //remove from toWatch
    console.log(localStorage.getItem("toWatch"));
    removeFromToWatch();
    console.log(localStorage.getItem("toWatch"));
  };

  const [isOpen, setIsOpen] = useState(false);

  const ratingRef = useRef();

  const closeIfOutside = (event) => {
    //set false only if outside of element
    if (!ratingRef?.current?.contains(event.target)) {
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
      className={clsx(
        className,
        styles.root,
        `${isOpen ? styles.open : styles.collapsed}`
      )}
      ref={ratingRef}
    >
      <div className={clsx(styles.ratingHearts)}>
        {[...Array(NUM_OF_HEARTS)].map((star, index) => {
          const ratingValue = index + 1;
          return (
            <label key={index} className={styles.heartLabel}>
              <input
                type="radio"
                name="rating"
                value={rating}
                onClick={() => handleClick(ratingValue)}
              />
              <FaHeart
                className={clsx(
                  styles.heartIcon,
                  `${ratingValue <= rating ? styles.marked : styles.unmarked}`
                )}
              />
            </label>
          );
        })}
      </div>
      <p className={clsx(styles.number)} onClick={() => setIsOpen(!isOpen)}>
        {rating === -1 ? 0 : rating}
      </p>
      {children}
    </div>
  );
};

Rating.PropsTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Rating;
