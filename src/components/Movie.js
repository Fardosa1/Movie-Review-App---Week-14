import React, { useState } from 'react';
import Stars from './Stars';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';

function Movie(props) {
  const { movie, addReview } = props;
  const { title, director, synopsis, image, reviews } = movie;

  const [userRating, setUserRating] = useState(0);

  const handleSubmit = (review) => {
    addReview(movie.id, review);
  };

  const handleRatingChange = (rating) => {
    setUserRating(rating);
  };

  return (
    <div className="movie">
      <h2>{title}</h2>
      <p>Directed by {director}</p>
      <img src={image} alt={title} />
      <p>{synopsis}</p>
      <h3>Rating:</h3>
      <Stars rating={userRating} />
      <ReviewList reviews={reviews} />
      <ReviewForm onSubmit={handleSubmit} onRatingChange={handleRatingChange} />
    </div>
  );
}

export default Movie;


// This portion of my code is defines the react component named Movie!
// Movie receives two pops "movie" and "addReview.
// this has the info for the director, description, image, and reviews.
// P.S I thought I wanted images but just let it be :0
// Then the component useState creates a stable variable userRating
// and the setUserRating function all initilized at 0
// There is another function called handleSubmut that is called
// when the user submiits a review. and the ratinghange
// for when the user updates and sets their rating after submitting
// The Starts component allows for the user to displays the Movie detaiils
// and then the review form for when users submit.
//  "