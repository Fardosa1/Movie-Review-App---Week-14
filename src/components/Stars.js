import React, { useState } from "react";

const Stars = () => {
  const [rating, setRating] = useState(null);

  const handleClick = (value) => {
    setRating(value);
  };

  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(
        <span key={i} onClick={() => handleClick(i)}>
          ★
        </span>
      );
    } else {
      stars.push(
        <span key={i} onClick={() => handleClick(i)}>
          ☆
        </span>
      );
    }
  }

  return <div>{stars}</div>;
};

export default Stars;

// This portion of the codee efines a React component called "Stars" that uses the "useState" hook to manage its state. 
//When the component is first rendered, the rating state is set to null.
// five span elements that represent stars. If a star is clicked, the "handleClick" function is called and the 
// rating state is updated to the index of the clicked star.

// component then generates an array of span elements, with each star either filled or empty based on whether its index is less than or equal to the rating state.  
// Theres emoty starts and full start! 