'use client';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

interface NavbarProps {
  bgColor?: string;
  color?: string;
  border?: string;
  intialColour?: string;
  borderColour?: string;
  hoverColor?: string;
  iconColor?: string;
  zIndex?: string;
}

const Navbar = ({
  color = 'text-black dark:text-white',
  zIndex = 'z-[999]'
}: NavbarProps) => {
  return (
    <nav
      className={`${zIndex} flex-shrink-0 w-full h-[10vh] top-0 flex items-center right-0 left-0 bg-[#080F1C] rounded-full  mb-1 ${color}`}
    >
      <DesktopNav />
      <MobileNav />
    </nav>
  );
};

export default Navbar;
