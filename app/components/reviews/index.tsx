import { testimonials } from '@/app/constants/testimonials';
import React from 'react';
import { InfiniteMovingCards } from '../card/InfiniteMovingCard';

const Reviews = () => {
  return (
    <section className="w-full flex-col flex gap-4 bg-[#11111] md:px-20 md:pt-20 p-6">
      <h1 className="font-[700] text-white text-xs">
        [ OUR <span className="text-[#684DF4]">TESTIMONIALS</span> AND REVIEWS ]
      </h1>
      <div className="flex flex-col md:flex-row gap-4 w-full">
        <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
      </div>
    </section>
  );
};

export default Reviews;
