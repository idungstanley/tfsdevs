'use client';
import Button from '@/app/components/button/Button';
import CourseOutlineCard from '@/app/components/card/CourseOutlineCard';
import { courseOutline } from '@/app/constants/bootcamps';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import { FiDownload } from 'react-icons/fi';
import useDownloader from 'react-use-downloader';

const BackendLearningPath = ({ margin = 'mt-20', padding = 'p-8 md:px-20' }: { margin?: string; padding?: string }) => {
  const router = useRouter();
  const { download, isInProgress } = useDownloader();

  const fileUrl = '/TheFullSnackDevs_Backend_Course_Outline.pdf';
  const filename = 'TheFullSnackDevs_Backend_Course_Outline.pdf';
  return (
    <main className={`${margin}`}>
      <section className={`${padding} flex md:flex-row flex-col items-center gap-4 w-full"`}>
        <div className="text-white md:w-1/2 w-full">
          <h1 className="md:text-[50px] text-[35px] font-[700]">Backend Development (C# and .NET Core)</h1>
          <p className="font-semibold text-xl">Unlock your potential, one step at a time.</p>
          <div className="flex items-center gap-3">
            <p className="my-3 text-xs font-semibold bg-orange-500 w-fit p-2 rounded-md">PRICE: #350,000</p>
            <p className="my-3 font-semibold bg-green-500 w-fit p-2 rounded-md text-xs">BEGINNER - ADVANCE</p>
          </div>
          <p>
            Our Backend Learning Path is designed to guide you from beginner to to an advanced C# and .NET Core
            developer. The program is structured into three progressive levels: Beginner, Intermediate, and Advanced,
            with practical projects to solidify your skills at each stage. Each module includes key concepts, tools, and
            recommended projects to ensure hands-on learning.
          </p>

          <div className="flex items-center justify-start w-full gap-4 mt-4">
            <Button
              label="Enroll Now"
              onClick={() => router.push('/auth/enroll')}
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
        {courseOutline.map((courseOutline, index) => (
          <CourseOutlineCard key={index} {...courseOutline} />
        ))}
      </section>
    </main>
  );
};

export default BackendLearningPath;
