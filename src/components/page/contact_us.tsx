import React from 'react';
import {
  TiSocialFacebook,
  TiSocialGooglePlus,
  TiSocialLinkedin,
  TiSocialTwitter,
} from 'react-icons/ti';
import '../../app/css/contact_us.css';

const Contact_us = () => {
  return (
    <section className="contact_us_area w-full">
      <div className="contact_us max-w-[270px] md:px-0 sm:max-w-[420px] md:max-w-[720px] lg:max-w-[1200px] mx-auto">
        <div className="contact_us__row grid grid-cols-1 md:grid-cols-4 gap-6 bg-[#39c5fa] text-white px-[20px] md:px-[50px] sm:justify-center py-6 md:h-auto items-center font-Lora text-[15px] font-thin">
          <div className="contact_us__col">
            <p className="uppercase">Call Us</p>
            <span>123 456 7890</span>
          </div>
          <div className="contact_us__col">
            <p className="uppercase">Email us</p>
            <span>info@hotelbooking.com</span>
          </div>
          <div className="contact_us__col relative">
            <input
              type="text"
              placeholder="Enter ID for News Letter"
              className="border-b-[1px] outline-none border-[#fff] bg-transparent w-full pb-2 placeholder:text-white uppercase py-2"
            />
            <a
              href="#"
              className="p-[5px] bg-contact absolute hover:bg-white hover:text-[#39c5fa] right-[0.5%]"
            >
              Go
            </a>
          </div>
          <div className="contact_us__col flex justify-start ">
            <div className="contact_us__icon flex text-[24px] space-x-4">
              <a href="#">
                <TiSocialFacebook className="hover:text-black" />
              </a>
              <a href="#">
                <TiSocialTwitter className="hover:text-black" />
              </a>
              <a href="#">
                <TiSocialGooglePlus className="hover:text-black" />
              </a>
              <a href="#">
                <TiSocialLinkedin className="hover:text-black" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact_us;
