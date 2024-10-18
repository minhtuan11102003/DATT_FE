'use client'
import React, { useState } from 'react';

const RoomDetailPage = () => {
    const arrNumber = [1, 2, 3, 4, 5, 6];
    const [isNumber, setIsNumber] = useState<number>(0);

    const upNumber = () => {
        setIsNumber(preNumber => (preNumber + 1) % arrNumber.length);
    }

    const downNumber = () => {
        setIsNumber((prevDem) => (prevDem === 0 ? arrNumber.length - 1 : prevDem - 1))
    }

    return (
        <div className='w-full '>
            <div className='section1 w-full h-[333px]'>
                <p onClick={() => upNumber()}>Lên</p>
                <p>{arrNumber[isNumber]}</p>
                <p onClick={() => downNumber()}>Xuống</p>
            </div>
            <div className='section2 w-full flex justify-center '>
                <div className='w-[1170px] flex gap-4'>
                    <div className='border w-[877px] h-auto'>

                    </div>
                    <div className='border w-[262px] h-auto'>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomDetailPage;