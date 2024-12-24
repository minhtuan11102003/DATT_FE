import React from 'react';

const CardProducts = ({ data }: { data: any }) => {
    return (
        <div className="cardProductShow">
            <div className="">
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
                                    {data.name}
                                </h6>
                                <p className="my-[15px] text-[18px] font-Lora text-[#666666] md:text-[13px] lg:text-[18px]">
                                    ${data.price}/{" "}
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

                            <div className="border-[1px] border-[#475362] md:p-[13px] p-[22px] lg:p-[22px] lg:h-full">
                                <h5 className="text-[18px] md:text-[12px] lg:text-[16px] xl:text-[18px] text-[#000] font-Lora leading-5 font-normal">
                                    Deluxe Room
                                </h5>
                                <p className="text-[15px] xl:text-[15px] my-[15px] md:text-[9px] md:my-[6px] xl:my-[15px] text-[#444] font-medium lg:text-[13px] lg:my-[5px]">
                                    Semper ac dolor vitae accumsan. interdum hendrerit
                                    lacinia.
                                </p>
                                <p className="text-[15px] xl:text-[15px] mb-[10px] md:text-[9px] md:my-[6px] text-[#444] xl:my-[15px] font-medium lg:text-[13px] lg:my-[5px]">

                                    Phasellus accumsan urna vitae molestie interdum.
                                </p>
                                <div className="flex justify-between">
                                    <div className="left">

                                        <p className="my-[15px] md:text-[11px] mt-[18px] text-[15px] font-Lora text-[#444] sm:text-[18px] xl:text-[18px] md:mb-0 lg:text-[15px]">
                                            $200/{" "}
                                            <span className="text-[11px] xl:text-[11px] md:text-[9px] font-Lora text-[#444] lg:text-[11px]">

                                                night
                                            </span>
                                        </p>
                                    </div>
                                    <div className="right flex items-end ">

                                        <a className="block mb-[-23px] mr-[-23px] md:mr-[-13px] md:mb-[-5px]  xl:mr-[-23px] cursor-pointer border-t-[1px] border-l-[1px] text-[#444] md:text-[10px] py-[8px] px-[17px] font-normal font-Lora lg:text-[14px] md:py-[7px] md:px-[14px] xl:text-[14px] xl:py-[8px] xl:px-[17px]  hover:bg-[#444] hover:text-[#fff] hover:border-none lg:py-[8px] lg:px-[17px] lg:mr-[-23px] lg:mb-[-13px] xl:mb-[-18px] leading-[20px]">

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
    );
};

export default CardProducts;