import React, { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";

const NUM_OF_HEARTS = 5;

const Rating = ({ id }) => {
  const [rating, setRating] = useState(null);

  useEffect(() => {
    localStorage.setItem(JSON.stringify(id), JSON.stringify(rating));
  }, [rating]);

  return (
    <div>
      {[...Array(NUM_OF_HEARTS)].map((star, index) => {
        const ratingValue = index + 1;
        return (
          <label key={index}>
            {/* remember to hide radio buttons */}
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <FaHeart color={ratingValue <= rating ? "#c90a5a" : "lightgrey"} />
          </label>
        );
      })}
    </div>
  );
};

export default Rating;
