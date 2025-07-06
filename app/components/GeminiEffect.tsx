'use client';
import { motion, MotionValue } from 'motion/react';
import React from 'react';
import { cn } from '../lib/utils';
import Button from './button/Button';
import { BsArrowUpRightCircleFill } from 'react-icons/bs';
import Link from 'next/link';
import { Spotlight } from './ui/spot-light';

// const transition = {
//   duration: 0,
//   ease: 'linear'
// };

export const GeminiEffect = ({
  //   title,
  description,
  className
}: {
  pathLengths: MotionValue[];
  title?: string;
  description?: string;
  className?: string;
}) => {
  return (
    <div className={cn('', className)}>
      <div
        className={cn(
          'pointer-events-none absolute inset-0 [background-size:40px_40px] select-none',
          '[background-image:linear-gradient(to_right,#1d1d1d_1px,transparent_1px),linear-gradient(to_bottom,#1d1d1d_1px,transparent_1px)]'
        )}
      />
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="white" />
      <div className="relative z-10 md:mx-auto w-full md:max-w-7xl p-4 pt-20 md:pt-0">
        <p className="text-3xl md:text-7xl font-normal pb-4 text-center bg-clip-text text-transparent bg-gradient-to-b w-full flex flex-col items-center z-10 from-neutral-100 to-neutral-300">
          TheFullSnackDevs Building <span className="text-[#684DF4]">Africa’s Biggest</span> Developer Community
        </p>
        <p className="text-sm md:text-xl font-normal text-center text-neutral-400 mt-4 max-w-2xl mx-auto">
          {description ||
            `Scroll this component and see the bottom SVG come to life wow this
        works!`}
        </p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.1, ease: 'easeOut' }}
          className="flex items-center gap-6 mt-10 justify-center"
        >
          <Link href="/auth/signup">
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
          </Link>
          <Link href="/courses">
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
      </div>
    </div>
  );
};
