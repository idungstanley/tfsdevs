'use client';
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { GeminiEffect } from '../GeminiEffect';

const HeroSection = () => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

  return (
    <section className="md:px-20 p-6 flex items-center bg-cover bg-no-repeat box-border md:pt-10 md:h-[500vh] h-[70vh] md:pb-66 pb-40">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="flex flex-col gap-3 h-full w-full"
      >
        <GeminiEffect
          description="Track your progress, access expert resources, and master new skills at your own pace. Keep your educational
          journey moving forward."
          pathLengths={[pathLengthFirst, pathLengthSecond, pathLengthThird, pathLengthFourth, pathLengthFifth]}
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
