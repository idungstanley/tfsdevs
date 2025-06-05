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


export const frontendCourseOutline = [
    {
        level: "Beginner",
        goal: "Build a solid foundation in web development fundamentals and create basic interactive websites.",
        modules: [
            {
                title: "Introduction to Web Development",
                concepts: [
                    "How the Internet works (HTTP/HTTPS, DNS, browsers)",
                    "Client vs. server-side development",
                    "Role of a frontend developer",
                ],
            },
            {
                title: "HTML",
                concepts: [
                    "Introduction to HTML",
                    "Text and Formatting Elements",
                    "Links and Navigation",
                    "Lists and Tables",
                    "Forms, Input Elements, and validation",
                    "Multimedia and Graphics",
                    "HTML Structure and Semantic Elements (e.g., <header>, <article>, <footer>)",
                    "Meta Information and Advanced HTML Features",
                    "Accessibility basics (ARIA roles)",
                ],
                skills: ["Structuring content with tags", "Embedding images, links, and media"],
            },
            {
                title: "CSS",
                concepts: [
                    "Introduction to CSS",
                    "CSS Selectors specificity, and inheritance",
                    "Box model and Layout (margin, padding, border)",
                    "Background and Borders",
                    "Positioning and Display",
                    "Typography and Text Styles",
                    "Colors and Opacity",
                    "Flexbox and Grid for layouts",
                    "Responsive design with media queries",
                    "Tables and Forms Styling",
                    "CSS Transitions and Animations",
                    "2D and 3D Transformations",
                    "Shadows and Effects",
                    "Advanced CSS Concepts",
                    "Cross-Browser Compatibility and Performance",
                ],
                skills: [
                    "Styling text, colors, and backgrounds",
                    "Creating responsive layouts",
                    "Basic animations (hover effects)",
                ],
            },
            {
                title: "JavaScript Basics",
                concepts: [
                    "Getting Started with JavaScript",
                    "Variables, data types, and operators",
                    "Simple Interactive Webpage",
                    "Functions and Scope",
                    "Working with Objects and Arrays",
                    "Advanced Functions",
                    "DOM Manipulation",
                    "Working with Forms and Validations",
                    "Asynchronous JavaScript",
                    "Object-Oriented Programming (OOP) in JavaScript",
                    "Testing in JavaScript",
                ],
            },
            {
                title: "Version Control with Git",
                concepts: ["Repositories, commits, branches", "Push/pull to GitHub", "Basic collaboration workflows"],
                tools: ["Git", "GitHub"],
            },
        ],
    },
    {
        level: "Intermediate",
        goal: "Enhance skills with frameworks, APIs, and modern tools to build dynamic web applications.",
        modules: [
            {
                title: "Advanced JavaScript",
                concepts: [
                    "Modules and ES6 imports/exports",
                    "Working with Modules and Bundlers",
                    "Error Handling and Debugging",
                    "Working with Data (JSON, LocalStorage, SessionStorage)",
                    "Advanced Web APIs",
                    "JavaScript Performance Optimization",
                    "Closures, scope, and hoisting",
                    "Asynchronous JavaScript (Promises, async/await)",
                    "Fetch API for HTTP requests",
                ],
            },
            {
                title: "Frontend Frameworks (React)",
                concepts: [
                    "Introduction to React",
                    "JSX and virtual DOM",
                    "React Components and Props",
                    "React State Management with useState",
                    "React Lifecycle and useEffect",
                    "Handling Forms and User Input",
                    "React Lists and Keys",
                    "Context API and Prop Drilling Prevention",
                    "Hooks (useState, useEffect)",
                    "Routing with React Router",
                ],
            },
            {
                title: "API Integration",
                concepts: ["REST APIs and endpoints", "Authentication (OAuth, JWT basics)", "Error handling in API calls"],
            },
            {
                title: "Build Tools and Package Managers",
                concepts: [
                    "Module bundlers (Webpack, Vite)",
                    "Dependency management with npm/yarn",
                    "Task runners (e.g., npm scripts)",
                ],
                tools: ["npm", "yarn", "Vite"],
                duration: "2 weeks",
                project: "Set up a React project with Vite and deploy it to Vercel or Netlify",
            },
            {
                title: "CSS Frameworks and Preprocessors",
                concepts: [
                    "Utility-first frameworks (Tailwind CSS)",
                    "Component-based frameworks (Bootstrap)",
                    "Advanced Sass (variables, mixins, nesting)",
                ],
            },
        ],
    },
    {
        level: "Advanced",
        goal: "Master performance optimization, testing, and advanced frameworks for professional-grade applications.",
        modules: [
            {
                title: "TypeScript",
                concepts: ["Static typing and interfaces", "Type inference and generics", "Integrating TypeScript with React"],
            },
            {
                title: "Advanced Frameworks (Next.js)",
                concepts: [
                    "Server-side rendering (SSR) and static site generation (SSG)",
                    "API routes in Next.js",
                    "File-based routing",
                    "Incremental static regeneration",
                ],
            },
            {
                title: "Testing",
                concepts: [
                    "Unit testing vs. end-to-end testing",
                    "Test-driven development (TDD)",
                    "Mocking APIs and components",
                ],
                tools: ["Jest", "React Testing Library", "Cypress"],
            },
            {
                title: "Performance Optimization",
                concepts: [
                    "Lazy loading and code splitting",
                    "Image optimization (WebP, lazy-loaded images)",
                    "Lighthouse audits for SEO and performance",
                    "Reducing JavaScript bundle size",
                ],
            },
            {
                title: "Advanced Topics",
                concepts: [
                    "Progressive Web Apps (PWAs) and service workers",
                    "Web accessibility (WCAG standards)",
                    "State Management (Redux, Zustand)",
                    "WebSockets for real-time apps",
                ],
            },
            {
                title: "Portfolio and Career Prep",
                concepts: [
                    "Building a standout portfolio",
                    "Open-source contributions",
                    "Preparing for frontend interviews (coding challenges, system design)",
                ],
                skills: ["Showcasing projects on GitHub", "Writing a tech resume", "Solving LeetCode-style problems"],
            },
        ],
    },
  ]