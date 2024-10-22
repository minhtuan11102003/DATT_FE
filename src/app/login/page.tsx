import React from 'react';
import Link from 'next/link';

const LoginPage = () => {
    return (
        <div className='w-full h-[700px] flex flex-col md:flex-row items-center justify-center'>
            <div className='w-full md:w-[700px]'>
                <img 
                    src="" 
                    alt="" 
                    className='w-[350px] ml-6 h-[200px] sm:w-[520px] sm:ml-11 md:ml-0 md:w-[620px] md:h-[500px] object-cover rounded-t-lg md:rounded-l-lg' 
                /> 
            </div>
            <div className='w-full p-8 md:w-[500px] md:p-3 sm:p-3 sm:w-[500px]'>
                <h2 className='text-2xl font-bold text-gray-800 mb-4'>Đăng nhập</h2>
                <p className='text-gray-600 mb-6'>Vui lòng nhập đầy đủ thông tin đăng nhập!</p>
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
                            className='w-full px-4 py-2 border-b-2 border-gray-300 rounded-md focus:outline-none focus:ring-2'
                        />
                    </div>
                    <div className='flex items-center justify-between'>
                        <label className='flex items-center'>
                            <input type="checkbox" className='h-4 w-4 border-gray-300 rounded' />
                            <span className='ml-2 text-gray-600'>Nhớ mật khẩu</span>
                        </label>
                    </div>
                    <button 
                        type="submit" 
                        className='w-full bg-[#39c5fa] text-white py-2 rounded-md hover:bg-[#39c5fa] transition duration-300'
                    >
                        Đăng nhập
                    </button>
                </form>
                <Link href="#" className='text-[#39c5fa] hover:underline block text-center mt-4'>Quên mật khẩu?</Link>
                <p className='mt-4 text-sm text-gray-600 text-center'>
                    Bạn chưa có tài khoản? <Link href="register" className='text-[#39c5fa] hover:underline'>Đăng ký</Link>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;