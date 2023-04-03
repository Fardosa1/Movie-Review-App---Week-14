import React from "react";
import Review from "./Review";

const ReviewList = ({ reviews }) => {
  return (
    <div>
      {reviews.map((review, index) => (
        <Review key={index} review={review} />
      ))}
    </div>
  );
};

export default ReviewList;

// This portion of the code defines a React component called "Stars". 
// The component receives a "rating" prop, which is a number between 1 and 5.
//  component renders a div containing five span elements, each representing a star.
// The color of the stars is determined by comparing the "rating" prop to the index of the current star. 
//If the index is less than the "rating" prop, the star is colored gold; otherwise, it is gray


// Then the export allows me to use the coede in other areas and 
// components to be imported!