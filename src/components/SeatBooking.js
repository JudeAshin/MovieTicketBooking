import React, { useState } from 'react';
import './SeatBooking.css'
const SeatBooking = ({ movie }) => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookedSeats, setBookedSeats] = useState({});
  const seatPrice = 200;

  const handleSeatSelect = (seatNumber) => {
    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
    } else {
      setSelectedSeats([...selectedSeats, seatNumber]);
    }
  };

  const handlePayment = () => {
    const totalAmount = selectedSeats.length * seatPrice;
    if (totalAmount > 0) {
      alert(`Total Amount for ${movie}: Rs. ${totalAmount}`);
      // Update booked seats for the current movie
      const updatedBookedSeats = { ...bookedSeats, [movie]: [...(bookedSeats[movie] || []), ...selectedSeats] };
      setBookedSeats(updatedBookedSeats);
      console.log(`Movie: ${movie}, Seats: ${selectedSeats.join(', ')}`);
      setSelectedSeats([]); // Reset selected seats after payment
    } else {
      alert(`No seats selected for ${movie}.`);
    }
  };

  return (
    <div>
      <h3>{movie}</h3>
      <p>Select your seats:</p>
      <div>
        {[...Array(50).keys()].map((seatNumber) => (
          <button
            key={seatNumber + 1}
            onClick={() => handleSeatSelect(seatNumber + 1)}
            className={
              selectedSeats.includes(seatNumber + 1) || (bookedSeats[movie] && bookedSeats[movie].includes(seatNumber + 1))
                ? 'selected'
                : ''
            }
          >
            {seatNumber + 1}
          </button>
        ))}
      </div>
      <button onClick={handlePayment}>Book Seats</button>
    </div>
  );
};

export default SeatBooking;
