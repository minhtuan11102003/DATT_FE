import Link from "next/link";
import { ChevronDown } from 'lucide-react';
import { DatePickerDemo } from "@/components/ui/date-picker";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button";
import BannerComponent from "../components/page/banner";

export default function Home() {


  return (
    <div className="w-full flex justify-center">
      <div className="sectionDate w-full h-[570px] relative mt-6">
        <div className="w-full h-full flex justify-center ">
          <div className="w-[1140px] h-[100px] py-[26px] px-[10px] absolute text-[#aab8ca] bg-[#313a45] z-10">
            <div className="w-[1120px] h-full flex items-end gap-8 pl-2 ">
              <div className="w-[135px] h-full flex flex-col">
                <p className="text-[#fff] text-[15px] font-[600px] h-[15px]">BOOK YOUR</p>
                <span className="text-[#fff] text-[30px] font-[700px] h-[25px]">ROOMS</span>
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
                <Button className="bg-[#f7c411] text-[#313a45] font-extrabold text-[16px]">BOOK</Button>
              </div>
            </div>
            <div className="relative w-[223px] h-[276px] top-[26px] left-[907px]">
              <img src="./images/special-offer-main.png" alt="Lỗi ảnh" className="w-full h-full" />
            </div>
          </div>
          <div className="w-full h-full">
            <BannerComponent/>
          </div>
        </div>
      </div>
    </div>
  );
}
