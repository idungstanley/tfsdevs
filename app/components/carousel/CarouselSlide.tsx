import React from 'react';

interface CarouselSlideProps {
  title: string;
  description: string;
  index: number;
  currentSlide: number;
}

const CarouselSlide: React.FC<CarouselSlideProps> = ({ title, description, index, currentSlide }) => {
  const isActive = index === currentSlide;

  return (
    <div
      className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out 
      ${isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
    >
      <div className="w-full h-full flex flex-col justify-center px-12 py-16">
        <div className="mb-4 text-[#684DF4]">
          <span className="opacity-70">[ </span>
          <span>{index + 1}.0</span>
          <span className="opacity-70"> ]</span>
        </div>
        <h2 className="text-4xl md:text-2xl lg:text-4xl font-light text-gray-200 mb-10">{title}</h2>
        <p className="text-base text-wrap max-w-3xl text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default CarouselSlide;
