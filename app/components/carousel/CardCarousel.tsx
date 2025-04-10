'use client';
import { useState, useEffect, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { LuArrowRight } from 'react-icons/lu';
import { useMediaQuery } from 'react-responsive';

interface CardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

interface CarouselProps {
  cards: CardProps[];
  interval?: number;
  primaryColor?: string;
}

const Carousel: React.FC<CarouselProps> = ({ cards, interval = 3000, primaryColor = '#684DF4' }) => {
  const [index, setIndex] = useState(0);
  const isMobile = useMediaQuery({ maxWidth: 900 });

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, interval);

    return () => clearInterval(slideInterval);
  }, [interval, cards.length]);

  return (
    <div className="relative w-full flex items-center justify-center overflow-x-hidden overflow-y-hidden md:overflow-y-auto md:h-[300px] h-[250px] flex-col md:flex-row">
      <motion.div
        className="flex gap-4 md:gap-6 w-full md:w-[900px] h-full"
        animate={{ x: `-${index * (isMobile ? 100 : 25)}%` }} // Moves the cards smoothly left
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        style={{ display: 'flex', width: `${cards.length * (isMobile ? 100 : 25)}%` }}
      >
        {cards.concat(cards.slice(0, 4)).map(
          (
            card,
            i // Duplicating the first 3 cards for infinite loop effect
          ) => (
            <div
              className="relative p-6 rounded-xl shadow-lg bg-[#111111]/90 flex flex-col items-center text-center shrink-0 md:h-full w-[300px] md:w-[23.2%]  md:max-h-[250px] max-h-[200px]"
              key={i}
            >
              <div className="flex flex-col items-center text-center shrink-0 w-full">
                <div className="relative">
                  <div className="bg-gray-200 p-4 text-[10px] rounded-full">{card.icon}</div>
                  <div
                    className="absolute -top-2 -right-2"
                    style={{
                      backgroundColor: primaryColor,
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%'
                    }}
                  ></div>
                  <div
                    className="absolute bottom-0 left-0"
                    style={{
                      backgroundColor: primaryColor,
                      width: '4px',
                      height: '4px',
                      borderRadius: '50%'
                    }}
                  ></div>
                </div>
                <h2 className="mt-4 text-white text-lg font-bold">{card.title}</h2>
                <p className="text-white text-sm mt-2">{card.description}</p>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="mt-4 w-8 h-8 flex items-center justify-center rounded-full text-white shadow-lg absolute -bottom-4 bg-[#684DF4] hover:text-[#684DF4] hover:bg-[white]"
              >
                <LuArrowRight />
              </motion.button>
            </div>
          )
        )}
      </motion.div>
    </div>
  );
};

export default Carousel;
