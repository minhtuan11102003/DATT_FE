import React from 'react';
// import '@fortawesome/fontawesome-free/css/all.min.css';
import '../../css/footer.css';
const FooterComponent = () => {
    return (
        <footer className="footer_area text-white py-14">
            <div className="container mx-auto custom-padding ">
                <div className="footer_top flex flex-wrap justify-between mb-10">
                    <div className="w-33 md:w-1/3 mb-6">
                        <div className="pl-10 pr-10">
                            <div className="footer_logo mb-4">
                                <a href="#">
                                    <img src="./images/footer-logo-one.png" />
                                </a>
                            </div>
                            <p>Lorem ipsum dolor sit amet, conser adipiscing elit. In consectetur tincidunt dolor.</p><br />
                            <div>
                                <i className="fas fa-map-marker-alt mr-2"></i>
                                ST Amsterdam, Finland,
                                <br />
                                <p className='pl-5'>United Stats of AKY16 8PN</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 mb-6">
                        <div className="footer_widget">
                            <h5 className="mb-4 font-serif uppercase text-xl">Quick Links</h5><br />
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
                            <h5 className='uppercase font-serif text-xl'>We are global</h5><br />
                            <div className="footer_map">
                                <img src="./images/footer-map-one.png" className="mt-5" />
                            </div>
                        </div>
                    </div>
                </div>
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
