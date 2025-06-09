'use client'
import React from 'react';
import { Users, BarChart, Calendar, BookOpen } from 'lucide-react';
import { programsData, recentActivities } from '@/app/constants';
import ActivityCard from '@/app/components/card/ActivityCard';
import ProgramCard from '@/app/components/card/ProgramCard';
import StatCard from '@/app/components/card/StatCard';
import { useAppSelector } from '@/app/store/store';

const Dashboard: React.FC = () => {
  const { selfDetails } = useAppSelector((state) => state.auth);
  const isEmpty = true;
  return (
    <div className="space-y-6">
      {/* Welcome header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold">Welcome back, {selfDetails?.firstName}</h1>
          <p className="text-gray-500 mt-1">Here&rsquo;s what&rsquo;s happening with your courses today</p>
        </div>
        <div className="mt-4 md:mt-0">
          <button className="px-4 py-2 bg-[#684DF4] text-white rounded-md hover:bg-[#684DF4]/80 cursor-pointer transition-colors">
            Explore Programs
          </button>
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Active Courses"
          value="0"
          // change="2 more than last month"
          trend="up"
          icon={<BookOpen size={24} />}
          color="blue"
        />
        <StatCard
          title="Completed"
          value="0"
          // change="5 more than last month"
          trend="up"
          icon={<BarChart size={24} />}
          color="green"
        />
        <StatCard
          title="Upcoming Events"
          value="0"
          // change="No change"
          trend="neutral"
          icon={<Calendar size={24} />}
          color="purple"
        />
        <StatCard
          title="Team Members"
          value="0"
          // change="2 less than last month"
          trend="down"
          icon={<Users size={24} />}
          color="yellow"
        />
      </div>

      {/* Main content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Programs section - takes up 2/3 on larger screens */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Your Programs</h2>
            <button className="text-sm text-indigo-500 hover:text-indigo-400">View All</button>
          </div>

          {isEmpty ? (
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-primary-light dark:text-primary-dark">You have no active program!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {programsData.map((program) => (
                <ProgramCard
                  key={program.id}
                  title={program.title}
                  description={program.description}
                  image={program.image}
                  progress={program.progress}
                />
              ))}
            </div>
          )}
        </div>

        {/* Activity feed - takes up 1/3 on larger screens */}
        <>
          <ActivityCard activities={recentActivities} />
        </>
      </div>
    </div>
  );
};

export default Dashboard;
