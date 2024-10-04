'use client'
import { Button } from "@/components/ui/button";
import { upperCase } from "lodash";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import '../../app/css/banner.css';


export default function BannerComponent() {
    const [dem, setDem] = useState<number>(0);
    const [isChuyenDong, setChuyenDong] = useState<boolean>(false);

    let mangImg: { id: number; img: string; title: string; title2: string }[] = [
        { id: 1, img: "./images/banner2.jpg", title: "Book Your Summer Holidays ", title2: "With HOTEL BOOKING Template 1" },
        { id: 2, img: "./images/slider-one.jpg", title: "A brand New Hotel ", title2: "Beyond Ordinary 2" },
        { id: 3, img: "./images/banner2.jpg", title: "Book Your Summer Holidays ", title2: "With HOTEL BOOKING Template 3" },
        { id: 4, img: "./images/slider-one.jpg", title: "A brand New Hotel", title2: "Beyond Ordinary 4" },
        { id: 5, img: "./images/banner2.jpg", title: "Book Your Summer Holidays ", title2: "With HOTEL BOOKING Template 5" },
        { id: 6, img: "./images/slider-one.jpg", title: "A brand New Hotel", title2: "Beyond Ordinary 6" },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setChuyenDong(false);
            setDem((prevDem) => (prevDem + 1) % mangImg.length);
        }, 4000);
        setChuyenDong(true);
        return () => clearInterval(interval);

    }, [dem]);

    const upSetDem = () => {
        if (dem == mangImg.length - 1) {
            setDem(0);
        } else {
            setDem((prevDem) => prevDem + 1);
        }
    }

    const downSetDem = () => {
        if (dem == 0) {
            setDem(5);
        } setDem((prevDem) => prevDem - 1);
    }

    return (
        <div className="w-full h-full relative z-0 mt-0">
            <div className="w-full h-full">
                <img src={`${mangImg[dem].img}`} alt="Lỗi ảnh" className={`chuyenDong ${isChuyenDong ? 'animate-in' : 'animate-out'} w-full h-full object-cover`} />
            </div>
            <div className="w-[800px] h-[150px] absolute top-[200px] left-[190px]">
                <p className=" w-[755px] h-[40px] text-[42px] font-semibold mb-6">{mangImg[dem].title.toUpperCase()}</p>
                <p className=" w-[755px] h-[40px] text-[42px] font-semibold mb-6">{mangImg[dem].title2.toUpperCase()}</p>
                <div className="w-[196px] p-3 bg-[#f7c411] ">
                    <Button className="w-[172px] h-[40px] py-[8px] px-[34px] border border-spacing-[2px] text-[18px] font-semibold">EXPLORE IT</Button>
                </div>

            </div>
            <div className="absolute top-[80%] left-[50%] flex gap-4">
                <div className="w-[30px] h-[31px] bg-[#313a45] text-white flex items-center justify-center cursor-pointer">
                    <ArrowLeft onClick={() => {
                        setChuyenDong(true)
                        downSetDem()
                    }} />
                </div>
                <div className="w-[30px] h-[31px] bg-[#313a45] text-white flex items-center justify-center cursor-pointer">
                    <ArrowRight onClick={() => {
                        setChuyenDong(true)
                        upSetDem()
                    }} />
                </div>
            </div>
        </div>
    );
}
