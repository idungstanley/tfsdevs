'use client';
import { motion, MotionValue } from 'motion/react';
import React from 'react';
import { cn } from '@/lib/utils';
import { Spotlight } from '@/app/components/ui/spot-light';
import CustomSearchBar from '@/app/components/CustomSearchBar';

export const FilterHackatonGemini = ({
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
          Pick a Hackathon That inspires you then,
          <span className="text-[#684DF4]">Go build the Future</span>
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
          <CustomSearchBar />
        </motion.div>
      </div>
    </div>
  );
};
