'use client';
import React, { useState } from 'react';
const ContactsPage = () => {
    return (

        <div>
            {/* Banner */}
            <section className="relative h-80 bg-cover bg-center" style={{ backgroundImage: 'url(./images/banner-section/bannerContacts.jpg)' }}>
                <div className="pt-12 relative z-10 flex flex-col items-center justify-center h-full text-white">
                    <h1 className="text-5xl font-serif uppercase">CONTACT US</h1>
                    <div className="pb-5 mt-4" style={{ backgroundImage: 'url(./images/nice-title-breadcrumb.png)', width: '102px', height: '6px', backgroundSize: 'cover' }}></div>
                </div>
                <img src="./images/giamGia.png" alt="" className="absolute top-0 right-96" />
            </section>

            {/* Contact Section */}
            <section className="contact_mail_area mb-24 mt-14 pl-96 pr-96">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap">
                        <div className="w-full lg:w-1/2 md:w-1/2 sm:w-full">
                            <div className="send_mail mb-10">
                                <div className="section_title mb-10">
                                    <h4 className="text-xl uppercase font-serif">Send Us An Email</h4>
                                </div>
                            </div>
                            <form action="contact_process.php" method="post">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <input type="text" placeholder="First Name" name="fname" required className="border border-gray-300 p-2 w-full h-16 pl-4" />
                                    </div>
                                    <div>
                                        <input type="text" placeholder="Last Name" name="lname" required className="border border-gray-300 p-2 w-full h-16 pl-4" />
                                    </div>
                                    <div>
                                        <input type="email" placeholder="Your Email Id" name="email" required className="border border-gray-300 p-2 w-full h-16 pl-4" />
                                    </div>
                                    <div>
                                        <input type="text" placeholder="Phone Number *" name="phone" required className="border border-gray-300 p-2 w-full h-16 pl-4" />
                                    </div>
                                    <div className="col-span-2">
                                        <textarea name="message" placeholder="Message" required className="border border-gray-300 p-2 w-full h-24 pl-4"></textarea>
                                    </div>
                                    <div className="mt-4">
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
                        <div className="w-full lg:w-1/2 md:w-1/2 sm:w-full mt-10 lg:mt-0 pl-6">
                            <div className="contact_info mt-16">
                                <div className="section_title mb-10">
                                    <h4 className="text-xl uppercase font-serif">Contact Info</h4>
                                </div>
                                <ul className="list-none">
                                    <li className="flex mb-4">
                                        <img className="w-5 h-5 mr-2" src="./images/icon-section/google-map.png" alt="Location" />
                                        <span>St Amsterdam finland, <br /> United States of AKY16 8PN</span>
                                    </li>
                                    <li className="flex items-center mb-4 pt-2">
                                        <img src="./images/icon-section/icon-phone.png" alt="Phone" className="w-5 h-5 mr-2" />
                                        <span>1234567890</span>
                                    </li>
                                    <li className="flex items-center mb-4 pt-2">
                                        <img src="./images/icon-section/envelope.png" alt="Email" className="w-5 h-5 mr-2" />
                                        <span>info@hotelbooking.com</span>
                                    </li>
                                </ul>
                                <div className="social_icons mt-4 pt-2">
                                    <ul className="flex space-x-4">
                                        <li>
                                            <a href="#">
                                                <img src="./images/icon-section/facebook.png" alt="Facebook" className="w-5 h-5" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src="./images/icon-section/twitter.png" alt="Twitter" className="w-5 h-5" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src="./images/icon-section/google-plus.png" alt="Google Plus" className="w-5 h-5" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src="./images/icon-section/linkedin.png" alt="LinkedIn" className="w-5 h-5" />
                                            </a>
                                        </li>
                                    </ul>
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