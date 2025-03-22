import React from 'react';
import { BsArrowUpRightCircleFill } from 'react-icons/bs';
import Button from '../button/Button';
import Link from 'next/link';
import Image from 'next/image';
import { navItems, socials } from '@/app/constants/navigation';

const Footer = () => {
  return (
    <footer className="md:px-20 p-6 pt-20 flex bg-[#ECE0FF] flex-col md:gap-20 gap-10 w-full">
      <div className="flex flex-col md:flex-row md:items-center justify-between w-full gap-6">
        <div className="flex flex-col gap-4">
          <h1 className="font-[700] text-black md:text-[45px] text-[30px]">
            Join the <span className="text-[#b49aeb]">Community</span>
          </h1>
          <p className="text-[14px]">Here we believe that learning thrives through collaboration</p>
          <div className="flex items-center justify-between p-1 bg-[#E3D4FB] rounded-full w-full md:w-[400px] px-2">
            <input type="text" placeholder="Enter your email" className="focus:outline-none px-2 w-full" />
            <Button
              label="Subscribe"
              width="w-fit"
              buttonStyle="custom"
              height="h-[36px]"
              labelSize="text-[15px] font-lg rounded-md"
              customClasses="cursor-pointer text-white bg-[#b49aeb] px-2 rounded-full"
              icon={<BsArrowUpRightCircleFill className="text-white text-[20px]" />}
              iconPosition="right"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 items-start md:items-end text-[14px]">
          <h5 className="text-[#b49aeb] font-bold">Contact</h5>
          <p>Monday - Sunday</p>
          <p>8:00am - 5:00pm</p>
          <p>thefullsnackdevs@gmail.com</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-6">
        <div className="flex flex-col gap-8">
          <Link href="/">
            <div className="items-center w-full flex gap-4">
              <Image src="/logo.png" alt="logo" width={500} height={500} className="h-[50px] w-[60px]" />
              <p className="font-[800]">TheFullSnackDev</p>
            </div>
          </Link>
          <p className="text-gray-700 text-[12px]">@2024theFullSnackDev.copyright</p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-10 text-[14px]">
          {navItems.map((item, index) => (
            <Link key={index} href={item.url}>
              {item.title}
            </Link>
          ))}
        </div>
        <div className="flex-col flex justify-between gap-5">
          <div className="flex items-center md:gap-3 gap-6 text-[#b49aeb]">
            {socials.map((item, index) => (
              <Link
                key={index}
                href={item.url}
                className="size-7 bg-white rounded-full flex items-center justify-center"
              >
                {item.icon}
              </Link>
            ))}
          </div>
          <p className="text-gray-700 text-[12px]">Terms and condition</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
