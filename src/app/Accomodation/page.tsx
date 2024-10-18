import React from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
const AccomodationPage = () => {
  return (
    <div className="accomodation">
      {/* Accomodation */}
      <section className="accomodation__breadcrumb mb-[80px]">
        <div className="accomodation__banner bg-[url('/images/banner-item/accomodation-breadcrumb-one.jpg')] bg-no-repeat relative bg-center min-h-[333px] bg-cover text-center">
          <div className="accomodation__banner-title pt-[170px] pb-[58px]">
            <h2 className="uppercase text-[#fff] font-normal text-[35px] leading-[25px] pb-[40px] font-PlayfairDisplay relative after:absolute after:bg-[url('/images/icon-section/nice-title-breadcrumb.png')] bg-no-repeat after:bottom-[-30px] after:h-[50%] after:w-[103px] nice-title after:bg-no-repeat drop-shadow-[0_20px_20px_rgb(0,0,0)] md:text-[22px] lg:text-[44px] md:text-center">
              Accomodation
            </h2>
          </div>
          <div className="absolute top-0 md:left-0 w-full left-[-11%]">
            <div className="accomodation__banner-img container relative xl:w-[1170px] lg:w-[992px] md:w-[760px] w-[300px]">
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

      {/* Special__Rooms */}
      <section className="SpecialRooms pt-[5px] mb-[90px]">
        <div className="container w-[300px] md:w-[750px] sm:w-[450px] lg:w-[970px] xl:w-[1170px]">
          <div className="">
            <div className="SpecialRooms__title text-center">
              <h3 className="inline-block lg:text-[30px] text-[30px] text-[#131e2a] leading-[25px] relative pb-[33px] mb-[55px] uppercase font-PlayfairDisplay after:bg-[url('/images/icon-section/nice-title.png')] after:bg-no-repeat after:absolute after:w-[103px] after:h-[50%] after:-bottom-[30%] nice-title font-normal md:text-[20px]">
                Special Rooms
              </h3>
            </div>
            <div className="SpecialRooms__main">
              <div className="grid grid-cols-3 grid-rows-2 gap-[35px] md:gap-[30px]">
                <div className="md:row-span-2 md:col-span-2 col-span-3">
                  <div className="relative md:mb-0">
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
                      <div className="room__details absolute bottom-[5%] left-[1%] mx-[15px] bg-white md:p-[30px] w-[94%] flex justify-between  ml-[5px] mr-[5px] p-[5px]">
                        <div className="room__details-left flex items-center mt-[10px]">
                          <div className="room__details-title pr-[3px] xl:pr-[18px] border-r-[1px] border-[#e9e5df]">
                            <h5 className="font-Lora text-[11px] md:text-[18px] text-[#444444] uppercase xl:text-[21px]">
                              Deluxe Room
                            </h5>
                          </div>
                          <div className="room__details-quantity md:pl-[18px]">
                            <p className="font-Lora text-[8px] pl-[3px] md:text-[18px] text-[#131e2a]">
                              $180{" "}
                              <span className="text-[#6c737a] text-[11px]">
                                / night
                              </span>
                            </p>
                          </div>
                        </div>
                        <div className="room__details-right">
                          <a
                            href="#"
                            className="md:px-[9px] md:py-[8px] p-[5px] border-[#777777] text-[#777777] text-[10px] md:text-[11px] font-Lora border-2 hover:bg-[#777777] hover:text-white md:inline-block select-none xl:text-[14px] xl:px-[17px] xl:py-[8px]"
                          >
                            Book
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-1  col-span-3">
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
                      <div className="room__details absolute bottom-[5%] left-[1%] md:left-[0.5%] md:p-[5px] xl:p-[11px] xl:left-[-1%] bg-white w-[94%] flex justify-between ml-[5px] mx-[5px] md:mx-[15px]">
                        <div className="room__details-left flex items-center mt-[10px] md:mt-0">
                          <div className="room__details-title border-r-[1px] border-[#e9e5df]">
                            <h5 className="font-Lora text-[11px] xl:pr-[18px] xl:text-[16px] pr-[3px] md:text-[11px] text-[#444444] uppercase">
                              Deluxe Room
                            </h5>
                          </div>
                          <div className="room__details-quantity">
                            <p className="font-Lora text-[8px] pl-[3px] md:text-[9px] text-[#131e2a] xl:text-[16px] leading-[20px]">
                              $180
                              <span className="text-[#6c737a] text-[11px]">
                                /night
                              </span>
                            </p>
                          </div>
                        </div>
                        <div className="room__details-right">
                          <a
                            href="#"
                            className="md:p-[9px] p-[5px] border-[#777777] text-[#777777] text-[10px] md:text-[11px] font-Lora border-2 hover:bg-[#777777] hover:text-white select-none md:inline-block xl:text-[14px] xl:px-[17px] xl:py-[8px]"
                          >
                            Book
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-1  col-span-3 mb-[35px] md:mb-0">
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
                      <div className="room__details absolute bottom-[5%] left-[1%] md:left-[0.5%] md:p-[5px] bg-white xl:p-[11px] xl:left-[-1%] w-[94%] flex justify-between ml-[5px] mx-[5px] md:mx-[15px]">
                        <div className="room__details-left flex items-center mt-[10px] md:mt-0">
                          <div className="room__details-title border-r-[1px] border-[#e9e5df]">
                            <h5 className="font-Lora text-[11px] pr-[3px] xl:pr-[18px] xl:text-[16px] md:text-[11px] text-[#444444] uppercase">
                              Deluxe Room
                            </h5>
                          </div>
                          <div className="room__details-quantity">
                            <p className="font-Lora text-[8px] pl-[3px] xl:text-[16px] md:text-[9px] text-[#131e2a] leading-[20px]">
                              $180
                              <span className="text-[#6c737a] text-[11px]">
                                /night
                              </span>
                            </p>
                          </div>
                        </div>
                        <div className="room__details-right">
                          <a
                            href="#"
                            className="md:p-[9px] p-[5px] border-[#777777] text-[#777777] text-[10px] md:text-[11px] font-Lora border-2 hover:bg-[#777777] hover:text-white select-none md:inline-block xl:text-[14px] xl:px-[17px] xl:py-[8px]"
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
        <div className="container w-[300px] md:w-[750px] sm:w-[450px] lg:w-[970px] xl:w-[1170px]">
          <div className="">
            <div className="other_decent_room__title text-center">
              <h3 className="inline-block text-[30px] text-[#131e2a] leading-[25px] relative pb-[33px] mb-[55px] uppercase font-PlayfairDisplay after:bg-[url('/images/icon-section/nice-title.png')] after:bg-no-repeat after:absolute after:w-[103px] after:h-[50%] after:-bottom-[30%] nice-title font-normal md:text-[20px] lg:text-[30px]">
                Other Decent room
              </h3>
            </div>
            <div className="other_decent_room__main ">
              <div className="hotel_booking_area mb-[30px]">
                <div className="min-h-[94px] px-[10px] py-[26px] md:px-0 xl:px-[10px] bg-[#313a45] bg-repeat bg-scroll text-white">
                  <form action="">
                    <div className="grid md:grid-cols-6 md:gap-[15px]">
                      <div className="px-[15px] leading-6">
                        <div className="mr-[7%] border-r-[1px] border-[#475362]">
                          <h6 className="font-karla font-semibold text-[15px] leading-[18px] md:text-[13px] lg:text-[15px]">
                            Book Your
                          </h6>
                          <p className="font-karla font-bold text-[30px] leading-[25px] md:text-[20px] lg:text-[30px]">
                            Rooms
                          </p>
                        </div>
                      </div>
                      <div className="md:col-start-2 md:col-end-5 px-[15px]">
                        <div className="group-select md:flex md:gap-[15px] md:justify-between">
                          <div className="group-select__room border-b-[1px] border-[#475362] w-full">
                            <select
                              name=""
                              id=""
                              className="w-full text-[13px] h-[37px] bg-[transparent] text-[#aab8ca] border-none outline-none uppercase p-0 lg:text-[11px] xl:text-[13px]"
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
                              className="w-full text-[13px] h-[37px] bg-[transparent] text-[#aab8ca] border-none outline-none uppercase lg:text-[11px] xl:text-[13px]"
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
                              className="w-full text-[13px] h-[37px] bg-[transparent] text-[#aab8ca] border-none outline-none uppercase lg:text-[11px] xl:text-[13px]"
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
                      <div className="px-[15px] uppercase">
                        <span className="md:text-[10px] text-[13px] lg:text-[13px] text-[#aab8ca]">
                          Price:{" "}
                        </span>
                        <label
                          className="md:text-[10px] text-[13px] lg:text-[13px] text-[#aab8ca]"
                          htmlFor=""
                        >
                          {" "}
                          range:
                        </label>
                        <div className="range flex justify-between gap-1 md:min-w-[100px]">
                          <span className="md:text-[10px] text-[13px] lg:text-[13px] text-[#aab8ca] md:inline-block">
                            50$
                          </span>
                         
                            <input
                              className="md:w-[40%] md:mx-[3px] inline-block w-[53%] xl:w-[53%] ml-[-15%]"
                              type="range"
                              min={0}
                              max={1000}
                              value={200}
                              width={40}
                            />
                          
                          <span className="md:text-[10px] text-[13px] text-[#aab8ca] md:inline-block lg:text-[13px]">
                            5000$
                          </span>
                        </div>
                      </div>
                      <div className="inline-flex items-center md:justify-end px-[15px]">
                        <a
                          href=""
                          className="btn bg-[#fe5d5d] font-semibold text-[#fff] font-Lora text-[14px] uppercase px-[22px] py-[9px] hover:bg-white w-full hover:text-[#fe5d5d] text-center md:py-[8px] md:px-[16px] md:font-semibold lg:py-[9px] lg:px-[22px] xl:w-auto"
                        >
                          Fitler
                        </a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <div className="accomodation_room">
                <div className="md:grid md:grid-cols-4 gap-8">
                  <div className="col-1">
                    <div className="overflow-hidden pb-[30px] sm:text-center">
                      <figure className="figure-hover relative sm:text-center sm:inline-block ">
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
                            <h6 className="text-[#424c55] text-[18px] font-Lora md:text-[14px] md:leading-[18px] lg:text-[18px]">
                              Deluxe Room
                            </h6>
                            <p className="my-[15px] text-[18px] font-Lora text-[#666666] md:text-[13px] lg:text-[18px]">
                              $200/{" "}
                              <span className="text-[11px] text-[#666666]">
                                night
                              </span>
                            </p>
                          </div>
                          <div className="right">
                            <a className="cursor-pointer border-[#63c2ea] border-2 text-[#63c2ea] py-[8px] px-[17px] font-normal btn-welcome text-[14px] md:text-[13px] md:px-[14px] md:py-[7px] xl:py-[8px] xl:px-[17px] inline-block align-middle">
                              Book
                            </a>
                          </div>
                        </div>
                        <div className="bounch-hover p-[13px] bg-[#f7c411] hidden bg-repeat h-full w-full text-left top-0 left-0 bottom-0 right-0 animate-bounceInDown animate-mode absolute duration-700 sm:text-center md:text-left ">
                          <div className="border-[1px] border-[#475362] xl:p-[22px] md:p-[13px]">
                            <h5 className="text-[18px] md:text-[12px] xl:text-[18px] text-[#000] font-Lora leading-5 font-normal">
                              Deluxe Room
                            </h5>
                            <p className="text-[15px] xl:text-[15px] my-[15px] md:text-[9px] md:my-[6px] xl:my-[15px] text-[#444] font-medium">
                              Semper ac dolor vitae accumsan. interdum hendrerit
                              lacinia.
                            </p>
                            <p className="text-[15px] xl:text-[15px] mb-[10px] md:text-[9px] md:my-[6px] text-[#444] xl:my-[15px] font-medium">
                              Phasellus accumsan urna vitae molestie interdum.
                            </p>
                            <div className="flex justify-between">
                              <div className="left">
                                <p className="my-[15px] md:text-[11px] mt-[18px] text-[15px] font-Lora text-[#444] sm:text-[18px] xl:text-[18px] md:mb-0">
                                  $200/{" "}
                                  <span className="text-[11px] xl:text-[11px] md:text-[9px] font-Lora text-[#444] ">
                                    night
                                  </span>
                                </p>
                              </div>
                              <div className="right flex items-end ">
                                <a className="block mb-[-23px] mr-[-23px] md:mr-[-13px] md:mb-[-5px] xl:mb-[-23px] xl:mr-[-23px] cursor-pointer border-t-[1px] border-l-[1px] text-[#444] md:text-[10px] py-[8px] px-[17px] font-normal font-Lora text-[14px] md:py-[7px] md:px-[14px] xl:text-[14px] xl:py-[8px] xl:px-[17px]  hover:bg-[#444] hover:text-[#fff] hover:border-none">
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
                    <div className="overflow-hidden pb-[30px] sm:text-center">
                      <figure className="figure-hover relative sm:text-center sm:inline-block">
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
                            <h6 className="text-[#424c55] text-[18px] font-Lora md:text-[14px] md:leading-[18px]">
                              Deluxe Room
                            </h6>
                            <p className="my-[15px] text-[18px] font-Lora text-[#666666] md:text-[13px]">
                              $200/{" "}
                              <span className="text-[11px] text-[#666666]">
                                night
                              </span>
                            </p>
                          </div>
                          <div className="right">
                            <a className="cursor-pointer border-[#63c2ea] border-2 text-[#63c2ea] py-[8px] px-[17px] font-normal btn-welcome text-[14px] md:text-[13px] md:px-[14px] md:py-[7px] inline-block align-middle">
                              Book
                            </a>
                          </div>
                        </div>
                        <div className="bounch-hover p-[13px] bg-[#f7c411] hidden bg-repeat h-full w-full text-left top-0 left-0 bottom-0 right-0 animate-bounceInDown animate-mode absolute duration-700 sm:text-center md:text-left">
                          <div className="border-[1px] border-[#475362] p-[22px] md:p-[13px]">
                            <h5 className="text-[18px] md:text-[12px] text-[#000] font-Lora leading-5 font-normal">
                              Deluxe Room
                            </h5>
                            <p className="text-[15px] my-[15px] md:text-[9px] md:my-[6px] text-[#444] font-medium">
                              Semper ac dolor vitae accumsan. interdum hendrerit
                              lacinia.
                            </p>
                            <p className="text-[15px] mb-[10px] md:text-[9px] md:my-[6px] text-[#444] font-medium">
                              Phasellus accumsan urna vitae molestie interdum.
                            </p>
                            <div className="flex justify-between">
                              <div className="left">
                                <p className="my-[15px] md:text-[11px] mt-[18px] text-[15px] font-Lora text-[#444] sm:text-[18px] md:mb-0">
                                  $200/{" "}
                                  <span className="text-[11px] md:text-[9px] font-Lora text-[#444] ">
                                    night
                                  </span>
                                </p>
                              </div>
                              <div className="right flex items-end ">
                                <a className="block mb-[-23px] mr-[-23px] md:mr-[-13px] md:mb-[-5px] cursor-pointer border-t-[1px] border-l-[1px] text-[#444] md:text-[10px] py-[8px] px-[17px] font-normal font-Lora text-[14px] md:py-[7px] md:px-[14px] hover:bg-[#444] hover:text-[#fff] hover:border-none">
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
                    <div className="overflow-hidden pb-[30px] sm:text-center">
                      <figure className="figure-hover relative sm:text-center sm:inline-block">
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
                            <h6 className="text-[#424c55] text-[18px] font-Lora md:text-[14px] md:leading-[18px]">
                              Deluxe Room
                            </h6>
                            <p className="my-[15px] text-[18px] font-Lora text-[#666666] md:text-[13px]">
                              $200/{" "}
                              <span className="text-[11px] text-[#666666]">
                                night
                              </span>
                            </p>
                          </div>
                          <div className="right">
                            <a className="cursor-pointer border-[#63c2ea] border-2 text-[#63c2ea] py-[8px] px-[17px] font-normal btn-welcome text-[14px] md:text-[13px] md:px-[14px] md:py-[7px] inline-block align-middle">
                              Book
                            </a>
                          </div>
                        </div>
                        <div className="bounch-hover p-[13px] bg-[#f7c411] hidden bg-repeat h-full w-full text-left top-0 left-0 bottom-0 right-0 animate-bounceInDown animate-mode absolute duration-700 sm:text-center md:text-left">
                          <div className="border-[1px] border-[#475362] p-[22px] md:p-[13px]">
                            <h5 className="text-[18px] md:text-[12px] text-[#000] font-Lora leading-5 font-normal">
                              Deluxe Room
                            </h5>
                            <p className="text-[15px] my-[15px] md:text-[9px] md:my-[6px] text-[#444] font-medium">
                              Semper ac dolor vitae accumsan. interdum hendrerit
                              lacinia.
                            </p>
                            <p className="text-[15px] mb-[10px] md:text-[9px] md:my-[6px] text-[#444] font-medium">
                              Phasellus accumsan urna vitae molestie interdum.
                            </p>
                            <div className="flex justify-between">
                              <div className="left">
                                <p className="my-[15px] md:text-[11px] mt-[18px] text-[15px] font-Lora text-[#444] sm:text-[18px] md:mb-0">
                                  $200/{" "}
                                  <span className="text-[11px] md:text-[9px] font-Lora text-[#444] ">
                                    night
                                  </span>
                                </p>
                              </div>
                              <div className="right flex items-end ">
                                <a className="block mb-[-23px] mr-[-23px] md:mr-[-13px] md:mb-[-5px] cursor-pointer border-t-[1px] border-l-[1px] text-[#444] md:text-[10px] py-[8px] px-[17px] font-normal font-Lora text-[14px] md:py-[7px] md:px-[14px] hover:bg-[#444] hover:text-[#fff] hover:border-none">
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
                    <div className="overflow-hidden pb-[30px] sm:text-center">
                      <figure className="figure-hover relative sm:text-center sm:inline-block">
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
                            <h6 className="text-[#424c55] text-[18px] font-Lora md:text-[14px] md:leading-[18px]">
                              Deluxe Room
                            </h6>
                            <p className="my-[15px] text-[18px] font-Lora text-[#666666] md:text-[13px]">
                              $200/{" "}
                              <span className="text-[11px] text-[#666666]">
                                night
                              </span>
                            </p>
                          </div>
                          <div className="right">
                            <a className="cursor-pointer border-[#63c2ea] border-2 text-[#63c2ea] py-[8px] px-[17px] font-normal btn-welcome text-[14px] md:text-[13px] md:px-[14px] md:py-[7px] inline-block align-middle">
                              Book
                            </a>
                          </div>
                        </div>
                        <div className="bounch-hover p-[13px] bg-[#f7c411] hidden bg-repeat h-full w-full text-left top-0 left-0 bottom-0 right-0 animate-bounceInDown animate-mode absolute duration-700 sm:text-center md:text-left">
                          <div className="border-[1px] border-[#475362] p-[22px] md:p-[13px]">
                            <h5 className="text-[18px] md:text-[12px] text-[#000] font-Lora leading-5 font-normal">
                              Deluxe Room
                            </h5>
                            <p className="text-[15px] my-[15px] md:text-[9px] md:my-[6px] text-[#444] font-medium">
                              Semper ac dolor vitae accumsan. interdum hendrerit
                              lacinia.
                            </p>
                            <p className="text-[15px] mb-[10px] md:text-[9px] md:my-[6px] text-[#444] font-medium">
                              Phasellus accumsan urna vitae molestie interdum.
                            </p>
                            <div className="flex justify-between">
                              <div className="left">
                                <p className="my-[15px] md:text-[11px] mt-[18px] text-[15px] font-Lora text-[#444] sm:text-[18px] md:mb-0">
                                  $200/{" "}
                                  <span className="text-[11px] md:text-[9px] font-Lora text-[#444] ">
                                    night
                                  </span>
                                </p>
                              </div>
                              <div className="right flex items-end ">
                                <a className="block mb-[-23px] mr-[-23px] md:mr-[-13px] md:mb-[-5px] cursor-pointer border-t-[1px] border-l-[1px] text-[#444] md:text-[10px] py-[8px] px-[17px] font-normal font-Lora text-[14px] md:py-[7px] md:px-[14px] hover:bg-[#444] hover:text-[#fff] hover:border-none">
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
                    <div className="overflow-hidden pb-[30px] sm:text-center">
                      <figure className="figure-hover relative sm:text-center sm:inline-block">
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
                            <h6 className="text-[#424c55] text-[18px] font-Lora md:text-[14px] md:leading-[18px]">
                              Deluxe Room
                            </h6>
                            <p className="my-[15px] text-[18px] font-Lora text-[#666666] md:text-[13px]">
                              $200/{" "}
                              <span className="text-[11px] text-[#666666]">
                                night
                              </span>
                            </p>
                          </div>
                          <div className="right">
                            <a className="cursor-pointer border-[#63c2ea] border-2 text-[#63c2ea] py-[8px] px-[17px] font-normal btn-welcome text-[14px] md:text-[13px] md:px-[14px] md:py-[7px] inline-block align-middle">
                              Book
                            </a>
                          </div>
                        </div>
                        <div className="bounch-hover p-[13px] bg-[#f7c411] hidden bg-repeat h-full w-full text-left top-0 left-0 bottom-0 right-0 animate-bounceInDown animate-mode absolute duration-700 sm:text-center md:text-left">
                          <div className="border-[1px] border-[#475362] p-[22px] md:p-[13px]">
                            <h5 className="text-[18px] md:text-[12px] text-[#000] font-Lora leading-5 font-normal">
                              Deluxe Room
                            </h5>
                            <p className="text-[15px] my-[15px] md:text-[9px] md:my-[6px] text-[#444] font-medium">
                              Semper ac dolor vitae accumsan. interdum hendrerit
                              lacinia.
                            </p>
                            <p className="text-[15px] mb-[10px] md:text-[9px] md:my-[6px] text-[#444] font-medium">
                              Phasellus accumsan urna vitae molestie interdum.
                            </p>
                            <div className="flex justify-between">
                              <div className="left">
                                <p className="my-[15px] md:text-[11px] mt-[18px] text-[15px] font-Lora text-[#444] sm:text-[18px] md:mb-0">
                                  $200/{" "}
                                  <span className="text-[11px] md:text-[9px] font-Lora text-[#444] ">
                                    night
                                  </span>
                                </p>
                              </div>
                              <div className="right flex items-end ">
                                <a className="block mb-[-23px] mr-[-23px] md:mr-[-13px] md:mb-[-5px] cursor-pointer border-t-[1px] border-l-[1px] text-[#444] md:text-[10px] py-[8px] px-[17px] font-normal font-Lora text-[14px] md:py-[7px] md:px-[14px] hover:bg-[#444] hover:text-[#fff] hover:border-none">
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
                    <div className="overflow-hidden pb-[30px] sm:text-center">
                      <figure className="figure-hover relative sm:text-center sm:inline-block">
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
                            <h6 className="text-[#424c55] text-[18px] font-Lora md:text-[14px] md:leading-[18px]">
                              Deluxe Room
                            </h6>
                            <p className="my-[15px] text-[18px] font-Lora text-[#666666] md:text-[13px]">
                              $200/{" "}
                              <span className="text-[11px] text-[#666666]">
                                night
                              </span>
                            </p>
                          </div>
                          <div className="right">
                            <a className="cursor-pointer border-[#63c2ea] border-2 text-[#63c2ea] py-[8px] px-[17px] font-normal btn-welcome text-[14px] md:text-[13px] md:px-[14px] md:py-[7px] inline-block align-middle">
                              Book
                            </a>
                          </div>
                        </div>
                        <div className="bounch-hover p-[13px] bg-[#f7c411] hidden bg-repeat h-full w-full text-left top-0 left-0 bottom-0 right-0 animate-bounceInDown animate-mode absolute duration-700 sm:text-center md:text-left">
                          <div className="border-[1px] border-[#475362] p-[22px] md:p-[13px]">
                            <h5 className="text-[18px] md:text-[12px] text-[#000] font-Lora leading-5 font-normal">
                              Deluxe Room
                            </h5>
                            <p className="text-[15px] my-[15px] md:text-[9px] md:my-[6px] text-[#444] font-medium">
                              Semper ac dolor vitae accumsan. interdum hendrerit
                              lacinia.
                            </p>
                            <p className="text-[15px] mb-[10px] md:text-[9px] md:my-[6px] text-[#444] font-medium">
                              Phasellus accumsan urna vitae molestie interdum.
                            </p>
                            <div className="flex justify-between">
                              <div className="left">
                                <p className="my-[15px] md:text-[11px] mt-[18px] text-[15px] font-Lora text-[#444] sm:text-[18px] md:mb-0">
                                  $200/{" "}
                                  <span className="text-[11px] md:text-[9px] font-Lora text-[#444] ">
                                    night
                                  </span>
                                </p>
                              </div>
                              <div className="right flex items-end ">
                                <a className="block mb-[-23px] mr-[-23px] md:mr-[-13px] md:mb-[-5px] cursor-pointer border-t-[1px] border-l-[1px] text-[#444] md:text-[10px] py-[8px] px-[17px] font-normal font-Lora text-[14px] md:py-[7px] md:px-[14px] hover:bg-[#444] hover:text-[#fff] hover:border-none">
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
                    <div className="overflow-hidden pb-[30px] sm:text-center">
                      <figure className="figure-hover relative sm:text-center sm:inline-block">
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
                            <h6 className="text-[#424c55] text-[18px] font-Lora md:text-[14px] md:leading-[18px]">
                              Deluxe Room
                            </h6>
                            <p className="my-[15px] text-[18px] font-Lora text-[#666666] md:text-[13px]">
                              $200/{" "}
                              <span className="text-[11px] text-[#666666]">
                                night
                              </span>
                            </p>
                          </div>
                          <div className="right">
                            <a className="cursor-pointer border-[#63c2ea] border-2 text-[#63c2ea] py-[8px] px-[17px] font-normal btn-welcome text-[14px] md:text-[13px] md:px-[14px] md:py-[7px] inline-block align-middle">
                              Book
                            </a>
                          </div>
                        </div>
                        <div className="bounch-hover p-[13px] bg-[#f7c411] hidden bg-repeat h-full w-full text-left top-0 left-0 bottom-0 right-0 animate-bounceInDown animate-mode absolute duration-700 sm:text-center md:text-left">
                          <div className="border-[1px] border-[#475362] p-[22px] md:p-[13px]">
                            <h5 className="text-[18px] md:text-[12px] text-[#000] font-Lora leading-5 font-normal">
                              Deluxe Room
                            </h5>
                            <p className="text-[15px] my-[15px] md:text-[9px] md:my-[6px] text-[#444] font-medium">
                              Semper ac dolor vitae accumsan. interdum hendrerit
                              lacinia.
                            </p>
                            <p className="text-[15px] mb-[10px] md:text-[9px] md:my-[6px] text-[#444] font-medium">
                              Phasellus accumsan urna vitae molestie interdum.
                            </p>
                            <div className="flex justify-between">
                              <div className="left">
                                <p className="my-[15px] md:text-[11px] mt-[18px] text-[15px] font-Lora text-[#444] sm:text-[18px] md:mb-0">
                                  $200/{" "}
                                  <span className="text-[11px] md:text-[9px] font-Lora text-[#444] ">
                                    night
                                  </span>
                                </p>
                              </div>
                              <div className="right flex items-end ">
                                <a className="block mb-[-23px] mr-[-23px] md:mr-[-13px] md:mb-[-5px] cursor-pointer border-t-[1px] border-l-[1px] text-[#444] md:text-[10px] py-[8px] px-[17px] font-normal font-Lora text-[14px] md:py-[7px] md:px-[14px] hover:bg-[#444] hover:text-[#fff] hover:border-none">
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
                    <div className="overflow-hidden pb-[30px] sm:text-center">
                      <figure className="figure-hover relative sm:text-center sm:inline-block">
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
                            <h6 className="text-[#424c55] text-[18px] font-Lora md:text-[14px] md:leading-[18px]">
                              Deluxe Room
                            </h6>
                            <p className="my-[15px] text-[18px] font-Lora text-[#666666] md:text-[13px]">
                              $200/{" "}
                              <span className="text-[11px] text-[#666666]">
                                night
                              </span>
                            </p>
                          </div>
                          <div className="right">
                            <a className="cursor-pointer border-[#63c2ea] border-2 text-[#63c2ea] py-[8px] px-[17px] font-normal btn-welcome text-[14px] md:text-[13px] md:px-[14px] md:py-[7px] inline-block align-middle">
                              Book
                            </a>
                          </div>
                        </div>
                        <div className="bounch-hover p-[13px] bg-[#f7c411] hidden bg-repeat h-full w-full text-left top-0 left-0 bottom-0 right-0 animate-bounceInDown animate-mode absolute duration-700 sm:text-center md:text-left">
                          <div className="border-[1px] border-[#475362] p-[22px] md:p-[13px]">
                            <h5 className="text-[18px] md:text-[12px] text-[#000] font-Lora leading-5 font-normal">
                              Deluxe Room
                            </h5>
                            <p className="text-[15px] my-[15px] md:text-[9px] md:my-[6px] text-[#444] font-medium">
                              Semper ac dolor vitae accumsan. interdum hendrerit
                              lacinia.
                            </p>
                            <p className="text-[15px] mb-[10px] md:text-[9px] md:my-[6px] text-[#444] font-medium">
                              Phasellus accumsan urna vitae molestie interdum.
                            </p>
                            <div className="flex justify-between">
                              <div className="left">
                                <p className="my-[15px] md:text-[11px] mt-[18px] text-[15px] font-Lora text-[#444] sm:text-[18px] md:mb-0">
                                  $200/{" "}
                                  <span className="text-[11px] md:text-[9px] font-Lora text-[#444] ">
                                    night
                                  </span>
                                </p>
                              </div>
                              <div className="right flex items-end ">
                                <a className="block mb-[-23px] mr-[-23px] md:mr-[-13px] md:mb-[-5px] cursor-pointer border-t-[1px] border-l-[1px] text-[#444] md:text-[10px] py-[8px] px-[17px] font-normal font-Lora text-[14px] md:py-[7px] md:px-[14px] hover:bg-[#444] hover:text-[#fff] hover:border-none">
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

              <div className="other_decent_room_pagination">
                <nav className="text-center mt-[65px] mb-[75px] w-[95%] mx-auto">
                  <ul className="pagination flex justify-center items-center">
                    <li>
                      <a
                        className="pagination__link text-[12px] font-bold p-[10px] md:text-[16px] uppercase"
                        href=""
                      >
                        <IoIosArrowBack className="my-[3px] mx-[9px] inline-block font-bold" />
                        prev
                      </a>
                    </li>
                    <li>
                      <a
                        className="pagination__link  pagiantion__link--active text-[10px] p-[10px] md:text-[16px] uppercase"
                        href=""
                      >
                        1
                      </a>
                    </li>
                    <li>
                      <a
                        className="pagination__link text-[12px] font-bold p-[10px] md:text-[16px] uppercase"
                        href=""
                      >
                        2
                      </a>
                    </li>
                    <li>
                      <a
                        className="pagination__link text-[12px] font-bold p-[10px] md:text-[16px] uppercase"
                        href=""
                      >
                        3
                      </a>
                    </li>
                    <li>
                      <a
                        className="pagination__link text-[12px] font-bold p-[10px] md:text-[16px] uppercase"
                        href=""
                      >
                        4
                      </a>
                    </li>
                    <li>
                      <a
                        className="pagination__link text-[12px] font-bold p-[10px] md:text-[16px] uppercase"
                        href=""
                      >
                        5
                      </a>
                    </li>
                    <li>
                      <a
                        className="pagination__link text-[12px] p-[10px] font-bold md:text-[16px] uppercase"
                        href=""
                      >
                        {" "}
                        next{" "}
                        <IoIosArrowForward className="my-[3px] mx-[9px] inline-block" />
                      </a>
                    </li>
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
