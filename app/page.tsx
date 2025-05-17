'use client'
import Navbar from './components/navBar';
import Features from './components/features';
import WhatMakesUsUnique from './components/what-makes-us-unique';
import Reviews from './components/reviews';
import Footer from './components/footer';
import HeroSection from './components/hero';
import { RemoteWorldMap } from './components/remote-map';
import Integrations from './components/Integrations';
import { FeaturesSection } from './components/what-makes-us-unique/Features';
import { Testimonials } from './components/testimonial';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)] bg-[#111111] w-full">
      <div className="bg-cover bg-no-repeat">
        <div className="px-4 pt-6">
          <Navbar />
        </div>
      </div>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
      >
        <HeroSection />
        <Features />
        <RemoteWorldMap />
        <WhatMakesUsUnique />
        <div className="flex flex-col flex-1">
          <FeaturesSection />
          <Integrations />
          <Reviews />
        </div>
        <Testimonials />
        <Footer />
      </motion.div>
    </div>
  );
}
