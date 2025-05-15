import { Compass, Globe, LayoutGrid, Route, ScrollText, Trophy } from "lucide-react";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

export const navItems = [
  { label: 'About program', route: '/about' },
  // { label: 'Experience', route: '/experience' },
  {
    label: 'Bootcamp',
    children: [
      { label: 'Frontend Development', route: '/bootcamp/frontend' },
      { label: 'Backend Development', route: '/bootcamp/backend' },
      { label: 'Fullstack Development', route: '/bootcamp/fullstack' },
      { label: 'UI/UX', route: '/bootcamp/ui-ux' },
      { label: 'Data Analysis', route: '/bootcamp/data-analysis' }
    ]
  },
  {label: 'Courses', route: '/courses'},
  { label: 'FAQ', route: '/faq' },
  { label: 'Pricing', route: '/pricing' },
];

export const socials = [
  { label: 'facebook', url: '', icon: <FaFacebook /> },
  { label: 'twitter', url: '', icon: <RiTwitterXLine /> },
  { label: 'instagram', url: '', icon: <AiFillInstagram /> },
];

export const footerItems = [
  { title: 'About us', url: '/about' },
  { title: 'Services', url: '/services' },
  // { title: 'Experience', url: '/experience' },
  { title: 'Courses', url: '/courses' },
  { title: 'FAQ', url: '/faq' },
  { title: 'Contact', url: '/contact' }
];

export const cardData = [
  {
    title: 'Frontend Development',
    description: 'Build interactive, responsive, and high-performance user interfaces using modern web technologies.',
    src: '/react.webp'
  },
  {
    title: 'Backend Development',
    description: 'Design robust server-side logic and APIs that power scalable and secure web applications.',
    src: '/node-js.png'
  },
  {
    title: 'Data Analysis',
    description: 'Extract insights from raw data to drive smarter decisions using analytical tools and techniques.',
    src: '/data-analysis.png'
  },
  {
    title: 'Cyber Security',
    description: 'Implement advanced strategies to secure systems, networks, and data from cyber threats.',
    src: '/cyber-security.png'
  },
  {
    title: 'UI - UX',
    description:
      'Craft intuitive and visually compelling digital experiences that prioritize user needs and usability.',
    src: '/figma.avif'
  }
];



export const descData = [
  {
    icon: <Route className="w-8 h-8" />,
    title: 'Learning Paths',
    description:
      'Pick your goal, and get a recommended set of courses complete with electives, editor notes, and progress tracking.'
  },
  {
    icon: <Compass className="w-8 h-8" />,
    title: 'Advanced Player',
    description:
      'All courses are presented in a custom built player, complete with annotations, notes, transcripts, lesson descriptions, progress syncing, and much more!'
  },
  {
    icon: <Trophy className="w-8 h-8" />,
    title: 'Interact with Masters',
    description:
      'Access to Live Workshops – gain access to our live streamed workshops where you can participate with QA and chat, and learn alongside the masters!'
  },
  {
    icon: <ScrollText className="w-8 h-8" />,
    title: 'Course Completion Certificates',
    description:
      "After completing a course, you'll receive a certificate that serves as proof of your achievement, showcasing your expertise, and commitment to professional development."
  },
  {
    icon: <LayoutGrid className="w-8 h-8" />,
    title: 'Personalized Dashboard',
    description:
      'Allows you to rearrange and prioritize courses, upcoming workshops, current learning paths, notes, and more.'
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: 'Learn Anywhere',
    description:
      'iOS and Android – featuring offline playback, our tablet and phone apps let you take everything with you wherever you go.'
  }
];
