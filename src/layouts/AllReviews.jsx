import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import ReviewCard from '../components/ReviewCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AllReviews = () => {
  const reviews = useLoaderData();
  const [displayedReviews, setDisplayedReviews] = useState(reviews);
  const [sortBy, setSortBy] = useState('');
  const [filterGenre, setFilterGenre] = useState('');

  useEffect(() => {
    let updated = [...reviews];

    // Filter by genre
    if (filterGenre) {
      updated = updated.filter(r => r.genre.toLowerCase() === filterGenre.toLowerCase());
    }

    // Sort
    if (sortBy === 'rating') {
      updated.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'year') {
      updated.sort((a, b) => b.year - a.year);
    }

    setDisplayedReviews(updated);
  }, [sortBy, filterGenre, reviews]);

  
  const genres = [...new Set(reviews.map(r => r.genre))];

  return (
    <>
      <Navbar />
      <div>
        <h1 className='py-10 pt-40 text-3xl md:text-5xl text-center font-bold text-violet-500'>
          All Game Reviews
        </h1>

        
        <div className='flex flex-col md:flex-row justify-center items-center gap-4 mb-8'>
          <select 
            className='border p-2 rounded-md '
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value=''>Sort By</option>
            <option value='rating'>Rating (High to Low)</option>
            <option value='year'>Year (Newest First)</option>
          </select>

          <select 
            className='border p-2 rounded-md'
            value={filterGenre}
            onChange={(e) => setFilterGenre(e.target.value)}
          >
            <option value=''>Filter by Genre</option>
            {
              genres.map((g, idx) => (
                <option key={idx} value={g}>{g}</option>
              ))
            }
          </select>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 p-5 md:p-10 lg:p-12 gap-8'>
          {
            displayedReviews.map(review => (
              <ReviewCard key={review._id} review={review} />
            ))
          }
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AllReviews;
