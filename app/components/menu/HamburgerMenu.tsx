import { HamburgerProps } from '@/app/types/index.interface';
import React from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import { IoCloseOutline } from 'react-icons/io5';

const Hamburger = ({ isToggle, color, size, toggleFn, width, height, classname }: HamburgerProps) => {
  const handleCloseModal = () => {
    toggleFn(false);
  };
  const handleOpenModal = () => {
    toggleFn(true);
  };
  return (
    <>
      {isToggle ? (
        <IoCloseOutline
          onClick={handleCloseModal}
          className={`${classname} z-[999] absolute -top-2 right-4 text-white`}
          size={size}
          width={width}
          height={height}
        />
      ) : (
        <HiMenuAlt3
          onClick={handleOpenModal}
          className="text-white"
          color={color}
          size={size}
          width={width}
          height={height}
        />
      )}
    </>
  );
};

export default Hamburger;
