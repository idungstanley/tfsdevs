'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CursorFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      className="fixed top-0 z-[99999] left-0 w-5 h-5 border border-[#684DF4] bg-transparent rounded-full pointer-events-none shadow-lg hidden md:block"
      animate={{ x: position.x - 12, y: position.y - 12 }} // Center the ball
      transition={{ type: 'spring', stiffness: 100, damping: 40 }}
    />
  );
};

export default CursorFollower;
