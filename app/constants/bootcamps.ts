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
  

export const courseOutline = [
    {
        level: "Beginner",
        goal: "Build a solid foundation in C# programming fundamentals and create basic console and desktop applications.",
        duration: "12 weeks",
        modules: [
            {
                title: "Introduction to Programming and .NET Ecosystem",
                duration: "1 week",
                concepts: [
                    "What is programming and software development",
                    "Introduction to .NET ecosystem (.NET Core, .NET Framework, .NET 5+)",
                    "Understanding compilation and runtime",
                    "IDE setup (Visual Studio, VS Code, Rider)",
                    "Solution and project structure"
                ],
                skills: [
                    "Setting up development environment",
                    "Creating your first console application",
                    "Understanding the build process"
                ],
                project: "Hello World console application with basic user interaction"
            },
            {
                title: "C# Fundamentals",
                duration: "3 weeks",
                concepts: [
                    "Variables, data types, and constants",
                    "Operators (arithmetic, logical, comparison)",
                    "Control structures (if/else, switch)",
                    "Loops (for, while, foreach)",
                    "Methods and parameters",
                    "Arrays and basic collections",
                    "String manipulation",
                    "Exception handling basics (try/catch)"
                ],
                skills: [
                    "Writing clean, readable code",
                    "Problem-solving with algorithms",
                    "Basic debugging techniques"
                ],
                project: "Calculator console application with menu system"
            },
            {
                title: "Object-Oriented Programming (OOP)",
                duration: "3 weeks",
                concepts: [
                    "Classes and objects",
                    "Constructors and destructors",
                    "Properties and fields",
                    "Methods and method overloading",
                    "Encapsulation and access modifiers",
                    "Inheritance and polymorphism",
                    "Abstract classes and interfaces",
                    "Static members and static classes"
                ],
                skills: [
                    "Designing class hierarchies",
                    "Implementing interfaces",
                    "Understanding object relationships"
                ],
                project: "Library Management System (console-based)"
            },
            {
                title: "Collections and Generics",
                duration: "2 weeks",
                concepts: [
                    "Generic collections (List<T>, Dictionary<TKey, TValue>)",
                    "Arrays vs. collections",
                    "LINQ basics (Where, Select, OrderBy)",
                    "Iterators and yield",
                    "Generic methods and classes",
                    "Constraints on generics"
                ],
                skills: [
                    "Choosing appropriate data structures",
                    "Basic data manipulation with LINQ",
                    "Working with generic types"
                ],
                project: "Student Grade Management System"
            },
            {
                title: "File I/O and Data Persistence",
                duration: "2 weeks",
                concepts: [
                    "File and directory operations",
                    "Reading and writing text files",
                    "Working with streams",
                    "Serialization (JSON, XML)",
                    "Basic database concepts",
                    "SQLite integration"
                ],
                skills: [
                    "Persisting application data",
                    "File system navigation",
                    "Data serialization/deserialization"
                ],
                project: "Personal Expense Tracker with file storage"
            },
            {
                title: "Version Control and Development Practices",
                duration: "1 week",
                concepts: [
                    "Git fundamentals",
                    "Repository management",
                    "Branching and merging",
                    "Code commenting and documentation",
                    "Basic debugging and testing",
                    "Code organization and naming conventions"
                ],
                tools: ["Git", "GitHub", "Visual Studio debugger"],
                project: "Refactor previous projects with proper Git workflow"
            }
        ]
    },
    {
        level: "Intermediate",
        goal: "Build dynamic web applications and APIs using ASP.NET Core with database integration.",
        duration: "13 weeks",
        modules: [
            {
                title: "Advanced C# Features",
                duration: "2 weeks",
                concepts: [
                    "Delegates and events",
                    "Lambda expressions and functional programming",
                    "Advanced LINQ operations",
                    "Async/await programming",
                    "Nullable reference types",
                    "Pattern matching",
                    "Records and init-only properties",
                    "Extension methods"
                ],
                skills: [
                    "Functional programming concepts",
                    "Asynchronous programming patterns",
                    "Modern C# syntax"
                ],
                project: "Asynchronous file processor with event notifications"
            },
            {
                title: "Database Programming",
                duration: "3 weeks",
                concepts: [
                    "Relational database fundamentals",
                    "SQL basics (SELECT, INSERT, UPDATE, DELETE)",
                    "Entity Framework Core",
                    "Code-First vs Database-First approaches",
                    "Migrations and database versioning",
                    "Repository pattern",
                    "Unit of Work pattern"
                ],
                tools: ["SQL Server", "SQLite", "Entity Framework Core"],
                project: "Blog application with EF Core"
            },
            {
                title: "ASP.NET Core Web APIs",
                duration: "3 weeks",
                concepts: [
                    "HTTP protocol and REST principles",
                    "ASP.NET Core architecture",
                    "Controllers and actions",
                    "Model binding and validation",
                    "Dependency injection",
                    "Middleware pipeline",
                    "Configuration management",
                    "Logging and error handling",
                    "API documentation with Swagger"
                ],
                skills: [
                    "Building RESTful APIs",
                    "Request/response handling",
                    "API versioning",
                    "Authentication basics"
                ],
                project: "Task Management API with CRUD operations"
            },
            {
                title: "Web Development with ASP.NET Core MVC",
                duration: "3 weeks",
                concepts: [
                    "MVC pattern and architecture",
                    "Views and Razor syntax",
                    "Model binding and validation",
                    "Partial views and view components",
                    "Layout pages and sections",
                    "Client-side validation",
                    "Working with forms",
                    "Session and state management"
                ],
                skills: [
                    "Building web applications",
                    "Server-side rendering",
                    "Form handling and validation"
                ],
                project: "E-commerce product catalog website"
            },
            {
                title: "Testing and Quality Assurance",
                duration: "2 weeks",
                concepts: [
                    "Unit testing fundamentals",
                    "Test-driven development (TDD)",
                    "Mocking and test doubles",
                    "Integration testing",
                    "Code coverage",
                    "Testing best practices"
                ],
                tools: ["xUnit", "NUnit", "Moq", "FluentAssertions"],
                project: "Add comprehensive tests to previous projects"
            }
        ]
    },
    {
        level: "Advanced",
        goal: "Master enterprise-level development with microservices, cloud deployment, and advanced architectural patterns.",
        duration: "7 weeks",
        modules: [
            {
                title: "Advanced ASP.NET Core Features",
                duration: "2 weeks",
                concepts: [
                    "Custom middleware development",
                    "Background services and hosted services",
                    "SignalR for real-time communication",
                    "gRPC services",
                    "Health checks and monitoring",
                    "Caching strategies (in-memory, distributed)",
                    "Rate limiting and throttling"
                ],
                project: "Real-time chat application with SignalR"
            },
            {
                title: "Authentication and Authorization",
                duration: "2 weeks",
                concepts: [
                    "Authentication vs. authorization",
                    "JWT tokens and claims-based authentication",
                    "OAuth 2.0 and OpenID Connect",
                    "Identity framework",
                    "Role-based and policy-based authorization",
                    "API security best practices",
                    "CORS and security headers"
                ],
                project: "Secure API with user authentication and role-based access"
            },
            {
                title: "Microservices and Distributed Systems",
                duration: "3 weeks",
                concepts: [
                    "Microservices architecture patterns",
                    "Service communication (HTTP, messaging)",
                    "API gateways and service discovery",
                    "Circuit breaker pattern",
                    "Event-driven architecture",
                    "Message queues (RabbitMQ, Azure Service Bus)",
                    "Distributed caching (Redis)"
                ],
                tools: ["Docker", "RabbitMQ", "Redis"],
                project: "Microservices-based e-commerce system"
            },
            {
                title: "Cloud Development and DevOps",
                duration: "3 weeks",
                concepts: [
                    "Cloud platforms (Azure, AWS)",
                    "Containerization with Docker",
                    "Container orchestration (Kubernetes basics)",
                    "CI/CD pipelines",
                    "Infrastructure as Code",
                    "Monitoring and logging in production",
                    "Performance optimization",
                    "Scalability patterns"
                ],
                tools: ["Docker", "Azure/AWS", "GitHub Actions", "Application Insights"],
                project: "Deploy microservices to cloud with CI/CD pipeline"
            },
            {
                title: "Performance and Optimization",
                duration: "1 week",
                concepts: [
                    "Performance profiling and benchmarking",
                    "Memory management and garbage collection",
                    "Async best practices",
                    "Database optimization",
                    "Caching strategies",
                    "Load testing",
                    "Application monitoring"
                ],
                tools: ["BenchmarkDotNet", "dotMemory", "Application Insights"],
                project: "Performance optimization of existing applications"
            },
            {
                title: "Advanced Topics and Emerging Technologies",
                duration: "2 weeks",
                concepts: [
                    "Blazor for web development",
                    ".NET MAUI for cross-platform apps",
                    "Machine Learning with ML.NET",
                    "GraphQL APIs",
                    "Event sourcing and CQRS",
                    "Clean Architecture patterns",
                    "Domain-Driven Design (DDD)"
                ],
                project: "Choose one advanced technology and build a proof-of-concept"
            },
            {
                title: "Portfolio and Career Preparation",
                duration: "1 week",
                concepts: [
                    "Building a professional portfolio",
                    "Open-source contributions",
                    "Code review best practices",
                    "System design principles",
                    "Interview preparation",
                    "Soft skills for developers"
                ],
                skills: [
                    "Showcasing projects on GitHub",
                    "Writing technical documentation",
                    "Preparing for technical interviews",
                    "Understanding system architecture"
                ],
                project: "Complete portfolio website with deployed applications"
            }
        ]
    }
];
  