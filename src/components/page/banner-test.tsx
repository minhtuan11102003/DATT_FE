'use client'
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

const BannerSection2 = () => {
    const [imgs, setImgs] = useState<any>([]);
    useEffect(() => {
        const getImg = async () => {
            try {
                const resImg = await fetch(`http://api-core.dsp.one/api/auth/banner`)
                const payLoadImg = await resImg.json();
                console.log(payLoadImg.data);
                setImgs([...payLoadImg.data])
            } catch (error) {
                console.log(error);
            }
        }
        getImg();
    }, [])
    let mangImg: { id: number; img: string; title: string; title2: string }[] = [
        { id: 1, img: "./images/slider-one.jpg", title: "Book Your Summer Holidays ", title2: "With HOTEL BOOKING Template 1" },
        { id: 2, img: "./images/banner2.jpg", title: "A brand New Hotel ", title2: "Beyond Ordinary 2" },
        { id: 3, img: "./images/slider-one.jpg", title: "Book Your Summer Holidays ", title2: "With HOTEL BOOKING Template 3" },
        { id: 4, img: "./images/banner2.jpg", title: "A brand New Hotel", title2: "Beyond Ordinary 4" },
        { id: 5, img: "./images/slider-one.jpg", title: "Book Your Summer Holidays ", title2: "With HOTEL BOOKING Template 5" },
        { id: 6, img: "./images/banner2.jpg", title: "A brand New Hotel", title2: "Beyond Ordinary 6" },
    ];

    return (
        <div className="w-full h-full relative z-0 mt-0">
            <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={0}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 1500, disableOnInteraction: false }}
                loop={true}
            >
                {mangImg.map((item: any) => (
                    <SwiperSlide key={item.id}>
                        <div className="w-full h-full">
                            <img src={`${item.img}`} alt="Lỗi ảnh" className={`w-full h-[380px] md:h-[400px] lg:h-[600px] object-cover`} />
                            {/* <div className={`bg-[${item.background_color}] w-full h-[500px] `}></div> */}
                        </div>
                        <div className=" md:w-[500px] lg:w-[800px] md:h-[150px] absolute top-[30%] left-10 md:left-[10%] lg:left-[15%]">
                            <div className={`w-full text-[16px] xs:text-[22px] md:w-[450px] lg:w-[755px] md:h-[80px] md:text-[36px] lg:text-[42px] font-semibold md:mb-6`}>
                                {/* <p className="w-full h-auto md:h-[40px]">{item.title.toUpperCase()}</p> */}
                                <p>{item.title.toUpperCase()}</p>
                            </div>
                            <div className={`w-[90px] p-1 md:w-[150px] lg:w-[196px] md:p-3 bg-[#f7c411]`}>
                                <Button className="w-[82px] h-[20px] md:w-[122px] md:h-[40px] lg:w-[172px] text-[12px] md:py-[6px] lg:py-[8px] md:px-[34px] border border-spacing-[2px] md:text-[16px] lg:text-[18px] font-semibold">EXPLORE IT</Button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default BannerSection2;