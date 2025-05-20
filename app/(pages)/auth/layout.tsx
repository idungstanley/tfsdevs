'use client';
import DShapeSlider from '@/app/components/slider/DShapeSlider';
import { displayItemsSample } from '@/app/constants/authData';
import React, { ReactNode, useState } from 'react';
import { ToastContainer } from 'react-toastify';

const AuthLayout = ({ children }: { children: ReactNode }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full">
      <div className="md:w-1/2 w-full shrink-0 h-[300px] md:h-screen flex items-center justify-center bg-gray-900 text-white">
        <DShapeSlider displayItems={displayItemsSample} activeIndex={activeIndex} setActiveIndex={setActiveIndex}>
          <div className="text-white">
            <h1 className="text-3xl font-bold">{displayItemsSample[activeIndex].sloganHeader}</h1>
            <p className="text-lg mt-2">{displayItemsSample[activeIndex].sloganText}</p>
          </div>
        </DShapeSlider>
      </div>
      <div className="md:w-1/2 w-full h-full md:h-screen bg-white md:overflow-y-auto">{children}</div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default AuthLayout;
