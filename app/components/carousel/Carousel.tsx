'use client'
import React, { useState, useEffect } from 'react';
import CarouselSlide from './CarouselSlide';
import CarouselIndicators from './CarouselIndicator';
import { CardProps, CarouselProps } from '@/app/types/index.interface';

const Carousel:React.FC<CarouselProps> = ({ cards, intSec = 3000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slides every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => ((prev + 1) % (cards as CardProps[])?.length));
    }, intSec);
    return () => clearInterval(interval);
  }, [intSec, cards?.length]);

  return (
    <div className="relative w-full max-w-2xl mx-auto my-8">
      <div className="relative h-80 border border-gray-700/50 rounded-3xl backdrop-blur-sm bg-black/20 overflow-hidden">
        {cards?.map((slide, index) => (
          <CarouselSlide
            key={index}
            title={slide.title}
            description={slide.description}
            index={index}
            currentSlide={currentSlide}
          />
        ))}
      </div>
      <div className="mt-6">
        <CarouselIndicators slides={cards as CardProps[]} currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} />
      </div>
    </div>
  );
};

export default Carousel;
