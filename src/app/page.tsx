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
import Contact from "@/components/page/contact";

export default function Home() {
  return (
    <div className="w-full ">
      <div className="sectionDate w-full h-[570px] relative mt-6 pb-[90px]">
        <div className="w-full h-full flex justify-center ">
          <div className="w-[1140px] h-[100px] py-[26px] px-[10px] absolute text-[#aab8ca] bg-[#313a45] z-10">
            <div className="w-[1120px] h-full flex items-end gap-8 pl-2 ">
              <div className="w-[135px] h-full flex flex-col">
                <p className="text-[#fff] text-[15px] font-[600px] h-[15px]">
                  BOOK YOUR
                </p>
                <span className="text-[#fff] text-[30px] font-[700px] h-[25px]">
                  ROOMS
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
            <div className="relative w-[223px] h-[276px] top-[26px] left-[907px]">
              <img
                src="./images/special-offer-main.png"
                alt="Lỗi ảnh"
                className="w-full h-full"
              />
            </div>
          </div>
          <div className="w-full h-full">
            <BannerComponent />
          </div>
        </div>
      </div>
      <div className="sectionNew w-full flex justify-center ">
        <div className="w-[1140px] flex flex-col items-center gap-52">
          <div className="h-[400px] text-center">
            {/* <div> */}
            <div>
              <h3 className="inline-block text-[30px] text-[#131e2a] leading-[25px] relative pb-[33px] mb-[55px] uppercase font-PlayfairDisplay after:bg-[url('/images/icon-section/nice-title.png')] after:bg-no-repeat after:absolute after:w-[103px] after:h-[50%] after:-bottom-[30px] nice-title font-normal">
              <h3 className="inline-block text-[30px] leading-6 relative pb-[33px] mb-[55px] uppercase font-PlayfairDisplay after:bg-[url('/images/icon-section/nice-title.png')] after:absolute after:w-[103px] after:h-[50%] after:-bottom-[30px] nice-title">
                Welcome To Hotel
              </h3>
            </div>
            <div className="pb-[43px] px-[20%]">
              <p className="text-[#666666] font-karla text-[16px]">
                Semper ac dolor vitae accumsan. Cras interdum hendrerit lacinia.
                Phasellus accumsan urna vitae molestie interdum. Nam sed
                placerat libero, non eleifend dolor.
              </p>
            </div>
            <div className="grid grid-cols-4 gap-8">
              <div className="col-1">
                <div className="overflow-hidden">
                  <figure className="figure-hover relative">
                    <div className="mb-[28px]">
                      <a>
                        <img
                          src="./images/room-section/room-image-five.png"
                          width={"100%"}
                          alt="room-eight"
                        />
                      </a>
                    </div>
                    <div className="flex justify-between border-[#e1e1e1] border-b-[1px]">
                      <div className="left">
                        <h6 className="text-[#424c55] text-[18px] font-Lora">
                          Deluxe Room
                        </h6>
                        <p className="my-[15px] text-[18px] font-Lora text-[#666666]">
                          $200/{" "}
                          <span className="text-[11px] text-[#666666]">
                            night
                          </span>
                        </p>
                      </div>
                      <div className="right">
                        <a className="inline-block cursor-pointer border-[#63c2ea] border-2 text-[#63c2ea] py-[8px] px-[17px] font-normal btn-welcome">
                          Book
                        </a>
                      </div>
                    </div>
                    <div className="bounch-hover p-[13px] bg-[#f7c411] hidden bg-repeat h-full w-full text-left top-0 left-0 bottom-0 right-0 animate-bounceInDown animate-mode absolute duration-700">
                      <div className="border-[1px] border-[#475362] p-[22px]">
                        <h5 className="font-[18px] leading-5">Deluxe Room</h5>
                        <p className="text-[15px] my-[15px]">
                          Semper ac dolor vitae accumsan. interdum hendrerit
                          lacinia.
                        </p>
                        <p className="text-[15px] mb-[10px]">
                        Phasellus accumsan urna vitae molestie interdum.
                        </p>
                        <div className="flex justify-between">
                          <div className="left">
                            <p className="my-[15px] mt-[18px] text-[15px] font-Lora text-[#666666]">
                            <h6 className="text-[#424c55] text-[18px] font-Lora">
                              Deluxe Room
                            </h6>
                            <p className="my-[15px] text-[18px] font-Lora text-[#666666]">
                              $200/{" "}
                              <span className="text-[11px] text-[#666666]">
                                night
                              </span>
                            </p>
                          </div>
                          <div className="right flex items-end">
                            <a className="align-middle block mb-[-23px] mr-[-23px] cursor-pointer border-t-[1px] border-l-[1px]   text-[#444] py-[8px] px-[17px] font-normal ">
                              Book
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </figure>
                </div>
              </div>
              <div className="col-2">
                <div className="overflow-hidden">
                  <figure className="figure-hover relative">
                    <div className="mb-[28px]">
                      <a>
                        <img
                          src="./images/room-section/room-image-five.png"
                          width={"100%"}
                          alt="room-eight"
                        />
                      </a>
                    </div>
                    <div className="flex justify-between border-[#e1e1e1] border-b-[1px]">
                      <div className="left">
                        <h6 className="text-[#424c55] text-[18px] font-Lora">
                          Deluxe Room
                        </h6>
                        <p className="my-[15px] text-[18px] font-Lora text-[#666666]">
                          $200/{" "}
                          <span className="text-[11px] text-[#666666]">
                            night
                          </span>
                        </p>
                      </div>
                      <div className="right">
                        <a className="inline-block cursor-pointer border-[#63c2ea] border-2 text-[#63c2ea] py-[8px] px-[17px] font-normal btn-welcome">
                          Book
                        </a>
                      </div>
                    </div>
                    <div className="bounch-hover p-[13px] bg-[#f7c411] hidden bg-repeat h-full w-full text-left top-0 left-0 bottom-0 right-0 animate-bounceInUp animate-mode absolute duration-700">
                      <div className="border-[1px] border-[#475362] p-[22px]">
                        <h5 className="font-[18px] leading-5">Deluxe Room</h5>
                        <p className="text-[15px] my-[15px]">
                          Semper ac dolor vitae accumsan. interdum hendrerit
                          lacinia.
                        </p>
                        <p className="text-[15px] mb-[10px]">
                        Phasellus accumsan urna vitae molestie interdum.
                        </p>
                        <div className="flex justify-between">
                          <div className="left">
                            <p className="my-[15px] mt-[18px] text-[15px] font-Lora text-[#666666]">
                              $200/{" "}
                              <span className="text-[11px] text-[#666666]">
                                night
                              </span>
                            </p>
                          </div>
                          <div className="right flex items-end">
                            <a className="align-middle block mb-[-23px] mr-[-23px] cursor-pointer border-t-[1px] border-l-[1px]   text-[#444] py-[8px] px-[17px] font-normal ">
                              Book
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </figure>
                </div>
              </div>            
              <div className="col-3">
                <div className="overflow-hidden">
                  <figure className="figure-hover relative">
                    <div className="mb-[28px]">
                      <a>
                        <img
                          src="./images/room-section/room-image-five.png"
                          width={"100%"}
                          alt="room-eight"
                        />
                      </a>
                    </div>
                    <div className="flex justify-between border-[#e1e1e1] border-b-[1px]">
                      <div className="left">
                        <h6 className="text-[#424c55] text-[18px] font-Lora">
                          Deluxe Room
                        </h6>
                        <p className="my-[15px] text-[18px] font-Lora text-[#666666]">
                          $200/{" "}
                          <span className="text-[11px] text-[#666666]">
                            night
                          </span>
                        </p>
                      </div>
                      <div className="right">
                        <a className="inline-block cursor-pointer border-[#63c2ea] border-2 text-[#63c2ea] py-[8px] px-[17px] font-normal btn-welcome">
                          Book
                        </a>
                      </div>
                    </div>
                    <div className="bounch-hover p-[13px] bg-[#f7c411] hidden bg-repeat h-full w-full text-left top-0 left-0 bottom-0 right-0 animate-bounceInDown animate-mode absolute duration-700">
                      <div className="border-[1px] border-[#475362] p-[22px]">
                        <h5 className="font-[18px] leading-5">Deluxe Room</h5>
                        <p className="text-[15px] my-[15px]">
                          Semper ac dolor vitae accumsan. interdum hendrerit
                          lacinia.
                        </p>
                        <p className="text-[15px] mb-[10px]">

                        Phasellus accumsan urna vitae molestie interdum.
                        </p>
                        <div className="flex justify-between">
                          <div className="left">
                            <p className="my-[15px] mt-[18px] text-[15px] font-Lora text-[#666666]">
                              $200/{" "}
                              <span className="text-[11px] text-[#666666]">
                                night
                              </span>
                            </p>
                          </div>
                          <div className="right flex items-end">
                            <a className="align-middle block mb-[-23px] mr-[-23px] cursor-pointer border-t-[1px] border-l-[1px]   text-[#444] py-[8px] px-[17px] font-normal ">
                              Book
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </figure>
                </div>
              </div>
              <div className="col-4">
                <div className="overflow-hidden">
                  <figure className="figure-hover relative">
                    <div className="mb-[28px]">
                      <a>
                        <img
                          src="./images/room-section/room-image-five.png"
                          width={"100%"}
                          alt="room-eight"
                        />
                      </a>
                    </div>
                    <div className="flex justify-between border-[#e1e1e1] border-b-[1px]">
                      <div className="left">
                        <h6 className="text-[#424c55] text-[18px] font-Lora">
                          Deluxe Room
                        </h6>
                        <p className="my-[15px] text-[18px] font-Lora text-[#666666]">
                          $200/{" "}
                          <span className="text-[11px] text-[#666666]">
                            night
                          </span>
                        </p>
                      </div>
                      <div className="right">
                        <a className="inline-block cursor-pointer border-[#63c2ea] border-2 text-[#63c2ea] py-[8px] px-[17px] font-normal btn-welcome">
                          Book
                        </a>
                      </div>
                    </div>
                    <div className="bounch-hover p-[13px] bg-[#f7c411] hidden bg-repeat h-full w-full text-left top-0 left-0 bottom-0 right-0 animate-bounceInUp animate-mode absolute duration-700">
                      <div className="border-[1px] border-[#475362] p-[22px]">
                        <h5 className="font-[18px] leading-5">Deluxe Room</h5>
                        <p className="text-[15px] my-[15px]">
                          Semper ac dolor vitae accumsan. interdum hendrerit
                          lacinia.
                        </p>
                        <p className="text-[15px] mb-[10px]">
                        Phasellus accumsan urna vitae molestie interdum.
                        </p>
                        <div className="flex justify-between">
                          <div className="left">
                            <p className="my-[15px] mt-[18px] text-[15px] font-Lora text-[#666666]">
                              $200/{" "}
                              <span className="text-[11px] text-[#666666]">
                                night
                              </span>
                            </p>
                          </div>
                          <div className="right flex items-end">
                            <a className="align-middle block mb-[-23px] mr-[-23px] cursor-pointer border-t-[1px] border-l-[1px]   text-[#444] py-[8px] px-[17px] font-normal ">
                              Book
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </figure>
                </div>
              </div>            
            </div>
          </div>
          <div className="w-1/2 h-[20px] "></div>
        </div>
      </div>

    </div>
  );
}
