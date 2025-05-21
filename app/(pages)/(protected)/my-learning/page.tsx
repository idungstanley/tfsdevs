'use client';
import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { useTheme } from '@/app/context/ThemeContext';
import { categories, courses } from '@/app/constants/courses';
import CourseCard from '@/app/components/card/CoursesCard';


const CoursesPage: React.FC = () => {
  const { theme } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCourses = courses.filter((course) => {
    const matchesCategory = !selectedCategory || course.category === selectedCategory;
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold">Courses</h1>
          <p className="text-gray-500 mt-1">Expand your knowledge with our comprehensive courses</p>
        </div>
      </div>
      {/* Search and Filter Bar */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search courses..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`w-full pl-10 pr-4 py-2 rounded-lg ${
              theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
            } border border-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-transparent`}
          />
        </div>
        <div className="flex gap-2">
          <button
            className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
              theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
            } border border-gray-700`}
          >
            <Filter size={20} />
            <span>Filters</span>
          </button>
        </div>
      </div>

      {/* Categories */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(selectedCategory === category.id ? null : category.id)}
            className={`p-4 rounded-lg flex flex-col items-center justify-center gap-2 transition-all ${
              selectedCategory === category.id
                ? 'bg-indigo-600 text-white'
                : theme === 'dark'
                ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                : 'bg-white text-gray-900 hover:bg-gray-50'
            }`}
          >
            <category.icon size={24} />
            <span className="text-sm font-medium">{category.name}</span>
            <span className="text-xs opacity-75">{category.count} courses</span>
          </button>
        ))}
      </div>
      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
