'use client';
import React from 'react';
import { ChevronLeft, ChevronRight, Search } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import '../../app/css/gallery.css';

const GalleryPage = () => {
  const [dem, setDem] = useState<number>(0);
  const [isChuyenDong, setChuyenDong] = useState<boolean>(false);
  const allRef = useRef<HTMLAnchorElement>(null);

  let mangImg: { id: number; img: string }[] = [
    {
      id: 1,
      img: './images/Room/B1.jpg',
    },
    {
      id: 2,
      img: './images/Room/B2.jpg',
    },
    {
      id: 3,
      img: './images/Room/B3.jpg',
    },
    {
      id: 4,
      img: './images/Room/B4.jpg',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setChuyenDong(false);
      setDem(prevDem => (prevDem + 1) % mangImg.length);
    }, 4000);
    setChuyenDong(true);
    return () => clearInterval(interval);
  }, [dem]);
  useEffect(() => {
    if (allRef.current) {
      allRef.current.focus();
    }
  }, []);

  const upSetDem = () => {
    if (dem === mangImg.length - 1) {
      setDem(0);
    } else {
      setDem(prevDem => prevDem + 1);
    }
  };

  const downSetDem = () => {
    if (dem === 0) {
      setDem(mangImg.length - 1);
    } else {
      setDem(prevDem => prevDem - 1);
    }
  };

  const arrTitle: { id: number; title: string }[] = [
    { id: 2, title: 'DELUXE ROOM' },
    { id: 3, title: 'SINGLE BEDROOM' },
    { id: 4, title: 'DOUBLE BEDROOM' },
    { id: 5, title: 'CLASSIC ROOM' },
    { id: 6, title: 'EXE ROOM' },
    { id: 7, title: 'ROYAL ROOM' },
  ];

  const arrProducts: {
    id: number;
    title: string;
    categoryId: number;
    img: string;
  }[] = [
    {
      id: 1,
      categoryId: 2,
      title: 'SINGLE BEDROOM,DELUXE ROOM,ROYAL ROOM,CLASSIC ROOM',
      img: './images/Room/r1.jpg',
    },
    {
      id: 2,
      categoryId: 3,
      title: 'SINGLE BEDROOM,DELUXE ROOM,ROYAL ROOM',
      img: './images/Room/r2.jpg',
    },
    {
      id: 3,
      categoryId: 7,
      title: 'DOUBLE BEDROOM,DELUXE ROOM,ROYAL ROOM,EXE ROOM,CLASSIC ROOM',
      img: './images/Room/r3.jpg',
    },
    {
      id: 4,
      categoryId: 5,
      title: 'DELUXE ROOM,ROYAL ROOM,DOUBLE BEDROOM,EXE ROOM',
      img: './images/Room/r4.jpg',
    },
    {
      id: 5,
      categoryId: 6,
      title: 'SINGLE BEDROOM,DELUXE ROOM,CLASSIC ROOM',
      img: './images/Room/r5.jpg',
    },
    {
      id: 6,
      categoryId: 7,
      title: 'SINGLE BEDROOM,DELUXE ROOM',
      img: './images/Room/r6.jpg',
    },
    {
      id: 7,
      categoryId: 4,
      title: 'DOUBLE BEDROOM,DELUXE ROOM,EXE ROOM,CLASSIC ROOM',
      img: './images/Room/r7.jpg',
    },
    {
      id: 8,
      categoryId: 5,
      title: 'DOUBLE BEDROOM,DELUXE ROOM,EXE ROOM',
      img: './images/Room/r8.jpg',
    },
    {
      id: 9,
      categoryId: 2,
      title: 'DOUBLE BEDROOM,DELUXE ROOM,EXE ROOM',
      img: './images/Room/r5.jpg',
    },
    {
      id: 10,
      categoryId: 2,
      title: 'DOUBLE BEDROOM,DELUXE ROOM,EXE ROOM',
      img: './images/Room/r2.jpg',
    },
    {
      id: 11,
      categoryId: 2,
      title: 'DOUBLE BEDROOM,DELUXE ROOM,EXE ROOM',
      img: './images/Room/r4.jpg',
    },
    {
      id: 12,
      categoryId: 3,
      title: 'DOUBLE BEDROOM,DELUXE ROOM,EXE ROOM',
      img: './images/Room/r5.jpg',
    },
    {
      id: 13,
      categoryId: 3,
      title: 'DOUBLE BEDROOM,DELUXE ROOM,EXE ROOM',
      img: './images/Room/r6.jpg',
    },
    {
      id: 14,
      categoryId: 3,
      title: 'DOUBLE BEDROOM,DELUXE ROOM,EXE ROOM',
      img: './images/Room/r2.jpg',
    },
    {
      id: 15,
      categoryId: 4,
      title: 'DOUBLE BEDROOM,DELUXE ROOM,EXE ROOM',
      img: './images/Room/r3.jpg',
    },
    {
      id: 16,
      categoryId: 4,
      title: 'DOUBLE BEDROOM,DELUXE ROOM,EXE ROOM',
      img: './images/Room/r6.jpg',
    },
    {
      id: 17,
      categoryId: 4,
      title: 'DOUBLE BEDROOM,DELUXE ROOM,EXE ROOM',
      img: './images/Room/r4.jpg',
    },
    {
      id: 18,
      categoryId: 5,
      title: 'DOUBLE BEDROOM,DELUXE ROOM,EXE ROOM',
      img: './images/Room/r4.jpg',
    },
    {
      id: 19,
      categoryId: 5,
      title: 'DOUBLE BEDROOM,DELUXE ROOM,EXE ROOM',
      img: './images/Room/r8.jpg',
    },
    {
      id: 20,
      categoryId: 6,
      title: 'DOUBLE BEDROOM,DELUXE ROOM,EXE ROOM',
      img: './images/Room/r7.jpg',
    },
    {
      id: 21,
      categoryId: 6,
      title: 'DOUBLE BEDROOM,DELUXE ROOM,EXE ROOM',
      img: './images/Room/r6.jpg',
    },
    {
      id: 22,
      categoryId: 6,
      title: 'DOUBLE BEDROOM,DELUXE ROOM,EXE ROOM',
      img: './images/Room/r1.jpg',
    },
    {
      id: 23,
      categoryId: 7,
      title: 'DOUBLE BEDROOM,DELUXE ROOM,EXE ROOM',
      img: './images/Room/r2.jpg',
    },
    {
      id: 24,
      categoryId: 7,
      title: 'DOUBLE BEDROOM,DELUXE ROOM,EXE ROOM',
      img: './images/Room/r3.jpg',
    },
  ];

  const [idCheck, setIdCheck] = useState<number>(2);
  const [productId, setProductId] = useState<
    { id: number; title: string; categoryId: number; img: string }[]
  >(arrProducts.slice(0, 8));

  const getProductId = (id: number) => {
    const arrProductId = arrProducts.filter(item => item.categoryId == id);
    setProductId(arrProductId);
  };
  console.log(productId);

  const showAllProducts = () => {
    setProductId(arrProducts.slice(0, 8));
  };

  return (
    <div className="block">
      <section className="gallery__breadcrumb  mb-[60px]">
        <div className="gallery__banner bg-[url('/images/Room/bannerGallery.jpg')] bg-no-repeat relative bg-center min-h-[333px] bg-cover text-center">
          <div className="gallery__banner-title pt-[170px] pb-[58px]">
            <h2 className="uppercase text-[#fff] font-normal text-[35px] leading-[25px] pb-[40px] font-PlayfairDisplay relative after:absolute after:bg-[url('/images/icon-section/nice-title-breadcrumb.png')] bg-no-repeat after:bottom-[-30px] after:h-[50%] after:w-[103px] nice-title after:bg-no-repeat drop-shadow-[0_20px_20px_rgb(0,0,0)] md:text-[22px] lg:text-[44px] md:text-center">
              Gallery
            </h2>
          </div>
          <div className="absolute top-0 md:left-0 w-full left-[-11%]">
            <div className="gallery__banner-img container relative xl:w-[1170px] lg:w-[992px] md:w-[760px] w-[300px]">
              <div className="w-full">
                <img
                  src="/images/special-offer-yellow-main.png"
                  alt=""
                  className="md:max-w-full w-[150px] md:w-auto h-auto object-cover absolute top-0 md:right-0 special_offer_sub"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="menu-room flex justify-center mb-[40px]">
        <div className="max-w-[1140px] min-w-[400px] h-[80px] flex justify-start items-center">
          <div className="flex w-full justify-center items-center px-7">
            <div className="flex w-full justify-start  sm:p-2 sm:gap-2 sm:space-x-4  md:space-x-6  lg:space-x-6 xl:justify-center xl:space-x-8 items-center pl-7 gap-4 flex-wrap">
              <a
                href="#"
                ref={allRef}
                className="font-bold active:border-2 active:border-solid focus:outline-none focus:ring-2 focus:text-center focus:p-1 focus:ring-slate-500 ml-0 sm:ml-4"
                onClick={() => showAllProducts()}
              >
                ALL
              </a>
              {arrTitle.map(title => (
                <a
                  key={title.id}
                  href="#"
                  className="font-bold active:border-2 active:border-solid focus:outline-none focus:ring-2 focus:text-center focus:p-1 focus:ring-slate-500 "
                  onClick={() => getProductId(title.id)}
                >
                  {title.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="section-room flex justify-center items-center">
        <div className="w-[1170px] h-auto justify-center py-5 px-9">
          <div className="container">
            {/* Section Main Slider và Thumbnails */}
            <div className="flex flex-col lg:flex-row justify-between gap-4">
              {/* Main Slider */}
              <div className="w-full lg:w-8/12 h-auto mb-4 lg:mb-0">
                <div className="relative">
                  {/* Wrapper for slides */}
                  <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                      <img
                        src={`${mangImg[dem].img}`}
                        alt="Lỗi ảnh"
                        className={`chuyenDong ${
                          isChuyenDong ? 'animate-in' : 'animate-out'
                        } w-full h-full object-cover`}
                      />
                    </div>
                  </div>
                  {/* Controls */}
                  <a
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-600 hover:bg-blue-400 text-white p-1"
                    href="#gallery_main_slider"
                    role="button"
                    data-slide="prev"
                    onClick={() => {
                      setChuyenDong(true);
                      downSetDem();
                    }}
                  >
                    <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
                  </a>
                  <a
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-600 hover:bg-blue-400 text-white p-1"
                    href="#gallery_main_slider"
                    role="button"
                    data-slide="next"
                    onClick={() => {
                      setChuyenDong(true);
                      upSetDem();
                    }}
                  >
                    <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
                  </a>
                </div>
              </div>

              {/* Thumbnails */}
              <div className="Thumbnails w-full lg:w-4/12 flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-1  lg:grid-cols-1 xl:grid-cols-1 gap-4 h-full">
                  <div className="relative">
                    <a
                      href="./images/Room/r9.jpg"
                      data-uk-lightbox="{group:'group1'}"
                      title="Gallery"
                    >
                      <img
                        alt="thumbnail"
                        src="./images/Room/r9.jpg"
                        className="w-full h-[205px] object-cover"
                      />
                      <div className="absolute inset-0 h-[205px] bg-black opacity-0 hover:opacity-80">
                        <div className="absolute inset-0 h-[205px] bg-red-400 flex items-center justify-center hover:text-black">
                          <div className="bg-white rounded-full size-12 items-center justify-center flex">
                            <Search />
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="relative">
                    <a
                      href="img/gallery-five.jpg"
                      data-uk-lightbox="{group:'group1'}"
                      title="Gallery"
                    >
                      <img
                        alt="thumbnail"
                        src="./images/Room/r8.jpg"
                        className="w-full h-[205px] object-cover"
                      />
                      <div className="absolute inset-0 h-[205px]  bg-black opacity-0 hover:opacity-80">
                        <div className="absolute inset-0 h-[205px] bg-red-400 flex items-center justify-center hover:text-black">
                          <div className="bg-white rounded-full size-12 items-center justify-center flex">
                            <Search />
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Section sản phẩm */}
            <div className="grid grid-cols-4 sm:grid-cols-1 md:grid-cols-4 mt-8 sm:justify-center">
              {productId.length > 0 ? (
                productId.map(product => (
                  <div key={product.id} className="p-2 mx-auto">
                    <figure className="relative overflow-hidden inline-block">
                      <img
                        src={product.img}
                        width={'100%'}
                        alt={product.title}
                      />
                      <div className="absolute inset-0 bg-black opacity-0 hover:opacity-80">
                        <div className="absolute inset-0 bg-red-400 flex items-center justify-center hover:text-black">
                          <div className="bg-white rounded-full size-12 items-center justify-center flex">
                            <Search />
                          </div>
                        </div>
                      </div>
                    </figure>
                  </div>
                ))
              ) : (
                <p>Không tìm thấy sản phẩm</p>
              )}
            </div>
          </div>
          {/* Phân trang */}
          <div className="w-full mt-16 mb-20 ">
            <nav className="flex justify-center">
              <ul className="flex space-x-2 ">
                <li>
                  <a
                    href="#"
                    aria-label="Previous"
                    className="flex items-center text-black hover:text-red-500"
                  >
                    <ChevronLeft /> prev
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="px-3 py-1 text-black hover:text-red-500"
                  >
                    1
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="px-3 py-1 text-black hover:text-red-500"
                  >
                    2
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="px-3 py-1 text-black hover:text-red-500"
                  >
                    3
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="px-3 py-1 text-black hover:text-red-500"
                  >
                    4
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="px-3 py-1 text-black hover:text-red-500"
                  >
                    5
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    aria-label="Next"
                    className="flex items-center text-black hover:text-red-500"
                  >
                    next <ChevronRight />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
