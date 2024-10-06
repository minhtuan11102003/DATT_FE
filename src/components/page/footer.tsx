import React from 'react';
const FooterComponent = () => {
    return (
        <footer className="bg-gray-800 text-white py-10">
            <div className="container mx-auto">
                <div className="footer_top flex flex-wrap justify-between mb-10">
                    <div className="w-full md:w-1/3 mb-6">
                        <div className="footer_widget">
                            <div className="footer_logo mb-4">
                                <a href="#">
                                    <img src="./images/footer-logo-one.png" />
                                </a>
                            </div>
                            <p>Lorem ipsum dolor sit amet, conser adipiscing elit. In consectetur tincidunt dolor.</p>
                            <p className="mt-4">
                                <i className="fa fa-map-marker mr-2"></i>
                                ST Amsterdam, Finland, 
                                <br />
                                United Stats of AKY16 8PN
                            </p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 mb-6">
                        <div className="footer_widget">
                            <h5 className="mb-4">QUICK LINKS</h5><br />
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
                                        <li><a href="#" className="hover:text-blue-400 transition duration-300">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 mb-6">
                        <div className="footer_widget">
                            <h5>WE ARE GLOBAL</h5><br />
                            <div className="footer_map">
                                <img src="./images/footer-map-one.png" className="mt-1 w-40 h-auto" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <p className="text-sm">
                        © 2015 <a href="#" className="hover:text-blue-400 transition duration-300">Hotelbooking</a> All rights reserved
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default FooterComponent;
