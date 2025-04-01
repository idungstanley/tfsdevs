'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import Button from '../button/Button';
import { navItems } from '@/app/constants/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCartPlus, FaSearch } from 'react-icons/fa';

const DesktopNav = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <div className="lg:flex items-center justify-between px-10 w-full hidden text-white">
      <Link href="/">
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
                <button className="text-white font-medium hover:text-[#736e89] cursor-pointer">
                  {item.label} &#x25BE;
                </button>
                <AnimatePresence>
                  {activeDropdown === item.label && (
                    <motion.ul
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-2 bg-white shadow-lg rounded-md w-fit min-w-40 p-2 pointer-events-auto"
                    >
                      {item.children.map((child, idx) => (
                        <li key={idx}>
                          <Link
                            href={child.route}
                            className="block px-4 py-2 text-gray-800 hover:bg-gray-200 rounded-md hover:text-[#684DF4] text-nowrap"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link href={item.route} className="text-white font-medium hover:text-[#684DF4]">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-2 md:gap-4">
        <div className="flex items-center gap-2 md:gap-5">
          <div className="flex items-center justify-end w-full gap-5">
            <Link href="https://shop.thefullsnackdevs.com" target='_blank'>
              <FaCartPlus className="transition-transform hover:text-[#684DF4] duration-300 ease-in-out hover:scale-110 cursor-pointer hover:shadow-md hover:opacity-90 text-white text-xl" />
            </Link>
            <FaSearch className="transition-transform hover:text-[#684DF4] duration-300 ease-in-out hover:scale-110 cursor-pointer hover:shadow-md hover:opacity-90 text-white text-xl" />
            <Link href="/auth/login">
              <Button
                label="Login"
                width="w-[120px]"
                buttonStyle="custom"
                height="h-[36px]"
                labelSize="text-[15px] font-lg rounded-md"
                customClasses="cursor-pointer text-[#080F1C] border border-[#684DF4] hover:text-white hover:bg-[#684DF4] bg-white rounded-full transition-transform duration-300 ease-in-out hover:scale-110 hover:opacity-90"
              />
            </Link>
            <Link href="/auth/enroll">
              <Button
                label="Enroll now"
                width="w-fit"
                buttonStyle="custom"
                height="h-[36px]"
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
