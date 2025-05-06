'use client'
import React from 'react';
import { useTheme } from '../../../context/ThemeContext';
import { Clock, Award, BookOpen, Target } from 'lucide-react';
import StatCard from '@/app/components/card/StatCard';

const Analytics: React.FC = () => {
  const { theme } = useTheme();
  const bgColor = theme === 'dark' ? 'bg-gray-800' : 'bg-white';
  const borderColor = theme === 'dark' ? 'border-gray-700' : 'border-gray-200';

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Learning Analytics</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Study Time"
          value="45h"
          change="+5h this week"
          trend="up"
          icon={<Clock size={24} />}
          color="blue"
        />
        <StatCard
          title="Completed Courses"
          value="8"
          change="2 this month"
          trend="up"
          icon={<Award size={24} />}
          color="green"
        />
        <StatCard
          title="Active Courses"
          value="3"
          change="Same as last month"
          trend="neutral"
          icon={<BookOpen size={24} />}
          color="purple"
        />
        <StatCard
          title="Goals Met"
          value="85%"
          change="+5% improvement"
          trend="up"
          icon={<Target size={24} />}
          color="yellow"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Weekly Progress */}
        <div className={`${bgColor} rounded-lg border ${borderColor} p-6`}>
          <h3 className="text-lg font-semibold mb-4">Weekly Learning Progress</h3>
          <div className="space-y-4">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
              <div key={day} className="flex items-center">
                <span className="w-10 text-sm text-gray-400">{day}</span>
                <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden ml-4">
                  <div className="h-full bg-indigo-500 rounded-full" style={{ width: `${Math.random() * 100}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Course Completion */}
        <div className={`${bgColor} rounded-lg border ${borderColor} p-6`}>
          <h3 className="text-lg font-semibold mb-4">Course Completion Rate</h3>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Frontend Development</span>
                <span className="text-indigo-500">75%</span>
              </div>
              <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-500 rounded-full" style={{ width: '75%' }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Data Science</span>
                <span className="text-indigo-500">45%</span>
              </div>
              <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-500 rounded-full" style={{ width: '45%' }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Cloud Engineering</span>
                <span className="text-indigo-500">30%</span>
              </div>
              <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-500 rounded-full" style={{ width: '30%' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
