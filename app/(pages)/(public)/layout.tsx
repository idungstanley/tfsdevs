'use client'
import Footer from '@/app/components/footer';
import Navbar from '@/app/components/navBar';
import SnowEffect from '@/app/components/SnowEffect';
import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

const PublicLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen bg-[#080F1C] w-full">
      <div className="md:px-10 px-4 md:pt-6 pt-4">
        <Navbar />
      </div>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
      >
        <div className="grow flex-1 h-full">{children}</div>
        <Footer />
        <SnowEffect />
      </motion.div>
    </div>
  );
};

export default PublicLayout;
