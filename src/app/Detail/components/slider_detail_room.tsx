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

                <div className="slides overflow-hidden w-[270px]">
                    <ul className="w-[2700px] h-[471px] flex relative list-none">

                        {sliders.map((slider, index) => {
                            return (
                                <li key={index}>
                                    <img
                                        className="w-full max-w-full h-auto object-cover duration-300 ease-in delay-300"
                                        src={`/images/Detail/Deluxe_Room/${slider.image}`}
                                        alt={slider.alt}
                                        style={{ translate: `${-100 * imageIndex}%` }}
                                    />
                                </li>
                            );
                        })}
                       
                    </ul>
                </div>
                <div className="btn-active w-full absolute top-[50%] translate-y-[-50%] flex justify-between ">
                    <span className="btn-next pl-5 text-[32px] opacity-50 text-[#fff] cusor-pointer">
                        <IoIosArrowDropleft onClick={showPrevImage}/>
                    </span>
                    <span className="btn-prev pr-5 text-[32px] opacity-50 text-[#fff]cusor-pointer">
                        <IoIosArrowDropright onClick={showNextImage}/>
                    </span>
                </div>
            </div>
            <div className="slider-thumnail mt-[20px] overflow-hidden w-[848px]">
                <ul className="flex gap-6 w-[1163.17px]">
                    {
                        sliders.map((slider, index)=>{
                            return (

                                <li key={index}
                                    className="w-full h-full object-cover hover:cursor-pointer hover:opacity-50 active"
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
