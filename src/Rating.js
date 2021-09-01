import React, { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";

const NUM_OF_HEARTS = 5;

const Rating = ({ id }) => {
  const getRating = () => JSON.parse(localStorage.getItem(JSON.stringify(id)));
  const [rating, setRating] = useState(getRating() || "");

  useEffect(() => {
    if (rating === "") {
      localStorage.removeItem(JSON.stringify(id));
    } else {
      localStorage.setItem(JSON.stringify(id), JSON.stringify(rating));
    }
    console.log(localStorage);
  }, [rating]);

  const handleClick = (ratingValue) => {
    const prevRating = JSON.parse(localStorage.getItem(JSON.stringify(id)));
    if (prevRating === ratingValue) {
      setRating("");
      return;
    }
    setRating(ratingValue || "");
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
