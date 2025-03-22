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
          className={`${classname} z-[999] absolute top-4 right-12 text-gray-700`}
          size={size}
          width={width}
          height={height}
        />
      ) : (
        <HiMenuAlt3
          onClick={handleOpenModal}
          className="text-gray-700"
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
