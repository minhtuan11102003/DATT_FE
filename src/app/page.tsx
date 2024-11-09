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
import Welcome_hotel from "@/app/Home/welcome_hotel";
import Facilities from "@/components/page/facilties";
import Newsection from "@/components/page/newsection";
import BannerSectionTest from "@/components/page/banner-test";
import BannerSection2 from "@/components/page/banner-test";


export default function Home() {
  return (
    <div className="w-full h-auto ">
      <div className="sectionDate w-[380px] xs:w-full md:w-full  mt-6 pb-[90px]">
        <div className="w-full xs:w-full xs:h-full md:w-full md:h-full flex justify-center ">
          <div className="w-[270px] xs:w-[420px] md:w-[1140px] md:h-[100px] md:mt-0 mt-[40%] absolute text-[#aab8ca] z-10">
            <div className="mt-10 w-[270px] px-5 h-full flex flex-col items-center gap-4 py-4 text-[#aab8ca] bg-[#313a45]
                xs:w-[420px] xs:py-5
                md:w-full md:h-[80px] md:flex-row md:items-center md:gap-8 md:mt-0">
              <div className="xs:w-full md:w-[135px] md:h-[42px] w-full h-full font-karla flex items-center pl-2 text-white font-bold">
                <span className="xs:w-[380px] w-[240px] text-[15px] md:w-full">
                  <p className='h-[10px]'>BOOK YOUR </p>
                  <p className="text-[28px]">ROOMS</p>
                </span>
              <span className="border h-[40px] border-[#475362]"></span>
              </div>
              <div className="w-[240px] xs:w-[380px] md:w-[160px] ">
                <DatePickerDemo title="ARRIVAL"/>
              </div>
              <div className="w-[240px] xs:w-[380px] md:w-[160px] ">
                <DatePickerDemo title="DEPARTURE"/>
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
                <Button className="bg-[#f7c411] w-full text-[#313a45] font-extrabold text-[16px] hover:text-white hover:bg-[#3ac4fa]">BOOK</Button>
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
          <div className="w-full xs:w-full md:w-full ">
            {/* <BannerComponent /> */}
            <BannerSection2/>
          </div>
        </div>
      </div>
      <div className="h-[200px] xs:h-[250px] md:hidden"></div>
      <div className="sectionNew w-full flex justify-center md:mt-14 ">
        <div className="w-[1140px] flex flex-col items-center gap-52">



          <Welcome_hotel/>
          <div className="w-1/2 h-[100px]"></div>
          {/* <div className="w-1/4 h-[400px]"></div> */}

          {/* <div className="w-1/2 h-[20px]"></div> */}
          
          

        </div>
      </div>
      <div className="h-[150px] xs:h-[100px] md:h-0"></div>
      <div className="sectionFacilities w-full">
        <Facilities />
      </div>
      <div className="sectionFacilities w-full">
        <Newsection />
      </div>
    </div>
  );
}
