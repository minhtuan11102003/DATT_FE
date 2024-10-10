import React from "react";

const Welcome_hotel = () => {
  return (
    <div className="container w-[300px] sm:w-[450px] md:w-[750px] lg:w-[970px] xl:w-[1170px]">
      <div className="h-[400px] text-center">
        <div>
          <h3 className="inline-block text-[30px] text-[#131e2a] leading-[25px] relative pb-[33px] mb-[55px] uppercase font-PlayfairDisplay after:bg-[url('/images/icon-section/nice-title.png')] after:bg-no-repeat after:absolute after:w-[103px] after:h-[50%] after:bottom-[-30%] nice-title md:text-[20px] lg:text-[30px]">
            Welcome To Hotel
          </h3>
        </div>
        <div className="pb-[43px] px-[20%]">
          <p className="text-[#666666] text-[12px] mb-[15px] md:text-[16px]">
            Semper ac dolor vitae accumsan. Cras interdum hendrerit lacinia.
            Phasellus accumsan urna vitae molestie interdum. Nam sed placerat
            libero, non eleifend dolor.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-[30px] ">
          <div className="col-1">
            <div className="overflow-hidden text-center">
              <figure className="figure-hover relative  sm:inline-block ">
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
                    <h6 className="text-[#424c55] text-[18px] leading-[18px] md:text-[14px] font-Lora lg:text-[18px]">
                      Deluxe Room
                    </h6>
                    <p className="my-[15px] text-[18px] md:text-[13px] font-Lora text-[#666666] lg:text-[18px]">
                      $200/{" "}
                      <span className="text-[11px] text-[#666666]">night</span>
                    </p>
                  </div>
                  <div className="right">
                    <a className="inline-block cursor-pointer border-[#63c2ea] border-2 text-[#63c2ea] py-[8px] px-[17px] md:text-[13px] md:py-[7px] md:px-[14px] leading-[20px] btn-welcome lg:text-[14px] lg:py-[8px] lg:px-[17px]">
                      Book
                    </a>
                  </div>
                </div>
                <div className="bounch-hover p-[13px] bg-[#f7c411] hidden bg-repeat h-full w-full text-left top-0 left-0 bottom-0 right-0 animate-bounceInDown animate-mode absolute duration-700 sm:text-center md:text-left">
                  <div className="border-[1px] md:h-[100%] border-[#475362] p-[22px] md:p-[13px] lg:p-[22px]">
                    <h5 className="text-[18px] leading-5 text-[#000] font-Lora md:text-[12px] lg:text-[16px] xl:text-[18px]">Deluxe Room</h5>
                    <p className="text-[15px] my-[15px] text-[#444] md:text-[9px] md:my-[6px] lg:text-[13px] lg:my-[5px] xl:text-[15px] xl:my-[15px]">
                      Semper ac dolor vitae accumsan. interdum hendrerit
                      lacinia.
                    </p>
                    <p className="text-[15px] mb-[15px] text-[#444] md:text-[9px] md:my-[6px] lg:text-[13px] lg:my-[5px] xl:text-[15px] xl:my-[15px]">
                      Phasellus accumsan urna vitae molestie interdum.
                    </p>
                    <div className="flex justify-between">
                      <div className="left">
                        <p className=" mt-[18px] text-[18px] md:text-[11px] font-Lora text-[#444] lg:text-[15px] xl:text-[18px]">
                          $200/{" "}
                          <span className="text-[11px] text-[#444] md:text-[9px] xl:[11px]">
                            night
                          </span>
                        </p>
                      </div>
                      <div className="right flex items-end">
                        <a className="align-middle block mb-[-23px] mr-[-23px] cursor-pointer border-t-[1px] border-l-[1px] text-[#444] py-[8px] px-[17px] leading-[20px] md:text-[10px] md:mb-[-13px] md:mr-[-14px] md:py-[7px] md:px-[14px] md:leading-[14px] font-Lora hover:text-[#fff] hover:bg-[#000] hover:border-none lg:text-[14px] lg:py-[8px] lg:px-[17px] lg:mr-[-23px] lg:leading-[20px] xl:mb-[-19px]">
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
            <div className="overflow-hidden text-center">
              <figure className="figure-hover relative sm:inline-block ">
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
                    <h6 className="text-[#424c55] text-[18px] leading-[18px] md:text-[14px] font-Lora lg:text-[18px]">
                      Deluxe Room
                    </h6>
                    <p className="my-[15px] text-[18px] md:text-[13px] font-Lora text-[#666666] lg:text-[18px]">
                      $200/{" "}
                      <span className="text-[11px] text-[#666666]">night</span>
                    </p>
                  </div>
                  <div className="right">
                    <a className="inline-block cursor-pointer border-[#63c2ea] border-2 text-[#63c2ea] py-[8px] px-[17px] md:text-[13px] md:py-[7px] md:px-[14px] leading-[20px] btn-welcome lg:text-[14px] lg:py-[8px] lg:px-[17px]">
                      Book
                    </a>
                  </div>
                </div>
                <div className="bounch-hover p-[13px] bg-[#f7c411] hidden bg-repeat h-full w-full text-left top-0 left-0 bottom-0 right-0 animate-bounceInUp animate-mode absolute duration-700 sm:text-center md:text-left">
                  <div className="border-[1px] md:h-[100%] border-[#475362] p-[22px] md:p-[13px] lg:p-[22px]">
                    <h5 className="text-[18px] leading-5 text-[#000] font-Lora md:text-[12px] lg:text-[16px] xl:text-[18px]">Deluxe Room</h5>
                    <p className="text-[15px] my-[15px] text-[#444] md:text-[9px] md:my-[6px] lg:text-[13px] lg:my-[5px] xl:text-[15px] xl:my-[15px]">
                      Semper ac dolor vitae accumsan. interdum hendrerit
                      lacinia.
                    </p>
                    <p className="text-[15px] mb-[15px] text-[#444] md:text-[9px] md:my-[6px] lg:text-[13px] lg:my-[5px] xl:text-[15px] xl:my-[15px]">
                      Phasellus accumsan urna vitae molestie interdum.
                    </p>
                    <div className="flex justify-between">
                      <div className="left">
                        <p className=" mt-[18px] text-[18px] md:text-[11px] font-Lora text-[#444] lg:text-[15px] xl:text-[18px]">
                          $200/{" "}
                          <span className="text-[11px] text-[#444] md:text-[9px] xl:[11px]">
                            night
                          </span>
                        </p>
                      </div>
                      <div className="right flex items-end">
                        <a className="align-middle block mb-[-23px] mr-[-23px] cursor-pointer border-t-[1px] border-l-[1px] text-[#444] py-[8px] px-[17px] leading-[20px] md:text-[10px] md:mb-[-13px] md:mr-[-14px] md:py-[7px] md:px-[14px] md:leading-[14px] font-Lora hover:text-[#fff] hover:bg-[#000] hover:border-none lg:text-[14px] lg:py-[8px] lg:px-[17px] lg:mr-[-23px] lg:leading-[20px] xl:mb-[-19px]">
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
            <div className="overflow-hidden text-center">
              <figure className="figure-hover relative sm:inline-block ">
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
                    <h6 className="text-[#424c55] text-[18px] leading-[18px] md:text-[14px] font-Lora lg:text-[18px]">
                      Deluxe Room
                    </h6>
                    <p className="my-[15px] text-[18px] md:text-[13px] font-Lora text-[#666666] lg:text-[18px]">
                      $200/{" "}
                      <span className="text-[11px] text-[#666666]">night</span>
                    </p>
                  </div>
                  <div className="right">
                    <a className="inline-block cursor-pointer border-[#63c2ea] border-2 text-[#63c2ea] py-[8px] px-[17px] md:text-[13px] md:py-[7px] md:px-[14px] leading-[20px] btn-welcome lg:text-[14px] lg:py-[8px] lg:px-[17px]">
                      Book
                    </a>
                  </div>
                </div>
                <div className="bounch-hover p-[13px] bg-[#f7c411] hidden bg-repeat h-full w-full text-left top-0 left-0 bottom-0 right-0 animate-bounceInDown animate-mode absolute duration-700 sm:text-center md:text-left">
                  <div className="border-[1px] md:h-[100%] border-[#475362] p-[22px] md:p-[13px] lg:p-[22px]">
                    <h5 className="text-[18px] leading-5 text-[#000] font-Lora md:text-[12px] lg:text-[16px] xl:text-[18px]">Deluxe Room</h5>
                    <p className="text-[15px] my-[15px] text-[#444] md:text-[9px] md:my-[6px] lg:text-[13px] lg:my-[5px] xl:text-[15px] xl:my-[15px]">
                      Semper ac dolor vitae accumsan. interdum hendrerit
                      lacinia.
                    </p>
                    <p className="text-[15px] mb-[15px] text-[#444] md:text-[9px] md:my-[6px] lg:text-[13px] lg:my-[5px] xl:text-[15px] xl:my-[15px]">
                      Phasellus accumsan urna vitae molestie interdum.
                    </p>
                    <div className="flex justify-between">
                      <div className="left">
                        <p className=" mt-[18px] text-[18px] md:text-[11px] font-Lora text-[#444] lg:text-[15px] xl:text-[18px]">
                          $200/{" "}
                          <span className="text-[11px] text-[#444] md:text-[9px] xl:[11px]">
                            night
                          </span>
                        </p>
                      </div>
                      <div className="right flex items-end">
                        <a className="align-middle block mb-[-23px] mr-[-23px] cursor-pointer border-t-[1px] border-l-[1px] text-[#444] py-[8px] px-[17px] leading-[20px] md:text-[10px] md:mb-[-13px] md:mr-[-14px] md:py-[7px] md:px-[14px] md:leading-[14px] font-Lora hover:text-[#fff] hover:bg-[#000] hover:border-none lg:text-[14px] lg:py-[8px] lg:px-[17px] lg:mr-[-23px] lg:leading-[20px] xl:mb-[-19px]">
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
            <div className="overflow-hidden text-center">
              <figure className="figure-hover relative sm:inline-block ">
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
                    <h6 className="text-[#424c55] text-[18px] leading-[18px] md:text-[14px] font-Lora lg:text-[18px]">
                      Deluxe Room
                    </h6>
                    <p className="my-[15px] text-[18px] md:text-[13px] font-Lora text-[#666666] lg:text-[18px]">
                      $200/{" "}
                      <span className="text-[11px] text-[#666666]">night</span>
                    </p>
                  </div>
                  <div className="right">
                    <a className="inline-block cursor-pointer border-[#63c2ea] border-2 text-[#63c2ea] py-[8px] px-[17px] md:text-[13px] md:py-[7px] md:px-[14px] leading-[20px] btn-welcome lg:text-[14px] lg:py-[8px] lg:px-[17px]">
                      Book
                    </a>
                  </div>
                </div>
                <div className="bounch-hover p-[13px] bg-[#f7c411] hidden bg-repeat h-full w-full text-left top-0 left-0 bottom-0 right-0 animate-bounceInUp animate-mode absolute duration-700 sm:text-center md:text-left">
                  <div className="border-[1px] md:h-[100%] border-[#475362] p-[22px] md:p-[13px] lg:p-[22px]">
                    <h5 className="text-[18px] leading-5 text-[#000] font-Lora md:text-[12px] lg:text-[16px] xl:text-[18px]">Deluxe Room</h5>
                    <p className="text-[15px] my-[15px] text-[#444] md:text-[9px] md:my-[6px] lg:text-[13px] lg:my-[5px] xl:text-[15px] xl:my-[15px]">
                      Semper ac dolor vitae accumsan. interdum hendrerit
                      lacinia.
                    </p>
                    <p className="text-[15px] mb-[15px] text-[#444] md:text-[9px] md:my-[6px] lg:text-[13px] lg:my-[5px] xl:text-[15px] xl:my-[15px]">
                      Phasellus accumsan urna vitae molestie interdum.
                    </p>
                    <div className="flex justify-between">
                      <div className="left">
                        <p className=" mt-[18px] text-[18px] md:text-[11px] font-Lora text-[#444] lg:text-[15px] xl:text-[18px]">
                          $200/{" "}
                          <span className="text-[11px] text-[#444] md:text-[9px] xl:[11px]">
                            night
                          </span>
                        </p>
                      </div>
                      <div className="right flex items-end">
                        <a className="align-middle block mb-[-23px] mr-[-23px] cursor-pointer border-t-[1px] border-l-[1px] text-[#444] py-[8px] px-[17px] leading-[20px] md:text-[10px] md:mb-[-13px] md:mr-[-14px] md:py-[7px] md:px-[14px] md:leading-[14px] font-Lora hover:text-[#fff] hover:bg-[#000] hover:border-none lg:text-[14px] lg:py-[8px] lg:px-[17px] lg:mr-[-23px] lg:leading-[20px] xl:mb-[-19px]">
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
    </div>
  );
};

export default Welcome_hotel;
