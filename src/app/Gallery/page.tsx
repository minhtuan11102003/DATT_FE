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

  const arrTitle: { id: number; title: string }[] = [
    { id: 2, title: 'DULUXE ROOM' },
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
      title: 'SINGLE BEDROOM,DULUXE ROOM,ROYAL ROOM,CLASSIC ROOM',
      img: './images/Room/r1.jpg',
    },
    {
      id: 2,
      categoryId: 3,
      title: 'SINGLE BEDROOM,DULUXE ROOM,ROYAL ROOM',
      img: './images/Room/r2.jpg',
    },
    {
      id: 3,
      categoryId: 7,
      title: 'DOUBLE BEDROOM,DULUXE ROOM,ROYAL ROOM,EXE ROOM,CLASSIC ROOM',
      img: './images/Room/r3.jpg',
    },
    {
      id: 4,
      categoryId: 5,
      title: 'DULUXE ROOM,ROYAL ROOM,DOUBLE BEDROOM,EXE ROOM',
      img: './images/Room/r4.jpg',
    },
    {
      id: 5,
      categoryId: 6,
      title: 'SINGLE BEDROOM,DULUXE ROOM,CLASSIC ROOM',
      img: './images/Room/r5.jpg',
    },
    {
      id: 6,
      categoryId: 7,
      title: 'SINGLE BEDROOM,DULUXE ROOM',
      img: './images/Room/r6.jpg',
    },
    {
      id: 7,
      categoryId: 4,
      title: 'DOUBLE BEDROOM,DULUXE ROOM,EXE ROOM,CLASSIC ROOM',
      img: './images/Room/r7.jpg',
    },
    {
      id: 8,
      categoryId: 5,
      title: 'DOUBLE BEDROOM,DULUXE ROOM,EXE ROOM',
      img: './images/Room/r8.jpg',
    },
    {
      id: 9,
      categoryId: 2,
      title: 'DOUBLE BEDROOM,DULUXE ROOM,EXE ROOM',
      img: './images/Room/r5.jpg',
    },
    {
      id: 10,
      categoryId: 2,
      title: 'DOUBLE BEDROOM,DULUXE ROOM,EXE ROOM',
      img: './images/Room/r2.jpg',
    },
    {
      id: 11,
      categoryId: 2,
      title: 'DOUBLE BEDROOM,DULUXE ROOM,EXE ROOM',
      img: './images/Room/r4.jpg',
    },
    {
      id: 12,
      categoryId: 3,
      title: 'DOUBLE BEDROOM,DULUXE ROOM,EXE ROOM',
      img: './images/Room/r5.jpg',
    },
    {
      id: 13,
      categoryId: 3,
      title: 'DOUBLE BEDROOM,DULUXE ROOM,EXE ROOM',
      img: './images/Room/r6.jpg',
    },
    {
      id: 14,
      categoryId: 3,
      title: 'DOUBLE BEDROOM,DULUXE ROOM,EXE ROOM',
      img: './images/Room/r2.jpg',
    },
    {
      id: 15,
      categoryId: 4,
      title: 'DOUBLE BEDROOM,DULUXE ROOM,EXE ROOM',
      img: './images/Room/r3.jpg',
    },
    {
      id: 16,
      categoryId: 4,
      title: 'DOUBLE BEDROOM,DULUXE ROOM,EXE ROOM',
      img: './images/Room/r6.jpg',
    },
    {
      id: 17,
      categoryId: 4,
      title: 'DOUBLE BEDROOM,DULUXE ROOM,EXE ROOM',
      img: './images/Room/r4.jpg',
    },
    {
      id: 18,
      categoryId: 5,
      title: 'DOUBLE BEDROOM,DULUXE ROOM,EXE ROOM',
      img: './images/Room/r4.jpg',
    },
    {
      id: 19,
      categoryId: 5,
      title: 'DOUBLE BEDROOM,DULUXE ROOM,EXE ROOM',
      img: './images/Room/r8.jpg',
    },
    {
      id: 20,
      categoryId: 6,
      title: 'DOUBLE BEDROOM,DULUXE ROOM,EXE ROOM',
      img: './images/Room/r7.jpg',
    },
    {
      id: 21,
      categoryId: 6,
      title: 'DOUBLE BEDROOM,DULUXE ROOM,EXE ROOM',
      img: './images/Room/r6.jpg',
    },
    {
      id: 22,
      categoryId: 6,
      title: 'DOUBLE BEDROOM,DULUXE ROOM,EXE ROOM',
      img: './images/Room/r1.jpg',
    },
    {
      id: 23,
      categoryId: 7,
      title: 'DOUBLE BEDROOM,DULUXE ROOM,EXE ROOM',
      img: './images/Room/r2.jpg',
    },
    {
      id: 24,
      categoryId: 7,
      title: 'DOUBLE BEDROOM,DULUXE ROOM,EXE ROOM',
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
    setProductId(arrProducts.slice(0, 8)); // Chỉ hiển thị 4 sản phẩm
  };

  return (
    <div className="block">
      <section className="mb-25 ">
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
            <div className="absolute w-[215px] h-[272px] top-0 right-80 ">
              <img
                src="./images/special-offer-yellow-main.png"
                alt="Lỗi ảnh"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="menu-room ">
        <div className="w-full h-[80px] flex justify-center">
          <div className="flex gap-4 w-full max-w-[1140px] h-full justify-around sm:justify-start md:justify-start items-center px-4">
            <div className="w-full md:w-[990px] flex flex-wrap  md:justify-around items-center sm:space-x-4">
              <a
                href="#"
                className="font-bold active:border-solid  focus:outline-slate-500 focus:ring sm:ml-3"
                onClick={() => showAllProducts()}
              >
                ALL
              </a>
              {arrTitle.map(title => (
                <>
                  <a
                    key={title.id}
                    href="#"
                    className="font-bold active:border-solid  focus:outline-slate-500 focus:ring"
                    onClick={() => getProductId(title.id)}
                  >
                    {title.title}
                  </a>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="section-room flex justify-center items-center">
        <div className="w-[1170px] h-auto  justify-center py-5 px-9 ">
          <div className="container ">
            <div className="flex flex-col justify-center items-center lg:flex-row">
              {/* Main Slider */}
              <div className="w-12/12 h-1/2 pl-2 mb-4 ">
                <div className="relative">
                  {/* Wrapper for slides */}
                  <div className="carousel-inner pr-8" role="listbox">
                    <div className="carousel-item active ">
                      <img
                        src={`${mangImg[dem].img}`}
                        alt="Lỗi ảnh"
                        className={`chuyenDong ${
                          isChuyenDong ? 'animate-in' : 'animate-out'
                        }  w-full sm:h-64 md:h-80 lg:h-96 object-cover`}
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
                      className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10"
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
              <div className="w-12/12  ">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-1 gap-4">
                  <div className="mb-4">
                    <div className="relative ">
                      <a
                        href="./images/Room/r9.jpg"
                        data-uk-lightbox="{group:'group1'}"
                        title="Gallery"
                      >
                        <img
                          alt="img"
                          src="./images/Room/r9.jpg"
                          className="w-auto h-auto"
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
                          className="w-auto h-auto"
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

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 md:gap-2 lg:grid-cols-4 gap-4">
              {productId.length > 0 ? (
                productId.map(product => (
                  <div key={product.id} className="p-2">
                    <figure className="relative overflow-hidden">
                      <img
                        src={product.img}
                        className="w-full h-auto"
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
