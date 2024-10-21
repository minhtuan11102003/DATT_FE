import Link from "next/link";
import { ChevronDown } from 'lucide-react';
import { Facebook, Instagram, Linkedin, Mail, Twitter } from 'lucide-react';
import { DatePickerDemo } from "@/components/ui/date-picker";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import BannerComponent from "../components/page/banner";
import Welcome_hotel from "@/app/Home/welcome_hotel";
import Facilities from "@/components/page/facilties";
import Newsection from "@/components/page/newsection";


export default function Home() {
  return (
    <div className="w-full h-auto ">
      <div className="sectionDate w-[435px] h-[184px] xs:w-full xs:h-[241px] md:w-full md:h-[570px] mt-6 pb-[90px]">
        <div className="w-full h-[189px] xs:w-full xs:h-full md:w-full md:h-full flex justify-center ">
          <div className="w-[270px] h-[440px] xs:w-[420px] xs:h-[420px] md:w-[1140px] md:h-[100px] md:mt-0 mt-[40%] absolute text-[#aab8ca] z-10">
            <div className="w-[270px] px-[10px] h-full flex flex-col items-center gap-4 text-[#aab8ca] bg-[#313a45]
                xs:w-[420px] xs:h-[389px] 
                md:w-full md:h-[80px] md:flex-row md:items-center md:gap-8">
              <div className="xs:w-full md:w-[135px] md:h-[42px] w-full h-full font-karla flex items-center pl-2 text-white font-bold">
                <span className="xs:w-[380px] w-[240px] text-[15px] md:w-full">
                  <p className='h-[10px]'>CHOOSE</p>
                  <p className="text-[28px]">Option</p>
                </span>
                <span className="border border-gray-600 w-0 h-full"></span>
              </div>
              <div className="w-[240px] xs:w-[380px] md:w-[160px] ">
                <DatePickerDemo />
              </div>
              <div className="w-[240px] xs:w-[380px] md:w-[160px] ">
                <DatePickerDemo />
              </div>
              <div className="w-[240px] xs:w-[380px] md:w-[120px] ">
                <Select>
                  <SelectTrigger className="w-full md:w-[120px]">
                    <SelectValue placeholder="1 ROOM" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#313a45] text-[#aab8ca]">
                    <SelectItem value="1 ROOM">1 ROOM</SelectItem>
                    <SelectItem value="2 ROOM">2 ROOM</SelectItem>
                    <SelectItem value="3 ROOM">3 ROOM</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="w-[240px] xs:w-[380px] md:w-[120px] ">
                <Select>
                  <SelectTrigger className="w-full md:w-[120px]">
                    <SelectValue placeholder="1 ADULT" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#313a45] text-[#aab8ca]">
                    <SelectItem value="1 ADULT">1 ADULT</SelectItem>
                    <SelectItem value="2 ADULT">2 ADULT</SelectItem>
                    <SelectItem value="3 ADULT">3 ADULT</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="w-[240px] xs:w-[380px] md:w-[120px] ">
                <Select>
                  <SelectTrigger className="w-full md:w-[120px]">
                    <SelectValue placeholder="0 CHILD" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#313a45] text-[#aab8ca]">
                    <SelectItem value="0 CHILD">0 CHILD</SelectItem>
                    <SelectItem value="1 CHILD">1 CHILD</SelectItem>
                    <SelectItem value="2 CHILD">2 CHILD</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="w-[240px] xs:w-[380px] md:w-[120px] ">
                <Button className="bg-[#f7c411] w-full text-[#313a45] font-extrabold text-[16px] border hover:text-white hover:bg-[#313a45] hover: border-[#f7c411]">BOOK</Button>
              </div>
            </div>
            <div className="relative hidden w-[150px] h-[80px] md:w-[223px] md:h-[276px] top-[0px] md:left-[907px] md:block">
              <img
                src="./images/special-offer-main.png"
                alt="Lỗi ảnh"
                className="w-full h-full "
              />
            </div>
          </div>
          <div className="w-full h-[189px] xs:w-full xs:h-[318px] md:w-full md:h-full">
            <BannerComponent />
          </div>
        </div>
      </div>
      <div className="h-[500px] md:h-0"></div>
      <div className="sectionNew w-full flex justify-center ">
        <div className="w-[1140px] flex flex-col items-center gap-52">
          <Welcome_hotel />
          <div className="w-1/2 h-[20px] "></div>
        </div>
      </div>
      <div className="sectionFacilities w-full">
        <Facilities />
      </div>
      <div className="sectionFacilities w-full">
        <Newsection />
      </div>
    </div>
  );
}
