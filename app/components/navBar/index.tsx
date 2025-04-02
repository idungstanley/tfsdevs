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
      setIsSticky(window.scrollY > 200); // Becomes sticky after scrolling 10px
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`${zIndex} w-full h-[10vh] flex items-center px-4 right-0 left-0 
      transition-opacity duration-300 ease-in-out
      ${isSticky ? 'fixed top-0 rounded-none opacity-100' : 'rounded-full shadow-lg relative'}
     mb-1 bg-[#080F1C] ${color}`}
    >
      <DesktopNav />
      <MobileNav />
    </nav>
  );
};

export default Navbar;
