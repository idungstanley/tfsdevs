'use client';
import React from 'react';
import { ExternalLink } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

interface ProgramCardProps {
  title: string;
  description: string;
  image: string;
  progress?: number;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ title, description, image, progress }) => {
  const { theme } = useTheme();

  const bgColor = theme === 'dark' ? 'bg-gray-800' : 'bg-white';
  const borderColor = theme === 'dark' ? 'border-gray-700' : 'border-gray-200';

  return (
    <div
      className={`rounded-lg ${bgColor} shadow border ${borderColor} overflow-hidden transition-all duration-300 hover:shadow-md hover:translate-y-[-2px]`}
    >
      <div className="h-40 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-sm text-gray-400 mb-4 line-clamp-2">{description}</p>

        {progress !== undefined && (
          <div className="mt-2 mb-4">
            <div className="flex justify-between text-xs mb-1">
              <span className="text-gray-400">Progress</span>
              <span className="text-indigo-500">{progress}%</span>
            </div>
            <div className="h-1.5 w-full bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full bg-indigo-500 rounded-full" style={{ width: `${progress}%` }}></div>
            </div>
          </div>
        )}

        <div className="flex justify-between items-center mt-4">
          <button className="px-3 py-1.5 bg-indigo-600 text-white text-sm rounded-md hover:bg-indigo-700 transition-colors">
            View Details
          </button>
          <button className="p-1.5 text-gray-400 hover:text-white">
            <ExternalLink size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;
