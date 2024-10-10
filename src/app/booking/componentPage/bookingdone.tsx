import { Check } from 'lucide-react';
import React from 'react';

const BookingDoneComponent = () => {
    return (
        <div className='w-full '>
            <div className='section3 w-full h-[221ox] mt-4 flex gap-5'>
                <div className='w-[642px] h-[157px] flex flex-col gap-4 text-[#666666] font-karla text-justify'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil atque modi velit molestiae, repellendus iure sint possimus cumque, provident, dolorum unde laboriosam ut eius ex maiores quod repudiandae aut asperiores?</p>
                    <div className='w-full h-[70px] flex items-center gap-4 bg-[#88d54f] font-bold font-karla text-[20px] text-white pl-4'>
                        <div className='size-[21px] rounded-full flex items-center justify-center bg-white'>
                            <Check size={18} color='gray' />
                        </div>
                        <span> Your reservation was succefully submited!!</span>
                    </div>
                </div>
                <div className='w-[487px] h-[221px]'>
                    <table className='w-full h-full font-extrabold font-karla'>
                        <tr className=''>
                            <th className='w-[224px] h-[73px] p-[15px] text-left'>
                                <span >1 ROOM</span>
                                <br />
                                <p className='text-[#666666]'>TWO ADULT & 1 CHILD </p>
                            </th>
                            <td className='w-[74PX] h-[73px] p-[15px] text-left'>
                                <span className=''>180$</span>
                                <br />
                                <p className='text-[#666666]'>RATE</p>
                            </td>
                            <td className='w-[74PX] h-[73px] p-[15px] text-left'>
                                <span className=''>5 </span>
                                <br />
                                <p className='text-[#666666]'>NIGHT</p>
                            </td>
                            <td className='w-[74PX] h-[73px] p-[15px] text-left'>
                                <span className=''>400$</span>
                            </td>
                        </tr>
                        <tr>
                            <th className='w-[224px] h-[73px] p-[15px] text-left'>
                                <span>TAX</span>
                                <br />
                                <p className='text-[#666666]'>10% ON BOOKING VALUE</p>
                            </th>

                            <td className='p-[15px] text-right' colSpan={3}>
                                <span className=''>40$</span>
                            </td>
                        </tr>
                        <tr>
                            <th className='w-[224px] h-[60px] p-[15px] text-left'>
                                <span>TOTAL</span>
                            </th>

                            <td className='p-[15px] text-right' colSpan={3}>
                                <span className=''>440$</span>
                                <br />
                                <p className='text-[#88d54f]'>(PAID)</p>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default BookingDoneComponent;