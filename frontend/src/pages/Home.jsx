/* eslint-disable no-unused-vars */
import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'

function Home() {
  return (
    <>
      <Hero />
      <LatestCollection />
      <BestSeller/>
    </>
  )
}

export default Home