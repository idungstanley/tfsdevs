import React from 'react';
import { Search } from 'lucide-react';
import { useTheme } from '@/app/context/ThemeContext';

const SearchBar: React.FC = () => {
  const { theme } = useTheme();

  const inputBg = theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100';
  const inputText = theme === 'dark' ? 'text-gray-200' : 'text-gray-800';
  const inputPlaceholder = theme === 'dark' ? 'text-gray-400' : 'text-gray-500';

  return (
    <div className="w-full relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search size={18} className="text-gray-400" />
      </div>
      <input
        type="text"
        placeholder="Search..."
        className={`block w-full pl-10 pr-3 py-2 rounded-lg ${inputBg} ${inputText} border-0 focus:ring-2 focus:ring-indigo-500 focus:outline-none placeholder:${inputPlaceholder}`}
      />
    </div>
  );
};

export default SearchBar;
