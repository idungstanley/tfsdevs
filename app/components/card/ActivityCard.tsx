'use client';
import React from 'react';
import { useTheme } from '../../context/ThemeContext';

interface Activity {
  id: number;
  user: string;
  action: string;
  target: string;
  time: string;
}

interface ActivityCardProps {
  activities: Activity[];
}

const ActivityCard: React.FC<ActivityCardProps> = ({ activities }) => {
  const { theme } = useTheme();
  const isEmpty = true;

  const bgColor = theme === 'dark' ? 'bg-gray-800' : 'bg-white';
  const borderColor = theme === 'dark' ? 'border-gray-700' : 'border-gray-200';

  return (
    <div className={`rounded-lg ${bgColor} shadow p-6 h-fit border ${borderColor}`}>
      <h3 className="text-lg font-medium mb-4">Recent Activity</h3>

      {isEmpty ? (
        <div className="w-full h-full flex items-center justify-center min-h-52">
          <p className="text-primary-light dark:text-primary-dark">No pending tickets found!</p>
        </div>
      ) : (
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start space-x-3">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-medium text-sm">
                {activity.user.substring(0, 2).toUpperCase()}
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm text-gray-300">
                  <span className="font-medium">{activity.user}</span> {activity.action}{' '}
                  <span className="font-medium">{activity.target}</span>
                </p>
                <p className="text-xs text-gray-500 mt-0.5">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-4 pt-4 border-t border-gray-700">
        <button className="text-sm text-indigo-500 hover:text-indigo-400">View all activity</button>
      </div>
    </div>
  );
};

export default ActivityCard;
