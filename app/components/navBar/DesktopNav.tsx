'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import Button from '../button/Button';
import { navItems } from '@/app/constants/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import HyphenIcon from '@/public/HyphenIcon';
import PlusIcon from '@/public/PlusIcon';
import ArrowRightIcon from '@/public/ArrowRightIcon';
import { usePathname } from 'next/navigation';

const DesktopNav = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  return (
    <div className="lg:flex items-center justify-between px-10 w-full hidden text-white">
      <Link href="/" onClick={() => history.pushState(null, '', '/')}>
        <div className="items-center justify-center w-full flex hover:text-[#684DF4]">
          <Image src="/iconpurple.svg" alt="logo" width={500} height={500} className="h-[50px] w-[60px]" />
          <Image src="/logotext.svg" alt="logo" width={500} height={500} className="h-[50px] w-[60px]" />
        </div>
      </Link>
      <ul className="flex space-x-6">
        {navItems.map((item, index) => (
          <li key={index} className="relative">
            {item.children ? (
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="text-white font-medium hover:text-[#736e89] cursor-pointer flex items-center gap-1">
                  <span>{item.label}</span> {activeDropdown === item.label ? <HyphenIcon /> : <PlusIcon />}
                </button>
                <AnimatePresence>
                  {activeDropdown === item.label && (
                    <motion.ul
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-2 bg-[#222523bf] shadow-lg rounded-md w-fit min-w-40 p-2 pointer-events-auto"
                    >
                      {item.children.map((child, idx) => (
                        <li key={idx}>
                          <Link
                            onClick={() => history.pushState(null, '', child.route)}
                            href={child.route}
                            className="group relative flex flex-col gap-1 px-4 py-2 text-white rounded-md transition-all text-nowrap"
                          >
                            <div className="flex items-center justify-between gap-4">
                              <span className="group-hover:text-[#684DF4] transition-colors">{child.label}</span>
                              <ArrowRightIcon />
                            </div>

                            {/* Hover underline */}
                            <div className="h-0.5 bg-[#684DF4] w-0 transition-all duration-500 origin-left rounded-full group-hover:w-full"></div>
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                onClick={() => history.pushState(null, '', item.route)}
                href={item.route}
                className={`text-nowrap font-medium hover:text-[#684DF4] transition-all relative px-2 py-1 ${
                  pathname === item.route ? 'border-2 border-white text-[#684DF4] rounded-full' : 'text-white'
                }`}
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-2 md:gap-4">
        <div className="flex items-center gap-2 md:gap-5">
          <div className="flex items-center justify-end w-full gap-5">
            <Link href="/auth/login" onClick={() => history.pushState(null, '', '/auth/login')}>
              <Button
                label="Log in"
                width="w-[65px]"
                buttonStyle="custom"
                height="h-[32px]"
                labelSize="text-[15px] font-lg"
                customClasses="cursor-pointer text-white hover:text-white hover:bg-[#684DF4]  rounded-full transition-transform duration-300 ease-in-out hover:scale-110 hover:opacity-90"
              />
            </Link>
            <Link href="/auth/signup" onClick={() => history.pushState(null, '', '/auth/signup')}>
              <Button
                label="Sign up"
                width="w-fit"
                buttonStyle="custom"
                height="h-[32px]"
                labelSize="text-[15px] font-lg"
                customClasses="text-[#684DF4] hover:text-white hover:bg-[#684DF4] cursor-pointer border border-[#684DF4] rounded-full transition-transform duration-300 ease-in-out hover:scale-110 hover:opacity-90"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopNav;
