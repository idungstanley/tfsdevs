'use client';
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { HackathonGeminiEffect } from './HackathonGeminiEffect';

const HackathonSection = () => {
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
    <section className="md:px-20 p-6 flex items-center bg-cover bg-no-repeat box-border md:pt-56 md:h-[100vh] h-[60vh]  relative">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="flex flex-col gap-3 h-full w-full"
      >
        <HackathonGeminiEffect
          description="A complete platform to organize, judge, and participate in hackathons  all in one seamless experience."
          pathLengths={[pathLengthFirst, pathLengthSecond, pathLengthThird, pathLengthFourth, pathLengthFifth]}
        />
      </motion.div>
    </section>
  );
};

export default HackathonSection;
