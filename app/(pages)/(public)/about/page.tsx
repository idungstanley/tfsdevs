'use client';
import { Highlight } from '@/app/components/ui/hero-highlight';
import { HoverEffect } from '@/app/components/ui/hover-effect';
import { StickyScroll } from '@/app/components/ui/sticky-scroll-reveal';
import { content } from '@/app/constants/faq';
import useBootcamp from '@/app/hooks/useBootcamp';
import Image from 'next/image';
import React from 'react';
import { visionGoals, missionPoints, offerings } from '../../../constants';
const About = () => {
  const { bootcamps } = useBootcamp();
  return (
    <div className="w-full pt-32 md:px-20 px-4">
      <div className="flex items-center justify-center md:px-20">
        <div className='flex flex-col gap-4'>
          <h1 className="font-[700] text-left md:text-center md:px-10 text-white md:text-base text-sm text-wrap w-full]">
            [ ABOUT OUR <span className="text-[#684DF4]"> PROGRAM</span> ]
          </h1>
          <div className="text-left md:text-center text-[30px] text-white max-w-5xl">
            We are committed to delivering top-tier frontend, backend, and full-stack development Bootcamp programs
            {''}
            <Highlight className="text-black dark:text-white">
              and courses, along with more tech-driven learning opportunities.{' '}
            </Highlight>
          </div>
        </div>
      </div>

      <div className="flex flex-col pt-10 gap-4 w-full">
        <h1 className="font-[700] text-white md:text-base text-sm text-wrap w-full]">
          [<span className="text-[#684DF4]"> OUR VISION</span> ]
        </h1>
        <div className="flex flex-col-reverse md:flex-row gap-6 w-full items-center  ">
          <div className="flex flex-col w-full">
            <p className="text-white mt-4">
              To become Africa’s leading tech academy and a global reference for practical, mentorship-driven software
              development education. We envision a future where aspiring developers — regardless of background,
              location, or financial status — have access to a supportive learning environment that mirrors real
              industry settings. At TheFullSnackDevs Academy, we’re building more than coders — we’re nurturing
              creators, problem-solvers, and future tech leaders. Our goal is to create a ripple effect across the
              continent:
            </p>
            <ul className="list-disc text-white flex flex-col gap-4 mt-2 text-base">
              {visionGoals.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-green-600">»</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full flex items-center justify-center h-full">
            <Image
              width={500}
              height={500}
              alt="africa academy"
              src="/vision.jpg"
              className="rounded-lg w-full h-full"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col pt-12 gap-4 w-full">
        <h1 className="font-[700] text-white md:text-base text-sm text-wrap w-full]">
          [<span className="text-[#684DF4]"> OUR MISSION</span> ]
        </h1>
        <div className="flex flex-col-reverse items-center md:flex-row gap-6 w-full">
          <div className="w-full flex items-center justify-center h-full">
            <Image
              width={500}
              height={500}
              alt="africa academy"
              src="/learn-online.jpg"
              className="rounded-lg w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col w-full">
            <p className="text-white mt-4">
              At TheFullSnackDevs Academy, our mission is to equip the next generation of developers with the skills,
              mindset, and confidence to thrive in the global tech space. We are committed to:
            </p>
            <ul className="list-disc text-white flex flex-col gap-4 mt-2 text-base">
              {missionPoints.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-green-600">»</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:pt-20 pt-12 gap-4 w-full">
        <h1 className="font-[700] text-white md:text-base text-sm text-wrap w-full]">
          [ Who We Are <span className="text-[#684DF4]"> TheFullSnackDevs Academy</span> ]
        </h1>
        <div className="flex flex-col-reverse md:flex-row gap-6 w-full items-center ">
          <div className="flex flex-col w-full">
            <p className="text-white mt-4">
              At TheFullSnackDevs Academy, we’re bridging the gap between learning and doing. We’ve created a
              developer-first environment where learners can grow, collaborate, and get real-time support from
              experienced mentors. <br />
              Here, you don’t just learn code, you learn by doing alongside professionals who’ve been in the field. Our
              students gain access to:
            </p>
            <ul className="list-disc text-white flex flex-col gap-4 mt-2 text-base">
              {offerings.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-green-600">»</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full flex items-center justify-center h-full">
            <Image
              width={500}
              height={500}
              alt="africa academy"
              src="/black-together.jpg"
              className="rounded-lg w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* bootcamp  */}
      <div className="flex flex-col gap-4 pt-12 bg-[#33333] text-white">
        <h1 className="font-[700] text-white md:text-base text-sm text-wrap w-full]">
          [ <span className="text-[#684DF4]">BOOTCAMP</span> ]
        </h1>
        <HoverEffect items={bootcamps} />
      </div>
      <div className="w-full py-4">
        <StickyScroll content={content} />
      </div>
    </div>
  );
};

export default About;
