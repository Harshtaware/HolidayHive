import React, { useContext, useState } from 'react';
import { GiConfirmed } from "react-icons/gi";
import { bookingDataContext } from '../Context/BookingContext';
import { useNavigate } from 'react-router-dom';
import Star from '../Component/Star';
import { userDataContext } from '../Context/UserContext';
import { authDataContext } from '../Context/AuthContext';
import { listingDataContext } from '../Context/ListingContext';
import axios from 'axios';

function Booked() {
  const { bookingData } = useContext(bookingDataContext);
  const [star, setStar] = useState(0);
  const { serverUrl } = useContext(authDataContext);
  const { getCurrentUser } = useContext(userDataContext);
  const { getListing, cardDetails } = useContext(listingDataContext);
  const navigate = useNavigate();

  const handleRating = async (id) => {
    try {
      await axios.post(`${serverUrl}/api/listing/ratings/${id}`, {
        ratings: star,
      }, { withCredentials: true });

      await getListing();
      await getCurrentUser();
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  const handleStar = (value) => {
    setStar(value);
    console.log("You rated", value);
  };

  return (
    <div className='w-full min-h-screen bg-[#f2f2f2] flex flex-col items-center pt-[120px] px-4 relative'>

      {/* Booking Info Card */}
      <div className='w-full max-w-[500px] bg-white shadow-md rounded-xl p-6 mb-6 border border-gray-200'>
        <div className='flex flex-col items-center justify-center gap-4'>
          <GiConfirmed className='text-green-600 w-[80px] h-[80px]' />
          <h2 className='text-2xl font-semibold text-center'>Booking Confirmed</h2>
        </div>
        <div className='mt-6 space-y-3 text-[17px] text-gray-700'>
          <div className='flex justify-between'><span>Booking ID:</span><span>{bookingData._id}</span></div>
          <div className='flex justify-between'><span>Owner Email:</span><span>{bookingData.host?.email}</span></div>
          <div className='flex justify-between'><span>Total Rent:</span><span>₹{bookingData.totalRent}</span></div>
        </div>
      </div>

      {/* Rating Card */}
      <div className='w-full max-w-[500px] bg-white shadow-md rounded-xl p-6 mb-6 border border-gray-200'>
        <h3 className='text-lg font-medium mb-2 text-center'>Rate Your Experience</h3>
        <div className='flex flex-col items-center gap-4'>
          <Star onRate={handleStar} />
          <p className='text-sm text-gray-500'>{star} out of 5 stars</p>
          <button
            onClick={() => handleRating(cardDetails._id)}
            className='bg-red-500 hover:bg-red-600 text-white text-base px-6 py-2 rounded-md transition-all duration-200'
          >
            Submit Rating
          </button>
        </div>
      </div>

      {/* Back to Home Button */}
      <button
        onClick={() => navigate("/")}
        className='absolute top-6 right-6 bg-gray-800 hover:bg-gray-900 text-white px-5 py-2 rounded-md shadow-md text-sm'
      >
        Back to Home
      </button>
    </div>
  );
}

export default Booked;
