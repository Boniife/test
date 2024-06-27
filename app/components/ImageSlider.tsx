'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const ImageSlider = ({ images, className, width, height }: any) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [images]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="">
      {/* <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-l focus:outline-none"
        onClick={prevSlide}
      >
        Prev
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-r focus:outline-none"
        onClick={nextSlide}
      >
        Next
      </button> */}
      <div className="overflow-hidden">
        <Image
          className={className}
          src={images[currentSlide]}
          alt={`Slide ${currentSlide + 1}`}
          width={width}
          height={height}
        />
      </div>
      {/* <div className="absolute bottom-4 left-0 right-0 flex justify-center">
        {images.map((_:any, index:any) => (
          <div
            key={index}
            className={`w-4 h-4 mx-2 rounded-full ${
              index === currentSlide ? 'bg-purple-500' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div> */}
    </div>
  );
};

export default ImageSlider;
