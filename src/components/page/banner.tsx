'use client'
import { Button } from "@/components/ui/button";
import { upperCase } from "lodash";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import '../../css/banner.css';


export default function BannerComponent() {
    const [dem, setDem] = useState<number>(0);
    const [isChuyenDong, setChuyenDong] = useState<boolean>(true);

    let mangImg: { id: number; img: string; title: string; title2: string }[] = [
        { id: 1, img: "./images/slider-one.jpg", title: "Book Your Summer Holidays ", title2: "With HOTEL BOOKING Template 1" },
        { id: 2, img: "./images/banner2.jpg", title: "A brand New Hotel ", title2: "Beyond Ordinary 2" },
        { id: 3, img: "./images/slider-one.jpg", title: "Book Your Summer Holidays ", title2: "With HOTEL BOOKING Template 3" },
        { id: 4, img: "./images/banner2.jpg", title: "A brand New Hotel", title2: "Beyond Ordinary 4" },
        { id: 5, img: "./images/slider-one.jpg", title: "Book Your Summer Holidays ", title2: "With HOTEL BOOKING Template 5" },
        { id: 6, img: "./images/banner2.jpg", title: "A brand New Hotel", title2: "Beyond Ordinary 6" },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setChuyenDong(false);
            setTimeout(() => {
                setDem((prevDem) => (prevDem + 1) % mangImg.length);
                setChuyenDong(true);
            }, 800);
        }, 3000);

        return () => clearInterval(interval);
    }, [dem]);

    const upSetDem = () => {
        setChuyenDong(false);
        setTimeout(() => {
            setDem((prevDem) => (prevDem + 1) % mangImg.length);
            setChuyenDong(true);
        }, 500);
    };

    const downSetDem = () => {
        setChuyenDong(false);
        setTimeout(() => {
            setDem((prevDem) => (prevDem === 0 ? mangImg.length - 1 : prevDem - 1));
            setChuyenDong(true);
        }, 500);
    };

    return (
        <div className="w-full h-full relative z-0 mt-0">
            <div className="w-full h-full">
                <img src={`${mangImg[dem].img}`} alt="Lỗi ảnh" className={`chuyenDong ${isChuyenDong ? 'animate-in' : 'animate-out'}  w-full h-full object-cover`} />
            </div>
            <div className="w-[400px] md:w-[800px] md:h-[150px] absolute top-[30%] left-4 md:left-[20%]">
                <div className={`w-full text-[16px] xs:text-[22px] md:w-[755px] md:h-[80px] md:text-[42px] font-semibold md:mb-6 chuyenDong ${isChuyenDong ? 'animate-in' : 'animate-out'}  `}>
                    <p className="w-full h-auto md:h-[40px]">{mangImg[dem].title.toUpperCase()}</p>
                    <p >{mangImg[dem].title2.toUpperCase()}</p>
                </div>
                <div className={`w-[90px] p-1 md:w-[196px] md:p-3 bg-[#f7c411] ${isChuyenDong ? 'animate-in' : 'animate-out'}`}>
                    <Button className="w-[82px] h-[20px] px-2 py-2 md:w-[172px] md:h-[40px] text-[12px] md:py-[8px] md:px-[34px] border border-spacing-[2px] md:text-[18px] font-semibold">EXPLORE IT</Button>
                </div>
            </div>
            <div className="absolute top-[80%] left-[50%] flex gap-4">
                <div className="w-[30px] h-[31px] bg-[#313a45] text-white flex items-center justify-center cursor-pointer">
                    <ArrowLeft onClick={() => {
                        downSetDem()
                    }} />
                </div>
                <div className="w-[30px] h-[31px] bg-[#313a45] text-white flex items-center justify-center cursor-pointer">
                    <ArrowRight onClick={() => {
                        upSetDem()
                    }} />
                </div>
            </div>
        </div>
    );
}
