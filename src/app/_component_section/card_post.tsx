import React from 'react';

const CardPost = ({ data }: { data: any }) => {
    return (
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
                    <h5 className="text-xl uppercase text-black" style={{ fontFamily: "Playfair Display, serif;" }}>
                        {data.title}
                    </h5>
                    <div className="text-[#878787] text-[12px] py-2">
                        <a href="#" className="hover:text-red-400">By ${data.author}/{" "}|</a>
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
    );
};

export default CardPost;