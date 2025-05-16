'use client';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import { motion } from 'framer-motion';

interface NavbarProps {
  color?: string;
  zIndex?: string;
}

const Navbar = ({ color = 'text-black dark:text-white', zIndex = 'z-[999]' }: NavbarProps) => {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.1, ease: 'easeOut' }}
    >
      <nav
        className={`
        ${zIndex} w-[90%] fixed justify-self-center md:h-[10vh] h-[8vh] flex items-center px-4 inset-x-0
       duration-300 ease-in-out bg-[#111111] border border-gray-600 rounded-full shadow-lg opacity-100
        
        mb-1 ${color}
      `}
      >
        <DesktopNav />
        <MobileNav />
      </nav>
    </motion.div>
  );
};

export default Navbar;
