import React, { useState } from 'react';
import './App.css';
import MovieList from './components/MovieList';

function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: 'Parent Trap',
      director: 'Nancy Meyers',
      synopsis:
        'It tells the story of identical twin sisters, who were separated at birth and reunite at summer camp, and then devise a plan to switch places and bring their divorced parents back together.',
      image: 'https://www.imdb.com/title/tt0068646/mediaviewer/rm2345378816/',
      rating: 4,
      reviews: [],
    },
    {
      id: 2,
      title: 'Matilda',
      director: 'Danny DeVito',
      synopsis:
        'Tells the story of a brilliant young girl named Matilda who develops telekinetic powers to cope with her neglectful parents and cruel headmistress. With the help of a kind teacher, Matilda learns to use her powers to stand up against the bullies and make positive changes in her life.',
      image: 'https://www.imdb.com/title/tt0111161/mediaviewer/rm2666921472/',
      rating: 5,
      reviews: [],
    },
    {
      id: 3,
      title: 'Home Alone',
      director: 'Chris Columbus',
      synopsis:
        'Follows eight-year-old Kevin McCallister, who is accidentally left behind when his family goes on vacation for the holidays. While alone, Kevin must defend his home from two burglars using an array of booby traps and tricks',
      image: 'https://www.imdb.com/title/tt0468569/mediaviewer/rm1035315456/',
      rating: 4.5,
      reviews: [],
    },
  ]);

  const addReview = (movieId, review) => {
    const updatedMovies = movies.map((movie) => {
      if (movie.id === movieId) {
        return {
          ...movie,
          reviews: [...movie.reviews, review],
        };
      }
      return movie;
    });

    setMovies(updatedMovies);
  };

  return (
    <div className="App">
      <h1>Movie Reviews</h1>
      <MovieList movies={movies} addReview={addReview} />
    </div>
  );
}

export default App;


// This portion of the code  React component called "App" which imports
//  a "MovieList" component and sets up some initial movie data using useState hook.
// it siaplays a list of movies and allows the user to reciew each one.
// The addReview function is passed down as a prop to a MovieList component, 
// which is responsible for rendering each movie and handling the review input. 

// When a review is submitted, the addReview function updates the state by creating a new array of movies with the updated review and setting the state to the new array. 
//The rendered HTML includes a title and the MovieList component.