import { Compass, Globe, LayoutGrid, Route, ScrollText, Trophy } from "lucide-react";
import { AiFillInstagram } from "react-icons/ai";
import { FaCloud, FaDatabase, FaFacebook, FaNetworkWired } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

export const navItems = [
  { label: 'About us', route: '/about' },
  { label: 'Experience', route: '/experience' },
  {
    label: 'Courses',
    children: [
      { label: 'Frontend Development', route: '/courses/frontend' },
      { label: 'Backend Development', route: '/courses/backend' },
      { label: 'Fullstack Development', route: '/courses/fullstack' },
      { label: 'UI/UX', route: '/courses/ui-ux' },
      { label: 'Data Analysis', route: '/courses/data-analysis' }
    ]
  },
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
  { title: 'Experience', url: '/experience' },
  { title: 'Courses', url: '/courses' },
  { title: 'FAQ', url: '/faq' },
  { title: 'Contact', url: '/contact' }
];

export const cardData = [
  {
    title: 'IT Management',
    description: 'Promote transparent materials and stand-alone strategic theme areas.',
    icon: <FaNetworkWired className="text-[#684DF4] text-[14px]" />
  },
  {
    title: 'Cloud Computing',
    description: 'Enable secure, scalable cloud solutions for businesses.',
    icon: <FaCloud className="text-[#684DF4] text-[14px]" />
  },
  {
    title: 'Database Systems',
    description: 'Manage and optimize data storage with high availability.',
    icon: <FaDatabase className="text-[#684DF4] text-[14px]" />
  },
  {
    title: 'Cyber Security',
    description: 'Protect critical assets and prevent cyber threats effectively.',
    icon: <FaNetworkWired className="text-[#684DF4] text-[14px]" />
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
