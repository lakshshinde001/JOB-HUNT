import React from 'react'
import Navbar from './shared/Navbar'
import HeroSection from './HeroSection'
import CategoryCarausal from './CategoryCarausal'
import LatestJobs from './LatestJobs'
import Footer from './shared/Footer'

const Home = () => {
  return (  
    <div>
        <Navbar/>
        <HeroSection/>
        <CategoryCarausal/>
        <LatestJobs/>
        <Footer/>
    </div>
  )
}

export default Home