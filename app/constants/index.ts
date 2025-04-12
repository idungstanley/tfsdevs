import { LearningCardProps } from '@/app/types/index.interface';

export const learningData: LearningCardProps[] = [
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