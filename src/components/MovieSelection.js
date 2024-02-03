import React, { useState } from 'react';
import SeatBooking from './SeatBooking';

const MovieSelection = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleMovieSelect = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <div>
      <h2>Choose a Movie</h2>
      <button onClick={() => handleMovieSelect('Beast')}>Beast</button>
      <button onClick={() => handleMovieSelect('KGF')}>KGF</button>
      <button onClick={() => handleMovieSelect('Game')}>Game</button>

      {selectedMovie && <SeatBooking movie={selectedMovie} />}
    </div>
  );
};

export default MovieSelection;
