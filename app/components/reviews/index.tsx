import { testimonials } from '@/app/constants/testimonials';
import React from 'react';
import TestimonialCard from '../card/TestimonialCards';
import Image from 'next/image';
import { BsArrowUpRightCircleFill } from 'react-icons/bs';
import Button from '../button/Button';

const Reviews = () => {
  return (
    <section className="w-full flex-col flex gap-4 bg-[#F7F5FF] md:px-20 md:pt-20 p-6">
      <h1 className="font-[700] text-black md:text-[45px] text-[30px]">
        Our <span className="text-[#684DF4]">Course</span> Offerings
      </h1>
      <div className="flex flex-col md:flex-row gap-4 w-full">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
      <div className="flex flex-col md:flex-row rounded-lg bg-white shadow-md mt-4">
        <Image alt="together" src="/together.jpg" width={700} height={700} className="md:rounded-l-lg rounded-r-none rounded-t-lg" />
        <div className="bg-[#684DF4]/60 md:rounded-r-lg md:round rounded-b-lg px-8 py-6 gap-6 flex flex-col justify-center">
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-[30px]">Get in Touch</h3>
            <p>Become part of our community to expand your mind and celebrate your achievement</p>
            <p className="font-[300]">
              Join us and unlock new opportunities for growth and success. Our community is here to inspire, support,
              and help you achieve your personal and professional goals.
            </p>
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
