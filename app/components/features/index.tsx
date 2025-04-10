import React from 'react';
import AnimatedButton from '../button/AnimatedButton';
import { BsArrowUpRightCircleFill } from 'react-icons/bs';
import Carousel from '../carousel/CardCarousel';
import { cardData } from '@/app/constants/navigation';

const Features = () => {
  return (
    <section
      className="relative md:px-20 md:py-6 pb-10 p-6 flex flex-col gap-4 mt-28 md:m-18 m-4 rounded-2xl bg-cover bg-no-repeat bg-fixed"
      style={{
        backgroundImage: "url('/coding-env.jpg')",
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#111111] opacity-30 rounded-2xl"></div>
      <div className="absolute md:right-14 right-6 -top-6 flex justify-center h-screen">
        <AnimatedButton
          label="Over 2K active members"
          customClasses="bg-white border border-[#684DF4] text-gray-700"
          icon={<BsArrowUpRightCircleFill className="text-[#684DF4] text-[20px]" />}
          iconPosition="right"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 md:w-1/2 w-full flex flex-col gap-2">
        <h1 className="font-[700] text-white md:text-[45px] text-[30px]">
          A simple way to <span className="text-[#684DF4]">Become and Discover</span> your potential
        </h1>
        <p className="text-[16px] text-white font-semibold">
          Track your progress, access expert resources, and master new skills at your own pace. Keep your educational
          journey moving forward.
        </p>
      </div>

      {/* Cards */}
      <div className="relative z-10 w-full flex flex-col md:flex-row md:items-center justify-start gap-6 mt-20">
        <Carousel cards={cardData} />
      </div>
    </section>
  );
};

export default Features;
