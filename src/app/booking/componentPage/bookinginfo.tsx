import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';
import React from 'react';
import { DatePickerDemo } from "@/components/ui/date-picker";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import "../../../css/banner.css";


const BookingInfoComponent = () => {
    const arrayServices: { id: number, title: string, icon: string }[] = [
        { id: 1, title: "Breakfast", icon: "home-facilities-icon-one.png" },
        { id: 2, title: "Air conditioning", icon: "home-facilities-icon-two.png" },
        { id: 3, title: "Free Parking", icon: "home-facilities-icon-eight.png" },
        { id: 4, title: "Pet allowed", icon: "home-facilities-icon-three.png" },
        { id: 5, title: "GYM fecility", icon: "home-facilities-icon-ten.png" },
        { id: 6, title: "TV LCD", icon: "home-facilities-icon-five.png" },
        { id: 7, title: "Wi-fi service", icon: "home-facilities-icon-twelve.png" },
        { id: 8, title: "Room service", icon: "home-facilities-icon-four.png" }
    ]


    return (
        <div className='w-full h-full'>
            <div className='section1 w-full h-[190px] flex'>
                <div className='w-[275px] h-[186px] pr-[15px]'>
                    <img src="./images/room-section/room-image-five.png" alt="Lỗi ảnh" className='w-[272px] h-[186px] object-cover' />
                </div>
                <div className='w-[863px] h-full flex flex-col items-start'>
                    <div className='w-full h-[49px] '>
                        <p className='font-medium'>Deluxe Room ($180 <sup>/night</sup>)</p>
                    </div>
                    <div className='w-full h-[22px] mb-6  flex gap-1'>
                        <img src="./images/icon-section/star-solid.svg" alt="" className='w-[14px] h-[14px]' />
                        <img src="./images/icon-section/star-solid.svg" alt="" className='w-[14px] h-[14px]' />
                        <img src="./images/icon-section/star-solid.svg" alt="" className='w-[14px] h-[14px]' />
                        <img src="./images/icon-section/star-solid.svg" alt="" className='w-[14px] h-[14px]' />
                        <Star size={14} />
                    </div>
                    <div className='w-full h-[98px] grid grid-cols-4'>
                        {
                            arrayServices.map((item, index) => (
                                <div className='w-[204px] h-[34px] flex gap-2 items-end' key={index}>
                                    <img src={`./images/icon-section/${item.icon}`} alt="" className='w-[48px] h-[32px]' />
                                    <p className='font-bold'>{item.title}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className='setion2 h-[84px] mt-[45px]'>
                <div className="w-[full] h-full flex items-center gap-8 text-[#aab8ca] bg-[#313a45]">
                    <div className="w-[135px] h-[42px] font-karla flex justify-start pl-6 flex-col gap-0 text-white font-bold">
                        <p className="text-[15px] h-[10px] w-full">
                            CHOOSE
                        </p>
                        <span className=" text-[30px] h-[25px] w-full">
                            Option
                        </span>
                    </div>
                    <span className="border h-[40px]"></span>
                    <div className="w-[160px] ">
                        <DatePickerDemo />
                    </div>
                    <div className="w-[160px] ">
                        <DatePickerDemo />
                    </div>
                    <div className="w-[120px] ">
                        <Select>
                            <SelectTrigger className="w-[120px]">
                                <SelectValue placeholder="1 ROOM" />
                            </SelectTrigger>
                            <SelectContent className="bg-[#313a45] text-[#aab8ca]">
                                <SelectItem value="1 ROOM">1 ROOM</SelectItem>
                                <SelectItem value="2 ROOM">2 ROOM</SelectItem>
                                <SelectItem value="3 ROOM">3 ROOM</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="w-[120px] ">
                        <Select>
                            <SelectTrigger className="w-[120px]">
                                <SelectValue placeholder="1 ADULT" />
                            </SelectTrigger>
                            <SelectContent className="bg-[#313a45] text-[#aab8ca]">
                                <SelectItem value="1 ADULT">1 ADULT</SelectItem>
                                <SelectItem value="2 ADULT">2 ADULT</SelectItem>
                                <SelectItem value="3 ADULT">3 ADULT</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="w-[120px] ">
                        <Select>
                            <SelectTrigger className="w-[120px]">
                                <SelectValue placeholder="0 CHILD" />
                            </SelectTrigger>
                            <SelectContent className="bg-[#313a45] text-[#aab8ca]">
                                <SelectItem value="0 CHILD">0 CHILD</SelectItem>
                                <SelectItem value="1 CHILD">1 CHILD</SelectItem>
                                <SelectItem value="2 CHILD">2 CHILD</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="w-[120px] ">
                        <Button className="bg-[#f7c411] text-[#313a45] font-extrabold text-[16px] border hover:text-white hover:bg-[#313a45] hover: border-[#f7c411]">BOOK</Button>
                    </div>
                </div>
            </div>
            <div className='section3 w-full h-[221ox] mt-4 flex gap-5'>
                <div className='w-[642px] h-[157px] flex flex-col gap-4 text-[#666666] font-karla text-justify'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil atque modi velit molestiae, repellendus iure sint possimus cumque, provident, dolorum unde laboriosam ut eius ex maiores quod repudiandae aut asperiores?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil atque modi velit molestiae, repellendus iure sint possimus cumque, provident, dolorum unde laboriosam ut eius ex maiores quod repudiandae aut asperiores?</p>
                </div>
                <div className='w-[487px] h-[221px]'>
                    <table className='w-full h-full'>
                        <tbody>
                            <tr>
                                <th className='w-[224px] h-[73px] p-[15px] text-left font-karla'>
                                    <span>1 ROOM</span>
                                    <br />
                                    <p className='text-[#666666]'>TWO ADULT & 1 CHILD </p>
                                </th>
                                <td className='w-[74PX] h-[73px] p-[15px] text-left font-karla'>
                                    <span className='font-semibold'>180$</span>
                                    <br />
                                    <p className='text-[#666666]'>RATE</p>
                                </td>
                                <td className='w-[74PX] h-[73px] p-[15px] text-left font-karla'>
                                    <span className='font-semibold'>5 </span>
                                    <br />
                                    <p className='text-[#666666]'>NIGHT</p>
                                </td>
                                <td className='w-[74PX] h-[73px] p-[15px] text-left font-karla'>
                                    <span className='font-semibold'>400$</span>
                                </td>
                            </tr>
                            <tr>
                                <th className='w-[224px] h-[73px] p-[15px] text-left font-karla'>
                                    <span>TAX</span>
                                    <br />
                                    <p className='text-[#666666]'>10% ON BOOKING VALUE</p>
                                </th>

                                <td className='p-[15px] text-right font-karla' colSpan={3}>
                                    <span className='font-semibold'>40$</span>
                                </td>
                            </tr>
                            <tr>
                                <th className='w-[224px] h-[60px] p-[15px] text-left font-karla'>
                                    <span>TOTAL</span>
                                </th>

                                <td className='p-[15px] text-right font-karla' colSpan={3}>
                                    <span className='font-semibold'>400$</span>
                                </td>
                            </tr>
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default BookingInfoComponent;