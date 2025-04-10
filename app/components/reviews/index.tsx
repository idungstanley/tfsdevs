import { stacks, testimonials } from '@/app/constants/testimonials';
import React from 'react';
import TestimonialCard from '../card/TestimonialCards';
import { BsArrowUpRightCircleFill } from 'react-icons/bs';
import Button from '../button/Button';
import Image from 'next/image';

const Reviews = () => {
  return (
    <section className="w-full flex-col flex gap-4 bg-[#11111] md:px-20 md:pt-20 p-6">
      <h1 className="font-[700] text-white md:text-[45px] text-[30px]">
        Our <span className="text-[#684DF4]">Testimonials</span> and Reviews
      </h1>
      <div className="flex flex-col md:flex-row gap-4 w-full">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
      <div className="flex flex-col py-20 bg-[#333333]">
        <div className=" md:round rounded-b-lg px-8 py-6 space-y-16 flex flex-col items-center text-white">
          <div className="flex flex-col gap-3 items-center">
            <h3 className="font-bold text-[30px]">Gain Practical Tech Skills from Experts You Can Trust</h3>
            <p>JavaScript, React, and TypeScript to Node.js and Backend (Git, Docker, & More)</p>
            <div className="flex items-center mt-6">
              {stacks.map((stack) => (
                <Image
                  src={stack.imgSrc}
                  alt={stack.label}
                  key={stack.label}
                  width={150}
                  height={150}
                  className="md:h-20 h-10"
                />
              ))}
            </div>
          </div>
          <Button
            label="Join now"
            width="w-fit"
            buttonStyle="custom"
            height="h-[36px]"
            labelSize="text-[15px] font-lg rounded-md"
            customClasses="cursor-pointer text-white bg-[#684DF4] px-2 rounded-full"
            icon={<BsArrowUpRightCircleFill className="text-white text-[20px]" />}
            iconPosition="right"
          />
        </div>
      </div>
    </section>
  );
};

export default Reviews;
