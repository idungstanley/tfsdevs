export interface Course {
  id: string;
  title: string;
  description: string;
  image: string;
  category: 'frontend' | 'backend' | 'design' | 'mobile' | 'data';
  level: 'beginner' | 'intermediate' | 'advanced';
  duration: number; // in hours
  modules: Module[];
  prerequisites?: string[];
  instructor: {
    name: string;
    avatar: string;
    title: string;
  };
  enrolledStudents: number;
  rating: number;
  reviews: number;
  progress?: number;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  duration: number;
  completed?: boolean;
  lessons: Lesson[];
}

export interface Lesson {
  id: string;
  title: string;
  type: 'video' | 'article' | 'quiz';
  duration: number; // in minutes
  completed?: boolean;
  videoUrl?: string;
}

export interface CourseProgress {
  courseId: string;
  userId: string;
  progress: number;
  completedModules: string[];
  completedLessons: string[];
  lastAccessed: Date;
  certificateEarned: boolean;
}
