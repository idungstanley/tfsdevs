'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LuArrowRight } from 'react-icons/lu';
import { useMediaQuery } from 'react-responsive';
import Image from 'next/image';
import { CarouselProps } from '@/app/types/index.interface';

const Carousel: React.FC<CarouselProps> = ({ cards, intSec = 3000 }) => {
  const [index, setIndex] = useState(0);
  const isMobile = useMediaQuery({ maxWidth: 900 });

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, intSec);

    return () => clearInterval(slideInterval);
  }, [intSec, cards.length]);

  return (
    <div className="relative w-full flex items-center justify-center overflow-x-hidden overflow-y-hidden md:overflow-y-auto md:h-[300px] h-[250px] flex-col md:flex-row">
      <motion.div
        className="flex gap-4 md:gap-6 w-full md:w-[900px] h-full"
        animate={{ x: `-${index * (isMobile ? 100 : 33.3)}%` }} // Moves the cards smoothly left
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        style={{ display: 'flex', width: `${cards.length * (isMobile ? 100 : 33.3)}%` }}
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
                  <Image
                    src={card.src}
                    alt=""
                    width="500"
                    height="500"
                    className="w-14 h-14 p-1 rounded-full bg-white flex items-center justify-center"
                  />
                </div>
                <h2 className="mt-4 text-white text-lg font-bold">{card.title}</h2>
                <p className="text-white text-sm mt-2">{card.description}</p>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="mt-4 w-8 h-8 flex items-center cursor-pointer justify-center rounded-full text-white shadow-lg absolute -bottom-4 bg-[#684DF4] hover:text-[#684DF4] hover:bg-white transition duration-300 ease-in-out"
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
