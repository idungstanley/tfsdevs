import { CourseCardProps, LearningCardProps } from '@/app/types/index.interface';

export const frontendLearningData: LearningCardProps[] = [
    {
        thumbnailUrl: '/html.jpg',
        title: 'HTML Basics: Build Your First Webpage',
        tags: ['BEGINNER', 'HTML'],
        description:
            'This beginner-friendly tutorial introduces you to the core concepts of HTML, the foundation of all web development. You’ll learn how to structure a webpage using essential HTML tags like <div>, <p>, <h1> to <h6>, and semantic elements such as <header>, <footer>, and <section>. We’ll cover attributes like id and class, and you’ll build a simple personal portfolio page as a hands-on project. No prior knowledge is required—just a text editor (like VS Code) and a browser. By the end, you’ll have a fully functional webpage and a solid understanding of HTML’s role in web development. Perfect for absolute beginners looking to start their frontend journey.',
    },
    {
        thumbnailUrl: '/css.jpg',
        title: 'CSS for Beginners: Styling Your Webpage',
        tags: ['BEGINNER', 'CSS'],
        description:
            'In this CSS crash course, you’ll learn how to style your HTML webpage to make it visually appealing. We’ll cover the basics of CSS, including selectors, properties, and values, focusing on styling text (fonts, colors, sizes), backgrounds, and borders. You’ll also explore the box model (margin, padding, border, content) and learn how to create a simple layout using inline, internal, and external CSS. As a practical project, you’ll style the portfolio page you built in the HTML basics lesson, adding colors, spacing, and a responsive design that adjusts to different screen sizes. Basic HTML knowledge is recommended. Tools needed: a text editor and a browser. Ideal for beginners who want to make their webpages look professional.',
    },
    // Junior Level (3 entries)
    {
        thumbnailUrl: '/css.jpg',
        title: 'Responsive Design with CSS Flexbox',
        tags: ['JUNIOR', 'CSS', 'RESPONSIVE'],
        description:
            'Take your CSS skills to the next level by mastering responsive design with CSS Flexbox. This lesson covers the fundamentals of Flexbox, including flex containers, flex items, and properties like justify-content, align-items, flex-direction, and flex-wrap. You’ll learn how to create layouts that adapt seamlessly to different screen sizes, ensuring your website looks great on desktops, tablets, and mobile devices. As a practical project, you’ll build a responsive photo gallery with a flexible grid layout that adjusts based on the viewport. Prerequisites include basic HTML and CSS knowledge, particularly an understanding of the box model and positioning. Tools needed: a text editor and a browser. This is ideal for junior developers looking to create modern, mobile-friendly websites.',
    },
    {
        thumbnailUrl: '/next-code.jpg',
        title: 'Advanced CSS: Animations and Transitions',
        tags: ['INTERMEDIATE', 'CSS'],
        description:
            'Elevate your CSS skills by adding engaging animations and transitions to your web projects. This lesson covers CSS transitions (e.g., changing colors, sizes, or positions smoothly) and keyframe animations for more complex effects (e.g., fading, sliding, or rotating elements). You’ll learn how to use properties like transition-duration, transition-timing-function, and animation-iteration-count, as well as how to optimize animations for performance. As a practical project, you’ll create an animated landing page with a fading hero section, a sliding navigation menu, and hover effects on buttons. Prerequisites include a good understanding of CSS (selectors, positioning, Flexbox). Tools needed: a text editor and a browser. This lesson is perfect for intermediate developers who want to make their websites more dynamic and visually appealing.',
    },
    {
        thumbnailUrl: '/coding-env.jpg',
        title: 'Version Control with Git for Frontend Devs',
        tags: ['JUNIOR', 'GIT'],
        description:
            'Learn the essentials of version control with Git, a critical skill for any frontend developer working on projects. This lesson covers the basics of Git, including initializing a repository, staging and committing changes, creating branches, and merging them. You’ll also learn how to collaborate with others by pushing and pulling code to/from GitHub, resolving merge conflicts, and using pull requests for code reviews. As a practical exercise, you’ll set up a Git repository for a small frontend project, create branches for features, and push your code to GitHub. No prior Git knowledge is required, but basic command-line familiarity is helpful. Tools needed: Git, a GitHub account, and a text editor. Ideal for junior developers looking to manage their code effectively and collaborate with teams.',
    },
    {
        thumbnailUrl: '/javascript.jpg',
        title: 'JavaScript 101: Adding Interactivity',
        tags: ['BEGINNER', 'JAVASCRIPT'],
        description:
            'This introductory JavaScript course teaches you how to add interactivity to your webpages, making them dynamic and user-friendly. You’ll start with the basics: variables (let, const, var), data types (strings, numbers, booleans), and operators. We’ll then dive into functions, conditionals (if/else), and loops (for, while), and you’ll learn how to manipulate the DOM to change webpage content dynamically (e.g., updating text, showing/hiding elements). As a project, you’ll build a simple to-do list app that lets users add and remove tasks. Basic HTML and CSS knowledge is recommended as a prerequisite. Tools required: a text editor and a browser with developer tools. This lesson is perfect for beginners eager to bring their webpages to life.',
    },
    {
        thumbnailUrl: '/coding-env.jpg',
        title: 'JavaScript Events and Event Listeners',
        tags: ['JUNIOR', 'JAVASCRIPT'],
        description:
            'Enhance your JavaScript skills by learning how to handle user interactions with events and event listeners. This lesson covers the event-driven nature of JavaScript, including common events like click, mouseover, keydown, and form submissions. You’ll learn how to attach event listeners to DOM elements using addEventListener, handle event objects, and prevent default behaviors (e.g., stopping a form from refreshing the page). As a hands-on project, you’ll build an interactive calculator that responds to button clicks and keyboard input. Prerequisites include basic JavaScript knowledge (variables, functions, DOM manipulation). Tools required: a text editor and a browser with developer tools. This lesson is perfect for junior developers who want to make their web applications more interactive and user-friendly.',
    },
    {
        thumbnailUrl: '/next-code.jpg',
        title: 'Asynchronous JavaScript: Promises and Async/Await',
        tags: ['INTERMEDIATE', 'JAVASCRIPT'],
        description:
            'Master asynchronous programming in JavaScript, a crucial skill for modern web development. This lesson explores how to handle asynchronous operations like fetching data from APIs using Promises and the more modern async/await syntax. You’ll learn how to create and chain Promises, handle errors with try/catch, and use async/await for cleaner, more readable code. We’ll also cover the Fetch API to retrieve data from a public API (e.g., a weather API). As a project, you’ll build a weather app that fetches and displays real-time weather data based on user input. Prerequisites include a strong grasp of JavaScript fundamentals (functions, objects, events). Tools required: a text editor, a browser with developer tools, and an internet connection. Ideal for intermediate developers looking to work with APIs and asynchronous code.',
    },
    // Intermediate Level (3 entries)
    {
        thumbnailUrl: '/next-code.jpg',
        title: 'React Fundamentals: Components and Props',
        tags: ['INTERMEDIATE', 'REACT', 'FEATURED'],
        description:
            'Step into the world of React, a popular JavaScript library for building modern user interfaces. This lesson introduces you to React’s core concepts: components, props, and JSX. You’ll learn how to create functional components, pass data between components using props, and manage component state with the useState hook. We’ll also cover event handling in React and conditional rendering. As a project, you’ll build a dynamic task manager app where users can add, edit, and delete tasks, all while organizing your code into reusable components. Prerequisites include solid JavaScript knowledge (functions, arrays, objects) and basic HTML/CSS. Tools required: Node.js, npm, a text editor (VS Code recommended), and a browser. This lesson is ideal for intermediate developers ready to build single-page applications with React.',
    },
    // Advanced Level (3 entries)
    {
        thumbnailUrl: '/code-demo.jpg',
        title: 'TypeScript in React: Type-Safe Frontend',
        tags: ['ADVANCED', 'TYPESCRIPT', 'REACT'],
        description:
            'Enhance your React projects by integrating TypeScript, a powerful tool for adding type safety and improving code quality. This advanced lesson covers TypeScript basics (types, interfaces, generics) and how to apply them in a React application. You’ll learn how to type props, state, and event handlers, as well as how to use TypeScript with React hooks (useState, useEffect). We’ll also explore advanced TypeScript features like union types, type narrowing, and utility types. As a project, you’ll refactor the task manager app from the React fundamentals lesson to use TypeScript, ensuring type safety and catching errors during development. Prerequisites include experience with React (components, hooks) and JavaScript (objects, arrays). Tools required: Node.js, npm, a text editor, and a browser. This lesson is ideal for advanced developers aiming to build robust, maintainable React applications.',
    },
    {
        thumbnailUrl: '/code-demo.jpg',
        title: 'Optimizing Frontend Performance',
        tags: ['ADVANCED', 'PERFORMANCE', 'FEATURED'],
        description:
            'Learn how to optimize the performance of your frontend applications to deliver fast, seamless user experiences. This advanced lesson covers key performance optimization techniques, including lazy loading images, code splitting with dynamic imports, and minimizing re-renders in React using memoization (React.memo, useMemo, useCallback). You’ll also learn how to analyze performance using browser tools like Lighthouse and Chrome DevTools, optimize CSS and JavaScript delivery, and reduce bundle sizes with tools like Webpack or Vite. As a project, you’ll optimize a sample React e-commerce app, reducing load times and improving responsiveness. Prerequisites include experience with JavaScript, React, and basic knowledge of browser rendering. Tools required: Node.js, npm, a text editor, and a browser with developer tools. Perfect for advanced developers focused on building high-performance web applications.',
    },
    {
        thumbnailUrl: '/next-code.jpg',
        title: 'Testing React Apps with Jest and React Testing Library',
        tags: ['ADVANCED', 'REACT', 'TESTING'],
        description:
            'Ensure the reliability of your React applications by learning how to write effective tests with Jest and React Testing Library. This advanced lesson covers the fundamentals of testing, including unit tests, integration tests, and end-to-end tests. You’ll learn how to set up a testing environment, write tests for React components (testing props, state, and user interactions), and mock API calls using Jest’s mocking capabilities. We’ll also explore best practices for testing, such as focusing on user behavior and avoiding implementation details. As a project, you’ll write a comprehensive test suite for the task manager app, covering component rendering, user interactions, and edge cases. Prerequisites include strong React knowledge (components, hooks, state management) and JavaScript proficiency. Tools required: Node.js, npm, a text editor, and a browser. Ideal for advanced developers who want to build robust, bug-free applications.',
    },
];


export const backendLearningData: LearningCardProps[] = [
    // Beginner Level (3 entries)
    {
        thumbnailUrl: '/node.jpg',
        title: 'Node.js Basics: Getting Started with Backend',
        tags: ['BEGINNER', 'NODEJS'],
        description:
            'This beginner-friendly tutorial introduces you to Node.js, a powerful JavaScript runtime for building server-side applications. You’ll learn what Node.js is, how it differs from browser-based JavaScript, and how to set up your development environment. We’ll cover the basics of Node.js, including the event loop, modules (CommonJS and ES Modules), and the Node Package Manager (npm). You’ll also write your first Node.js script to create a simple HTTP server using the built-in http module. As a practical project, you’ll build a basic server that responds with "Hello, World!" when accessed in the browser. No prior backend experience is required, but basic JavaScript knowledge (variables, functions, arrays) is recommended. Tools needed: Node.js, npm, a text editor (VS Code recommended), and a browser. Perfect for absolute beginners looking to start their backend development journey with Node.js.',
    },
    {
        thumbnailUrl: '/expressjs.png',
        title: 'Express Basics: Building Your First Server',
        tags: ['BEGINNER', 'EXPRESS'],
        description:
            'In this lesson, you’ll get started with Express, a minimalist web framework for Node.js that simplifies building backend servers. You’ll learn how to set up an Express application, create routes to handle HTTP requests (GET, POST), and serve static files like HTML or CSS. We’ll cover the basics of Express routing, middleware, and how to handle query parameters and request bodies. As a hands-on project, you’ll build a simple server that serves a static homepage and responds to a GET request with a JSON message (e.g., {"message": "Welcome to my API"}). Prerequisites include basic Node.js knowledge (modules, npm) and familiarity with JavaScript. Tools required: Node.js, npm, Express (installed via npm), a text editor, and a tool like Postman to test API requests. This lesson is ideal for beginners who want to create web servers and APIs with Express.',
    },
    {
        thumbnailUrl: '/mongodb.avif',
        title: 'MongoDB Basics: Introduction to NoSQL Databases',
        tags: ['BEGINNER', 'MONGODB'],
        description:
            'This introductory course teaches you the fundamentals of MongoDB, a popular NoSQL database for storing data in a flexible, JSON-like format. You’ll learn the differences between SQL and NoSQL databases, how to install MongoDB locally, and how to use the MongoDB Shell to perform basic operations like creating databases, collections, and documents. We’ll cover essential MongoDB concepts such as documents, collections, and basic queries (insert, find, update, delete). As a practical exercise, you’ll create a MongoDB database for a blog application, adding sample posts as documents. No prior database experience is required, but basic JavaScript knowledge (objects, arrays) is helpful. Tools needed: MongoDB (local installation or MongoDB Atlas for cloud), a text editor, and the MongoDB Shell or a GUI like MongoDB Compass. Perfect for beginners looking to store and manage data in a backend application.',
    },

    // Junior Level (3 entries)
    {
        thumbnailUrl: '/expressjs.png',
        title: 'Building a REST API with Express',
        tags: ['JUNIOR', 'EXPRESS', 'API'],
        description:
            'Learn how to build a RESTful API using Express, a key skill for backend developers. This lesson covers the principles of REST, including HTTP methods (GET, POST, PUT, DELETE), status codes (200, 404, 500), and RESTful routing (e.g., /users, /users/:id). You’ll set up an Express server with routes to handle these methods, use middleware to parse JSON request bodies, and organize your code using the MVC (Model-View-Controller) pattern. As a project, you’ll create a REST API for a todo list application, with endpoints to list all todos (GET /todos), add a new todo (POST /todos), update a todo (PUT /todos/:id), and delete a todo (DELETE /todos/:id). Prerequisites include basic Express knowledge (routing, middleware) and JavaScript proficiency (objects, arrays, functions). Tools required: Node.js, npm, Express, a text editor, and Postman for API testing. Ideal for junior developers looking to build APIs for web or mobile applications.',
    },
    {
        thumbnailUrl: '/mongodb.avif',
        title: 'CRUD Operations with MongoDB and Mongoose',
        tags: ['JUNIOR', 'MONGODB', 'EXPRESS'],
        description:
            'Enhance your backend skills by learning how to perform CRUD (Create, Read, Update, Delete) operations with MongoDB and Mongoose, an Object Data Modeling (ODM) library for Node.js. You’ll learn how to connect your Express app to MongoDB using Mongoose, define schemas and models for your data, and perform CRUD operations on a collection. We’ll cover creating documents (Create), querying documents (Read), updating documents (Update), and deleting documents (Delete), as well as basic data validation with Mongoose schemas. As a project, you’ll integrate MongoDB into the todo list API from the previous lesson, replacing the in-memory data with a MongoDB database to persist todos. Prerequisites include basic Express knowledge, familiarity with MongoDB, and JavaScript (objects, async/await). Tools required: Node.js, npm, Express, MongoDB, Mongoose, a text editor, and Postman. This lesson is perfect for junior developers ready to work with databases in their backend applications.',
    },
    {
        thumbnailUrl: '/expressjs.png',
        title: 'Error Handling in Express Applications',
        tags: ['JUNIOR', 'EXPRESS'],
        description:
            'Learn how to handle errors effectively in your Express applications to ensure a robust and user-friendly API. This lesson covers synchronous and asynchronous error handling in Express, including creating custom error middleware, handling 404 (Not Found) errors, and returning meaningful error messages with appropriate status codes (e.g., 400 for bad requests, 500 for server errors). You’ll also learn how to validate request data using a library like express-validator and handle MongoDB errors (e.g., duplicate key errors). As a practical exercise, you’ll add error handling to the todo list API, ensuring it gracefully handles invalid inputs (e.g., missing fields) and database errors (e.g., connection failures). Prerequisites include experience with Express (routing, middleware) and basic JavaScript (try/catch, async/await). Tools required: Node.js, npm, Express, a text editor, and Postman. Ideal for junior developers who want to build reliable and production-ready APIs.',
    },

    // Intermediate Level (3 entries)
    {
        thumbnailUrl: '/expressjs.png',
        title: 'User Authentication with JWT in Express',
        tags: ['INTERMEDIATE', 'EXPRESS', 'AUTH', 'FEATURED'],
        description:
            'Secure your Express API by implementing user authentication using JSON Web Tokens (JWT). This intermediate lesson covers the authentication flow: user registration, login, and protecting routes. You’ll learn how to hash passwords with bcrypt, generate and verify JWTs with the jsonwebtoken library, and create middleware to authenticate requests. We’ll also discuss best practices for securely storing JWTs (e.g., in HTTP-only cookies) and handling token expiration. As a project, you’ll add authentication to the todo list API, allowing users to register, log in, and access protected routes (e.g., only authenticated users can create todos). Prerequisites include experience with Express (routing, middleware), MongoDB (CRUD operations), and JavaScript (async/await, objects). Tools required: Node.js, npm, Express, MongoDB, Mongoose, bcrypt, jsonwebtoken, a text editor, and Postman. Perfect for intermediate developers looking to add secure authentication to their backend applications.',
    },
    {
        thumbnailUrl: '/expressjs.png',
        title: 'Custom Middleware in Express: Logging and Rate Limiting',
        tags: ['INTERMEDIATE', 'EXPRESS'],
        description:
            'Deepen your understanding of Express middleware by creating custom middleware for logging and rate limiting. This lesson explains the middleware pipeline in Express, how to write custom middleware functions, and how to apply them globally or to specific routes. You’ll create a logging middleware to log request details (method, URL, timestamp) to a file using the fs module, and a rate-limiting middleware to prevent abuse by limiting the number of requests per user (e.g., 100 requests per hour). We’ll also use the express-rate-limit library for comparison. As a project, you’ll add these middleware functions to the todo list API, ensuring all requests are logged and protected from excessive usage. Prerequisites include solid Express knowledge (routing, middleware) and JavaScript (functions, async/await). Tools required: Node.js, npm, Express, express-rate-limit, a text editor, and Postman. Ideal for intermediate developers who want to enhance their Express applications with custom functionality.',
    },
    {
        thumbnailUrl: '/mongodb.avif',
        title: 'MongoDB Relationships: Referencing and Embedding Documents',
        tags: ['INTERMEDIATE', 'MONGODB'],
        description:
            'Learn how to model relationships in MongoDB, a NoSQL database, using referencing and embedding techniques. This lesson covers the differences between relational (SQL) and non-relational (NoSQL) data modeling, focusing on two approaches in MongoDB: embedding documents (storing related data in a single document) and referencing documents (using ObjectIds to link documents across collections). You’ll learn when to use each approach, how to define relationships with Mongoose schemas, and how to query related data using population (for references) and aggregation (for embedded data). As a project, you’ll extend the todo list app to include users and todos, modeling a one-to-many relationship (one user has many todos) using both embedding and referencing. Prerequisites include experience with MongoDB (CRUD operations, Mongoose) and Express. Tools required: Node.js, npm, Express, MongoDB, Mongoose, a text editor, and Postman. Perfect for intermediate developers looking to manage complex data relationships in MongoDB.',
    },

    // Advanced Level (3 entries)
    {
        thumbnailUrl: '/node.jpg',
        title: 'Scaling Node.js Applications: Load Balancing and Clustering',
        tags: ['ADVANCED', 'NODEJS', 'EXPRESS'],
        description:
            'Learn how to scale your Node.js applications to handle high traffic and ensure reliability in production. This advanced lesson covers two key scaling techniques: load balancing and clustering. You’ll learn how to use the cluster module in Node.js to take advantage of multi-core systems by spawning worker processes, and how to set up a load balancer (e.g., using Nginx or a cloud provider like AWS ELB) to distribute traffic across multiple Node.js instances. We’ll also discuss session management in a clustered environment (e.g., using Redis for session storage) and handling graceful shutdowns. As a project, you’ll scale the todo list API by implementing clustering and simulating high traffic using a tool like Apache JMeter. Prerequisites include experience with Node.js, Express, and deploying applications. Tools required: Node.js, npm, Express, Redis (optional), Nginx (optional), a text editor, and Postman. Ideal for advanced developers preparing their applications for production environments.',
    },
    {
        thumbnailUrl: '/node-mongodb.png',
        title: 'Optimizing Backend Performance with Node.js and MongoDB',
        tags: ['ADVANCED', 'NODEJS', 'MONGODB', 'FEATURED'],
        description:
            'Optimize the performance of your Node.js and MongoDB backend to deliver fast, efficient APIs. This advanced lesson covers performance optimization techniques, including indexing in MongoDB to speed up queries, caching frequently accessed data with Redis, and profiling Node.js applications using tools like clinic.js to identify bottlenecks. You’ll also learn how to optimize Express routes (e.g., avoiding synchronous code, using async middleware), implement pagination for large datasets, and reduce database load with aggregation pipelines. As a project, you’ll optimize the todo list API by adding indexes to the MongoDB collection, caching user data in Redis, and implementing pagination for the GET /todos endpoint. Prerequisites include experience with Node.js, Express, MongoDB, and JavaScript (async/await, promises). Tools required: Node.js, npm, Express, MongoDB, Redis, clinic.js, a text editor, and Postman. Perfect for advanced developers focused on building high-performance backend systems.',
    },
    {
        thumbnailUrl: '/node.jpg',
        title: 'Testing Node.js APIs with Mocha, Chai, and Supertest',
        tags: ['ADVANCED', 'NODEJS', 'EXPRESS', 'TESTING'],
        description:
            'Ensure the reliability of your Node.js APIs by learning how to write comprehensive tests with Mocha, Chai, and Supertest. This advanced lesson covers the fundamentals of backend testing, including unit tests (testing individual functions), integration tests (testing API endpoints), and mocking dependencies (e.g., mocking MongoDB with mongodb-memory-server). You’ll learn how to set up a testing environment, write tests for your Express routes (e.g., testing GET /todos, POST /todos), and assert responses using Chai’s expect syntax. We’ll also cover best practices for testing, such as isolating tests, handling async code, and cleaning up the database between tests. As a project, you’ll write a test suite for the todo list API, covering all CRUD operations and authentication routes. Prerequisites include strong Node.js and Express knowledge (routing, middleware, authentication) and JavaScript proficiency. Tools required: Node.js, npm, Express, MongoDB, Mocha, Chai, Supertest, a text editor, and Postman. Ideal for advanced developers who want to build robust, bug-free APIs.',
    },
];


export const courses: CourseCardProps[] = [
    {
        label: 'Frontend Development',
        route: '/courses/frontend',
        storage: '100 Lessons',
        price: '6 month, #250,000',
        features: ['100 Lessons', 'Access to Frontend Projects', 'Internship', 'Community Support'],
    },
    {
        label: 'Backend Development',
        route: '/courses/backend',
        storage: '120 Lessons',
        price: '6 month, #250,000',
        features: ['120 Lessons', 'Backend API Projects', 'Internship', 'Community Support'],
    },
    {
        label: 'Fullstack Development',
        route: '/courses/fullstack',
        storage: '200 Lessons',
        price: '6 month, #500,000',
        features: ['200 Lessons', 'Fullstack Projects', 'Internship', 'Mentorship Access'],
    },
    {
        label: 'UI/UX',
        route: '/courses/ui-ux',
        storage: '80 Lessons',
        price: '4 month, #250,000',
        features: ['80 Lessons', 'Design Tools Access', 'Internship', 'Community Support'],
    },
    {
        label: 'Data Analysis',
        route: '/courses/data-analysis',
        storage: '90 Lessons',
        price: '6 month, #200,000',
        features: ['90 Lessons', 'Data Projects', 'Certification Included'],
    },
];


export const recentActivities = [
    {
        id: 1,
        user: 'Alex Johnson',
        action: 'completed',
        target: 'Introduction to React',
        time: '5 minutes ago'
    },
    {
        id: 2,
        user: 'Sara Williams',
        action: 'enrolled in',
        target: 'Advanced JavaScript',
        time: '2 hours ago'
    },
    {
        id: 3,
        user: 'Michael Brown',
        action: 'submitted assignment for',
        target: 'UI/UX Design Principles',
        time: 'Yesterday at 11:30 PM'
    },
    {
        id: 4,
        user: 'Jessica Lee',
        action: 'started',
        target: 'Data Analysis Fundamentals',
        time: '2 days ago'
    }
];

export const programsData = [
    {
        id: 1,
        title: 'Web Development',
        description: 'Learn frontend and backend technologies to build modern web applications',
        image:
            'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        progress: 75
    },
    {
        id: 2,
        title: 'Data Science',
        description: 'Master data analysis, visualization and machine learning techniques',
        image:
            'https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        progress: 45
    },
    {
        id: 3,
        title: 'UI/UX Design',
        description: 'Create beautiful user interfaces and seamless user experiences',
        image:
            'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        progress: 30
    },
    {
        id: 4,
        title: 'Mobile Development',
        description: 'Build cross-platform mobile applications with React Native',
        image:
            'https://images.pexels.com/photos/193004/pexels-photo-193004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        progress: 15
    }
];

export const notifications = [
    {
        id: 1,
        title: 'New message received',
        description: 'You have a new message from Alex',
        time: '5 min ago',
        read: false
    },
    {
        id: 2,
        title: 'Meeting reminder',
        description: 'Team meeting in 30 minutes',
        time: '30 min ago',
        read: false
    },
    {
        id: 3,
        title: 'Task completed',
        description: 'Project "Dashboard" has been completed',
        time: '2 hours ago',
        read: true
    }
];


export const testimonials = [
    {
        quote:
            "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
        name: "Charles Dickens",
        title: "A Tale of Two Cities",
    },
    {
        quote:
            "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
        name: "William Shakespeare",
        title: "Hamlet",
    },
    {
        quote: "All that we see or seem is but a dream within a dream.",
        name: "Edgar Allan Poe",
        title: "A Dream Within a Dream",
    },
    {
        quote:
            "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
        name: "Jane Austen",
        title: "Pride and Prejudice",
    },
    {
        quote:
            "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
        name: "Herman Melville",
        title: "Moby-Dick",
    },
];