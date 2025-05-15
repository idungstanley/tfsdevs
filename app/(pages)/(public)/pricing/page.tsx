'use client';
import React from 'react';
import PricingCardList from './components/PricingList';
import DescCard from '@/app/components/card/DescCard';
import { descData } from '@/app/constants/navigation';
import { useRouter } from 'next/navigation';

const PricingPage = () => {
  const router = useRouter();
  const handleEnroll = () => {
    router.push('/auth/enroll');
  };
  return (
    <main className="h-full w-full mt-20">
      <PricingCardList />
      <div className="container mx-auto p-4 md:py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Included with all plans:</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Everything you need to accelerate your learning journey and master new skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {descData.map((feature, index) => (
            <DescCard key={index} icon={feature.icon} title={feature.title} description={feature.description} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <button
            onClick={handleEnroll}
            className="bg-[#684DF4]/90 hover:bg-[#684DF4] text-white font-semibold py-3 px-8 rounded-full duration-300 scale-80 hover:scale-100 transition-all cursor-pointer"
          >
            Get Started Today
          </button>
        </div>
      </div>
    </main>
  );
};

export default PricingPage;
