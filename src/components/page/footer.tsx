import React from 'react';

const FooterComponent = () => {
    return (
        <footer className=" text-white py-14 bg-[#313a45]">
            <div className=" w-[1170px] container mx-auto x1:px-[5px] md:px-[0] lg:px-[6px] sm:px-[3px]">
                <div className="footer_top flex flex-wrap justify-between mb-10">
                    {/* Logo Section */}
                    <div className="w-full md:w-1/3 mb-6">
                        <div className="px-[15px]">
                            <div className="footer_logo mb-[30px]">
                                <a href="#">
                                    <img src="./images/footer-logo-one.png" alt="Footer Logo" />
                                </a>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur tincidunt dolor.</p>
                            <div className="flex mt-4">
                                <img className="w-5 pt-1 pb-1 pr-2" src="./images/icon-section/google-map2.png" alt="Location" />
                                <span>ST Amsterdam, Finland,</span>
                            </div>
                            <p className="pl-5">United States of AKY16 8PN</p>
                        </div>
                    </div>

                    {/* Quick Links Section */}
                    <div className="w-full md:w-1/3 mb-6">
                        <div className="px-[15px]">
                            <h5 className="mb-[45px] font-serif uppercase text-xl">Quick Links</h5>
                            <div className="flex flex-wrap">
                                <div className="w-1/2">
                                    <ul>
                                        <li><a href="#" className="hover:text-blue-400 transition duration-300">Rooms</a></li><br />
                                        <li><a href="#" className="hover:text-blue-400 transition duration-300">Food & Drinks</a></li><br />
                                        <li><a href="#" className="hover:text-blue-400 transition duration-300">Beach Venues</a></li><br />
                                        <li><a href="#" className="hover:text-blue-400 transition duration-300">Amenities</a></li><br />
                                    </ul>
                                </div>
                                <div className="w-1/2">
                                    <ul>
                                        <li><a href="#" className="hover:text-blue-400 transition duration-300">Noordwijk</a></li><br />
                                        <li><a href="#" className="hover:text-blue-400 transition duration-300">Wellness</a></li><br />
                                        <li><a href="#" className="hover:text-blue-400 transition duration-300">Manifesto</a></li><br />
                                        <li><a href="#" className="hover:text-blue-400 transition duration-300">Contact</a></li><br />
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map Section */}
                    <div className="w-full md:w-1/3 mb-6">
                        <div className="px-[15px]">
                            <h5 className="uppercase font-serif text-xl mb-[45px]">We are global</h5>
                            <div className="footer_map mt-5">
                                <img src="./images/footer-map-two.jpg" alt="Global Map" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="text-center">
                    <p>
                        © 2015 <a href="#" className="hover:text-blue-400 transition duration-300">Hotelbooking.</a> All rights reserved
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default FooterComponent;
