import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/HomePage/Banner'
import Footer from '../components/Footer'
import HighestRating from '../components/HomePage/HighestRating'
import { useLoaderData } from 'react-router-dom'
import GenreTrending from '../components/HomePage/GenreTrending'

const MainLayout = () => {
  const loadedReviews = useLoaderData();
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <HighestRating reviews={loadedReviews}></HighestRating>
      <GenreTrending reviews={loadedReviews}></GenreTrending>
      <Footer></Footer>
    </div>
  )
}

export default MainLayout