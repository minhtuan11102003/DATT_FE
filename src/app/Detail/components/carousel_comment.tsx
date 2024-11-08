import React, { useEffect, useRef } from 'react';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';

interface Comment {
  id: number;
  comment: string;
  name_user: string;
  email: string;
  sub_commnet: string;
  image: string;
}

const CarouselComment = ({ comments }: { comments: Comment[] }) => {
  const carouselRow = useRef<HTMLDivElement | null>(null);
  const index = useRef<number>(0); // Start at the first slide
  const width = useRef<number>(300); // Default width

  useEffect(() => {
    const carouselSlides = document.getElementsByClassName('carousel__comment') as HTMLCollectionOf<HTMLElement>;

    if (carouselSlides.length > 0) {
      width.current = carouselSlides[0].clientWidth;
    }

    const handleResize = () => {
      if (carouselSlides.length > 0) {
        width.current = carouselSlides[0].clientWidth;
        updateCarouselPosition();
      }
    };

    const transitionEndHandler = () => {
      const carouselSlides = document.getElementsByClassName('carousel__comment') as HTMLCollectionOf<HTMLElement>;
      if (carouselSlides[index.current].id === 'firstImageDuplicate') {
        index.current = 1; // Go to first real slide
        updateCarouselPosition();
      } else if (carouselSlides[index.current].id === 'lastImageDuplicate') {
        index.current = carouselSlides.length - 2; // Go to last real slide
        updateCarouselPosition();
      }
    };

    window.addEventListener('resize', handleResize);
    if (carouselRow.current) {
      carouselRow.current.addEventListener('transitionend', transitionEndHandler);
    }

    // Auto slide
    const autoSlide = setInterval(nextSlide, 3000);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (carouselRow.current) {
        carouselRow.current.removeEventListener('transitionend', transitionEndHandler);
      }
      clearInterval(autoSlide);
    };
  }, [comments]);

  const updateCarouselPosition = () => {
    if (carouselRow.current) {
      carouselRow.current.style.transform = `translateX(${-width.current * index.current}px)`;
    }
  };

  const nextSlide = () => {
    const carouselSlides_next = document.getElementsByClassName('carousel__comment') as HTMLCollectionOf<HTMLElement>;
    if (index.current < carouselSlides_next.length - 1) {
      index.current++;
      if (carouselRow.current) {
        carouselRow.current.style.transition = 'transform 0.4s ease-out';
        updateCarouselPosition();
      }
    }
  };

  const prevSlide = () => {
    const carouselSlides_prev = document.getElementsByClassName('carousel__comment') as HTMLCollectionOf<HTMLElement>;
    if (index.current > 0) {
      index.current--;
      if (carouselRow.current) {
        carouselRow.current.style.transition = 'transform 0.4s ease-out';
        updateCarouselPosition();
      }
    }
  };

  return (
    <div className="overflow-hidden relative">
      <div className="review__comment flex" ref={carouselRow}>
        <div className="carousel__comment md:flex md:flex-col flex-shrink-0 w-full" id="lastImageDuplicate">
          <div className="carousel__comment--content md:p-[10px] px-[34px] py-[25px] lg:px-[34px] lg:py-[25px] bg-[#e1efcc] text-[#666666] ">
            <p className=" text-[16px] leading-[25px] line-clamp-4 sm:line-clamp-3 md:text-[12px] lg:text-[16px] md:line-clamp-4 hover:line-clamp-none">{comments[0]?.comment}</p>
            <p className="text-[16px] md:text-[12px] leading-[25px] pt-[30px] lg:pt-[30px] md:pt-0 sm:pb-[20px] line-clamp-3 sm:line-clamp-2 md:line-clamp-3 hover:line-clamp-none lg:text-[16px]">{comments[0]?.sub_commnet}</p>
          </div>
          <div className="carousel__comment--user flex justify-end gap-[20px] py-[15px] sm:py-0 ">
            <div className="flex flex-col">
              <h6 className='uppercase md:text-[13px]'>{comments[0]?.name_user}</h6>
              <p className='md:text-[12px]'>{comments[0]?.email}</p>
            </div>
            <div className="inline-block">
              <img src={`/images/Detail/Auth-Icon/${comments[0]?.image}`} />
            </div>
          </div>
        </div>
        {comments.map((cm) => (
          <div className="carousel__comment flex-shrink-0  w-full" key={cm.id}>
            <div className="carousel__comment--content md:p-[10px] px-[34px] py-[25px] lg:px-[34px] lg:py-[25px] bg-[#e1efcc] text-[#666666]">
              <p className=" text-[16px] lg:text-[16px] md:text-[12px] leading-[25px] line-clamp-4 sm:line-clamp-3 md:line-clamp-4 hover:line-clamp-none">{cm.comment}</p>
              <p className="text-[16px] lg:text-[16px] md:text-[12px] md:pt-0 pt-[30px] lg:pt-[30px] leading-[25px] sm:pb-[20px] line-clamp-3 sm:line-clamp-2 md:line-clamp-3">{cm.sub_commnet}</p>
            </div>
            <div className="carousel__comment--user flex justify-end gap-[20px] py-[15px] sm:py-0 ">
              <div className="flex flex-col pl-[50px]">
                <h6 className='uppercase md:text-[13px]'>{cm.name_user}</h6>
                <p className='md:text-[12px]'>{cm.email}</p>
              </div>
              <div className="inline-block">
                <img src={`/images/Detail/Auth-Icon/${cm.image}`} />
              </div>
            </div>
          </div>
        ))}

        <div className="carousel__comment flex-shrink-0 w-full" id="firstImageDuplicate">
          <div className="carousel__comment--content md:p-[10px] px-[34px] py-[25px] lg:px-[34px] lg:py-[25px] bg-[#e1efcc] text-[#666666]">
            <p className=' text-[16px] lg:text-[16px] leading-[25px] line-clamp-4 sm:line-clamp-3 md:line-clamp-4 hover:line-clamp-none md:text-[12px]'> {comments[comments.length - 1]?.comment}</p>
            <p className='text-[16px] lg:text-[16px] pt-[30px] md:pt-0 leading-[25px] lg:pt-[30px] sm:pb-[20px] line-clamp-3 sm:line-clamp-2 md:line-clamp-3 md:text-[12px]'>{comments[comments.length - 1]?.sub_commnet}</p>
          </div>
          <div className="carousel__comment--user flex justify-end gap-[20px] py-[15px] sm:py-0">
            <div className="flex flex-col pl-[50px]">
              <h6 className='uppercase md:text-[13px]'>{comments[comments.length - 1]?.name_user}</h6>
              <p className='md:text-[12px]'>{comments[comments.length - 1]?.email}</p>
            </div>
            <div className="inline-block">
              <img src={`/images/Detail/Auth-Icon/${comments[comments.length - 1]?.image}`} />
            </div>
          </div>
        </div>
      </div>
      <div className="carousel__comment--navigative absolute sm:bottom-[25%] bottom-[35%] right-[5%] flex gap-[10px] md:gap-[10px] sm:gap-[25px] lg:bottom-[20%] md:bottom-[40%]">
        <a className="prev" onClick={() => prevSlide()}><MdArrowBackIos /></a>
        <a className="next" onClick={() => nextSlide()}><MdArrowForwardIos /></a>
      </div>
    </div>
  );
};

export default CarouselComment;
