import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/HomePage/Banner'
import Footer from '../components/Footer'

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Footer></Footer>
    </div>
  )
}

export default MainLayout