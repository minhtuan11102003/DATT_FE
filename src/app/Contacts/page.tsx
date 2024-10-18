'use client';
import React, { useState } from 'react';
const ContactsPage = () => {
    return (

        <div>
            {/* Banner SEction */}
            <section className="relative h-80 mb-[80px] text-center overflow-hidden	" style={{ backgroundImage: 'url(./images/banner-section/bannerContacts.jpg)' }}>
                <div className="px-[15px] mx-[auto] ">
                    <div className="w-[100%]">
                        <div className="pt-[170px] pb-[58px] relative  nice_title z-[2]">
                            <h2 className="text-5xl font-serif uppercase block leading-[25px] text-[#fff] relative mb-[40px] pb-[40px] w-[100%] z-[150]">CONTACT US
                                <div className="bottom-[-30%] h-[35%] w-[110px] absolute left-1/2 transform -translate-x-1/2" style={{ backgroundImage: 'url(./images/nice-title-breadcrumb.png)' }}></div>                            </h2>
                        </div>
                    </div>
                </div>
                <div className="left-[0px] top-[0px] w-[100%] absolute">
                    <div className=" w-[1170px] px-[15px] mx-[auto] relative">
                        <div className="absolute top-0 right-[0px]">
                            <img src="./images/giamGia.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="contact_mail_area mb-[94px]">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row">
                        {/* Form Section */}
                        <div className="md:w-1/2 relative min-h-[1px] px-4">
                            <div className="send_mail">
                                <div className="section_title mb-10">
                                    <h4 className="text-xl uppercase font-serif">Send Us An Email</h4>
                                </div>
                                <form action="contact_process.php" method="post">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <input type="text" placeholder="First Name *" name="fname" required className="border border-gray-300 p-2 w-full h-12 sm:h-16 pl-4 uppercase" />
                                        </div>
                                        <div>
                                            <input type="text" placeholder="Last Name *" name="lname" required className="border border-gray-300 p-2 w-full h-12 sm:h-16 pl-4 uppercase" />
                                        </div>
                                        <div>
                                            <input type="email" placeholder="Your Email Id *" name="email" required className="border border-gray-300 p-2 w-full h-12 sm:h-16 pl-4 uppercase" />
                                        </div>
                                        <div>
                                            <input type="text" placeholder="Phone Number *" name="phone" required className="border border-gray-300 p-2 w-full h-12 sm:h-16 pl-4 uppercase" />
                                        </div>
                                        <div className="col-span-2">
                                            <textarea name="message" placeholder="Message" required className="border border-gray-300 p-2 w-full h-24 pl-4 uppercase"></textarea>
                                        </div>
                                        <div className="mt-4 col-span-2">
                                            <input
                                                className="bg-red-400 text-white font-bold py-2 px-4 rounded border-2 border-transparent hover:bg-transparent hover:text-red-500 hover:border-red-400 transition duration-300"
                                                type="submit"
                                                name="submit"
                                                value="Submit Now"
                                            />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        {/* Contact Info Section */}
                        <div className="md:w-1/2 relative min-h-[1px] px-4">
                            <div className="contact_info mt-16">
                                <div className="section_title mb-10">
                                    <h4 className="text-xl uppercase font-serif">Contact Info</h4>
                                </div>
                                <ul className="list-none">
                                    <li className="flex mb-6 leading-6 text-gray-500">
                                        <img className="w-5 h-5 mr-2" src="./images/icon-section/google-map.png" alt="Location" />
                                        <span>St Amsterdam Finland,<br /> United States of AKY16 8PN</span>
                                    </li>
                                    <li className="flex mb-6 leading-6 text-gray-500">
                                        <img src="./images/icon-section/icon-phone.png" alt="Phone" className="w-5 h-5 mr-2" />
                                        <span>1234567890</span>
                                    </li>
                                    <li className="flex mb-6 leading-6 text-gray-500">
                                        <img src="./images/icon-section/envelope.png" alt="Email" className="w-5 h-5 mr-2" />
                                        <span>info@hotelbooking.com</span>
                                    </li>
                                </ul>
                                <div className="flex space-x-4 mt-4">
                                    <a href="#" className="group">
                                        <img src="./images/icon-section/facebook.png" alt="Facebook" className="w-5 h-5 filter grayscale transition duration-300 group-hover:brightness-50 group-hover:scale-110" />
                                    </a>
                                    <a href="#" className="group pl-4">
                                        <img src="./images/icon-section/twitter.png" alt="Twitter" className="w-5 h-5 filter grayscale transition duration-300 group-hover:brightness-50 group-hover:scale-110" />
                                    </a>
                                    <a href="#" className="group pl-4">
                                        <img src="./images/icon-section/google-plus.png" alt="Google Plus" className="w-5 h-5 filter grayscale transition duration-300 group-hover:brightness-50 group-hover:scale-110" />
                                    </a>
                                    <a href="#" className="group pl-4">
                                        <img src="./images/icon-section/linkedin.png" alt="LinkedIn" className="w-5 h-5 filter grayscale transition duration-300 group-hover:brightness-50 group-hover:scale-110" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactsPage;