import React from 'react'
import { useLoaderData } from 'react-router-dom'
import ReviewCard from '../components/ReviewCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AllReviews = () => {
  const reviews = useLoaderData();
  return (
    <>
    <Navbar></Navbar>
    <div>
      <h1 className='py-10 pt-40 text-3xl md:text-5xl text-center font-bold text-violet-500'>All Game Reviews</h1>
      {/** dropdown */}
      <div className='grid md:grid-cols-2 lg:grid-cols-3 p-5 md:p-10 lg:p-12 gap-8'>
        {
          reviews.map(review =>(
            <ReviewCard key={review._id} review={review}></ReviewCard>
          ))
        }
      </div>
    </div>
    <Footer></Footer>
    </>
  )
}

export default AllReviews