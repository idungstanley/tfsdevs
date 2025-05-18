'use client';
import React, { useState, useId, useEffect, useRef } from 'react';
import { PricingCard } from '@/app/components/card/PricingCard';
import { IconArrowNarrowRight } from '@tabler/icons-react';
import useBootcamp from '@/app/hooks/useBootcamp';

const PricingCardList: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const { bootcamps } = useBootcamp();

  const handlePreviousClick = () => {
    const previous = current - 1;
    setCurrent(previous < 0 ? bootcamps?.length - 1 : previous);
  };

  const handleNextClick = () => {
    const next = current + 1;
    setCurrent(next === bootcamps?.length ? 0 : next);
  };

  const handleSlideClick = (index: number) => {
    if (current !== index) {
      setCurrent(index);
    }
  };

  const id = useId();

  const carouselRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (carouselRef.current) {
      const slide = carouselRef.current.children[current] as HTMLElement;
      if (slide) {
        // Center the active slide in the viewport
        const offset = slide.offsetLeft - (carouselRef.current.offsetWidth - slide.offsetWidth) / 2;
        carouselRef.current.scrollTo({ left: offset, behavior: 'smooth' });
      }
    }
  }, [current]);

  return (
    <div className="py-10 h-full overflow-x-clip">
      <div className="max-w-7xl mx-auto px-4 h-full">
        <h1 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">Choose Your Plan</h1>
        <p className="text-white text-center mb-6 max-w-2xl mx-auto">
          Select the perfect learning plan that matches your goals
        </p>

        <div
          className="relative w-full h-full gap-4 flex flex-col mx-auto mb-10"
          aria-labelledby={`carousel-heading-${id}`}
        >
          <ul
            className="flex w-full overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-3"
            ref={carouselRef}
            style={{ scrollBehavior: 'smooth' }}
          >
            {bootcamps?.map((slide, index) => (
              <PricingCard
                label={slide?.title}
                description={slide?.description}
                price={slide?.price}
                index={index}
                bootcampId={slide?.bootcampId}
                current={current}
                handleSlideClick={handleSlideClick}
                key={index}
              />
            ))}
          </ul>

          <div className="flex items-center justify-center w-full z-50">
            <CarouselControl type="previous" title="Go to previous slide" handleClick={handlePreviousClick} />

            <CarouselControl type="next" title="Go to next slide" handleClick={handleNextClick} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCardList;

interface CarouselControlProps {
  type: string;
  title: string;
  handleClick: () => void;
}

const CarouselControl = ({ type, title, handleClick }: CarouselControlProps) => {
  return (
    <button
      className={`w-10 h-10 flex items-center mx-2 justify-center bg-neutral-200 dark:bg-neutral-800 z-10 border-3 border-transparent rounded-full focus:border-[#6D64F7] focus:outline-none duration-200 ${
        type === 'previous' ? 'rotate-180' : ''
      }`}
      title={title}
      onClick={handleClick}
    >
      <IconArrowNarrowRight className="text-neutral-600 dark:text-neutral-200" />
    </button>
  );
};
