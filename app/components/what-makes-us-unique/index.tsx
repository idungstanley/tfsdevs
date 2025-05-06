import React from 'react';
import Image from 'next/image';
import { whatWeOffer } from '@/app/constants/courseOfferrings';
import { FaCheck } from 'react-icons/fa6';
import FloatingBubble from '../FloatingBubble';

const WhatMakesUsUnique = () => {
  return (
    <section className="w-full flex flex-col md:flex-row gap-8 md:p-20 p-6 items-center">
      <div className="md:w-1/2 w-full">
        <div className="flex items-center gap-2">
          <Image src="/title_shape.svg" alt="title shape" width={500} height={500} className="h-8 w-8" />
          <h1 className="font-[700] text-white md:text-[20px] text-[16px]">
            What Makes Us <span className="text-[#684DF4]">Unique</span>
          </h1>
        </div>
        <h1 className="font-[700] text-white md:text-[40px] text-[30px]">
          We Deal With The Aspects Professional IT Services
        </h1>
        <p className="text-white">
          Collaboratively envisioneer user friendly supply chains and cross unit imperative. Authoritativel fabricate
          competitive resource and holistic.
        </p>
        <ul className="grid grid-cols-2 md:auto-cols-auto md:gap-[20px] mt-5 w-fit">
          {whatWeOffer.map((offer, index) => (
            <li key={index} className="flex gap-2 items-center">
              <span className="border border-dashed rounded-full p-2 flex items-center w-7 h-7 justify-center text-[#684DF4]">
                <FaCheck className="text-[20px]" />
              </span>
              <p className="font-[600] text-white">{offer}</p>
            </li>
          ))}
        </ul>
      </div>
      <FloatingBubble imageUrl="/self-learning.jpg" />
    </section>
  );
};

export default WhatMakesUsUnique;
