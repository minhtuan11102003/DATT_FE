import React from 'react';
import Link from 'next/link';

const RegisterPage = () => {
    return (
        <div className='w-full h-screen flex items-center justify-center'>
        <div className=' rounded-lg flex'>
            <div className='w-[700px] hidden md:block'>
                <img src="" alt="" className='w-[500px] h-full object-cover rounded-l-lg' /> {/* Thêm hình ảnh tại đây */}
            </div>
            <div className='w-full p-8'>
                <h2 className='text-2xl font-bold text-gray-800 mb-4'>Đăng ký</h2>
                <p className='text-gray-600 mb-6'>Vui lòng nhập đầy đủ thông tin đăng ký!</p>
                <form className='space-y-4'>    
                    <div>
                        <input 
                            type="text" 
                            name='username' 
                            placeholder='Tên đăng nhập' 
                            className='w-full px-4 py-2 border-b-2 border-gray-300 rounded-md focus:outline-none focus:ring-2'
                        />
                    </div>
                    <div>
                        <input 
                            type="password" 
                            name='password' 
                            placeholder='Mật khẩu' 
                            className='w-full px-4 py-2 border-b-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 '
                        />
                    </div>
                    <div>
                        <input 
                            type="password" 
                            name='password' 
                            placeholder='Xác nhận lại mật khẩu' 
                            className='w-full px-4 py-2 border-b-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 '
                        />
                    </div>
                    <div>
                        <input 
                            type="email" 
                            name='mail' 
                            placeholder='Email' 
                            className='w-full px-4 py-2 border-b-2 border-gray-300 rounded-md focus:outline-none focus:ring-2'
                        />
                    </div>
                    <div>
                        <input 
                            type="text" 
                            name='Sđt' 
                            placeholder='Số điện thoại' 
                            className='w-full px-4 py-2 border-b-2 border-gray-300 rounded-md focus:outline-none focus:ring-2'
                        />
                    </div>
                    <div>
                        <input 
                            type="text" 
                            name='Địa chỉ' 
                            placeholder='Địa chỉ' 
                            className='w-full px-4 py-2 border-b-2 border-gray-300 rounded-md focus:outline-none focus:ring-2'
                        />
                    </div>

                    <button 
                        type="submit" 
                        className='w-full bg-[#39c5fa] text-white py-2 rounded-md hover:bg-[#39c5fa] transition duration-300'
                    >
                        Đăng ký
                    </button>
                </form>
                <p className='mt-4 text-sm text-gray-600 text-center' >
                   Bạn đã có tài khoản? <Link href="/Login" className='text-[#39c5fa] hover:underline'>Đăng nhập</Link>
                </p>
            </div>
        </div>
        </div>
    );
};

export default RegisterPage;
