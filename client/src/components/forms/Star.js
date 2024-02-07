import React from "react";
import StarRatings from "react-star-ratings";

const Star = ({ starClick, numberOfstars }) => {
  <StarRatings
    changeRating={() => {
      starClick(numberOfstars);
    }}
    numberOfStars={numberOfstars}
    starDimension="2px"
    starSpacing="2px"
    starHoverColor="red"
    starEmptyColor="red"
  />;
};

export default Star;
