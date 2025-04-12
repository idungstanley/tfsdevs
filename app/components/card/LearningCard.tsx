'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { LearningCardProps } from '@/app/types/index.interface';

const LearningCard: React.FC<LearningCardProps> = ({ thumbnailUrl, title, tags = [], description = '' }) => {
  // State to manage the "See More" toggle
  const [isExpanded, setIsExpanded] = useState(false);

  // Function to count words in the description
  const countWords = (text: string): number => {
    return text.trim().split(/\s+/).filter(Boolean).length;
  };

  // Function to truncate the description to a specified number of words
  const truncateWords = (text: string, wordLimit: number): string => {
    const words = text.trim().split(/\s+/).filter(Boolean);
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(' ') + '...';
  };

  // Check if description exceeds 250 words
  const wordCount = countWords(description);
  const exceedsWordLimit = wordCount > 40;

  // Truncated description (first 100 words) for mobile
  const truncatedDescription = truncateWords(description, 100);

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

        {/* Description with "See More" on mobile */}
        {description && (
          <div>
            {/* On mobile (<md), show truncated description with "See More" if over 250 words */}
            <p className="text-gray-400 mb-3 md:block hidden">{description}</p>
            <div className="md:hidden">
              <p className="text-gray-400 mb-3">
                {exceedsWordLimit && !isExpanded ? truncatedDescription : description}
              </p>
              {exceedsWordLimit && (
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="text-blue-400 hover:text-blue-300 text-sm font-semibold focus:outline-none"
                >
                  {isExpanded ? 'See Less' : 'See More'}
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LearningCard;
