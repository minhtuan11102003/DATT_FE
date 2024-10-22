"use client";
import React from 'react'
// import Image from 'next/image';
import { useEffect, useState } from "react";
function newsection() {
    const images = [
        "/images/cS-27.jpg",
        "/images/cS-27.jpg",
        "/images/cS-27.jpg",
        "/images/cS-27.jpg",
      ];
    
      const [currentIndex, setCurrentIndex] = useState(0);
    
      const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      };
    
      const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      };
  return (


    <div className="sectionNew w-full h-auto  flex flex-col items-center md:flex-row md:justify-center ">
        <div className="w-full md:w-[1140px] flex flex-col md:flex-row items-center ">
          <div className="w-full md:w-1/2 h-auto mb-6">
          <h2 className="text-xl font-semibold text-white-500 mb-6">News</h2>
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row items-center">
              <img
                src="./images/news-one.jpg"
                alt="news"
                width={80}
                height={80}
                className="w-20 h-20 object-cover mr-4 mb-4 md:mb-0"
              />
              <div>
                <h3 className="text-sm font-semibold">QUISQUE AT FELIS PORT TITORDGA</h3>
                <p className="text-xs text-gray-400">14 May 2014</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center">
              <img
                src="./images/news-one.jpg"
                alt="news"
                width={80}
                height={80}
                className="w-20 h-20 object-cover mr-4 mb-4 md:mb-0"
              />
              <div>
                <h3 className="text-sm font-semibold">QUISQUE AT FELIS PORT TITORDGA</h3>
                <p className="text-xs text-gray-400">14 May 2014</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center">
              <img
                src="./images/news-one.jpg"
                alt="news"
                width={80}
                height={80}
                className="w-50 h-20 object-cover mr-4 mb-4 md:mb-0"
              />
              <div>
                <h3 className="text-sm font-semibold">QUISQUE AT FELIS PORT TITORDGA</h3>
                <p className="text-xs text-gray-400">14 May 2014</p>
              </div>
            </div>
            
        </div>
          </div>
         
          <div className="grid grid-cols-3 md:grid-cols-3 gap-2 h-auto">
        {/* Hotel Showcase Section */}
        <div className="col-span-2">
          <h2 className="text-xl font-bold text-white-500 mb-4">Hotel Showcase</h2>
          <div className="relative ">
            <img
              src={images[currentIndex]}
              alt="Hotel showcase"
              className="w-[] h-[300px] object-cover"/>
            <button
              className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
              onClick={prevImage} >
              &lt;
            </button>
            <button
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
              onClick={nextImage}>
              &gt;
            </button>
          </div>
        </div>

        {/* Thumbnails */}
        <div className="col-span-1 flex flex-col items-center space-y-0 justify-center"> 
          {images.map((image, index) => (
          <img
          key={index}
          src={image}
          alt="Thumbnail"
          className={`w-20 h-20 object-cover cursor-pointer mb-2 ${index === currentIndex ? 'border-2 border-yellow-500' : 'opacity-60'}`}
          onClick={() => setCurrentIndex(index)}/>
          ))}
        </div>
        </div>

          <div className="h-[400px] w-full md:w-1/3  mt-6 md:mt-0">
          <div>
          <h2 className="text-xl font-semibold text-white mb-6">Customer Says</h2>
          <div className="bg-green-500 p-4 rounded-md text-sm">
            <p>
              Semper ac dolor vitae msan. Cras interdum hendrerit...
              Nam sed placerat libero, non eleifend dolor.
            </p>
          </div>
          <div className="flex items-center mt-4">
          <img
                src="./images/news-one.jpg"
                alt="news"
                width={50}
                height={50}
                className="w-12 h-12 object-cover mr-4"
              />
            <div>
              <p>JOHN DOE</p>
              <a href="http://www.john.com" className="text-blue-400">www.john.com</a>
            </div>
          </div>
        </div>
          </div>
        </div>
      </div>
      
    )
}

export default newsection