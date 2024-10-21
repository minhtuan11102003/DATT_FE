import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { TiSocialGooglePlus } from "react-icons/ti";


  
   function OurStaffComponent() {
    return (
//         <div className='w-full '>
//             <div className='relative w-full h-[313px]'>
//                 <img src="./images/banner2.jpg" alt="about-us" className='w-full h-full object-cover' />
//                 <div className='absolute inset-0 flex flex-col items-center justify-center'>
//                     <h2 className='text-white text-4xl mt-9' style={{ textShadow: '0 0 20px black' }}>OUR STAFF</h2>
//                     <img src="./images/bonus.png" alt="Additional" className='mt-2 h-auto' />
//                     <div className="absolute w-[215px] h-[272px] top-0 right-80">
//                         <img
//                             src="./images/sale.png"
//                             alt=""
//                             className="w-full h-full"
//                         />
//                     </div>
//                 </div>
//             </div>
      
      
//   <div className='w-full h-[1000px]'>

//   <div className='flex flex-col justify-center items-center w-full mt-20'>
  
//   <div className='w-[1140px] mt-20'>
//                     <h5 className='text-xl text-[#131e2a] mb-9'>OUR STAFF</h5>
//                 </div>
//   <div className='w-[1170px] grid grid-cols-4 gap-2 mb-7'>
//                     <figure className="figure-hover relative group"> {/* Thêm lớp group */}
//                         <div className="mb-[28px]">
//                             <a>
//                                 <img
//                                     src="./images/about-us-staff-one.jpg"
//                                     width={"100%"}
//                                     alt="room-eight"
//                                 />
//                             </a>
//                         </div>
//                         <div className="bounch-hover p-[13px] opacity-0 group-hover:opacity-100 bg-repeat h-[287px] w-full text-left top-0 left-0 bottom-0 right-0 absolute transition-opacity duration-700" style={{ backgroundColor: 'rgba(254, 109, 109, 0.8)' }}>
//                             <div className="p-[22px] text-[#FFF]">
//                                 <h6 className="font-[18px] leading-5">DOHN DOE</h6>
//                                 <span className='text-[14px]'>Hotel Manager</span>
//                                 <p className="text-[19px] mt-[15px]">
//                                     Semper ac dolor vitae msan. Cras interdum hendreritnia Phasellus accumsan rna.
//                                 </p>
//                                 <div className="social-icons mt-4 flex space-x-4">
//                                     <a href="#" className="text-[#FFF] hover:text-[#fe6d6d]">
//                                         <FaFacebookF className="h-5 w-5" />
//                                     </a>
//                                     <a href="#" className="text-[#FFF] hover:text-[#fe6d6d]">
//                                         <FaTwitter className="h-5 w-5" />
//                                     </a>
//                                     <a href="#" className="text-[#FFF] hover:text-[#fe6d6d]">
//                                         <TiSocialGooglePlus className="h-6 w-6" />
//                                     </a>
//                                 </div>
//                             </div>
//                         </div>
//                     </figure>
//                     <figure className="figure-hover relative group"> {/* Thêm lớp group */}
//                         <div className="mb-[28px]">
//                             <a>
//                                 <img
//                                     src="./images/about-us-staff-two.jpg"
//                                     width={"100%"}
//                                     alt="room-eight"
//                                 />
//                             </a>
//                         </div>
//                         <div className="bounch-hover p-[13px] opacity-0 group-hover:opacity-100 bg-repeat h-[287px] w-full text-left top-0 left-0 bottom-0 right-0 absolute transition-opacity duration-700" style={{ backgroundColor: 'rgba(254, 109, 109, 0.8)' }}>
//                             <div className="p-[22px] text-[#FFF]">
//                                 <h6 className="font-[18px] leading-5">DOHN DOE</h6>
//                                 <span className='text-[14px]'>Hotel Manager</span>
//                                 <p className="text-[19px] mt-[15px]">
//                                     Semper ac dolor vitae msan. Cras interdum hendreritnia Phasellus accumsan rna.
//                                 </p>
//                                 <div className="social-icons mt-4 flex space-x-4">
//                                     <a href="#" className="text-[#FFF] hover:text-[#fe6d6d]">
//                                         <FaFacebookF className="h-5 w-5" />
//                                     </a>
//                                     <a href="#" className="text-[#FFF] hover:text-[#fe6d6d]">
//                                         <FaTwitter className="h-5 w-5" />
//                                     </a>
//                                     <a href="#" className="text-[#FFF] hover:text-[#fe6d6d]">
//                                         <TiSocialGooglePlus className="h-6 w-6" />
//                                     </a>
//                                 </div>
//                             </div>
//                         </div>
//                     </figure>
//                     <figure className="figure-hover relative group"> {/* Thêm lớp group */}
//                         <div className="mb-[28px]">
//                             <a>
//                                 <img
//                                     src="./images/about-us-staff-three.jpg"
//                                     width={"100%"}
//                                     alt="room-eight"
//                                 />
//                             </a>
//                         </div>
//                         <div className="bounch-hover p-[13px] opacity-0 group-hover:opacity-100 bg-repeat h-[287px] w-full text-left top-0 left-0 bottom-0 right-0 absolute transition-opacity duration-700" style={{ backgroundColor: 'rgba(254, 109, 109, 0.8)' }}>
//                             <div className="p-[22px] text-[#FFF]">
//                                 <h6 className="font-[18px] leading-5">DOHN DOE</h6>
//                                 <span className='text-[14px]'>Hotel Manager</span>
//                                 <p className="text-[19px] mt-[15px]">
//                                     Semper ac dolor vitae msan. Cras interdum hendreritnia Phasellus accumsan rna.
//                                 </p>
//                                 <div className="social-icons mt-4 flex space-x-4">
//                                     <a href="#" className="text-[#FFF] hover:text-[#fe6d6d]">
//                                         <FaFacebookF className="h-5 w-5" />
//                                     </a>
//                                     <a href="#" className="text-[#FFF] hover:text-[#fe6d6d]">
//                                         <FaTwitter className="h-5 w-5" />
//                                     </a>
//                                     <a href="#" className="text-[#FFF] hover:text-[#fe6d6d]">
//                                         <TiSocialGooglePlus className="h-6 w-6" />
//                                     </a>
//                                 </div>
//                             </div>
//                         </div>
//                     </figure>
//                     <figure className="figure-hover relative group"> {/* Thêm lớp group */}
//                         <div className="mb-[28px]">
//                             <a>
//                                 <img
//                                     src="./images/about-us-staff-four.jpg"
//                                     width={"100%"}
//                                     alt="room-eight"
//                                 />
//                             </a>
//                         </div>
//                         <div className="bounch-hover p-[13px] opacity-0 group-hover:opacity-100 bg-repeat h-[287px] w-full text-left top-0 left-0 bottom-0 right-0 absolute transition-opacity duration-700" style={{ backgroundColor: 'rgba(254, 109, 109, 0.8)' }}>
//                             <div className="p-[22px] text-[#FFF]">
//                                 <h6 className="font-[18px] leading-5">DOHN DOE</h6>
//                                 <span className='text-[14px]'>Hotel Manager</span>
//                                 <p className="text-[19px] mt-[15px]">
//                                     Semper ac dolor vitae msan. Cras interdum hendreritnia Phasellus accumsan rna.
//                                 </p>
//                                 <div className="social-icons mt-4 flex space-x-4">
//                                     <a href="#" className="text-[#FFF] hover:text-[#fe6d6d]">
//                                         <FaFacebookF className="h-5 w-5" />
//                                     </a>
//                                     <a href="#" className="text-[#FFF] hover:text-[#fe6d6d]">
//                                         <FaTwitter className="h-5 w-5" />
//                                     </a>
//                                     <a href="#" className="text-[#FFF] hover:text-[#fe6d6d]">
//                                         <TiSocialGooglePlus className="h-6 w-6" />
//                                     </a>
//                                 </div>
//                             </div>
//                         </div>
//                     </figure>
//                     <figure className="figure-hover relative group"> {/* Thêm lớp group */}
//                         <div className="mb-[28px]">
//                             <a>
//                                 <img
//                                     src="./images/about-us-staff-four.jpg"
//                                     width={"100%"}
//                                     alt="room-eight"
//                                 />
//                             </a>
//                         </div>
//                         <div className="bounch-hover p-[13px] opacity-0 group-hover:opacity-100 bg-repeat h-[287px] w-full text-left top-0 left-0 bottom-0 right-0 absolute transition-opacity duration-700" style={{ backgroundColor: 'rgba(254, 109, 109, 0.8)' }}>
//                             <div className="p-[22px] text-[#FFF]">
//                                 <h6 className="font-[18px] leading-5">DOHN DOE</h6>
//                                 <span className='text-[14px]'>Hotel Manager</span>
//                                 <p className="text-[19px] mt-[15px]">
//                                     Semper ac dolor vitae msan. Cras interdum hendreritnia Phasellus accumsan rna.
//                                 </p>
//                                 <div className="social-icons mt-4 flex space-x-4">
//                                     <a href="#" className="text-[#FFF] hover:text-[#fe6d6d]">
//                                         <FaFacebookF className="h-5 w-5" />
//                                     </a>
//                                     <a href="#" className="text-[#FFF] hover:text-[#fe6d6d]">
//                                         <FaTwitter className="h-5 w-5" />
//                                     </a>
//                                     <a href="#" className="text-[#FFF] hover:text-[#fe6d6d]">
//                                         <TiSocialGooglePlus className="h-6 w-6" />
//                                     </a>
//                                 </div>
//                             </div>
//                         </div>
//                     </figure>
//                     <figure className="figure-hover relative group"> {/* Thêm lớp group */}
//                         <div className="mb-[28px]">
//                             <a>
//                                 <img
//                                     src="./images/about-us-staff-four.jpg"
//                                     width={"100%"}
//                                     alt="room-eight"
//                                 />
//                             </a>
//                         </div>
//                         <div className="bounch-hover p-[13px] opacity-0 group-hover:opacity-100 bg-repeat h-[287px] w-full text-left top-0 left-0 bottom-0 right-0 absolute transition-opacity duration-700" style={{ backgroundColor: 'rgba(254, 109, 109, 0.8)' }}>
//                             <div className="p-[22px] text-[#FFF]">
//                                 <h6 className="font-[18px] leading-5">DOHN DOE</h6>
//                                 <span className='text-[14px]'>Hotel Manager</span>
//                                 <p className="text-[19px] mt-[15px]">
//                                     Semper ac dolor vitae msan. Cras interdum hendreritnia Phasellus accumsan rna.
//                                 </p>
//                                 <div className="social-icons mt-4 flex space-x-4">
//                                     <a href="#" className="text-[#FFF] hover:text-[#fe6d6d]">
//                                         <FaFacebookF className="h-5 w-5" />
//                                     </a>
//                                     <a href="#" className="text-[#FFF] hover:text-[#fe6d6d]">
//                                         <FaTwitter className="h-5 w-5" />
//                                     </a>
//                                     <a href="#" className="text-[#FFF] hover:text-[#fe6d6d]">
//                                         <TiSocialGooglePlus className="h-6 w-6" />
//                                     </a>
//                                 </div>
//                             </div>
//                         </div>
//                     </figure>
//                     <figure className="figure-hover relative group"> {/* Thêm lớp group */}
//                         <div className="mb-[28px]">
//                             <a>
//                                 <img
//                                     src="./images/about-us-staff-four.jpg"
//                                     width={"100%"}
//                                     alt="room-eight"
//                                 />
//                             </a>
//                         </div>
//                         <div className="bounch-hover p-[13px] opacity-0 group-hover:opacity-100 bg-repeat h-[287px] w-full text-left top-0 left-0 bottom-0 right-0 absolute transition-opacity duration-700" style={{ backgroundColor: 'rgba(254, 109, 109, 0.8)' }}>
//                             <div className="p-[22px] text-[#FFF]">
//                                 <h6 className="font-[18px] leading-5">DOHN DOE</h6>
//                                 <span className='text-[14px]'>Hotel Manager</span>
//                                 <p className="text-[19px] mt-[15px]">
//                                     Semper ac dolor vitae msan. Cras interdum hendreritnia Phasellus accumsan rna.
//                                 </p>
//                                 <div className="social-icons mt-4 flex space-x-4">
//                                     <a href="#" className="text-[#FFF] hover:text-[#fe6d6d]">
//                                         <FaFacebookF className="h-5 w-5" />
//                                     </a>
//                                     <a href="#" className="text-[#FFF] hover:text-[#fe6d6d]">
//                                         <FaTwitter className="h-5 w-5" />
//                                     </a>
//                                     <a href="#" className="text-[#FFF] hover:text-[#fe6d6d]">
//                                         <TiSocialGooglePlus className="h-6 w-6" />
//                                     </a>
//                                 </div>
//                             </div>
//                         </div>
//                     </figure>
//                     <figure className="figure-hover relative group"> {/* Thêm lớp group */}
//                         <div className="mb-[28px]">
//                             <a>
//                                 <img
//                                     src="./images/about-us-staff-four.jpg"
//                                     width={"100%"}
//                                     alt="room-eight"
//                                 />
//                             </a>
//                         </div>
//                         <div className="bounch-hover p-[13px] opacity-0 group-hover:opacity-100 bg-repeat h-[287px] w-full text-left top-0 left-0 bottom-0 right-0 absolute transition-opacity duration-700" style={{ backgroundColor: 'rgba(254, 109, 109, 0.8)' }}>
//                             <div className="p-[22px] text-[#FFF]">
//                                 <h6 className="font-[18px] leading-5">DOHN DOE</h6>
//                                 <span className='text-[14px]'>Hotel Manager</span>
//                                 <p className="text-[19px] mt-[15px]">
//                                     Semper ac dolor vitae msan. Cras interdum hendreritnia Phasellus accumsan rna.
//                                 </p>
//                                 <div className="social-icons mt-4 flex space-x-4">
//                                     <a href="#" className="text-[#FFF] hover:text-[#fe6d6d]">
//                                         <FaFacebookF className="h-5 w-5" />
//                                     </a>
//                                     <a href="#" className="text-[#FFF] hover:text-[#fe6d6d]">
//                                         <FaTwitter className="h-5 w-5" />
//                                     </a>
//                                     <a href="#" className="text-[#FFF] hover:text-[#fe6d6d]">
//                                         <TiSocialGooglePlus className="h-6 w-6" />
//                                     </a>
//                                 </div>
//                             </div>
//                         </div>
//                     </figure>
//                 </div>

//       </div>
//       </div>
//       </div>

<div className='w-full'>
    <div className='relative w-full h-[313px] sm:h-[250px]'>
        <img src="./images/banner2.jpg" alt="about-us" className='w-full h-full object-cover' />
        <div className='absolute inset-0 flex flex-col items-center justify-center'>
            <h2 className='text-white text-4xl sm:text-2xl mt-9' style={{ textShadow: '0 0 20px black' }}>OUR HOTEL STAFF</h2>
            <img src="./images/bonus.png" alt="Additional" className='mt-2 h-auto w-[80px] sm:w-[60px]' />
            
        </div>
    </div>

    <div className='w-full h-auto py-10'> 
        <div className='flex flex-col justify-center items-center w-full mt-10'>
            <div className='w-full px-4 text-center'>
                <h5 className='text-2xl sm:text-xl text-[#131e2a] mb-9'>OUR HOTEL STAFF</h5>
            </div>
            <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 sm:w-[480px] w-full px-4'>
            <figure className="figure-hover relative group"> {/* Thêm lớp group */}
                         <div className="mb-[28px]">
                             <a>
                                 <img
                                    src="./images/about-us-staff-four.jpg"
                                    width={"100%"}
                                    alt="room-eight"
                                />
                            </a>
                        </div>
                        <div className="bounch-hover p-[13px] opacity-0 group-hover:opacity-100 bg-repeat h-[447px] w-full text-left top-0 left-0 bottom-0 right-0 absolute transition-opacity duration-700" style={{ backgroundColor: 'rgba(254, 109, 109, 0.8)' }}>
                            <div className="p-[22px] text-[#FFF]">
                                <h6 className="font-[18px] leading-5">DOHN DOE</h6>
                                <span className='text-[14px]'>Hotel Manager</span>
                                <p className="text-[19px] mt-[15px]">
                                    Semper ac dolor vitae msan. Cras interdum hendreritnia Phasellus accumsan rna.
                                </p>
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
                <figure className="figure-hover relative group"> {/* Thêm lớp group */}
                         <div className="mb-[28px]">
                             <a>
                                 <img
                                    src="./images/about-us-staff-four.jpg"
                                    width={"100%"}
                                    alt="room-eight"
                                />
                            </a>
                        </div>
                        <div className="bounch-hover p-[13px] opacity-0 group-hover:opacity-100 bg-repeat h-[447px] w-full text-left top-0 left-0 bottom-0 right-0 absolute transition-opacity duration-700" style={{ backgroundColor: 'rgba(254, 109, 109, 0.8)' }}>
                            <div className="p-[22px] text-[#FFF]">
                                <h6 className="font-[18px] leading-5">DOHN DOE</h6>
                                <span className='text-[14px]'>Hotel Manager</span>
                                <p className="text-[19px] mt-[15px]">
                                    Semper ac dolor vitae msan. Cras interdum hendreritnia Phasellus accumsan rna.
                                </p>
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
                <figure className="figure-hover relative group"> {/* Thêm lớp group */}
                         <div className="mb-[28px]">
                             <a>
                                 <img
                                    src="./images/about-us-staff-four.jpg"
                                    width={"100%"}
                                    alt="room-eight"
                                />
                            </a>
                        </div>
                        <div className="bounch-hover p-[13px] opacity-0 group-hover:opacity-100 bg-repeat h-[447px] w-full text-left top-0 left-0 bottom-0 right-0 absolute transition-opacity duration-700" style={{ backgroundColor: 'rgba(254, 109, 109, 0.8)' }}>
                            <div className="p-[22px] text-[#FFF]">
                                <h6 className="font-[18px] leading-5">DOHN DOE</h6>
                                <span className='text-[14px]'>Hotel Manager</span>
                                <p className="text-[19px] mt-[15px]">
                                    Semper ac dolor vitae msan. Cras interdum hendreritnia Phasellus accumsan rna.
                                </p>
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
                    <figure className="figure-hover relative group"> {/* Thêm lớp group */}
                         <div className="mb-[28px]">
                             <a>
                                 <img
                                    src="./images/about-us-staff-four.jpg"
                                    width={"100%"}
                                    alt="room-eight"
                                />
                            </a>
                        </div>
                        <div className="bounch-hover p-[13px] opacity-0 group-hover:opacity-100 bg-repeat h-[447px] w-full text-left top-0 left-0 bottom-0 right-0 absolute transition-opacity duration-700" style={{ backgroundColor: 'rgba(254, 109, 109, 0.8)' }}>
                            <div className="p-[22px] text-[#FFF]">
                                <h6 className="font-[18px] leading-5">DOHN DOE</h6>
                                <span className='text-[14px]'>Hotel Manager</span>
                                <p className="text-[19px] mt-[15px]">
                                    Semper ac dolor vitae msan. Cras interdum hendreritnia Phasellus accumsan rna.
                                </p>
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
                    <figure className="figure-hover relative group"> {/* Thêm lớp group */}
                         <div className="mb-[28px]">
                             <a>
                                 <img
                                    src="./images/about-us-staff-four.jpg"
                                    width={"100%"}
                                    alt="room-eight"
                                />
                            </a>
                        </div>
                        <div className="bounch-hover p-[13px] opacity-0 group-hover:opacity-100 bg-repeat h-[447px] w-full text-left top-0 left-0 bottom-0 right-0 absolute transition-opacity duration-700" style={{ backgroundColor: 'rgba(254, 109, 109, 0.8)' }}>
                            <div className="p-[22px] text-[#FFF]">
                                <h6 className="font-[18px] leading-5">DOHN DOE</h6>
                                <span className='text-[14px]'>Hotel Manager</span>
                                <p className="text-[19px] mt-[15px]">
                                    Semper ac dolor vitae msan. Cras interdum hendreritnia Phasellus accumsan rna.
                                </p>
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
                    <figure className="figure-hover relative group"> {/* Thêm lớp group */}
                         <div className="mb-[28px]">
                             <a>
                                 <img
                                    src="./images/about-us-staff-four.jpg"
                                    width={"100%"}
                                    alt="room-eight"
                                />
                            </a>
                        </div>
                        <div className="bounch-hover p-[13px] opacity-0 group-hover:opacity-100 bg-repeat h-[447px] w-full text-left top-0 left-0 bottom-0 right-0 absolute transition-opacity duration-700" style={{ backgroundColor: 'rgba(254, 109, 109, 0.8)' }}>
                            <div className="p-[22px] text-[#FFF]">
                                <h6 className="font-[18px] leading-5">DOHN DOE</h6>
                                <span className='text-[14px]'>Hotel Manager</span>
                                <p className="text-[19px] mt-[15px]">
                                    Semper ac dolor vitae msan. Cras interdum hendreritnia Phasellus accumsan rna.
                                </p>
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
                    <figure className="figure-hover relative group"> {/* Thêm lớp group */}
                         <div className="mb-[28px]">
                             <a>
                                 <img
                                    src="./images/about-us-staff-four.jpg"
                                    width={"100%"}
                                    alt="room-eight"
                                />
                            </a>
                        </div>
                        <div className="bounch-hover p-[13px] opacity-0 group-hover:opacity-100 bg-repeat h-[447px] w-full text-left top-0 left-0 bottom-0 right-0 absolute transition-opacity duration-700" style={{ backgroundColor: 'rgba(254, 109, 109, 0.8)' }}>
                            <div className="p-[22px] text-[#FFF]">
                                <h6 className="font-[18px] leading-5">DOHN DOE</h6>
                                <span className='text-[14px]'>Hotel Manager</span>
                                <p className="text-[19px] mt-[15px]">
                                    Semper ac dolor vitae msan. Cras interdum hendreritnia Phasellus accumsan rna.
                                </p>
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
</div>




    );
  }
  export default OurStaffComponent
  
