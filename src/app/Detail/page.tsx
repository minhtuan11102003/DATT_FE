
"use client"
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIos } from "react-icons/md";
import { DatePickerDetail } from "@/components/ui/date-picker-detail";
import { Button } from "@nextui-org/react";
import { CalendarDate, DateInput } from "@nextui-org/react";
import { CalendarIcon } from "lucide-react";
import React from "react";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
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




import React from "react";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

const AccomodationPage = () => {
  return (
    <div className="room-details">
      {/* Accomodation */}
      <section className="accomodation__breadcrumb ">
        <div className="accomodation__banner bg-[url('/images/banner-item/accomodation-breadcrumb-one.jpg')] bg-no-repeat relative bg-center min-h-[333px] bg-cover text-center mb-[80px]">
          <div className="accomodation__banner-title pt-[170px] pb-[58px]">
            <h2 className="uppercase text-[#fff] font-normal text-[44px] leading-[25px] pb-[40px] font-PlayfairDisplay relative after:absolute after:bg-[url('/images/icon-section/nice-title-breadcrumb.png')] bg-no-repeat after:bottom-[-30px] after:h-[50%] after:w-[103px] nice-title after:bg-no-repeat drop-shadow-[0_20px_20px_rgb(0,0,0)]">
              Deluxe Room
            </h2>
          </div>
          <div className="absolute top-0 left-0 w-full">
            <div className="accomodation__banner-img container relative">
              <div className="w-full">
                <img
                  src="/images/icon-section/special-offer-yellow-main.png"
                  alt=""
                  className="max-w-full h-auto object-cover absolute top-0 right-0"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="room-details-container mb-[55px] relative">

        <div className="container flex gap-12">

          <div className="room-details__main basis-3/4">
            <div className="room-details__main--title mb-[5px]">
              <h5 className="text-[20px] text-[#131e2a] font-PlayfairDisplay font-normal uppercase leading-[20px]">
                Deluxe Room Detail
                <span className="font-Lora text-[#131e2a] text-[25px] float-right">
                  $ 130
                </span>
                <br />
                <span className="text-[#8b8d90] text-[15px] mt-[7px] float-right normal-case">
                  / night
                </span>
              </h5>
            </div>
            <div className="room-details__main--content">
              <p className="text-[#666666]">Checkout the latest deal</p>
              <div className="room-details__description">
                <div className="row">

                 <Slider_detail_room sliders={IMAGES}/>
                </div>
                <div className="row">
                  <div className="mt-[70px] mb-[30px]">
                    <div className="room-details__main--title mb-[30px]">
                      <h5 className="text-[20px] text-[#131e2a] uppercase font-PlayfairDisplay">
                        Room Fecilities
                      </h5>
                    </div>
                    <div className="grid grid-cols-4 border-b-[1px] border-t-[1px] border-[#e5e5e5] py-[35px]">
                      <div className="col-1">
                        <ul className="flex flex-col gap-8">
                          <li className="flex items-center gap-2">
                            <img
                              src="/images/Detail/Deluxe_Room/icon-detail_01.png"
                              alt=""
                            />
                            <p className="font-bold text-[18px]">Breakfast</p>
                          </li>
                          <li className="flex items-center gap-2">
                            <img
                              src="/images/Detail/Deluxe_Room/icon-detail_02.png"
                              alt=""
                            />
                            <p className="font-bold text-[18px]">
                              Room service
                            </p>
                          </li>
                        </ul>
                      </div>
                      <div className="col-1">
                        <ul className="flex flex-col gap-8">
                          <li className="flex items-center gap-2">
                            <img
                              src="/images/Detail/Deluxe_Room/icon-detail_03.png"
                              alt=""
                            />
                            <p className="font-bold text-[18px]">
                              Air conditioning
                            </p>
                          </li>
                          <li className="flex items-center gap-2">
                            <img
                              src="/images/Detail/Deluxe_Room/icon-detail_04.png"
                              alt=""
                            />
                            <p className="font-bold text-[18px]">
                              GYM fecility
                            </p>
                          </li>
                        </ul>
                      </div>
                      <div className="col-1">
                        <ul className="flex flex-col gap-8">
                          <li className="flex items-center gap-2">
                            <img
                              src="/images/Detail/Deluxe_Room/icon-detail_05.png"
                              alt=""
                            />
                            <p className="font-bold text-[18px]">
                              Free Parking
                            </p>
                          </li>
                          <li className="flex items-center gap-2">
                            <img
                              src="/images/Detail/Deluxe_Room/icon-detail_06.png"
                              alt=""
                            />
                            <p className="font-bold text-[18px]">TV LCD</p>
                          </li>
                        </ul>
                      </div>
                      <div className="col-1">
                        <ul className="flex flex-col gap-8">
                          <li className="flex items-center gap-2">
                            <img
                              src="/images/Detail/Deluxe_Room/icon-detail_07.png"
                              alt=""
                            />
                            <p className="font-bold text-[18px]">Pet allowed</p>
                          </li>
                          <li className="flex items-center gap-2">
                            <img
                              src="/images/Detail/Deluxe_Room/icon-detail_08.png"
                              alt=""
                            />
                            <p className="font-bold text-[18px]">
                              Wi-fi service
                            </p>
                          </li>

                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">

                  <div className="mt-[50px] text-[16px] text-justify text-[#131e2a] border-b-[1px] pb-[70px] border-[#e5e5e5]">
                    <p className="mb-[20px]">

                      Semper ac dolor vitae accumsan. Cras interdum hendrerit
                      lacinia. Phasellus accumsan urna vitae molestie interdum.
                      Nam sed placerat libero, non eleifend dolor. Cras ac justo
                      et augue suscipit euismod vel eget lectus. Proin vehicula
                      nunc arcu, pulvinar accumsan nulla porta vel. Vivamus
                      malesuada vitae sem ac pellentesque.
                    </p>
                    <p>
                      Cras ac justo et augue suscipit euismod vel eget lectus.
                      Proin vehicula nunc arcu, pulvinar accumsan nulla porta
                      vel. Vivamus malesuada vitae sem ac pellentesque.
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="accomodation_room">
                    <div className="mt-[50px] mb-[30px]">
                      <h5 className="font-PlayfairDisplay font-normal text-[20px] text[#131e2a] uppercase">
                        You may Also like
                      </h5>
                    </div>

                    <div className="grid grid-cols-3 gap-8">

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
                                <h6 className="text-[#424c55] text-[14px] leading-[18px] font-PlayfairDisplay uppercase font-normal">
                                  Deluxe Room
                                </h6>
                                <p className="my-[15px] text-[16px] font-karla text-[#666666]">
                                  $200/ <span className="">night</span>
                                </p>
                              </div>
                              <div className="right">
                                <a className="inline-block cursor-pointer border-[#63c2ea] border-2 text-[#63c2ea] py-[8px] px-[17px] font-normal hover:bg-[#63c2ea] hover:text-[#ffffff] transition-colors duration-500 select-none">
                                  Book
                                </a>
                              </div>
                            </div>
                          </figure>
                        </div>
                      </div>
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
                                <h6 className="text-[#424c55] text-[14px] leading-[18px] font-PlayfairDisplay uppercase font-normal">
                                  Deluxe Room
                                </h6>
                                <p className="my-[15px] text-[16px] font-karla text-[#666666]">
                                  $200/ <span className="">night</span>
                                </p>
                              </div>
                              <div className="right">
                                <a className="inline-block cursor-pointer border-[#63c2ea] border-2 text-[#63c2ea] py-[8px] px-[17px] font-normal hover:bg-[#63c2ea] hover:text-[#ffffff] transition-colors duration-500 select-none">
                                  Book
                                </a>
                              </div>
                            </div>
                          </figure>
                        </div>
                      </div>
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
                                <h6 className="text-[#424c55] text-[14px] leading-[18px] font-PlayfairDisplay uppercase font-normal">
                                  Deluxe Room
                                </h6>
                                <p className="my-[15px] text-[16px] font-karla text-[#666666]">
                                  $200/ <span className="">night</span>
                                </p>
                              </div>
                              <div className="right">
                                <a className="inline-block cursor-pointer border-[#63c2ea] border-2 text-[#63c2ea] py-[8px] px-[17px] font-normal hover:bg-[#63c2ea] hover:text-[#ffffff] transition-colors duration-500 select-none">
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
          <div className="room-dettails__nav basis-1/4">

            <aside>
              <div className="form-room__details bg-[#313a45] mb-8 w-[230px]">
                <form action="" className="flex flex-col gap-4 pt-[30px] pl-[30px] pr-[30px] text-[#90a4bb]">
                  <div className="form-room__details--title mt-[30px] text-white">
                    <p className="text-[16px] font-bold uppercase">Book Your</p>
                    <h3 className="text-[30px] font-bold leading-[80%]">
                      Rooms
                    </h3>
                  </div>
                  <div className="form-room__details--arival my-[10px]">
                    <DatePickerDetail title="Arrival" />
                  </div>
                  <div className="form-room__details--departure">
                    <DatePickerDetail title="Departure" />
                  </div>
                  <div className="flex justify-between mt-[50px]">
                    <select className="bg-[#313a45] border-b-[2px] border-[#48525e]" name="" id="">
                      <option selected value="1">
                        1 ROOM
                      </option>
                      <option className="p-0" value="2">2 ROOM</option>
                      <option className="p-0" value="4">3 ROOM</option>
                      <option className="p-0" value="4">4 ROOM</option>
                    </select>
                    <select className="bg-[#313a45] border-[#48525e] border-b-[2px]" name="" id="">
                      <option selected value="1">
                        1 BED
                      </option>
                      <option className="p-0" value="2">2 BED</option>
                      <option className="p-0" value="4">3 BED</option>
                      <option className="p-0" value="4">4 BED</option>
                    </select>
                  </div>
                  <div className="flex justify-between mt-[50px]">
                    <select className="bg-[#313a45] border-b-[2px] border-[#48525e]" name="" id="">
                      <option selected value="1">
                        1 ROOM
                      </option>
                      <option className="p-0" value="2">2 ROOM</option>
                      <option className="p-0" value="4">3 ROOM</option>
                      <option className="p-0" value="4">4 ROOM</option>
                    </select>
                    <select className="bg-[#313a45] border-b-[2px] border-[#48525e]" name="" id="">
                      <option selected value="1">
                        1 BED
                      </option>
                      <option className="p-0" value="2">2 BED</option>
                      <option className="p-0" value="4">3 BED</option>
                      <option className="p-0" value="4">4 BED</option>
                    </select>
                  </div>
                  <div className="form-room__details--btn flex h-[70px] relative">
                    <button className="px-3 py-2 bg-[#e37466] self-end absolute  translate-y-[50%] translate-x-[-50%] left-[50%]" type="submit">Book</button>
                  </div>
                </form>
              </div>
              <div className="comment__details mt-[70px]">
                <h2 className="text-[24px] font-PlayfairDisplay capitalize mb-[30px]">Customer Review</h2>
                <Carousel_comment comments={data_comment} />

              </div>
            </aside>

          </div>
        </div>
      </section>
    </div>
  );
};

export default AccomodationPage;
