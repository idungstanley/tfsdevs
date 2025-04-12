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
