import CourseCard from '@/app/components/course/CourseCard';
import { sampleCourses } from '@/app/constants/bootcamps';
import React from 'react'

const AllCourses = () => {
  return (
    <div>
      <div className="text-left mb-10">
        <h1 className="text-3xl font-bold mb-2 dark:text-white text-gray-700">Are you ready to build your career?</h1>
        <p className="md:text-lg text-sm dark:text-white text-gray-700">
          Expand your knowledge with our top-rated courses
        </p>
      </div>
      <div className="flex gap-4 h-full flex-col md:flex-row items-center">
        {sampleCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}

export default AllCourses
