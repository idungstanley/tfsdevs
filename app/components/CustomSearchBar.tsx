import { useState } from 'react';
import { FiSearch, FiX } from 'react-icons/fi';

const CustomSearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleClear = () => {
    setSearchTerm('');
  };

  return (
    <div className="relative w-full max-w-md">
      <div className="flex items-center bg-white rounded-full border border-gray-300 focus-within:border-[#684DF4] focus-within:ring-2 focus-within:ring-[#684DF4]/20 px-4 py-2 shadow-sm transition-all duration-200">
        <FiSearch className="text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Find your hackathon"
          className="flex-1 outline-none text-gray-700 placeholder-gray-400 text-sm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {searchTerm && (
          <button onClick={handleClear} className="text-gray-400 hover:text-gray-600 transition-colors">
            <FiX />
          </button>
        )}
      </div>
    </div>
  );
};

export default CustomSearchBar;
