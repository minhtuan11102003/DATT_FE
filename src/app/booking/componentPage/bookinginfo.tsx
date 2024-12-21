import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';
import React from 'react';
// import { DatePickerDemo } from "@/components/ui/date-picker";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import "../../../css/table.css";
import { DatePickerDemo } from '@/components/ui/date-picker';


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
        <div className='w-full'>
            <div className='section1 w-full flex flex-col md:flex-row lg:flex-row'>
                <div className='w-full md:w-2/5 lg:w-[350px]'>
                    <img src="./images/room-section/room-image-five.png" alt="Lỗi ảnh" className='w-[272px] h-[186px] object-cover' />
                </div>
                <div className='w-full md:w-3/5 lg:w-4/5 h-full flex flex-col items-start'>
                    <div className='w-full h-[30px] md:h-[49px]'>
                        <p className='font-medium'>Deluxe Room ($180 <sup>/night</sup>)</p>
                    </div>
                    <div className='w-full h-[22px] mb-2 flex gap-0 md:gap-1 md:mb-6'>
                        <img src="./images/icon-section/star-solid.svg" alt="" className='w-[14px] h-[14px]' />
                        <img src="./images/icon-section/star-solid.svg" alt="" className='w-[14px] h-[14px]' />
                        <img src="./images/icon-section/star-solid.svg" alt="" className='w-[14px] h-[14px]' />
                        <img src="./images/icon-section/star-solid.svg" alt="" className='w-[14px] h-[14px]' />
                        <Star size={14} />
                    </div>
                    <div className='w-full gap-4 grid grid-cols-2 lg:grid-cols-4'>
                        {
                            arrayServices.map((item, index) => (
                                <div className='w-[135px] h-[34px] flex gap-2 items-end md:w-[204px]' key={index}>
                                    <img src={`./images/icon-section/${item.icon}`} alt="" className='w-[48px] h-[32px]' />
                                    <p className='font-bold text-[8px] md:text-[18px]'>{item.title}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className='setion2 mt-4 w-[300px] h-[380px] xs:w-[420px] xs:h-[400px] md:w-full md:h-[84px] lg:w-full md:mt-[45px]'>
                <div className="w-full xs:w-[420px] md:w-full md:h-[100px] lg:w-[1140px] lg:h-[100px] text-[#aab8ca] z-10">
                    <div className="w-full px-5 h-full flex flex-col items-center gap-4 py-4 text-[#aab8ca] bg-[#313a45]
                xs:w-[420px] xs:ml-0 xs:py-5 md:w-full md:h-[80px] md:flex-row md:items-center  md:mt-0
                lg:w-full lg:h-[80px] lg:flex-row lg:items-center lg:gap-8 lg:mt-0">
                        <div className="xs:w-full md:w-[120px] lg:w-[135px] lg:h-[42px] w-full h-full font-karla flex items-center pl-2 text-white font-bold">
                            <span className="w-[240px] xs:w-[380px]  text-[15px] lg:w-full">
                                <p className='h-[10px]'>BOOK YOUR </p>
                                <p className="text-[28px]">ROOMS</p>
                            </span>
                            <span className="border h-[40px] border-[#475362]"></span>
                        </div>
                        <div className="w-[240px] xs:w-[380px] md:w-[110px] lg:w-[160px]">
                            <DatePickerDemo title="ARRIVAL" />
                        </div>
                        <div className="w-[240px] xs:w-[380px] md:w-[110px] lg:w-[160px]">
                            <DatePickerDemo title="DEPARTURE" />
                        </div>
                        <div className="w-[240px] xs:w-[380px] md:w-[70px] lg:w-[120px]">
                            <Select>
                                <SelectTrigger className="w-full md:w-[70px] lg:w-[120px] md:text-[12px]">
                                    <SelectValue placeholder="1 ROOM" />
                                </SelectTrigger>
                                <SelectContent className="bg-[#313a45] text-[#aab8ca] md:text-[12px]">
                                    <SelectItem value="1 ROOM">1 ROOM</SelectItem>
                                    <SelectItem value="2 ROOM">2 ROOM</SelectItem>
                                    <SelectItem value="3 ROOM">3 ROOM</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="w-[240px] xs:w-[380px] md:w-[70px] lg:w-[120px]">
                            <Select>
                                <SelectTrigger className="w-full md:w-[70px] lg:w-[120px] md:text-[12px]">
                                    <SelectValue placeholder="1 ADULT" />
                                </SelectTrigger>
                                <SelectContent className="bg-[#313a45] text-[#aab8ca] md:text-[12px]">
                                    <SelectItem value="1 ADULT">1 ADULT</SelectItem>
                                    <SelectItem value="2 ADULT">2 ADULT</SelectItem>
                                    <SelectItem value="3 ADULT">3 ADULT</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="w-[240px] xs:w-[380px] md:w-[70px] lg:w-[120px]">
                            <Select>
                                <SelectTrigger className="w-full md:w-[70px] lg:w-[120px] md:text-[12px]">
                                    <SelectValue placeholder="0 CHILD" />
                                </SelectTrigger>
                                <SelectContent className="bg-[#313a45] text-[#aab8ca] md:text-[12px]">
                                    <SelectItem value="0 CHILD">0 CHILD</SelectItem>
                                    <SelectItem value="1 CHILD">1 CHILD</SelectItem>
                                    <SelectItem value="2 CHILD">2 CHILD</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="w-[240px] xs:w-[380px] md:w-[70px] lg:w-[120px]">
                            <Select>
                                <SelectTrigger className="w-full md:w-[70px] lg:w-[120px] md:text-[12px]">
                                    <SelectValue placeholder="Beds" />
                                </SelectTrigger>
                                <SelectContent className="bg-[#313a45] text-[#aab8ca] md:text-[12px]">
                                    <SelectItem value="1 Beds">1 Beds</SelectItem>
                                    <SelectItem value="2 Beds">2 Beds</SelectItem>
                                    <SelectItem value="3 Beds">3 Beds</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>
            </div>
            <div className='section3 w-[270px] mt-4 flex flex-col xs:w-[420px] md:w-full md:flex-row gap-5 '>
                <div className='w-full h-full md:w-[642px] md:h-[157px] xs:w-full xs:h-[220px] flex flex-col gap-4 text-[#666666] font-karla md:text-justify'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil atque modi velit molestiae, repellendus iure sint possimus cumque, provident, dolorum unde laboriosam ut eius ex maiores quod repudiandae aut asperiores?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil atque modi velit molestiae, repellendus iure sint possimus cumque, provident, dolorum unde laboriosam ut eius ex maiores quod repudiandae aut asperiores?</p>
                </div>
                <div className='w-[270px] xs:w-[420px] md:w-[487px]'>
                    <table className='w-full h-full'>
                        <tbody>
                            <tr >
                                <th className='w-[207px] h-[73px] p-[15px] text-left font-karla xs:w-[205px] md:w-[224px] md:h-[73px]'>
                                    <span>1 ROOM</span>
                                    <br />
                                    <p className='text-[#666666] xs:text-[14px]'>TWO ADULT & 1 CHILD </p>
                                </th>
                                <td className='w-[62px] h-[73px] p-[15px] text-left font-karla xs:text-[14px] md:w-[74px]'>
                                    <span className='font-semibold'>180$</span>
                                    <br />
                                    <p className='text-[#666666]'>RATE</p>
                                </td>
                                <td className='w-[74PX] h-[73px] p-[15px] text-left font-karla hidden xs:table-cell md:table-cell xs:text-[14px] xs:text-center' >
                                    <span className='font-semibold'>5 </span>
                                    <br />
                                    <p className='text-[#666666]'>NIGHT</p>
                                </td>
                                <td className='w-[74PX] h-[73px] p-[15px] text-left font-karla hidden xs:table-cell md:table-cell'>
                                    <span className='font-semibold'>400$</span>
                                </td>
                            </tr>
                            <tr>
                                <th className='w-[224px] h-[73px] p-[15px] text-left font-karla'>
                                    <span>TAX</span>
                                    <br />
                                    <p className='text-[#666666] xs:text-[14px]'>10% ON BOOKING VALUE</p>
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