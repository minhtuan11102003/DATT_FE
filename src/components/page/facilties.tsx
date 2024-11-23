'use client'
import { useState } from 'react';
import '@/app/globals.css';
export default function Facilities() {
  const [activeTab, setActiveTab] = useState('restaurant');
  const hienTab = (tabName: string) => {
    setActiveTab(tabName);
  };
  return (
    <>
      <section className="relative hotel_facilities_area w-full h-[100vh] mb-[120px] md:h-[80vh] lg:h-[100vh]">
        <img
          className="bg-cover w-full h-[100%]"
          src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/restaurant/hotel-booking-html-template-for-hotels-2023-11-27-05-00-38-utc/hotel-booking/img/hotel-facilities-bg.jpg"
          alt=""
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mx-auto w-4/5">
          <div className="py-[20px] hotel_facilities overflow-auto max-h-[80vh]">
            <div className="section_title">
              <h3
                className="text-3xl text-center"
                style={{ fontFamily: 'Playfair Display, serif;' }}
              >
                HOTEL FACILITIES
              </h3>
              <span className="w-full">
                <img className="mx-auto py-7" src="/images/nice-title.png" alt="" />
              </span>
            </div>
            <div className="hotel_facilities_content">
              <div role="tabpanel">
                <ul className="nav nav-tabs flex w-[full] lg:w-[57%] md:w-[60%] h-[100px] mx-auto bg-[#EEEFED]" role="tablist">
                  <li
                    role="presentation"
                    className={`w-1/5 text-center hover:bg-white ${activeTab === 'restaurant' ? 'bg-white' : ''}`}
                    id="li_restaurant"
                    onClick={() => hienTab('restaurant')}
                  >
                    <a className="p-2 hover:cursor-pointer">
                      <img className="mx-auto" src="/images/home-facilities-icon-eleven.png" alt="restaurant" />
                      <span className={`lg:text-base text-xs uppercase text-center hover:text-[#16b4ef] ${activeTab === 'restaurant' ? 'text-[#16b4ef]' : ''}`}>restaurant</span>
                    </a>
                  </li>
                  <li
                    role="presentation"
                    className={`w-1/5 text-center hover:bg-white ${activeTab === 'sportsclub' ? 'bg-white' : ''}`}
                    id="li_sportsclub"
                    onClick={() => hienTab('sportsclub')}
                  >
                    <a className="p-2 hover:cursor-pointer">
                      <img className="mx-auto" src="/images/home-facilities-icon-seven.png" alt="sports-club" />
                      <span className={`lg:text-base text-xs uppercase text-center hover:text-[#16b4ef] ${activeTab === 'sportsclub' ? 'text-[#16b4ef]' : ''}`}>sports-club</span>
                    </a>
                  </li>
                  <li
                    role="presentation"
                    className={`w-1/5 text-center hover:bg-white ${activeTab === 'pickup' ? 'bg-white' : ''}`}
                    id="li_pickup"
                    onClick={() => hienTab('pickup')}
                  >
                    <a className="p-2 hover:cursor-pointer">
                      <img className="mx-auto" src="/images/home-facilities-icon-eight.png" alt="pick-up" />
                      <span className={`lg:text-base text-xs uppercase text-center hover:text-[#16b4ef] ${activeTab === 'pickup' ? 'text-[#16b4ef]' : ''}`}>pick-up</span>
                    </a>
                  </li>
                  <li
                    role="presentation"
                    className={`w-1/5 text-center hover:bg-white ${activeTab === 'bar' ? 'bg-white' : ''}`}
                    id="li_bar"
                    onClick={() => hienTab('bar')}
                  >
                    <a className="p-2 hover:cursor-pointer">
                      <img className="mx-auto" src="/images/home-facilities-icon-nine.png" alt="bar" />
                      <span className={`lg:text-base text-xs uppercase text-center hover:text-[#16b4ef] ${activeTab === 'bar' ? 'text-[#16b4ef]' : ''}`}>bar</span>
                    </a>
                  </li>
                  <li
                    role="presentation"
                    className={`w-1/5 text-center hover:bg-white ${activeTab === 'gym' ? 'bg-white' : ''}`}
                    id="li_gym"
                    onClick={() => hienTab('gym')}
                  >
                    <a className="p-2 hover:cursor-pointer">
                      <img className="mx-auto" src="/images/home-facilities-icon-ten.png" alt="gym" />
                      <span className={`lg:text-base text-xs uppercase text-center hover:text-[#16b4ef] ${activeTab === 'gym' ? 'text-[#16b4ef]' : ''}`}>gym</span>
                    </a>
                  </li>
                </ul>

                <div className="tab-content w-full bg-slate-100 p-[50px]">
                  {activeTab === 'restaurant' && (
                    <div role="tabpanel" className="tab-pane active" id="restaurant">
                      <div className="single-tab-content">
                        <div className="row lg:flex md:flex">
                          <div className="lg:w-2/5 lg:px-4 md:w-2/5">
                            <div className="single-tab-image">
                              <a href="#">
                                <img className="w-full" src="/images/hotel-facility-one.jpg" alt="" />
                              </a>
                            </div>
                          </div>
                          <div className="lg:w-3/5 md:w-3/5 lg:mx-5 md:mx-5 lg:x-4">
                            <div className="single-tab-details">
                              <h6 className="my-3.5 uppercase text-[#424c55] md:my-0 md:mb-2">The world class</h6>
                              <h3
                                className="lg:mb-7 mb-3 text-[20px] lg:text-[30px] uppercase"
                                style={{ fontFamily: 'Playfair Display, serif;' }}
                              >
                                Restaurant &amp; Banquets
                              </h3>
                              <p className="mb-2 leading-6 lg:mb-5 mt-0 text-[#666666]">
                                Semper ac dolor vitae accumsan. Cras interdum hendrerit lacinia. Phasellus accumsan urna
                                vitae molestie interdum. Nam sed placerat libero, non eleifend dolor.
                              </p>
                              <p className="mb-2 leading-6 lg:mb-5 mt-0 text-[#666666]">
                                Cras ac justo et augue suscipit euismod vel eget lectus. Proin vehicula nunc arcu,
                                pulvinar accumsan nulla porta vel. Vivamus malesuada vitae sem ac pellentesque.
                              </p>
                              <div className="our_services uppercase  text-[#16b4ef] mt-[3px]">
                                <a href="#" className="margin-right-33 mr-8 block lg:inline md:inline" >
                                  Service Hours; 19.00-22:00
                                </a>
                                <a href="#">service charge : $15</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'sportsclub' && (
                    <div role="tabpanel" className="tab-pane" id="sportsclub">
                      <div className="single-tab-content">
                        <div className="row lg:flex md:flex">
                          <div className="lg:w-2/5 lg:px-4 md:w-2/5">
                            <div className="single-tab-image">
                              <a href="#">
                                <img className="w-full" src="/images/hotel-facility-one.jpg" alt="" />
                              </a>
                            </div>
                          </div>
                          <div className="lg:w-3/5 md:w-3/5 lg:mx-5 md:mx-5 lg:x-4">
                            <div className="single-tab-details">
                              <h6 className="my-3.5 uppercase text-[#424c55] md:my-0 md:mb-2">The world class</h6>
                              <h3
                                className="lg:mb-7 mb-3 text-[20px] lg:text-[30px] uppercase"
                                style={{ fontFamily: 'Playfair Display, serif;' }}
                              >
                                sports-club
                              </h3>
                              <p className="mb-2 leading-6 lg:mb-5 mt-0 text-[#666666]">
                                Semper ac dolor vitae accumsan. Cras interdum hendrerit lacinia. Phasellus accumsan urna
                                vitae molestie interdum. Nam sed placerat libero, non eleifend dolor.
                              </p>
                              <p className="mb-2 leading-6 lg:mb-5 mt-0 text-[#666666]">
                                Cras ac justo et augue suscipit euismod vel eget lectus. Proin vehicula nunc arcu,
                                pulvinar accumsan nulla porta vel. Vivamus malesuada vitae sem ac pellentesque.
                              </p>
                              <div className="our_services uppercase text-[#16b4ef] mt-[3px]">
                                <a href="#" className="margin-right-33 mr-8 block lg:inline md:inline">
                                  Service Hours; 19.00-22:00
                                </a>
                                <a href="#">service charge : $15</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'pickup' && (
                    <div role="tabpanel" className="tab-pane" id="pickup">
                      <div className="single-tab-content">
                        <div className="row lg:flex md:flex">
                          <div className="lg:w-2/5 lg:px-4 md:w-2/5">
                            <div className="single-tab-image">
                              <a href="#">
                                <img className="w-full" src="/images/hotel-facility-one.jpg" alt="" />
                              </a>
                            </div>
                          </div>
                          <div className="lg:w-3/5 md:w-3/5 lg:mx-5 md:mx-5 lg:x-4">
                            <div className="single-tab-details">
                              <h6 className="my-3.5 uppercase text-[#424c55] md:my-0 md:mb-2">The world class</h6>
                              <h3
                                className="lg:mb-7 mb-3 text-[20px] lg:text-[30px] uppercase" style={{ fontFamily: 'Playfair Display, serif;' }}>
                                Pick up
                              </h3>
                              <p className="mb-2 leading-6 lg:mb-5 mt-0 text-[#666666]">
                                Semper ac dolor vitae accumsan. Cras interdum hendrerit lacinia. Phasellus accumsan urna
                                vitae molestie interdum. Nam sed placerat libero, non eleifend dolor.
                              </p>
                              <p className="mb-2 leading-6 lg:mb-5 mt-0 text-[#666666]">
                                Cras ac justo et augue suscipit euismod vel eget lectus. Proin vehicula nunc arcu,
                                pulvinar accumsan nulla porta vel. Vivamus malesuada vitae sem ac pellentesque.
                              </p>
                              <div className="our_services uppercase text-[#16b4ef] mt-[3px]">
                                <a href="#" className="margin-right-33 mr-8 block lg:inline md:inline">
                                  Service Hours; 19.00-22:00
                                </a>
                                <a href="#">service charge : $15</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'bar' && (
                    <div role="tabpanel" className="tab-pane" id="bar">
                      <div className="single-tab-content">
                        <div className="row lg:flex md:flex">
                          <div className="lg:w-2/5 lg:px-4 md:w-2/5">
                            <div className="single-tab-image">
                              <a href="#">
                                <img className="w-full" src="/images/hotel-facility-one.jpg" alt="" />
                              </a>
                            </div>
                          </div>
                          <div className="lg:w-3/5 md:w-3/5 lg:mx-5 md:mx-5 lg:x-4">
                            <div className="single-tab-details">
                              <h6 className="my-3.5 uppercase text-[#424c55] md:my-0 md:mb-2">The world class</h6>
                              <h3
                                className="lg:mb-7 mb-3 text-[20px] lg:text-[30px] uppercase"
                                style={{ fontFamily: 'Playfair Display, serif;' }}
                              >
                                Bar
                              </h3>
                              <p className="mb-2 leading-6 lg:mb-5 mt-0 text-[#666666]">
                                Semper ac dolor vitae accumsan. Cras interdum hendrerit lacinia. Phasellus accumsan urna
                                vitae molestie interdum. Nam sed placerat libero, non eleifend dolor.
                              </p>
                              <p className="mb-2 leading-6 lg:mb-5 mt-0 text-[#666666]">
                                Cras ac justo et augue suscipit euismod vel eget lectus. Proin vehicula nunc arcu,
                                pulvinar accumsan nulla porta vel. Vivamus malesuada vitae sem ac pellentesque.
                              </p>
                              <div className="our_services uppercase text-[#16b4ef] mt-[3px]">
                                <a href="#" className="margin-right-33 mr-8 block lg:inline md:inline">
                                  Service Hours; 19.00-22:00
                                </a>
                                <a href="#">service charge : $15</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'gym' && (
                    <div role="tabpanel" className="tab-pane" id="gym">
                      <div className="single-tab-content">
                        <div className="row lg:flex md:flex">
                          <div className="lg:w-2/5 lg:px-4 md:w-2/5">
                            <div className="single-tab-image">
                              <a href="#">
                                <img className="w-full" src="/images/hotel-facility-one.jpg" alt="" />
                              </a>
                            </div>
                          </div>
                          <div className="lg:w-3/5 md:w-3/5 lg:mx-5 md:mx-5 lg:x-4">
                            <div className="single-tab-details">
                              <h6 className="my-3.5 uppercase text-[#424c55] md:my-0 md:mb-2">The world class</h6>
                              <h3
                                className="lg:mb-7 mb-3 text-[20px] lg:text-[30px] uppercase"
                                style={{ fontFamily: 'Playfair Display, serif;' }}
                              >
                                Gym
                              </h3>
                              <p className="mb-2 leading-6 lg:mb-5 mt-0 text-[#666666]">
                                Semper ac dolor vitae accumsan. Cras interdum hendrerit lacinia. Phasellus accumsan urna
                                vitae molestie interdum. Nam sed placerat libero, non eleifend dolor.
                              </p>
                              <p className="mb-2 leading-6 lg:mb-5 mt-0 text-[#666666]">
                                Cras ac justo et augue suscipit euismod vel eget lectus. Proin vehicula nunc arcu,
                                pulvinar accumsan nulla porta vel. Vivamus malesuada vitae sem ac pellentesque.
                              </p>
                              <div className="our_services uppercase text-[#16b4ef] mt-[3px]">
                                <a href="#" className="margin-right-33 mr-8 block lg:inline md:inline">
                                  Service Hours; 19.00-22:00
                                </a>
                                <a href="#">service charge : $15</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
