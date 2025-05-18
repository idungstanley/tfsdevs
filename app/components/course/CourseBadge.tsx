import React from 'react';

interface CourseBadgeProps {
  type: string;
  className?: string;
}

const CourseBadge: React.FC<CourseBadgeProps> = ({ type, className = '' }) => {
  const getBadgeStyles = () => {
    switch (type.toLowerCase()) {
      case 'bestseller':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'new':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'hot':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'sale':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-blue-100 text-blue-800 border-blue-200';
    }
  };

  return (
    <span className={`text-xs font-medium px-2 py-0.5 rounded border ${getBadgeStyles()} ${className}`}>
      {type.charAt(0).toUpperCase() + type.slice(1)}
    </span>
  );
};

export default CourseBadge;
