import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { TiSocialGooglePlus } from "react-icons/ti";
import React from 'react';

const AboutusPage = () => {
    return (
        <div className='w-full h-auto'>
            {/* Phần breadcrumb */}
            <div className='relative w-full h-[313px]'>
                <img src="./images/about-us-breadcrumb.jpg" alt="about-us" className='w-full h-full object-cover' />
                <div className='absolute inset-0 flex flex-col items-center justify-center'>
                    <h2 className='text-white text-4xl sm:text-4xl mt-24 sm:mt-24 md:text-4xl md:mt-9' style={{ textShadow: '0 0 20px black' }}>ABOUT US</h2>
                    <img src="./images/nice-title-breadcrumb.png" alt="Additional" className='mt-2 h-auto' />
                    <div className="absolute w-[160px] sm:w-[160px] h-[200px] sm:h-[200px] md:w-[215px] md:h-[272px] top-0 right-55 sm:right-55 md:right-80 ">
                        <img
                            src="./images/special-offer-yellow-main.png"
                            alt="Lỗi ảnh"
                            className="w-full h-full"
                        />
                    </div>
                </div>
            </div>

            {/* Nội dung chính */}
            <div className='flex justify-center mt-10 sm:mt-20'>
                <div className='w-full px-[60px] py-6 sm:w-[90%] lg:w-[1140px] h-full md:px-4 md:py-0 sm:py-0 sm:px-4 '>
                    <p className='text-sm sm:text-base'>
                        Semper ac dolor vitae msan. Cras interdum hendreritnia Phasellus accumsan rna vitae molestie interdum. Nam sed placerat libero, non eleifend dolor. Cras ac justo et augue suscipit euismod vel eget lectus. Proin vehicula nunc arcu, pulvinar accumsan nuroin vehicula nunc arcu, pulvinarlla porta vel. Vivamus malesuada vitae sem ac pellentesque.
                    </p>
                </div>
            </div>

            {/* Facilities */}
            <div className='flex flex-col justify-center items-center w-full mt-10 sm:mt-20'>
                <div className='w-full px-4 sm:w-[90%] lg:w-[1140px]'>
                    <h5 className='text-xl text-[#131e2a] mb-9 font-bold pl-11 md:pl-0 sm:pl-0'>OUR ROOM FACILITIES</h5>
                </div>
                <div className='w-full px-[60px] sm:w-[90%] lg:w-[1140px] grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-2 text-[8px] sm:text-[13px] sm:px-4 md:text-lg md:px-4  '>
                    {/* Cột 1 */}
                    <div className='font-bold '>
                        <ul>
                            <li className='flex justify-start items-center mb-0 md:mb-7 '>
                                <img className='mr-2' src="./images/home-facilities-icon-one.png" alt="Breakfast" />
                                <p>Breakfast</p>
                            </li>
                            <li className='flex justify-start items-center mb-0 md:mb-7'>
                                <img className='mr-2' src="./images/home-facilities-icon-four.png" alt="Room Service" />
                                <p>Room service</p>
                            </li>
                        </ul>
                    </div>

                    {/* Cột 2 */}
                    <div className='font-bold '>
                        <ul>
                            <li className='flex justify-start items-center mb-0 md:mb-7'>
                                <img className='mr-2' src="./images/home-facilities-icon-two.png" alt="Air Conditioning" />
                                <p>Air conditioning</p>
                            </li>
                            <li className='flex justify-start items-center mb-0 md:mb-7 '>
                                <img className='mr-2' src="./images/home-facilities-icon-ten.png" alt="Gym" />
                                <p>GYM facility</p>
                            </li>
                        </ul>
                    </div>

                    {/* Cột 3 */}
                    <div className='font-bold '>
                        <ul>
                            <li className='flex justify-start items-center mb-0 md:mb-7'>
                                <img className='mr-2' src="./images/home-facilities-icon-eight.png" alt="Free Parking" />
                                <p>Free Parking</p>
                            </li>
                            <li className='flex justify-start items-center mb-0 md:mb-7'>
                                <img className='mr-2' src="./images/home-facilities-icon-five.png" alt="TV LCD" />
                                <p>TV LCD</p>
                            </li>
                        </ul>
                    </div>

                    <div className='font-bold border-0 md:border-solid md:border-r-[1px] md:border-[#e1e1e1] h-22 md:h-24'>
                        <ul>
                            <li className='flex justify-start items-center mb-0 md:mb-7'>
                                <img className='mr-2' src="./images/home-facilities-icon-three.png" alt="Pet allowed" />
                                <p>Pet allowed</p>
                            </li>
                            <li className='flex justify-start items-center mb-0 md:mb-7'>
                                <img className='mr-2' src="./images/home-facilities-icon-twelve.png" alt="Wi-fi service" />
                                <p>Wi-fi service</p>
                            </li>
                        </ul>
                    </div>

                    <div className='flex justify-center items-center'>
                        <a href='#' className=' w-fullborder-solid border-[1px] bg-[#fe5d5d] text-[#FFF] mt-4 md:mt-0 mb-4 py-3 px-4 md:px-6 text-sm font-semibold transition-colors duration-700 hover:bg-[#FFF] hover:text-[#fe5d5d] '>
                            BOOK ROOM
                        </a>
                    </div>
                </div>
                <div className='w-[290px] pt-5 px-4 sm:w-[90%] lg:w-[1140px] mx-[-15px] md:pt-0'>
                    <img src="./images/about-us-thumb.jpg" alt="About us thumb" />
                    <p className='mt-[45px]'>
                        Semper ac dolor vitae msan. Cras interdum hendreritnia Phasellus accumsan rna vitae molestie interdum. Nam sed placerat libero, non eleifend dolor. Cras ac justo et augue suscipit euismod vel eget lectus. Proin vehicula nunc arcu, pulvinar accumsan nuroin vehicula nunc arcu, pulvinarlla porta vel. Vivamus malesuada vitae sem ac pellentesque.
                    </p>
                </div>

                <div className='w-full px-4 sm:w-[90%] lg:w-[1140px] mt-10 sm:mt-20'>
                    <h5 className='text-xl text-[#131e2a] mb-9 font-bold pl-11 md:pl-0 sm:pl-0'>OUR HOTEL STAFF</h5>
                </div>
                <div className='w-[290px] px-4 sm:w-[290px] lg:w-[1140px] grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-2 mb-7 sm:px-4 '>
                    <figure className="relative group">
                        <div className="mb-[28px]">
                            <a href="#">
                                <img src="./images/about-us-staff-one.jpg" width={"100%"} alt="Staff 1" />
                            </a>
                        </div>
                        <div className="absolute inset-0 p-[13px] opacity-0 group-hover:opacity-100 bg-repeat transition-opacity duration-700 h-[258px] md:h-[272px] " style={{ backgroundColor: 'rgba(254, 109, 109, 0.8)' }}>
                            <div className="p-[22px] text-[#FFF]">
                                <h6 className="text-[16px] md:text-[18px] ">DOHN DOE</h6>
                                <span className='text-[14px]'>Hotel Manager</span>
                                <p className="text-[16px] mt-[15px] md:text-[19px] ">Semper ac dolor vitae msan. Cras interdum hendreritnia Phasellus accumsan rna.</p>
                                <div className="social-icons mt-4 flex space-x-4">
                                    <a href="#" className="text-[#FFF] hover:text-[#fe6d6d]">
                                        <FaFacebookF className="h-5 w-5" />
                                    </a>
                                    <a href="#" className="text-[#FFF] hover:text-[#fe6d6d]">
                                        <FaTwitter className="h-5 w-5" />
                                    </a>
                                    <a href="#" className="text-[#FFF] hover:text-[#fe6d6d]">
                                        <TiSocialGooglePlus className="h-6 w-6" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </figure>

                    <figure className="relative group">
                        <div className="mb-[28px]">
                            <a href="#">
                                <img src="./images/about-us-staff-two.jpg" width={"100%"} alt="Staff 1" />
                            </a>
                        </div>
                        <div className="absolute inset-0 p-[13px] opacity-0 group-hover:opacity-100 bg-repeat transition-opacity duration-700 h-[258px] md:h-[272px] " style={{ backgroundColor: 'rgba(254, 109, 109, 0.8)' }}>
                            <div className="p-[22px] text-[#FFF]">
                                <h6 className="text-[16px] md:text-[18px] ">DOHN DOE</h6>
                                <span className='text-[14px]'>Hotel Manager</span>
                                <p className="text-[16px] mt-[15px] md:text-[19px] ">Semper ac dolor vitae msan. Cras interdum hendreritnia Phasellus accumsan rna.</p>
                                <div className="social-icons mt-4 flex space-x-4">
                                    <a href="#" className="text-[#FFF] hover:text-[#fe6d6d]">
                                        <FaFacebookF className="h-5 w-5" />
                                    </a>
                                    <a href="#" className="text-[#FFF] hover:text-[#fe6d6d]">
                                        <FaTwitter className="h-5 w-5" />
                                    </a>
                                    <a href="#" className="text-[#FFF] hover:text-[#fe6d6d]">
                                        <TiSocialGooglePlus className="h-6 w-6" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </figure>

                    <figure className="relative group">
                        <div className="mb-[28px]">
                            <a href="#">
                                <img src="./images/about-us-staff-three.jpg" width={"100%"} alt="Staff 1" />
                            </a>
                        </div>
                        <div className="absolute inset-0 p-[13px] opacity-0 group-hover:opacity-100 bg-repeat transition-opacity duration-700 h-[258px] md:h-[272px] " style={{ backgroundColor: 'rgba(254, 109, 109, 0.8)' }}>
                            <div className="p-[22px] text-[#FFF]">
                                <h6 className="text-[16px] md:text-[18px] ">DOHN DOE</h6>
                                <span className='text-[14px]'>Hotel Manager</span>
                                <p className="text-[16px] mt-[15px] md:text-[19px] ">Semper ac dolor vitae msan. Cras interdum hendreritnia Phasellus accumsan rna.</p>
                                <div className="social-icons mt-4 flex space-x-4">
                                    <a href="#" className="text-[#FFF] hover:text-[#fe6d6d]">
                                        <FaFacebookF className="h-5 w-5" />
                                    </a>
                                    <a href="#" className="text-[#FFF] hover:text-[#fe6d6d]">
                                        <FaTwitter className="h-5 w-5" />
                                    </a>
                                    <a href="#" className="text-[#FFF] hover:text-[#fe6d6d]">
                                        <TiSocialGooglePlus className="h-6 w-6" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </figure>

                    <figure className="relative group">
                        <div className="mb-[28px]">
                            <a href="#">
                                <img src="./images/about-us-staff-four.jpg" width={"100%"} alt="Staff 1" />
                            </a>
                        </div>
                        <div className="absolute inset-0 p-[13px] opacity-0 group-hover:opacity-100 bg-repeat transition-opacity duration-700 h-[258px] md:h-[272px] " style={{ backgroundColor: 'rgba(254, 109, 109, 0.8)' }}>
                            <div className="p-[22px] text-[#FFF]">
                                <h6 className="text-[16px] md:text-[18px]">DOHN DOE</h6>
                                <span className='text-[14px]'>Hotel Manager</span>
                                <p className="text-[16px] mt-[15px] md:text-[19px]">Semper ac dolor vitae msan. Cras interdum hendreritnia Phasellus accumsan rna.</p>
                                <div className="social-icons mt-4 flex space-x-4">
                                    <a href="#" className="text-[#FFF] hover:text-[#fe6d6d]">
                                        <FaFacebookF className="h-5 w-5" />
                                    </a>
                                    <a href="#" className="text-[#FFF] hover:text-[#fe6d6d]">
                                        <FaTwitter className="h-5 w-5" />
                                    </a>
                                    <a href="#" className="text-[#FFF] hover:text-[#fe6d6d]">
                                        <TiSocialGooglePlus className="h-6 w-6" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </figure>
                </div>
            </div>
        </div>
    );
};

export default AboutusPage;