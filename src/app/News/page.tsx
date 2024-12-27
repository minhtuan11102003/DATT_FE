import React from 'react';
import ShowPost from '../_component_section/showPost';
import CardPost from '../_component_section/card_post';
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
            <ShowPost/>

            <div className='w-full h-[50px] flex justify-center mb-8'>
                <button className='border border-red-600 bg-red-600 text-[16px] text-white py-1 px-4 hover:text-red-600 hover:bg-white'>Load More</button>
            </div>
        </>
    );
};

export default NewsPage;