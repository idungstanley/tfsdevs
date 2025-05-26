import { Event } from "../types/index.interface";

export const events: Event[] = [
    {
        id: 1,
        title: "Modern Web Development with React and TypeScript",
        description: "Join us for an intensive workshop where we'll dive deep into modern web development practices using React and TypeScript. Learn about component patterns, state management, performance optimization, and more from industry experts.\n\nThis workshop is perfect for developers who want to level up their frontend skills and build more maintainable applications. We'll cover both theoretical concepts and practical implementations through live coding sessions.",
        shortDescription: "An intensive workshop on modern web development practices using React and TypeScript.",
        date: "2024-04-15",
        time: "10:00 AM - 4:00 PM",
        location: {
            type: "online",
            platform: "Zoom",
            link: "https://zoom.us/j/123456789"
        },
        image: "https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg",
        speaker: {
            name: "Sarah Chen",
            role: "Senior Frontend Engineer",
            company: "TechCorp",
            image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
        },
        topics: [
            "React 18 Features",
            "TypeScript Best Practices",
            "Performance Optimization",
            "State Management",
            "Testing Strategies"
        ],
        price: 299,
        capacity: 50,
        registeredCount: 32
    },
    {
        id: 2,
        title: "Building Scalable Backend Systems",
        description: "Discover the principles and practices of building highly scalable backend systems. This online workshop will cover system design, microservices architecture, database optimization, and cloud deployment strategies.\n\nYou'll learn how to design and implement backend systems that can handle millions of users while maintaining performance and reliability.",
        shortDescription: "Learn how to design and build scalable backend systems for modern applications.",
        date: "2024-04-22",
        time: "9:00 AM - 2:00 PM",
        location: {
            type: "online",
            platform: "Zoom",
            link: "https://zoom.us/j/123456789"
        },
        image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
        speaker: {
            name: "Michael Rodriguez",
            role: "Principal Architect",
            company: "CloudScale Solutions",
            image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
        },
        topics: [
            "System Design Principles",
            "Microservices Architecture",
            "Database Optimization",
            "Cloud Deployment",
            "Monitoring and Scaling"
        ],
        price: 199,
        capacity: 100,
        registeredCount: 67
    },
    {
        id: 3,
        title: "AI and Machine Learning in Production",
        description: "Learn how to effectively implement AI and machine learning solutions in production environments. This comprehensive workshop covers everything from model development to deployment and monitoring.\n\nWe'll focus on practical applications and real-world scenarios, helping you understand how to integrate AI solutions into existing systems.",
        shortDescription: "Practical guide to implementing AI and ML solutions in production environments.",
        date: "2024-05-10",
        time: "11:00 AM - 5:00 PM",
        location: {
            type: "online",
            address: "AI Innovation Center, 456 Tech Boulevard, New York, NY",
            platform: "Zoom",
            link: "https://zoom.us/j/987654321"
        },
        image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg",
        speaker: {
            name: "Dr. Emily Watson",
            role: "AI Research Director",
            company: "AI Solutions Inc",
            image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
        },
        topics: [
            "Model Development",
            "Production Deployment",
            "Performance Monitoring",
            "Scaling AI Systems",
            "Ethics in AI"
        ],
        price: 399,
        capacity: 75,
        registeredCount: 45
    }
];