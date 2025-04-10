import { Testimonial } from '@/app/types/index.interface';
import Image from 'next/image';
import React from 'react';

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
  const stars = Array(testimonial.stars).fill('★').join(' ');
  return (
    <div className="bg-[#333333] shadow-lg rounded-lg p-6 max-w-sm border-t-3 border-[#684DF4]">
      <div className="flex items-center">
        <Image
          src={testimonial.profilePicture}
          alt={testimonial.name}
          width={500}
          height={500}
          className="w-16 h-16 rounded-full mr-4"
        />
        <div>
          <h3 className="text-xl font-semibold text-white">{testimonial.name}</h3>
          <div className="text-yellow-500">{stars}</div>
        </div>
      </div>
      <p className="mt-4 text-white">{testimonial.testimonial}</p>
    </div>
  );
};

export default TestimonialCard;
