import React from 'react';
import Image from 'next/image';
import { LearningCardProps } from '@/app/types/index.interface';

const LearningCard: React.FC<LearningCardProps> = ({ thumbnailUrl, title, tags = [], description = '' }) => {
  return (
    <div className="flex flex-col md:flex-row bg-gray-900 text-white rounded-lg overflow-hidden shadow-lg min-h-[250px] h-fit">
      {/* Thumbnail Section */}
      <div className="relative w-full md:w-1/3 h-full md:h-auto">
        <Image
          src={thumbnailUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg md:rounded-l-lg md:rounded-t-none"
        />
      </div>

      {/* Content Section */}
      <div className="p-4 flex-1">
        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex gap-2 mb-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className={`text-xs font-semibold px-2 py-1 rounded ${
                  tag === 'FEATURED'
                    ? 'bg-orange-500 text-white'
                    : tag === 'BEGINNER'
                    ? 'bg-green-500 text-white'
                    : tag === 'JUNIOR'
                    ? 'bg-blue-500 text-white'
                    : tag === 'INTERMEDIATE'
                    ? 'bg-yellow-500 text-black'
                    : tag === 'ADVANCED'
                    ? 'bg-red-500 text-white'
                    : 'bg-gray-700 text-gray-300'
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Title */}
        <h2 className="text-2xl font-bold mb-2">{title}</h2>

        {/* Description */}
        {description && <p className="text-gray-400 mb-3">{description}</p>}
      </div>
    </div>
  );
};

export default LearningCard;
