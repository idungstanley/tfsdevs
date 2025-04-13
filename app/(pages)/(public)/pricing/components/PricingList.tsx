'use client';
import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import PricingCard from '@/app/components/card/PricingCard';
import { courses } from '@/app/constants';

const PricingCardList: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [centerIndex, setCenterIndex] = useState(2);

  const handleScroll = () => {
    if (containerRef.current) {
      const scrollLeft = containerRef.current.scrollLeft;
      const cardWidth = 250 + 16;
      const newCenterIndex = Math.round(scrollLeft / cardWidth);
      setCenterIndex(newCenterIndex);
    }
  };

  // Handle click to focus a card
  const handleCardClick = (index: number) => {
    setCenterIndex(index);
    if (containerRef.current) {
      const cardWidth = 250 + 16;
      containerRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      });
    }
  };

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
        <h2 className="text-white text-3xl font-bold text-center mb-8">Choose Your Learning Path</h2>
        <div
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 py-14 h-full px-10"
          style={{ scrollBehavior: 'smooth' }}
          ref={containerRef}
        >
          {courses.map((course, index) => (
            <motion.div
              key={index}
              className="snap-center flex-shrink-0 border-2 cursor-pointer h-fit"
              variants={cardVariants}
              animate={index === centerIndex ? 'center' : 'offCenter'}
              whileTap={{ scale: 1.05 }}
              drag="x"
              dragConstraints={containerRef}
              dragElastic={0.2}
              onDragEnd={() => handleScroll()}
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
