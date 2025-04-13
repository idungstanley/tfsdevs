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