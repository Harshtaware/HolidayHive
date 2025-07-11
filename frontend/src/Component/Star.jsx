import React, { useState } from 'react';
import { FaStar } from "react-icons/fa";

function Star({ maxStars = 5, onRate, defaultRating = 0 }) {
  const [rating, setRating] = useState(defaultRating);
  const [hover, setHover] = useState(0);

  return (
    <div className="flex gap-1">
      {[...Array(maxStars)].map((_, index) => {
        const value = index + 1;
        const isFilled = value <= (hover || rating);

        return (
          <span
            key={value}
            onClick={() => {
              setRating(value);
              if (onRate) onRate(value);
            }}
            onMouseEnter={() => setHover(value)}
            onMouseLeave={() => setHover(0)}
            className="cursor-pointer"
            role="button"
            aria-label={`Rate ${value} star${value > 1 ? 's' : ''}`}
          >
            <FaStar
              className={`text-2xl transition-colors duration-200 ${
                isFilled ? "text-yellow-400" : "text-gray-400"
              }`}
            />
          </span>
        );
      })}
    </div>
  );
}

export default Star;
