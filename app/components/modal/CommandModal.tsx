'use client';
import { useResize } from '@/app/hooks/useResize';
import useResolution from '@/app/hooks/useResolution';
import React, { useEffect, useRef, useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { useClickAway } from 'react-use';
import Image from 'next/image';
import { CommandProps } from '@/app/types/index.interface';
import { RESOLUTION_TYPES } from '@/app/constants/resolution';
import { LOCALSTORAGE_KEY } from '@/app/constants/localStorage';

function CommandModal({
  commandVisible,
  children,
  setPopup,
  showCloseIcon = false,
  onCloseCommandModal,
  styling = 'top-0',
  showBottomContent = false,
  bottomContent,
  modalDefaultSize = 500,
  bg_color = 'bg-[#FCFCFC] dark:bg-brand-dark dark:bg-opacity-none',
  headerText,
  padding = 'md:p-4 p-4 md:pr-4',
  maxHeight = 'md:max-h-[600px] h-full',
  showHeaderBorder = false,
  bottomHeight = '64px',
  bottomMargin = '64px',
  classes = 'md:rounded-[15px]',
  animation = 'transition-transform duration-1000 ease-out transform'
}: CommandProps) {
  const dropdownRef = useRef(null);
  const resolution = useResolution();

  const [showContent, setShowContent] = useState(false);
  const { blockRef, Dividers, size, isDrag } = useResize({
    dimensions: {
      min: 400,
      max: 900
    },
    storageKey: LOCALSTORAGE_KEY.MODAL_WIDTH,
    direction: 'XR',
    defaultSize: modalDefaultSize
  });

  useClickAway(dropdownRef, () => {
    setPopup(false);
    onCloseCommandModal();
  });

  const handleClose = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setPopup(false);
    setShowContent(false);
    onCloseCommandModal();
  };

  useEffect(() => {
    if (commandVisible) {
      document.body.style.overflow = 'hidden'; // Disable scrolling
      setTimeout(() => setShowContent(true), 100); // Slight delay to trigger the transition
    } else {
      document.body.style.overflow = 'auto'; // Re-enable scrolling
      setShowContent(false);
    }

    // Cleanup function to reset overflow when modal is unmounted
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [commandVisible]);

  if (!commandVisible) return null;
  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-[1000000] flex items-center justify-center w-full h-full mb-6 bg-[#ffffff]/40 bg-opacity-50 dark:bg-brand-dark dark:bg-opacity-50 ${styling} backdrop-opacity-50 transition-opacity duration-100 ease-out ${
        showContent ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div
        className={`flex flex-col border border-border-light dark:border-border-dark ${bg_color} md:w-fit md:h-fit ${maxHeight} h-full w-full relative ${classes} items-start  ${animation}
        ${isDrag && 'border-brand-base border-r-4 overflow-y-auto md:overflow-hidden cursor-col-resize'} 
        ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-48 opacity-0'}`}
        ref={dropdownRef}
      >
        <Dividers />
        <div
          className={`flex justify-between items-center  w-full ${
            showHeaderBorder ? 'border-b border-border-light dark:border-border-dark' : ''
          } ${headerText ? 'px-4 py-4' : ''}`}
        >
          <div className="flex items-center md:hidden" onClick={handleClose}>
            <Image src="/images/arrow_back.png" alt="arrow" width={100} height={100} className="w-6 h-6" />
            <p className="font-semibold dark:text-white">Back</p>
          </div>
          {headerText && (
            <p className="w-full md:text-start text-center md:font-semibold font-bold">
              {headerText as string}
            </p>
          )}
          {showCloseIcon && (
            <span
              className="text-xl cursor-pointer hover:rotate-270 transition-all ease-in-out dark:text-default-dark text-default-light  w-[42px] h-[42px]  justify-center items-center rounded-full md:flex hidden"
              onClick={handleClose}
            >
              <IoMdClose className="cursor-pointer" />
            </span>
          )}
        </div>
        <div
          className="md:h-full md:max-h-[600px] h-full rounded w-full overflow-auto scrollbar-hide"
          style={{
            width: resolution === RESOLUTION_TYPES.MOBILE ? '100%' : size,
            marginBottom: showBottomContent ? bottomMargin : '0'
          }}
          ref={blockRef}
        >
          <section className={`flex flex-col items-start h-full gap-4  md:justify-center header ${padding}`}>
            {children}
          </section>
        </div>
        {showBottomContent && (
          <div
            className={`fixed rounded-b-[15px] z-[9999] bg-white dark:bg-brand-dark border-t border-border-light dark:border-border-dark bottom-0 left-0 right-0 w-full flex items-center justify-center ${bottomHeight}`}
            style={{ height: bottomHeight }}
          >
            {bottomContent}
          </div>
        )}
      </div>
    </div>
  );
}

export default CommandModal;
