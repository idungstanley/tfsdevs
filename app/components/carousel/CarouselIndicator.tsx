/* eslint-disable @typescript-eslint/no-explicit-any */
import { CardProps } from '@/app/types/index.interface';
import React from 'react';

interface CarouselIndicatorsProps {
  slides: CardProps[];
  currentSlide: number;
  setCurrentSlide: (index: number) => void;
}

const CarouselIndicators: React.FC<CarouselIndicatorsProps> = ({ slides, currentSlide, setCurrentSlide }) => {
  return (
    <div className="flex justify-center items-center gap-2 py-4 relative z-10">
      <div className="flex items-center justify-center border border-white p-2 py-1  rounded-full w-fit gap-1">
        {slides?.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className="transition-all duration-300 flex items-center justify-center cursor-pointer"
            aria-label={`Go to slide ${index + 1}`}
          >
            <span
              className={`h-2 rounded-full transition-all duration-300
              ${currentSlide === index ? 'w-4 bg-[#684DF4]' : 'w-2 bg-gray-400'}`}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default CarouselIndicators;
