import React from 'react';
import { motion } from 'framer-motion';
import { BsArrowUpRightCircleFill } from 'react-icons/bs';
import Button from '../button/Button';

const Hero = () => {
  return (
    <section className="md:px-20 p-6 flex items-center bg-cover bg-no-repeat box-border pt-20">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="flex flex-col gap-3 md:w-1/2 w-full"
      >
        <motion.h1
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="font-[700] text-black md:text-[50px] text-[35px]"
        >
          TheFullSnackDev Building <span className="text-[#684DF4]">Africa’s</span> Developer Community, One Line at a
          Time
        </motion.h1>

        <motion.p
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
          className="text-[16px]"
        >
          Track your progress, access expert resources, and master new skills at your own pace. Keep your educational
          journey moving forward.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.6, ease: 'easeOut' }}
        >
          <Button
            label="Get Started"
            width="w-fit"
            buttonStyle="custom"
            height="h-[36px]"
            labelSize="text-[15px] font-lg rounded-md"
            customClasses="cursor-pointer text-white bg-[#684DF4] px-2 rounded-full"
            icon={<BsArrowUpRightCircleFill className="text-white text-[20px]" />}
            iconPosition="right"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
