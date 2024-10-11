import React from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
const AccomodationPage = () => {
  return (
    <div className="accomodation">
      {/* Accomodation */}
      <section className="accomodation__breadcrumb bg-[url('/images/banner-item/accomodation-breadcrumb-one.jpg')] bg-no-repeat relative bg-center min-h-[333px] bg-cover text-center mb-[80px]">
        <div className="accomodation__banner flex">
          <div className="accomodation__banner-title absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <h2 className="uppercase text-[#fff] font-normal text-[44px] font-PlayfairDisplay relative after:absolute after:bg-[url('/images/icon-section/nice-title-breadcrumb.png')] after:bottom-[-30px] after:h-[50%] after:w-[103px] nice-title after:bg-no-repeat">
              accomodation
            </h2>
          </div>
          <div className="accomodation__banner-img absolute top-0 right-[180px]">
            <img
              src="/images/icon-section/special-offer-yellow-main.png"
              alt=""
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Special__Rooms */}
      <section className="SpecialRooms pt-[5px] mb-[80px]">
        <div className="max-w-[1170px] mx-auto">
          <div className="px-[15px]">
            <div className="SpecialRooms__title text-center">
              <h3 className="inline-block text-[30px] text-[#131e2a] leading-[25px] relative pb-[33px] mb-[55px] uppercase font-PlayfairDisplay after:bg-[url('/images/icon-section/nice-title.png')] after:bg-no-repeat after:absolute after:w-[103px] after:h-[50%] after:-bottom-[30px] nice-title font-normal">
                Special Rooms
              </h3>
            </div>
            <div className="SpecialRooms__main">
              <div className="grid grid-cols-3 grid-rows-2 gap-8">
                <div className="row-span-2 col-span-2">
                  <div className="relative">
                    <div className="SpecialRoms__main-img relative">
                      <a href="">
                        <img
                          src="/images/Accomodation/room-thumb-one.jpg"
                          alt="room-thumb-one"
                          className="w-full h-auto"
                        />
                      </a>
                    </div>
                    <div className="SpecialRoms__main-title">
                      <div className="room__details absolute bottom-[5%] left-[1%] mx-[15px] bg-white p-[30px] w-[94%] flex justify-between ">
                        <div className="room__details-left flex items-center">
                          <div className="room__details-title pr-[18px] border-r-[1px] border-[#e9e5df]">
                            <h5 className="font-Lora text-[21px] text-[#444444]">
                              Deluxe Room
                            </h5>
                          </div>
                          <div className="room__details-quantity pl-[18px]">
                            <p className="font-Lora text-[18px] text-[#131e2a] ">
                              $180{" "}
                              <span className="text-[#6c737a] text-[11px]">
                                / night
                              </span>
                            </p>
                          </div>
                        </div>
                        <div className="room__details-right flex items-center">
                          <a
                            href="btn"
                            className="px-[17px] py-[8px] border-[#777777] text-[#777777] text-[14px] font-Lora border-2 hover:bg-[#777777] hover:text-white"
                          >
                            Book
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="relative">
                    <div className="SpecialRoms__main-img relative">
                      <a href="">
                        <img
                          src="/images/Accomodation/room-thumb-two.jpg"
                          alt="room-thumb-one"
                          className="w-full h-auto"
                        />
                      </a>
                    </div>
                    <div className="SpecialRoms__main-title">
                      <div className="room__details absolute bottom-[5%] left-[-1%] mx-[15px] bg-white p-[11px] w-[94%] flex justify-between ">
                        <div className="room__details-left flex items-center">
                          <div className="room__details-title pr-[18px] border-r-[1px] border-[#e9e5df]">
                            <h5 className="font-Lora text-[16px] text-[#444444]">
                              Deluxe Room
                            </h5>
                          </div>
                          <div className="room__details-quantity pl-[18px]">
                            <p className="font-Lora text-[18px] text-[#131e2a] ">
                              $180{" "}
                              <span className="text-[#6c737a] text-[11px]">
                                / night
                              </span>
                            </p>
                          </div>
                        </div>
                        <div className="room__details-right flex items-center">
                          <a
                            href="btn"
                            className="px-[17px] py-[8px] border-[#777777] text-[#777777] font-Lora border-2 text-[14px] hover:bg-[#777777] hover:text-white"
                          >
                            Book
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-[2px]">
                  <div className="relative">
                    <div className="SpecialRoms__main-img relative">
                      <a href="">
                        <img
                          src="/images/Accomodation/room-thumb-three.jpg"
                          alt="room-thumb-one"
                          className="w-full h-auto"
                        />
                      </a>
                    </div>
                    <div className="SpecialRoms__main-title">
                      <div className="room__details absolute bottom-[5%] left-[-1%] mx-[15px] bg-white p-[11px] w-[94%] flex justify-between ">
                        <div className="room__details-left flex items-center">
                          <div className="room__details-title pr-[18px] border-r-[1px] border-[#e9e5df]">
                            <h5 className="font-Lora text-[16px] text-[#444444]">
                              Deluxe Room
                            </h5>
                          </div>
                          <div className="room__details-quantity pl-[18px]">
                            <p className="font-Lora text-[18px] text-[#131e2a] ">
                              $180{" "}
                              <span className="text-[#6c737a] text-[11px]">
                                / night
                              </span>
                            </p>
                          </div>
                        </div>
                        <div className="room__details-right flex items-center">
                          <a
                            href="btn"
                            className="px-[17px] py-[8px] border-[#777777] text-[#777777] font-Lora border-2 text-[14px] hover:bg-[#777777] hover:text-white"
                          >
                            Book
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Decent room */}
      <section className="other_decent_room ">
        <div className="max-w-[1170px] mx-auto">
          <div className="px-[15px]">
            <div className="other_decent_room__title text-center ">
              <h3 className="inline-block text-[30px] text-[#131e2a] leading-[25px] relative pb-[33px] mb-[55px] uppercase font-PlayfairDisplay after:bg-[url('/images/icon-section/nice-title.png')] after:bg-no-repeat after:absolute after:w-[103px] after:h-[50%] after:-bottom-[30px] nice-title font-normal">
                Other Decent room
              </h3>
            </div>
            <div className="other_decent_room__main ">
              <div className="hotel_booking_area mb-[30px]">
                <div className="min-h-[94px] px-[10px] py-[26px] bg-[#313a45] bg-repeat bg-scroll text-white">
                  <form action="">
                    <div className="grid grid-cols-6 gap-[15px]">
                      <div className="border-r-[1px] border-[#475362] mr-[7%] px-[15px] leading-6">
                        <h6 className="font-karla font-semibold text-[15px]">
                          Book Your
                        </h6>
                        <p className="font-karla font-bold text-[30px]">
                          Rooms
                        </p>
                      </div>
                      <div className="col-start-2 col-end-5">
                        <div className="group-select flex gap-[15px] justify-between">
                          <div className="group-select__room border-b-[1px] border-[#475362] w-full">
                            <select
                              name=""
                              id=""
                              className="w-full text-[13px] h-[37px] bg-[transparent] text-[#aab8ca] border-none outline-none uppercase"
                            >
                              <option value="1" selected>
                                Rooms
                              </option>
                              <option value="2">Room</option>
                              <option value="3">Room</option>
                              <option value="4">Room</option>
                            </select>
                          </div>
                          <div className="group-select__room border-b-[1px] border-[#475362] w-full">
                            <select
                              name=""
                              id=""
                              className="w-full text-[13px] h-[37px] bg-[transparent] text-[#aab8ca] border-none outline-none uppercase"
                            >
                              <option value="1" selected>
                                Rating
                              </option>
                              <option value="2">One Start</option>
                              <option value="3">Two Start</option>
                              <option value="4">Three Start</option>
                            </select>
                          </div>
                          <div className="group-select__room border-b-[1px] border-[#475362] w-full">
                            <select
                              name=""
                              id=""
                              className="w-full text-[13px] h-[37px] bg-[transparent] text-[#aab8ca] border-none outline-none uppercase"
                            >
                              <option value="1" selected>
                                Rooms
                              </option>
                              <option value="2">Room</option>
                              <option value="3">Room</option>
                              <option value="4">Room</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <div className="uppercase">
                          <span>Price: </span>
                          <label htmlFor=""> range:</label>
                          <div className="range flex justify-between gap-1">
                            <span>50$</span>
                            <input
                              type="range"
                              min={0}
                              max={1000}
                              value={200}
                              width={53}
                            />
                            <span>1000$</span>
                          </div>
                        </div>
                      </div>
                      <div className="inline-flex items-center justify-end px-[15px]">
                        <a
                          href=""
                          className="btn bg-[#fe5d5d] font-semibold text-[#fff] font-Lora text-[14px] uppercase px-[22px] py-[9px] hover:bg-white hover:text-[#fe5d5d]"
                        >
                          Fitler
                        </a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <div className="accomodation_room">
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
                            <h5 className="font-[18px] leading-5">
                              Deluxe Room
                            </h5>
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
                            <h5 className="font-[18px] leading-5">
                              Deluxe Room
                            </h5>
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
                            <h5 className="font-[18px] leading-5">
                              Deluxe Room
                            </h5>
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
                            <h5 className="font-[18px] leading-5">
                              Deluxe Room
                            </h5>
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
                            <h5 className="font-[18px] leading-5">
                              Deluxe Room
                            </h5>
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
                            <h5 className="font-[18px] leading-5">
                              Deluxe Room
                            </h5>
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
                            <h5 className="font-[18px] leading-5">
                              Deluxe Room
                            </h5>
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
                            <h5 className="font-[18px] leading-5">
                              Deluxe Room
                            </h5>
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

              <div className="other_decent_room_pagination ">
                <nav className="text-center mt-[65px] mb-[75px]">
                  <ul className="pagination flex justify-center items-center gap-6">
                    <li><a className="pagination__link" href=""><IoIosArrowBack className="mx-[3px] my-[9px] inline-block"/>prev</a></li>
                    <li><a className="pagination__link pagiantion__link--active" href="">1</a></li>
                    <li><a className="pagination__link" href="">2</a></li>
                    <li><a className="pagination__link" href="">3</a></li>
                    <li><a className="pagination__link" href="">4</a></li>
                    <li><a className="pagination__link" href="">5</a></li>
                    <li>...</li>
                    <li><a className="pagination__link" href=""> next <IoIosArrowForward className="mx-[3px] my-[9px] inline-block"/></a></li>
                  </ul>

                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AccomodationPage;
