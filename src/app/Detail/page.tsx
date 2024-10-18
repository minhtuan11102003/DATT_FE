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
        <div className="container flex">
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
                  <div className="slide-container">
                    <div className="slider-show relative">
                      <div className="slides ">
                        <ul className="overflow-hidden w-[848px] h-[471px] flex relative list-none">
                          <li className="">
                            {/* Slider chính */}
                            <img
                              className="w-full max-w-full h-auto object-cover"
                              src="/images/Detail/Deluxe_Room/img1.jpg"
                              alt=""
                            />
                          </li>
                        </ul>
                      </div>
                      <div className="btn-active w-full absolute top-[50%] translate-y-[-50%] flex justify-between ">
                        <span className="btn-next pl-5 text-[32px] opacity-50 text-[#fff] cusor-pointer"><IoIosArrowDropleft /></span>
                        <span className="btn-prev pr-5 text-[32px] opacity-50 text-[#fff]cusor-pointer"><IoIosArrowDropright /></span>
                      </div>
                    </div>
                    <div className="slider-thumnail mt-[5px]">
                      <ul className="grid grid-cols-6 gap-6 w-[848px]">
                        <li
                          className="w-full h-full object-cover hover:cursor-pointer hover:opacity-50 active"
                          // onclick="switchImage(this)"
                        >
                          <img
                            className="max-w-full h-auto hover:rounded"
                            src="/images/Detail/Deluxe_Room/img2.jpg"
                            alt=""
                          />
                        </li>
                        <li
                          className="w-full h-full object-cover hover:cursor-pointer hover:opacity-50 active"
                          // onclick="switchImage(this)"
                        >
                          <img
                            className="max-w-full h-auto hover:rounded"
                            src="/images/Detail/Deluxe_Room/img2.jpg"
                            alt=""
                          />
                        </li>
                        <li
                          className="w-full h-full object-cover hover:cursor-pointer hover:opacity-50 active"
                          // onclick="switchImage(this)"
                        >
                          <img
                            className="max-w-full h-auto hover:rounded"
                            src="/images/Detail/Deluxe_Room/img2.jpg"
                            alt=""
                          />
                        </li>
                        <li
                          className="w-full h-full object-cover hover:cursor-pointer hover:opacity-50 active"
                          // onclick="switchImage(this)"
                        >
                          <img
                            className="max-w-full h-auto hover:rounded"
                            src="/images/Detail/Deluxe_Room/img2.jpg"
                            alt=""
                          />
                        </li>
                        <li 
                          className="w-full h-full object-cover hover:cursor-pointer hover:opacity-50 active"
                          // onclick="switchImage(this)"
                        >
                          <img
                            className="max-w-full h-auto hover:rounded"
                            src="/images/Detail/Deluxe_Room/img2.jpg"
                            alt=""
                          />
                        </li>
                        

                        <li
                          className="w-full h-full object-cover hover:cursor-pointer hover:opacity-50 active"
                          // onclick="switchImage(this)"
                        >
                          <img
                            className="max-w-full h-auto hover:rounded"
                            src="/images/Detail/Deluxe_Room/img2.jpg"
                            alt=""
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="top-[65px] bottom-[40px]">
                    <div>
                      <h5>Room Fecilities</h5>
                    </div>
                    <div className="grid grid-cols-4">
                      <div className="col-1">
                        <ul>
                          <li></li>
                          <li></li>
                        </ul>
                      </div>
                      <div className="col-2">
                        <ul>
                          <li></li>
                          <li></li>
                        </ul>
                      </div>
                      <div className="col-3">
                        <ul>
                          <li></li>
                          <li></li>
                        </ul>
                      </div>
                      <div className="col-4">
                        <ul>
                          <li></li>
                          <li></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div>
                    <p>
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
            <aside>fwefwefwefwefwe</aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AccomodationPage;
