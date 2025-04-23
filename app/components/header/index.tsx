import React, { useState } from 'react';
import { Bell, Menu, Moon, Sun } from 'lucide-react';
import { useTheme } from '@/app/context/ThemeContext';
import SearchBar from './SearchBar';
import NotificationDropdown from './NotificationDropdown';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [showNotifications, setShowNotifications] = useState(false);

  const bgColor = theme === 'dark' ? 'bg-gray-800' : 'bg-white';
  const borderColor = theme === 'dark' ? 'border-gray-700' : 'border-gray-200';

  return (
    <header className={`${bgColor} border-b ${borderColor} h-16 flex items-center justify-between px-4 lg:px-6`}>
      {/* Mobile menu button */}
      <button className="md:hidden rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white">
        <Menu size={24} />
      </button>

      {/* Search bar */}
      <div className="hidden md:flex md:flex-1 md:max-w-md lg:max-w-lg">
        <SearchBar />
      </div>

      {/* Right side actions */}
      <div className="flex items-center space-x-4">
        {/* Theme toggle */}
        <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-700 text-gray-400 hover:text-white">
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        {/* Notifications */}
        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="p-2 rounded-full hover:bg-gray-700 text-gray-400 hover:text-white"
          >
            <Bell size={20} />
            <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full flex items-center justify-center text-xs text-white">
              3
            </span>
          </button>

          {showNotifications && <NotificationDropdown />}
        </div>

        {/* User profile pic */}
        <div className="flex-shrink-0 md:hidden">
          <div className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-medium">
            JS
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
