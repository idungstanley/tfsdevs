import React from 'react';
import {
  Home,
  BarChart2,
  Users,
  FileText,
  Settings,
  Calendar,
  HelpCircle,
  Briefcase,
  BookOpen,
  LogOut
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import Logo from './Logo';
import SidebarItem from './SidebarItem';

const Sidebar = ({
  setExpanded,
  expanded
}: {
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
  expanded: boolean;
}) => {
  const { theme } = useTheme();

  const bgColor = theme === 'dark' ? 'bg-gray-800' : 'bg-white';
  const borderColor = theme === 'dark' ? 'border-gray-700' : 'border-gray-200';

  return (
    <div className={`h-full ${bgColor} border-r ${borderColor} flex flex-col transition-all duration-300 ease-in-out`}>
      {/* Logo and branding */}
      <div className={` border-b border-gray-700 flex items-center justify-between h-16 ${expanded ? 'p-4' : 'p-2'}`}>
        <Logo expanded={expanded} />
        <button
          onClick={() => setExpanded(!expanded)}
          className="p-1 rounded-full hover:bg-gray-700 text-gray-400 hover:text-white w-4 ml-2 cursor-pointer shrink-0 h-4 flex items-center justify-center"
        >
          {expanded ? '«' : '»'}
        </button>
      </div>

      {/* Navigation items */}
      <nav className="flex-1 pt-4 overflow-y-auto">
        <ul className="space-y-1 px-2">
          <SidebarItem icon={<Home size={20} />} text="Dashboard" active expanded={expanded} />
          <SidebarItem icon={<BarChart2 size={20} />} text="Analytics" expanded={expanded} />
          <SidebarItem icon={<Calendar size={20} />} text="Application History" expanded={expanded} />
          <SidebarItem icon={<Briefcase size={20} />} text="Projects" expanded={expanded} />
          <SidebarItem icon={<BookOpen size={20} />} text="Courses" expanded={expanded} />
          <SidebarItem icon={<FileText size={20} />} text="Documents" expanded={expanded} />
          <SidebarItem icon={<Users size={20} />} text="Earn" expanded={expanded} />
        </ul>

        <div className="mt-8 px-3">
          <div className="border-t border-gray-700 pt-4">
            <ul className="space-y-1 px-2">
              <SidebarItem icon={<Settings size={20} />} text="Settings" expanded={expanded} />
              <SidebarItem icon={<HelpCircle size={20} />} text="Help" expanded={expanded} />
              <SidebarItem icon={<LogOut size={20} />} text="Logout" expanded={expanded} />
            </ul>
          </div>
        </div>
      </nav>

      {/* User profile at bottom */}
      <div className={`p-4 border-t ${borderColor} flex items-center space-x-3`}>
        <div className="flex-shrink-0">
          <div className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-medium">
            JS
          </div>
        </div>
        {expanded && (
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-300 truncate">John Smith</p>
            <p className="text-xs text-gray-500 truncate">john@example.com</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
