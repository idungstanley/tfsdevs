'use client';
import Button from '@/app/components/button/Button';
import CourseOutlineCard from '@/app/components/card/CourseOutlineCard';
import { frontendCourseOutline } from '@/app/constants/bootcamps';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import { FiDownload } from 'react-icons/fi';
import useDownloader from 'react-use-downloader';

const FrontendLearningPath = ({
  margin = 'mt-20',
  padding = 'p-8 md:px-20'
}: {
  margin?: string;
  padding?: string;
}) => {
  const { download, isInProgress } = useDownloader();
  const router = useRouter();

  const fileUrl = '/TheFullSnackDevs_Frontend_Course_Outline.pdf';
  const filename = 'TheFullSnackDevs_Frontend_Course_Outline.pdf';

  return (
    <main className={`${margin}`}>
      <section className={`${padding} flex md:flex-row flex-col items-center gap-4 w-full"`}>
        <div className="text-white md:w-1/2 w-full">
          <h1 className="md:text-[50px] text-[35px] font-[700]">Frontend Development</h1>
          <p className="font-semibold text-xl">Unlock your potential, one step at a time.</p>
          <div className="flex items-center gap-3">
            <p className="my-3 text-xs font-semibold bg-orange-500 w-fit p-2 rounded-full">PRICE: #250,000</p>
            <p className="my-3 font-semibold bg-green-500 w-fit p-2 rounded-full text-xs">BEGINNER - ADVANCE</p>
          </div>
          <p>
            Our Frontend Learning Path is designed to take you from beginner to pro-step by step. Whether you&lsquo;re
            just starting out or looking to level up, this path guides you through real-world tools and concepts like
            HTML, CSS, JavaScript, React, and modern frameworks. Each module is carefully crafted to build your frontend
            skills in a structured and practical way, helping you become a confident, job-ready frontend developer.
          </p>
          <div className="flex items-center justify-start w-full gap-4 mt-4">
            <Button
              onClick={() => router.push('/auth/enroll')}
              label="Enroll Now"
              width="w-fit"
              buttonStyle="custom"
              height="h-[48px]"
              customClasses="bg-[#684DF4] hover:bg-base-light-hover text-white rounded-[8px] cursor-pointer"
              icon={<FaArrowRight className="text-white" />}
              iconPosition="right"
            />
            <Button
              label="Download Brochure"
              width="w-fit"
              buttonStyle="custom"
              height="h-[48px]"
              loading={isInProgress}
              onClick={() => download(fileUrl, filename)}
              customClasses="bg-red-500 hover:bg-red-500/80 text-white rounded-[8px] cursor-pointer"
              icon={<FiDownload className="text-white" />}
              iconPosition="left"
            />
          </div>
        </div>
        <Image src="/learning-paths-hero.webp" alt="" width={500} height={500} />
      </section>
      <section className={`grid gap-8 ${padding}`}>
        {frontendCourseOutline.map((courseOutline, index) => (
          <CourseOutlineCard key={index} {...courseOutline} />
        ))}
      </section>
    </main>
  );
};

export default FrontendLearningPath;
