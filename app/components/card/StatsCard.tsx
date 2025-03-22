import React from 'react';

interface StatsCardProps {
  title: string;
  value: string;
  description: string;
  ctaText: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, description, ctaText }) => {
  return (
    <div className="relative bg-white p-6 rounded-lg shadow-lg overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-purple-500"></div>
      <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
      <p className="mt-2 text-4xl font-bold text-gray-900">{value}</p>
      <p className="mt-2 text-gray-600">{description}</p>
      <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
        {ctaText}
      </button>
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform translate-x-1/2 translate-y-1/2"></div>
    </div>
  );
};

export default StatsCard;
