import React from 'react';
import { cardData } from '@/app/constants/navigation';
import Carousel from '../carousel/Carousel';
import { LampContainer } from '../ui/lamp';

const Features = () => {
  return (
    <LampContainer>
      <div className="flex flex-col items-center justify-center">
        <div className="z-10 w-full flex flex-col gap-2">
          <h1 className="font-[700] text-white md:text-[45px] text-[30px]">
            A simple way to <span className="text-[#684DF4]">Become and Discover</span> your potential
          </h1>
          <p className="text-[16px] text-white font-semibold">
            Track your progress, access expert resources, and master new skills at your own pace. Keep your educational
            journey moving forward.
          </p>
        </div>
        {/* Cards */}
        <div className="relative z-10 w-full flex flex-col md:flex-row md:items-center justify-start gap-6 md:mt-10">
          <Carousel cards={cardData} />
        </div>
      </div>
    </LampContainer>
  );
};

export default Features;
