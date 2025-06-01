import Button from '@/app/components/button/Button';
import LearningCard from '@/app/components/card/LearningCard';
import { backendLearningData } from '@/app/constants';
import Image from 'next/image';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';

const BackendLearningPath = () => {
  return (
    <main className="mt-20">
      <section className="p-8 md:px-20 flex flex-col md:flex-row items-center gap-4 w-full">
        <div className="text-white md:w-1/2 w-full">
          <h1 className="md:text-[50px] text-[35px] font-[700]">Backend Learning Path (Node.js, MongoDB, Express)</h1>
          <p className="font-semibold text-xl">Unlock your potential, one step at a time.</p>
          <div className="flex items-center gap-3">
            <p className="my-3 text-xs font-semibold bg-orange-500 w-fit p-2 rounded-md">PRICE: #250,000</p>
            <p className="my-3 font-semibold bg-green-500 w-fit p-2 rounded-md text-xs">BEGINNER - ADVANCE</p>
          </div>
          <p>
            Our Backend Learning Path is designed to guide you from beginner to expert in building robust server-side
            applications. Whether you’re new to backend development or aiming to master advanced concepts, this path
            covers essential tools and technologies like Node.js, MongoDB, and Express. You’ll learn to create RESTful
            APIs, manage databases, implement authentication, and scale applications for production. Each module is
            structured to build your backend skills progressively, preparing you to become a confident, job-ready
            backend developer.
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
        {backendLearningData.map((video, index) => (
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

export default BackendLearningPath;
