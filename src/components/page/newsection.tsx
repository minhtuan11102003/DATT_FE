// "use client";
// import React from 'react'
// // import Image from 'next/image';
// import { useEffect, useState } from "react";
// function newsection() {
//     const images = [
//         "/images/cS-27.jpg",
//         "/images/cS-27.jpg",
//         "/images/cS-27.jpg",
//         "/images/cS-27.jpg",
//         "/images/cS-27.jpg",
//       ];
    
//       const [currentIndex, setCurrentIndex] = useState(0);
    
//       const nextImage = () => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//       };
    
//       const prevImage = () => {
//         setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//       };
//   return (
// <div className="bg-gray-900 text-white p-8">
//       <div className="grid grid-cols-3 gap-8">
//         {/* News Section */}
//         <div>
//           <h2 className="text-xl font-semibold text-white-500 mb-6">News</h2>
//           <div className="space-y-6">
//             <div className="flex items-center">
//               <img
//                 src="./images/news-one.jpg"
//                 alt="news"
//                 width={80}
//                 height={80}
//                 className="mr-4"
//               />
//               <div>
//                 <h3 className="text-sm font-semibold">QUISQUE AT FELIS PORT TITORDGA</h3>
//                 <p className="text-xs text-gray-400">14 May 2014</p>
//               </div>
//             </div>
//             <div className="flex items-center">
//             <img
//                 src="./images/news-one.jpg"
//                 alt="news"
//                 width={80}
//                 height={80}
//                 className="mr-4"
//               />
//               <div>
//                 <h3 className="text-sm font-semibold">DONEC SCELERISQUE VULPUTATE</h3>
//                 <p className="text-xs text-gray-400">15 May 2014</p>
//               </div>
//             </div>
//             <div className="flex items-center">
//             <img
//                 src="./images/news-one.jpg"
//                 alt="news"
//                 width={80}
//                 height={80}
//                 className="mr-4"
//               />
//               <div>
//                 <h3 className="text-sm font-semibold">CURABITUR VARIUS QUAM LOREM</h3>
//                 <p className="text-xs text-gray-400">17 May 2014</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Hotel Showcase Section */}
        
//     <div className="text-center p-6">
//       <h2 className="text-xl font-bold text-white-500 mb-4">Hotel Showcase</h2>
//       <div className="relative inline-block">
//         <img
//           src={images[currentIndex]}
//           alt="Hotel showcase"
//           className="w-full max-w-lg rounded-lg shadow-lg"
//         />
//         <button
//           className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
//           onClick={prevImage}
//         >
//           &lt;
//         </button>
//         <button
//           className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
//           onClick={nextImage}
//         >
//           &gt;
//         </button>
//       </div>
//       <div className="flex justify-center mt-4 space-x-2">
//         {images.map((image, index) => (
//           <img
//             key={index}
//             src={image}
//             alt="Thumbnail"
//             className={`w-20 h-20 rounded-lg cursor-pointer border-2 transition-opacity ${index === currentIndex ? 'opacity-100 border-yellow-500' : 'opacity-60'}`}
//             onClick={() => setCurrentIndex(index)}
//           />
//         ))}
//       </div>
//     </div>

//         {/* Customer Says Section */}
//         <div>
//           <h2 className="text-xl font-semibold text-white-500 mb-6">Customer Says</h2>
//           <div className="bg-green-500 p-4 rounded-md text-sm">
//             <p>
//               Semper ac dolor vitae msan. Cras interdum hendrerit...
//               Nam sed placerat libero, non eleifend dolor.
//             </p>
//           </div>
//           <div className="flex items-center mt-4">
//           <img
//                 src="./images/news-one.jpg"
//                 alt="news"
//                 width={50}
//                 height={50}
//                 className="mr-4"
//               />
//             <div>
//               <p>JOHN DOE</p>
//               <a href="http://www.john.com" className="text-blue-400">www.john.com</a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Footer Section */}
      
//     </div>  )
// }

// export default newsection