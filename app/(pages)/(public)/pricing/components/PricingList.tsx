'use client';
import React, { useState, useId } from 'react';
import { courses } from '@/app/constants';
import { PricingCard } from '@/app/components/card/PricingCard';
import { IconArrowNarrowRight } from '@tabler/icons-react';

const PricingCardList: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const handlePreviousClick = () => {
    const previous = current - 1;
    setCurrent(previous < 0 ? courses.length - 1 : previous);
  };

  const handleNextClick = () => {
    const next = current + 1;
    setCurrent(next === courses.length ? 0 : next);
  };

  const handleSlideClick = (index: number) => {
    if (current !== index) {
      setCurrent(index);
    }
  };

  const id = useId();

  return (
    <div className="py-10 h-full overflow-x-clip">
      <div className="max-w-7xl mx-auto px-4 h-full">
        <h1 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">Choose Your Plan</h1>
        <p className="text-white text-center mb-6 max-w-2xl mx-auto">
          Select the perfect learning plan that matches your goals
        </p>

        <div className="relative w-full h-[70vmin] mx-auto mb-10" aria-labelledby={`carousel-heading-${id}`}>
          <ul
            className="absolute flex mx-[-4vmin] w-full transition-transform duration-1000 ease-in-out"
            style={{
              transform: `translateX(-${current * (100 / courses.length)}%)`
            }}
          >
            {courses.map((slide, index) => (
              <PricingCard
                label={slide.label}
                route={slide.route}
                storage={slide.storage}
                price={slide.price}
                features={slide.features}
                index={index}
                current={current}
                handleSlideClick={handleSlideClick}
                key={index}
              />
            ))}
          </ul>

          <div className="absolute flex justify-center w-full top-[calc(100%)] -translate-x-14">
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
      className={`w-10 h-10 flex items-center mx-2 justify-center bg-neutral-200 dark:bg-neutral-800 border-3 border-transparent rounded-full focus:border-[#6D64F7] focus:outline-none hover:-translate-y-0.5 active:translate-y-0.5 transition duration-200 ${
        type === 'previous' ? 'rotate-180' : ''
      }`}
      title={title}
      onClick={handleClick}
    >
      <IconArrowNarrowRight className="text-neutral-600 dark:text-neutral-200" />
    </button>
  );
};
