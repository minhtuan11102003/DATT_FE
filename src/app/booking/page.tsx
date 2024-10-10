'use client';
import { useState } from "react";
import BookingInfoComponent from "./componentPage/bookinginfo";
import PersonalInfoComponent from "./componentPage/personalinfo";
import PaymentInfoComponent from "./componentPage/paymentinfo";
import BookingDoneComponent from "./componentPage/bookingdone";
import { Button } from "@/components/ui/button";

const BookingPage = () => {
    const arrayTitle: { id: number, title: string, component: any }[] = [
        {
            id: 1,
            title: "BOOKING INFO",
            component: <BookingInfoComponent />
        },
        {
            id: 2,
            title: "PERSONAL INFO",
            component: <PersonalInfoComponent />
        },
        {
            id: 3,
            title: "PAYMENT INFO",
            component: <PaymentInfoComponent />
        },
        {
            id: 4,
            title: "BOOKING DONE",
            component: <BookingDoneComponent />
        }
    ]

    const [isCheckId, setIsCheckId] = useState<number>(1);

    const handleClickColor = (id: number) => {
        setIsCheckId(id);
    }


    return (
        <div className='w-full h-auto '>
            <section className='bannerSection w-full h-[333px] relative'>
                <img src="./images/banner-section/bannerBooking.jpg" alt="Lỗi hình mong reload trang" className='w-full h-full object-cover bg-none' />
                <div className='logoGiamGia w-[215px] h-[272px] absolute top-0 right-[10%]'>
                    <img src="./images/giamGia.png" alt="Lỗi hình ảnh" className='w-full h-full object-cover' />
                </div>
                <div className='w-full h-[105px] flex flex-col items-center justify-around absolute top-[40%]'>
                    <h1 className='font-medium text-[44px] text-white font-PlayfairDisplay'>BOOKING</h1>
                    <img src="./images/nice-title-breadcrumb.png" alt="" />
                </div>
            </section>
            <section className='inforBooking w-full flex justify-center  mt-[20px]'>
                <div className='w-[1172px] px-4'>
                    <div className='headInfo w-full h-[159px] flex'>
                        {
                            arrayTitle.map((item, index) => (
                                <div className={`w-1/4 h-full flex flex-col items-center border-b-8 ${isCheckId == item.id ? ' border-b-[#FE5D5D]' : 'border-b-[#cdcbcb]'}  `} key={index}>
                                    <h1 onClick={() => handleClickColor(item.id)} className={`w-[52px] h-[49px] text-[18px] font-karla text-center italic pl-[18px] py-[11px] pr-[22px] rounded-full cursor-pointer ${isCheckId == item.id ? '  bg-[#FE5D5D] text-white' : 'border text-black '}  `}>{item.id}</h1>
                                    <span className='mt-[15px] m-b[40px] text-[18px] font-karla font-medium italic '>{item.title}</span>
                                </div>
                            ))
                        }
                    </div>
                    <div className="w-full mt-[70px] mb-[50px]">
                        {
                            arrayTitle[isCheckId - 1].component
                        }
                    </div>
                    <div className='section4 w-full h-[100px] border-t-[1px] border-[#cdcdcde3] mt-4 flex justify-between items-center '>
                        <div className="w-1/2 h-full">
                            <Button onClick={() => setIsCheckId((prevDem) => (isCheckId - 1))} className={`${isCheckId > 1 ? 'block' : 'hidden'} w-[100px] h-[38px] py-[8px] px-[30px] text-[18px] text-white bg-[#6666] font-semibold hover:bg-[#3a3a3a] `}>Back</Button>
                        </div>
                        <div className="w-1/2 h-full flex justify-end">
                            <Button onClick={() => setIsCheckId((prevDem) => (isCheckId + 1))} className={`${isCheckId > 3 ? 'hidden' : 'block'} w-[100px] h-[38px] py-[8px] px-[30px] text-[18px] text-white bg-[#fe5d5d] font-semibold hover:bg-white hover:text-red-600 hover:border border-[#fe5d5d]`}>Next</Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BookingPage;