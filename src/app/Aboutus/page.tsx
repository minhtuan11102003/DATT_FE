import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { TiSocialGooglePlus } from "react-icons/ti";
import React from 'react';

const AboutusPage = () => {
    return (
        <div className='w-full h-[2000px]'>
            <div className='relative w-full h-[313px]'>
                <img src="./images/about-us-breadcrumb.jpg" alt="about-us" className='w-full h-full object-cover' />
                <div className='absolute inset-0 flex flex-col items-center justify-center'>
                    <h2 className='text-white text-4xl mt-9' style={{ textShadow: '0 0 20px black' }}>ABOUT US</h2>
                    <img src="./images/nice-title-breadcrumb.png" alt="Additional" className='mt-2 h-auto' />
                    <div className="absolute w-[215px] h-[272px] top-0 right-80">
                        <img
                            src="./images/special-offer-yellow-main.png"
                            alt="Lỗi ảnh"
                            className="w-full h-full"
                        />
                    </div>
                </div>
            </div>
            <div className='flex justify-center mt-20'>
                <div className='w-[1140px] h-full'>
                    <p>Semper ac dolor vitae msan. Cras interdum hendreritnia Phasellus accumsan rna vitae molestie interdum. Nam sed placerat libero, non eleifend dolor. Cras ac justo et augue suscipit euismod vel eget lectus. Proin vehicula nunc arcu, pulvinar accumsan nuroin vehicula nunc arcu, pulvinarlla porta vel. Vivamus malesuada vitae sem ac pellentesque.</p>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center w-full mt-20'>
                <div className='w-[1140px]'>
                    <h5 className='text-xl text-[#131e2a] mb-9'>OUR ROOM FACILITIES</h5>
                </div>
                <div className='w-[1170px] grid grid-cols-5 gap-2 mb-7' >
                    <div className='font-bold text-lg '>
                        <ul>
                            <li className='flex justify-start items-center mb-7 ml-5'>
                                <img className='mr-2' src="./images/home-facilities-icon-one.png" alt="" />
                                <p>Breakfast</p>
                            </li>
                            <li className='flex justify-start items-center mb-7 ml-5'>
                                <img className='mr-2' src="./images/home-facilities-icon-four.png" alt="" />
                                <p>Room service</p>
                            </li>
                        </ul>
                    </div>
                    <div className='font-bold text-lg '>
                        <ul>
                            <li className='flex justify-start items-center mb-7 ml-5'>
                                <img className='mr-2' src="./images/home-facilities-icon-two.png" alt="" />
                                <p>Air conditioning</p>
                            </li>
                            <li className='flex justify-start items-center mb-7 ml-5'>
                                <img className='mr-2' src="./images/home-facilities-icon-ten.png" alt="" />
                                <p>GYM fecility</p>
                            </li>
                        </ul>
                    </div>
                    <div className='font-bold text-lg '>
                        <ul>
                            <li className='flex justify-start items-center mb-7 ml-5'>
                                <img className='mr-2' src="./images/home-facilities-icon-eight.png" alt="" />
                                <p>Free Parking</p>
                            </li>
                            <li className='flex justify-start items-center mb-7 ml-5'>
                                <img className='mr-2' src="./images/home-facilities-icon-five.png" alt="" />
                                <p>TV LCD</p>
                            </li>
                        </ul>
                    </div>
                    <div className='font-bold text-lg border-solid border-r-[1px] border-[#e1e1e1] h-24'>
                        <ul>
                            <li className='flex justify-start items-center mb-7 ml-5'>
                                <img className='mr-2' src="./images/home-facilities-icon-three.png" alt="" />
                                <p>Pet allowed</p>
                            </li>
                            <li className='flex justify-start items-center mb-7 ml-5'>
                                <img className='mr-2' src="./images/home-facilities-icon-twelve.png" alt="" />
                                <p>Wi-fi service</p>
                            </li>
                        </ul>
                    </div>
                    <div className='flex justify-center items-center'>
                        <a href='#' className='border-solid border-[1px] bg-[#fe5d5d] text-[#FFF] mb-4 py-3 px-6 text-sm font-semibold transition-colors duration-700 hover:bg-[#FFF] hover:text-[#fe5d5d]'>
                            BOOK ROOM
                        </a>
                    </div>
                </div>
                <div className='w-[1140px] mx-[-15px]'>
                    <img src="./images/about-us-thumb.jpg" alt="" />
                    <p className='mt-[45px]'>Semper ac dolor vitae msan. Cras interdum hendreritnia Phasellus accumsan rna vitae molestie interdum. Nam sed placerat libero, non eleifend dolor. Cras ac justo et augue suscipit euismod vel eget lectus. Proin vehicula nunc arcu, pulvinar accumsan nuroin vehicula nunc arcu, pulvinarlla porta vel. Vivamus malesuada vitae sem ac pellentesque.</p>
                </div>
                <div className='w-[1140px] mt-20'>
                    <h5 className='text-xl text-[#131e2a] mb-9'>OUR HOTEL STAFF</h5>
                </div>
                <div className='w-[1170px] grid grid-cols-4 gap-2 mb-7'>
                    <figure className="figure-hover relative group"> {/* Thêm lớp group */}
                        <div className="mb-[28px]">
                            <a>
                                <img
                                    src="./images/about-us-staff-one.jpg"
                                    width={"100%"}
                                    alt="room-eight"
                                />
                            </a>
                        </div>
                        <div className="bounch-hover p-[13px] opacity-0 group-hover:opacity-100 bg-repeat h-[287px] w-full text-left top-0 left-0 bottom-0 right-0 absolute transition-opacity duration-700" style={{ backgroundColor: 'rgba(254, 109, 109, 0.8)' }}>
                            <div className="p-[22px] text-[#FFF]">
                                <h6 className="font-[18px] leading-5">DOHN DOE</h6>
                                <span className='text-[14px]'>Hotel Manager</span>
                                <p className="text-[19px] mt-[15px]">
                                    Semper ac dolor vitae msan. Cras interdum hendreritnia Phasellus accumsan rna.
                                </p>
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
                    <figure className="figure-hover relative group"> {/* Thêm lớp group */}
                        <div className="mb-[28px]">
                            <a>
                                <img
                                    src="./images/about-us-staff-two.jpg"
                                    width={"100%"}
                                    alt="room-eight"
                                />
                            </a>
                        </div>
                        <div className="bounch-hover p-[13px] opacity-0 group-hover:opacity-100 bg-repeat h-[287px] w-full text-left top-0 left-0 bottom-0 right-0 absolute transition-opacity duration-700" style={{ backgroundColor: 'rgba(254, 109, 109, 0.8)' }}>
                            <div className="p-[22px] text-[#FFF]">
                                <h6 className="font-[18px] leading-5">DOHN DOE</h6>
                                <span className='text-[14px]'>Hotel Manager</span>
                                <p className="text-[19px] mt-[15px]">
                                    Semper ac dolor vitae msan. Cras interdum hendreritnia Phasellus accumsan rna.
                                </p>
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
                    <figure className="figure-hover relative group"> {/* Thêm lớp group */}
                        <div className="mb-[28px]">
                            <a>
                                <img
                                    src="./images/about-us-staff-three.jpg"
                                    width={"100%"}
                                    alt="room-eight"
                                />
                            </a>
                        </div>
                        <div className="bounch-hover p-[13px] opacity-0 group-hover:opacity-100 bg-repeat h-[287px] w-full text-left top-0 left-0 bottom-0 right-0 absolute transition-opacity duration-700" style={{ backgroundColor: 'rgba(254, 109, 109, 0.8)' }}>
                            <div className="p-[22px] text-[#FFF]">
                                <h6 className="font-[18px] leading-5">DOHN DOE</h6>
                                <span className='text-[14px]'>Hotel Manager</span>
                                <p className="text-[19px] mt-[15px]">
                                    Semper ac dolor vitae msan. Cras interdum hendreritnia Phasellus accumsan rna.
                                </p>
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
                    <figure className="figure-hover relative group"> {/* Thêm lớp group */}
                        <div className="mb-[28px]">
                            <a>
                                <img
                                    src="./images/about-us-staff-four.jpg"
                                    width={"100%"}
                                    alt="room-eight"
                                />
                            </a>
                        </div>
                        <div className="bounch-hover p-[13px] opacity-0 group-hover:opacity-100 bg-repeat h-[287px] w-full text-left top-0 left-0 bottom-0 right-0 absolute transition-opacity duration-700" style={{ backgroundColor: 'rgba(254, 109, 109, 0.8)' }}>
                            <div className="p-[22px] text-[#FFF]">
                                <h6 className="font-[18px] leading-5">DOHN DOE</h6>
                                <span className='text-[14px]'>Hotel Manager</span>
                                <p className="text-[19px] mt-[15px]">
                                    Semper ac dolor vitae msan. Cras interdum hendreritnia Phasellus accumsan rna.
                                </p>
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