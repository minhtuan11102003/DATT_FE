import React from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import CardProducts from "../_component_section/card_products";
import ListProduct from "../_component_section/showProduct";
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

                <div className="md:col-span-1 col-span-3">

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

                      <div className="room__details absolute bottom-[5%] p-[11px] left-[1%] md:left-[0.5%] md:p-[5px] xl:p-[11px] xl:left-[-1%] bg-white w-[94%] flex justify-between ml-[5px] mx-[5px] md:mx-[15px]">
                        <div className="room__details-left flex items-center  md:mt-0 mt-[4px]">

                          <div className="room__details-title border-r-[1px] border-[#e9e5df]">
                            <h5 className="font-Lora text-[11px] xl:pr-[18px] xl:text-[16px] pr-[3px] md:text-[11px] text-[#444444] uppercase">
                              Deluxe Room
                            </h5>
                          </div>
                          <div className="room__details-quantity">

                            <p className="font-Lora text-[16px] pl-[3px] md:text-[9px] text-[#131e2a] xl:text-[16px] leading-[20px]">

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

                      <div className="room__details absolute bottom-[5%] p-[11px] left-[1%] md:left-[0.5%] md:p-[5px] xl:p-[11px] xl:left-[-1%] bg-white w-[94%] flex justify-between ml-[5px] mx-[5px] md:mx-[15px]">
                        <div className="room__details-left flex items-center  md:mt-0 mt-[4px]">
                          <div className="room__details-title border-r-[1px] border-[#e9e5df]">
                            <h5 className="font-Lora text-[11px] xl:pr-[18px] xl:text-[16px] pr-[3px] md:text-[11px] text-[#444444] uppercase">

                              Deluxe Room
                            </h5>
                          </div>
                          <div className="room__details-quantity">

                            <p className="font-Lora text-[16px] pl-[3px] md:text-[9px] text-[#131e2a] xl:text-[16px] leading-[20px]">

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

                      <div className="px-[15px] uppercase leading-[23px]">

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

              {/* <div className="accomodation_room listProduct">
                <div className="md:grid md:grid-cols-4 gap-8">
                  <CardProducts/>
                </div>
              </div> */}

              <ListProduct />
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
          {/* <div className="other_decent_room_pagination">
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
          </div> */}
        </div>
      </section >
    </div>
  );
};

export default AccomodationPage;
