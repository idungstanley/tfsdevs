'use client';
import FeatureCard from '@/app/components/card/FeatureCard';
import CourseDetails from '@/app/components/course/CourseDetails';
import { courseData } from '@/app/constants/courseOfferrings';
import whatWeDo from '@/app/constants/whatWeDo';
import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
    <div className="pt-[40px]">
      <div
        className="bg-cover bg-no-repeat bg-[#080F1C] h-[250px] flex items-center pl-10"
        style={{
          backgroundImage: "url('/counter-bg.webp')"
        }}
      >
        <h1 className="font-[700] text-white md:text-[50px] text-[30px] text-wrap w-full]">
          About our <span className="text-[#684DF4]"> program</span>
        </h1>
      </div>
      <div className="flex flex-col gap-2 bg-[#33333] p-10 text-white">
        <h1 className="font-[700] md:text-[50px] text-[30px] text-wrap">Cutting-Edge Coding Academy</h1>
        <p>
          TheFullSnackDevs because of its commitment to delivering top-tier frontend, backend, and full-stack
          development solutions while also driving innovative coding bootcamps. The blend of practical software
          development and tech education aligns perfectly with my passion for both building scalable applications and
          mentoring aspiring developers. With my experience in React, Next.js, Node.js, and performance optimization,
          I’m eager to contribute to real-world projects while also supporting the mission of upskilling future
          developers. The partnership with Imperial College London and HyperionDev further reinforces TheFullSnackDevs’
          commitment to industry-aligned education, and I’d love to be part of a team that’s shaping the next generation
          of tech talent while delivering high-quality software solutions.
        </p>
        <div className="container flex flex-col md:flex-row gap-3 w-full">
          {courseData.map((course, index) => (
            <CourseDetails key={index} course={course} />
          ))}
        </div>
      </div>
      <div className="h-fit border-t border-gray-900 flex">
        <div className="w-1/2 flex grow bg-slate-800 h-full flex-col gap-3 p-10">
          <span className="font-bold p-3 text-white rounded-full bg-[#684DF4] w-fit">Why Choose Thefullsnackdevs</span>
          <h1
            className="font-[700] md:text-[50px] text-[30px] text-wrap text-transparent bg-clip-text bg-center bg-cover"
            style={{ backgroundImage: "url('/group.jpg')" }}
          >
            Elevate your career with top-tier academy.
          </h1>
          <p className="text-[20px] text-white">
            At TheFullSnackDevs, we are more than just a development team. We are a hub for innovation, excellence, and
            career transformation.
          </p>
          <Image src="/next-code.jpg" alt="about us" width={500} height={500} className="w-full" />
        </div>
        <div className="w-1/2 flex items-center h-full p-10 bg-[#080F1C]">
          <div className="max-w-4xl mx-auto space-y-6">
            {whatWeDo.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
