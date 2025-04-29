'use client';
import React from 'react';
import { Calendar as CalendarIcon } from 'lucide-react';
import { useTheme } from '@/app/context/ThemeContext';

interface Assignment {
  id: string;
  title: string;
  course: string;
  dueDate: string;
  status: 'pending' | 'completed' | 'overdue';
}

const assignments: Assignment[] = [
  {
    id: '1',
    title: 'React Components Implementation',
    course: 'Frontend Development',
    dueDate: '2024-03-20',
    status: 'pending'
  },
  {
    id: '2',
    title: 'Data Analysis Project',
    course: 'Data Science',
    dueDate: '2024-03-25',
    status: 'pending'
  },
  {
    id: '3',
    title: 'Cloud Architecture Design',
    course: 'Cloud Engineering',
    dueDate: '2024-03-15',
    status: 'overdue'
  },
  {
    id: '4',
    title: 'UI/UX Case Study',
    course: 'Design Principles',
    dueDate: '2024-03-10',
    status: 'completed'
  }
];

const Calendar: React.FC = () => {
  const { theme } = useTheme();

  const bgColor = theme === 'dark' ? 'bg-gray-800' : 'bg-white';
  const borderColor = theme === 'dark' ? 'border-gray-700' : 'border-gray-200';

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'text-green-500 bg-green-500/10';
      case 'overdue':
        return 'text-red-500 bg-red-500/10';
      default:
        return 'text-yellow-500 bg-yellow-500/10';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Assignment Calendar</h2>
        {/* <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
          Add Assignment
        </button> */}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Weekly Calendar */}
        <div className={`lg:col-span-2 ${bgColor} rounded-lg border ${borderColor} p-6`}>
          <div className="grid grid-cols-7 gap-4">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
              <div key={day} className="text-center text-sm text-gray-400">
                {day}
              </div>
            ))}
            {Array.from({ length: 35 }).map((_, i) => (
              <div
                key={i}
                className={`aspect-square rounded-lg border ${borderColor} flex items-center justify-center relative
                  ${i % 7 === 0 || i % 7 === 6 ? 'text-gray-500' : ''}`}
              >
                {i + 1}
                {i === 14 && <span className="absolute top-1 right-1 w-2 h-2 bg-indigo-500 rounded-full" />}
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Assignments */}
        <div className={`${bgColor} rounded-lg border ${borderColor} p-6`}>
          <h3 className="text-lg font-semibold mb-4">Upcoming Assignments</h3>
          <div className="space-y-4">
            {assignments.map((assignment) => (
              <div
                key={assignment.id}
                className={`p-4 rounded-lg border ${borderColor} hover:bg-gray-700/10 transition-colors`}
              >
                <h4 className="font-medium mb-2">{assignment.title}</h4>
                <p className="text-sm text-gray-400 mb-2">{assignment.course}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-400">
                    <CalendarIcon size={16} className="mr-1" />
                    {assignment.dueDate}
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(assignment.status)}`}>
                    {assignment.status.charAt(0).toUpperCase() + assignment.status.slice(1)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
