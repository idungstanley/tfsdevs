import React from 'react';
import Link from 'next/link';
import { CourseCardProps } from '@/app/types/index.interface';

const PricingCard: React.FC<CourseCardProps> = ({ label, route, storage, price, features }) => {
  return (
    <div className="bg-gray-900 text-white rounded-lg shadow-lg shadow-black p-6 min-w-[300px] h-[350px] flex flex-col justify-between">
      <h3 className="text-lg font-semibold uppercase">{label}</h3>
      <div className="my-4">
        <p className="text-4xl font-bold">{storage}</p>
        <p className="text-sm text-gray-400">{price}</p>
      </div>
      <Link href={route}>
        <button
          className="w-full bg-[#684DF4]/90 hover:bg-[#684DF4] text-white py-2 rounded-lg transition-colors"
          onClick={(e) => e.stopPropagation()}
        >
          Enroll Now
        </button>
      </Link>
      <ul className="mt-4 space-y-2">
        {features?.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-300">
            <span className="mr-2 text-purple-400">✓</span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PricingCard;
