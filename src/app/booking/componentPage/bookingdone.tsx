import { Check } from 'lucide-react';
import React from 'react';

const BookingDoneComponent = () => {
    return (
        <div className='w-full '>
            <div className='section3 w-[270px] xs:w-[420px] md:w-full h-[221ox] mt-4 flex flex-col md:flex-row gap-5'>
                <div className=' md:w-[642px] md:h-[157px] flex flex-col gap-4 text-[#666666] font-karla md:text-justify'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil atque modi velit molestiae, repellendus iure sint possimus cumque, provident, dolorum unde laboriosam ut eius ex maiores quod repudiandae aut asperiores?</p>
                    <div className='w-[270px] h-[130px] xs:w-[420px] xs:h-[100px]  md:w-full md:h-[70px] flex items-center gap-4 bg-[#88d54f] font-bold font-karla text-[20px] text-white pl-4'>
                        <div className='size-[21px] rounded-full flex items-center justify-center bg-white'>
                            <Check size={18} color='gray' />
                        </div>
                        <span> Your reservation was succefully submited!!</span>
                    </div>
                </div>
                <div className='w-[270px] xs:w-[420px] md:w-[487px] md:h-[221px]'>
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
                                <td className='w-[74PX] h-[73px] p-[15px] text-left font-karla hidden xs:table-cell md:table-cell xs:text-[14px]' >
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

export default BookingDoneComponent;