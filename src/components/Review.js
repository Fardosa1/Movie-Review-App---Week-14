import React from 'react';
import Stars from './Stars';

function Review(props) {
  const { rating, review } = props.review;

  return (
    <div className="review">
      <h3>Rating:</h3>
      <Stars rating={rating} />
      <p>{review}</p>
    </div>
  );
}

export default Review;
  

// This portion of the code has a react component named
// defines a React component named "Review". The component receives a prop called "review", which contains a rating and review text.
// The rating and review text are extracted from the "review" prop using destructuring.
//the component renders a div with the class "review", which contains a header with the text "Rating:". T
//the rating is displayed using the "Stars" component, which is passed the rating value as a prop. The review text is displayed in a paragraph element.
//The component is exported as the default export of the module,
// allowing other components to import and use it.