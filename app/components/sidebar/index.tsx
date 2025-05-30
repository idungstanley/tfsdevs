import React from 'react';
import {
  Home,
  BarChart2,
  Settings,
  Calendar,
  HelpCircle,
  BookOpen,
  LogOut,
  ClipboardList,
  CreditCard,
  Gift,
  SquareLibrary
} from 'lucide-react';
import Logo from './Logo';
import SidebarItem from './SidebarItem';

const Sidebar = ({
  setExpanded,
  expanded
}: {
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
  expanded: boolean;
}) => {

  return (
    <div className="h-full dark:bg-gray-800 border-gray-200 bg-white border-r dark:border-gray-700 flex flex-col">
      {/* Logo and branding */}
      <div
        className={`border-b border-gray-200 dark:border-gray-700 flex items-center justify-between h-16 ${
          expanded ? 'p-4' : 'p-2'
        }`}
      >
        <Logo expanded={expanded} />
        <button
          onClick={() => setExpanded(!expanded)}
          className="p-1 rounded-full dark:text-gray-200 text-gray-700 hover:text-[#684DF4] cursor-pointer hover:text-[16px] shrink-0 flex items-center justify-center"
        >
          <span>{expanded ? '«' : '»'}</span>
        </button>
      </div>

      {/* Navigation items */}
      <nav className="flex-1 pt-4 overflow-y-auto">
        <ul className="space-y-1 px-2">
          <SidebarItem icon={<Home size={20} />} text="Dashboard" route="dashboard" expanded={expanded} />
          <SidebarItem icon={<BarChart2 size={20} />} text="Analytics" route="analytics" expanded={expanded} />
          <SidebarItem icon={<Calendar size={20} />} text="Calendar" route="calendar" expanded={expanded} />
          <SidebarItem icon={<BookOpen size={20} />} text="Courses" route="courses" expanded={expanded} />
          <SidebarItem icon={<SquareLibrary size={20} />} text="My learning" route="my-learning" expanded={expanded} />
          <SidebarItem
            icon={<ClipboardList size={20} />}
            text="Applications"
            route="application-history"
            expanded={expanded}
          />
          <SidebarItem icon={<CreditCard size={20} />} text="Payments" route="payment-history" expanded={expanded} />
          <SidebarItem icon={<Gift size={20} />} text="Earn" route="earn" expanded={expanded} />
        </ul>

        <div className="mt-8 px-3">
          <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
            <ul className="space-y-1 px-2">
              <SidebarItem icon={<Settings size={20} />} text="Settings" route="settings" expanded={expanded} />
              <SidebarItem icon={<HelpCircle size={20} />} text="Help" route="help" expanded={expanded} />
              <SidebarItem icon={<LogOut size={20} />} text="Logout" route="logout" expanded={expanded} />
            </ul>
          </div>
        </div>
      </nav>

      {/* User profile at bottom */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-700 flex items-center space-x-3">
        <div className="flex-shrink-0">
          <div className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-medium">
            JS
          </div>
        </div>
        {expanded && (
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-300 truncate">Stanley Sunday</p>
            <p className="text-xs text-gray-500 truncate">john@example.com</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
