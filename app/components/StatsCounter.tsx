'use client';
import React from 'react';
import CountUp from 'react-countup';
import { FcAlarmClock, FcBusinessman, FcGlobe, FcReadingEbook } from 'react-icons/fc';

const initialStats = [
  { id: 1, value: 986, label: 'Learners served', icon: <FcReadingEbook /> },
  { id: 2, value: 896, label: 'Time spent on content', icon: <FcAlarmClock /> },
  { id: 3, value: 20, label: 'Skilled Experts', icon: <FcBusinessman /> },
  { id: 4, value: 5, label: 'Countries', icon: <FcGlobe /> }
];

const StatsCounter = () => {
  return (
    <section
      className="bg-no-repeat bg-cover"
      style={{
        backgroundImage: "url('/counter-bg.webp')",
        backgroundPosition: 'center center',
        backgroundSize: '100 100'
      }}
    >
      <div className="w-full py-12">
        <div className="container flex flex-col md:flex-row md:justify-around justify-start md:items-center md:flex-wrap gap-6 px-10">
          {initialStats.map((stat) => (
            <div key={stat.id} className="text-center text-white flex items-center gap-4">
              <div className="relative w-16 h-16 flex items-center justify-center bg-white rounded-full text-[30px]">
                {stat.icon}
              </div>
              <div className="flex flex-col gap-2 text-start">
                <h2 className="text-4xl font-bold">
                  <CountUp start={0} end={stat.value} />+
                </h2>
                <p className="text-lg">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
