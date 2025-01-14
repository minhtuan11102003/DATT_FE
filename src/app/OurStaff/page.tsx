import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { TiSocialGooglePlus } from "react-icons/ti";



function OurStaffComponent() {
    return (
        <div className='w-full md:w-full xs:w-full h-auto'>
            <section className='bannerSection h-[333px] relative md:w-full xs:w-fulll'>
                <img src="./images/banner-section/bannerBooking.jpg" alt="Lỗi hình mong reload trang" className='md:w-full md:h-full xs:w-full xs:h-full h-full object-cover bg-none' />
                <div className='logoGiamGia w-[150px] h-[189px] absolute top-0 right-[30%] md:w-[215px] md:h-[272px] md:right-[10%] xs:right-[30%]'>
                    <img src="./images/giamGia.png" alt="Lỗi hình ảnh" className='w-full h-full object-cover' />
                </div>
                <div className='w-full h-[105px] flex flex-col items-center justify-around absolute top-[40%] '>
                    <h1 className='font-medium text-[44px] text-white font-PlayfairDisplay'>OUR STAFF</h1>
                    <img src="./images/nice-title-breadcrumb.png" alt="" />
                </div>
            </section>

            <div className='flex flex-col justify-center items-center w-full mt-20'>
                <div className='w-full px-4 sm:w-[90%] md:w-[750px] lg:w-[970px] xl:w-[1140px] mt-10 sm:mt-20'>
                    <h5 className='text-xl text-[#131e2a] mb-9 font-bold pl-11 md:pl-0 sm:pl-0'>OUR HOTEL STAFF</h5>
                </div>
                <div className='w-[290px] px-4 sm:w-[290px] md:w-[768px] lg:w-[970px] xl:w-[1140px] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-2 mb-7 sm:px-4 '>
                    <figure className="relative group">
                        <div className="mb-[28px]">
                            <a href="#">
                                <img src="./images/about-us-staff-one.jpg" width={"100%"} alt="Staff 1" />
                            </a>
                        </div>
                        <div className="absolute inset-0 p-[13px] opacity-0 group-hover:opacity-100 bg-repeat transition-opacity duration-700 h-[258px] md:h-[178px] lg:h-[230px] xl:h-[272px] " style={{ backgroundColor: 'rgba(254, 109, 109, 0.8)' }}>
                            <div className="p-[22px] md:p-[10px] text-[#FFF]">
                                <h6 className="text-[16px] md:text-[10px] lg:text-[15px] xl:text-[19px] ">DOHN DOE</h6>
                                <span className='text-[14px]'>Hotel Manager</span>
                                <p className="text-[16px] mt-[15px] md:text-[10px] lg:text-[15px] xl:text-[19px] ">Semper ac dolor vitae msan. Cras interdum hendreritnia Phasellus accumsan rna.</p>
                                <div className="social-icons mt-4 flex space-x-4">
                                    <a href="#" className="text-[#FFF] hover:text-[#fe6d6d]">
                                        <FaFacebookF className="h-5 w-5" />
                                    </a>
                                    <a href="#" className="text-[#FFF] hover:text-[#fe6d6d]">
                                        <FaTwitter className="h-5 w-5" />
                                    </a>
                                    <a href="#" className="text-[#FFF] hover:text-[#fe6d6d]">
                                        <TiSocialGooglePlus className="h-6 w-6" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </figure>

                    <figure className="relative group">
                        <div className="mb-[28px]">
                            <a href="#">
                                <img src="./images/about-us-staff-two.jpg" width={"100%"} alt="Staff 1" />
                            </a>
                        </div>
                        <div className="absolute inset-0 p-[13px] opacity-0 group-hover:opacity-100 bg-repeat transition-opacity duration-700 h-[258px] md:h-[178px] lg:h-[230px] xl:h-[272px] " style={{ backgroundColor: 'rgba(254, 109, 109, 0.8)' }}>
                            <div className="p-[22px] md:p-[10px] text-[#FFF]">
                                <h6 className="text-[16px] md:text-[10px] lg:text-[15px] xl:text-[19px] ">DOHN DOE</h6>
                                <span className='text-[14px]'>Hotel Manager</span>
                                <p className="text-[16px] mt-[15px] md:text-[10px] lg:text-[15px] xl:text-[19px] ">Semper ac dolor vitae msan. Cras interdum hendreritnia Phasellus accumsan rna.</p>
                                <div className="social-icons mt-4 flex space-x-4">
                                    <a href="#" className="text-[#FFF] hover:text-[#fe6d6d]">
                                        <FaFacebookF className="h-5 w-5" />
                                    </a>
                                    <a href="#" className="text-[#FFF] hover:text-[#fe6d6d]">
                                        <FaTwitter className="h-5 w-5" />
                                    </a>
                                    <a href="#" className="text-[#FFF] hover:text-[#fe6d6d]">
                                        <TiSocialGooglePlus className="h-6 w-6" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </figure>

                    <figure className="relative group">
                        <div className="mb-[28px]">
                            <a href="#">
                                <img src="./images/about-us-staff-three.jpg" width={"100%"} alt="Staff 1" />
                            </a>
                        </div>
                        <div className="absolute inset-0 p-[13px] opacity-0 group-hover:opacity-100 bg-repeat transition-opacity duration-700 h-[258px] md:h-[178px] lg:h-[230px] xl:h-[272px] " style={{ backgroundColor: 'rgba(254, 109, 109, 0.8)' }}>
                            <div className="p-[22px] md:p-[10px] text-[#FFF]">
                                <h6 className="text-[16px] md:text-[10px] lg:text-[15px] xl:text-[19px] ">DOHN DOE</h6>
                                <span className='text-[14px]'>Hotel Manager</span>
                                <p className="text-[16px] mt-[15px] md:text-[10px] lg:text-[15px] xl:text-[19px]">Semper ac dolor vitae msan. Cras interdum hendreritnia Phasellus accumsan rna.</p>
                                <div className="social-icons mt-4 flex space-x-4">
                                    <a href="#" className="text-[#FFF] hover:text-[#fe6d6d]">
                                        <FaFacebookF className="h-5 w-5" />
                                    </a>
                                    <a href="#" className="text-[#FFF] hover:text-[#fe6d6d]">
                                        <FaTwitter className="h-5 w-5" />
                                    </a>
                                    <a href="#" className="text-[#FFF] hover:text-[#fe6d6d]">
                                        <TiSocialGooglePlus className="h-6 w-6" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </figure>

                    <figure className="relative group">
                        <div className="mb-[28px]">
                            <a href="#">
                                <img src="./images/about-us-staff-four.jpg" width={"100%"} alt="Staff 1" />
                            </a>
                        </div>
                        <div className="absolute inset-0 p-[13px] opacity-0 group-hover:opacity-100 bg-repeat transition-opacity duration-700 h-[258px] md:h-[178px] lg:h-[230px] xl:h-[272px] " style={{ backgroundColor: 'rgba(254, 109, 109, 0.8)' }}>
                            <div className="p-[22px] md:p-[10px] text-[#FFF]">
                                <h6 className="text-[16px] md:text-[10px] lg:text-[15px] xl:text-[19px]">DOHN DOE</h6>
                                <span className='text-[14px]'>Hotel Manager</span>
                                <p className="text-[16px] mt-[15px] md:text-[10px] lg:text-[15px] xl:text-[19px]">Semper ac dolor vitae msan. Cras interdum hendreritnia Phasellus accumsan rna.</p>
                                <div className="social-icons mt-4 flex space-x-4">
                                    <a href="#" className="text-[#FFF] hover:text-[#fe6d6d]">
                                        <FaFacebookF className="h-5 w-5" />
                                    </a>
                                    <a href="#" className="text-[#FFF] hover:text-[#fe6d6d]">
                                        <FaTwitter className="h-5 w-5" />
                                    </a>
                                    <a href="#" className="text-[#FFF] hover:text-[#fe6d6d]">
                                        <TiSocialGooglePlus className="h-6 w-6" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </figure>
                    <figure className="relative group">
                        <div className="mb-[28px]">
                            <a href="#">
                                <img src="./images/about-us-staff-one.jpg" width={"100%"} alt="Staff 1" />
                            </a>
                        </div>
                        <div className="absolute inset-0 p-[13px] opacity-0 group-hover:opacity-100 bg-repeat transition-opacity duration-700 h-[258px] md:h-[178px] lg:h-[230px] xl:h-[272px] " style={{ backgroundColor: 'rgba(254, 109, 109, 0.8)' }}>
                            <div className="p-[22px] md:p-[10px] text-[#FFF]">
                                <h6 className="text-[16px] md:text-[10px] lg:text-[15px] xl:text-[19px] ">DOHN DOE</h6>
                                <span className='text-[14px]'>Hotel Manager</span>
                                <p className="text-[16px] mt-[15px] md:text-[10px] lg:text-[15px] xl:text-[19px]">Semper ac dolor vitae msan. Cras interdum hendreritnia Phasellus accumsan rna.</p>
                                <div className="social-icons mt-4 flex space-x-4">
                                    <a href="#" className="text-[#FFF] hover:text-[#fe6d6d]">
                                        <FaFacebookF className="h-5 w-5" />
                                    </a>
                                    <a href="#" className="text-[#FFF] hover:text-[#fe6d6d]">
                                        <FaTwitter className="h-5 w-5" />
                                    </a>
                                    <a href="#" className="text-[#FFF] hover:text-[#fe6d6d]">
                                        <TiSocialGooglePlus className="h-6 w-6" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </figure>

                    <figure className="relative group">
                        <div className="mb-[28px]">
                            <a href="#">
                                <img src="./images/about-us-staff-two.jpg" width={"100%"} alt="Staff 1" />
                            </a>
                        </div>
                        <div className="absolute inset-0 p-[13px] opacity-0 group-hover:opacity-100 bg-repeat transition-opacity duration-700 h-[258px] md:h-[178px] lg:h-[230px] xl:h-[272px] " style={{ backgroundColor: 'rgba(254, 109, 109, 0.8)' }}>
                            <div className="p-[22px] md:p-[10px] text-[#FFF]">
                                <h6 className="text-[16px] md:text-[10px] lg:text-[15px] xl:text-[19px] ">DOHN DOE</h6>
                                <span className='text-[14px]'>Hotel Manager</span>
                                <p className="text-[16px] mt-[15px] md:text-[10px] lg:text-[15px] xl:text-[19px]">Semper ac dolor vitae msan. Cras interdum hendreritnia Phasellus accumsan rna.</p>
                                <div className="social-icons mt-4 flex space-x-4">
                                    <a href="#" className="text-[#FFF] hover:text-[#fe6d6d]">
                                        <FaFacebookF className="h-5 w-5" />
                                    </a>
                                    <a href="#" className="text-[#FFF] hover:text-[#fe6d6d]">
                                        <FaTwitter className="h-5 w-5" />
                                    </a>
                                    <a href="#" className="text-[#FFF] hover:text-[#fe6d6d]">
                                        <TiSocialGooglePlus className="h-6 w-6" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </figure>

                    <figure className="relative group">
                        <div className="mb-[28px]">
                            <a href="#">
                                <img src="./images/about-us-staff-three.jpg" width={"100%"} alt="Staff 1" />
                            </a>
                        </div>
                        <div className="absolute inset-0 p-[13px] opacity-0 group-hover:opacity-100 bg-repeat transition-opacity duration-700 h-[258px] md:h-[178px] lg:h-[230px] xl:h-[272px]" style={{ backgroundColor: 'rgba(254, 109, 109, 0.8)' }}>
                            <div className="p-[22px] md:p-[10px] text-[#FFF]">
                                <h6 className="text-[16px] md:text-[10px] lg:text-[15px] xl:text-[19px] ">DOHN DOE</h6>
                                <span className='text-[14px]'>Hotel Manager</span>
                                <p className="text-[16px] mt-[15px] md:text-[10px] lg:text-[15px] xl:text-[19px]">Semper ac dolor vitae msan. Cras interdum hendreritnia Phasellus accumsan rna.</p>
                                <div className="social-icons mt-4 flex space-x-4">
                                    <a href="#" className="text-[#FFF] hover:text-[#fe6d6d]">
                                        <FaFacebookF className="h-5 w-5" />
                                    </a>
                                    <a href="#" className="text-[#FFF] hover:text-[#fe6d6d]">
                                        <FaTwitter className="h-5 w-5" />
                                    </a>
                                    <a href="#" className="text-[#FFF] hover:text-[#fe6d6d]">
                                        <TiSocialGooglePlus className="h-6 w-6" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </figure>

                    <figure className="relative group">
                        <div className="mb-[28px]">
                            <a href="#">
                                <img src="./images/about-us-staff-four.jpg" width={"100%"} alt="Staff 1" />
                            </a>
                        </div>
                        <div className="absolute inset-0 p-[13px] opacity-0 group-hover:opacity-100 bg-repeat transition-opacity duration-700 h-[258px] md:h-[178px] lg:h-[230px] xl:h-[272px] " style={{ backgroundColor: 'rgba(254, 109, 109, 0.8)' }}>
                            <div className="p-[22px] md:p-[10px] text-[#FFF]">
                                <h6 className="text-[16px] md:text-[10px] lg:text-[15px] xl:text-[19px]">DOHN DOE</h6>
                                <span className='text-[14px]'>Hotel Manager</span>
                                <p className="text-[16px] mt-[15px] md:text-[10px] lg:text-[15px] xl:text-[19px]">Semper ac dolor vitae msan. Cras interdum hendreritnia Phasellus accumsan rna.</p>
                                <div className="social-icons mt-4 flex space-x-4">
                                    <a href="#" className="text-[#FFF] hover:text-[#fe6d6d]">
                                        <FaFacebookF className="h-5 w-5" />
                                    </a>
                                    <a href="#" className="text-[#FFF] hover:text-[#fe6d6d]">
                                        <FaTwitter className="h-5 w-5" />
                                    </a>
                                    <a href="#" className="text-[#FFF] hover:text-[#fe6d6d]">
                                        <TiSocialGooglePlus className="h-6 w-6" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </figure>
                </div>
            </div>
        </div>
    );
}
export default OurStaffComponent

