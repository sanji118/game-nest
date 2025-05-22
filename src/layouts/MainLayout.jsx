import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/HomePage/Banner'
import Footer from '../components/Footer'
import HighestRating from '../components/HomePage/HighestRating'
import { useLoaderData } from 'react-router-dom'
import GenreTrending from '../components/HomePage/GenreTrending'
import JoinCommunity from '../components/HomePage/JoinCommunity'
import { AuthContext } from '../Provider/AuthProvider'

const MainLayout = () => {
  const {user} = useContext(AuthContext);
  const loadedReviews = useLoaderData();
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <HighestRating reviews={loadedReviews}></HighestRating>
      <GenreTrending reviews={loadedReviews}></GenreTrending>
      {
        !user && <JoinCommunity></JoinCommunity>
      }
      <Footer></Footer>
    </div>
  )
}

export default MainLayout