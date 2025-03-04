import React, { useState } from 'react';

const StarRating = ({ totalStars = 5 }) => {
  const [selectedStars, setSelectedStars] = useState(0);

  return (
    <div className="star-rating">
      {[...Array(totalStars)].map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => setSelectedStars(i + 1)}
        />
      ))}
      <p>{selectedStars} of {totalStars} stars</p>
    </div>
  );
};

const Star = ({ selected = false, onSelect = f => f }) => (
  <span
    className={selected ? 'star selected' : 'star'}
    onClick={onSelect}
  >
    ★
  </span>
);

export default StarRating;