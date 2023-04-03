import React from 'react';
import Movie from './Movie';

function MovieList(props) {
  const { movies, addReview } = props;

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} addReview={addReview} />
      ))}
    </div>
  );
}

export default MovieList;
 

// This portion of the code has react component called Movielist
// and two props called movies and addReview.
// It is an array of objects containing the info about the movie.
// and the addReview prop is a function that can be called
// to add a new review for the Movie. 
// This coponent maps over the movies array and creates a new mvoie
// component for each one. The last portion of 
// the code the component returns a div with the class 
// "movie-list" and renders all the "Movie" components created earlier, effectively creating a list of movies.