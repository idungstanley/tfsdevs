import React from 'react'
import ScrollingLogos from '../ScrollingLogos';
import Image from 'next/image';

const WhereWeWork = () => {
  return (
    <div>
      <div className="flex items-center gap-2">
        <Image src="/title_shape.svg" alt="title shape" width={500} height={500} className="h-8 w-8" />
        <h1 className="font-[700] text-black md:text-[20px] text-[16px]">
          Where our <span className="text-[#684DF4]">Mentees</span>work
        </h1>
      </div>
      <ScrollingLogos />
    </div>
  );
}

export default WhereWeWork