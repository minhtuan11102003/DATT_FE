import React from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Button } from '@/components/ui/button';

const PaymentInfoComponent = () => {
    return (
        <div className='w-full'>
            <div className='section1 w-[270px] xs:w-[420px]  md:w-full h-auto'>
                <p className='md:text-justify text-[#666666] font-karla font-medium'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil atque modi velit molestiae, repellendus iure sint possimus cumque, provident, dolorum unde laboriosam ut eius ex maiores quod repudiandae aut asperiores?</p>
            </div>
            <div className='section2 w-[270px] xs:w-[420px] md:w-full md:h-[90px] flex flex-col md:flex-row mt-8 gap-8'>
                <input type="text" placeholder='CARD HOLDER NAME' className='w-[270px] text-[14px] xs:w-[420px] md:w-[262px] md:text-[18px] h-[45px] pl-[22px] py-[6px] pr-[12px] border border-gray-200 outline-none' />
                <input type="text" placeholder='ENTER CREADIT CARD NUMBER' className='w-[270px] text-[14px] xs:w-[420px] md:w-[262px] md:text-[18px] h-[45px] pl-[22px] py-[6px] pr-[12px] border border-gray-200 outline-none' />
                <input type="number" min={1} max={12} placeholder='ENTER MONTH' className='w-[270px] text-[14px] xs:w-[420px] md:w-[262px] md:text-[18px] h-[45px] pl-[22px] py-[6px] pr-[12px] border border-gray-200 outline-none' />
                <input type="number" min={2000} max={2024} placeholder='ENTER YEAR' className='w-[270px] text-[14px] xs:w-[420px] md:w-[262px] md:text-[18px] h-[45px] pl-[22px] py-[6px] pr-[12px] border border-gray-200 outline-none' />
            </div>
            <div className='section3 xs:w-[420px] mt-4  md:w-full w-[270px] h-[114px] md:h-[44px] flex flex-col md:flex-row md:justify-between'>
                <div className='md:w-1/2 w-full h-full grid grid-cols-3 md:flex md:flex-row gap-4'>
                    <img src="./images/icon-section/american-express.png" alt="" className='w-[67px] h-[44px] md:h-full object-cover' />
                    <img src="./images/icon-section/discover.png" alt="" className='w-[67px] h-full object-cover' />
                    <img src="./images/icon-section/paypal.png" alt="" className='w-[67px] h-full object-cover' />
                    <img src="./images/icon-section/visa.png" alt="" className='w-[67px] h-full object-cover' />
                    <img src="./images/icon-section/maestro.png" alt="" className='w-[67px] h-full object-cover' />
                </div>
                <div className='md:w-1/2 w-full h-full text-right mt-4 md:mt-0'>
                    <Button className='w-[126px] font-bold font-karla text-[18px]  bg-[#88d54f] text-white hover:bg-red-500'>PAY NOW</Button>
                </div>
            </div>
        </div>
    );
};

export default PaymentInfoComponent;