"use client";
import React from 'react'
// import Image from 'next/image';
import { useEffect, useState } from "react";
function newsection() {
  const images = [
    "/images/Accomodation/HTSC1.jpg",
    "/images/Accomodation/HTSC2.jpg",
    "/images/Accomodation/HTSC3.jpg",
    "/images/Accomodation/HTSC4.jpg",

  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const reviews = [
    {
      content: "This is the third time I've stayed at this hotel, but this time I'm writing a little review for the hotel to listen and fix: about the room, there are a lot of mosquitoes, the water is sticky, the water is not hot enough. Really, for the price of 600k, I should have received a better experience like that.",
      author: "JOHN DOE",
      link: "http://www.john.com",
      img: "./images/about-us-staff-four.jpg",
    },
    {
      content: "Although this is not the first time I have stayed at the hotel, this time was quite disappointing. The room I stayed in had a lot of mosquitoes, making it difficult for me to sleep. Not only is household water a bit sticky, but it's also not hot enough to use comfortably...............",
      author: "JANE SMITH",
      link: "http://www.jane.com",
      img: "./images/about-us-staff-two.jpg",
    },
  ];

  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((current + 1) % reviews.length);
  };

  const handlePrev = () => {
    setCurrent(
      (current - 1 + reviews.length) % reviews.length
    );
  };


  return (


    <div className="sectionNew xl:w-full h-auto  flex flex-col items-center md:flex-row md:justify-center sm:w-[450px] p-4 ">
      <div className="w-full md:w-[1140px] flex flex-col md:flex-row items-center ">
        {/* <div className="w-full md:w-1/2 h-auto mb-6 ">
          <h2 className="text-xl font-semibold text-white-500 mb-4">NEWS</h2>
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row items-center ">
              <img
                src="./images/NEWS1.jpg"
                alt="news"
                width={80}
                height={80}
                className="w-20 h-20 object-cover mr-4 mb-4 md:mb-0"
              />
              <div>
                <h3 className="text-sm font-semibold">HANDLE INSECTS THAT FLY INTO THE ROOM</h3>
                <p className="text-xs text-gray-400">14 May 2014</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center">
              <img
                src="./images/NEWS2.jpg"
                alt="news"
                width={80}
                height={80}
                className="w-20 h-20 object-cover mr-4 mb-4 md:mb-0"
              />
              <div>
                <h3 className="text-sm font-semibold">HANDLING BEDDING AND PILLOWS WHEN GUESTS CHECK OUT</h3>
                <p className="text-xs text-gray-400">14 May 2014</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center">
              <img
                src="./images/NEWS3.jpg"
                alt="news"
                width={80}
                height={80}
                className="w-50 h-20 object-cover mr-4 mb-4 md:mb-0"
              />
              <div>
                <h3 className="text-sm font-semibold">HANDLING PROBLEMS OF HYGIENE IN HOTEL
                </h3>
                <p className="text-xs text-gray-400">14 May 2014</p>
              </div>
            </div>
            
        </div>
          </div> */}

        <div className="w-full md:w-1/2 h-auto mb-6 xl:px-2 px-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">NEWS</h2>
          <div className="space-y-6">
            <br />
            {/* Item 1 */}
            <div className="flex items-center space-x-4">
              <img
                src="./images/NEWS1.jpg"
                alt="news"
                className="w-20 h-20 object-cover rounded-md"
              />
              <div>
                <h3 className="text-sm font-semibold">
                  HANDLE INSECTS THAT FLY INTO THE ROOM
                </h3>
                <p className="text-xs text-gray-400">14 May 2014</p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-center space-x-4">
              <img
                src="./images/NEWS2.jpg"
                alt="news"
                className="w-20 h-20 object-cover rounded-md"
              />
              <div>
                <h3 className="text-sm font-semibold">
                  HANDLING BEDDING AND PILLOWS WHEN GUESTS CHECK OUT
                </h3>
                <p className="text-xs text-gray-400">14 May 2014</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-center space-x-4">
              <img
                src="./images/NEWS3.jpg"
                alt="news"
                className="w-20 h-20 object-cover rounded-md"
              />
              <div>
                <h3 className="text-sm font-semibold">
                  HANDLING PROBLEMS OF HYGIENE IN HOTEL
                </h3>
                <p className="text-xs text-gray-400">14 May 2014</p>
              </div>
            </div>
          </div>
        </div>
        <br /><br />
        <div className="grid grid-cols-3 md:grid-cols-3 gap-2 h-auto xl:px-2 px-8">
          {/* Hotel Showcase Section */}
          <div className="col-span-2">
            <h2 className="text-xl font-bold text-white-500 mb-4">HOTEL SHOWCASE</h2>
            <div className="relative ">
              <img
                src={images[currentIndex]}
                alt="Hotel showcase"
                className="w-[] h-[300px] object-cover" />
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
                onClick={() => setCurrentIndex(index)} />
            ))}
          </div>
        </div>
        <br /><br />

        {/* <div className="h-[400px] w-full md:w-1/3  mt-6 md:mt-0 ">
          <div>
          <h2 className="text-xl font-semibold text-white mb-6">CUSTOMER SAYS</h2>
          <div className="bg-green-500 p-4 rounded-md text-sm">
            <p>
              Semper ac dolor vitae msan. Cras interdum hendrerit...
              Nam sed placerat libero, non eleifend dolor.
            </p>
          </div>
          <div className="flex items-center mt-4">
          <img
                src="./images/about-us-staff-four.jpg"
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
          </div> */}
        <div className="h-auto w-full md:w-1/3 mt-6 md:mt-0 xl:px-2 px-8">
          <h2 className="text-xl font-semibold text-white mb-6">CUSTOMER SAYS</h2>
          <br />
          <div className="bg-green-800 p-6 rounded-md text-sm text-white relative">
            <p>{reviews[current].content}</p>
            <div className="absolute bottom-4 right-4 flex space-x-2">
              <button onClick={handlePrev} className="bg-white text-green-800 p-1 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button onClick={handleNext} className="bg-white text-green-800 p-1 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="flex items-center mt-4">
            <img
              src={reviews[current].img}
              alt={reviews[current].author}
              className="w-12 h-12 object-cover rounded-full mr-4"
            />
            <div>
              <p className="font-bold text-white">{reviews[current].author}</p>
              <a href={reviews[current].link} className="text-blue-400">
                {reviews[current].link}
              </a>
            </div>
          </div>
        </div><br /><br />


      </div>

    </div>


  )
}

export default newsection