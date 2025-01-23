import Hero from '@/components/Hero'
import LatestCollection from '@/components/LatestCollection'
import React from 'react'
import BestSeller from './../components/BestSeller';
import OurPolicy from '@/components/OurPolicy';
const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection/>
      <BestSeller />
      <OurPolicy/>
    </div>
  )
}

export default Home
