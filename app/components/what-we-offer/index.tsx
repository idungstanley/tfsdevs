'use client'
import { courseData } from '@/app/constants/courseOfferrings';
import React from 'react';
import CourseDetails from '../course/CourseDetails';

const CoursesWeOffers = () => {
  return (
    <section className="w-full flex-col flex gap-4 md:px-20 md:pt-20 p-6">
      <h1 className="font-[700] text-white md:text-[45px] text-[30px]">
        Our <span className="text-[#684DF4]">Course</span> Offerings
      </h1>

      <div className="container flex flex-col md:flex-row gap-3 w-full">
        {courseData.map((course, index) => (
          <CourseDetails key={index} course={course} />
        ))}
      </div>
    </section>
  );
};

export default CoursesWeOffers;
