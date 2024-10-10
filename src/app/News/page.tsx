import React from 'react';
import BannerComponent from '@/components/page/banner';
import { Button } from 'react-day-picker';
const NewsPage = () => {
    return (
        <>
            <BannerComponent />
            <div className="flex w-4/5 mx-auto my-[80px] justify-around">
                <div className="w-[31%]">
                    <div className="w-full bg-[#f0f0f0] item mb-6">
                        <div className="w-full relative">
                            <img className="w-full bg-cover	" src="/images/blog-pic1.jpg" alt="" />
                            <div className="bg-red-500 h-[38px] w-[38px] absolute top-[-10px] left-[10px] transform -translate-x-1 -translate-y-1">
                                <i className="fa fa-heart text-white text-[17px] h-[38px] text-center w-[38px] pt-[10px]"></i>
                            </div>
                            <div className="bg-[#555] h-[40px] w-[48px] absolute top-[84%] left-[88%] transform -translate-x-1 -translate-y-1">
                                <i className="fa fa-link text-white text-center text-[14px] leading-[40px] h-[40px] w-[48px] hover:text-[#3ac4fa] hover:cursor-pointer"></i>
                            </div>
                        </div>
                        <div className="p-5">
                            <h5 className="text-xl uppercase" style={{ fontFamily: "Playfair Display, serif;" }}>Restaurant Services open</h5>
                            <div className="text-[#878787] text-[12px] py-2">
                                <a href="#" className="hover:text-red-400">By Admin |</a>
                                <a href="#" className="ml-1 hover:text-red-400">3 Jan 2015 |</a>
                                <a href="#" className="ml-1 hover:text-red-400">3 Comment</a>
                            </div>
                            <p className="my-4">Phasellus accumsan urna vitae molestie interdum. Nam sed placerat libero, non eleifend dolor.</p>
                            <a href="#" className="text-[#3ac4fa] hover:text-red-400">Read More</a>
                        </div>
                    </div>
                    <div className="w-full bg-[#f0f0f0] item mb-6">
                        <div className="w-full relative">
                            <img className="w-full bg-cover h-[100%]" src="/images/blog-pic-link-bg.png" alt="" />
                            <div className="bg-[#555] h-[40px] w-[48px] absolute top-[70%] left-[88%] transform -translate-x-1 -translate-y-1">
                                <i className="fa fa-link text-white text-center text-[14px] leading-[40px] h-[40px] w-[48px] hover:text-[#3ac4fa] hover:cursor-pointer"></i>
                            </div>
                            <a className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-[20px] px-[31px] py-[35px] block w-full h-full" href="#">http:// themeforest.net/users/wpmines</a>
                        </div>
                        <div className="p-5 pt-0">
                            <div className="text-[#878787] text-[12px] py-2">
                                <a href="#" className="hover:text-red-400">By Admin |</a>
                                <a href="#" className="ml-1 hover:text-red-400">3 Jan 2015 |</a>
                                <a href="#" className="ml-1 hover:text-red-400">3 Comment</a>
                            </div>
                            <p className="my-4">Phasellus accumsan urna vitae molestie interdum. Nam sed placerat libero, non eleifend dolor.</p>
                            <a href="#" className="text-[#3ac4fa] hover:text-red-400">Read More</a>
                        </div>
                    </div>
                    <div className="w-full bg-[#f0f0f0] item">
                        <div className="w-full relative">
                            <img className="w-full bg-cover	" src="/images/blog-pic5.jpg" alt="" />
                            <div className="bg-[#555] h-[40px] w-[48px] absolute top-[84%] left-[88%] transform -translate-x-1 -translate-y-1">
                                <i className="fa fa-link text-white text-center text-[14px] leading-[40px] h-[40px] w-[48px] hover:text-[#3ac4fa] hover:cursor-pointer"></i>
                            </div>
                        </div>
                        <div className="p-5">
                            <h5 className="text-xl uppercase" style={{ fontFamily: "Playfair Display, serif;" }}>Restaurant Services open</h5>
                            <div className="text-[#878787] text-[12px] py-2">
                                <a href="#" className="hover:text-red-400">By Admin |</a>
                                <a href="#" className="ml-1 hover:text-red-400">3 Jan 2015 |</a>
                                <a href="#" className="ml-1 hover:text-red-400">3 Comment</a>
                            </div>
                            <p className="my-4">Phasellus accumsan urna vitae molestie interdum. Nam sed placerat libero, non eleifend dolor.</p>
                            <a href="#" className="text-[#3ac4fa] hover:text-red-400">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="w-[31%]">
                    <div className="w-full bg-[#f0f0f0] item mb-6">
                        <div className="w-full relative">
                            <img className="w-full bg-cover h-[100%]" src="/images/blog-pic-link-bg.png" alt="" />
                            <a className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-[20px] px-[31px] py-[35px] block w-full h-full" href="#">http:// themeforest.net/users/wpmines</a>
                            <div className="bg-[#555] h-[40px] w-[48px] absolute top-[70%] left-[88%] transform -translate-x-1 -translate-y-1">
                                <i className="fa fa-link text-white text-center text-[14px] leading-[40px] h-[40px] w-[48px] hover:text-[#3ac4fa] hover:cursor-pointer"></i>
                            </div>
                        </div>
                        <div className="p-5 pt-0">
                            <div className="text-[#878787] text-[12px] py-2">
                                <a href="#" className="hover:text-red-400">By Admin |</a>
                                <a href="#" className="ml-1 hover:text-red-400">3 Jan 2015 |</a>
                                <a href="#" className="ml-1 hover:text-red-400">3 Comment</a>
                            </div>
                            <p className="my-4">Phasellus accumsan urna vitae molestie interdum. Nam sed placerat libero, non eleifend dolor.</p>
                            <a href="#" className="text-[#3ac4fa] hover:text-red-400">Read More</a>
                        </div>
                    </div>
                    <div className="w-full bg-[#f0f0f0] item mb-6">
                        <div className="w-full relative">
                            <img className="w-full bg-cover	" src="/images/blog-pic4.jpg" alt="" />
                            <div className="bg-[#555] h-[40px] w-[48px] absolute top-[84%] left-[88%] transform -translate-x-1 -translate-y-1">
                                <i className="fa fa-link text-white text-center text-[14px] leading-[40px] h-[40px] w-[48px] hover:text-[#3ac4fa] hover:cursor-pointer"></i>
                            </div>
                        </div>
                        <div className="p-5">
                            <h5 className="text-xl uppercase" style={{ fontFamily: "Playfair Display, serif;" }}>Restaurant Services open</h5>
                            <div className="text-[#878787] text-[12px] py-2">
                                <a href="#" className="hover:text-red-400">By Admin |</a>
                                <a href="#" className="ml-1 hover:text-red-400">3 Jan 2015 |</a>
                                <a href="#" className="ml-1 hover:text-red-400">3 Comment</a>
                            </div>
                            <p className="my-4">Phasellus accumsan urna vitae molestie interdum. Nam sed placerat libero, non eleifend dolor.</p>
                            <a href="#" className="text-[#3ac4fa] hover:text-red-400">Read More</a>
                        </div>
                    </div>
                    <div className="w-full bg-[#f0f0f0] item">
                        <div className="w-full relative">
                            <img className="w-full bg-cover	" src="/images/blog-pic7.jpg" alt="" />
                            <div className="bg-[#555] h-[40px] w-[48px] absolute top-[84%] left-[88%] transform -translate-x-1 -translate-y-1">
                                <i className="fa fa-link text-white text-center text-[14px] leading-[40px] h-[40px] w-[48px] hover:text-[#3ac4fa] hover:cursor-pointer"></i>
                            </div>
                        </div>
                        <div className="p-5">
                            <h5 className="text-xl uppercase" style={{ fontFamily: "Playfair Display, serif;" }}>Restaurant Services open</h5>
                            <div className="text-[#878787] text-[12px] py-2">
                                <a href="#" className="hover:text-red-400">By Admin |</a>
                                <a href="#" className="ml-1 hover:text-red-400">3 Jan 2015 |</a>
                                <a href="#" className="ml-1 hover:text-red-400">3 Comment</a>
                            </div>
                            <p className="my-4">Phasellus accumsan urna vitae molestie interdum. Nam sed placerat libero, non eleifend dolor.</p>
                            <a href="#" className="text-[#3ac4fa] hover:text-red-400">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="w-[31%]">
                    <div className="w-full bg-[#f0f0f0] item mb-6">
                        <div className="w-full relative" >
                            <img className="w-full bg-cover	" src="/images/blog-pic3.jpg" alt="" />
                            <div className="bg-[#555] h-[40px] w-[48px] absolute top-[73%] left-[88%] transform -translate-x-1 -translate-y-1">
                                <i className="fa fa-link text-white text-center text-[14px] leading-[40px] h-[40px] w-[48px] hover:text-[#3ac4fa] hover:cursor-pointer"></i>
                            </div>
                        </div>
                        <div className="p-5">
                            <h5 className="text-xl uppercase" style={{ fontFamily: "Playfair Display, serif;" }}>Restaurant Services open</h5>
                            <div className="text-[#878787] text-[12px] py-2">
                                <a href="#" className="hover:text-red-400">By Admin |</a>
                                <a href="#" className="ml-1 hover:text-red-400">3 Jan 2015 |</a>
                                <a href="#" className="ml-1 hover:text-red-400">3 Comment</a>
                            </div>
                            <p className="my-4">Phasellus accumsan urna vitae molestie interdum. Nam sed placerat libero, non eleifend dolor.</p>
                            <a href="#" className="text-[#3ac4fa] hover:text-red-400">Read More</a>
                        </div>
                    </div>
                    <div className="w-full bg-[#f0f0f0] item mb-6">
                        <div className="w-full relative">
                            <img className="w-full bg-cover h-[100%]" src="/images/blog-pic-link-bg.png" alt="" />
                            <a className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-[20px] px-[31px] py-[35px] block w-full h-full" href="#">http:// themeforest.net/users/wpmines</a>
                            <div className="bg-[#555] h-[40px] w-[48px] absolute top-[70%] left-[88%] transform -translate-x-1 -translate-y-1">
                                <i className="fa fa-link text-white text-center text-[14px] leading-[40px] h-[40px] w-[48px] hover:text-[#3ac4fa] hover:cursor-pointer"></i>
                            </div>
                        </div>
                        <div className="p-5 pt-0">
                            <div className="text-[#878787] text-[12px] py-2">
                                <a href="#" className="hover:text-red-400">By Admin |</a>
                                <a href="#" className="ml-1 hover:text-red-400">3 Jan 2015 |</a>
                                <a href="#" className="ml-1 hover:text-red-400">3 Comment</a>
                            </div>
                            <p className="my-4">Phasellus accumsan urna vitae molestie interdum. Nam sed placerat libero, non eleifend dolor.</p>
                            <a href="#" className="text-[#3ac4fa] hover:text-red-400">Read More</a>
                        </div>
                    </div>
                    <div className="w-full bg-[#f0f0f0] item">
                        <div className="w-full relative">
                            <img className="w-full bg-cover	" src="/images/blog-pic6.jpg" alt="" />
                            <div className="bg-[#555] h-[40px] w-[48px] absolute top-[84%] left-[88%] transform -translate-x-1 -translate-y-1">
                                <i className="fa fa-link text-white text-center text-[14px] leading-[40px] h-[40px] w-[48px] hover:text-[#3ac4fa] hover:cursor-pointer"></i>
                            </div>
                        </div>
                        <div className="p-5">
                            <h5 className="text-xl uppercase" style={{ fontFamily: "Playfair Display, serif;" }}>Restaurant Services open</h5>
                            <div className="text-[#878787] text-[12px] py-2">
                                <a href="#" className="hover:text-red-400">By Admin |</a>
                                <a href="#" className="ml-1 hover:text-red-400">3 Jan 2015 |</a>
                                <a href="#" className="ml-1 hover:text-red-400">3 Comment</a>
                            </div>
                            <p className="my-4">Phasellus accumsan urna vitae molestie interdum. Nam sed placerat libero, non eleifend dolor.</p>
                            <a href="#" className="text-[#3ac4fa] hover:text-red-400">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full h-[50px] flex justify-center mb-8'>
                <button className='border border-red-600 bg-red-600 text-[16px] text-white py-1 px-4 hover:text-red-600 hover:bg-white'>Load More</button>
            </div>
        </>
    );
};

export default NewsPage;