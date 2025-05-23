import { FaStar, FaBookmark, FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { format } from "date-fns";
import Swal from 'sweetalert2';
import { useEffect, useState } from 'react';



const ReviewDetails = () => {
  const review = useLoaderData();
  const formatted = format(new Date(review.date), "d MMMM yyyy");
  const [isInWatchlist, setIsInWatchlist] = useState(false);


  const handleAddToWatchlist = () => {
  const { title, coverImage, rating, year, genre, userName, trending, date } = review;
  const watchlist = { title, coverImage, rating, year, genre, userName, trending, date };

  fetch('https://game-nest-server.vercel.app/api/watchlist', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(watchlist)
  })
    .then(res => res.json())
    .then(data => {
      Swal.fire({
        title: "Success!",
        text: "You saved this review.",
        icon: "success",
        draggable: true
      });
      
      setIsInWatchlist(true);
    })
    .catch(error => {
      console.error("Error adding to watchlist:", error);
    });
};






  return (
    <>
    <Navbar ></Navbar>
    <div className='bg-gray-50 dark:bg-inherit pt-40'>
    
    <div className="max-w-2xl mx-auto rounded-xl shadow-xl overflow-hidden bg-white dark:bg-inherit border border-gray-300 mb-20">
      
      <div className="relative">
        <img
          src={review.coverImage}
          alt={review.title}
          className="w-full h-80 object-cover"
        />
        <div className="absolute inset-0 p-4 flex flex-col justify-end">
          <div className="flex gap-2 mb-2">
            <span className="badge badge-success text-white">{review.genre}</span>
            <span className="badge badge-neutral text-white">{review.year}</span>
          </div>
          <h2 className="text-2xl font-bold text-white">{review.title}</h2>
        </div>
      </div>

      
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-3">
            <span className="bg-green-400 p-2 rounded-full text-blue-950 font-bold flex items-center text-lg">
              {review.rating} <FaStar className="ml-1 text-blue-950-500" />
            </span>
            <div>
              <p className="text-sm text-gray-600">
                Reviewed by <span className="font-bold">{review.userEmail.split("@")[0]} user</span>
              </p>
              <p className="text-sm text-gray-400">{formatted}</p>
            </div>
          </div>
          <button
            onClick={handleAddToWatchlist}
            className="btn bg-violet-600 border-none gap-2 text-white"
            disabled={isInWatchlist}
            >
            <FaBookmark />
            {isInWatchlist ? "Already Added" : "Add to Watchlist"}
          </button>
        </div>

        
        <h3 className="text-lg font-bold text-purple-600 mb-2">Review</h3>
        <p className="text-sm text-gray-700">
          {review.description}
        </p>
      </div>
    </div>
    <Link to={'/reviews'}><button className='text-violet-700 flex items-center gap-2 p-5'><FaArrowLeft></FaArrowLeft> Back to reviews</button></Link>
    <Footer/> 
    </div></>
  );
};

export default ReviewDetails;
