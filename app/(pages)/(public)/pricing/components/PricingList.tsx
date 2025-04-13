'use client';
import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import PricingCard from '@/app/components/card/PricingCard';
import { courses } from '@/app/constants';

const PricingCardList: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [centerIndex, setCenterIndex] = useState(2);

  const handleScroll = () => {
    if (containerRef.current && !isDragging) {
      const scrollLeft = containerRef.current.scrollLeft;
      const cardWidth = window.innerWidth >= 640 ? 336 : 296; // card width + gap
      const newCenterIndex = Math.round(scrollLeft / cardWidth);
      setCenterIndex(newCenterIndex);
    }
  };

  const handleCardClick = (index: number) => {
    if (!isDragging) {
      setCenterIndex(index);
      if (containerRef.current) {
        const cardWidth = window.innerWidth >= 640 ? 336 : 296;
        containerRef.current.scrollTo({
          left: index * cardWidth,
          behavior: 'smooth'
        });
      }
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      // Center the middle card on initial load
      const cardWidth = window.innerWidth >= 640 ? 336 : 296;
      container.scrollLeft = cardWidth;
    }
    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      const cardWidth = 250 + 16;
      container.scrollLeft = cardWidth * 2;
    }
    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  // Variants for scaling animation
  const cardVariants = {
    center: {
      scale: 1.1,
      borderColor: '#684DF4',
      transition: { duration: 0.3 },
      borderRadius: '10px'
    },
    offCenter: {
      scale: 0.9,
      borderColor: 'transparent',
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className="py-10 h-full">
      <div className="max-w-7xl mx-auto px-4 h-full">
        <h1 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">Choose Your Plan</h1>
        <p className="text-white text-center mb-12 max-w-2xl mx-auto">
          Select the perfect learning plan that matches your goals
        </p>
        <div
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 py-8 px-4 sm:px-8"
          style={{
            scrollBehavior: 'smooth',
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
          ref={containerRef}
        >
          {courses.map((course, index) => (
            <motion.div
              key={index}
              className="snap-center touch-pan-x flex-shrink-0 border-2 cursor-pointer h-fit"
              variants={cardVariants}
              animate={index === centerIndex ? 'center' : 'offCenter'}
              whileTap={{ scale: 0.98 }}
              drag="x"
              dragConstraints={containerRef}
              dragElastic={0.2}
              onDragStart={() => setIsDragging(true)}
              onDragEnd={() => {
                setIsDragging(false);
                handleScroll();
              }}
              onClick={() => handleCardClick(index)}
            >
              <PricingCard {...course} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingCardList;
