import React, { useState } from 'react';

function ReviewForm(props) {
  const [rating, setRating] = useState('');
  const [review, setReview] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit({ rating: rating, review: review });
    setRating('');
    setReview('');
  };

  return (
    <form onSubmit={handleSubmit} className="review-form">
      <label>
        Rating (out of 5):
        <input
          type="number"
          min="1"
          max="5"
          value={rating}
          onChange={(event) => setRating(event.target.value)}
          required
        />
      </label>
      <label>
        Review:
        <textarea
          value={review}
          onChange={(event) => setReview(event.target.value)}
          required
        />
      </label>
      <button type="submit">Add Review</button>
    </form>
  );
}

export default ReviewForm;


// This portion of the codee  defines a React component called "ReviewForm". 
//The component uses the "useState" hook to define two state variables: "rating" and "review". 
// The initial values of both variables are empty strings.
// The form contains two input fields: one for the rating (a number between 1 and 5) 
// When the form is submitted, the onSubmit handler is called. It prevents the default form submission behavior and calls the "onSubmit"
// prop function, passing it an object containing the "rating" 
// and "review" state values. The "rating" and "review" state variables are then reset to empty strings


// Then the export allows this to be used in othe areas of code! :)