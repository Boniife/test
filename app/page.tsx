import React from 'react'
import HeroSection from './components/heroSection/HeroSection'
import Content from './components/body/Content'

const page = () => {
  return (
    <div className='home'>
      <HeroSection />
      <Content />
    </div>
  )
}

export default page