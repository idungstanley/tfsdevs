import KudaLogo from '@/public/custom-logos/KudaLogo';
import Image from 'next/image';
import React from 'react';

const logosTop = [
  '/fcmb-logo.png',
  '/myrioi-logo.svg',
  '/uba-logo.svg',
  '/Sterling-Bank-Logo.svg',
];

const logosBottom = [
  '/talstrike.png',
  '/huawei_logo.webp',
  '/talstrike.png',
  '/rgs-logo.png',
  '/fcmb-logo.png'
];

const ScrollingLogos = () => {
  return (
    <div className="w-full bg-white py-8 flex flex-col gap-10 items-center px-4">
      <div className="flex items-center justify-center gap-2">
        <Image src="/title_shape.svg" alt="title shape" width={500} height={500} className="h-8 w-8" />
        <h1 className="font-[700] text-black md:text-[20px] text-[16px]">
          Where our <span className="text-[#684DF4]">Mentees</span> work
        </h1>
      </div>

      {/* Wrapper for both rows */}
      <div className="flex flex-col gap-7">
        <div className="overflow-hidden relative w-full">
          {/* Upper Row - Scroll Left */}
          <div className="flex md:w-max w-full animate-scrollLeft md:gap-10 gap-4">
            {logosTop.map((logo, index) => (
              <img key={index} src={logo} alt="Company Logo" className="h-12 object-contain" />
            ))}
            <KudaLogo />
          </div>
        </div>

        {/* Lower Row - Scroll Right */}
        <div className="overflow-hidden relative mt-4 w-full">
          <div className="flex md:w-max w-full animate-scrollRight space-x-10">
            {logosBottom.map((logo, index) => (
              <img key={index} src={logo} alt="Company Logo" className="h-12 object-contain" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollingLogos;
