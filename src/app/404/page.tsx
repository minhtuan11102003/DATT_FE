import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

const PageLoiNe = () => {
    return (
        <div className="w-full bg-cover bg-center bg-no-repeat mb-[-100px] mt-3" style={{ backgroundImage: "url('/images/error_bg.jpg')" }}>
            <section className=" w-full h-[795px] flex flex-col items-center">
                <h1 className="text-[150px] mt-[40%] md:text-[282px] md:mt-0 font-karla text-[#313a45] font-medium mb-[-50px] ">404</h1>
                <span className="text-[#fe5d5d] text-[44px] font-PlayfairDisplay font-medium tracking-wider ">ERROR</span>
                <img src="./images/nice-title-error.png" alt="Nice Title" className="" />
                <Button className='text-white bg-[#fe5d5d] mt-14 w-[240px] h-[59px] py-[19px] px-[43px] text-[14px] font-Lora font-bold'><Link href={'./'}>BACK TO HOME PAGE</Link></Button>
            </section>
        </div>
    );
};

export default PageLoiNe;