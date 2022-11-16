import React from 'react';

export default function Rating(props) {
  const { rating, numReviews } = props;
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <span>
        <i
          className={
            rating >= i + 1
              ? 'fas fa-star'
              : rating >= i + 0.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
      </span>
    );
  }
  return (
    <div className="product-rating">
      {stars}
      <span> {numReviews} Reviews</span>
    </div>
  );
}
