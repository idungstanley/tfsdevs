'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { BsArrowUpRightCircleFill } from 'react-icons/bs';
import Button from '../button/Button';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="md:px-20 p-6 flex items-center bg-cover bg-no-repeat box-border pt-10 h-[80vh]">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="flex flex-col gap-3 md:w-1/2 w-full"
      >
        <motion.h1
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="font-[700] text-white md:text-[50px] text-[35px]"
        >
          TheFullSnackDevs Building <span className="text-[#684DF4]">Africa’s Biggest</span> Developer Community<span className="text-[#684DF4]">.</span>
        </motion.h1>

        <motion.p
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="text-[16px] text-[#E6E6E6]"
        >
          Track your progress, access expert resources, and master new skills at your own pace. Keep your educational
          journey moving forward.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.1, ease: 'easeOut' }}
          className="flex items-center gap-6 mt-4"
        >
          <Button
            label="Get Started"
            width="w-fit"
            buttonStyle="custom"
            height="h-[45px]"
            labelSize="text-[15px] font-lg rounded-md"
            customClasses="cursor-pointer text-white bg-[#684DF4] px-2 rounded-full transition-transform duration-300 ease-in-out hover:scale-110 hover:opacity-90"
            icon={<BsArrowUpRightCircleFill className="text-white text-[20px]" />}
            iconPosition="right"
          />
          <Link href="/auth/enroll">
            <Button
              label="Browse our courses"
              width="w-fit"
              buttonStyle="custom"
              height="h-[45px]"
              labelSize="text-[15px] font-lg"
              customClasses="text-white hover:text-black hover:bg-white cursor-pointer border border-white rounded-full transition-transform duration-300 ease-in-out hover:scale-110 hover:opacity-90"
            />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
