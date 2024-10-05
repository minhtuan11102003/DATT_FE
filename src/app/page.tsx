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
} from "@/components/ui/select"
import { Button } from "@/components/ui/button";
import BannerComponent from "../components/page/banner";
import Contact from "@/components/page/contact";

export default function Home() {


  return (
    <div className="w-full ">
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
                <Button className="bg-[#f7c411] text-[#313a45] font-extrabold text-[16px] border hover:text-white hover:bg-[#313a45] hover: border-[#f7c411]">BOOK</Button>
              </div>
            </div>
            <div className="relative w-[223px] h-[276px] top-[26px] left-[907px]">
              <img src="./images/special-offer-main.png" alt="Lỗi ảnh" className="w-full h-full" />
            </div>
          </div>
          <div className="w-full h-full">
            <BannerComponent />
          </div>
        </div>
      </div>
      <div className="sectionNew w-full h-[442px] border flex justify-center">
        <div className="w-[1140px] flex items-center">
          <div className="w-1/4 h-[400px] border">

          </div>
          <div className="w-1/2 h-[400px] border">

          </div>
          <div className="w-1/4 h-[400px] border">

          </div>
        </div>
      </div>
      <div className="sectionContact w-full ">
        <div className="flex justify-center items-center">
          <section className="w-[1070px] h-[95px]  justify-center py-7 px-9 bg-[#3AC4FA]">
            <div className="w-full h-[95px] mx-auto ">
              <div className="h-1/2 flex justify-center items-center gap-4">
                {/*Section1 */}
                <div className="w-[132.5px] px-4 lg:w-1/4 ">
                  <div className=" text-left ">
                    <h2 className="text-lg text-white">Call Us</h2>
                    <p className="text-lg text-white">123 456 7890</p>
                  </div>
                </div>

                {/*Section 2*/}
                <div className="w-[132.5px] lg:w-1/4 px-4">
                  <div className="text-left">
                    <h6 className="text-lg text-white">Email Us</h6>
                    <p className="text-lg text-white">info@hotelbooking.com</p>
                  </div>
                </div>

                {/*Section 3*/}
                <div className="w-full lg:w-1/4 px-4">
                  <div className="text-left relative">
                    <input
                      type="text"
                      placeholder="Enter ID for Newsletter"
                      className=" bg-transparent outline-none border-b rounded p-2 w-full  "
                    />
                    <a
                      href="#"
                      className="absolute right-0 bottom-2 bg-[#2FB3E7] text-white py-2 px-4 rounded hover:bg-white hover:text-blue-500"
                    >
                      Go
                    </a>
                    <hr></hr>
                  </div>
                </div>

                {/*Section 4*/}
                <div className="w-[189px] h-full text-white flex items-center gap-4 px-4">
                  <Facebook />
                  <Instagram />
                  <Twitter />
                  <Linkedin />
                  <Mail />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

    </div>
  );
}
