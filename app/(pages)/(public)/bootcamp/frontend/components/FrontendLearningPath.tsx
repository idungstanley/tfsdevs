import Button from '@/app/components/button/Button';
import LearningCard from '@/app/components/card/LearningCard';
import { frontendLearningData } from '@/app/constants';
import Image from 'next/image';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';

const FrontendLearningPath = () => {
  return (
    <main className="mt-20">
      <section className="p-8 md:px-20 flex md:flex-row flex-col items-center gap-4 w-full">
        <div className="text-white md:w-1/2 w-full">
          <h1 className="md:text-[50px] text-[35px] font-[700]">Frontend Learning Path</h1>
          <p className="font-semibold text-xl">Unlock your potential, one step at a time.</p>
          <p>
            Our Frontend Learning Path is designed to take you from beginner to pro—step by step. Whether you&lsquo;re
            just starting out or looking to level up, this path guides you through real-world tools and concepts like
            HTML, CSS, JavaScript, React, and modern frameworks. Each module is carefully crafted to build your frontend
            skills in a structured and practical way, helping you become a confident, job-ready frontend developer.
          </p>
          <div className="flex items-center justify-start w-full gap-4 mt-4">
            <Button
              type="submit"
              label="Enroll Now"
              width="w-fit"
              buttonStyle="custom"
              height="h-[48px]"
              customClasses="bg-[#684DF4] hover:bg-base-light-hover text-white rounded-[8px] cursor-pointer"
              icon={<FaArrowRight className="text-white" />}
              iconPosition="right"
            />
          </div>
        </div>
        <Image src="/learning-paths-hero.webp" alt="" width={500} height={500} />
      </section>
      <section className="p-8 md:px-20 flex flex-col gap-6">
        {frontendLearningData.map((video, index) => (
          <LearningCard
            key={index}
            thumbnailUrl={video.thumbnailUrl}
            title={video.title}
            tags={video.tags}
            description={video.description}
          />
        ))}
      </section>
    </main>
  );
};

export default FrontendLearningPath;
