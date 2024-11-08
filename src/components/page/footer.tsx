import React from 'react';
const FooterComponent = () => {
    return (
        <footer className="text-white pt-14 bg-[#313a45]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-[1170px]">
                <div className="footer_top flex flex-wrap justify-between ">
                    {/* Logo Section */}
                    <div className="w-full md:w-1/3">
                        <div className="px-4">
                            <div className="footer_logo mb-5">
                                <a href="#" aria-label="Footer Logo">
                                    <img src="./images/footer-logo-one.png" alt="Footer Logo" />
                                </a>
                            </div>
                            <p className="my-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur tincidunt dolor.
                            </p>
                            <div className="flex mt-7">
                                <img className="w-5 pt-1 pb-1 pr-2" src="./images/icon-section/google-map2.png" alt="Location Icon" />
                                <p>ST Amsterdam, finland,</p>
                            </div>
                            <p className="pl-5 mb-7">United States of AKY16 8PN</p>
                        </div>
                    </div>

                    {/* Quick Links Section */}
                    <div className="w-full md:w-1/3">
                        <div className="px-4">
                            <h5 className="mb-11 font-serif uppercase text-xl md:text-left pl-4 md:pl-0">
                                Quick Links
                            </h5>
                            <div className="flex flex-wrap md:flex-row flex-col">
                                <div className="w-full md:w-1/2">
                                    <ul>
                                        <li className="mb-6"><a href="#" className="hover:text-blue-400 transition duration-300">Rooms</a></li>
                                        <li className="mb-6"><a href="#" className="hover:text-blue-400 transition duration-300">Food & Drinks</a></li>
                                        <li className="mb-6"><a href="#" className="hover:text-blue-400 transition duration-300">Beach Venues</a></li>
                                        <li className="mb-6"><a href="#" className="hover:text-blue-400 transition duration-300">Amenities</a></li>
                                    </ul>
                                </div>
                                <div className="w-full md:w-1/2">
                                    <ul>
                                        <li className="mb-6"><a href="#" className="hover:text-blue-400 transition duration-300">Noordwijk</a></li>
                                        <li className="mb-6"><a href="#" className="hover:text-blue-400 transition duration-300">Wellness</a></li>
                                        <li className="mb-6"><a href="#" className="hover:text-blue-400 transition duration-300">Manifesto</a></li>
                                        <li className="mb-6"><a href="#" className="hover:text-blue-400 transition duration-300">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map Section */}
                    <div className="w-full md:w-1/3">
                        <div className="px-4">
                            <h5 className="uppercase font-serif text-xl mb-11">We are global</h5>
                            <a href="#" className="footer_map mt-5" aria-label="Global Map">
                                <img src="./images/footer-map-two.jpg" alt="Global Map" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="text-center py-[50px] bg-[#313a45]">
                <p>
                    © 2015 <a href="#" className="hover:text-blue-400 transition duration-300">Hotelbooking</a>. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default FooterComponent;
