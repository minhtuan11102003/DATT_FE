import React, { useState } from 'react'
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io'

type ImageSliderprops = {
    sliders: {
        image: string
        alt: string
    }[] 
}

const Slider_detail_room = ({sliders}: ImageSliderprops) => {
    const [imageIndex, setImageIndex] = useState<number>(0);

    function showNextImage() {
        setImageIndex(index => {
            if (index === sliders.length - 1) return 0
            return index + 1
        })
    }
    function showPrevImage() {
        setImageIndex(index => {
            if (index === 0) return sliders.length - 1
            return index - 1
        })
    }

    return (
        <div className="slide-container">
            <div className="slider-show relative">
                <div className="slides overflow-hidden">
                    <ul className="w-[2700px] sm:w-[4200px] md:w-[7200px] lg:w-[6980px] xl:w-[8480px] flex relative list-none">
                        {sliders.map((slider, index) => {
                            return (
                                <li key={index} className='sm:w-[420px] w-[270px] md:w-[720px] lg:w-[698px] xl:w-[848px]'>
                                    <img
                                        className="w-full object-center max-w-full h-auto object-cover  duration-500 ease delay-300"
                                        src={`/images/Detail/Deluxe_Room/${slider.image}`}
                                        alt={slider.alt}
                                        style={{ translate: `${-100 * imageIndex}%` }}
                                    />
                                </li>
                            );
                        })}
                       
                    </ul>
                </div>
                <div className="btn-active w-full absolute top-[50%] translate-y-[-50%] flex justify-between px-2">
                    <span className="btn-next text-[32px] opacity-50 text-[#fff] cursor-pointer">
                        <IoIosArrowDropleft onClick={showPrevImage}/>
                    </span>
                    <span className="btn-prev text-[32px] opacity-50 text-[#fff] cursor-pointer">
                        <IoIosArrowDropright onClick={showNextImage}/>
                    </span>
                </div>
            </div>
            <div className="slider-thumnail mt-[20px] w-full overflow-hidden">
                <ul className="flex gap-6 w-[392.6px] sm:w-[592.5px] md:w-[992.5px] lg:w-[963.167px] xl:w-[1163.17px]">
                    {
                        sliders.map((slider, index)=>{
                            return (

                                <li key={index}
                                    className="w-[25px] sm:w-[50px] md:w-[100px] lg:w-[96.33333333333333px] xl:w-[121.33333333333333px] hover:cursor-pointer hover:opacity-50 active"
                                // onclick="switchImage(this)"
                                >
                                    <img
                                        className="max-w-full h-auto hover:rounded"
                                        src={`/images/Detail/Deluxe_Room/${slider.image}`}
                                        alt={slider.alt}
                                        onClick={() => setImageIndex(index)}
                                    />
                                </li>
                            )
                        })
                    }
                    
                </ul>
            </div>
        </div>
    )
}

export default Slider_detail_room
