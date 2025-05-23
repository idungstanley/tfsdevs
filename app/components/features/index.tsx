import React from 'react';
import Carousel from '../carousel/Carousel';
import { LampContainer } from '../ui/lamp';
import useBootcamp from '@/app/hooks/useBootcamp';

const Features = () => {
  const { bootcamps } = useBootcamp();
  return (
    <LampContainer>
      <div className="flex flex-col items-center justify-center">
        <div className="z-10 w-full flex flex-col items-center gap-2">
          <h1 className="font-[700] text-white md:text-5xl text-3xl text-center">
            A simple way to <span className="text-[#684DF4]">Become and Discover</span> your potential
          </h1>
          <p className="text-[16px] text-white font-semibold text-center">
            Track your progress, access expert resources, and master new skills at your own pace. Keep your educational
            journey moving forward.
          </p>
        </div>
        {/* Cards */}
        <div className="relative z-10 w-full flex flex-col md:flex-row md:items-center justify-start gap-6 md:mt-10">
          <Carousel cards={bootcamps} />
        </div>
      </div>
    </LampContainer>
  );
};

export default Features;
