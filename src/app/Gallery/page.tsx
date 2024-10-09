'use client';
import React from 'react';
import { ChevronLeft, ChevronRight, Search } from 'lucide-react';
import { useEffect, useState } from 'react';
import '../../app/css/gallery.css';

const GalleryPage = () => {
  const [dem, setDem] = useState<number>(0);
  const [isChuyenDong, setChuyenDong] = useState<boolean>(false);

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

  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Room 1',
      type: 'SINGLE BEDROOM,DULUXE ROOM,ROYAL ROOM,CLASSIC ROOM',
      imgSrc: './images/Room/r1.jpg',
    },
    {
      id: 2,
      name: 'Room 2',
      type: 'SINGLE BEDROOM,DULUXE ROOM,ROYAL ROOM',
      imgSrc: './images/Room/r2.jpg',
    },
    {
      id: 3,
      name: 'Room 3',
      type: 'DOUBLE BEDROOM,DULUXE ROOM,ROYAL ROOM,EXE ROOM,CLASSIC ROOM',
      imgSrc: './images/Room/r3.jpg',
    },
    {
      id: 4,
      name: 'Room 4',
      type: 'DULUXE ROOM,ROYAL ROOM,DOUBLE BEDROOM,EXE ROOM',
      imgSrc: './images/Room/r4.jpg',
    },
    {
      id: 5,
      name: 'Room 5',
      type: 'SINGLE BEDROOM,DULUXE ROOM,CLASSIC ROOM',
      imgSrc: './images/Room/r5.jpg',
    },
    {
      id: 6,
      name: 'Room 6',
      type: 'SINGLE BEDROOM,DULUXE ROOM',
      imgSrc: './images/Room/r6.jpg',
    },
    {
      id: 7,
      name: 'Room 7',
      type: 'DOUBLE BEDROOM,DULUXE ROOM,EXE ROOM,CLASSIC ROOM',
      imgSrc: './images/Room/r7.jpg',
    },
    {
      id: 8,
      name: 'Room 8',
      type: 'DOUBLE BEDROOM,DULUXE ROOM,EXE ROOM',
      imgSrc: './images/Room/r8.jpg',
    },
    // Thêm các phòng khác
  ]);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedType, setSelectedType] = useState('ALL');

  const filterProducts = (type: string) => {
    if (type === 'ALL') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter(product => product.type.split(',').includes(type))
      );
    }
    setSelectedType(type);
  };

  return (
    <div>
      <section className="mb-25">
        <div className="relative w-full h-[313px]">
          <img
            src="./images/Room/bannerGallery.jpg"
            alt="about-us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h2
              className="text-white text-4xl mt-9"
              style={{ textShadow: '0 0 20px black' }}
            >
              GALLERY
            </h2>
            <img
              src="./images/nice-title-breadcrumb.png"
              alt="Additional"
              className="mt-2 h-auto"
            />
            <div className="absolute w-[215px] h-[272px] top-0 right-80">
              <img
                src="./images/special-offer-yellow-main.png"
                alt="Lỗi ảnh"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="menu-room">
        <div className="w-full h-[80px] flex justify-center">
          <div className="flex gap-4 w-[1140px] h-full justify-around items-center">
            <div className="w-[990px] flex justify-around items-center ">
              {[
                'ALL',
                'DULUXE ROOM',
                'SINGLE BEDROOM',
                'DOUBLE BEDROOM',
                'CLASSIC ROOM',
                'EXE ROOM',
                'ROYAL ROOM',
              ].map(roomType => (
                <a
                  key={roomType}
                  href="#"
                  className="font-bold active:border-solid  focus:outline-slate-500 focus:ring"
                  onClick={e => {
                    e.preventDefault();
                    filterProducts(roomType);
                  }}
                >
                  {roomType}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="section-room flex justify-center items-center">
        <div className="w-[1170px] h-auto  justify-center py-5 px-9 ">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row">
              {/* Main Slider */}
              <div className="w-8/12 h-1/2 pl-2 mb-4 ">
                <div className="relative">
                  {/* Wrapper for slides */}
                  <div className="carousel-inner pr-8" role="listbox">
                    <div className="carousel-item active ">
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
                    className="absolute left-5 top-1/2 bg-gray-600 hover:bg-blue-400 text-white "
                    href="#gallery_main_slider"
                    role="button"
                    data-slide="prev"
                  >
                    <ChevronLeft
                      onClick={() => {
                        setChuyenDong(true);
                        downSetDem();
                      }}
                    />
                  </a>
                  <a
                    className="absolute right-12 top-1/2  bg-gray-600 hover:bg-blue-400 text-white "
                    href="#gallery_main_slider"
                    role="button"
                    data-slide="next"
                  >
                    <ChevronRight
                      onClick={() => {
                        setChuyenDong(true);
                        upSetDem();
                      }}
                    />
                  </a>
                </div>
              </div>

              {/* Thumbnails */}
              <div className="w-96 ">
                <div className="grid grid-cols-1 gap-4">
                  <div className="mb-4">
                    <div className="relative">
                      <a
                        href="./images/Room/r9.jpg"
                        data-uk-lightbox="{group:'group1'}"
                        title="Gallery"
                      >
                        <img
                          alt="img"
                          src="./images/Room/r9.jpg"
                          className="w-full h-[201px]"
                        />
                        <div className="absolute inset-0 bg-black opacity-0 hover:opacity-80 ">
                          <div className="absolute inset-0 bg-red-400 flex items-center justify-center hover:text-black">
                            <div className="bg-white rounded-r-full rounded-b-full rounded-t-full rounded-l-full size-12 items-center justify-center flex ">
                              <Search />
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div>
                    <div className="relative">
                      <a
                        href="img/gallery-five.jpg"
                        data-uk-lightbox="{group:'group1'}"
                        title="Gallery"
                      >
                        <img
                          alt="img"
                          src="./images/Room/r9.jpg"
                          className="w-full h-[201px]"
                        />
                        <div className="absolute inset-0 bg-black opacity-0 hover:opacity-80 ">
                          <div className="absolute inset-0 bg-red-400 flex items-center justify-center hover:text-black">
                            <div className="bg-white rounded-r-full rounded-b-full rounded-t-full rounded-l-full size-12 items-center justify-center flex ">
                              <Search />
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap">
              {filteredProducts.map(product => (
                <div key={product.id} className="w-full md:w-1/4 p-2 ">
                  <figure className="relative overflow-hidden">
                    <img
                      alt={product.name}
                      src={product.imgSrc}
                      className="w-full h-auto"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 hover:opacity-80 ">
                      <div className="absolute inset-0 bg-red-400 flex items-center justify-center hover:text-black">
                        <div className="bg-white rounded-full size-12 items-center justify-center flex ">
                          <Search />
                        </div>
                      </div>
                    </div>
                  </figure>
                </div>
              ))}
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
