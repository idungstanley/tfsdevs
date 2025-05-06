'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const FloatingBubble = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <div className="relative flex items-center justify-center py-20 md:py-0">
      {/* Ripple Animation */}
      <motion.div
        initial={{ scale: 1, opacity: 0.4 }}
        animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0, 0.4] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute md:w-[300px] w-[130px] h-[130px] md:h-[300px] rounded-full bg-[#684DF4]"
      />
      <motion.div
        initial={{ scale: 1, opacity: 0.3 }}
        animate={{ scale: [1, 1.8, 1], opacity: [0.3, 0, 0.3] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute md:w-[250px] w-[150px] h-[150px] md:h-[250px] rounded-full bg-blue-500"
      />

      {/* Floating Image Bubble */}
      <motion.div
        initial={{ y: 0 }}
        // animate={{ y: [0, -20, 0] }} // Floating motion
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="relative md:w-[280px] w-[100px] h-[100px] md:h-[280px] rounded-full overflow-hidden shadow-2xl border-[5px] border-white"
      >
        <Image src={imageUrl} width={500} height={500} alt="Floating Bubble" className="w-full h-full object-cover" />
      </motion.div>
    </div>
  );
};

export default FloatingBubble;
