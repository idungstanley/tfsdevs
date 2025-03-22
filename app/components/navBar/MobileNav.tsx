import Link from 'next/link';
import React, { useRef, useState } from 'react';
import Hamburger from '../menu/HamburgerMenu';
import Image from 'next/image';
import Button from '../button/Button';
import { motion } from 'framer-motion';
import { navItems } from '@/app/constants/navigation';

const MobileNav = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const ref = useRef<HTMLDivElement>(null);

  const handleToggleFn = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="flex items-center justify-between w-full px-4 lg:hidden relative">
      <Link href="/">
        <div className="items-center justify-center w-full">
          <Image src="/logo.png" alt="logo" width={500} height={500} className="h-[50px] w-[50px]" />
        </div>
      </Link>
      <div className="flex items-center gap-2 md:gap-4">
        <Hamburger isToggle={menuOpen} size={30} toggleFn={handleToggleFn} />
        <div className={`z-[50] ${menuOpen ? 'fixed inset-0 w-full h-full top-0 flex' : 'hidden'}`}>
          <div
            ref={ref}
            className={`flex flex-col items-center px-10 justify-start w-[80%] h-screen pt-20 z-[30] bg-[#F7F5FF] fixed ${
              menuOpen ? 'right-0' : '-right-[100%]'
            }`}
            style={{ transition: 'all 0.4s ease-in-out' }}
          >
            <div className="flex flex-col items-center justify-between w-full gap-4 text-center">
              <Link href="/auth/signup" className="w-full">
                <Button
                  label="Sign up"
                  width="w-full"
                  buttonStyle="custom"
                  height="h-[36px]"
                  labelSize="text-[15px] font-lg rounded-md"
                  customClasses="cursor-pointer text-white hover:bg-indigo-500 bg-indigo-400 rounded-full"
                />
              </Link>
              <Link href="/auth/login" className="w-full">
                <Button
                  label="Enroll now"
                  width="w-full"
                  buttonStyle="custom"
                  height="h-[36px]"
                  labelSize="text-[15px] font-lg"
                  customClasses="text-[#3A414CE5] hover:text-white hover:bg-[#b49aeb] cursor-pointer border border-[#b49aeb] rounded-full"
                />
              </Link>
            </div>
            {navItems.map((route, idx) => (
              <motion.li
                key={route.title}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 20,
                  delay: 0.1 + idx / 10
                }}
                className="w-full list-none"
              >
                <a
                  onClick={() => setMenuOpen((prev) => !prev)}
                  className="flex items-center justify-start text-[16px] w-full text-black py-4"
                  href={route.url}
                >
                  <span className="flex gap-1 lg:text-[16px] text-[14px] whitespace-nowrap">{route.title}</span>
                </a>
              </motion.li>
            ))}
            <div
              className={`fixed bottom-0 h-[90px] p-4 w-[80%] gap-8 shadow-sm flex items-center justify-center ${
                menuOpen ? 'right-0' : '-right-full'
              }`}
              style={{ transition: 'all 0.4s ease-in-out' }}
            >
              <Image src="/logo.png" alt="logo" width={500} height={500} className="h-[50px] w-[50px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
