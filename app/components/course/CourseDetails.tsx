import { Course } from '@/app/types/index.interface';
import React, { useState } from 'react';

// CourseDetails Component (remains the same)
const CourseDetails: React.FC<{ course: Course }> = ({ course }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => setIsOpen(!isOpen);

  return (
    <div className="bg-[#101010] shadow-lg rounded-lg p-6 mb-6 text-white">
      <h2 className="text-2xl font-semibold">{course.title}</h2>
      <p className="mt-2">{course.description}</p>

      <button onClick={toggleCollapse} className="mt-4 text-[#684DF4] hover:underline cursor-pointer">
        {isOpen ? 'Hide Features' : 'Show Features'}
      </button>

      {isOpen && (
        <ul className="mt-4 space-y-2">
          {course.features.map((feature, index) => (
            <li key={index} className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};


export default CourseDetails;
