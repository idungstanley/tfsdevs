'use client';
import { HeroHighlight, Highlight } from '@/app/components/ui/hero-highlight';
import { HoverEffect } from '@/app/components/ui/hover-effect';
import { StickyScroll } from '@/app/components/ui/sticky-scroll-reveal';
import {projects } from '@/app/constants/courseOfferrings';
import { content } from '@/app/constants/faq';
import { motion } from 'framer-motion';
import React from 'react';

const About = () => {
  return (
    <div className="w-full ">
      <div className="flex items-center justify-center pt-32 px-20">
        <HeroHighlight>
          <motion.h1
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: [20, -5, 0]
            }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1]
            }}
            className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
          >
            <h1 className="font-[700] px-10 text-white md:text-base text-sm text-wrap w-full]">
              [ ABOUT OUR <span className="text-[#684DF4]"> PROGRAM</span> ]
            </h1>
            We are committed to delivering top-tier {''}
            <Highlight className="text-black dark:text-white">
              frontend, backend, full-stack development bootcamp and more..
            </Highlight>
          </motion.h1>
        </HeroHighlight>
      </div>
      <div className="flex flex-col gap-2 bg-[#33333] p-10 text-white px-20">
        <div className="container flex flex-col md:flex-row gap-3 w-full">
          <HoverEffect items={projects} />
        </div>
      </div>
      <div className="w-full py-4">
        <StickyScroll content={content} />
      </div>
    </div>
  );
};

export default About;
