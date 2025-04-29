import React from 'react';
import { Clock, Users, Star, ChevronRight } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import Link from 'next/link';
import { Course } from '@/app/types/courses';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const { theme } = useTheme();

  const bgColor = theme === 'dark' ? 'bg-gray-800' : 'bg-white';
  const borderColor = theme === 'dark' ? 'border-gray-700' : 'border-gray-200';

  return (
    <Link
      href={`/courses/${course.id}`}
      className={`block rounded-lg ${bgColor} shadow border ${borderColor} overflow-hidden transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px]`}
    >
      {/* Course Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-4 right-4 px-2 py-1 bg-black bg-opacity-50 rounded text-white text-xs">
          {course.level}
        </div>
      </div>

      {/* Course Content */}
      <div className="p-5">
        <div className="flex items-start justify-between">
          <h3 className="font-semibold text-lg mb-2 flex-1">{course.title}</h3>
          <div className="flex items-center text-yellow-500 ml-2">
            <Star size={16} className="fill-current" />
            <span className="ml-1 text-sm">{course.rating}</span>
          </div>
        </div>

        <p className="text-sm text-gray-400 mb-4 line-clamp-2">{course.description}</p>

        {/* Course Meta */}
        <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
          <div className="flex items-center">
            <Clock size={16} className="mr-1" />
            {course.duration}h
          </div>
          <div className="flex items-center">
            <Users size={16} className="mr-1" />
            {course.enrolledStudents}
          </div>
        </div>

        {/* Progress Bar (if enrolled) */}
        {course.progress !== undefined && (
          <div className="mb-4">
            <div className="flex justify-between text-xs mb-1">
              <span className="text-gray-400">Progress</span>
              <span className="text-indigo-500">{course.progress}%</span>
            </div>
            <div className="h-1.5 w-full bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full bg-indigo-500 rounded-full" style={{ width: `${course.progress}%` }}></div>
            </div>
          </div>
        )}

        {/* Instructor */}
        <div className="flex items-center gap-3 mb-4">
          <img
            src={course.instructor.avatar}
            alt={course.instructor.name}
            className="w-8 h-8 rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-medium">{course.instructor.name}</p>
            <p className="text-xs text-gray-400">{course.instructor.title}</p>
          </div>
        </div>

        {/* Action Button */}
        <div className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2">
          {course.progress !== undefined ? 'Continue Learning' : 'Enroll Now'}
          <ChevronRight size={16} />
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
