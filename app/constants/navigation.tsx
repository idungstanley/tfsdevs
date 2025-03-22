import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

export const navItems = [
  { title: 'About', url: '/about' },
  { title: 'Experience', url: '/experience' },
  { title: 'Courses', url: '/courses' },
  { title: 'FAQ', url: '/faq' }
];

export const socials = [
  { label: 'facebook', url: '', icon: <FaFacebook /> },
  { label: 'twitter', url: '', icon: <RiTwitterXLine /> },
  { label: 'instagram', url: '', icon: <AiFillInstagram /> },
];