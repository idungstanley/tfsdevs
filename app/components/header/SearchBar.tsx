import React, { useState, useEffect, useRef } from 'react';
import { Search } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface SearchResult {
  id: string;
  title: string;
  type: 'course' | 'lesson';
  description: string;
  image?: string;
}

const mockResults: SearchResult[] = [
  {
    id: '1',
    title: 'Modern Frontend Development',
    type: 'course',
    description: 'Learn React, TypeScript, and modern frontend development',
    image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg'
  },
  {
    id: '2',
    title: 'Introduction to React',
    type: 'lesson',
    description: 'First lesson in React fundamentals'
  },
  {
    id: '3',
    title: 'Data Science Fundamentals',
    type: 'course',
    description: 'Master data analysis and visualization',
    image: 'https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg'
  }
];

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useRouter();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (query.length >= 2) {
      // In a real app, this would be an API call
      const filtered = mockResults.filter((result) => result.title.toLowerCase().includes(query.toLowerCase()));
      setResults(filtered);
      setIsOpen(true);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  }, [query]);

  const handleResultClick = (result: SearchResult) => {
    if (result.type === 'course') {
      navigate.push(`/courses/${result.id}`);
    } else {
      navigate.push(`/courses/${result.id}#lesson`);
    }
    setIsOpen(false);
    setQuery('');
  };

  return (
    <div ref={searchRef} className="w-full relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search size={18} className="text-gray-400" />
      </div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search courses..."
        className="block w-full pl-10 pr-3 py-2 rounded-lg dark:bg-gray-700 bg-gray-200 dark:text-gray-200 text-gray-800 border-0 focus:ring-2 focus:ring-indigo-500 focus:outline-none placeholder:text-gray-400 dark:placeholder:text-gray-500"
      />

      {/* Search Results Dropdown */}
      {isOpen && results.length > 0 && (
        <div className="absolute mt-2 w-full rounded-lg shadow-lg  borderdark:bg-gray-800 border-gray-200 bg-white border-r dark:border-gray-700 overflow-hidden z-50">
          {results.map((result) => (
            <div
              key={result.id}
              onClick={() => handleResultClick(result)}
              className={`p-3 hover:bg-gray-700 cursor-pointer flex items-center gap-3`}
            >
              {result.image && <img src={result.image} alt={result.title} className="w-12 h-12 rounded object-cover" />}
              <div>
                <h4 className="font-medium">{result.title}</h4>
                <p className="text-sm text-gray-400">{result.description}</p>
                <span className="text-xs text-indigo-500">{result.type}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
