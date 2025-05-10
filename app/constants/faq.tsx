export const groupedFAQs = {
  gettingStarted: [
    {
      question: 'What is TheFullSnacks Dev Academy all about?',
      answer:
        'TheFullSnacks Dev Academy is a hands-on, mentor-led program designed to help beginners and intermediate learners become professional developers ready for the tech industry.'
    },
    {
      question: 'Who can join the program?',
      answer:
        "Anyone interested in learning web development or tech in general, whether you're a student, graduate, or someone switching careers."
    },
    {
      question: 'Do I need a laptop to join?',
      answer:
        'Yes, having a personal laptop is highly recommended so you can follow along with lessons and complete projects effectively.'
    },
    {
      question: 'Can I join from outside Nigeria?',
      answer: 'Yes! Our programs are remote-friendly and accessible from anywhere in the world.'
    }
  ],

  payment: [
    {
      question: 'How much does the program cost?',
      answer:
        'The cost of the program varies depending on the track you choose. Kindly visit our pricing section or contact our support team for current rates.'
    },
    {
      question: 'Do you offer scholarships?',
      answer:
        'Yes, we occasionally provide scholarships or discounts to outstanding or committed learners. Follow us on social media to stay updated.'
    }
  ],

  programCurriculum: [
    {
      question: 'How long does the program last?',
      answer: 'The core program runs for 3 to 6 months depending on the track and pace of the student.'
    },
    {
      question: 'What technologies will I learn?',
      answer:
        'We cover HTML, CSS, JavaScript, React, Git, and more — with backend and DevOps options available in advanced tracks.'
    },
    {
      question: 'What will I be able to build by the end of the program?',
      answer:
        "You'll build real-world projects including portfolio sites, full-stack apps, and collaborative team projects."
    },
    {
      question: 'Is there a certificate after completion?',
      answer: 'Yes, all graduates receive a certificate of completion upon finishing the program.'
    },
    {
      question: 'What kind of support do students get?',
      answer: 'Mentorship, weekly live sessions, community support, and one-on-one code reviews.'
    },
    {
      question: 'What makes TheFullSnacks Dev different from other tech academies?',
      answer: 'We focus on mentorship, real-world projects, community learning, and career support — not just theory.'
    }
  ],

  careerSupport: [
    {
      question: 'Is there any job placement support after graduation?',
      answer:
        'Yes, we connect top-performing students with hiring partners and provide job interview prep and resume reviews.'
    }
  ]
};

export const faqData = [
  { title: 'Getting Started', id: 'getting-started', questions: groupedFAQs.gettingStarted },
  { title: 'Payment', id: 'payment', questions: groupedFAQs.payment },
  { title: 'Courses & Curriculum', id: 'courses', questions: groupedFAQs.programCurriculum },
  { title: 'Career Support', id: 'career', questions: groupedFAQs.careerSupport }
];

export const content = [
  {
    title: 'Collaborative Learning Experience',
    description:
      "We foster a strong learning community where students share insights, work together, and support each other to enhance understanding. You're never alone on your learning journey.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        <img src="/group.jpg" width={300} height={300} className="h-full w-full object-cover" alt="linear board demo" />
      </div>
    )
  },
  {
    title: 'Learn Anytime, Anywhere',
    description:
      'Gain knowledge at your own pace, from any location. We make learning flexible and accessible, ensuring you have the freedom to choose your learning environment.',
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="/focus.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    )
  },
  {
    title: 'Engaging & Interactive Learning',
    description:
      'Forget outdated materials and boring lectures! Our approach to learning is dynamic, engaging, and designed to spark curiosity, critical thinking, and a love for knowledge.',
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        <img src="/group.jpg" width={300} height={300} className="h-full w-full object-cover" alt="linear board demo" />
      </div>
    )
  },
  {
    title: 'Learn from Top Experts',
    description:
      'Our instructors are carefully selected professionals, ensuring that you receive the best industry-relevant knowledge from experts who truly understand the field.',
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        <img
          src="/code-demo.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    )
  },
  {
    title: 'Career-Driven Learning',
    description:
      "We focus on equipping you with the right skills to advance your career. Whether you're upskilling, changing fields, or starting fresh, our programs are designed to help you achieve success.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        <img
          src="/coding-env.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    )
  }
];
