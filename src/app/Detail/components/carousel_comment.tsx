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
    <div className="overflow-hidden relative w-[300px]">
      <div className="review__comment flex" ref={carouselRow}>
        <div className="carousel__comment flex-shrink-0 w-[300px]" id="lastImageDuplicate">
          <div className="carousel__comment--content px-[34px] py-[25px] bg-[#e1efcc]">
            <p className="pb-[30px] text-[16px]">{comments[0]?.comment}</p>
            <p className="text-[16px]">{comments[0]?.sub_commnet}</p>
          </div>
          <div className="carousel__comment--user flex justify-between py-[15px]">
            <div className="flex flex-col pl-[20px]">
              <h6>{comments[0]?.name_user}</h6>
              <p>{comments[0]?.email}</p>
            </div>
            <div className="w-[30%] flex justify-end">
              <img src={`/images/Detail/Auth-Icon/${comments[0]?.image}`} />
            </div>
          </div>
        </div>

        {comments.map((cm) => (
          <div className="carousel__comment flex-shrink-0 w-[300px]" key={cm.id}>
            <div className="carousel__comment--content p-[35px] bg-[#e1efcc]">
              <p className="pb-[30px] text-[16px]">{cm.comment}</p>
              <p className="text-[16px]">{cm.sub_commnet}</p>
            </div>
            <div className="carousel__comment--user flex justify-between py-[15px]">
              <div className="flex flex-col pl-[20px]">
                <h6>{cm.name_user}</h6>
                <p>{cm.email}</p>
              </div>
              <div className="w-[30%] flex justify-end">
                <img src={`/images/Detail/Auth-Icon/${cm.image}`} />
              </div>
            </div>
          </div>
        ))}

        <div className="carousel__comment flex-shrink-0 w-[300px]" id="firstImageDuplicate">
          <div className="carousel__comment--content p-[35px] bg-[#e1efcc]">
            <p className='pb-[30px] text-[16px]'> {comments[comments.length - 1]?.comment}</p>
            <p className='text-[16px]'>{comments[comments.length - 1]?.sub_commnet}</p>
          </div>
          <div className="carousel__comment--user flex justify-between py-[15px]">
            <div className="flex flex-col pl-[20px]">
              <h6>{comments[comments.length - 1]?.name_user}</h6>
              <p>{comments[comments.length - 1]?.email}</p>
            </div>
            <div className="w-[30%] flex justify-end">
              <img src={`/images/Detail/Auth-Icon/${comments[comments.length - 1]?.image}`} />
            </div>
          </div>
        </div>
      </div>
      <div className="carousel__comment--navigative absolute bottom-[32%] right-[15%] flex">
        <a className="prev" onClick={() => prevSlide()}><MdArrowBackIos /></a>
        <a className="next" onClick={() => nextSlide()}><MdArrowForwardIos /></a>
      </div>
    </div>
  );
};

export default CarouselComment;
