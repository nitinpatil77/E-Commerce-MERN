/* eslint-disable no-unused-vars */
import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsLetterBox from './NewsLetterBox'

function Home() {
  return (
    <>
      <Hero />
      <LatestCollection />
      <BestSeller/>
      <OurPolicy/>
      <NewsLetterBox/>
    </>
  )
}

export default Home