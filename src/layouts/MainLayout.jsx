import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/HomePage/Banner'
import Footer from '../components/Footer'
import HighestRating from '../components/HomePage/HighestRating'
import { useLoaderData } from 'react-router-dom'
import GenreTrending from '../components/HomePage/GenreTrending'
import JoinCommunity from '../components/HomePage/JoinCommunity'
import { AuthContext } from '../Provider/AuthProvider'
import { Typewriter } from 'react-simple-typewriter'







const MainLayout = () => {
  const {user} = useContext(AuthContext);
  const loadedReviews = useLoaderData();
  return (
    <div>
      <Navbar></Navbar>
      <div className='md:py-32'>
        <div>
          <h1 className="text-3xl font-bold text-violet-600 text-center">
            Welcome to GameNest, where
            <span className="text-orange-500 ml-2">
              <Typewriter
                words={['Gamers Unite!', 'Reviews Matter!', 'Watchlists Grow!']}
                loop={Infinity}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
        </div>
      <Banner></Banner>
      <HighestRating reviews={loadedReviews}></HighestRating>
      <GenreTrending reviews={loadedReviews}></GenreTrending>
      {
        !user && <JoinCommunity></JoinCommunity>
      }
      </div>
      <Footer></Footer>
    </div>
  )
}

export default MainLayout