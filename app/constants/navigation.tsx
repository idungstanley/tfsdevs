import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

export const navItems = [
  { label: 'About us', route: '/about' },
  {
    label: 'Services',
    children: [
      { label: 'Web Development', route: '/services/web-development' },
      { label: 'Mobile Apps', route: '/services/mobile-apps' }
    ]
  },
  { label: 'Experience', route: '/experience' },
  {
    label: 'Courses',
    children: [
      { label: 'React', route: '/courses/react' },
      { label: 'Next.js', route: '/courses/nextjs' }
    ]
  },
  { label: 'FAQ', route: '/faq' },
  { label: 'Contact', route: '/contact' }
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