"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { Menu, Phone } from 'lucide-react';

const HeaderComponent = () => {
    const [isCheck, setIsCheck] = useState<boolean>(true);
    const [isSubMenuOpen, setIsSubMenuOpen] = useState<boolean>(false);

    function setChecked(check: boolean) {
        setIsCheck(!check);
    }

    return (
        <div className={`w-full ${isCheck ? 'h-auto' : 'h-auto'} `}>
            <div className='w-full h-auto md:h-[90px] flex gap-4 justify-center pt-4'>
                <div className='hidden md:flex-row gap-2 w-[270px] xs:w-[470px] md:w-[1140px] h-full md:justify-around md:flex flex-col justify-center items-center'>
                    <div className='w-[220px] flex gap-6'>
                        <div className='w-[140px] h-full flex items-center'>
                            <Link href="/"><img src="./images/site-logo.png" alt="site-logo" className='w-[143px] h-[43px] object-contain' /></Link>
                        </div>
                        <div className='border-l-2 border-[#e1e1e1] w-[50px] flex flex-col pl-4 text-[14px] pt-1'>
                            <span>LOGIN</span>
                            <span>REGISTER</span>
                        </div>
                    </div>
                    <div className='pl-5 md:w-[840px] md:flex md:gap-8 justify-around items-center'>
                        <Link href="/" className='transition-colors duration-500 hover:text-[#16b4ef]'>HOME</Link>
                        <Link href="/Accomodation" className='transition-colors duration-500 hover:text-[#16b4ef]'>ACCOMODATION</Link>
                        <Link href="/Gallery" className='transition-colors duration-500 hover:text-[#16b4ef]'>GALLERY</Link>

                        {/* DropdownMenu cho Desktop */}
                        <div className='relative'>
                            <button
                                onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
                                className='flex gap-1 items-center transition-colors duration-500 hover:text-[#16b4ef]'
                            >
                                FEATURES <ChevronDownIcon />
                            </button>
                            {isSubMenuOpen && (
                                <div className='absolute mt-2 w-[150px] left-[-10px] bg-[#313a45] text-[#aab8ca] rounded-md shadow-lg z-50'>
                                    <Link href="/Aboutus" className='block px-4 py-2 text-sm hover:text-blue-400 hover:bg-[#222a33] transition duration-300'>ABOUT US</Link>
                                    <Link href="/booking" className='block px-4 py-2 text-sm hover:text-blue-400 hover:bg-[#222a33] transition duration-300'>BOOKING</Link>
                                    <Link href="/Detail" className='block px-4 py-2 text-sm hover:text-blue-400 hover:bg-[#222a33] transition duration-300'>ROOM DETAILS</Link>
                                    <Link href="/OurStaff" className='block px-4 py-2 text-sm hover:text-[#16b4ef] hover:bg-[#222a33] transition duration-300'>OUR STAFF</Link>
                                    <Link href="/404" className='block px-4 py-2 hover:text-[#16b4ef] hover:bg-[#222a33] transition duration-300'>404 PAGE</Link>
                                </div>
                            )}
                        </div>

                        <Link href="/News" className='transition-colors duration-500 hover:text-[#16b4ef]'>NEWS</Link>
                        <Link href="/Contacts" className='transition-colors duration-500 hover:text-[#16b4ef]'>CONTACTS</Link>
                        <div className='relative'>
                            <div className='bg-[#3ac4fa] h-[50px] flex items-center px-2 text-[20px] text-white gap-2'>
                                <Phone />
                                <span>123</span>
                                <span>456</span>
                                <span>7890</span>
                            </div>
                            <span className='absolute bg-[#3ac4fa] h-[44px] top-0 left-[150px]'></span>
                        </div>

                    </div>
                </div>

                {/* Submenu cho Mobile */}
                <div className='w-[270px] xs:w-[420px] flex flex-col gap-2 md:hidden mt-8'>
                    <div className={`flex w-full justify-between items-center pb-2 ${!isCheck ? 'border-b-[2px] border-[#e7e7e7]' : ''}`}>
                        <div className='w-[140px] h-[50px] flex items-center gap-2'>
                            <img src="./images/site-logo.png" className='w-[140px] h-[43px] object-cover' alt="site-logo" />
                            <div className='flex flex-col gap-0 h-full justify-center border-l-2 border-[#e1e1e1] pl-2 pt-2 text-[11px] xs:text-[16px]'>
                                <span>LOGIN</span>
                                <span>REGISTER</span>
                            </div>
                        </div>
                        <div className='w-[110px] sm:w-[150px] h-[50px] flex items-center justify-end'>
                            <Menu color='#888' className={`w-[40px] h-[40px] rounded border border-[#ddd] bg-white ${!isCheck ? 'bg-[#e7e7e7]' : ''}`} onClick={() => setChecked(isCheck)} />
                        </div>
                    </div>
                    <div className={`w-full px-[15px] ${isCheck ? 'hidden' : 'block'} mt-4`}>
                        <div className='w-[240px] xs:w-[390px] flex flex-col gap-8'>
                            <Link href="/" className='px-2 md:px-0 w-full transition-colors duration-500 hover:text-[#16b4ef] text-[14px]'>HOME</Link>
                            <Link href="/Accomodation" className='px-2 md:px-0 transition-colors duration-500 hover:text-[#16b4ef] text-[14px]'>ACCOMODATION</Link>
                            <Link href="/Gallery" className='px-2 md:px-0 transition-colors duration-500 hover:text-[#16b4ef] text-[14px]'>GALLERY</Link>

                            {/* SubMenu cho Mobile */}
                            <div className='relative'>
                                <button
                                    onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
                                    className='px-2 md:px-0 w-full flex justify-between gap-1 items-center transition-colors duration-500 hover:text-[#16b4ef] outline-none text-[14px]'
                                >
                                    FEATURES <ChevronDownIcon />
                                </button>
                                {isSubMenuOpen && (
                                    <div className='bg-[#313a45] text-[#aab8ca] px-2 py-1 mt-2 rounded-md shadow-lg'>
                                        <Link href="/Aboutus" className='block px-4 py-2 hover:text-blue-400 hover:bg-[#222a33] transition duration-300'>ABOUT US</Link>
                                        <Link href="/booking" className='block px-4 py-2 hover:text-blue-400 hover:bg-[#222a33] transition duration-300'>BOOKING</Link>
                                        <Link href="/Detail" className='block px-4 py-2 hover:text-blue-400 hover:bg-[#222a33] transition duration-300'>ROOM DETAIL</Link>
                                        <Link href="/OurStaff" className='block px-4 py-2 hover:text-[#16b4ef] hover:bg-[#222a33] transition duration-300'>OUR STAFF</Link>
                                        <Link href="/404" className='block px-4 py-2 hover:text-[#16b4ef] hover:bg-[#222a33] transition duration-300'>404 PAGE</Link>
                                    </div>
                                )}
                            </div>

                            <Link href="/News" className='px-2 md:px-0 transition-colors duration-500 hover:text-[#16b4ef] text-[14px]'>NEWS</Link>
                            <Link href="/Contacts" className='px-2 md:px-0 transition-colors duration-500 hover:text-[#16b4ef] text-[14px]'>CONTACTS</Link>
                            <div className='bg-[#3ac4fa] h-[50px] flex items-center px-2 text-[20px] text-white gap-2'>
                                <Phone />
                                <span>123</span>
                                <span>456</span>
                                <span>7890</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderComponent;