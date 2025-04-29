'use client'
import React, { useState } from 'react';
import { Clock, Users, Star, BookOpen, Play, FileText, HelpCircle } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { Lesson, Module } from '@/app/types/courses';
import VideoPlayer from '../videoPlayer';
import { courseDetail } from '@/app/constants/courses';


const CourseDetail: React.FC = () => {
  const { theme } = useTheme();
  const [selectedModule, setSelectedModule] = useState<Module | null>(null);
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);

  const bgColor = theme === 'dark' ? 'bg-gray-800' : 'bg-white';
  const borderColor = theme === 'dark' ? 'border-gray-700' : 'border-gray-200';

  return (
    <div className="space-y-6">
      {/* Course Header */}
      <div className={`rounded-lg ${bgColor} shadow p-6 border ${borderColor}`}>
        <div className="flex flex-col md:flex-row gap-6">
          {/* Course Image or Video Player */}
          <div className="md:w-1/3">
            {selectedLesson?.videoUrl ? (
              <VideoPlayer
                src={selectedLesson.videoUrl}
                poster={courseDetail.image}
                onEnded={() => console.log('Video ended')}
              />
            ) : (
              <img
                src={courseDetail.image}
                alt={courseDetail.title}
                className="w-full h-48 md:h-full object-cover rounded-lg"
              />
            )}
          </div>

          {/* Course Info */}
          <div className="md:w-2/3 space-y-4">
            <h1 className="text-2xl font-bold">{courseDetail.title}</h1>
            <p className="text-gray-400">{courseDetail.description}</p>

            {/* Course Meta */}
            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
              <div className="flex items-center">
                <Clock size={16} className="mr-1" />
                {courseDetail.duration}h total
              </div>
              <div className="flex items-center">
                <Users size={16} className="mr-1" />
                {courseDetail.enrolledStudents} students
              </div>
              <div className="flex items-center text-yellow-500">
                <Star size={16} className="mr-1 fill-current" />
                {courseDetail.rating} ({courseDetail.reviews} reviews)
              </div>
              <div className="flex items-center">
                <BookOpen size={16} className="mr-1" />
                {courseDetail.level}
              </div>
            </div>

            {/* Instructor */}
            <div className="flex items-center gap-3">
              <img
                src={courseDetail.instructor.avatar}
                alt={courseDetail.instructor.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-medium">{courseDetail.instructor.name}</p>
                <p className="text-sm text-gray-400">{courseDetail.instructor.title}</p>
              </div>
            </div>

            {/* Progress */}
            {courseDetail.progress !== undefined && (
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">Course Progress</span>
                  <span className="text-indigo-500">{courseDetail.progress}%</span>
                </div>
                <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-indigo-500 rounded-full"
                    style={{ width: `${courseDetail.progress}%` }}
                  ></div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Modules List */}
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-xl font-semibold">Course Content</h2>

          {courseDetail.modules.map((module) => (
            <div key={module.id} className={`${bgColor} rounded-lg border ${borderColor} overflow-hidden`}>
              {/* Module Header */}
              <button
                onClick={() => setSelectedModule(selectedModule?.id === module.id ? null : module)}
                className="w-full p-4 flex items-center justify-between hover:bg-gray-700"
              >
                <div className="flex items-center gap-3">
                  {module.completed ? (
                    <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                      <BookOpen size={14} className="text-white" />
                    </div>
                  ) : (
                    <div className="w-6 h-6 rounded-full border-2 border-gray-600" />
                  )}
                  <div className="text-left">
                    <h3 className="font-medium">{module.title}</h3>
                    <p className="text-sm text-gray-400">
                      {module.duration} min • {module.lessons.length} lessons
                    </p>
                  </div>
                </div>
                <span className="transform transition-transform duration-200">
                  {selectedModule?.id === module.id ? '▼' : '▶'}
                </span>
              </button>

              {/* Module Lessons */}
              {selectedModule?.id === module.id && (
                <div className="border-t border-gray-700">
                  {module.lessons.map((lesson) => (
                    <div
                      key={lesson.id}
                      onClick={() => setSelectedLesson(lesson)}
                      className={`p-4 flex items-center gap-3 hover:bg-gray-700 cursor-pointer ${
                        selectedLesson?.id === lesson.id ? 'bg-gray-700' : ''
                      }`}
                    >
                      {/* Lesson Type Icon */}
                      <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center">
                        {lesson.type === 'video' && <Play size={14} />}
                        {lesson.type === 'article' && <FileText size={14} />}
                        {lesson.type === 'quiz' && <HelpCircle size={14} />}
                      </div>

                      <div className="flex-1">
                        <p className="font-medium">{lesson.title}</p>
                        <p className="text-sm text-gray-400">
                          {lesson.duration} min • {lesson.type}
                        </p>
                      </div>

                      {lesson.completed && (
                        <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                          <BookOpen size={14} className="text-white" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Prerequisites and Info */}
        <div className="space-y-6">
          <div className={`${bgColor} rounded-lg border ${borderColor} p-6`}>
            <h3 className="text-lg font-semibold mb-4">Prerequisites</h3>
            <ul className="space-y-2">
              {courseDetail.prerequisites?.map((prerequisite, index) => (
                <li key={index} className="flex items-center gap-2 text-gray-400">
                  <div className="w-2 h-2 rounded-full bg-indigo-500" />
                  {prerequisite}
                </li>
              ))}
            </ul>
          </div>

          <div className={`${bgColor} rounded-lg border ${borderColor} p-6`}>
            <h3 className="text-lg font-semibold mb-4">What You&apos;ll Learn</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-400">
                <BookOpen size={16} />
                Build modern React applications
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <BookOpen size={16} />
                Master TypeScript integration
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <BookOpen size={16} />
                Implement advanced patterns
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <BookOpen size={16} />
                Deploy production applications
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
