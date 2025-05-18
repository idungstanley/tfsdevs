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
        title: 'Complete Web Development Bootcamp 2025',
        description: 'Learn HTML, CSS, JavaScript, React, Node.js and more! Become a full-stack web developer in just 12 weeks.',
        thumbnail: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        instructor: 'Dr. Angela Yu',
        rating: 4.7,
        reviewCount: 158432,
        price: {
            original: 4000,
            discounted: 3000,
        },
        duration: '47.5 hours',
        level: 'All Levels',
        isAvailable: false,
        badges: ['Bestseller', 'Hot'],
        lastUpdated: 'March 2025'
    },
    {
        id: '2',
        title: 'Advanced Machine Learning & Data Science',
        description: 'Master the most in-demand AI skills. From data preprocessing to deep learning models and deployment.',
        thumbnail: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        instructor: 'Andrew Ng',
        rating: 4.9,
        reviewCount: 94732,
        price: {
            original: 4500,
            discounted: 4000,
        },
        duration: '63 hours',
        level: 'Intermediate',
        isAvailable: true,
        badges: ['Bestseller'],
        lastUpdated: 'April 2025'
    },
    {
        id: '3',
        title: 'iOS App Development with Swift 6',
        description: 'Build 20+ professional iOS apps for iPhone and iPad using Swift 6 and publish them to the App Store.',
        thumbnail: 'https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        instructor: 'Chris Ching',
        rating: 4.8,
        reviewCount: 45291,
        price: {
            original: 5000,
        },
        duration: '58 hours',
        level: 'Beginner',
        isAvailable: false,
        badges: ['New'],
        lastUpdated: 'February 2025'
    }
];