import React from "react";
import StarRatings from "react-star-ratings";

export const AverageRating = (product) => {
  if (product && product.rating) {
    const ratingArray = product && product.rating;
    let total = [];
    const length = ratingArray.length;

    ratingArray.map((r) => total.push(r.star));
    let totalReduced = total.reduce((p, n) => p + n, 0);
    // console.log("totalReduced", totalReduced);

    const result = totalReduced / length;
    // console.log(result);

    return (
      <div className="text-center pt-1 pb-3">
        <span>
          {" "}
          <StarRatings
            starDimension="20px"
            starSpacing="2px"
            rating={result}
            starRatedColor="red"
            editing={false}
          />{" "}
          ({product.rating.length})
        </span>
      </div>
    );
  }
};
