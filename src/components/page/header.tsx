"use client"; // Thêm dòng này để đánh dấu thành phần là Client Component

import Link from 'next/link';
import React from 'react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { Phone } from 'lucide-react';

const HeaderComponent = () => {
    return (
        <div className='w-full h-[142px]'>
            <div className='w-full h-[42px] bg-[#313a45] text-[#7a7e84] flex justify-center '>
                <div className='w-[1140px] h-full py-2.5 flex justify-between'>
                    <div className='w-1/2 flex items-center'>
                        <ul>
                            <li className='mr-4'>
                                <a href="#" className="flex items-center">
                                    <img src="./images/temp-icon.png" alt="temp-icon" className="mr-2" />
                                    LONDON DC, GR 17°C
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className='w-1/2 h-full'>
                        <ul className='flex justify-end items-center'>
                            <li>
                                <Link href="/login" className="border-r border-[#7a7e84] pr-4 transition-colors duration-500 hover:text-[#16b4ef]">LOGIN</Link>
                            </li>
                            <li className='px-2'>
                                <Link href="/register" className="transition-colors duration-500 hover:text-[#16b4ef]">REGISTER</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='w-full h-[110px] flex justify-center pb-4'>
                <div className='flex gap-4 w-[1140px] h-full justify-around items-center'>
                    <div className='w-[150px] h-full flex items-center'>
                        <Link href="/"><img src="./images/site-logo.png" alt="site-logo" /> </Link>
                    </div>
                    <div className='w-[990px] flex justify-around items-center'>
                        <Link href="/" className='transition-colors duration-500 hover:text-[#16b4ef]'>HOME</Link>
                        <Link href="/Accomodation" className='transition-colors duration-500 hover:text-[#16b4ef] '> ACCOMMODATION </Link>
                        <Link href="/Gallery" className='transition-colors duration-500 hover:text-[#16b4ef]'> GALLERY </Link>
                        <DropdownMenu>
                            <DropdownMenuTrigger className='flex gap-1 items-center transition-colors duration-500 hover:text-[#16b4ef]'>FEATURES
                                <ChevronDownIcon />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className='bg-[#313a45] text-[#aab8ca]'>
                                <DropdownMenuItem><Link href="/Aboutus" className='hover:text-blue-400'>ABOUT US</Link></DropdownMenuItem>
                                <DropdownMenuItem><Link href="/booking" className='hover:text-blue-400'>BOOKING</Link></DropdownMenuItem>
                                <DropdownMenuItem>ROOM DETAILS</DropdownMenuItem>
                                <DropdownMenuItem>OUR STAFF</DropdownMenuItem>
                                <DropdownMenuItem>404 Page</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <Link href="/News" className='transition-colors duration-500 hover:text-[#16b4ef]'> NEWS </Link>
                        <Link href="/Contacts" className='transition-colors duration-500 hover:text-[#16b4ef]'> CONTACTS </Link>
                        <div className='relative w-1/6'>
                            <p className='flex gap-3 bg-[#fe5d5d] text-white p-2.5' ><Phone />1234567890</p>
                            <span className='absolute bg-[#fe5d5d] w-96 h-[44px] top-0 left-[150px]'></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderComponent;