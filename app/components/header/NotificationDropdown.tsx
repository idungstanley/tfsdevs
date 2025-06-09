import { notifications } from '@/app/constants';
import { useTheme } from '@/app/context/ThemeContext';
import React, { useRef } from 'react';
import { useClickAway } from 'react-use';
export interface NotificationProps {
  id: number;
  title: string;
  description: string;
  time: string;
  read: boolean;
}

const NotificationDropdown = ({
  setShowNotifications,
  showNotifications
}: {
  setShowNotifications: React.Dispatch<React.SetStateAction<boolean>>;
  showNotifications: boolean;
}) => {
  const { theme } = useTheme();
  const notificationRef = useRef<HTMLDivElement>(null);
  useClickAway(notificationRef, () => {
    setShowNotifications(false);
  });

  const bgColor = theme === 'dark' ? 'bg-gray-800' : 'bg-white';
  const borderColor = theme === 'dark' ? 'border-gray-700' : 'border-gray-200';

  if (!showNotifications) {
    return null;
  }

  return (
    <div
      ref={notificationRef}
      className={`absolute right-0 mt-2 w-80 rounded-md shadow-lg overflow-hidden z-10 ${bgColor} ring-1 ring-black ring-opacity-5 border ${borderColor}`}
    >
      <div className="px-4 py-3 border-b border-gray-700">
        <h3 className="text-sm font-medium">Notifications</h3>
      </div>
      {notifications.length === 0 ? (
        <div className="flex items-center justify-center w-full p-4 text-gray-400">No notification found</div>
      ) : (
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
      )}
      <div className="p-2 text-center border-t border-gray-700">
        <button className="text-xs text-indigo-500 hover:text-indigo-400 font-medium">View all notifications</button>
      </div>
    </div>
  );
};

export default NotificationDropdown;
