import Image from 'next/image';
import React from 'react';
import { PropagateLoader } from 'react-spinners';

const Loading = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="flex flex-col gap-5 items-center justify-center w-full">
        <div className="items-center justify-center w-full flex hover:text-[#684DF4]">
          <Image src="/iconpurple.svg" alt="logo" width={500} height={500} className="h-[50px] w-[60px]" />
          <Image src="/logotext.svg" alt="logo" width={500} height={500} className="h-[50px] w-[60px]" />
        </div>
        <PropagateLoader  aria-label="Loading Spinner" color="#684DF4" loading />
      </div>
    </div>
  );
};

export default Loading;
