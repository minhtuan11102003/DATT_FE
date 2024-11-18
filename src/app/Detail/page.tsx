"use client"

import React from "react";

import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIos } from "react-icons/md";
import { DatePickerDetail } from "@/components/ui/date-picker-detail";
import { Button } from "@/components/ui/button";
// import { CalendarDate, DateInput } from "@nextui-org/react";
import { CalendarIcon } from "lucide-react";
import { FaCalendarAlt } from "react-icons/fa";
import { IoIosArrowDropleft, IoIosArrowDropright,  } from "react-icons/io";

import Carousel_comment from "@/app/Detail/components/carousel_comment";
import Slider_detail_room from "@/app/Detail/components/slider_detail_room";

export interface comment {
  id: number,
  name_user: string,
  comment: string,
  email: string,
  sub_commnet: string,
  image: string
}

const data_comment: comment[] = [
  {
    id: 1,
    name_user: 'John Doe',
    comment: 'Semper ac dolor vitae msan. Cras interdum hendreritnia Phasellus accumsan urna vitae molestie interdum.',
    sub_commnet: 'Nam sed placerat libero, non eleifend dolor.',
    email: 'www.john.com',
    image: 'user1.png'
  },
  {
    id: 2,
    name_user: 'Jane Smith',
    comment: `Nullam tincidunt, sapien eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Aliquam erat volutpat. Nulla facilisi.`,
    sub_commnet: 'Nam sed placerat libero, non eleifend dolor.',
    email: 'www.jane.com',
    image: 'user1.png'
  },
  {
    id: 3,
    name_user: 'Alice Johnson',
    comment: `Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis dapibus aliquam mi, eget euismod sem scelerisque ut.`,
    sub_commnet: 'Nam sed placerat libero, non eleifend dolor.',
    email: 'www.alice.com',
    image: 'user1.png'
  },
  {
    id: 4,
    name_user: 'Bob Williams',
    comment: `Integer in sapien non est gravida convallis. Fusce nec nulla massa. Proin aliquam arcu vitae nibh ullamcorper, eget consequat sem aliquet.`,
    sub_commnet: 'Nam sed placerat libero, non eleifend dolor.',
    email: 'www.bob.com',
    image: 'user1.png'
  },
  {
    id: 5,
    name_user: 'Charlie Brown',
    comment: `Suspendisse at dolor sit amet arcu laoreet egestas quis in velit.
    Cras mattis justo ac nisi dignissim vehicula.`,
    sub_commnet: 'Nam sed placerat libero, non eleifend dolor.',
    email: 'www.charlie.com',
    image: 'user1.png'
  }
]

const IMAGES = [
  { image: "img1.jpg", alt: "Room One" },
  { image: "img2.jpg", alt: "Room Two" },
  { image: "img3.jpg", alt: "Room Three" },
  { image: "img4.jpg", alt: "Room Four" },
  { image: "img5.jpg", alt: "Room Five" },
  { image: "img6.jpg", alt: "Room Five" },
  { image: "img7.jpg", alt: "Room Five" },
  { image: "img8.jpg", alt: "Room Five" },
]



const DetailPage = () => {
  return (
    <div className="room-details">
      {/* Accomodation */}

      <section className="accomodation__breadcrumb mb-[80px]">
        <div className="accomodation__banner bg-[url('/images/banner-item/accomodation-breadcrumb-one.jpg')] bg-no-repeat relative bg-center min-h-[333px] bg-cover text-center">
          <div className="accomodation__banner-title pt-[170px] pb-[58px]">
            <h2 className="uppercase text-[#fff] font-normal text-[35px] leading-[25px] pb-[40px] font-PlayfairDisplay relative after:absolute after:bg-[url('/images/icon-section/nice-title-breadcrumb.png')] bg-no-repeat after:bottom-[-30px] after:h-[50%] after:w-[103px] nice-title after:bg-no-repeat drop-shadow-[0_20px_20px_rgb(0,0,0)] md:text-[22px] lg:text-[44px] md:text-center sm:text-[44px] sm:leading-[40px]">
              Deluxe room
            </h2>
          </div>
          <div className="absolute top-0 md:left-0 w-full left-[-11%]">
            <div className="accomodation__banner-img container relative xl:w-[1170px] lg:w-[970px] md:w-[750px] w-[300px] sm:w-[450px]">
              <div className="w-full">
                <img
                  src="/images/icon-section/special-offer-yellow-main.png"
                  alt=""

                  className="md:max-w-full w-[150px] md:w-auto h-auto object-cover absolute top-0 md:right-0 special_offer_sub"

                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="room-details-container mb-[55px] relative">
        <div className="container w-[300px] md:w-[750px] sm:w-[450px] lg:w-[970px] xl:w-[1170px] flex flex-col lg:flex-row lg:gap-[30px]">
          <div className="room-details__main lg:basis-3/4 lg:w-[698px] w-full">
            <div className="room-details__main--title mb-[5px] ">
              <h5 className="text-[20px] text-[#131e2a] font-PlayfairDisplay font-normal uppercase leading-[20px] md:text-[15px] lg:text-[20px]">
                Deluxe Room Detail
                <span className="font-Lora text-[#131e2a] text-[16px] md:text-[25px] float-right">
                  $ 130
                </span>
                <br />
                <span className="font-karla text-[#8b8d90] text-[15px] mt-[7px] float-right normal-case">
                  / night
                </span>
              </h5>
            </div>
            <div className="room-details__main--content">
              <p className="text-[#666666] text-[16px] mb-[15px] md:text-[12px] lg:text-[16px]">Checkout the latest deal</p>
              <div className="room-details__description">
                <div className="row">
                 <Slider_detail_room sliders={IMAGES}/>
                </div>
                <div className="row">
                  <div className="mt-[65px] mb-[40px]">
                    <div className="room-details__main--title mb-[25px]">
                      <h5 className="text-[20px] leading-[20px] text-[#131e2a] uppercase font-PlayfairDisplay md:text-[15px] lg:text-[20px]">
                        Room Fecilities
                      </h5>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 sm:gap-[30px] border-b-[1px] border-t-[1px] border-[#e5e5e5] py-[35px]">
                      <div className="col-1">
                        <ul className="flex flex-col">
                          <li className="flex items-center gap-2 leading-[34px]">
                            <img
                              src="/images/Detail/Deluxe_Room/icon-detail_01.png"
                              alt=""
                            />
                            <p className="font-bold text-[8px] md:text-[12px]">Breakfast</p>
                          </li>
                          <li className="flex items-center gap-2 leading-[34px]">
                            <img
                              src="/images/Detail/Deluxe_Room/icon-detail_02.png"
                              alt=""
                            />
                            <p className="font-bold text-[8px] md:text-[12px]">
                              Room service
                            </p>
                          </li>
                        </ul>
                      </div>
                      <div className="col-1">
                        <ul className="flex flex-col">
                          <li className="flex items-center gap-2 leading-[34px]">
                            <img
                              src="/images/Detail/Deluxe_Room/icon-detail_03.png"
                              alt=""
                            />
                            <p className="font-bold text-[8px] md:text-[12px]">
                              Air conditioning
                            </p>
                          </li>
                          <li className="flex items-center gap-2 leading-[34px]">
                            <img
                              src="/images/Detail/Deluxe_Room/icon-detail_04.png"
                              alt=""
                            />
                            <p className="font-bold text-[8px] md:text-[12px]">
                              GYM fecility
                            </p>
                          </li>
                        </ul>
                      </div>
                      <div className="col-1">
                        <ul className="flex flex-col">
                          <li className="flex items-center gap-2 leading-[34px]">
                            <img
                              src="/images/Detail/Deluxe_Room/icon-detail_05.png"
                              alt=""
                            />
                            <p className="font-bold text-[8px] md:text-[12px]">
                              Free Parking
                            </p>
                          </li>
                          <li className="flex items-center gap-2 leading-[34px]">
                            <img
                              src="/images/Detail/Deluxe_Room/icon-detail_06.png"
                              alt=""
                            />
                            <p className="font-bold text-[8px] md:text-[12px]">TV LCD</p>
                          </li>
                        </ul>
                      </div>
                      <div className="col-1">
                        <ul className="flex flex-col">
                          <li className="flex items-center gap-2 leading-[34px]">
                            <img
                              src="/images/Detail/Deluxe_Room/icon-detail_07.png"
                              alt=""
                            />
                            <p className="font-bold text-[8px] md:text-[12px]">Pet allowed</p>
                          </li>
                          <li className="flex items-center gap-2 leading-[34px]">
                            <img
                              src="/images/Detail/Deluxe_Room/icon-detail_08.png"
                              alt=""
                            />
                            <p className="font-bold text-[8px] md:text-[12px]">
                              Wi-fi service
                            </p>
                          </li>

                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="mt-[50px] text-[16px]  text-[#666666] border-b-[1px] pb-[70px] border-[#e5e5e5] md:text-[12px] lg:text-[16px]">
                    <p className="mb-[15px] tracking-normal">
                      Semper ac dolor vitae accumsan. Cras interdum hendrerit
                      lacinia. Phasellus accumsan urna vitae molestie interdum.
                      Nam sed placerat libero, non eleifend dolor. Cras ac justo
                      et augue suscipit euismod vel eget lectus. Proin vehicula
                      nunc arcu, pulvinar accumsan nulla porta vel. Vivamus
                      malesuada vitae sem ac pellentesque.
                    </p>
                    <p className="tracking-normal">
                      Cras ac justo et augue suscipit euismod vel eget lectus.
                      Proin vehicula nunc arcu, pulvinar accumsan nulla porta
                      vel. Vivamus malesuada vitae sem ac pellentesque.
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="accomodation_room">
                    <div className="mt-[50px] mb-[30px]">
                      <h5 className="font-PlayfairDisplay font-normal text-[20px] text[#131e2a] uppercase leading-[20px] md:text-[15px] lg:text-[20px]">
                        You may Also like
                      </h5>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div className="col-1 sm:text-center">
                        <div className="overflow-hidden">
                          <figure className="figure-hover relative">
                            <div className="mb-[28px] inline-block">
                              <a>
                                <img className="h-auto w-[100%]"
                                  src="./images/room-section/room-image-five.png"
                                  alt="room-eight"
                                />
                              </a>
                            </div>
                            <div className="flex justify-between border-[#e1e1e1] border-b-[1px]">
                              <div className="left">
                                <h6 className="text-[#424c55] text-[14px] leading-[18px] md:text-[13px] font-PlayfairDisplay uppercase font-normal lg:text-[14px]">
                                  Deluxe Room
                                </h6>
                                <p className="my-[15px] md:text-[12px] text-[16px] font-karla text-[#666666] sm:float-left lg:text-[16px]">
                                  $200/ <span className="">night</span>
                                </p>
                              </div>
                              <div className="right">
                                <a className="inline-block cursor-pointer border-[#63c2ea] border-2 text-[#63c2ea] py-[8px] px-[17px] font-normal hover:bg-[#63c2ea] hover:text-[#ffffff] transition-colors duration-500 select-none font-Lora md:text-[13px] md:px-[14px] md:my-[7px] lg:text-[14px]">
                                  Book
                                </a>
                              </div>
                            </div>
                          </figure>
                        </div>
                      </div>
                      <div className="col-1 sm:text-center">
                        <div className="overflow-hidden">
                          <figure className="figure-hover relative">
                            <div className="mb-[28px] inline-block">
                              <a>
                                <img className="h-auto w-[100%]"
                                  src="./images/room-section/room-image-five.png"
                                  alt="room-eight"
                                />
                              </a>
                            </div>
                            <div className="flex justify-between border-[#e1e1e1] border-b-[1px]">
                              <div className="left">
                                <h6 className="text-[#424c55] text-[14px] leading-[18px] md:text-[13px] font-PlayfairDisplay uppercase font-normal lg:text-[14px]">
                                  Deluxe Room
                                </h6>
                                <p className="my-[15px] md:text-[12px] text-[16px] font-karla text-[#666666] sm:float-left lg:text-[16px]">
                                  $200/ <span className="">night</span>
                                </p>
                              </div>
                              <div className="right">
                                <a className="inline-block cursor-pointer border-[#63c2ea] border-2 text-[#63c2ea] py-[8px] px-[17px] font-normal hover:bg-[#63c2ea] hover:text-[#ffffff] transition-colors duration-500 select-none font-Lora md:text-[13px] md:px-[14px] md:my-[7px] lg:text-[14px]">
                                  Book
                                </a>
                              </div>
                            </div>
                          </figure>
                        </div>
                      </div>
                      <div className="col-1 sm:text-center">
                        <div className="overflow-hidden">
                          <figure className="figure-hover relative">
                            <div className="mb-[28px] inline-block">
                              <a>
                                <img className="h-auto w-[100%]"
                                  src="./images/room-section/room-image-five.png"
                                  alt="room-eight"
                                />
                              </a>
                            </div>
                            <div className="flex justify-between border-[#e1e1e1] border-b-[1px]">
                              <div className="left">
                                <h6 className="text-[#424c55] text-[14px] leading-[18px] md:text-[13px] font-PlayfairDisplay uppercase font-normal lg:text-[14px]">
                                  Deluxe Room
                                </h6>
                                <p className="my-[15px] md:text-[12px] text-[16px] font-karla text-[#666666] sm:float-left lg:text-[16px]">
                                  $200/ <span className="">night</span>
                                </p>
                              </div>
                              <div className="right">
                                <a className="inline-block cursor-pointer border-[#63c2ea] border-2 text-[#63c2ea] py-[8px] px-[17px] font-normal hover:bg-[#63c2ea] hover:text-[#ffffff] transition-colors duration-500 select-none font-Lora md:text-[13px] md:px-[14px] md:my-[7px] lg:text-[14px]">
                                  Book
                                </a>
                              </div>
                            </div>
                          </figure>
                        </div>
                      </div>
                             
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="room-dettails__nav lg:basis-1/4">
            <aside className="px-[15px] md:flex md:gap-[30px] lg:flex-col">
              <div className="form-room__details bg-[#313a45] mb-8 md:basis-1/3 ">
                <form action="" className="flex flex-col gap-4 pt-[30px] pl-[30px] pr-[30px] text-[#90a4bb] lg:pl-[15px] lg:pr-[15px]">
                  <div className="form-room__details--title text-white">
                    <p className="text-[15px] font-semibold uppercase leading-[18px]">Book Your</p>
                    <h3 className="text-[30px] font-bold leading-[25px]">
                      Rooms
                    </h3>
                  </div>
                  <div className="form-room__details--arival my-[10px] lg:text-[11px]">
                    <DatePickerDetail title="Arrival"/>
                  </div>
                  <div className="form-room__details--departure ">
                    <DatePickerDetail title="Departure"/>
                  </div>
                  <div className="flex flex-col lg:flex-row lg:mb-[20px] gap-[20px] mt-[20px]">
                    <select className="bg-[#313a45] border-b-[2px] border-[#48525e] h-[37px] lg:pr-[15px] lg:text-[11px] xl:text-[13px]" name="" id="">
                      <option selected value="1">
                        1 ROOM
                      </option>
                      <option className="p-0" value="2">2 ROOM</option>
                      <option className="p-0" value="4">3 ROOM</option>
                      <option className="p-0" value="4">4 ROOM</option>
                    </select>
                    <select className="bg-[#313a45]  border-[#48525e] border-b-[2px] h-[37px] lg:pr-[15px] lg:text-[11px] xl:text-[13px]" name="" id="">
                      <option selected value="1">
                        BEDS
                      </option>
                      <option className="p-0" value="2">2 BED</option>
                      <option className="p-0" value="4">3 BED</option>
                      <option className="p-0" value="4">4 BED</option>
                    </select>
                  </div>
                  <div className="flex flex-col lg:flex-row lg:mb-[20px] gap-[20px] mb-[20px]">
                    <select className="bg-[#313a45] border-b-[2px] border-[#48525e] h-[37px] lg:pr-[15px] lg:text-[11px] xl:text-[13px]" name="" id="">
                      <option selected value="1">
                        1 ADULT
                      </option>
                      <option className="p-0" value="2">2 ROOM</option>
                      <option className="p-0" value="4">3 ROOM</option>
                      <option className="p-0" value="4">4 ROOM</option>
                    </select>
                    <select className="bg-[#313a45] border-b-[2px] border-[#48525e] h-[37px] lg:pr-[15px] lg:text-[11px] xl:text-[13px]" name="" id="">
                      <option selected value="1">
                        1 CHILD
                      </option>
                      <option className="p-0" value="2">2 BED</option>
                      <option className="p-0" value="4">3 BED</option>
                      <option className="p-0" value="4">4 BED</option>
                    </select>
                  </div>
                  <div className="form-room__details--btn flex h-[70px] relative">
                    <button className="px-[22px] py-[9px] bg-[#fe5d5d]  absolute font-semibold lg:bottom-0  translate-y-[50%] translate-x-[-50%] left-[50%] text-[#fff] font-Lora leading-[20px] hover:bg-[#fff] hover:text-[#fe5d5d] border-[1px] border-[#fe5d5d] transition duration-300" type="submit">Book</button>
                  </div>
                </form>
              </div>
              <div className="comment__details md:mt-0 mt-[70px] md:basis-1/3  md:overflow-hidden lg:overflow-auto lg:max-w-[200px]">
                <h2 className="text-[20px] text-[#131e2a] font-PlayfairDisplay uppercase mb-[30px]">Customer Review</h2>
                <Carousel_comment comments={data_comment} />
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DetailPage;
