import { Testimonial } from "../types/index.interface";

// Constants for Testimonial Data
export const testimonials: Testimonial[] = [
    {
        id: 1,
        name: 'thecodedchamp',
        profilePicture: '/twitter-photo.jpg',
        stars: 5,
        testimonial: 'This course was fantastic! I learned so much, and the instructors were really helpful.',
        reviewLink: '/review/1'
    },
    {
        id: 2,
        name: 'Gabriel Nicholas',
        profilePicture: '/avatar.jpg',
        stars: 4,
        testimonial: 'Great content and resources. The only downside is the pace of the course, which could be improved.',
        reviewLink: '/review/2'
    },
    {
        id: 3,
        name: 'Alex Johnson',
        profilePicture: '/twitter-photo.jpg',
        stars: 5,
        testimonial: 'The project work really helped me apply what I learned. I’m now more confident in my skills.',
        reviewLink: '/review/3'
    },
    {
        id: 4,
        name: 'Emily Davis',
        profilePicture: '/twitter-photo.jpg',
        stars: 5,
        testimonial: 'The best course I’ve taken! Clear explanations and amazing support from the mentors.',
        reviewLink: '/review/4'
    }
];

export const stacks = [
    { label: "javascript", imgSrc: "/javascript.svg"},
    { label: "react", imgSrc: "/react.svg"},
    { label: "node", imgSrc: "/node.svg"},
    { label: "fullstack", imgSrc: "/fullstack.svg"},
    { label: "nextjs", imgSrc: "/nextjs.svg"},
]