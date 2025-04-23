'use client';
import React from 'react';
import { useTheme } from '../../context/ThemeContext';

interface StatCardProps {
  title: string;
  value: string | number;
  change?: string;
  icon: React.ReactNode;
  trend?: 'up' | 'down' | 'neutral';
  color?: 'blue' | 'green' | 'red' | 'purple' | 'yellow';
}

const StatCard: React.FC<StatCardProps> = ({ title, value, change, icon, trend = 'neutral', color = 'blue' }) => {
  const { theme } = useTheme();

  const bgColor = theme === 'dark' ? 'bg-gray-800' : 'bg-white';
  const borderColor = theme === 'dark' ? 'border-gray-700' : 'border-gray-200';

  const getIconColor = () => {
    switch (color) {
      case 'blue':
        return 'text-blue-500 bg-blue-500/10';
      case 'green':
        return 'text-green-500 bg-green-500/10';
      case 'red':
        return 'text-red-500 bg-red-500/10';
      case 'purple':
        return 'text-purple-500 bg-purple-500/10';
      case 'yellow':
        return 'text-yellow-500 bg-yellow-500/10';
      default:
        return 'text-blue-500 bg-blue-500/10';
    }
  };

  const getTrendColor = () => {
    switch (trend) {
      case 'up':
        return 'text-green-500';
      case 'down':
        return 'text-red-500';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <div
      className={`rounded-lg ${bgColor} shadow p-6 border ${borderColor} transition-all duration-300 hover:shadow-md`}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500 mb-1">{title}</p>
          <h3 className="text-2xl font-semibold mb-1">{value}</h3>
          {change && (
            <p className={`text-xs flex items-center ${getTrendColor()}`}>
              {trend === 'up' ? '↑' : trend === 'down' ? '↓' : '•'} {change}
            </p>
          )}
        </div>
        <div className={`p-3 rounded-full ${getIconColor()}`}>{icon}</div>
      </div>
    </div>
  );
};

export default StatCard;
