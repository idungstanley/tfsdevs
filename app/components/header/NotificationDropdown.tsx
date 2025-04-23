import { notifications } from '@/app/constants';
import { useTheme } from '@/app/context/ThemeContext';
import React from 'react';

const NotificationDropdown: React.FC = () => {
  const { theme } = useTheme();

  const bgColor = theme === 'dark' ? 'bg-gray-800' : 'bg-white';
  const borderColor = theme === 'dark' ? 'border-gray-700' : 'border-gray-200';

  return (
    <div
      className={`absolute right-0 mt-2 w-80 rounded-md shadow-lg overflow-hidden z-10 ${bgColor} ring-1 ring-black ring-opacity-5 border ${borderColor}`}
    >
      <div className="px-4 py-3 border-b border-gray-700">
        <h3 className="text-sm font-medium">Notifications</h3>
      </div>
      <div>
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`p-4 ${
              !notification.read && (theme === 'dark' ? 'bg-gray-750' : 'bg-blue-50')
            } border-b ${borderColor} hover:${
              theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'
            } transition-colors duration-150`}
          >
            <div className="flex items-start">
              {!notification.read && (
                <span className="h-2 w-2 mt-1.5 rounded-full bg-indigo-500 mr-2 flex-shrink-0"></span>
              )}
              <div className={notification.read ? 'pl-4' : ''}>
                <p className="text-sm font-medium">{notification.title}</p>
                <p className="text-xs text-gray-500 mt-1">{notification.description}</p>
                <p className="text-xs text-gray-400 mt-1">{notification.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="p-2 text-center border-t border-gray-700">
        <button className="text-xs text-indigo-500 hover:text-indigo-400 font-medium">View all notifications</button>
      </div>
    </div>
  );
};

export default NotificationDropdown;
