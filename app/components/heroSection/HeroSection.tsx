'use client'
import React from 'react'
import ImageSlider from '../ImageSlider'

const images = [
  '/images/hero1.png',
  '/images/hero2.png',
  '/images/hero3.png',
]
const HeroSection = () => {
  return (
    <div className='hero'>
      <ImageSlider
          images={images}
          className='image_slider'
          width={1400}
          height={2000}
        />
    </div>
  )
}

export default HeroSection