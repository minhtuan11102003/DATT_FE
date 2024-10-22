import React from 'react';
import { DatePickerDemo } from "@/components/ui/date-picker";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from '@/components/ui/textarea';

const PersonalInfoComponent = () => {
    return (
        <div className='w-full'>
            <div className='section1 w-[270px] flex flex-col xs:w-[420px] md:w-full md:h-[90px] md:flex-row md:justify-around gap-4'>
                <input type="text" placeholder='FIRST NAME' className='w-[270px] xs:w-[420px] md:w-[360px] h-[45px] pl-[22px] py-[6px] pr-[12px] border border-gray-200 outline-none' />
                <input type="text" placeholder='LAST NAME' className='w-[270px] xs:w-[420px] md:w-[360px] h-[45px] pl-[22px] py-[6px] pr-[12px] border border-gray-200 outline-none' />
                <input type="text" placeholder='EMAIL' className='w-[270px] xs:w-[420px] md:w-[360px] h-[45px] pl-[22px] py-[6px] pr-[12px] border border-gray-200 outline-none' />
            </div>
            <div className='section2 w-[270px] flex-col mt-4 xs:w-[420px] md:w-full md:h-[90px] flex md:flex-row md:justify-around gap-4 '>
                <input type="text" placeholder='FIRST NAME' className='w-[270px] xs:w-[420px] md:w-[262px] h-[45px] pl-[22px] py-[6px] pr-[12px] border border-gray-200 outline-none' />
                <div className="w-[270px] xs:w-[420px] md:w-[262px] h-[45px] border border-gray-200">
                    <Select>
                        <SelectTrigger className="w-[270px] xs:w-[420px] md:w-[262px] text-gray-400 h-full  border border-gray-200">
                            <SelectValue placeholder="SMOKING ROOM" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#313a45] text-gray-400">
                            <SelectItem value="NONE">NONE</SelectItem>
                            <SelectItem value="YES">YES</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="w-[270px] xs:w-[420px] md:w-[262px] h-[45px] border border-gray-200">
                    <Select>
                        <SelectTrigger className="w-[270px] xs:w-[420px] md:w-[262px] text-gray-400 h-full  border border-gray-200">
                            <SelectValue placeholder="PARKING" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#313a45] text-gray-400">
                            <SelectItem value="PARKING">PARKING</SelectItem>
                            <SelectItem value="PARKING">PARKING</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="w-[270px] xs:w-[420px] md:w-[262px] h-[45px] border border-gray-200">
                    <Select>
                        <SelectTrigger className="w-[270px] xs:w-[420px] md:w-[262px] text-gray-400 h-full  border border-gray-200">
                            <SelectValue placeholder="WITH PET" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#313a45] text-gray-400">
                            <SelectItem value="NONE">NONE</SelectItem>
                            <SelectItem value="YES">YES</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <div className='section3 w-[270px] xs:w-[420px] md:w-full h-[113px] flex justify-around mt-4'>
                <Textarea className='w-[270px] xs:w-[420px] md:w-[1152px] h-full border border-gray-300 text-gray-400 text-[16px]' placeholder='ANY SPECIFIC REQUEST' />
            </div>
        </div>
    );
};

export default PersonalInfoComponent;