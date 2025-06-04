import { CourseCardProp } from "../types/index.interface";

export const bootcampsKeys = {
    "Data Science Immersive": "/",
    "Full Stack Development Bootcamp": "/",
    "UI / UX Design Bootcamp": "/",
    "DevOps Engineering Academy": "/",
    "Mobile App Development Intensive": "/",
}


export const sampleCourses: CourseCardProp[] = [
    {
        id: '1',
        title: 'Master React Query / TanStack Query: React Server State Management 2025',
        description: 'React Query version 5 queries, mutations, and cache control, Using React Query for pagination, infinite scroll, and optimistic updates, Integrating React Query with Authentication',
        thumbnail: '/React-Query.webp',
        instructor: 'Mr. Stanley Sunday',
        rating: 5,
        reviewCount: 0,
        price: {
            original: 15000,
            discounted: 0,
        },
        duration: '5.5 hours',
        level: 'All Levels',
        isAvailable: false,
        badges: ['Bestseller', 'Hot'],
        lastUpdated: 'June 2025'
    },
    {
        id: '2',
        title: 'The Complete SOCKET IO V4: Real Time Apps',
        description: 'Learn Socket IO from Scratch: Start with the basics and gradually progress to advanced topics, ensuring a solid understanding of Socket IO fundamentals. Setup a socketio application between the browser and an Express server and run real-time back and forth',
        thumbnail: '/socketio.jpg',
        instructor: 'Dr. Salami Oluwapelumi',
        rating: 5,
        reviewCount: 0,
        price: {
            original: 15000,
            discounted: 0,
        },
        duration: '6 hours',
        level: 'Intermediate',
        isAvailable: false,
        badges: ['Bestseller'],
        lastUpdated: 'June 2025'
    },
    {
        id: '3',
        title: 'Javascript basics for beginners',
        description: 'Understand the fundamental concepts in JavaScript. Understand DOM Manipulation and Event Handling in JavaScript',
        thumbnail: '/javscript.webp',
        instructor: 'Mr. Stanley Sunday',
        rating: 5,
        reviewCount: 0,
        price: {
            original: 20000,
            discounted: 0
        },
        duration: '20 hours',
        level: 'Beginner',
        isAvailable: false,
        badges: ['New'],
        lastUpdated: 'June 2025'
    }
];