import React, { useState } from 'react';
import LoginPage from './pages/LoginPage';
import TicketBookingPage from './pages/TicketBookingpage';
import MovieSelection from './components/MovieSelection';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMovieSelected, setIsMovieSelected] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleMovieSelect = () => {
    setIsMovieSelected(true);
  };

  return (
    <div>
      {!isLoggedIn ? (
        <LoginPage onLogin={handleLogin} />
      ) : isMovieSelected ? (
        <TicketBookingPage />
      ) : (
        <MovieSelection onMovieSelect={handleMovieSelect} />
      )}
    </div>
  );
}

export default App;
