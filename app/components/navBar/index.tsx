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
  border = 'border-b-[1.5px]',
  borderColour = 'border-[#C9B3EF]',
  zIndex = 'z-[999]'
}: NavbarProps) => {
  return (
    <nav
      className={`${zIndex} flex-shrink-0 w-full fixed h-[8vh] top-0 flex items-center right-0 left-0 bg-white  mb-1 ${borderColour} ${border} ${color}`}
    >
      <DesktopNav />
      <MobileNav />
    </nav>
  );
};

export default Navbar;
