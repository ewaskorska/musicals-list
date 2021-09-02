import React, { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";

const NUM_OF_HEARTS = 5;

const Rating = ({ id }) => {
  const getRating = () => {
    const parsedVal = localStorage.getItem("watched");
    const watched = JSON.parse(parsedVal === undefined ? null : parsedVal);
    let rate = -1;
    if (watched) {
      for (const [itemId, itemRating] of Object.entries(watched)) {
        if (+itemId === id) {
          rate = +itemRating;
        } //uwaga, nie wiem, czy dobre typy
      }
    }
    return rate;
  };
  const [rating, setRating] = useState(getRating());

  const removeFromToWatch = () => {
    const toWatch = JSON.parse(localStorage.getItem("toWatch"));
    const updated = toWatch.filter((itemId) => id !== itemId);
    localStorage.setItem("toWatch", updated);
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

      //remove from toWatch
      removeFromToWatch();
    }
    console.log(localStorage);
  }, [rating]);

  const handleClick = (ratingValue) => {
    //get previous rating for id
    const prevRating = getRating();
    if (prevRating === ratingValue) {
      setRating(-1);
      return;
    }
    setRating(ratingValue);
  };

  return (
    <div>
      {[...Array(NUM_OF_HEARTS)].map((star, index) => {
        const ratingValue = index + 1;
        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={rating}
              onClick={() => handleClick(ratingValue)}
            />
            <FaHeart color={ratingValue <= rating ? "#c90a5a" : "lightgrey"} />
          </label>
        );
      })}
    </div>
  );
};

export default Rating;
