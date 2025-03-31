'use client'
import { motion } from 'framer-motion';
import Button from './Button';
import { ReactNode } from 'react';

interface AnimatedButtonProps {
  label: string;
  customClasses?: string;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  animationProps?: {
    animate?: object;
    transition?: object;
  };
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  label,
  customClasses = '',
  icon,
  iconPosition = 'right',
  animationProps
}) => {
  return (
    <motion.div
      animate={{ x: [-20, 10, -20] }} // Moves left and right
      transition={animationProps?.transition || { repeat: Infinity, duration: 4, ease: 'easeInOut' }} // Smooth infinite animation
    >
      <Button
        label={label}
        width="w-fit"
        buttonStyle="custom"
        height="h-[50px]"
        labelSize="text-[15px] font-lg rounded-md"
        customClasses={`cursor-pointer px-2 rounded-full ${customClasses}`}
        icon={icon}
        iconPosition={iconPosition}
      />
    </motion.div>
  );
};

export default AnimatedButton;
