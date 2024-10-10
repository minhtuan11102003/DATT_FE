"use client";
import Link from "next/link";
import { ChevronDown } from 'lucide-react';
import { Facebook, Instagram, Linkedin, Mail, Twitter } from 'lucide-react';
import { DatePickerDemo } from "@/components/ui/date-picker";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import BannerComponent from "../components/page/banner";
// import Contact from "@/components/page/contact";
import { useState } from "react";


  const images  = [
    "/images/cS-27.jpg",
    "/images/cS-21.jpg",
    "/images/cS-27.jpg",
    "/images/cS-21.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };
export default function Home() {
  return (
    <div className="w-full ">
      <div className="sectionDate w-full h-[570px] relative mt-6 pb-[90px]">
        <div className="w-full h-full flex justify-center ">
          <div className="w-[1140px] h-[100px] py-[26px] px-[10px] absolute text-[#aab8ca] bg-[#313a45] z-10">
            <div className="w-[1120px] h-full flex items-end gap-8 pl-2 ">
              <div className="w-[135px] h-full flex flex-col">
                <p className="text-[#fff] text-[15px] font-[600px] h-[15px]">
                  BOOK YOUR
                </p>
                <span className="text-[#fff] text-[30px] font-[700px] h-[25px]">
                  ROOMS
                </span>
              </div>
              <span className="border h-[40px]"></span>
              <div className="w-[160px] ">
                <DatePickerDemo />
              </div>
              <div className="w-[160px] ">
                <DatePickerDemo />
              </div>
              <div className="w-[120px] ">
                <Select>
                  <SelectTrigger className="w-[120px]">
                    <SelectValue placeholder="1 ROOM" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#313a45] text-[#aab8ca]">
                    <SelectItem value="1 ROOM">1 ROOM</SelectItem>
                    <SelectItem value="2 ROOM">2 ROOM</SelectItem>
                    <SelectItem value="3 ROOM">3 ROOM</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="w-[120px] ">
                <Select>
                  <SelectTrigger className="w-[120px]">
                    <SelectValue placeholder="1 ADULT" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#313a45] text-[#aab8ca]">
                    <SelectItem value="1 ADULT">1 ADULT</SelectItem>
                    <SelectItem value="2 ADULT">2 ADULT</SelectItem>
                    <SelectItem value="3 ADULT">3 ADULT</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="w-[120px] ">
                <Select>
                  <SelectTrigger className="w-[120px]">
                    <SelectValue placeholder="0 CHILD" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#313a45] text-[#aab8ca]">
                    <SelectItem value="0 CHILD">0 CHILD</SelectItem>
                    <SelectItem value="1 CHILD">1 CHILD</SelectItem>
                    <SelectItem value="2 CHILD">2 CHILD</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="w-[120px] ">
                <Button className="bg-[#f7c411] text-[#313a45] font-extrabold text-[16px]">
                  BOOK
                </Button>
              </div>
            </div>
            <div className="relative w-[223px] h-[276px] top-[26px] left-[907px]">
              <img
                src="./images/special-offer-main.png"
                alt="Lỗi ảnh"
                className="w-full h-full"
              />
            </div>
          </div>
          <div className="w-full h-full">
            <BannerComponent />
          </div>
        </div>
      </div>
      <div className="sectionNew w-full h-[550px] border flex justify-center">
        <div className="w-[1140px] flex items-center">
          <div className="w-1/2 h-[400px] ">
          <div>
          <h2 className="text-xl font-semibold text-white-500 mb-6">News</h2>
          <div className="space-y-6">
            <div className="flex items-center">
              <img
                src="./images/news-one.jpg"
                alt="news"
                width={80}
                height={80}
                className="mr-4"
              />
              <div>
                <h3 className="text-sm font-semibold">QUISQUE AT FELIS PORT TITORDGA</h3>
                <p className="text-xs text-gray-400">14 May 2014</p>
              </div>
            </div>
            <div className="flex items-center">
            <img
                src="./images/news-one.jpg"
                alt="news"
                width={80}
                height={80}
                className="mr-4"
              />
              <div>
                <h3 className="text-sm font-semibold">DONEC SCELERISQUE VULPUTATE</h3>
                <p className="text-xs text-gray-400">15 May 2014</p>
              </div>
            </div>
            <div className="flex items-center">
            <img
                src="./images/news-one.jpg"
                alt="news"
                width={80}
                height={80}
                className="mr-4"
              />
              <div>
                <h3 className="text-sm font-semibold">CURABITUR VARIUS QUAM LOREM</h3>
                <p className="text-xs text-gray-400">17 May 2014</p>
              </div>
            </div>
          </div>
        </div>
          </div>
         
          <div className="grid grid-cols-3 h-[400px]">
  {/* Hotel Showcase Section */}
  <div className="col-span-2">
    <h2 className="text-xl font-bold text-white-500 mb-4">Hotel Showcase</h2>
    <div className="relative ">
      <img
        src={images[currentIndex]}
        alt="Hotel showcase"
        className="w-[] h-[300px] object-cover"
      />
      <button
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
        onClick={prevImage}
      >
        &lt;
      </button>
      <button
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
        onClick={nextImage}
      >
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
        onClick={() => setCurrentIndex(index)}
      />
    ))}
  </div>
</div>

          <div className="w-1/3 h-[400px] ">
          <div>
          <h2 className="text-xl font-semibold text-white-500 mb-6">Customer Says</h2>
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
                className="mr-4"
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
      

              
              </div>
            
  );
}
