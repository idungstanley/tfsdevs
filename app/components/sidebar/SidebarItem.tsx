import Link from 'next/link';
import React from 'react';

interface SidebarItemProps {
  icon: React.ReactNode;
  text: string;
  active?: boolean;
  expanded?: boolean;
  route?: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, text, expanded = true, route }) => {
  const isActive = location.pathname === `/${route || ''}`;

  return (
    <li>
      <Link
        href={`/${route || ''}`}
        className={`flex items-center p-2 rounded-md transition-colors duration-200 
          ${isActive ? 'bg-indigo-600 text-white' : 'text-gray-400 hover:bg-gray-700 hover:text-white'} ${
          expanded ? 'justify-start' : 'justify-center'
        }`}
      >
        <span className="flex-shrink-0">{icon}</span>
        {expanded && <span className="ml-3 whitespace-nowrap">{text}</span>}
      </Link>
    </li>
  );
};

export default SidebarItem;
