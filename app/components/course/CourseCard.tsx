import React from 'react';
import { Clock, BarChart } from 'lucide-react';
import CourseBadge from './CourseBadge';
import LockOverlay from './LockOverlay';
import StarRating from './StarRating';
import { CourseCardProp } from '@/app/types/index.interface';
import { formatPrice } from '@/app/utils';

interface CourseCardProps {
  course: CourseCardProp;
  className?: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, className = '' }) => {
  return (
    <div
      className={`dark:bg-slate-900 bg-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 max-w-[340px] ${className}`}
    >
      {/* Thumbnail with lock overlay */}
      <div className="relative aspect-video">
        <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover" />
        {!course.isAvailable && <LockOverlay className="opacity-0 hover:opacity-100" />}
        {/* Badges */}
        {course.badges && course.badges.length > 0 && (
          <div className="absolute top-3 left-3 flex flex-wrap gap-2">
            {course.badges.map((badge, index) => (
              <CourseBadge key={index} type={badge} />
            ))}
          </div>
        )}
      </div>

      {/* Course details */}
      <div className="p-4">
        <h3 className="font-bold text-lg mb-1 dark:text-white text-gray-700 line-clamp-2">{course.title}</h3>
        <p className="text-sm dark:text-gray-400 text-gray-700 mb-2 line-clamp-2">{course.description}</p>

        <div className="text-xs text-gray-500 mb-3">By {course.instructor}</div>

        <div className="flex items-center mb-3">
          <StarRating rating={course.rating} />
          <span className="text-xs text-gray-400 ml-1">({course.reviewCount.toLocaleString()})</span>
        </div>

        <div className="flex items-center gap-4 mb-3 text-xs dark:text-gray-400 text-gray-700">
          <div className="flex items-center">
            <Clock className="w-3 h-3 mr-1" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center">
            <BarChart className="w-3 h-3 mr-1" />
            <span>{course.level}</span>
          </div>
        </div>

        {/* Price */}
        <div className="flex items-baseline">
          <span className="text-xl font-bold dark:text-white text-gray-700">
            {course.price.discounted === 0
              ? 'Free'
              : course.price.discounted && course.price.discounted > 0
              ? formatPrice(course.price.discounted)
              : formatPrice(course.price.original)}
          </span>

          {course.price.discounted && course.price.discounted > 0 ? (
            <span className="ml-2 text-sm text-gray-500 line-through">{formatPrice(course.price.original)}</span>
          ) : null}
        </div>
        <div className="mt-2 text-xs dark:text-gray-400 text-gray-700">Last updated {course.lastUpdated}</div>
      </div>
    </div>
  );
};

export default CourseCard;
