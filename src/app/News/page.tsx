import React from 'react';
const NewsPage = () => {
    return (
        <>
         <div className='w-full md:w-full xs:w-full'>
            <section className='bannerSection h-[333px] relative md:w-full xs:w-fulll'>
                <img src="./images/banner-section/bannerBooking.jpg" alt="Lỗi hình mong reload trang" className='md:w-full md:h-full xs:w-full xs:h-full h-full object-cover bg-none' />
                <div className='logoGiamGia w-[150px] h-[189px] absolute top-0 right-[30%] md:w-[215px] md:h-[272px] md:right-[10%] xs:right-[30%]'>
                    <img src="./images/giamGia.png" alt="Lỗi hình ảnh" className='w-full h-full object-cover' />
                </div>
                <div className='w-full h-[105px] flex flex-col items-center justify-around absolute top-[40%] '>
                    <h1 className='font-medium text-[44px] text-white font-PlayfairDisplay'>NEWS</h1>
                    <img src="./images/nice-title-breadcrumb.png" alt="" />
                </div>
            </section>
        </div>
        {/* news */}
            <div className="lg:flex md:flex w-4/5 lg:w-[80%] md:w-[90%] mx-auto my-[50px] justify-around">
                <div className="lg:w-[31%] md:w-[30%] mb-[20px]">
                    <div className="w-full bg-[#f0f0f0] item mb-6">
                        <div className="w-full relative">
                            <img className="w-full bg-cover" src="/images/blog-pic1.jpg" alt="" />
                            <div className="bg-[#FE5D5D] h-[38px] w-[38px] absolute top-[-10px] left-[10px] transform -translate-x-1 -translate-y-1">
                                <i className="fa fa-heart text-white text-[17px] h-[38px] text-center w-[38px] pt-[10px]"></i>
                            </div> 
                            <div className="bg-[#555] h-[40px] w-[48px] absolute left-[87%] top-[82%] lg:top-[84%] md:left-[84%] md:top-[77%] lg:left-[88%] transform -translate-x-1 -translate-y-1">
                                <i className="fa fa-link text-white text-center text-[14px] mt-[13px] h-[40px] w-[48px] hover:text-[#3ac4fa] hover:cursor-pointer"></i>
                            </div>
                        </div>
                        <div className="p-5">
                            <h5 className="text-xl uppercase text-black" style={{ fontFamily: "Playfair Display, serif;" }}>Restaurant Services open</h5>
                            <div className="text-[#878787] text-[12px] py-2">
                                <a href="#" className="hover:text-red-400">By Admin |</a>
                                <a href="#" className="ml-1 hover:text-red-400">3 Jan 2015 |</a>
                                <a href="#" className="ml-1 hover:text-red-400">3 Comment</a>
                            </div>
                            <p className="my-2 lg:my-4">Phasellus accumsan urna vitae molestie interdum. Nam sed placerat libero, non eleifend dolor.</p>
                            <a href="#" className="text-[#3ac4fa] hover:text-red-400">Read More</a>
                        </div>
                    </div>
                    <div className="w-full bg-[#f0f0f0] item mb-6">
                        <div className="w-full relative">
                            <img className="w-full bg-cover h-[100%]" src="/images/blog-pic-link-bg.png" alt="" />
                            <div className="bg-[#555] h-[40px] w-[48px] left-[87%] top-[67%] absolute lg:top-[70%] md:left-[84%] md:top-[61%] lg:left-[88%] transform -translate-x-1 -translate-y-1">
                                <i className="fa fa-link text-white text-center mt-[13px] text-[14px] leading-[40px] h-[40px] w-[48px] hover:text-[#3ac4fa] hover:cursor-pointer"></i>
                            </div>
                            <h5 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-[20px] px-[30px] py-[20px] block w-full h-full md:text-[14px] lg:text-[20px]">http:// themeforest.net/users/wpmines</h5>
                        </div>
                        <div className="p-5 pt-0">
                            <div className="text-[#878787] text-[12px] py-2">
                                <a href="#" className="hover:text-red-400">By Admin |</a>
                                <a href="#" className="ml-1 hover:text-red-400">3 Jan 2015 |</a>
                                <a href="#" className="ml-1 hover:text-red-400">3 Comment</a>
                            </div>
                            <p className="my-2 lg:my-4">Phasellus accumsan urna vitae molestie interdum. Nam sed placerat libero, non eleifend dolor.</p>
                            <a href="#" className="text-[#3ac4fa] hover:text-red-400">Read More</a>
                        </div>
                    </div>
                    <div className="w-full bg-[#f0f0f0] item">
                        <div className="w-full relative">
                            <img className="w-full bg-cover	" src="/images/blog-pic5.jpg" alt="" />
                            <div className="bg-[#555] h-[40px] w-[48px] absolute left-[87%] top-[82%] lg:top-[84%] lg:left-[88%] md:left-[84%] md:top-[77%] transform -translate-x-1 -translate-y-1">
                                <i className="fa fa-link text-white text-center mt-[13px] text-[14px] leading-[40px] h-[40px] w-[48px] hover:text-[#3ac4fa] hover:cursor-pointer"></i>
                            </div>
                        </div>
                        <div className="p-5">
                            <h5 className="text-xl uppercase" style={{ fontFamily: "Playfair Display, serif;" }}>Restaurant Services open</h5>
                            <div className="text-[#878787] text-[12px] py-2">
                                <a href="#" className="hover:text-red-400">By Admin |</a>
                                <a href="#" className="ml-1 hover:text-red-400">3 Jan 2015 |</a>
                                <a href="#" className="ml-1 hover:text-red-400">3 Comment</a>
                            </div>
                            <p className="my-2 lg:my-4">Phasellus accumsan urna vitae molestie interdum. Nam sed placerat libero, non eleifend dolor.</p>
                            <a href="#" className="text-[#3ac4fa] hover:text-red-400">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="lg:w-[31%] md:w-[30%] mb-[20px]">
                    <div className="w-full bg-[#f0f0f0] item mb-6">
                        <div className="w-full relative">
                            <img className="w-full bg-cover h-[100%]" src="/images/blog-pic-link-bg.png" alt="" />
                            <h5 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-[20px] px-[30px] py-[20px] block w-full h-full md:text-[14px] lg:text-[20px]">http:// themeforest.net/users/wpmines</h5>
                            <div className="bg-[#555] h-[40px] w-[48px] left-[87%] top-[67%] md:left-[84%] md:top-[61%] absolute lg:top-[70%] lg:left-[88%] transform -translate-x-1 -translate-y-1">
                                <i className="fa fa-link text-white text-center mt-[13px] text-[14px] leading-[40px] h-[40px] w-[48px] hover:text-[#3ac4fa] hover:cursor-pointer"></i>
                            </div>
                        </div>
                        <div className="p-5 pt-0">
                            <div className="text-[#878787] text-[12px] py-2">
                                <a href="#" className="hover:text-red-400">By Admin |</a>
                                <a href="#" className="ml-1 hover:text-red-400">3 Jan 2015 |</a>
                                <a href="#" className="ml-1 hover:text-red-400">3 Comment</a>
                            </div>
                            <p className="my-2 lg:my-4">Phasellus accumsan urna vitae molestie interdum. Nam sed placerat libero, non eleifend dolor.</p>
                            <a href="#" className="text-[#3ac4fa] hover:text-red-400">Read More</a>
                        </div>
                    </div>
                    <div className="w-full bg-[#f0f0f0] item mb-6">
                        <div className="w-full relative">
                            <img className="w-full bg-cover	" src="/images/blog-pic4.jpg" alt="" />
                            <div className="bg-[#555] h-[40px] w-[48px] left-[87%] top-[82%] md:left-[84%] md:top-[77%] absolute lg:top-[84%] lg:left-[88%] transform -translate-x-1 -translate-y-1">
                                <i className="fa fa-link text-white text-center mt-[13px] text-[14px] leading-[40px] h-[40px] w-[48px] hover:text-[#3ac4fa] hover:cursor-pointer"></i>
                            </div>
                        </div>
                        <div className="p-5">
                            <h5 className="text-xl uppercase" style={{ fontFamily: "Playfair Display, serif;" }}>Restaurant Services open</h5>
                            <div className="text-[#878787] text-[12px] py-2">
                                <a href="#" className="hover:text-red-400">By Admin |</a>
                                <a href="#" className="ml-1 hover:text-red-400">3 Jan 2015 |</a>
                                <a href="#" className="ml-1 hover:text-red-400">3 Comment</a>
                            </div>
                            <p className="my-2 lg:my-4">Phasellus accumsan urna vitae molestie interdum. Nam sed placerat libero, non eleifend dolor.</p>
                            <a href="#" className="text-[#3ac4fa] hover:text-red-400">Read More</a>
                        </div>
                    </div>
                    <div className="w-full bg-[#f0f0f0] item">
                        <div className="w-full relative">
                            <img className="w-full bg-cover	" src="/images/blog-pic7.jpg" alt="" />
                            <div className="bg-[#555] h-[40px] w-[48px] left-[87%] top-[82%] md:left-[84%] md:top-[77%] absolute lg:top-[84%] lg:left-[88%] transform -translate-x-1 -translate-y-1">
                                <i className="fa fa-link text-white mt-[13px] text-center text-[14px] leading-[40px] h-[40px] w-[48px] hover:text-[#3ac4fa] hover:cursor-pointer"></i>
                            </div>
                        </div>
                        <div className="p-5">
                            <h5 className="text-xl uppercase" style={{ fontFamily: "Playfair Display, serif;" }}>Restaurant Services open</h5>
                            <div className="text-[#878787] text-[12px] py-2">
                                <a href="#" className="hover:text-red-400">By Admin |</a>
                                <a href="#" className="ml-1 hover:text-red-400">3 Jan 2015 |</a>
                                <a href="#" className="ml-1 hover:text-red-400">3 Comment</a>
                            </div>
                            <p className="my-2 lg:my-4">Phasellus accumsan urna vitae molestie interdum. Nam sed placerat libero, non eleifend dolor.</p>
                            <a href="#" className="text-[#3ac4fa] hover:text-red-400">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="lg:w-[31%] md:w-[30%]">
                    <div className="w-full bg-[#f0f0f0] item mb-6">
                        <div className="w-full relative" >
                            <img className="w-full bg-cover	" src="/images/blog-pic3.jpg" alt="" />
                            <div className="bg-[#555] h-[40px] w-[48px] left-[87%] top-[69%] md:left-[84%] md:top-[63%] absolute lg:top-[73%] lg:left-[88%] transform -translate-x-1 -translate-y-1">
                                <i className="fa fa-link text-white mt-[13px] text-center text-[14px] leading-[40px] h-[40px] w-[48px] hover:text-[#3ac4fa] hover:cursor-pointer"></i>
                            </div>
                        </div>
                        <div className="p-5">
                            <h5 className="text-xl uppercase" style={{ fontFamily: "Playfair Display, serif;" }}>Restaurant Services open</h5>
                            <div className="text-[#878787] text-[12px] py-2">
                                <a href="#" className="hover:text-red-400">By Admin |</a>
                                <a href="#" className="ml-1 hover:text-red-400">3 Jan 2015 |</a>
                                <a href="#" className="ml-1 hover:text-red-400">3 Comment</a>
                            </div>
                            <p className="my-2 lg:my-4">Phasellus accumsan urna vitae molestie interdum. Nam sed placerat libero, non eleifend dolor.</p>
                            <a href="#" className="text-[#3ac4fa] hover:text-red-400">Read More</a>
                        </div>
                    </div>
                    <div className="w-full bg-[#f0f0f0] item mb-6">
                        <div className="w-full relative">
                            <img className="w-full bg-cover h-[100%]" src="/images/blog-pic-link-bg.png" alt="" />
                            <h5 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-[20px] px-[30px] py-[20px] block w-full h-full md:text-[14px] lg:text-[20px]">http:// themeforest.net/users/wpmines</h5>
                            <div className="bg-[#555] h-[40px] w-[48px] absolute left-[87%] top-[67%] lg:top-[70%] lg:left-[88%] md:left-[84%] md:top-[61%] transform -translate-x-1 -translate-y-1">
                                <i className="fa fa-link mt-[13px] text-white text-center text-[14px] leading-[40px] h-[40px] w-[48px] hover:text-[#3ac4fa] hover:cursor-pointer"></i>
                            </div>
                        </div>
                        <div className="p-5 pt-0">
                            <div className="text-[#878787] text-[12px] py-2">
                                <a href="#" className="hover:text-red-400">By Admin |</a>
                                <a href="#" className="ml-1 hover:text-red-400">3 Jan 2015 |</a>
                                <a href="#" className="ml-1 hover:text-red-400">3 Comment</a>
                            </div>
                            <p className="my-2 lg:my-4">Phasellus accumsan urna vitae molestie interdum. Nam sed placerat libero, non eleifend dolor.</p>
                            <a href="#" className="text-[#3ac4fa] hover:text-red-400">Read More</a>
                        </div>
                    </div>
                    <div className="w-full bg-[#f0f0f0] item">
                        <div className="w-full relative">
                            <img className="w-full bg-cover	" src="/images/blog-pic6.jpg" alt="" />
                            <div className="bg-[#555] h-[40px] w-[48px] absolute left-[87%] top-[82%] lg:top-[84%] md:left-[84%] md:top-[77%] lg:left-[88%] transform -translate-x-1 -translate-y-1">
                                <i className="fa fa-link text-white mt-[13px] text-center text-[14px] leading-[40px] h-[40px] w-[48px] hover:text-[#3ac4fa] hover:cursor-pointer"></i>
                            </div>
                        </div>
                        <div className="p-5">
                            <h5 className="text-xl uppercase" style={{ fontFamily: "Playfair Display, serif;" }}>Restaurant Services open</h5>
                            <div className="text-[#878787] text-[12px] py-2">
                                <a href="#" className="hover:text-red-400">By Admin |</a>
                                <a href="#" className="ml-1 hover:text-red-400">3 Jan 2015 |</a>
                                <a href="#" className="ml-1 hover:text-red-400">3 Comment</a>
                            </div>
                            <p className="my-2 lg:my-4">Phasellus accumsan urna vitae molestie interdum. Nam sed placerat libero, non eleifend dolor.</p>
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