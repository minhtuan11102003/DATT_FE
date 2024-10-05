import { Facebook, Instagram, Linkedin, Mail, Twitter } from 'lucide-react';
import React from 'react';

const Contact = () => {
  return (
    <div className="flex justify-center items-center">
      <section className="w-[1070px] h-[95px]  justify-center py-7 px-9 bg-[#3AC4FA]">
        <div className="w-full h-[95px] mx-auto ">
          <div className="h-1/2 flex justify-center items-center gap-4">
            {/*Section1 */}
            <div className="w-[132.5px] px-4 lg:w-1/4 ">
              <div className=" text-left ">
                <h2 className="text-lg text-white">Call Us</h2>
                <p className="text-lg text-white">123 456 7890</p>
              </div>
            </div>

            {/*Section 2*/}
            <div className="w-[132.5px] lg:w-1/4 px-4">
              <div className="text-left">
                <h6 className="text-lg text-white">Email Us</h6>
                <p className="text-lg text-white">info@hotelbooking.com</p>
              </div>
            </div>

            {/*Section 3*/}
            <div className="w-full lg:w-1/4 px-4">
              <div className="text-left relative">
                <input
                  type="text"
                  placeholder="Enter ID for Newsletter"
                  className=" bg-transparent outline-none border-b rounded p-2 w-full  "
                />
                <a
                  href="#"
                  className="absolute right-0 bottom-2 bg-[#2FB3E7] text-white py-2 px-4 rounded hover:bg-white hover:text-blue-500"
                >
                  Go
                </a>
                <hr></hr>
              </div>
            </div>

            {/*Section 4*/}
            <div className="w-[189px] h-full text-white flex items-center gap-4 px-4">
              <Facebook/>
              <Instagram/>
              <Twitter/>
              <Linkedin/>
              <Mail/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
