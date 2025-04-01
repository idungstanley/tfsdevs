'use client';
import { displayItemsProps } from '@/app/types/index.interface';
import React, { ReactNode, useEffect, useRef } from 'react';

const DShapeSlider = ({
  displayItems,
  children,
  activeIndex,
  setActiveIndex
}: {
  displayItems: displayItemsProps[];
  children: ReactNode;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  activeIndex: number;
}) => {
  const delay = 6000;

  const timeoutRef = useRef<null | NodeJS.Timeout>(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => setActiveIndex((prevIndex: number) => (prevIndex === displayItems.length - 1 ? 0 : prevIndex + 1)),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [activeIndex, displayItems.length, setActiveIndex]);

  return (
    <div className="w-full lg:h-[calc(100vh-55px)] h-full lg:pr-0 pr-8">
      <div
        className="relative flex flex-col items-center justify-center overflow-hidden lg:w-[80%] lg:h-[80%] h-[90%] w-full m-4 lg:m-14 lg:rounded-r-full rounded-md bg-cover bg-no-repeat"
        style={{
          backgroundColor:
            'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 13.86%, rgba(0, 0, 0, 0.90) 79.09%), url(<path-to-image>), lightgray 50% / cover no-repeat'
        }}
      >
        <div
          className="w-[100%] h-[100%] transition-all duration-1000 ease-in-out delay-100 whitespace-nowrap"
          style={{
            transform: `translate3d(${-activeIndex * 100}%, 0, 0)`
          }}
        >
          {displayItems.map((val, index) => (
            <div className="inline-block w-[100%] h-[100%] items-center justify-center" key={index}>
              <div
                style={{
                  objectFit: 'cover',
                  background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 5.77%, rgba(0, 0, 0, 0.25) 27.88%, #000000 85.1%), url(${val?.image})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
                className="w-full h-full bg-cover"
              />
            </div>
          ))}
        </div>
        <div className="absolute bottom-[50px] lg:bottom-[100px] left-10">{children}</div>
        <div className="absolute bottom-[20px] lg:bottom-[50px] left-10">
          {displayItems.map((_, index) => (
            <div
              key={index}
              className={`inline-block h-[3px] w-[14px] rounded-lg cursor-pointer mt-[15px] mr-[7px] ml-[7px] mb-[0px] ${
                activeIndex === index ? 'bg-white' : 'bg-gray-600'
              }`}
              onClick={() => setActiveIndex(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DShapeSlider;
