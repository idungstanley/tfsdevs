'use client';

import { useState, useEffect } from 'react';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

interface NavbarProps {
  color?: string;
  zIndex?: string;
  sticky?: boolean;
}

const Navbar = ({ color = 'text-black dark:text-white', zIndex = 'z-[999]', sticky = false }: NavbarProps) => {
  const [isSticky, setIsSticky] = useState(sticky);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 200); // Becomes sticky after scrolling 200px
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`
        ${zIndex} w-full h-[10vh] flex items-center px-4 inset-x-0
       duration-300 ease-in-out
        ${
          isSticky
            ? 'fixed top-0 left-0 transition-all duration-500 ease-in-out right-0 border-b-4 transform-border border-[#684DF4] bg-gray-900/90 backdrop-blur-md rounded-none shadow-none animate-slide-down'
            : 'relative bg-gray-900 rounded-full shadow-lg opacity-100'
        }
        mb-1 ${color}
      `}
    >
      <DesktopNav />
      <MobileNav />
    </nav>
  );
};

export default Navbar;
