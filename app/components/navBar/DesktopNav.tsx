'use client';
import Link from 'next/link';
import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import Button from '../button/Button';
import { navItems } from '@/app/constants/navigation';

const DesktopNav = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = (item: string) => {
    router.push(item);
  };

  return (
    <div className="lg:flex items-center justify-between px-4 w-full hidden text-gray-700">
      <Link href="/">
        <div className="items-center justify-center w-full flex gap-4">
          <Image src="/logo.png" alt="logo" width={500} height={500} className="h-[50px] w-[60px]" />
          <p className="font-[800]">TheFullSnackDev</p>
        </div>
      </Link>
      <div className="text-gray-700 flex text-sm gap-6 ml-9">
        {navItems.map((item, index) => (
          <div
            key={index}
            onClick={() => handleClick(item.url)}
            className={`cursor-pointer relative group transition-all duration-300 ${
              pathname === item.url ? 'underline' : ''
            }`}
          >
            <p className="group-hover:text-[#b49aeb] group-hover:font-bold transition-all duration-300">{item.title}</p>
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#b49aeb] transition-all duration-300 group-hover:w-full"></span>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 md:gap-4">
        <div className="flex items-center gap-2 md:gap-5">
          <div className="flex items-center justify-end w-full gap-4">
            <Link href="/auth/signup">
              <Button
                label="Sign up"
                width="w-[120px]"
                buttonStyle="custom"
                height="h-[36px]"
                labelSize="text-[15px] font-lg rounded-md"
                customClasses="cursor-pointer text-white hover:bg-indigo-500 bg-indigo-400 rounded-full"
              />
            </Link>
            <Link href="/auth/login">
              <Button
                label="Enroll now"
                width="w-fit"
                buttonStyle="custom"
                height="h-[36px]"
                labelSize="text-[15px] font-lg"
                customClasses="text-[#3A414CE5] hover:text-white hover:bg-[#b49aeb] cursor-pointer border border-[#b49aeb] rounded-full"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopNav;
