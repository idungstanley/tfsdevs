import { BookOpen, Code, Database, Palette, Smartphone } from "lucide-react";
import { CheckoutCourses, Course } from "../types/courses";

// Mock data for demonstration
export const courseDetail: Course = {
    id: '1',
    title: 'Modern Frontend Development',
    description:
        'Master modern frontend development with React, TypeScript, and other essential tools. This comprehensive course covers everything from basic concepts to advanced patterns and best practices.',
    image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg',
    category: 'frontend',
    level: 'intermediate',
    duration: 40,
    prerequisites: ['Basic JavaScript knowledge', 'HTML & CSS fundamentals', 'Understanding of web development concepts'],
    modules: [
        {
            id: 'm1',
            title: 'React Fundamentals',
            description: 'Learn the core concepts of React including components, props, and state',
            duration: 120,
            completed: true,
            lessons: [
                {
                    id: 'l1',
                    title: 'Introduction to React',
                    type: 'video',
                    duration: 15,
                    completed: true,
                    videoUrl: 'https://download.samplelib.com/mp4/sample-30s.mp4'
                },
                { id: 'l2', title: 'Components and Props', type: 'video', duration: 20, completed: true },
                { id: 'l3', title: 'State and Lifecycle', type: 'video', duration: 25, completed: false },
                { id: 'l4', title: 'Module Quiz', type: 'quiz', duration: 15, completed: false }
            ]
        },
        {
            id: 'm2',
            title: 'Advanced React Patterns',
            description: 'Explore advanced React patterns and optimization techniques',
            duration: 180,
            completed: false,
            lessons: [
                { id: 'l5', title: 'Higher Order Components', type: 'video', duration: 30, completed: false },
                { id: 'l6', title: 'Render Props Pattern', type: 'article', duration: 20, completed: false },
                { id: 'l7', title: 'Context API Deep Dive', type: 'video', duration: 25, completed: false },
                { id: 'l8', title: 'Performance Optimization', type: 'video', duration: 35, completed: false }
            ]
        }
    ],
    instructor: {
        name: 'Sarah Johnson',
        avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
        title: 'Senior Frontend Developer'
    },
    enrolledStudents: 1234,
    rating: 4.8,
    reviews: 256,
    progress: 45
};



export const categories = [
    { id: 'frontend', name: 'Frontend Development', icon: BookOpen, count: 12 },
    { id: 'backend', name: 'Backend Development', icon: Code, count: 8 },
    { id: 'design', name: 'UI/UX Design', icon: Palette, count: 6 },
    { id: 'mobile', name: 'Mobile Development', icon: Smartphone, count: 4 },
    { id: 'data', name: 'Data Engineering', icon: Database, count: 5 }
];

export const courses: Course[] = [
    {
        id: '1',
        title: 'Modern Frontend Development',
        description: 'Learn React, TypeScript, and modern frontend development practices',
        image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg',
        category: 'frontend',
        level: 'intermediate',
        duration: 40,
        modules: [
            {
                id: 'm1',
                title: 'React Fundamentals',
                description: 'Core concepts of React',
                duration: 120,
                completed: true,
                lessons: [
                    { id: 'l1', title: 'Introduction to React', type: 'video', duration: 15, completed: true },
                    { id: 'l2', title: 'Components and Props', type: 'video', duration: 20, completed: true }
                ]
            }
        ],
        instructor: {
            name: 'Sarah Johnson',
            avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
            title: 'Senior Frontend Developer'
        },
        enrolledStudents: 1234,
        rating: 4.8,
        reviews: 256,
        progress: 45
    }
    // Add more courses here
];


export const checkoutCourses: CheckoutCourses[] = [
    {
        id: 'frontend-master',
        title: 'Frontend Development Master Course',
        description: 'Master modern frontend development with React, Next.js, and more',
        price: 250000,
        duration: '6 months',
        category: 'frontend',
        features: [
            'React & Next.js',
            'TypeScript',
            'UI/UX Design Principles',
            'Performance Optimization',
            'State Management',
            'Testing Strategies'
        ],
        brochureUrl: '/brochures/frontend-master.pdf'
    },
    {
        id: 'backend-pro',
        title: 'Backend Development Professional',
        description: 'Build scalable backend systems with Node.js and modern databases',
        price: 250000,
        duration: '8 months',
        category: 'backend',
        features: [
            'Node.js & Express',
            'Database Design',
            'API Development',
            'Authentication & Security',
            'Microservices',
            'Cloud Deployment'
        ],
        brochureUrl: '/brochures/backend-pro.pdf'
    },
    {
        id: 'data-analysis',
        title: 'Data Analysis & Visualization',
        description: 'Learn to analyze and visualize data using modern tools and techniques',
        price: 250000,
        duration: '6 months',
        category: 'data-analysis',
        features: [
            'Python for Data Analysis',
            'SQL & Database Analytics',
            'Data Visualization',
            'Statistical Analysis',
            'Machine Learning Basics',
            'Business Intelligence'
        ],
        brochureUrl: '/brochures/data-analysis.pdf'
    },
    {
        id: 'devops-master',
        title: 'DevOps Engineering',
        description: 'Master DevOps practices and tools for modern software delivery',
        price: 250000,
        duration: '8 months',
        category: 'devops',
        features: [
            'CI/CD Pipelines',
            'Container Orchestration',
            'Infrastructure as Code',
            'Cloud Services',
            'Monitoring & Logging',
            'Security Practices'
        ],
        brochureUrl: '/brochures/devops-master.pdf'
    }
];
  
