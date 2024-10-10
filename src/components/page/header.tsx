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
        <div className='w-full h-[132px]'>
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
            <div className='w-full h-[110px] flex justify-center '>
                <div className='flex gap-4 w-[1140px] h-full justify-around items-center'>
                    <div className='w-[150px] h-full flex items-center'>
                        <Link href="/Home"><img src="./images/site-logo.png" alt="site-logo" /> </Link>
                    </div>
                    <div className='w-[990px] flex justify-around items-center'>
                        <DropdownMenu>
                            <DropdownMenuTrigger className='flex gap-1 items-center transition-colors duration-500 hover:text-[#16b4ef]'>HOME
                                <ChevronDownIcon />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className='bg-[#313a45] text-[#aab8ca]'>
                                <DropdownMenuItem><Link href="/Home">Home</Link></DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <Link href="/Accomodation" className='transition-colors duration-500 hover:text-[#16b4ef] '> ACCOMMODATION </Link>
                        <Link href="/Gallery" className='transition-colors duration-500 hover:text-[#16b4ef]'> GALLERY </Link>
                        <DropdownMenu>
                            <DropdownMenuTrigger className='flex gap-1 items-center transition-colors duration-500 hover:text-[#16b4ef]'>FEATURES
                                <ChevronDownIcon />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className='bg-[#313a45] text-[#aab8ca]'>
                                <DropdownMenuItem className='hover:bg-white'><Link href="/aboutus" className='hover:bg-white hover:text-black'>ABOUT US</Link></DropdownMenuItem>
                                <DropdownMenuItem>BOOKING</DropdownMenuItem>
                                <DropdownMenuItem>ROOM DETAILS</DropdownMenuItem>
                                <DropdownMenuItem><Link href="/ourStaff" className='hover:bg-white hover:text-black'>OurStaff</Link></DropdownMenuItem>
                                <DropdownMenuItem>404 Page</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <Link href="/News" className='transition-colors duration-500 hover:text-[#16b4ef]'> NEWS </Link>
                        <Link href="/Contacts" className='transition-colors duration-500 hover:text-[#16b4ef]'> CONTACTS </Link>
                        <div className='relative'>
                            <p className='flex gap-3 bg-[#fe5d5d] text-white p-2.5' ><Phone />1234567890</p>
                            <span className='absolute bg-[#fe5d5d] w-96 h-[44px] top-0 left-[150px]'></span>
                        </div>
                    </div>
                </div>
                <div className='bg-red-500 absolute w-36' ></div>
            </div>
        </div>
    );
};

export default HeaderComponent;