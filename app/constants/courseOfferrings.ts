import { IoCall, IoMail } from "react-icons/io5";
import { contactInfoProp, Course, CourseProjectsProps } from "../types/index.interface";

// Constants for Course Data
export const courseData: Course[] = [
    {
        title: 'Front-End Development',
        description: 'This course equips you with the skills to build beautiful, interactive websites and web applications using HTML, CSS, JavaScript, React, and Tailwind CSS.',
        features: [
            'Core web technologies: HTML5, CSS3, JavaScript',
            'Frameworks and Libraries: React, Tailwind CSS',
            'Version control using Git and GitHub',
            'Responsive Web Design principles',
            'Best practices for UI/UX design'
        ]
    },
    {
        title: 'Back-End Development',
        description: 'Focus on the server-side of web applications with Node.js, Express.js, and databases like MongoDB and PostgreSQL. Learn to build APIs and manage data efficiently.',
        features: [
            'Node.js, Express.js for server-side development',
            'Working with databases: SQL and NoSQL (PostgreSQL, MongoDB)',
            'RESTful APIs and Authentication',
            'Cloud services and deployment strategies (AWS, Heroku)',
            'Data validation, security, and performance optimization'
        ]
    },
    {
        title: 'Full-Stack Development',
        description: 'Learn both front-end and back-end technologies, including React, Node.js, Express, and MongoDB, to build complete, dynamic web applications.',
        features: [
            'Combining front-end (React) and back-end (Node.js, Express) technologies',
            'Full-stack application architecture',
            'Working with RESTful APIs',
            'Authentication and User Authorization',
            'Deployment and cloud services (AWS, Heroku)'
        ]
    }
];

export const projects: CourseProjectsProps[] = [
    {
        title: "Front-End Development",
        description:
            "This course equips you with the skills to build beautiful, interactive websites and web applications using HTML, CSS, JavaScript, React, and Tailwind CSS.",
        link: "/bootcamp/frontend",
    },
    {
        title: "Back-End Development",
        description:
            "Focus on the server-side of web applications with Node.js, Express.js, and databases like MongoDB and PostgreSQL. Learn to build APIs and manage data efficiently.",
        link: "/bootcamp/backend",
    },
    // {
    //     title: "Full-Stack Development",
    //     description:
    //         "Learn both front-end and back-end technologies, including React, Node.js, Express, and MongoDB, to build complete, dynamic web applications.",
    //     link: "/bootcamp/frontend",
    // }
];





export const whatWeOffer = ["Certification", "24/7 Support", "Skilled Tutors", "Recorded Classes", "Guaranteed Internship", "Professional guidiance"];

export const contactInformations: contactInfoProp[] = [
    { icon: IoCall, message: "Quick Call Us:", link: "tel:+2349039267685", value: "+234-903926-7685" },
    { icon: IoMail, message: "Mail Us On:", link: "mailto: info@thefullsnacksdevs.com", value: "info@thefullsnacksdevs.com" },
]